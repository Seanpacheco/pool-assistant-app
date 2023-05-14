import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LogOutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <button
      onClick={handleLogout}
      className="glass btn bg-gradient-to-r from-[#225564] to-[#0C2A3E] border-0 text-white"
    >
      Log Out
    </button>
  );
};
