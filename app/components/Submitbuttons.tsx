'use client';

import { Button } from '@/components/ui/button';
import { Heart, Loader2 } from 'lucide-react';
import React from 'react';
import { useFormStatus } from 'react-dom';

const CreationSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled size='lg'>
          <Loader2 className='mr-2 h-4 w-4 animate-spin' />
          Please Wait
        </Button>
      ) : (
        <Button type='submit' size='lg'>
          Next
        </Button>
      )}
    </>
  );
};

export function AddToFavouriteButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button
          variant='outline'
          size='icon'
          disabled
          className='bg-primary-foreground'
        >
          <Loader2 className='animate-spin text-primary w-4 h-4' />
        </Button>
      ) : (
        <Button
          variant={'outline'}
          size='icon'
          className='bg-primary-foreground'
        >
          <Heart className='w-4 h-4' />
        </Button>
      )}
    </>
  );
}

export function DeleteFromFavouriteButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button
          variant='outline'
          size='icon'
          disabled
          className='bg-primary-foreground'
        >
          <Loader2 className='animate-spin text-primary w-4 h-4' />
        </Button>
      ) : (
        <Button
          variant={'outline'}
          size='icon'
          className='bg-primary-foreground'
        >
          <Heart className='w-4 h-4 text-primary' fill='#E21C49' />
        </Button>
      )}
    </>
  );
}

export function ReservationSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className='w-full' disabled>
          <Loader2 className='w-4 h-4 animate-spin mr-2' /> Please wait...
        </Button>
      ) : (
        <Button className='w-full' type='submit'>
          Make a Reservation!
        </Button>
      )}
    </>
  );
}

export default CreationSubmit;
