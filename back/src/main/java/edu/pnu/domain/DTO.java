package edu.pnu.domain;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
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
public class DTO {
	
	private String name;
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
	private String mealType;
	private byte[] imageData;
	private int amount;
	private Date date;
	private String userId;
}