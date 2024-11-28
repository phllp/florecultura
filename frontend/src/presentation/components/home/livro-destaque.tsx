import styles from './livro-destaque.module.css';

import { Livro } from '../../../core/entities/livro';

type LivroItemProps = {
  livro: Livro;
};

const LivroDestaque: React.FC<LivroItemProps> = ({ livro }) => {
  return (
    <div className={styles.bookItem}>
      <img src={livro.urlCapa} alt="Livro 1" />
      <div className="p-4 text-gray-950 flex flex-col ">
        <div className="flex flex-col justify-between">
          <h3 className="text-lg ">{livro.titulo}</h3>
          <p className="font-semibold italic align-bottom">
            {livro.autor.nome}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LivroDestaque;
