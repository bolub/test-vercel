import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message?: string
  response?: any
}

interface AnalyticsData {
  name?: string;
  props: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { name = 'pageview', props } = req.body as AnalyticsData

  const dataToSend = {
    name,
    url: 'http://test-kikin-events.surge.sh',
    domain: 'test-kikin-events.surge.sh',
    ...props
  };

  const headers = {
    'User-Agent': req.headers['user-agent'],
    'Content-Type': 'application/json',
    Authorization:
      `Bearer ${process.env.PLAUSIBLE_TOKEN}`,
  };

  try {
    const response = await axios.post(
      'https://plausible.io/api/event',
      dataToSend,
      {
        headers,
      }
    );

    console.log(response);
    res.status(200).json({ message: 'Success', response: response?.data })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong', response: error })
  }


}
