//package edu.pnu.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import edu.pnu.domain.User;
//import edu.pnu.service.LoginService;
//
//@RestController
//@RequestMapping("/users")
//public class LoginController {
//	
//    @Autowired
//    LoginService loginService;
//  
// 
//	@PostMapping("/new-user")           //1.회원가입
//	public Boolean join(User user) {
//		return loginService.save(user);
//	}
//
//	@PostMapping("/login")				//2.로그인
//	public boolean login(String userId, String password) {
//		 return loginService.login(userId, password);
//	}
//	
//	@GetMapping("/logout")				//3.로그아웃
//    public String logout() {
//        loginService.logout();
//        return "redirect:/login"; 
//    }
//
//	@GetMapping("/loginSuccess")		//로그인 성공
//	public void loginSuccess() {}
//
//	
//	@GetMapping("/accessDenied")		//로그인 실패
//	public void accessDenied() {}
//
//}
