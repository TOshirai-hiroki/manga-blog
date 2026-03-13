import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			category: z.string().default('Manga Review'),
			tags: z.array(z.string()).default([]),
			affiliate: z.boolean().default(false),
			rating: z.number().min(1).max(10).optional(),
			mangaAuthor: z.string().optional(),
			mangaTitleJa: z.string().optional(),
			amazonASIN: z.string().optional(),
			amazonTitle: z.string().optional(),
		}),
});

export const collections = { blog };
