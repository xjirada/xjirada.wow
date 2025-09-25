import { defineCollection, z } from 'astro:content';


export const SITE_TITLE = 'xjirada — CTF/HTB Portfolio';
export const SITE_DESCRIPTION = 'Writeups, tools, and notes on web, pwn, crypto, forensics.';


const writeups = defineCollection({
type: 'content',
schema: z.object({
title: z.string(),
date: z.date(),
summary: z.string(),
platform: z.enum(['CTF', 'HTB']),
difficulty: z.enum(['Easy','Medium','Hard']).optional(),
tags: z.array(z.string()).default([]),
repo: z.string().url().optional(),
external: z.string().url().optional() // if writeup links out
})
});


export const collections = { writeups };