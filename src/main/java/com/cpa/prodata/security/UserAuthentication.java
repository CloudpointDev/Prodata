package com.cpa.prodata.security;

import java.util.Collection;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

class UserAuthentication implements Authentication {
	
	private static final long serialVersionUID = 1L;
	private final UserDetails user;
	private boolean authenticated = true;

	UserAuthentication(UserDetails user) {
		this.user = user;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return user.getAuthorities();
	}

	@Override
	public Object getCredentials() {
		return user.getPassword();
	}

	@Override
	public UserDetails getDetails() {
		return user;
	}

	@Override
	public Object getPrincipal() {
		return user.getUsername();
	}

	@Override
	public boolean isAuthenticated() {
		return authenticated;
	}

	@Override
	public void setAuthenticated(boolean authenticated)  {
		this.authenticated = authenticated;
	}

	@Override
	public String getName() {
		return user.getUsername();
	}

}
