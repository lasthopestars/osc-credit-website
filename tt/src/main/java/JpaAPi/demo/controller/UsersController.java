package JpaAPi.demo.controller;

import JpaAPi.demo.entity.Users;
import JpaAPi.demo.service.UsersService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.nio.file.AccessDeniedException;


@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Slf4j
public class UsersController {
    private final UsersService usersService;

    @PostMapping("/addCredit/{credit}")// /users/add
    public ResponseEntity buyCredit(@PathVariable Integer credit, HttpSession session){
        if (session ==null||session.getAttribute("user")==null) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("로그인하세요");
        }

        Long userId = (Long) session.getAttribute("user");
        Users updateUser = usersService.updateCredit(userId, credit);
        return ResponseEntity.ok().body(updateUser.toDto());

    }

    @PostMapping("/join")
    public ResponseEntity joinUser(String username){
        Users joinUser = usersService.save(username);
        return ResponseEntity.ok().body(joinUser);
    }


    @PostMapping("/login")
    public ResponseEntity login(String username, HttpSession session) throws AccessDeniedException {
        Users user = usersService.findUser(username);
        if (user == null) {
           return ResponseEntity.badRequest().body("없는 유저입니다");
        }
        session.setAttribute("user",user.getId());
        return ResponseEntity.ok().body(user.toDto());
    }



    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity uniqueException(DataIntegrityViolationException e) {
        log.error(e.getMessage());
        return ResponseEntity.badRequest().body("이미 존재하는 회원입니다.");
    }



}
