import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    sector: z.string(),
    pod: z.string().optional(),
    documentType: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
    readingTime: z.number().positive(),
    tickerSymbols: z.array(z.string()).default([])
  })
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    biography: z.string(),
    headshot: z.string().optional(),
    linkedin: z.url().optional(),
    email: z.email().optional(),
    pod: z.string(),
    graduationYear: z.number().int()
  })
});

export const collections = { publications, authors };
