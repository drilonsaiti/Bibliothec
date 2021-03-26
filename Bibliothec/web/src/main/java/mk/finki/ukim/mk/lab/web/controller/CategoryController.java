package mk.finki.ukim.mk.lab.web.controller;


import mk.finki.ukim.mk.lab.model.enumerations.Category;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Controller
public class CategoryController {

    @GetMapping("/categories")
    public String findAll(Model model){
        List<Category> list = Arrays.stream(Category.values()).sequential().collect(Collectors.toList());
        model.addAttribute("categories",list);

        return "categories";
    }
}

