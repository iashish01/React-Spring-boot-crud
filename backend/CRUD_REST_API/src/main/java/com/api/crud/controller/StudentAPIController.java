package com.api.crud.controller;

import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.api.crud.model.Student;
import com.api.crud.service.StundentAPIService;

import lombok.extern.slf4j.Slf4j;


@CrossOrigin("*")
@RestController
@Slf4j
public class StudentAPIController {
	
	private StundentAPIService service;
	
	public StudentAPIController(StundentAPIService service) {
		this.service=service;
	}
	
	
	@RequestMapping(value = "/new/student", method = RequestMethod.POST)
    public ResponseEntity<String> newStudentInformation(@RequestBody Map<String, Object> student) {
        log.info("New Student information"+student);
        Student info=service.newStudentinfo(student);
        if(info.getId()!=0) {
        	return new ResponseEntity<String>("added", HttpStatus.OK);
        }
        else {
        	return new ResponseEntity<String>("Not Added", HttpStatus.NOT_ACCEPTABLE);
        }
    }
	
	@RequestMapping(value = "/student/list", method = RequestMethod.GET)
	public ResponseEntity<List<Student>> allStudentList(){
		log.info("Finding Student List");
		List<Student> list=service.findAllStudentList();
		if(list.isEmpty()) {
			return new ResponseEntity<List<Student>>(list,HttpStatus.NOT_FOUND);
		}
		else {
			return new ResponseEntity<List<Student>>(list,HttpStatus.OK);
		}
	}
	
	@RequestMapping(value = "/student/delete/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<String> deleteStudentInfo(@PathVariable("id") int id) {
	    log.info("Finding Student with ID: " + id);
	    Student student = service.deleteStudentInfo(id);
	    if (student == null) {
	        return new ResponseEntity<>("Student not found", HttpStatus.NOT_FOUND);
	    } else {
	        return new ResponseEntity<>("Student deleted: " + student, HttpStatus.OK);
	    }
	}

	@RequestMapping(value = "/student/{id}", method = RequestMethod.GET)
	public ResponseEntity<Student> getStudentInfo(@PathVariable("id") int id) {
	    log.info("Finding Student with ID: " + id);
	    Student student = service.getStudentInfo(id);
	    if (student == null) {
	        return new ResponseEntity<Student>(student, HttpStatus.NOT_FOUND);
	    } else {
	        return new ResponseEntity<Student>(student, HttpStatus.OK);
	    }
	}
	
	@RequestMapping(value = "/student/update/{id}", method = RequestMethod.PUT)
	public ResponseEntity<String> updateStudentInfo(@PathVariable("id") int id,@RequestBody Map<String, Object> formData) {
		log.info("New Student information"+formData);
        Student info=service.updateStudentInfo(id,formData);
        if(info.getId()!=0) {
        	return new ResponseEntity<String>("added", HttpStatus.OK);
        }
        else {
        	return new ResponseEntity<String>("Not Added", HttpStatus.NOT_ACCEPTABLE);
        }
	}
	

	@RequestMapping(value="/search/student" , method=RequestMethod.POST)
	public ResponseEntity<List<Student>> searchStudentByKeywords(@RequestBody Map<String,Object> formData){
		log.info("Search Student");
		List<Student> list=null;
		list=service.searchStudentByKeywords(formData);
		if(list.isEmpty()) {
			return new ResponseEntity<List<Student>>(list,HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<List<Student>>(list,HttpStatus.OK);
		}
	}
	
	
	@RequestMapping(value="/student/list/{start}/{end}" , method=RequestMethod.GET)
	public ResponseEntity<List<Student>> studentListwithPages(@PathVariable("start") int start,@PathVariable("end") int end){
		log.info("Student List with Start and end:-"+start,end);
		List<Student> studentPage=null;
		studentPage=service.findStudentByPaginationAndSorting(start, end).toList();
		if(studentPage.isEmpty()) {
			return new ResponseEntity<List<Student>>(studentPage, HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<List<Student>>(studentPage, HttpStatus.OK);
		}
	}
	

}
