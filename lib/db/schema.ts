import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { relations } from "drizzle-orm";

// === TABLE DEFINITIONS ===

export const stakeholders = pgTable("stakeholders", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  cluster: text("cluster").notNull(), // Academics, Industry, Regulator
  institution: text("institution").notNull(), // UI, IPB, UNAIR, etc.
  role: text("role").notNull(),
  contactEmail: text("contact_email"),
  bio: text("bio"),
  joinedAt: timestamp("joined_at").defaultNow(),
});

export const researchWorks = pgTable("research_works", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  abstract: text("abstract"),
  authorId: integer("author_id").references(() => stakeholders.id),
  researchArea: text("research_area").notNull(), // Zakat, Waqf, Syariah Fintech, etc.
  publishedYear: integer("published_year"),
  paperUrl: text("paper_url"),
  university: text("university"), // Specific school
  addedAt: timestamp("added_at").defaultNow(),
});

export const connections = pgTable("connections", {
  id: serial("id").primaryKey(),
  sourceId: integer("source_id").references(() => stakeholders.id).notNull(),
  targetId: integer("target_id").references(() => stakeholders.id).notNull(),
  connectionType: text("connection_type").default("Kolaborator"),
});

// === RELATIONS ===

export const workRelations = relations(researchWorks, ({ one }) => ({
  author: one(stakeholders, {
    fields: [researchWorks.authorId],
    references: [stakeholders.id],
  }),
}));

export const stakeholderRelations = relations(stakeholders, ({ many }) => ({
  researchWorks: many(researchWorks),
}));

export const insertStakeholderSchema = createInsertSchema(stakeholders);
export const insertResearchWorkSchema = createInsertSchema(researchWorks);

export type Stakeholder = typeof stakeholders.$inferSelect;
export type ResearchWork = typeof researchWorks.$inferSelect;
export type Connection = typeof connections.$inferSelect;
