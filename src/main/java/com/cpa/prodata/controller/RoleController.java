package com.cpa.prodata.controller;


import java.util.List;

import javax.validation.Valid;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cpa.prodata.controller.dto.RoleDTO;
import com.cpa.prodata.service. RoleService;

/**
 * Rest controller which produce Hal+json content (including hateoas metadata).
 * @author Somesh Biswas version 3.0.0
 */
@RestController
@RequestMapping("/api/rest")
@CrossOrigin(origins = { "http://localhost:4300" })
public class RoleController {

	private static final Logger LOG = Logger.getLogger( RoleController.class);


	@Autowired
	private  RoleService roleService;

	
	@PostMapping("/createRole")
	public ResponseEntity<RoleDTO> insertRole(@Valid @RequestBody RoleDTO roleDTO,
			BindingResult result){
				if(result.hasErrors()){
			HttpHeaders headers = new HttpHeaders();
			return new ResponseEntity<>(headers, HttpStatus.PRECONDITION_FAILED);
			}

			HttpHeaders headers = new HttpHeaders();
			RoleDTO dataroleDTO=null;
			try {
			dataroleDTO = roleService.persistRole(roleDTO);
			} catch (Exception e) {
				LOG.error("Error while inserting Role {}",e);
			}
			return new ResponseEntity<>(dataroleDTO, headers, HttpStatus.CREATED);
	}

	@GetMapping("/getAllRole")
	public ResponseEntity<List<RoleDTO>> getAllRole() {
		List<RoleDTO> roleDTOResp=null;
		try {
			roleDTOResp = roleService.retrieveAllRole();
		} catch (Exception e) {
			LOG.error("Error while retrieving all  Role {}",e);
		}
		return new ResponseEntity<>(roleDTOResp, HttpStatus.OK);
	}

		@GetMapping("/getRoleById")
	public ResponseEntity<RoleDTO> getRoleById(@RequestParam("id") Integer roleId) {
	RoleDTO roleDTO = null;
		try {
			roleDTO =  roleService.retrieveRoleById( roleId);
		} catch (Exception e) {
			LOG.error("Error while retrieving By Role ID {}",e);
		}
		return new ResponseEntity<>(roleDTO , HttpStatus.OK);
	}


	
	@PutMapping("/modifyRole")
	public ResponseEntity<RoleDTO> modifyRole(@Valid @RequestBody RoleDTO roleDTO,
			BindingResult result){
				if(result.hasErrors()){
			HttpHeaders headers = new HttpHeaders();
			return new ResponseEntity<>(headers, HttpStatus.PRECONDITION_FAILED);
			}

			HttpHeaders headers = new HttpHeaders();
			RoleDTO dataroleDTO=null;
			try {
			dataroleDTO = roleService.modifyRole(roleDTO);
			} catch (Exception e) {
				LOG.error("Error while inserting  Data {}",e);
			}
			return new ResponseEntity<>(dataroleDTO, headers, HttpStatus.CREATED);
	}


	@DeleteMapping("/removeRoleById")
	public ResponseEntity<Void> removeRoleById(@Valid @RequestParam("id") Integer roleId){
	RoleDTO roleDTO = roleService.retrieveRoleById(roleId);
	if(roleDTO !=null){
	roleService.deleteById( roleId);
	HttpHeaders headers= new HttpHeaders();
			return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
	
	}

	else{
	HttpHeaders headers= new HttpHeaders();
		    return new ResponseEntity<>(headers, HttpStatus.PRECONDITION_REQUIRED);
	}
	
	}

}










