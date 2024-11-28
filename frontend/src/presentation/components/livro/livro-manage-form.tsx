import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Livro } from '../../../core/entities/livro';
import axiosInstance from '../../../external/axiosInstance';
import { Autor } from '../../../core/entities/autor';
import { Categoria } from '../../../core/entities/categoria';
import CategoriaCreateDialog from '../categoria/categoria-create-dialog';

type LivroManageFormProps = {
  onCancel: () => void;
  onSave: () => void;
  livro?: Livro;
};

const LivroManageForm: React.FC<LivroManageFormProps> = ({
  onSave,
  livro,
  onCancel,
}) => {
  // State to store the form data
  const [formData, setFormData] = useState({
    titulo: livro?.titulo || '',
    descricao: livro?.descricao || '',
    autor: { id: livro?.autor.id || '' },
    categoria: { id: livro?.categoria.id || '' },
    urlCapa: livro?.urlCapa || '',
  });
  const [autores, setAutores] = useState<Autor[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  // Fetch authors from the API
  const fetchAutores = async () => {
    try {
      const response = await axiosInstance.get('/api/autores');
      console.log('Autores:', response.data);
      setAutores(response.data);
    } catch (error) {
      console.error('Erro ao carregar os autores:', error);
    }
  };

  // Fetch categories from the API
  const fetchCategorias = async () => {
    try {
      const response = await axiosInstance.get('/api/categorias');
      console.log('Categorias:', response.data);
      setCategorias(response.data);
    } catch (error) {
      console.error('Erro ao carregar as categorias:', error);
    }
  };

  // Load authors when the component mounts
  useEffect(() => {
    fetchAutores();
    fetchCategorias();
  }, []);

  // Updates the form data when the user types
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'idAutor') {
      setFormData({
        ...formData,
        autor: { id: value },
      });
    } else if (name === 'idCategoria') {
      setFormData({
        ...formData,
        categoria: { id: value },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handles the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.descricao.length < 10 || formData.descricao.length > 1000) {
      toast.error('A descrição deve ter entre 10 e 1000 caracteres');
      return;
    }

    try {
      if (livro) {
        // Send the form data to the API to update the book
        const response = await axiosInstance.put(`/api/livros/${livro.id}`, {
          id: livro.id,
          ...formData,
        });

        if (response.status === 200) {
          toast.success('Livro atualizado com sucesso');
          setFormData({
            titulo: '',
            autor: { id: '' },
            categoria: { id: '' },
            urlCapa: '',
            descricao: '',
          });
        } else {
          toast.error('Erro ao atualizar o livro');
        }
      } else {
        // Send the form data to the API to create a new book
        const response = await axiosInstance.post('/api/livros', formData);

        if (response.status === 200) {
          toast.success('Livro criado com sucesso');
          setFormData({
            titulo: '',
            autor: { id: '' },
            categoria: { id: '' },
            urlCapa: '',
            descricao: '',
          });
        } else {
          toast.error('Erro ao criar o livro');
        }
      }
      // Callback to refresh the list of book
      onSave();
    } catch {
      console.error('Error saving book.');
      return;
    }
  };

  // Função para limpar os campos do formulário
  const handleCancel = () => {
    setFormData({
      titulo: '',
      autor: { id: '' },
      categoria: { id: '' },
      urlCapa: '',
      descricao: '',
    });
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-4">
      <div className="flex flex-col mb-10 gap-4">
        <div>
          <label
            htmlFor="titulo"
            className="block text-sm font-medium text-gray-700"
          >
            Título
          </label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            value={formData.titulo}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label
            htmlFor="titulo"
            className="block text-sm font-medium text-gray-700"
          >
            Descrição
          </label>
          <input
            id="descricao"
            name="descricao"
            type="text"
            value={formData.descricao}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label
            htmlFor="idAutor"
            className="block text-sm font-medium text-gray-700"
          >
            Autor
          </label>
          <select
            id="idAutor"
            name="idAutor"
            value={formData.autor.id}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>
              Autor
            </option>
            {autores.map((a) => (
              <option key={a.id} value={a.id}>
                {a.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="flex w-full items-end gap-4">
          <div className="w-full">
            <label
              htmlFor="idCategoria"
              className="block text-sm font-medium text-gray-700"
            >
              Categoria
            </label>
            <select
              id="idCategoria"
              name="idCategoria"
              value={formData.categoria.id}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="" disabled>
                Categoria
              </option>
              {categorias.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nome}
                </option>
              ))}
            </select>
          </div>
          <CategoriaCreateDialog onCreate={() => fetchCategorias()} />
        </div>

        <div className="">
          <label
            htmlFor="urlCapa"
            className="block text-sm font-medium text-gray-700"
          >
            Imagem da Capa
          </label>
          <input
            id="urlCapa"
            name="urlCapa"
            type="text"
            value={formData.urlCapa}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          {livro ? 'Atualizar' : 'Cadastrar'}
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default LivroManageForm;
