package mk.finki.ukim.mk.lab.web.rest;


import mk.finki.ukim.mk.lab.model.enumerations.Category;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/categories")
public class CategoryRestController {

    @GetMapping
    public List<Category> findAll(){
        System.out.println(Arrays.stream(Category.values()).sequential().collect(Collectors.toList()));
        return Arrays.stream(Category.values()).sequential().collect(Collectors.toList());
    }
}
