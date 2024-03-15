import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ScanBottle: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page
    router.push('/');
  }, [router]); // The empty array means this effect runs once on mount

  return null; // Render nothing since we're redirecting
};

export default ScanBottle;