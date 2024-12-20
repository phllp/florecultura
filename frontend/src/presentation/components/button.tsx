import styles from './button.module.css';

type ButtonProps = {
  text: string;
  onClick: () => void;
  onSubmit?: (e: React.FormEvent) => void;
  variant?: 'primary' | 'secondary' | 'contrast' | 'otros';
};

{
  /* <button className="btn btn-second">Cadastrar</button> */
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  onSubmit,
}) => {
  let style;
  if (variant === 'otros') {
    style = styles.btnOtros;
  } else if (variant === 'contrast') {
    style = styles.btnContrast;
  } else if (variant === 'secondary') {
    style = styles.btnSecond;
  } else {
    style = styles.btnPrimary;
  }

  return (
    <>
      <button
        onClick={onSubmit ? onSubmit : onClick}
        className={`${styles.btnBase} ${style}`}
      >
        <p className="font-bold">{text}</p>
      </button>
    </>
  );
};
export default Button;
