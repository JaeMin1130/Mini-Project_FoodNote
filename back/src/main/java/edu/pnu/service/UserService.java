package edu.pnu.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import edu.pnu.domain.User;
import edu.pnu.persistance.UserRepository;

//@Service
//public class UserService implements UserDetailsService {
//
//	@Autowired
//	UserRepository userRepo;
//	
//	@Override
//	public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
//		
//		Optional <User> option = userRepo.findById(userId);
//		if (!option.isPresent()) {
//			throw new UsernameNotFoundException("사용자가 없습니다.");
//		}
//		
//		User user = option.get();
//		
//		System.out.println(user);
//		
//		return new User(user.getUserId(), user.getPassword(), user.getAuthorities());
//	}

<<<<<<< HEAD
	@Autowired
	UserRepository userRepo;
	
	@Override
	public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
		
		Optional <User> option = userRepo.findById(userId);
		if (!option.isPresent()) {
			throw new UsernameNotFoundException("사용자가 없습니다.");
		}
		
		User user = option.get();
		
		System.out.println(user);
		
        return new org.springframework.security.core.userdetails.User(
                user.getUserId(),
                user.getPassword(),
                user.getAuthorities()
        );
	}
}
=======
//}
>>>>>>> 3f28b4f37577b24f844a0b7b9fea915a5fbd2208
