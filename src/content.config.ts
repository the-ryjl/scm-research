import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const investmentPod = z.enum(['Technology', 'Fixed Income and Credit']);

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    sector: z.string(),
    pod: investmentPod.optional(),
    documentType: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
    readingTime: z.number().positive(),
    tickerSymbols: z.array(z.string()).default([])
  })
});

export const collections = { publications };
