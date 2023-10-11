package edu.pnu.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import edu.pnu.domain.Food;
import edu.pnu.domain.Note;
import edu.pnu.domain.SearchLog;
import edu.pnu.service.NoteService;

@RestController
@RequestMapping("/main")
public class NoteController {

	@Autowired
	NoteService noteService;

	// 3.사용자별 조회
	@GetMapping("/{userId}")
	public List<Note> getToday(@PathVariable String userId) {
		return noteService.getToday(userId);
	}

	// 4.식단 추가
	@PostMapping("/note")
	public Note insertNote(@RequestPart("note") Note note,
			@RequestPart(value = "file", required = false) MultipartFile file)
			throws IOException {
		return noteService.insertNote(note, file);
	}

	// 5.음식 조회
	@GetMapping("/search/{keyword}")
	public List<Food> searchFood(@PathVariable String keyword) {
		System.out.println("searchfood: " + keyword);
		return noteService.searchFood(keyword);
	}

	// 6.검색 기록 저장
	@GetMapping("/searchLog/save/{keyword}")
	@CrossOrigin(origins = "https://jaemin1130.github.io", methods = RequestMethod.GET)
	public List<Food> searchLog(@PathVariable String keyword) {
		System.out.println(keyword);
		return noteService.searchLog(keyword);
	}

	// 7.식단 수정
	@PutMapping("/update")
	public Note updateFood(@RequestBody Note note) {
		return noteService.updateFood(note);
	}

	// 8.식단 삭제
	@DeleteMapping("/delete/{id}")
	public boolean deleteFood(@PathVariable Long id) {
		return noteService.deleteFood(id);
	}

	// 9. 최근 검색어 조회
	@GetMapping("/searchLog/{userId}")
	public List<SearchLog> searchKeyword(@PathVariable String userId) {
		return noteService.searchKeyword(userId);
	}

	// 10. 최근 검색어 삭제
	@DeleteMapping("/searchLog/delete/{keyword}")
	public boolean deleteKeyword(@PathVariable String keyword) {
		return noteService.deleteKeyword(keyword);
	}
}