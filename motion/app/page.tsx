import Link from 'next/link';
import React from 'react';

const page = () => {
  const classes  = [
    {
      name: 'Class 1',
      link: '/class-1'
    },
    {
      name: 'Class 2',
      link: '/class-2'
    },
    {
      name: 'Class 3',
      link: '/class-3'
    },
    {
      name: 'Class 4',
      link: '/class-4'
    },
    {
      name: 'Class 5',
      link: '/class-5'
    }
  ]
  return (
    <div className='p-5'>
      <h2 className='text-3xl text-neutral-700 font-medium mb-5'>All classes</h2>
     <div className='flex flex-col gap-2'>
       {classes.map((item, index) => (
        <Link key={index} href={item.link} className='text-lg font-medium'>{item.name}</Link>
       ))}
     </div>
    </div>
  );
};

export default page;