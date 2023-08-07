package edu.pnu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.pnu.domain.Food;
import edu.pnu.domain.Note;
import edu.pnu.domain.SearchLog;
import edu.pnu.service.NoteService;

@RestController
public class NoteController {

	@Autowired
	NoteService noteService;

	// 4.사용자별 조회
	@GetMapping("/main/{userId}")
	public List<Note> getToday(@AuthenticationPrincipal User user, @PathVariable String userId) {
		System.out.println(user);
		return noteService.getToday(userId);
	}

	// @GetMapping("/main/{userId}/date")
	// public List<Note> searchDate(@PathVariable String userId, Date date){
	// return noteService.searchDate(userId, date);
	// }

	// 5.식단 추가
	@PostMapping("main/note")
	public Note insertNote(@AuthenticationPrincipal User user, @RequestBody Note note) {
		return noteService.insertNote(note);
	}

	// 6.음식 조회
	@GetMapping("/main/search/{keyword}")
	public List<Food> searchFood(@AuthenticationPrincipal User user, @PathVariable String keyword) {
		return noteService.searchFood(keyword);
	}

	// 7.검색 기록 저장
	@GetMapping("/main/search/log/{keyword}")
	public List<Food> searchLog(@AuthenticationPrincipal User user, @PathVariable String keyword) {
		System.out.println(keyword);
		return noteService.searchLog(keyword);
	}

	// 8.식단 수정
	@PutMapping("/main/update")
	public Note updateFood(@AuthenticationPrincipal User user, @RequestBody Note note) {
		return noteService.updateFood(note);
	}

	// 9.식단 삭제
	@DeleteMapping("/main/delete/{id}")
	public boolean deleteFood(@AuthenticationPrincipal User user, @PathVariable Long id) {
		return noteService.deleteFood(id);
	}

	// 10. 최근 검색어 조회
	@GetMapping("/main/searchLog/{userId}")
	public List<SearchLog> searchKeyword(@AuthenticationPrincipal User user, @PathVariable String userId) {
		return noteService.searchKeyword(userId);
	}

	// 11. 최근 검색어 삭제
	@DeleteMapping("/main/searchLog/delete/{keyword}")
	public boolean deleteKeyword(@AuthenticationPrincipal User user, @PathVariable String keyword) {
		return noteService.deleteKeyword(keyword);
	}
}
