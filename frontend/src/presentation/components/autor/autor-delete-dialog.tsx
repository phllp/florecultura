import * as Dialog from '@radix-ui/react-dialog';
import React, { useState } from 'react';
import AutorCreateForm from './autor-create-form';

const AutorCreateDialog: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2  rounded shadow-lg">
          Cadastrar Autor
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/55" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 text-slate-900 p-8 shadow-lg rounded-sm min-w-[550px] max-w-[550px] ">
          <Dialog.Title className="text-2xl mb-2">Novo Autor</Dialog.Title>
          <AutorCreateForm onSave={() => setOpen(false)} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AutorCreateDialog;
