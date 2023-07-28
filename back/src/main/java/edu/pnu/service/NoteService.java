package edu.pnu.service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.pnu.domain.DTO;
import edu.pnu.domain.Food;
import edu.pnu.domain.Note;
import edu.pnu.persistance.FoodRepository;
import edu.pnu.persistance.NoteRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NoteService {

	@Autowired
	NoteRepository noteRepo;
	@Autowired
	FoodRepository foodRepo;

	// 4.사용자별 조회
	public List<DTO> getToday(String userId)  {
		List<Object[]> resultList = noteRepo.findByUserId(userId);
		List<DTO> dtoList = new ArrayList<>();

		for (Object[] row : resultList) {
			DTO dto = new DTO();
	        dto.setName((String) row[0]);
	        dto.setBrand((String) row[1]);
	        dto.setServing_size((String) row[2]);
	        dto.setCalories((String) row[3]);
	        dto.setCarbohydrate((String) row[4]);
	        dto.setProtein((String) row[5]);
	        dto.setFat((String) row[6]);
	        dto.setSugars((String) row[7]);
	        dto.setSodium((String) row[8]);
	        dto.setCholesterol((String) row[9]);
	        dto.setCaffeine((String) row[10]);
	        dto.setMealType((String) row[11]);
	        dto.setImageData((byte[]) row[12]);
	        dto.setAmount((int) row[13]);
	        try {
	            String dateString = row[14].toString();
	            dateString = dateString.replace(".0", ""); 
	            System.out.println(dateString);

	   
	            dto.setDate(dateString);
	        } catch (ParseException e) {
	        	e.printStackTrace();
	        }
	        dto.setUserId((String) row[15]);
	        dtoList.add(dto);
		}
	    return dtoList;
	}

	// 5.날짜 조회
	public List<Note> searchDate(Date date) {
		List<Note> notes = noteRepo.findByDate(date);
		return notes;
	}

	// 6.식단 추가
	public Note insertNote(Note note) {
		Note n = new Note();
		n.setUserId(note.getUserId());
		n.setFoodName(note.getFoodName());
		n.setAmount(note.getAmount());
		n.setImageData(note.getImageData());
		n.setMealType(note.getMealType());

		return noteRepo.save(n);
	}

	// 7.음식 조회
	public List<Food> searchFood(String keyword) {
		System.out.println(keyword);
		List<Food> foods = foodRepo.findByName(keyword);

		return foods;
	}

	// 8.식단 수정
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

	// 9.식단 삭제
	public boolean deleteFood(Long id) {
		try {
			noteRepo.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}
