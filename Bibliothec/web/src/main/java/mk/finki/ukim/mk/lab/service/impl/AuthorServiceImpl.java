package mk.finki.ukim.mk.lab.service.impl;


import mk.finki.ukim.mk.lab.model.Author;
import mk.finki.ukim.mk.lab.model.Country;
import mk.finki.ukim.mk.lab.repository.AuthorRepository;
import mk.finki.ukim.mk.lab.repository.CountryRepository;
import mk.finki.ukim.mk.lab.service.AuthorService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;

    private final CountryRepository countryRepository;


    public AuthorServiceImpl(AuthorRepository authorRepository, CountryRepository countryRepository) {
        this.authorRepository = authorRepository;
        this.countryRepository = countryRepository;
    }

    @Override
    public Author create(String name, String surname, Long countryId) {
        Country country = this.countryRepository.findById(countryId).orElseThrow();
        Author author = new Author(name,surname,country);

        return this.authorRepository.save(author);
    }

    @Override
    public Author update(Long id, String name, String surname, Long countryId) {
        Country country = this.countryRepository.findById(countryId).orElseThrow();

        Author author = this.findById(id).orElseThrow();

        author.setName(name);
        author.setSurname(surname);
        author.setCountry(country);

        return this.authorRepository.save(author);

    }

    @Override
    public void deleteById(Long Id) {
        this.authorRepository.deleteById(Id);
    }

    @Override
    public List<Author> findAll() {
        return this.authorRepository.findAll();
    }

    @Override
    public Optional<Author> findById(Long id) {
        return this.authorRepository.findById(id);
    }
}
