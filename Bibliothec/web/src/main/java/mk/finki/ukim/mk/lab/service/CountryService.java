package mk.finki.ukim.mk.lab.service;


import mk.finki.ukim.mk.lab.model.Country;

import java.util.List;
import java.util.Optional;

public interface CountryService {

    Country create(String name, String continent);

    Country update(Long id,String name,  String continent);

    void deleteById(Long Id);

    List<Country> findAll();

    Optional<Country> findById(Long id);
}
