import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page } = req.query;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const response = await fetch(
    `https://jobs.github.com/positions.json?page=${page}`
  );

  const data = await response.json();

  return res.status(200).json(data);
}
