/*
 * Created on 2019-05-07 ( Date ISO 2019-05-07 - Time 19:47:33 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.cpa.prodata.controller.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.cpa.prodata.controller.dto.FileModelDTO;
import com.cpa.prodata.entity.FileModel;
/**
 * FileModelDTO's Mapper declaration using selma.
 * @author Somesh Biswas version 3.0.0
 */
@Mapper(componentModel = "spring")
public abstract class FileModelMapper {

	// This will build a fresh new FileModelDTO with in infos
		
public abstract  FileModelDTO convertEntityToFileModelDTO(FileModel entity);
	
public abstract  FileModel  convertFileModelDTOToEntity( FileModelDTO dto);



public abstract List<FileModelDTO>  entityListToFileModelDTOList(List<FileModel> list);
}
