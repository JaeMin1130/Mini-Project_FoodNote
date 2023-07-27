package edu.pnu;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import edu.pnu.domain.Note;
import edu.pnu.persistance.NoteRepository;

@SpringBootTest
class BigDataApplicationTests {
	@Autowired
	NoteRepository noteRepo;
	
	@Test
	void contextLoads() {
		noteRepo.save(Note.builder()
				.foodName("Iru").build());
	}

}
