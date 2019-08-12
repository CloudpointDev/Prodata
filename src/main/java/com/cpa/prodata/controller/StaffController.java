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

import com.cpa.prodata.controller.dto.StaffDTO;
import com.cpa.prodata.service. StaffService;

/**
 * Rest controller which produce Hal+json content (including hateoas metadata).
 * @author Somesh Biswas version 3.0.0
 */
@RestController
@RequestMapping("/api/rest")
@CrossOrigin(origins = { "http://localhost:4300" })
public class StaffController {

	private static final Logger LOG = Logger.getLogger( StaffController.class);


	@Autowired
	private  StaffService staffService;

	
	@PostMapping("/createStaff")
	public ResponseEntity<StaffDTO> insertStaff(@Valid @RequestBody StaffDTO staffDTO,
			BindingResult result){
				if(result.hasErrors()){
			HttpHeaders headers = new HttpHeaders();
			return new ResponseEntity<>(headers, HttpStatus.PRECONDITION_FAILED);
			}

			HttpHeaders headers = new HttpHeaders();
			StaffDTO datastaffDTO=null;
			try {
			datastaffDTO = staffService.persistStaff(staffDTO);
			} catch (Exception e) {
				LOG.error("Error while inserting Staff {}",e);
			}
			return new ResponseEntity<>(datastaffDTO, headers, HttpStatus.CREATED);
	}

	@GetMapping("/getAllStaff")
	public ResponseEntity<List<StaffDTO>> getAllStaff() {
		List<StaffDTO> staffDTOResp=null;
		try {
			staffDTOResp = staffService.retrieveAllStaff();
		} catch (Exception e) {
			LOG.error("Error while retrieving all  Staff {}",e);
		}
		return new ResponseEntity<>(staffDTOResp, HttpStatus.OK);
	}

		@GetMapping("/getStaffById")
	public ResponseEntity<StaffDTO> getStaffById(@RequestParam("id") Long staffId) {
	StaffDTO staffDTO = null;
		try {
			staffDTO =  staffService.retrieveStaffById( staffId);
		} catch (Exception e) {
			LOG.error("Error while retrieving By Staff ID {}",e);
		}
		return new ResponseEntity<>(staffDTO , HttpStatus.OK);
	}


	
	@PutMapping("/modifyStaff")
	public ResponseEntity<StaffDTO> modifyStaff(@Valid @RequestBody StaffDTO staffDTO,
			BindingResult result){
				if(result.hasErrors()){
			HttpHeaders headers = new HttpHeaders();
			return new ResponseEntity<>(headers, HttpStatus.PRECONDITION_FAILED);
			}

			HttpHeaders headers = new HttpHeaders();
			StaffDTO datastaffDTO=null;
			try {
			datastaffDTO = staffService.modifyStaff(staffDTO);
			} catch (Exception e) {
				LOG.error("Error while inserting  Data {}",e);
			}
			return new ResponseEntity<>(datastaffDTO, headers, HttpStatus.CREATED);
	}


	@DeleteMapping("/removeStaffById")
	public ResponseEntity<Void> removeStaffById(@Valid @RequestParam("id") Long staffId){
	StaffDTO staffDTO = staffService.retrieveStaffById(staffId);
	if(staffDTO !=null){
	staffService.deleteById( staffId);
	HttpHeaders headers= new HttpHeaders();
			return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
	
	}

	else{
	HttpHeaders headers= new HttpHeaders();
		    return new ResponseEntity<>(headers, HttpStatus.PRECONDITION_REQUIRED);
	}
	
	}

}










