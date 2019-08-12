/*
 * Created on 2019-07-08 ( Date ISO 2019-07-08 - Time 15:31:55 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.cpa.prodata.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import com.cpa.prodata.entity.Role;
import com.cpa.prodata.repository.RoleRepository;
import com.cpa.prodata.controller.dto.RoleDTO;
import com.cpa.prodata.service.criteria.RoleCriteria;
import com.cpa.prodata.service.RoleService;
import com.cpa.prodata.controller.mapper.RoleMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import java.util.Collections;
import java.util.List;
/**
 * Service implementation for Role.
 * @author Somesh Biswas version 3.0.0
 */
@Service
public class RoleServiceImpl implements RoleService {

private static final Logger LOG = Logger.getLogger(RoleServiceImpl.class);

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private RoleMapper roleMapper;

	
		

	public RoleDTO persistRole(RoleDTO roleDTOpersist){
	try{
	if(roleDTOpersist !=null){
		

	 Role role = roleMapper.convertRoleDTOToEntity(roleDTOpersist);
	 Role roleIn =  roleRepository.saveAndFlush(role);
	return (roleIn !=null) ?  roleMapper.convertEntityToRoleDTO(roleIn) : null;
	}
}
		catch (Exception e){
			LOG.error("Error while inserting Role {} ", e);
		}
return null;
	}

 public RoleDTO retrieveRoleById(Integer roleId){

	try {
		
			Role role = roleRepository.findById(roleId).get();
			return (role != null) ?  roleMapper.convertEntityToRoleDTO(role) :null;
		}
		catch (Exception e){
			LOG.error("Error Message",e);
		}
		return null;
	}

public List<RoleDTO> retrieveAllRole(){
try {
List<Role> roleList = roleRepository.findAll();
return( roleList != null) ?  roleMapper.entityListToRoleDTOList(roleList) : null;
		}
		catch (Exception e){
			LOG.error("Error message",e);
		}
		return Collections.emptyList();

}

public 	RoleDTO modifyRole(RoleDTO roleDTOUpdate){
	try{
	if(roleDTOUpdate !=null){
					Role  role = roleRepository.findById(roleDTOUpdate.getRoleId()).get();
	 Role roleUpdate =  roleRepository.save(role);
	return (roleUpdate !=null) ?  roleMapper.convertEntityToRoleDTO(roleUpdate) : null;
					
	}
}
	catch (Exception e){
			LOG.error("Error while updating Role {} ", e);
		}
return null;
	}

public void deleteById(Integer roleId){



}



}











