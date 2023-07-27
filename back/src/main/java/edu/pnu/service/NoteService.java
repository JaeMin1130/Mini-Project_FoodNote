package edu.pnu.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

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

	//4.날짜 조회
	public List<Note> searchDate(Date date) {
		List<Note> notes = noteRepo.findByDate(date);
		return notes;
	}

	//5.식단 추가
	public Note insertNote(Note note) {
		Note n = new Note();
		n.setUserId(note.getUserId());
		n.setFoodName(note.getFoodName());
		n.setAmount(note.getAmount());	
		n.setImageData(note.getImageData());
		n.setMealType(note.getMealType());
		
		return noteRepo.save(n);
	}

	//6.음식 조회
	public List<Food> searchFood(String keyword) {
		System.out.println(keyword);
		List<Food> foods = foodRepo.findByName(keyword);
		
		return foods;
	}

	//7.식단 수정
	public Note updateFood(Note note) {
		Optional<Note> optionalNote = noteRepo.findById(note.getId());
		
		if(!optionalNote.isPresent()) {
			throw new EntityNotFoundException(
                    "Id not present in the database");
		}
		
		Note n = optionalNote.get();
		n.setUserId(note.getUserId());
		n.setFoodName(note.getFoodName());
		n.setAmount(note.getAmount());
		n.setImageData(note.getImageData());
		n.setMealType(note.getMealType());
		
		return noteRepo.save(n);
		
	}

	//8.식단 삭제
	public boolean deleteFood(Long id) {
		try {
			noteRepo.deleteById(id);
			return true;
		} catch(Exception e) {
	        return false;
		}
	}
}
