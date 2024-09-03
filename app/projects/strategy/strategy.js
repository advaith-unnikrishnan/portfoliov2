import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MarketingGaming = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">Marketing | Gaming</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Problem Statement</h2>
        <p className="mb-4">
          Next Level Gaming (NLG), a start-up in the Esports and computer gaming industry based in Los
          Angeles, California, NLG is planning to launch its first game -an online, multiplayer role-playing
          game that is unlike any existing franchise. Help in deciding it's business model.
        </p>
        <h2 className="text-xl font-semibold mb-2">Objective</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Guesstimate the no: of players NLG can target with it's game</li>
          <li>Recommend a suitable pricing model for the game after considering:
            <ul className="list-circle pl-5">
              <li>Profitability of each model</li>
              <li>Identify non-financial factors that would affect the pricing model</li>
            </ul>
          </li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Output</h2>
        <p className="mb-4">
          Free to play model with in-game purchases is the best suited for the required needs.
        </p>
        <Image
          src="/images/projects/marketing-gaming-solution.png"
          alt="Marketing Gaming Solution"
          width={800}
          height={600}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default MarketingGaming;
