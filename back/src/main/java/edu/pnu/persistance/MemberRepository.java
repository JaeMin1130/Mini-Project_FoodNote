package edu.pnu.persistance;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.pnu.domain.User;

//Member Table에 CRUD를 위한 인터페이스 
public interface UserRepository extends JpaRepository<User, String> {
	
}
