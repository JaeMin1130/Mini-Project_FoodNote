package edu.pnu.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.pnu.domain.DTO;
import edu.pnu.domain.Food;
import edu.pnu.domain.Note;
import edu.pnu.service.NoteService;

@RestController
public class NoteController {


    @Autowired
    NoteService noteService;    
 
    @GetMapping("/main/userId/{userId}")		//4.사용자별 조회
    public List<DTO> getToday(@PathVariable String userId) {
        return noteService.getToday(userId);
    }
    
    @GetMapping("/main/date")     //5.날짜 조회
    public List<Note> searchDate(Date date){
    	return noteService.searchDate(date);
    }
    
    @GetMapping("/note/insert")   //6.식단 추가
    public Note insertNote(Note note) {
    	return noteService.insertNote(note);
    }

    @GetMapping("/search/{keyword}")		  //7.음식 조회
    public List<Food> searchFood(@PathVariable String keyword) {
    	System.out.println(keyword);
        return noteService.searchFood(keyword);
    }
    

    @PutMapping("/main/update")   //8.식단 수정
    public Note updateFood(Note note) {
    	return noteService.updateFood(note);
    }
    
    @DeleteMapping("/main/delete") //9.식단 삭제
    public boolean deleteFood(Long id) {
        return noteService.deleteFood(id);
    }
}
