import { pgTable, text, serial, integer, array } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  techStack: text("tech_stack").array().notNull(),
  githubUrl: text("github_url").notNull(),
  imageUrl: text("image_url").notNull()
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull()
});

export const insertProjectSchema = createInsertSchema(projects);
export const insertContactSchema = createInsertSchema(contacts);

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;

export const mockProjects: Project[] = [
  {
    id: 1,
    title: "AI Code Assistant",
    description: "Advanced code completion and suggestion tool",
    techStack: ["Python", "TensorFlow", "React"],
    githubUrl: "https://github.com/sageuniverse/ai-code-assistant",
    imageUrl: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8"
  },
  // Add more mock projects...
];

export const teamMembers = [
  {
    name: "Exo",
    role: "Founder & Lead Developer",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    github: "https://github.com/exo",
    linkedin: "https://linkedin.com/in/exo"
  },
  {
    name: "Sujal",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    github: "https://github.com/sujal",
    linkedin: "https://linkedin.com/in/sujal"
  },
  {
    name: "Parth",
    role: "Backend Developer", 
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    github: "https://github.com/parth",
    linkedin: "https://linkedin.com/in/parth"
  },
  {
    name: "Yash",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    github: "https://github.com/yash",
    linkedin: "https://linkedin.com/in/yash"
  }
];
