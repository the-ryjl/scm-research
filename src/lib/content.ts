import type { CollectionEntry } from 'astro:content';

export type Publication = CollectionEntry<'publications'>;
export type Author = CollectionEntry<'authors'>;

export const byNewest = (a: Publication, b: Publication) =>
  b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf();

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);

export const slugify = (value: string) =>
  value.toLowerCase().trim().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const getInitials = (name: string) => name.split(' ').map((part) => part[0]).join('').slice(0, 2);
