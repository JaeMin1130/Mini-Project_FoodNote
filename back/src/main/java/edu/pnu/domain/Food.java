package edu.pnu.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Food {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int no;
	private String name;
	private String large_category;
	private String detail_category;
	private String brand;
	private String serving_size;
	private String calories;
	private String carbohydrate;
	private String protein;
	private String fat;
	private String sugars;
	private String sodium;
	private String cholesterol;
	private String caffeine;
}
