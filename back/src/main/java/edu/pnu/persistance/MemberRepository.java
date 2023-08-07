package edu.pnu.persistance;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.pnu.domain.Member;


public interface MemberRepository extends JpaRepository<Member, String> {
	Optional<Member> findByUserId(String userId);
}
