package mk.finki.ukim.mk.lab.service;


import mk.finki.ukim.mk.lab.model.Book;
import mk.finki.ukim.mk.lab.model.dto.BookDto;
import mk.finki.ukim.mk.lab.model.enumerations.Category;

import java.util.List;
import java.util.Optional;

public interface BooksService {

    List<Book> findAll();

    Optional<Book> findById(Long id);

    Optional<Book> save(String name, Category category, Long authorId, Integer availableCopies);

    Optional<Book> save(BookDto bookDto);

    Optional<Book> edit(Long id, String name, Category category, Long authorId, Integer availableCopies);

    Optional<Book> edit(Long id,BookDto bookDto);

    void markAsTaken(Long id);

    void deleteById(Long id);
}
