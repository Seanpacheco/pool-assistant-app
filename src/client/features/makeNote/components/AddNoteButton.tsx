import * as React from 'react';
import { Button } from '@tremor/react';
import { PlusIcon } from '@heroicons/react/24/solid';

export default function AddNoteButton(props: { onClick: () => void }) {
  return (
    <Button icon={PlusIcon} variant="light" color="teal" onClick={props.onClick}>
      Add Note
    </Button>
  );
}
