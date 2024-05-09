import type { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '@/lib/db';

export async function GET(request: NextApiRequest) {
  try {
    const { rows } = await pool.query('SELECT * FROM questions');

    return Response.json({ rows });
  } catch (error) {
    return Response.json({ error });
  }
}
