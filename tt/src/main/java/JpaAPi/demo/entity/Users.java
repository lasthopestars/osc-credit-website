package JpaAPi.demo.entity;

import JpaAPi.demo.ItemDto;
import JpaAPi.demo.OrdersDto;
import JpaAPi.demo.UsersDto;
import lombok.Data;
import org.hibernate.validator.constraints.UniqueElements;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Users {
    @Id
    @GeneratedValue
    @Column(name = "User_id")
    private Long id;
    @Column(unique = true)
    private String userName;
    //username이 겹치면 안되어서 unique
    private Integer credit;


    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", credit=" + credit +
                '}';
    }


    public UsersDto toDto() {
        return new UsersDto(this.id,this.userName,this.credit);

    }
}
