import * as React from 'react';

export default function SignUpLink(props: { wide: boolean }) {
  return (
    <a
      href="/"
      className={
        props.wide
          ? 'glass btn-wide btn bg-[#259FA9] hover:bg-[#225564] hover:glass border-0 text-white'
          : 'glass btn bg-[#259FA9] hover:bg-[#225564] hover:glass border-0 text-white'
      }
    >
      Sign Up
    </a>
  );
}
