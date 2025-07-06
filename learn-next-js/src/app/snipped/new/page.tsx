import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const page = () => {


    
    return (
        <form className='flex flex-col gap-5'>
          <div>
            <Label>Title</Label>
            <Input type='text' name='title' id='title' />
          </div>
          <div>
            <Label>Code</Label>
            <Textarea name='title' id='title' />
          </div>

          <Button variant={'default'} className='' style={{backgroundColor: 'black', color:'white'}}>New</Button>
        </form>
    );
};

export default page;