/*
 * Created on 2019-05-07 ( Date ISO 2019-05-07 - Time 19:47:34 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.cpa.prodata.service;

import java.util.List;

import com.cpa.prodata.controller.dto.StudentLoginDTO;


public interface StudentLoginService {


StudentLoginDTO persistStudentLogin(StudentLoginDTO studentLoginDTOpersist) ;


  StudentLoginDTO retrieveStudentLoginById(String loginId);




	List<StudentLoginDTO> retrieveAllStudentLogin();


	StudentLoginDTO modifyStudentLogin(StudentLoginDTO studentLoginDTOUpdate) ;

	 public void deleteById(String loginId);
	}
