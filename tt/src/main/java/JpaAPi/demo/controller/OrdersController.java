package JpaAPi.demo.controller;

import JpaAPi.demo.OrdersDto;
import JpaAPi.demo.entity.Orders;
import JpaAPi.demo.service.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.*;

/**
 * Orders RestController
 */
@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/orders")
public class OrdersController {

    private final OrderService orderService;
    //생성자로 di 하기

    @PostMapping("/{itemId}")
    public ResponseEntity saveOrders (@PathVariable Long itemId, HttpSession session) {
        if (session ==null||session.getAttribute("user")==null) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("로그인하세요");
        }

        Long userId = (Long) session.getAttribute("user");
        Orders orders = orderService.saveOrders(userId, itemId);

        return ResponseEntity.ok().body(orders.toDto());

    }


    @GetMapping
    public ResponseEntity orders (HttpSession session) {
        if (session ==null||session.getAttribute("user")==null) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("로그인하세요");
        }

        Long userId = (Long) session.getAttribute("user");
        List<Orders> myOrderList = orderService.findMyOrderList(userId);
        List<OrdersDto> collect = myOrderList.stream().map(i -> i.toDto()).collect(toList());

        return ResponseEntity.ok().body(collect);

    }
}
