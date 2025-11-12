import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className='p-5'>
      <h2 className='text-3xl text-neutral-700 font-medium mb-5'>All classes</h2>
     <div className='flex flex-col gap-2'>
        <Link href={'/class-2'}>Class 2</Link>
      <Link href={'/class-3'}>Class 3</Link>
     </div>
    </div>
  );
};

export default page;