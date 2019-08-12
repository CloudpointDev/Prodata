package com.cpa.prodata.security;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cpa.prodata.entity.Role;
import com.cpa.prodata.entity.Staff;
import com.cpa.prodata.entity.StaffRoles;
import com.cpa.prodata.repository.RoleRepository;
import com.cpa.prodata.repository.StaffRepository;
import com.cpa.prodata.repository.StaffRolesRepository;

@Service
@Transactional(readOnly = true)
public class SRMUserServiceImpl implements SRMUserService {

	@Autowired
	private StaffRepository staffMemberRepo;

	@Autowired
	private StaffRolesRepository staffRolesRepo;

	@Autowired
	private RoleRepository roleRepo;

	@Override
	public UserDetails loadUserByUsername(String username) {

		Optional<Staff> staffMember = staffMemberRepo.findByLoginId(username);
		if (staffMember.isPresent()) {
			StaffRoles staffRole = staffRolesRepo.findActiveOneByStaffId(staffMember.get().getStaffId());
			Role roles = roleRepo.findActiveRoleByAuthority(staffRole.getAuthority());
			Set<GrantedAuthority> authorities = new HashSet<>();
			authorities.add(new SimpleGrantedAuthority(roles.getAuthority()));

			String activeFlagValue = staffMember.get().getActiveFlag().trim();

			if (activeFlagValue.contentEquals("Y")) {
				SRMUser loggedUser = new SRMUser();
				loggedUser.setStaff(staffMember.get());
				loggedUser.setAuthorities(authorities);

				return loggedUser;

			} else {
				return null;
			}
		} else
			throw new UsernameNotFoundException(null);

	}

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
