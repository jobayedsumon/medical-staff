// import { promises as fs } from 'fs';

import { NextApiRequest, NextApiResponse } from 'next';

import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonDirectory = path.join(process.cwd(), 'data');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/news.json', 'utf8');
  res.status(200).json(JSON.parse(fileContents));
}
