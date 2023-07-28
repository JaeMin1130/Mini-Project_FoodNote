package edu.pnu.persistance;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import edu.pnu.domain.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {
	
	@Query(value = "SELECT * FROM note WHERE date LIKE %:date%", nativeQuery = true)
	List<Note> findByDate(Date date);
	
	@Query("SELECT f.name, f.brand, f.serving_size, f.calories, f.carbohydrate, f.protein, f.fat, f.sugars, f.sodium, f.cholesterol, f.caffeine, n.image_Data, n.amount, n.date " +
		       "FROM Food f INNER JOIN Note n ON n.food_No = f.no " +
		       "WHERE f.no = :food_No")
	List<Object[]> findByFoodNoAndDate(@Param("food_No") int foodNo);
}
