package com.hospital.management.dto;


import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseBody<T> {
	private String message;
	private T body;
	private HttpStatus http_status_code;
	public ResponseBody(String message, T body, HttpStatus http_status_code) {
		super();
		this.message = message;
		this.body = body;
		this.http_status_code = http_status_code;
	}
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public T getBody() {
		return body;
	}
	public void setBody(T body) {
		this.body = body;
	}
	public HttpStatus getHttp_status_code() {
		return http_status_code;
	}
	public void setHttp_status_code(HttpStatus http_status_code) {
		this.http_status_code = http_status_code;
	}
	
	
}
