package edu.pnu.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.pnu.domain.Food;
import edu.pnu.domain.Note;
import edu.pnu.domain.SearchLog;
import edu.pnu.service.NoteService;

@RestController
public class NoteController {


    @Autowired
    NoteService noteService;    
 
    @GetMapping("/main/{userId}")		//4.사용자별 조회
    public List<Note> getToday(@PathVariable String userId) {
        return noteService.getToday(userId);
    }
    
//    @GetMapping("/main/{userId}/date")     //5.날짜 조회
//    public List<Note> searchDate(@PathVariable String userId, Date date){
//    	return noteService.searchDate(userId, date);
//    }
    
    @PostMapping("/note/insert")   //6.식단 추가
    public Note insertNote(@RequestBody Note note) {
    	return noteService.insertNote(note);
    }

    @GetMapping("/main/search/food/{keyword}")		  //7.음식 조회
    public List<Food> searchFood(@PathVariable String keyword) {
    	System.out.println(keyword);
        return noteService.searchFood(keyword);
    }
    
    @PutMapping("/main/update")   //8.식단 수정
    public Note updateFood(Note note) {
    	return noteService.updateFood(note);
    }
    
    @DeleteMapping("/main/delete") //9.식단 삭제
    public boolean deleteFood(@PathVariable Long id) {
        return noteService.deleteFood(id);
    }
    
    //10. 최근 검색어 조회
    @GetMapping("/main/search/log/{userId}")
    public List<SearchLog> searchKeyword(@PathVariable String userId) {
    	return noteService.searchKeyword(userId);
    }
}
