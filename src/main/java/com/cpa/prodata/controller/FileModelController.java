package com.cpa.prodata.controller;


import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import com.cpa.prodata.controller.dto.FileModelDTO;
import com.cpa.prodata.entity.FileModel;
import com.cpa.prodata.entity.View;

import com.cpa.prodata.repository.FileModelRepository;
import com.cpa.prodata.service. FileModelService;
import com.fasterxml.jackson.annotation.JsonView;

/**
 * Rest controller which produce Hal+json content (including hateoas metadata).
 * @author Somesh Biswas version 3.0.0
 */
@RestController
@RequestMapping("/api/rest")
@CrossOrigin(origins = { "http://localhost:4200" })
public class FileModelController {

	private static final Logger LOG = Logger.getLogger( FileModelController.class);


	@Autowired
	private  FileModelService fileModelService;

	@Autowired 
	private FileModelRepository fileRepository;
	
	@PostMapping("file/upload/{rollNo}")
	public String uploadMultipartFile(@PathVariable Long rollNo ,@RequestParam("file") MultipartFile file) {
		try {
			// save file to PostgreSQL
FileModel filemode = new FileModel(file.getOriginalFilename(), file.getContentType(), file.getBytes(),rollNo);
			fileRepository.save(filemode);
			
			return "File uploaded successfully! -> filename = " + file.getOriginalFilename();
		} catch (Exception e) {
			return "FAIL! Maybe You had uploaded the file before or the file's size > 500KB";
		}
	}

	@JsonView(View.FileInfo.class)
	@GetMapping("file/all")
	public List<FileModel> getListFiles() {
		return (List<FileModel>) fileRepository.findAll();
	}

	/*
	 * Download Files
	 */
	@GetMapping("file/{roll_no}")
	public List<FileModel> getFile(@PathVariable Long roll_no) {
		System.out.println( fileRepository.findByRoll(roll_no));
		return (List<FileModel>) fileRepository.findByRoll(roll_no);

//		if (fileOptional.isEmpty()) {
//			
//		}
//		else {
//			FileModel file = fileOptional.get(0);
//			System.out.println(fileOptional);
//			return ResponseEntity.ok()
//					.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getName() + "\"")
//					.body(file.getPic());
//		
//		}
//
//		return ResponseEntity.status(404).body(null);
	}
	
	@GetMapping("fileView/{id}")
	public ResponseEntity<byte[]> getFileView(@PathVariable Long id) {
		System.out.println( fileRepository.findById(id));
		
Optional<FileModel> fileOptional = fileRepository.findById(id);
		
		if (fileOptional.isPresent()) {
			FileModel file = fileOptional.get();
			String contentType=file.getMimetype();
			
					return ResponseEntity.ok()
					.header(HttpHeaders.CONTENT_TYPE, contentType)
					.body(file.getPic());
					
		}

		return ResponseEntity.status(404).body(null);
	}
	@GetMapping("download/file/{id}")
	public ResponseEntity<byte[]> downloadFile(@PathVariable Long id) {
		Optional<FileModel> fileOptional = fileRepository.findById(id);
		
		if (fileOptional.isPresent()) {
			FileModel file = fileOptional.get();
		String contentType=file.getName()+file.getMimetype();
	

			return ResponseEntity.ok()
					.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getName() + "\"")
					.header(HttpHeaders.CONTENT_TYPE, contentType)
					.body(file.getPic());
			
		}

		return ResponseEntity.status(404).body(null);
	}
	
	@DeleteMapping("file/delete/{id}")
	public void deleteFile(@PathVariable Long id) {
	
		fileRepository.deleteById(id);
	}

}










