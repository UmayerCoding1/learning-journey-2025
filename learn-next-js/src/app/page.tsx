
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';


const page = () => {
  return (
     <div>
      
      <div className='flex items-center justify-between'>
      <h1>Snippet</h1>
      <Link href={'/snipped/new'}>
      <Button variant={'default'} style={{backgroundColor: 'black', color:'white'}}>New</Button>
      </Link>
    </div>
     </div>
  );
};

export default page;