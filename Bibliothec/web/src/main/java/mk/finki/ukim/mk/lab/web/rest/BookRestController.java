package mk.finki.ukim.mk.lab.web.rest;

import mk.finki.ukim.mk.lab.model.Book;
import mk.finki.ukim.mk.lab.model.dto.BookDto;
import mk.finki.ukim.mk.lab.service.BooksService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping({"/api/","/api/books"})
public class BookRestController {

    private final BooksService booksService;

    public BookRestController(BooksService booksService) {
        this.booksService = booksService;
    } //npm i --save axios  npm i react-router-dom

    @GetMapping
    public List<Book> findAll(){
        return this.booksService.findAll().stream()
                .sorted(Comparator.comparing(Book::getId)).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> findById(@PathVariable Long id){
        return this.booksService.findById(id)
                .map(book -> ResponseEntity.ok().body(book))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Book> save(@RequestBody BookDto bookDto) {
        return this.booksService.save(bookDto)
                .map(book -> ResponseEntity.ok().body(book))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Book> edit(@PathVariable Long id, @RequestBody BookDto bookDto) {
        return this.booksService.edit(id,bookDto)
                .map(book -> ResponseEntity.ok().body(book))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Long id) {
        System.out.println("YEAH IM HERE");
        this.booksService.deleteById(id);
        if (this.booksService.findById(id).isEmpty())
            return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/taken/{id}")
    public ResponseEntity markAsTaken(@PathVariable Long id){
        Integer avb = this.booksService.findById(id).get().getAvailableCopies();
        this.booksService.markAsTaken(id);
        Integer avb2 = this.booksService.findById(id).get().getAvailableCopies();

        if (avb != avb2)
            return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }
}
