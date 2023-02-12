import * as React from 'react';

export default function LogInLink(props: { wide: boolean }) {
  return (
    <a
      href="/dashboard"
      className={
        props.wide
          ? 'glass btn-wide btn bg-gradient-to-r from-[#225564] to-[#0C2A3E] border-0 text-white'
          : 'glass btn bg-gradient-to-r from-[#225564] to-[#0C2A3E] border-0 text-white'
      }
    >
      Log In
    </a>
  );
}
