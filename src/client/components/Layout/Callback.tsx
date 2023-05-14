import * as React from 'react';
import { LogOutButton } from '../Elements/LogOutLink';
import AccountListBlock from '../Elements/AccountListBlock';
import { Button } from '@tremor/react';
import '../../App.css';
import { Cog8ToothIcon } from '@heroicons/react/24/solid';

export const CallbackLayout = () => {
  return (
    <>
      <div className="navbar glass">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a
            href="/"
            className="btn btn-ghost normal-case font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#225564] to-[#0C2A3E]"
          >
            Pool Assistant
          </a>
        </div>
        <div className="navbar-end gap-6">
          <Button size="xl" variant="light" color="teal" icon={Cog8ToothIcon}></Button>
          <LogOutButton />
        </div>
      </div>
      <main className="max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto my-6"></main>
    </>
  );
};
