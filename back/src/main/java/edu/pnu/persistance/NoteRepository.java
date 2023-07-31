package edu.pnu.persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import edu.pnu.domain.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {
	
//	@Query(value = "SELECT * FROM note WHERE user_Id = :userId AND date = :date", nativeQuery = true)
//	List<Note> findByDate(@Param("userId") String userId,@Param("date") Date date);
	
	@Query("SELECT n FROM Note n WHERE n.userId = :userId")
	List<Note> findByUserId(@Param("userId") String userId);

}
