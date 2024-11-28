import { useEffect, useState } from 'react';
import { Livro } from '../../core/entities/livro';
import AutorCreateDialog from '../components/autor/autor-delete-dialog';
import axiosInstance from '../../external/axiosInstance';
import LivroCard from '../components/estoque/livro-card';
import LivroManageDialog from '../components/livro/livro-manage-dialog';
import LivroDeleteDialog from '../components/livro/livro-delete-dialog';
import LivroDetailsDialog from '../components/livro/livro-details-dialog';

const Estoque = () => {
  const [livros, setLivros] = useState<Livro[]>([]);

  const fetchLivros = async () => {
    try {
      const response = await axiosInstance.get('/api/livros');
      console.log('Livros:', response.data);
      setLivros(response.data);
    } catch (error) {
      console.error('Erro ao carregar os livros:', error);
    }
  };

  useEffect(() => {
    fetchLivros();
    console.log(livros);
  }, []);

  return (
    <div className="p-32">
      <div className="bg-blueShadeado w-full py-8 rounded-lg mb-10 pl-8">
        <h1 className="text-3xl mb-4">Gerenciar Estoque</h1>
        <div className="flex gap-4">
          <LivroManageDialog onSave={() => fetchLivros()} />
          <AutorCreateDialog />
        </div>
      </div>
      <div>
        <div className="flex gap-4">
          {livros.map((l) => (
            <div className="bg-blueShadeado">
              <LivroCard key={l.id} livro={l} />

              <div className="p-2 flex gap-2">
                <LivroManageDialog livro={l} onSave={() => fetchLivros()} />
                <LivroDeleteDialog livro={l} onDelete={() => fetchLivros()} />
                <LivroDetailsDialog livro={l} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Estoque;
