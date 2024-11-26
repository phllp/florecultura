package biblioteca.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import biblioteca.model.Livro;

public interface LivroRepository extends JpaRepository<Livro, Long> {
}

