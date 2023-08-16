// import { promises as fs } from 'fs';

import { NextApiRequest, NextApiResponse } from 'next';

import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonDirectory = path.join(process.cwd(), 'data');
  const { id } = req.query;
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/jobs.json', 'utf8');

  const data = JSON.parse(fileContents);

  const job = data.jobs.find((job: { id: number }) => `${job.id}` === id);

  if (!job) {
    return res.status(404).json({ message: `Job with id: ${id} not found` });
  }

  return res.status(200).json(job);
}
