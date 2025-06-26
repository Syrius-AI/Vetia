import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  ownerName: text("owner_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  petName: text("pet_name").notNull(),
  petType: text("pet_type").notNull(),
  preferredDate: text("preferred_date").notNull(),
  preferredTime: text("preferred_time").notNull(),
  reason: text("reason").notNull(),
  agreedToTerms: integer("agreed_to_terms").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertAppointmentSchema = createInsertSchema(appointments).omit({
  id: true,
  createdAt: true,
}).extend({
  ownerName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  phone: z.string().min(9, "El teléfono debe tener al menos 9 dígitos"),
  email: z.string().email("Email inválido"),
  petName: z.string().min(1, "El nombre de la mascota es requerido"),
  petType: z.string().min(1, "Selecciona el tipo de animal"),
  preferredDate: z.string().min(1, "Selecciona una fecha"),
  preferredTime: z.string().min(1, "Selecciona una hora"),
  reason: z.string().min(10, "Describe el motivo de la consulta (mín. 10 caracteres)"),
  agreedToTerms: z.number().min(1, "Debes aceptar los términos y condiciones"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type Appointment = typeof appointments.$inferSelect;
