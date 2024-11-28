import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axiosInstance from '../../../external/axiosInstance';
import { Usuario } from '../../../core/entities/usuario';
import Button from '../button';
import { useUser } from '../../contexts/userContext';

type UsuarioLoginFormProps = {
  onCancel: () => void;
  onSuccess: () => void;
  usuario?: Usuario;
};

const UsuarioLoginForm: React.FC<UsuarioLoginFormProps> = ({
  onSuccess,
  usuario,
  onCancel,
}) => {
  const { setUser } = useUser();
  // State to store the form data
  const [formData, setFormData] = useState({
    loginEmail: usuario?.email || '',
    loginSenha: usuario?.senha || '',
  });

  useEffect(() => {
    return () => {
      setFormData({
        loginEmail: '',
        loginSenha: '',
      });

      onCancel();
    };
  }, []);

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

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handles the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(formData.loginEmail)) {
      toast.error('Email inválido');
      return;
    }

    try {
      // Send the form data to the API to create a new book
      const response = await axiosInstance.post('/api/usuarios/login', {
        email: formData.loginEmail,
        senha: formData.loginSenha,
      });

      if (response.status === 200) {
        toast.success('Usuário autenticado com sucesso');
        console.log(response.data);
        setUser(response.data);
        setFormData({
          loginEmail: '',
          loginSenha: '',
        });

        // Save session data
      } else {
        toast.error('Erro ao autenticar o usuário');
      }
      // Callback to refresh the list of book
      onSuccess();
    } catch {
      toast.error('Erro ao autenticar o usuário');
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
    <div className="form">
      <label className="label-input" htmlFor="">
        <input
          id="loginEmail"
          name="loginEmail"
          value={formData.loginEmail}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="text-blueShadeado"
          required
        />
      </label>

      <label className="label-input" htmlFor="">
        <input
          id="loginSenha"
          name="loginSenha"
          onChange={handleChange}
          value={formData.loginSenha}
          type="password"
          placeholder="Senha"
          className="text-blueShadeado"
          required
        />
      </label>

      <Button
        onClick={() => {}}
        onSubmit={handleSubmit}
        text="Entrar"
        variant="secondary"
      />
    </div>
  );
};

export default UsuarioLoginForm;
