package edu.pnu;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Random;

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

	@Test
	public List<Note> initSampleData() {
		return addSampleData();
	}

	private static final String[] MEAL_TYPES = { "아침", "점심", "저녁" };

	public List<Note> addSampleData() {
		List<Note> noteList = new ArrayList<>();
		Random random = new Random();
		for (int i = 1; i <= 100; i++) {
			Note n = new Note();
			n.setUserId("user" + i);
			n.setFoodName("음식 " + i);
			n.setAmount(100 + i); // Set a sample value for amount (you can change it as needed)
			n.setMealType(MEAL_TYPES[random.nextInt(MEAL_TYPES.length)]);
			n.setDate(getRandomDateAfterJanuary2023()); // Use the getRandomDateAfterJanuary2023() method from the
														// previous answer to set a random date after January 2023
			n.setBrand("Sample Brand " + i); // Set a sample value for brand (you can change it as needed)
			n.setServing_size(50 + i); // Set a sample value for serving_size (you can change it as needed)
			n.setCalories(500 + i); // Set a sample value for calories (you can change it as needed)
			n.setCarbohydrate(30 + i); // Set a sample value for carbohydrate (you can change it as needed)
			n.setProtein(20 + i); // Set a sample value for protein (you can change it as needed)
			n.setFat(10 + i); // Set a sample value for fat (you can change it as needed)
			n.setSugars(5 + i); // Set a sample value for sugars (you can change it as needed)
			n.setSodium(500 + i); // Set a sample value for sodium (you can change it as needed)
			n.setCholesterol(50 + i); // Set a sample value for cholesterol (you can change it as needed)
			n.setCaffeine(20 + i); // Set a sample value for caffeine (you can change it as needed)

			noteList.add(noteRepo.save(n));
		}
		return noteList;
	}

    public Date getRandomDateAfterJanuary2023() {
        Calendar calendar = new GregorianCalendar();
        calendar.set(Calendar.YEAR, 2023);
        calendar.set(Calendar.MONTH, Calendar.JANUARY);
        calendar.set(Calendar.DAY_OF_MONTH, 1);

        Random random = new Random();
        int daysToAdd = random.nextInt(212); // 0부터 212 사이의 랜덤한 숫자를 얻음 (2023년 1월 1일부터 2023년 7월 31일까지의 날짜 수)

        calendar.add(Calendar.DAY_OF_YEAR, daysToAdd);

        return calendar.getTime();
    }
}
