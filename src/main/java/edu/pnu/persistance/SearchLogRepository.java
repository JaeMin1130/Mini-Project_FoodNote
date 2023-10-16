package edu.pnu.persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import edu.pnu.domain.SearchLog;

public interface SearchLogRepository extends JpaRepository<SearchLog, Long> {

	List<SearchLog> findByUserId(String userId);

	SearchLog findByUserIdAndFoodName(String userId, String foodname);

	@Modifying
	void deleteByFoodName(String foodname);

	List<SearchLog> findAllbyUserId(String userId);

}