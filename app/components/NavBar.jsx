import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const NavBar = () => {
  return (
    <nav>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={'/'}>
          <Image src="/images/RN-logo.png" alt="RN-logo" width={50} height={300} />
        </Link>
      </div>
    </nav>
  );
};
