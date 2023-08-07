package edu.pnu.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import edu.pnu.domain.Member;
import edu.pnu.persistance.MemberRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private MemberRepository memRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Member> opt = memRepo.findById(username);
		if (!opt.isPresent()) {
			throw new UsernameNotFoundException("User not found.");
		}
		Member m = opt.get();
		return new User(m.getUserId(), m.getPassword(), m.getAuthorities());
	}
}

// @Override
// public UserDetails loadUserByUsername(String userId) throws
// UsernameNotFoundException {
// Optional<Member> member = memRepo.findById(userId);
// UserBuilder builder = null;
//
// if(member.isPresent()) {
// Member currentMember = member.get();
// builder =
// User.withUsername(userId);
// builder.password(currentMember.getPassword());
// builder.roles(currentMember.getRole());
// } else {
// throw new UsernameNotFoundException("UserId not found.");
// }
// return builder.build();

// Member member = memRepo.findById(userId).orElseThrow(()->
// new UsernameNotFoundException("Not Found!"));
// return new User(member.getUserId(), member.getPassword(),
// member.getAuthorities());
// }
