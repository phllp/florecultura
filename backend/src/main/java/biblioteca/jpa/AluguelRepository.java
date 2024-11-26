package biblioteca.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import biblioteca.model.Aluguel;

public interface AluguelRepository extends JpaRepository<Aluguel, Long> {
}

