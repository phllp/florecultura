import * as Dialog from '@radix-ui/react-dialog';
import React, { useState } from 'react';
import { CirclePlus } from 'lucide-react';
import CategoriaCreateForm from './categoria-create-form';

type CategoriaCreateDialogProps = {
  onCreate: () => void;
};

const CategoriaCreateDialog: React.FC<CategoriaCreateDialogProps> = ({
  onCreate,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {/* <Button
          text=""
          onClick={() => console.log('Cadastrar livro')}
        /> */}
        <div className=" bg-white shadow-lg rounded-lg w-fit h-fit p-2 mt-1 border border-gray-300">
          <CirclePlus className="size-6" />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/55" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 text-slate-900 p-8 shadow-lg rounded-sm min-w-[550px] max-w-[550px] ">
          <Dialog.Title className="text-2xl mb-4">Adicionar Livro</Dialog.Title>

          <CategoriaCreateForm
            onSave={() => {
              onCreate();
              setOpen(false);
            }}
            onCancel={() => setOpen(false)}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CategoriaCreateDialog;
