package JpaAPi.demo;

import JpaAPi.demo.entity.Item;
import JpaAPi.demo.entity.Users;
import JpaAPi.demo.repository.ItemRepository;
import JpaAPi.demo.repository.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class PostData implements ApplicationListener<ContextRefreshedEvent> {

    private final ItemRepository itemRepository;
    private final UsersRepository usersRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        Users user1 = new Users();
        user1.setUserName("user1");
        user1.setCredit(2000);

        Users user2 = new Users();
        user2.setUserName("user2");
        user2.setCredit(4000);
        usersRepository.save(user1);
        usersRepository.save(user2);

        for (int i = 0; i < 5; i++) {
            Item item = new Item();
            item.setItemName("item" + i);
            item.setPrice(i + 2);
            itemRepository.save(item);
        }
    }


}
