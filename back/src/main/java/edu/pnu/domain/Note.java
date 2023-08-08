package edu.pnu.domain;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
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
public class Note {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "user_id")
	private String userId;
	@Column(name = "food_name")
	private String foodName;
	private double amount;
	@Column(name = "meal_type")
	private String mealType;
	@Lob
	@Column(name = "image_data", columnDefinition = "MEDIUMBLOB")
	private byte[] imageData;
	@Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	@JsonFormat(pattern = "yy-MM-dd-HH:mm", timezone = "Asia/Seoul")
	private Date date;
	@Column(name = "지역/제조사")
	private String brand;
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