package JpaAPi.demo.service;

import JpaAPi.demo.entity.Item;
import JpaAPi.demo.entity.Orders;
import JpaAPi.demo.entity.Users;
import JpaAPi.demo.repository.ItemRepository;
import JpaAPi.demo.repository.OrdersRepository;
import JpaAPi.demo.repository.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class OrderService {

    private final OrdersRepository ordersRepository;
    private final UsersRepository usersRepository;
    private final ItemRepository itemRepository;

    /**
     * 주문생성
     * 주문정보인 유저와 item을 Orders 객체로 만들어서 repository로 리턴해줌
     * 그리고 item의 가격에 따른 user의 credit정보 업데이트(차감)
     */
    public Orders saveOrders(Long userId, Long itemId) {
        Users users = usersRepository.findById(userId).get();
        Item item = itemRepository.findById(itemId).get();
        Orders orders = new Orders();
        orders.setItem(item);
        orders.setUser(users);
        Integer price = item.getPrice();
        users.setCredit(users.getCredit()-price);
        usersRepository.save(users);
        return ordersRepository.save(orders);
    }

    /**
     * 나의 주문정보 보기
     */
    public List<Orders> findMyOrderList(Long userId) {
        return ordersRepository.findByUserId(userId);
    }
}
