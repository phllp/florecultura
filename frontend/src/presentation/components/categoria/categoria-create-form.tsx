import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axiosInstance from '../../../external/axiosInstance';
import { Categoria } from '../../../core/entities/categoria';

type CategoriaCreateFormProps = {
  onSave: () => void;
  onCancel: () => void;
  categoria?: Categoria;
};

const CategoriaCreateForm: React.FC<CategoriaCreateFormProps> = ({
  onSave,
  categoria,
  onCancel,
}) => {
  // State to store the form data
  const [formData, setFormData] = useState({
    nome: categoria?.nome || '',
  });

  // Updates the form data when the user types
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handles the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (categoria) {
        // Send the form data to the API to update the category
        const response = await axiosInstance.put('/api/categorias', {
          id: categoria.id,
          ...formData,
        });

        if (response.status === 200) {
          toast.success('Categoria atualizada com sucesso');
          setFormData({
            nome: '',
          });
        } else {
          toast.error('Erro ao atualizar a categoria');
        }
      } else {
        // Send the form data to the API to create a new category
        const response = await axiosInstance.post('/api/categorias', formData);

        if (response.status === 200) {
          toast.success('Categoria criada com sucesso');
          setFormData({
            nome: '',
          });
        } else {
          toast.error('Erro ao criar a categoria');
        }
      }
      // Callback to refresh the list of category
      onSave();
    } catch {
      console.error('Error saving category.');
      return;
    }
  };

  // Função para limpar os campos do formulário
  const handleCancel = () => {
    setFormData({
      nome: '',
    });
    onCancel();
  };

  return (
    <div className="max-w-lg mx-auto p-4 space-y-4">
      <div className="flex flex-col mb-10 gap-4">
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-gray-700"
          >
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={formData.nome}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Cadastrar
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CategoriaCreateForm;
