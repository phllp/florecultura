import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Autor } from '../../../core/entities/autor';
import axiosInstance from '../../../external/axiosInstance';

type AutorFormProps = {
  onSave: () => void;
  autor?: Autor;
};

const AutorCreateForm: React.FC<AutorFormProps> = ({ onSave, autor }) => {
  // State to store the form data
  const [formData, setFormData] = useState({
    nome: autor?.nome || '',
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
      if (autor) {
        // Send the form data to the API to update the author
        const response = await axiosInstance.put('/api/autores', {
          idAutor: autor.idAutor,
          ...formData,
        });

        const data = response.data;
        console.log('Resposta da API:', data);

        if (response.status === 200) {
          toast.success(data.message);
          setFormData({
            nome: '',
          });
        } else {
          toast.error(data.message);
        }
      } else {
        // Send the form data to the API to create a new author
        const response = await axiosInstance.post('/api/autores', formData);
        const data = response.data;
        console.log('Resposta da API:', data);
        if (response.status == 200) {
          toast.success(data.message);
          setFormData({
            nome: '',
          });
        } else {
          toast.error(data.message);
        }
      }
      // Callback to refresh the list of authors
      onSave();
    } catch {
      console.error('Error saving author.');
      return;
    }
  };

  // Cleanup the form data
  const handleCancel = () => {
    setFormData({
      nome: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-4">
      <div className="mb-10">
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

      <div className="flex space-x-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AutorCreateForm;
