/*
 * Created on 2019-05-30 ( Date ISO 2019-05-30 - Time 14:40:06 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.cpa.prodata.service;

import com.cpa.prodata.entity.StudentRelatives;
import com.cpa.prodata.controller.dto.StudentRelativesDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;


public interface StudentRelativesService {


StudentRelativesDTO persistStudentRelatives(StudentRelativesDTO studentRelativesDTOpersist) ;


  List<StudentRelativesDTO> retrieveStudentRelativesByRoll(Long rollno);

  StudentRelativesDTO retrieveStudentRelativesById(Integer id);



	List<StudentRelativesDTO> retrieveAllStudentRelatives();


	StudentRelativesDTO modifyStudentRelatives(StudentRelativesDTO studentRelativesDTOUpdate) ;

	 public void deleteById(Integer id);
	}
