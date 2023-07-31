package edu.pnu.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.pnu.domain.Food;
import edu.pnu.domain.Note;
import edu.pnu.domain.SearchLog;
import edu.pnu.persistance.FoodRepository;
import edu.pnu.persistance.NoteRepository;
import edu.pnu.persistance.SearchLogRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NoteService {

	@Autowired
	NoteRepository noteRepo;
	@Autowired
	FoodRepository foodRepo;
	@Autowired
	SearchLogRepository searchRepo;

	// 4.사용자별 조회
	public List<Note> getToday(String userId) {
		return noteRepo.findByUserId(userId);
	}

//	public List<Note> searchDate(String userId, Date date) {
//		List<Note> notes = noteRepo.findByDate(userId, date);
//		return notes;
//	}

	// 5.식단 추가
	public Note insertNote(Note note) {

		double userAmount = note.getAmount();
		double servingSize = note.getServing_size();
		double ratio = 0;

		if (servingSize != 0) {
			ratio = userAmount / servingSize;
		}

		Note n = new Note();
		n.setUserId(note.getUserId());
		n.setFoodName(note.getFoodName());
		n.setAmount(userAmount);
		n.setMealType(note.getMealType());
		n.setImageData(note.getImageData());
		n.setDate(note.getDate());
		n.setBrand(note.getBrand());

		
		n.setServing_size(servingSize);
		n.setCalories(note.getCalories() * ratio);
		n.setCarbohydrate(note.getCarbohydrate() * ratio);
		n.setProtein(note.getProtein() * ratio);
		n.setFat(note.getFat() * ratio);
		n.setSugars(note.getSugars() * ratio);
		n.setSodium(note.getSodium() * ratio);
		n.setCholesterol(note.getCholesterol() * ratio);
		n.setCaffeine(note.getCaffeine() * ratio);

		
		return noteRepo.save(n);
	}

	// 6.음식 조회
	public List<Food> searchFood(String keyword) {
		System.out.println(keyword);
		List<Food> foods = foodRepo.findByName(keyword);
		
		String userId = "user123";
		saveSearchLog(userId, keyword);

		return foods;
	}

	private void saveSearchLog(String userId, String keyword) {
		
		SearchLog log = searchRepo.findByUserIdAndKeyword(userId, keyword);

		if (log == null) {
			log = new SearchLog();
			log.setUserId(userId);
			log.setKeyword(keyword);
			searchRepo.save(log);
		} 
	}

	// 7.식단 수정
	public Note updateFood(Note note) {
		Optional<Note> optionalNote = noteRepo.findById(note.getId());

		if (!optionalNote.isPresent()) {
			throw new EntityNotFoundException("Id not present in the database");
		}

		Note n = optionalNote.get();
		n.setUserId(note.getUserId());
		n.setFoodName(note.getFoodName());
		n.setAmount(note.getAmount());
		n.setImageData(note.getImageData());
		n.setMealType(note.getMealType());

		return noteRepo.save(n);

	}

	// 8.식단 삭제
	public boolean deleteFood(Long id) {
		try {
			noteRepo.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	// 9. 최근 검색어 조회
	public List<SearchLog> searchKeyword(String userId) {
		
		return searchRepo.findByUserId(userId);
	}
}
