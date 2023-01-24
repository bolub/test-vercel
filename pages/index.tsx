import { Button, HStack } from '@chakra-ui/react';
import { usePlausible } from 'next-plausible';
import axios from 'axios';

export default function Home() {
  const plausible = usePlausible();

  const test = async () => {
    const dataToSend = {
      name: 'Login',
      user: 'Bolu Local',
      url: 'http://test-kikin-events.surge.sh',
      domain: 'test-kikin-events.surge.sh',
    };

    const headers = {
      'User-Agent': navigator.userAgent,
      // 'X-Forwarded-For': x-forwarded,
      'Content-Type': 'application/json',
      Authorization:
        'Bearer mUmYTp5xXBr9D3bZHKUbaO8TPfNy7BetUV29E6mBJi9FPAI4yI-AANCmreZ8JALv',
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
    } catch (error) {
      console.log(error);
    }
  };

  const triggerLoginEventManual = async () => {
    await axios.post('/api/analytics', {
      name: 'Login',
      props: {
        user: 'Bolub',
      },
    });
  };

  return (
    <HStack spacing='20px'>
      <Button onClick={triggerLoginEventManual}>Trigger Login manual</Button>
      <Button
        onClick={() =>
          plausible('Login', {
            props: {
              user: 'Bolu Seyi L',
            },
          })
        }
      >
        Login
      </Button>
      <Button
        onClick={() =>
          plausible('Signup', {
            props: {
              user: 'Bolu Seyi S',
            },
          })
        }
      >
        Sign up
      </Button>
    </HStack>
  );
}
