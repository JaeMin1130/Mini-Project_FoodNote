package edu.pnu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.pnu.domain.Member;
import edu.pnu.service.JwtService;
import edu.pnu.service.LoginService;

@RestController
@RequestMapping("/users")
public class LoginController {

	@Autowired
	LoginService loginService;

	@Autowired
	private JwtService jwtService;

	@Autowired
	AuthenticationManager authenticationManager;

	// 1. 회원가입
	@PostMapping("/join")
	public Boolean join(@RequestBody Member member) {
		return loginService.save(member);
	}

	// // 2. 로그인
	// @PostMapping("/login")
	// public boolean login(@RequestBody Member member) {
	// return loginService.login(member);
	// }

	// 2. 로그인
	@PostMapping("/login")
	public ResponseEntity<?> getToken(@RequestBody Member member) {

		if (loginService.login(member)) {
			System.out.println("로그인 성공");

			// 토큰 생성
			String jwts = jwtService.getToken(member.getUserId());
			System.out.println("jwts:" + jwts);
			// 생성된 토큰으로 응답을 생성
			return ResponseEntity.ok().header(HttpHeaders.AUTHORIZATION, "Bearer " + jwts).build();
		} else {
			System.out.println("로그인 실패");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	}
}