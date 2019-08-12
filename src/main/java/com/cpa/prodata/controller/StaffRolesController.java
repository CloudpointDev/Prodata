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

import com.cpa.prodata.security.SecurityContextService;
import com.cpa.prodata.controller.dto.StaffRolesDTO;
import com.cpa.prodata.service. StaffRolesService;

/**
 * Rest controller which produce Hal+json content (including hateoas metadata).
 * @author Somesh Biswas version 3.0.0
 */
@RestController
@RequestMapping("/api/rest")
@CrossOrigin(origins = { "http://localhost:4300" })
public class StaffRolesController {

	private static final Logger LOG = Logger.getLogger( StaffRolesController.class);

	@Autowired
	private SecurityContextService securityContextService;
	
	@Autowired
	private  StaffRolesService staffRolesService;

	
	@PostMapping("/createStaffRoles")
	public ResponseEntity<StaffRolesDTO> insertStaffRoles(@Valid @RequestBody StaffRolesDTO staffRolesDTO,
			BindingResult result){
				if(result.hasErrors()){
			HttpHeaders headers = new HttpHeaders();
			return new ResponseEntity<>(headers, HttpStatus.PRECONDITION_FAILED);
			}

			HttpHeaders headers = new HttpHeaders();
			StaffRolesDTO datastaffRolesDTO=null;
			try {
			datastaffRolesDTO = staffRolesService.persistStaffRoles(staffRolesDTO);
			} catch (Exception e) {
				LOG.error("Error while inserting StaffRoles {}",e);
			}
			return new ResponseEntity<>(datastaffRolesDTO, headers, HttpStatus.CREATED);
	}

	@GetMapping("/getAllStaffRoles")
	public ResponseEntity<List<StaffRolesDTO>> getAllStaffRoles() {
		List<StaffRolesDTO> staffRolesDTOResp=null;
		try {
			staffRolesDTOResp = staffRolesService.retrieveAllStaffRoles();
		} catch (Exception e) {
			LOG.error("Error while retrieving all  StaffRoles {}",e);
		}
		return new ResponseEntity<>(staffRolesDTOResp, HttpStatus.OK);
	}

		@GetMapping("/getStaffRolesById")
	public ResponseEntity<StaffRolesDTO> getStaffRolesById(@RequestParam("id") Long staffRoleId) {
	StaffRolesDTO staffRolesDTO = null;
		try {
			staffRolesDTO =  staffRolesService.retrieveStaffRolesByStaffRoleId( staffRoleId);
		} catch (Exception e) {
			LOG.error("Error while retrieving By StaffRoles ID {}",e);
		}
		return new ResponseEntity<>(staffRolesDTO , HttpStatus.OK);
	}


	
	@PutMapping("/modifyStaffRoles")
	public ResponseEntity<StaffRolesDTO> modifyStaffRoles(@Valid @RequestBody StaffRolesDTO staffRolesDTO,
			BindingResult result){
				if(result.hasErrors()){
			HttpHeaders headers = new HttpHeaders();
			return new ResponseEntity<>(headers, HttpStatus.PRECONDITION_FAILED);
			}

			HttpHeaders headers = new HttpHeaders();
			StaffRolesDTO datastaffRolesDTO=null;
			try {
			datastaffRolesDTO = staffRolesService.modifyStaffRoles(staffRolesDTO);
			} catch (Exception e) {
				LOG.error("Error while inserting  Data {}",e);
			}
			return new ResponseEntity<>(datastaffRolesDTO, headers, HttpStatus.CREATED);
	}


	
	@GetMapping("/isAdmin")
	public ResponseEntity<Boolean> isAdmin() {
		Long staffId=securityContextService.currentUser().getStaffId();
		StaffRolesDTO role= staffRolesService.retrieveStaffRolesByStaffId(staffId);
		String staffRole="ROLE_ADMIN";
		if(role.getAuthority().equals(staffRole)) 
			return new ResponseEntity<>(true, HttpStatus.OK);
		else
			return new ResponseEntity<>(false, HttpStatus.FORBIDDEN);
	}

}










