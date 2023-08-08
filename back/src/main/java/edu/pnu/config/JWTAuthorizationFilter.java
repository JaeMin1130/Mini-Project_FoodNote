package edu.pnu.config;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.filter.OncePerRequestFilter;

import edu.pnu.service.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Configuration
public class JWTAuthorizationFilter extends OncePerRequestFilter {

	private final JwtService jwtService;

	// 실제 필터링 작업 수행
	@Override
	protected void doFilterInternal(HttpServletRequest req, HttpServletResponse resp, FilterChain chain)
			throws IOException, ServletException {
		try {
//			if (HttpMethod.OPTIONS.matches(req.getMethod())) {
//				chain.doFilter(req, resp);
//				return;
//			}
			// 요청정보에서 jwt토큰 읽어오기
			String jwtToken = req.getHeader(HttpHeaders.AUTHORIZATION);
			if (jwtToken == null) {
				System.out.println("token is null");
				chain.doFilter(req, resp);
				return;
			}

			log.info("Filter is running...");

			// userId 가져오기 토큰이 위조된 경우 예외 처리된다.
			String userId = jwtService.validateAndGetUserId(jwtToken);
			log.info("userId : " + userId);
			List<GrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority("Member"));

			// Authentication 객체 생성, 암호는 필요없음
			UserDetails user = new User(userId, "", authorities);
			UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(user, null,
					user.getAuthorities());

			// ContextHolder에 인증된 사용자 등록
			SecurityContextHolder.getContext().setAuthentication(auth);
		} catch (Exception e) {
			log.error("Could not set user authentication in security context.", e);
		}
		// 다음 필터 실행
		chain.doFilter(req, resp);
	}
}





//@Slf4j
//@RequiredArgsConstructor
//@Configuration
//public class JWTAuthorizationFilter extends OncePerRequestFilter {
//
//    private final JwtService jwtService;
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse resp, FilterChain chain)
//            throws IOException, ServletException {
//        try {
//            String jwtToken = req.getHeader(HttpHeaders.AUTHORIZATION);
//
//            // 모든 요청, OPTIONS도 포함하여 토큰을 검증합니다.
//            if (jwtToken == null) {
//                resp.sendError(HttpServletResponse.SC_UNAUTHORIZED, "토큰이 누락되었습니다");
//                return;
//            }
//
//            log.info("필터가 실행 중...");
//
//            // 토큰을 검증하고 사용자 정보를 추출합니다.
//            String userId = jwtService.validateAndGetUserId(jwtToken);
//            log.info("사용자 아이디: " + userId);
//
//            // UserDetails 및 Authentication 객체를 생성합니다.
//            List<GrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority("Member"));
//            UserDetails user = new User(userId, "", authorities);
//            UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(user, null,
//                    user.getAuthorities());
//
//            // SecurityContextHolder에 인증된 사용자를 설정합니다.
//            SecurityContextHolder.getContext().setAuthentication(auth);
//
//        } catch (Exception e) {
//            log.error("보안 컨텍스트에서 사용자 인증을 설정할 수 없습니다.", e);
//        }
//
//        // 다음 필터로 진행합니다.
//        chain.doFilter(req, resp);
//    }
//}
