import * as Dialog from '@radix-ui/react-dialog';
import React, { useState } from 'react';
import { Livro } from '../../../core/entities/livro';
import { Trash2 } from 'lucide-react';
import axiosInstance from '../../../external/axiosInstance';
import { toast } from 'react-toastify';

type LivroDeleteDialogProps = {
  onDelete: () => void;
  livro: Livro;
};

const LivroDeleteDialog: React.FC<LivroDeleteDialogProps> = ({
  onDelete,
  livro,
}) => {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const response = await axiosInstance.delete(`/api/livros/${livro?.id}`);
    if (response.status === 200) {
      toast.success('Livro removido com sucesso!');
    } else {
      toast.error('Erro ao remover o livro!');
    }
    onDelete();
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div className="w-fit h-fit bg-gray-100 p-2 rounded-lg hover:bg-gray-900 text-blueShadeado hover:text-gray-50 hover:border hover:border-gray-50">
          <Trash2 />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/55" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 text-slate-900 p-8 shadow-lg rounded-sm min-w-[550px] max-w-[550px] ">
          <Dialog.Title className="text-2xl mb-4">Remover Livro</Dialog.Title>
          <p>Tem certeza que deseja remover esse livro?</p>
          <p className="text-sm font-semibold">
            Esta ação não poderá ser desfeita!
          </p>

          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => {
                handleDelete();
              }}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Remover
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

export default LivroDeleteDialog;
