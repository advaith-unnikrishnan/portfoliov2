'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const ProjectPage = () => {
  const { slug } = useParams();

  // You can use the slug to fetch the specific project data
  // For now, let's just display the slug
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">Project: {slug}</h1>
      {/* Add more project details here */}
    </div>
  );
};

export default ProjectPage;
