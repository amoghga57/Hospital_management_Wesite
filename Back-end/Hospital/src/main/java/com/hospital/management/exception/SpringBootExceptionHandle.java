package com.hospital.management.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.hospital.management.dto.ResponseBody;

@ControllerAdvice
public class SpringBootExceptionHandle extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler
	public ResponseEntity<ResponseBody<String>> NoDataFound(NoDataFoundException e){
		ResponseBody<String> rb=new ResponseBody<String>(e.getMessage(), "No patient found", HttpStatus.ACCEPTED);
		return new ResponseEntity<ResponseBody<String>>(rb,HttpStatus.ACCEPTED);
	}
	
}
