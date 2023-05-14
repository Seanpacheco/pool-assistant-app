import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LogInButton = (props: { wide: boolean }) => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/dashboard',
      },
    });
  };

  return (
    <button
      onClick={handleLogin}
      className={
        props.wide
          ? 'glass btn-wide btn bg-gradient-to-r from-[#225564] to-[#0C2A3E] border-0 text-white'
          : 'glass btn bg-gradient-to-r from-[#225564] to-[#0C2A3E] border-0 text-white'
      }
    >
      Log In
    </button>
  );
};
