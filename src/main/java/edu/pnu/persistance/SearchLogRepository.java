package edu.pnu.persistance;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import edu.pnu.domain.SearchLog;

public interface SearchLogRepository extends JpaRepository<SearchLog, String> {

	List<SearchLog> findByUserId(String userId);

	@Query(value = "SELECT * FROM SEARCH_LOG log WHERE log.user_Id = :userId AND log.food_name = :keyword", nativeQuery = true)
	SearchLog findByUserIdAndKeyword(@Param("userId") String userId, @Param("keyword") String keyword);

	@Modifying
	@Query(value = "DELETE FROM SEARCH_LOG log WHERE log.food_name Like %:keyword%", nativeQuery = true)
	void deleteByKeyword(@Param("keyword") String keyword);

	@Query(value = "SELECT * FROM search_log WHERE user_Id = :userId", nativeQuery = true)
	List<SearchLog> findAllbyUserId(@Param("userId") String userId);

}