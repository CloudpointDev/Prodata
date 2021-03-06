/*
 * Created on 2019-07-08 ( Date ISO 2019-07-08 - Time 15:31:57 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.cpa.prodata.controller.mapper;

import java.util.List;

import com.cpa.prodata.controller.dto.StaffDTO;
import com.cpa.prodata.entity.Staff;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
/**
 * StaffDTO's Mapper declaration using selma.
 * @author Somesh Biswas version 3.0.0
 */
@Mapper(componentModel = "spring")
public abstract class StaffMapper {

	// This will build a fresh new StaffDTO with in infos
		
public abstract  StaffDTO convertEntityToStaffDTO(Staff entity);
	
public abstract  Staff  convertStaffDTOToEntity( StaffDTO dto);



public abstract List<StaffDTO>  entityListToStaffDTOList(List<Staff> list);
}
