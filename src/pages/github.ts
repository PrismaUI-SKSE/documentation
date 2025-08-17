import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect }) => redirect('https://github.com/PrismaUI-SKSE', 307);
