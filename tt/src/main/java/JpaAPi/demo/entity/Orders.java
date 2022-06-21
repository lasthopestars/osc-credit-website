package JpaAPi.demo.entity;

import JpaAPi.demo.ItemDto;
import JpaAPi.demo.OrdersDto;
import JpaAPi.demo.UsersDto;
import lombok.Data;
import org.hibernate.annotations.Fetch;
import org.springframework.context.annotation.Lazy;

import javax.persistence.*;

@Entity
@Data
public class Orders {
    @Id
    @GeneratedValue
    @Column(name = "Order_id")
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="User_id")

    private Users user;
    //외부키를 user로 조인..
    // -> 외래키 user_id


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="Item_id")
    private Item item;


    public OrdersDto toDto() {
        OrdersDto ordersDto = new OrdersDto();
        System.out.println(" ===========" );
        ordersDto.setItem(new ItemDto(this.item.getId(),this.item.getItemName()));
        ordersDto.setUser(new UsersDto(this.user.getId(),this.user.getUserName(),this.user.getCredit()));
        ordersDto.setId(this.id);
        return ordersDto;
    }
}
