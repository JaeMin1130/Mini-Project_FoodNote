package edu.pnu.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.pnu.domain.Food;
import edu.pnu.domain.Note;
import edu.pnu.service.NoteService;

@RestController
public class NoteController {


    @Autowired
    NoteService noteService;    
 

    @GetMapping("/main/date")     //4.날짜 조회
    public List<Note> searchDate(Date date){
    	return noteService.searchDate(date);
    }
    
    @GetMapping("/note/insert")   //5.식단 추가
    public Note insertNote(Note note) {
    	return noteService.insertNote(note);
    }

    @PostMapping("/search")		  //6.음식 조회
    public List<Food> searchFood(String keyword) {
        return noteService.searchFood(keyword);
    }
    

    @PutMapping("/main/update")   //7.식단 수정
    public Note updateFood(Note note) {
    	return noteService.updateFood(note);
    }
    
    @DeleteMapping("/main/delete") //8.식단 삭제
    public boolean deleteFood(Long id) {
        return noteService.deleteFood(id);
    }
}
