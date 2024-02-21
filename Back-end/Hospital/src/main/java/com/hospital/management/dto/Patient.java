package com.hospital.management.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Patient {
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int patient_id;
	@Column(nullable = false)
	private String patient_name;
	@Column(nullable = false)
	private int age;
	@Column(nullable = false)
	private String city;
	@Column(nullable = false)
	private String state;
	@Column(nullable = false)
	private String address;
	@Column(nullable = false,unique = true)
	private long phone;
	@Column(nullable = false)
	private String covid_status;
	

	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public int getPatient_id() {
		return patient_id;
	}
	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}
	public String getPatient_name() {
		return patient_name;
	}
	public void setPatient_name(String patient_name) {
		this.patient_name = patient_name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public String getCovid_status() {
		return covid_status;
	}
	public void setCovid_status(String covid_status) {
		this.covid_status = covid_status;
	}
	
	
	
	
}
