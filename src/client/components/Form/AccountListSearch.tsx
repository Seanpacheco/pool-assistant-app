import * as React from 'react';
import { TextInput } from '@tremor/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function AccountListSearch(props: { searchItems: (searchValue: string) => void }) {
  return (
    <form action="">
      <TextInput
        onChange={(e) => props.searchItems(e.target.value)}
        icon={MagnifyingGlassIcon}
        placeholder="Search..."
      />
    </form>
  );
}
