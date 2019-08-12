package com.cpa.prodata.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.cpa.prodata.entity.Staff;
import com.cpa.prodata.repository.StaffRepository;





@Service
public class SecurityContextServiceImpl implements SecurityContextService {

	private final StaffRepository staffRepository;

	@Autowired
	public SecurityContextServiceImpl(StaffRepository staffRepository) {
		this.staffRepository = staffRepository;
	}

	@Override
	public Staff currentUser() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		final Optional<Staff> currentUser = staffRepository.findByLoginId(authentication.getName());
		return currentUser.orElse(null);
	}
}

