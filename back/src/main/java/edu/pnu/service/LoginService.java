//package edu.pnu.service;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import edu.pnu.domain.Member;
//import edu.pnu.persistance.MemberRepository;
//import lombok.RequiredArgsConstructor;
//
//@Service
//@RequiredArgsConstructor
//public class LoginService {
//	
//	
//	@Autowired
//	private MemberRepository memRepo;
//	@Autowired
//	private PasswordEncoder encoder;
//	
//	//1.회원가입
//	public Boolean save(Member member) {
//		memRepo.save(Member.builder()
//                .userId(member.getUserId())
//                .password(encoder.encode(member.getPassword()))
//                .role("ROLE_MEMBER")
//                .build());
//		memRepo.save(member);
//        return true;
//	}
//	
//	//2.로그인
//	public boolean login(String userId, String password) {
//	   
//        Optional<User> optionalUser = memRepo.findById(userId);
//        if (optionalUser.isPresent()) {
//            User user = optionalUser.get();
//
//            if (encoder.matches(password, user.getPassword())) {
//                return true;
//            }
//        }
//        return false;
//    }
//	
//	//3.로그아웃
//	public void logout() {
//		SecurityContextHolder.clearContext();
//	}
//}
