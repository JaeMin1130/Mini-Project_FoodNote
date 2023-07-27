package edu.pnu.persistance;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.pnu.domain.Food;
import edu.pnu.domain.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {
	@Query(value = "SELECT * FROM note WHERE date LIKE %:date%", nativeQuery = true)
	List<Note> findByDate(Date date);
}
