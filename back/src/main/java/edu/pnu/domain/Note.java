package edu.pnu.domain;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;
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
	private int amount;
	@Column(name = "meal_type")
	private String mealType;
	@Column(name = "food_no")
	private int foodNo;
	@Lob // Use @Lob for large binary data
	@Column(name = "image_data")
	private byte[] imageData;
	@Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	@Temporal (TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date date;
	

}
