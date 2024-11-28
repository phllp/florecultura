import styles from './bookshelf.module.css';

import LivroCard from './estoque/livro-card';
import { Livro } from '../../core/entities/livro';
import LivroDetailsDialog from './livro/livro-details-dialog';

type BookshelfProps = {
  livros: Livro[];
};
const Bookshelf: React.FC<BookshelfProps> = ({ livros }) => {
  return (
    <section className={styles.bookShelf}>
      <h1>Estante de Livros</h1>
      <div className={styles.bookItems}>
        {livros.map((l) => (
          <div className={styles.bookCard}>
            <LivroDetailsDialog key={l.id} livro={l}>
              <LivroCard key={l.id} livro={l} />
            </LivroDetailsDialog>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bookshelf;
