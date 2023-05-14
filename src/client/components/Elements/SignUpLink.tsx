import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const SignUpButton = (props: { wide: boolean }) => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/dashboard',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  };

  return (
    <button
      onClick={handleSignUp}
      className={
        props.wide
          ? 'glass btn-wide btn bg-[#259FA9] hover:bg-[#225564] hover:glass border-0 text-white'
          : 'glass btn bg-[#259FA9] hover:bg-[#225564] hover:glass border-0 text-white'
      }
    >
      Sign Up
    </button>
  );
};
