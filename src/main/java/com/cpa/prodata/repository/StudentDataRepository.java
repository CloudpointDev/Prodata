/*
 * Created on 2019-05-30 ( Date ISO 2019-05-30 - Time 14:40:05 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.cpa.prodata.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cpa.prodata.entity.StudentData;

/**
 * Jpa repository for StudentData.
 * @author Somesh Biswas version 3.0.0
 */
@Transactional
@Repository
public interface StudentDataRepository  extends JpaRepository<StudentData, Long> {
	
	

	String DELETEQUERY="update student_data  set activeflag='N' where rollNo=:rollNo";
	String SELECTQUERY="select s.rollNo,s.activeflag,s.address,s.dob,s.name,s.std from student_data s where s.activeflag = 'Y' "; 
	
	
	@Modifying(clearAutomatically = true)
	@Query(value=DELETEQUERY , nativeQuery=true)
	void deleteStudent(@Param("rollNo") Long rollNo);
	
	@Query(value=SELECTQUERY , nativeQuery=true)
public  List<StudentData> getAllStudents();
}