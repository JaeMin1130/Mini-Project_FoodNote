package edu.pnu.persistance;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import edu.pnu.domain.DTO;
import edu.pnu.domain.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {
	
	@Query(value = "SELECT * FROM note WHERE date LIKE %:date%", nativeQuery = true)
	List<Note> findByDate(Date date);
	
	@Query(value = "SELECT f.name, f.brand, f.serving_size, f.calories, f.carbohydrate, f.protein, f.fat, f.sugars, f.sodium, f.cholesterol, f.caffeine, n.meal_type, n.image_Data, n.amount, n.date, n.user_Id "
			+ "FROM Note n "
			+ "INNER JOIN Food f ON n.food_No = f.no "
			+ "WHERE user_Id = :user_Id ", nativeQuery = true)
	List<Object[]> findByUserId(@Param("user_Id") String userId);
}
