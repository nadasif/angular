package io.getarrays.server.resource;

import io.getarrays.server.model.Book;
import io.getarrays.server.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
@RequestMapping("/book")
@RequiredArgsConstructor
public class BookResource {

    private final BookService service;

    @GetMapping("/list")
    public Collection<Book> list(){
        return service.list();
    }
}
