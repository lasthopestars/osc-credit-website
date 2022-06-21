package JpaAPi.demo.service;

import JpaAPi.demo.entity.Users;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


@SpringBootTest
public class UsersServiceTest {
    @Autowired
    UsersService usersService;

    @Test
    public void updateCredit() {
        //Users updateCredit(String userName, Integer credit) {
        Users updateUser= usersService.updateCredit(2L, 4000);

        assertThat(updateUser.getCredit()).isEqualTo(6000);
    }
}