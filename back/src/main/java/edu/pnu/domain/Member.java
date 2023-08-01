package edu.pnu.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
	
	@Id
	private String userId;
	private String password;
	private String role;
	
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//		
//		return AuthorityUtils.createAuthorityList(role);
//	}
}
