import { defineCollection, z } from "astro:content";

const showcase = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().min(1),
    image: z.string(),
    url: z.string().url(),
    featured: z.number().min(1).optional(),
  }),
});

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
    author: z.string().default("Astroship"),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"

export const collections = {
  showcase,
  blog: blogCollection,
};
