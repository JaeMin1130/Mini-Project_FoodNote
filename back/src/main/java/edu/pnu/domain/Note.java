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
	@JsonFormat(pattern = "yy-MM-dd", timezone = "Asia/Seoul")
	private Date date;
	private String brand;
	private double serving_size;
	private String unit;
	private double calories;
	private double carbohydrate;
	private double protein;
	private double fat;
	private double sugars;
	private double sodium;
	private double cholesterol;
	private double caffeine;

}
