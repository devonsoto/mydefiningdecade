import { NextApiRequest } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'definingdecade',
  password: 'rootpassword',
  port: 5432,
});

export async function POST(request: NextApiRequest) {
  return Response.json({ message: 'POST request to the API' });
}
