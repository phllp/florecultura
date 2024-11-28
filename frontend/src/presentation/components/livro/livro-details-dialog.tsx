import * as Dialog from '@radix-ui/react-dialog';
import React, { useState } from 'react';
import { Livro } from '../../../core/entities/livro';
import { Eye } from 'lucide-react';

type LivroDetailsDialogProps = {
  livro: Livro;
  children?: React.ReactNode;
};

const LivroDetailsDialog: React.FC<LivroDetailsDialogProps> = ({
  livro,
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {children ? (
          <div>{children}</div>
        ) : (
          <div className="w-fit h-fit bg-gray-100 p-2 rounded-lg hover:bg-gray-900 text-blueShadeado hover:text-gray-50 hover:border hover:border-gray-50">
            <Eye />
          </div>
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/55" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 text-slate-900 p-8 shadow-lg rounded-lg min-w-[550px] max-w-[550px] ">
          <div className="flex flex-col items-center">
            <Dialog.Title className="text-3xl mb-4">
              {livro.titulo}
            </Dialog.Title>
            <div className="max-h-[400px] mb-8">
              <img src={livro.urlCapa} alt="" className="max-h-[300px]" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-lg font-semibold">Autor</p>
                <p className="text-lg">{livro.autor.nome}</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Categoria</p>
                <p className="text-lg">{livro.categoria.nome}</p>
              </div>
            </div>

            <div className="mt-4 max-h-[150px] overflow-y-auto">
              <p>{livro.descricao}</p>
            </div>

            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Voltar
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LivroDetailsDialog;
