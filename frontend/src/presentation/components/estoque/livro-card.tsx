import { Livro } from '../../../core/entities/livro';
import styles from './livro-card.module.css';

type LivroProps = {
  livro: Livro;
};

const LivroCard: React.FC<LivroProps> = ({ livro }) => {
  return (
    <div
      className={styles.bookCard}
      data-title={livro.titulo}
      data-author={livro.autor.nome}
      data-genre={livro.categoria.nome}
      data-description={livro.descricao}
      data-cover="livro 1.jpg"
    >
      <img src={livro.urlCapa} />
      <p>{livro.titulo}</p>
    </div>
  );
};

export default LivroCard;
