import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { MenuIcon } from 'lucide-react';
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components';

import React from 'react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import userImg from '../../public/user.svg';
import Image from 'next/image';
import Link from 'next/link';
import { createAirbnbHome } from '../actions';

export async function UserNav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const createHomewithId = createAirbnbHome.bind(null, {
    userId: user?.id as string,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className='rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3'>
          <MenuIcon className='w-6 h-6 lg:w-5 lg:h-5' />

          <Image
            src={user?.picture ?? userImg}
            width={32}
            height={32}
            alt='User Image'
            className='rounded-full h-8 w-8 hidden lg:block'
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-[200px]'>
        {user ? (
          <>
            {' '}
            <DropdownMenuItem>
              <form action={createHomewithId} className='w-full'>
                <button type='submit' className='w-full text-start'>
                  Airbnb your Home
                </button>
              </form>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/my-homes'>My Listings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/favorites'>My Favourites</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/reservations'>My Reservations</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogoutLink className='w-full'>Logout</LogoutLink>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <RegisterLink className='w-full'>Register</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LoginLink className='w-full'>Sign in</LoginLink>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserNav;
