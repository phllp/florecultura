package biblioteca.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import biblioteca.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}

