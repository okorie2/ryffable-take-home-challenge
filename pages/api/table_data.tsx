// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { MockData } from "../../utils/data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({
      message: "Data retrieved succesfully",
      data: MockData,
    });
  } else {
    res.status(405).json({
      message: "Method not allowed",
    });
  }
}
