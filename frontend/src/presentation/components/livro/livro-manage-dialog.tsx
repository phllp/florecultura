import * as Dialog from '@radix-ui/react-dialog';
import React, { useState } from 'react';
import Button from '../button';
import { Livro } from '../../../core/entities/livro';
import LivroManageForm from './livro-manage-form';
import { Pencil } from 'lucide-react';

type LivroManageDialogProps = {
  onSave: () => void;
  livro?: Livro;
};

const LivroManageDialog: React.FC<LivroManageDialogProps> = ({
  onSave,
  livro,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {livro ? (
          <div className="w-fit h-fit bg-gray-100 p-2 rounded-lg hover:bg-gray-900 text-blueShadeado hover:text-gray-50 hover:border hover:border-gray-50">
            <Pencil />
          </div>
        ) : (
          <Button
            text="Novo Livro"
            onClick={() => console.log('Cadastrar livro')}
            variant="contrast"
          />
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/55" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 text-slate-900 p-8 shadow-lg rounded-sm min-w-[550px] max-w-[550px] ">
          <Dialog.Title className="text-2xl mb-4">
            {livro ? 'Editar' : 'Adicionar'} Livro
          </Dialog.Title>

          <LivroManageForm
            livro={livro}
            onCancel={() => setOpen(false)}
            onSave={() => {
              onSave();
              setOpen(false);
            }}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LivroManageDialog;
