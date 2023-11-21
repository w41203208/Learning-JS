import { useEffect, useState } from 'react';

interface UseWorkerProps {
  url: string;
}

export const useWorker = ({ url }: UseWorkerProps) => {
  const [worker, setWorker] = useState<Worker | null>(null);

  useEffect(() => {
    console.log('test');
    setWorker(new Worker(url!));
  }, []);

  return worker;
};
