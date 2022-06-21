package JpaAPi.demo;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UsersDto {
    private Long id;
    private String username;
    private int credit;
}
