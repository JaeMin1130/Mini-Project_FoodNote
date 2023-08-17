package edu.pnu.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import edu.pnu.domain.Member;
import edu.pnu.persistance.MemberRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoginService {

	@Autowired
	MemberRepository memRepo;
	@Autowired
	private PasswordEncoder encoder;

	// 1.회원가입
	public Boolean join(Member member) {
		Optional<Member> option = memRepo.findById(member.getUserId());

		if (option.isPresent()) {
			return false;
		}

		String encodedPassword = encoder.encode(member.getPassword());

		memRepo.save(Member.builder().userId(member.getUserId()).password(encodedPassword).role("Member").build());

		return true;
	}

	// 2.로그인
	public boolean login(Member member) {

		Optional<Member> option = memRepo.findById(member.getUserId());
		if (option.isPresent()) {
			Member member1 = option.get();
			if (encoder.matches(member.getPassword(), member1.getPassword())) {
				return true;
			}
		}
		return false;
	}
}
