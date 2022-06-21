package JpaAPi.demo.controller;

import JpaAPi.demo.entity.Item;
import JpaAPi.demo.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Item RestController
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/items")
public class ItemController {

    private final ItemRepository itemRepository;

    @GetMapping
    public List<Item> allItem() {

        return itemRepository.findAll();
    }



}
