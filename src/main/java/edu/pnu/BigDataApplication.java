package edu.pnu;

import java.util.TimeZone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class BigDataApplication {

	public static void main(String[] args) {
		SpringApplication.run(BigDataApplication.class, args);
	}

	// Bean 생명주기를 이용한 timezone 설정
	@PostConstruct
	public void setTimeZone() {
		TimeZone.setDefault(TimeZone.getTimeZone("Asia/Seoul"));
	}
}
