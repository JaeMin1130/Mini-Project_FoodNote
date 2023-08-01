//package edu.pnu.config.auth;
//
//import java.io.IOException;
//import java.util.Optional;
//
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
//
//import com.auth0.jwt.JWT;
//import com.auth0.jwt.algorithms.Algorithm;
//
//import edu.pnu.domain.Member;
//import edu.pnu.persistance.MemberRepository;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//public class JWTAuthorizationFilter extends BasicAuthenticationFilter {
//	
//	// 사용자 정보를 읽기 위한 인터페이스 추가
//	private MemberRepository memRepo;
//
//	// 생성자는 AuthenticationManager와 MemberRepository를 파라미터로 요구
//	public JWTAuthorizationFilter(AuthenticationManager authenticationManager,
//												MemberRepository memRepo) {
//		super(authenticationManager);
//		this.memRepo = memRepo;
//	}
//
//	@Override
//	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
//									throws IOException, ServletException {
//		String srcToken = request.getHeader("Authorization");
//		if(srcToken == null || !srcToken.startsWith("Bearer ")) {
//			chain.doFilter(request, response);
//			return;
//		}
//		
//		String jwtToken = srcToken.replace("Bearer ", "");
//		String username = JWT.require(Algorithm.HMAC256("edu.pnu.marykey")).build().verify(jwtToken).getClaim("username").asString();
//		
//		Optional<Member> opt = memRepo.findById(username);
//		if (!opt.isPresent()) {
//			chain.doFilter(request, response);
//			return;
//		}
//		
//		Member findmember = opt.get();
//		
//		User user = new User(findmember.getUsername(), findmember.getPassword(), findmember.getAuthorities());
//		
//		Authentication auth = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
//		
//		SecurityContextHolder.getContext().setAuthentication(auth); 
//		chain.doFilter(request, response);
//	}
//}
