package com.cpa.prodata.security;

import java.io.Serializable;
import java.util.Collection;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.cpa.prodata.entity.Staff;

public class SRMUser implements UserDetails, Serializable{
	
	private static final long serialVersionUID = 1L;

	Staff staff=new Staff();
	
	Set<GrantedAuthority> authorities=null;

	public void setAuthorities(Set<GrantedAuthority> authorities) {
		this.authorities = authorities;
	}

	public Staff getStaff() {
		return staff;
	}

	public void setStaff(Staff staff) {
		this.staff = staff;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {

        return authorities;
	}

	@Override
	public String getPassword() {
		return staff.getLoginKey();
	}

	@Override
	public String getUsername() {
		return staff.getLoginid();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public String toString() {
		return "SRMUSer [Staff=" + staff + ", authorities=" + authorities + "]";
	}
	

	
}
