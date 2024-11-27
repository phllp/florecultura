import styles from './button.module.css';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button onClick={onClick} className={styles.menuItemNois}>
    {text}
  </button>
);

export default Button;
