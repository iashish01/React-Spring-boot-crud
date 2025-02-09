package com.api.crud.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.api.crud.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
	
	
	@Query("SELECT s FROM Student s WHERE s.firstName = :name OR s.email = :email OR s.city = :phone")
	public List<Student> studentByKeywords(@Param("name") String name, @Param("email") String email,@Param("phone") String place);

}
