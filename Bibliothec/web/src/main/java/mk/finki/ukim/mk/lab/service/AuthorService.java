package mk.finki.ukim.mk.lab.service;


import mk.finki.ukim.mk.lab.model.Author;

import java.util.List;
import java.util.Optional;

public interface AuthorService {

    Author create(String name, String surname, Long countryId);

    Author update(Long id,String name, String surname,Long countryId);

    void deleteById(Long Id);

    List<Author> findAll();

    Optional<Author> findById(Long id);


}
