import { usePlausible } from 'next-plausible';
import { useEffect } from 'react';

export default function Custom404() {
  const plausible = usePlausible();

  useEffect(() => {
    plausible('404');
  }, [plausible]);

  return (
    <>
      <h1>404 - Page Not Found</h1>
    </>
  );
}
