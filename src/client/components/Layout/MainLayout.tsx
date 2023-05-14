import * as React from 'react';
import '../../App.css';
import Hero from './Hero';
import { LogInButton } from '../Elements/LogInButton';

export const MainLayout = () => {
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
        <div className="navbar-end">
          <LogInButton wide={false} />
        </div>
      </div>
      <Hero />
    </>
  );
};
