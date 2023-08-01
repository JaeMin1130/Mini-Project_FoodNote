package edu.pnu;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Random;

import org.aspectj.lang.annotation.Before;
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
		noteRepo.save(Note.builder().foodName("Iru").build());
	}

	private static final String[] MEAL_TYPES = { "아침", "점심", "저녁" };

	@Test
	public void testSample() {
		List<Note> result = addSampleData();

		// 테스트 결과(result)에 대한 검증 로직 작성
	}

	public List<Note> addSampleData() {
		List<Note> noteList = new ArrayList<>();
		Random random = new Random();

		for (int k = 1; k <= 3; k++) {
			for (int j = 1; j <= 10; j++) {
				for (int i = 1; i <= 3; i++) {
					Note n = new Note();
					n.setUserId("user" + j);
					n.setFoodName("음식 " + i);
					n.setAmount(100 + i); 
					n.setMealType(MEAL_TYPES[random.nextInt(MEAL_TYPES.length)]);
					n.setDate(getRandomDate()); 
					n.setBrand("Sample Brand " + i); 
					n.setServing_size(50 + i); 
					n.setCalories(500 + i); 
					n.setCarbohydrate(30 + i); 
					n.setProtein(20 + i); 
					n.setFat(10 + i); 
					n.setSugars(5 + i); 
					n.setSodium(500 + i);
					n.setCholesterol(50 + i); 
					n.setCaffeine(20 + i); 

					noteList.add(noteRepo.save(n));
				}
			}
		}
		return noteList;
	}

	public Date getRandomDate() {
	    Calendar calendar = new GregorianCalendar();
	    calendar.set(Calendar.YEAR, 2023);
	    calendar.set(Calendar.MONTH, Calendar.JANUARY);

	    Random random = new Random();
	    int days = random.nextInt(3);

	    calendar.add(Calendar.DAY_OF_YEAR, days);

	    return calendar.getTime();
	}
}
