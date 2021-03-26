package mk.finki.ukim.mk.lab.service.impl;


import mk.finki.ukim.mk.lab.model.Author;
import mk.finki.ukim.mk.lab.model.Book;
import mk.finki.ukim.mk.lab.model.dto.BookDto;
import mk.finki.ukim.mk.lab.model.enumerations.Category;
import mk.finki.ukim.mk.lab.repository.AuthorRepository;
import mk.finki.ukim.mk.lab.repository.BooksRepository;
import mk.finki.ukim.mk.lab.service.BooksService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BooksService {

    private final BooksRepository booksRepository;

    private final AuthorRepository authorRepository;

    public BookServiceImpl(BooksRepository booksRepository, AuthorRepository authorRepository) {
        this.booksRepository = booksRepository;
        this.authorRepository = authorRepository;
    }

    @Override
    public List<Book> findAll() {
        return this.booksRepository.findAll();
    }

    @Override
    public Optional<Book> findById(Long id) {
        return this.booksRepository.findById(id);
    }

    @Override
    public Optional<Book> save(String name, Category category, Long authorId, Integer availableCopies) {
        Author author = this.authorRepository.findById(authorId).orElseThrow();
        Book book = new Book(name,category,author,availableCopies);

        return Optional.of(this.booksRepository.save(book));
    }

    @Override
    public Optional<Book> save(BookDto bookDto) {
        Author author = this.authorRepository.findById(bookDto.getAuthor()).orElseThrow();

        this.booksRepository.deleteByName(bookDto.getName());
        Book book = new Book(bookDto.getName(),bookDto.getCategory(),author,bookDto.getAvailableCopies());

        this.booksRepository.save(book);

        return Optional.of(book);

    }

    @Override
    public Optional<Book> edit(Long id, BookDto bookDto) {
        Book book = this.findById(id).orElseThrow();
        Author author = this.authorRepository.findById(bookDto.getAuthor()).orElseThrow();

        book.setName(bookDto.getName());
        book.setCategory(bookDto.getCategory());
        book.setAuthor(author);
        book.setAvailableCopies(bookDto.getAvailableCopies());

        this.booksRepository.save(book);
        return Optional.of(book);
    }

    @Override
    public Optional<Book> edit(Long id, String name, Category category, Long authorId, Integer availableCopies) {
        Author author = this.authorRepository.findById(authorId).orElseThrow();
        Book book = this.findById(id).orElseThrow();

        book.setName(name);
        book.setCategory(category);
        book.setAuthor(author);
        book.setAvailableCopies(availableCopies);
        return Optional.of(this.booksRepository.save(book));
    }

    @Override
    public void markAsTaken(Long id) {
        Book book = this.findById(id).orElseThrow();

        Integer newAvbCopies = book.getAvailableCopies() - 1;

        book.setAvailableCopies(newAvbCopies);

        this.booksRepository.save(book);
    }

    @Override
    public void deleteById(Long id) {
        this.booksRepository.deleteById(id);
    }
}
