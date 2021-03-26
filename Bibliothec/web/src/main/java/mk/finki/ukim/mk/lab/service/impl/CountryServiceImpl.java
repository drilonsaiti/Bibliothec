package mk.finki.ukim.mk.lab.service.impl;


import mk.finki.ukim.mk.lab.model.Country;
import mk.finki.ukim.mk.lab.repository.CountryRepository;
import mk.finki.ukim.mk.lab.service.CountryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public Country create(String name, String continent) {
        Country country = new Country(name,continent);

        return this.countryRepository.save(country);
    }

    @Override
    public Country update(Long id, String name, String continent) {
        Country country = this.findById(id).orElseThrow();

        country.setName(name);
        country.setContinent(continent);

        return this.countryRepository.save(country);
    }

    @Override
    public void deleteById(Long Id) {
        this.countryRepository.deleteById(Id);
    }

    @Override
    public List<Country> findAll() {
        return this.countryRepository.findAll();

    }

    @Override
    public Optional<Country> findById(Long id) {
        return this.countryRepository.findById(id);
    }
}
