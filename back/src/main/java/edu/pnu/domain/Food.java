package edu.pnu.domain;

import jakarta.persistence.Column;
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
	@Column(name = "식품명")
	private String name;
	@Column(name = "지역/제조사")
	private String brand;
	@Column(name = "식품대분류")
	private String large_category;
	@Column(name = "식품상세분류")
	private String detail_category;
	@Column(name = "내용량_단위")
	private String unit;
	@Column(name = "1회제공량")
	private double serving_size;
	@Column(name = "에너지(㎉)")
	private double calories;
	@Column(name = "탄수화물(g)")
	private double carbohydrate;
	@Column(name = "단백질(g)")
	private double protein;
	@Column(name = "지방(g)")
	private double fat;
	@Column(name = "총당류(g)")
	private double sugars;
	@Column(name = "나트륨(㎎)")
	private double sodium;
	@Column(name = "콜레스테롤(㎎)")
	private double cholesterol;
	@Column(name = "카페인(㎎)")
	private double caffeine;
}