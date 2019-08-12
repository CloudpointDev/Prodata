package com.cpa.prodata.security;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cpa.prodata.entity.Staff;

@Repository
@Transactional
public interface SRMUSerRepository extends JpaRepository<Staff, Integer> {
	
	Optional<Staff> findByLoginId(String username);

}
