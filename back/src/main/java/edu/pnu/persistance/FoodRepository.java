package edu.pnu.persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import edu.pnu.domain.Food;


public interface FoodRepository extends JpaRepository<Food, Integer> {
    @Query(value = "SELECT * FROM food f WHERE f.name LIKE %:keyword% OR f.brand LIKE %:keyword%", nativeQuery = true)
    List<Food> findByName(@Param("keyword") String searchName);

    @Query(value = "SELECT * FROM food f WHERE f.name = :keyword", nativeQuery = true)
    List<Food> findBySearchLog(@Param("keyword") String searchName);
     
}