import * as React from 'react';
import { Button, TextInput } from '@tremor/react';
import { PlusIcon } from '@heroicons/react/24/solid';

export default function AddNoteModal(props: { onClose: () => void }) {
  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="font-bold text-lg text-center">Make a note</h2>
        <form className="flex flex-col gap-2 mt-4" action="">
          <TextInput placeholder="Note Title" />
          <textarea className="textarea border-teal-500" placeholder="Write note here"></textarea>
          <div className="modal-action">
            <Button type="submit" color="teal" onClick={props.onClose}>
              Save
            </Button>
          </div>
        </form>
        <div className="modal-action">
          <Button color="red" onClick={props.onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
