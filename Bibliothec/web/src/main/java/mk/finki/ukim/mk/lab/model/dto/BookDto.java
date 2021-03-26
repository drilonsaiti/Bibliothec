package mk.finki.ukim.mk.lab.model.dto;


import lombok.Data;
import mk.finki.ukim.mk.lab.model.Author;
import mk.finki.ukim.mk.lab.model.enumerations.Category;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;

@Data
public class BookDto {

    private Long id;

    private String name;

    private Category category;

    private Long author;

    private Integer availableCopies;

    public BookDto(String name, Category category, Long author, Integer availableCopies) {
        this.name = name;
        this.category = category;
        this.author = author;
        this.availableCopies = availableCopies;
    }

    public BookDto() {
    }
}
