package biblioteca.services;

import biblioteca.jpa.UsuarioRepository;
import biblioteca.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario validarCredenciais(String email, String senha) {
        // Buscar usuário pelo email
        Optional<Usuario> usuarioOpt = usuarioRepository.findByEmail(email);

        // Verificar se o usuário existe e se a senha está correta
        if (usuarioOpt.isPresent() && usuarioOpt.get().getSenha().equals(senha)) {
            // Senha válida, retorna o usuário
            return usuarioOpt.get();
        }

        // Senha inválida ou usuário não encontrado, retorna null ou pode lançar uma exceção
        return null;
    }

}
