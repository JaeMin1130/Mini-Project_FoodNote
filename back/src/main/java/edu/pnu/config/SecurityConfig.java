package edu.pnu.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

//import edu.pnu.service.UserService;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
	
//	@Autowired
//	UserService userService;
	
//	@Bean
//	public BCryptPasswordEncoder encoder() {
//		return new BCryptPasswordEncoder();
//	}
	

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity security) throws Exception {
		
		security.csrf(csrf->csrf.disable());
		security.cors(cors->cors.disable());
		
		security.sessionManagement(sess->sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
		security.formLogin(form->form.disable());
		security.authorizeHttpRequests(auth->{
			auth.anyRequest().permitAll();
		});
		
//		security.authorizeHttpRequests(auth->{
////			auth.requestMatchers("/").permitAll();
////			auth.requestMatchers("/member/**").authenticated();
//			
////			auth.requestMatchers("/").permitAll()
//			auth.requestMatchers("/member/**").authenticated()
//				.requestMatchers("/manager/**").hasAnyRole("MANAGER", "ADMIN")
//				.requestMatchers("/admin/**").hasRole("ADMIN")
//				.anyRequest().permitAll();
//		});
//		
//		security.userDetailsService(userService);
//		
//		security.formLogin(form->{
//			form.loginPage("/login")
//				.defaultSuccessUrl("/loginSuccess", true);
//		});
//		
//		security.exceptionHandling(ex->ex.accessDeniedPage("/accessDenied"));
//		security.logout(logt->{
//			logt.invalidateHttpSession(true)
//				.deleteCookies("JSESSIONID")
//				.logoutSuccessUrl("/login");
//		});
//		
		return security.build();
	}
	
	@Autowired
	public void authenticate(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication()
			.withUser("member")
			.password("{noop}abcd")
			.roles("MEMBER");
		
		auth.inMemoryAuthentication()
			.withUser("manager")
			.password("{noop}abcd")
			.roles("MANAGER");
		
		auth.inMemoryAuthentication()
			.withUser("admin")
			.password("{noop}abcd")
			.roles("ADMIN");
	}
}
