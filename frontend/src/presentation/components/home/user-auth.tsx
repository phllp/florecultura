import React from 'react';
import styles from './user-auth.module.css';
import Button from '../button';
import UsuarioManageForm from '../usuario/usuario-manage-form';
import UsuarioLoginForm from '../usuario/usuario-login-form';

const UserAuth: React.FC = () => {
  const body = document.querySelector('body');

  const handleSignUp = () => {
    if (body) body.className = styles.signUpJs;
  };

  const handleSignIn = () => {
    if (body) body.className = styles.signInJs;
  };
  return (
    <div className={styles.container}>
      <div className={`${styles.content} ${styles.firstContent}`}>
        <div className={styles.firstColumn}>
          <h2 className={`${styles.title} ${styles.titlePrimary}`}>
            Já tem uma conta?
          </h2>
          <p className={`${styles.description} ${styles.descriptionPrimary}`}>
            Faça login com suas informações
          </p>
          <Button
            onClick={() => {
              handleSignIn();
            }}
            text="Entrar"
            variant="primary"
          />
        </div>
        <div className={styles.secondColumn}>
          <h2 className={`${styles.title} ${styles.titleSecond}`}>
            Criar Conta
          </h2>
          <UsuarioManageForm onCancel={() => {}} onSave={() => {}} />
        </div>
      </div>

      <div className={`${styles.content} ${styles.secondContent}`}>
        <div className={styles.firstColumn}>
          <h2 className={`${styles.title} ${styles.titlePrimary}`}>
            Novo por aqui?
          </h2>
          <p className={`${styles.description} ${styles.descriptionPrimary}`}>
            Cadastre-se agora mesmo!
          </p>

          <Button
            onClick={() => {
              handleSignUp();
            }}
            text="Cadastrar"
            variant="primary"
          />
        </div>
        <div className={styles.secondColumn}>
          <h2 className={`${styles.title} ${styles.titleSecond}`}>Login</h2>
          <UsuarioLoginForm onSuccess={() => {}} onCancel={() => {}} />
        </div>
      </div>
    </div>
  );
};
export default UserAuth;
