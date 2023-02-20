import * as React from 'react';
import { Button } from '@tremor/react';
import { PlusIcon } from '@heroicons/react/24/solid';

export default function AddNoteButton() {
  return (
    <Button icon={PlusIcon} variant="light" color="teal" onClick={() => console.log('Account Added')}>
      Add Note
    </Button>
  );
}
