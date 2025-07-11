'use client'; // Required for using hooks

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bg-[#025cca] p-2 text-xl font-bold rounded-full text-white"
    >
      <ArrowLeft />
    </button>
  );
};

export default BackButton;
