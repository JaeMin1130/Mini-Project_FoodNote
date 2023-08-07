//package edu.pnu.service;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import edu.pnu.domain.Member;
//import edu.pnu.persistance.MemberRepository;
//
//@Service
//public class MemberService implements UserDetailsService {
//
//	@Autowired
//	MemberRepository memRepo;
//	
//	@Override
//	public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
//		
//		Optional <Member> option = memRepo.findById(userId);
//		if (!option.isPresent()) {
//			return null;
//		}
//		
//		Member member = option.get();
//		
//		System.out.println(member);
//		
//        return new User(
//        		member.getUserId(),
//        		member.getPassword(),
//        		member.getAuthorities()
//        );
//	}
//}
