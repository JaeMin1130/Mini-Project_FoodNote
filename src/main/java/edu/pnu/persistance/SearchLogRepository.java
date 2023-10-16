package edu.pnu.persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.query.Param;

import edu.pnu.domain.SearchLog;

public interface SearchLogRepository extends JpaRepository<SearchLog, Long> {

	List<SearchLog> findByUserId(String userId);

	SearchLog findByUserIdAndKeyword(@Param("userId") String userId, @Param("keyword") String keyword);

	@Modifying
	void deleteByKeyword(@Param("keyword") String keyword);

	List<SearchLog> findAllbyUserId(@Param("userId") String userId);

}