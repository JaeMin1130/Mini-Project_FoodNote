package edu.pnu.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import edu.pnu.domain.Member;
import edu.pnu.persistance.MemberRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoginService {

	@Autowired
	MemberRepository memRepo;
	@Autowired
	private PasswordEncoder encoder;
	@Autowired
	private HttpServletRequest request;

	// 1.회원가입
	public Boolean save(Member member) {

		if (memRepo.existsById(member.getUserId())) {
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

	// 3. 로그아웃
	public boolean logout() {

		try {
			System.out.println("로그아웃 성공");
			request.getSession().invalidate();
			return true;
		} catch (Exception e) {
			System.out.println("로그아웃 실패");
			return false;
		}
	}
}
