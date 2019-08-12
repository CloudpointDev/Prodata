package com.cpa.prodata.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cpa.prodata.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
