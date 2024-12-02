import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axiosInstance from '../../../external/axiosInstance';
import { UserRoles, Usuario } from '../../../core/entities/usuario';
import Button from '../button';
import { useUser } from '../../contexts/userContext';
import styles from './usuario-forms.module.css';

type UsuarioManageFormProps = {
  onCancel: () => void;
  onSave: () => void;
  usuario?: Usuario;
};

const UsuarioManageForm: React.FC<UsuarioManageFormProps> = ({
  onSave,
  usuario,
  onCancel,
}) => {
  const { setUser } = useUser();
  // State to store the form data
  const [formData, setFormData] = useState({
    nome: usuario?.nome || '',
    email: usuario?.email || '',
    role: usuario?.role || '',
    senha: usuario?.senha || '',
  });

  const values = Object.values(UserRoles).filter(
    (value) => typeof value === 'string'
  );

  useEffect(() => {
    return () => {
      setFormData({
        nome: '',
        email: '',
        role: '',
        senha: '',
      });

      onCancel();
    };
  }, []);

  // Updates the form data when the user types
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'role') {
      setFormData({
        ...formData,
        role: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handles the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.nome.length < 10 || formData.nome.length > 200) {
      toast.error('O nome do usuário deve ter entre 10 e 200 caracteres');
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.error('Email inválido');
      return;
    }

    if (formData.senha.length < 6) {
      toast.error('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    if (formData.role === '') {
      toast.error('Selecione um perfil');
      return;
    }

    try {
      if (usuario) {
        // Send the form data to the API to update the book
        const response = await axiosInstance.put(
          `/api/usuarios/${usuario.id}`,
          {
            id: usuario.id,
            ...formData,
          }
        );

        if (response.status === 200) {
          toast.success('Usuário atualizado com sucesso');
          setFormData({
            nome: '',
            email: '',
            senha: '',
            role: '',
          });
        } else {
          toast.error('Erro ao atualizar o usuário');
        }
      } else {
        // Send the form data to the API to create a new book
        const response = await axiosInstance.post('/api/usuarios', formData);

        if (response.status === 200) {
          toast.success('Usuário cadastrado com sucesso');
          console.log('Created User', response.data);
          setUser(response.data);
          setFormData({
            nome: '',
            email: '',
            senha: '',
            role: '',
          });
        } else {
          toast.error('Erro ao cadastrar o usuário');
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
  // const handleCancel = () => {
  //   setFormData({
  //     nome: '',
  //     email: '',
  //     senha: '',
  //     role: '',
  //   });
  //   onCancel();
  // };

  return (
    <div className={styles.form}>
      <label className={styles.labelInput} htmlFor="">
        <input
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          placeholder="Name"
          className="text-blueShadeado"
        />
      </label>

      <label className={styles.labelInput} htmlFor="">
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="text-blueShadeado"
        />
      </label>

      <label className={styles.labelInput} htmlFor="">
        <input
          id="senha"
          name="senha"
          onChange={handleChange}
          value={formData.senha}
          type="password"
          placeholder="Senha"
          className="text-blueShadeado"
        />
      </label>

      <label className={styles.role}>Escolha o perfil:</label>
      <select
        id="role"
        name="role"
        required
        onChange={handleChange}
        value={formData.role}
        className="text-blueShadeado"
      >
        <option value="">Selecione</option>
        {values.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <Button
        onClick={() => {}}
        onSubmit={handleSubmit}
        text="Cadastrar"
        variant="secondary"
      />
    </div>
  );
};

export default UsuarioManageForm;
