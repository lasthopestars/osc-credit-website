package JpaAPi.demo.service;

import JpaAPi.demo.entity.Users;
import JpaAPi.demo.repository.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsersService {

    private final UsersRepository usersRepository;


    public Users updateCredit(Long userId, Integer credit) {
        Users findUsers = findUser(userId);
        //5000
        Integer usersCredit = findUsers.getCredit();
        findUsers.setCredit(usersCredit+credit);
        //6000
        Users updateUser = usersRepository.save(findUsers);
        return updateUser;
    }


    public Users findUser(String username) {
       return usersRepository.findByUserName(username);
    }


    public Users findUser(Long userId) {
        return usersRepository.findById(userId).orElse(null);
    }


    public Users save(String username) {
        Users users = new Users();
        users.setUserName(username);
        users.setCredit(0);
        return usersRepository.save(users);
    }
}
