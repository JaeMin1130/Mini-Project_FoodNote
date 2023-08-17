package edu.pnu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import edu.pnu.domain.Member;
import edu.pnu.persistance.MemberRepository;

@Component
public class NoteInitialize implements ApplicationRunner {

	@Autowired
	MemberRepository memRepo;

	@Autowired
	BCryptPasswordEncoder encoder;

	@Override
	public void run(ApplicationArguments args) throws Exception {

		memRepo.save(Member.builder().userId("admin").password(encoder.encode("123")).role("Admin")
				.build());
	}

}
