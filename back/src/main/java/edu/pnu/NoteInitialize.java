//package edu.pnu;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.ApplicationArguments;
//import org.springframework.boot.ApplicationRunner;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Component;
//
//import edu.pnu.domain.User;
//import edu.pnu.persistance.UserRepository;
//
//@Component
//public class NoteInitialize implements ApplicationRunner {
//
//	@Autowired
//	UserRepository userRepo;
//	
//	@Autowired
//	BCryptPasswordEncoder encoder;
//	
//	@Override
//	public void run(ApplicationArguments args) throws Exception {
//		
//		userRepo.save(User.builder()
//				.userId("member")
//				.password(encoder.encode("abcd"))
//				.role("ROLE_MEMBER")
//				
//				.build());
//		
//		userRepo.save(User.builder()
//				.userId("manager")
//				.password(encoder.encode("abcd"))
//				.role("ROLE_MANAGER")
//			
//				.build());
//		
//		userRepo.save(User.builder()
//				.userId("admin")
//				.password(encoder.encode("abcd"))
//				.role("ROLE_ADMIN")
//		
//				.build());
//	}
//
//}
