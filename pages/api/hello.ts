// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message?: string
  response?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  try {
    const response = await axios.post('/analytics');

    console.log(response);
    res.status(200).json({ message: 'Success', response: response?.data })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong', response: error })
  }

}
