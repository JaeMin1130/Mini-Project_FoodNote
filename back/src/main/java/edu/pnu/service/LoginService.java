package edu.pnu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import edu.pnu.domain.User;
import edu.pnu.persistance.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoginService {
	
	
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private PasswordEncoder encoder;
	
	//1.회원가입
	public Boolean save(User user) {
        userRepo.save(User.builder()
                .userId(user.getUserId())
                .password(encoder.encode(user.getPassword()))
                .role("ROLE_MEMBER")
                .build());
        userRepo.save(user);
        return true;
	}
	
	//2.로그인
	public boolean login() {
		// TODO Auto-generated method stub
		return false;
	}
}
