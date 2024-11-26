package biblioteca.controller;

import java.util.List;

import biblioteca.jpa.ExemplarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import biblioteca.jpa.AluguelRepository;
import biblioteca.model.Aluguel;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/alugueis")
public class AluguelController {

    @Autowired
    private AluguelRepository aluguelRepository;

    @GetMapping
    public List<Aluguel> listarTodos() {
        return aluguelRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Aluguel> buscarPorId(@PathVariable Long id) {
        return aluguelRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Aluguel criarAluguel(@RequestBody @Valid Aluguel aluguel) {
        return aluguelRepository.save(aluguel);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Aluguel> atualizarAluguel(@PathVariable Long id, @RequestBody @Valid Aluguel aluguel) {
        return aluguelRepository.findById(id)
                .map(record -> {
                    record.setDataAluguel(aluguel.getDataAluguel());
                    record.setDataDevolucao(aluguel.getDataDevolucao());
                    record.setDataVencimento(aluguel.getDataVencimento());
                    Aluguel atualizado = aluguelRepository.save(record);
                    return ResponseEntity.ok(atualizado);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletarAluguel(@PathVariable Long id) {
        return aluguelRepository.findById(id)
                .map(record -> {
                    aluguelRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}

