package edu.pnu.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	// CORS 방침 설정
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		// 모든 경로에 대하여
		registry.addMapping("/**")
				// Origin이 http://localhost:3000에 대해.
				.allowedOrigins("https://jaemin1130.github.io", "http://localhost:3000",
						"http://mealnote-env.eba-yyabenet.ap-northeast-2.elasticbeanstalk.com:5000")
				// GET, POST, PUT, DELETE 메서드를 허용한다.
				.allowedMethods("*")
				// 모든 헤더와 인증에 관한 정보도 허용한다.
				.allowCredentials(true).allowedHeaders("*").exposedHeaders(HttpHeaders.AUTHORIZATION);
	}
}
