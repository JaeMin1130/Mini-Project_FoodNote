package edu.pnu.persistance;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import edu.pnu.domain.SearchLog;

public interface SearchLogRepository extends JpaRepository<SearchLog, String> {

	List<SearchLog> findByUserId(String userId);

	@Query(value = "SELECT * FROM SEARCH_LOG log WHERE log.user_Id = :userId AND log.keyword = :keyword", nativeQuery = true)
	SearchLog findByUserIdAndKeyword(@Param("userId") String userId,  @Param("keyword") String keyword);
}