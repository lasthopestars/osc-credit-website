package JpaAPi.demo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrdersDto {
    private Long id;
    private ItemDto item;
    private UsersDto user;


}
