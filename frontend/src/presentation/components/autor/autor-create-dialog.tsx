import * as Dialog from '@radix-ui/react-dialog';
import React, { useState } from 'react';
import AutorCreateForm from './autor-create-form';
import Button from '../button';

const AutorCreateDialog: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          text="Cadastrar Autor"
          onClick={() => console.log('Cadastrar autor')}
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/55" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 text-slate-900 p-8 shadow-lg rounded-sm min-w-[550px] max-w-[550px] ">
          <Dialog.Title className="text-2xl mb-4">Remover Autor</Dialog.Title>
          <p className="mb-2">Are you sure you want to remove the Autor?</p>
          <p className="font-semibold mb-8">Essa ação não pode ser revertida</p>

          <AutorCreateForm onSave={() => setOpen(false)} />

          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => {
                console.log('Removed');
              }}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Cadastrar
            </button>
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Cancelar
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AutorCreateDialog;
