/*
 * Created on 2019-07-08 ( Date ISO 2019-07-08 - Time 15:31:55 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.cpa.prodata.service;

import com.cpa.prodata.entity.Role;
import com.cpa.prodata.controller.dto.RoleDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;


public interface RoleService {


RoleDTO persistRole(RoleDTO roleDTOpersist) ;


  RoleDTO retrieveRoleById(Integer roleId);




	List<RoleDTO> retrieveAllRole();


	RoleDTO modifyRole(RoleDTO roleDTOUpdate) ;

	 public void deleteById(Integer roleId);
	}
