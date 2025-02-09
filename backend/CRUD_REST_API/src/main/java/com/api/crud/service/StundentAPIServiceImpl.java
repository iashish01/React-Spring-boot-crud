package com.api.crud.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.api.crud.model.Student;
import com.api.crud.repository.StudentRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class StundentAPIServiceImpl implements StundentAPIService {

	private StudentRepository repository;

	public StundentAPIServiceImpl(StudentRepository repository) {
		this.repository = repository;
	}

	@Override
	public List<Student> findAllStudentList() {
		log.info("Student List");
		List<Student> studentList = repository.findAll();
		log.info("Student List Size:-" + studentList);
		return studentList;
	}

	@Override
	public Student newStudentinfo(Map<String, Object> info) {
		log.info("Student Name" + info.get("firstName"));
		Student student = new Student();
		student.setfirstName(info.get("firstName").toString());
		student.setLastName(info.get("lastName").toString());
		student.setEmail(info.get("email").toString());
		student.setFatherName(info.get("fatherName").toString());
		student.setPhone(Long.parseLong(info.get("phone").toString()));
		student.setStandard(Integer.parseInt(info.get("class").toString()));
		student.setCity(info.get("city").toString());
		student.setGender(info.get("gender").toString());
		return repository.save(student);
	}

	@Override
	public Student updateStudentInfo(int id, Map<String, Object> info) {
		log.info("Student Name" + info.get("firstName"));
		Student student = getStudentInfo(id);
		student.setfirstName(info.get("firstName").toString());
		student.setLastName(info.get("lastName").toString());
		student.setEmail(info.get("email").toString());
		student.setFatherName(info.get("fatherName").toString());
		student.setPhone(Long.parseLong(info.get("phone").toString()));
		student.setStandard(Integer.parseInt(info.get("class").toString()));
		student.setCity(info.get("city").toString());
		student.setGender(info.get("gender").toString());
		return repository.saveAndFlush(student);
	}

	@Override
	public Student getStudentInfo(int studentId) {
		log.info("Student Info at service layer:-" + studentId);
		Optional<Student> student = repository.findById(studentId);
		log.info("Student Info as per Id:-" + student);
		if (student.get() != null) {
			return student.get();
		}
		return null;
	}

	@Override
	public Student deleteStudentInfo(int studentId) {
		log.info("Student Info at service layer:-" + studentId);
		Optional<Student> student = repository.findById(studentId);
		log.info("Student Info as per Id:-" + student);
		if (student.get() != null) {
			repository.delete(student.get());
			return student.get();
		}
		return null;
	}

	@Override
	public List<Student> searchStudentByKeywords(Map<String, Object> formData) {
		log.info("Keywords:-" + formData);
		String name = formData.get("name").toString();
		String email = formData.get("email").toString();
		String place = formData.get("place").toString();
		List<Student> studentList = repository.studentByKeywords(name, email, place);
		log.info("Student List Size By Keywords:-" + studentList.size());
		return studentList;
	}

	@Override
	public Page<Student> findStudentByPaginationAndSorting(int start, int end) {
		log.info("Finding Student List With Pagination");
		log.info("Page Start:-"+start+" end:-"+end);
		Sort sort = Sort.by(Sort.Direction.DESC, "firstName");
		Pageable pageable = PageRequest.of(start, end, sort);
		Page<Student> studentList=repository.findAll(pageable);
		return studentList;
	}

}
