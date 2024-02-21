package com.hospital.management.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.hospital.management.dto.Patient;


public interface HospitalRepository extends JpaRepository<Patient, Integer> {

	@Query("select p from Patient p where p.phone=?1 ")
	public Optional<Patient> verifyThePhone(long phone);
}
