package com.api.crud.service;

import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.api.crud.model.Student;

@Service
public interface StundentAPIService {
	
	public List<Student> findAllStudentList();
	
	public Page<Student> findStudentByPaginationAndSorting(int start,int end);
	
	public Student newStudentinfo(Map<String,Object> info);
	
	public Student updateStudentInfo(int id,Map<String, Object> info);
	
	public Student getStudentInfo(int studentId);
	
	public Student deleteStudentInfo(int studentId);

	public List<Student> searchStudentByKeywords(Map<String,Object> formData);

}
