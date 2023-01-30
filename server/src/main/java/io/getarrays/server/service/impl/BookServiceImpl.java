package io.getarrays.server.service.impl;

import io.getarrays.server.model.Book;
import io.getarrays.server.repo.BookRepository;
import io.getarrays.server.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    private final BookRepository repository;
    @Override
    public List<Book> list() {
        return repository.findAll();
    }
}
