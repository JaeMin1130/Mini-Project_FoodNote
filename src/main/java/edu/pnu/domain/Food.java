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
@Entity
public class Food {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int no;
	private String name;
	private String large_category;
	private String detail_category;
	private String brand;
	private String unit;
	private double serving_size;
	private double calories;
	private double carbohydrate;
	private double protein;
	private double fat;
	private double sugars;
	private double sodium;
	private double cholesterol;
	private double caffeine;
}
