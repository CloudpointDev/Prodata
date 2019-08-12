package com.cpa.prodata.security;

import java.util.Collection;
import java.util.Collections;

import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SRMUserDTO {
	
private static final String ADMIN = "ROLE_ADMIN";
	
    private Long staffId; 
	
    @NotBlank
	@Size(max = 10)
    private String loginId; 
	
    @NotBlank
	@Size(max = 500)
    private String loginKey; 
	
	/**
	 * @return the staffId
	 */
	public Long getStaffId() {
		return staffId;
	}

	/**
	 * @param staffId the staffId to set
	 */
	public void setStaffId(Long staffId) {
		this.staffId = staffId;
	}

	/**
	 * @return the loginId
	 */
	public String getLoginId() {
		return loginId;
	}

	/**
	 * @param loginId the loginId to set
	 */
	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	/**
	 * @return the loginKey
	 */
	public String getLoginKey() {
		return loginKey;
	}

	/**
	 * @param loginKey the loginKey to set
	 */
	public void setLoginKey(String loginKey) {
		this.loginKey = loginKey;
	}
	
	public SRMUserDTO(@JsonProperty("staffId")Long staffId, @JsonProperty("username") String loginId,@JsonProperty("password") String loginKey
			) {
		super();
		this.staffId = staffId;
		this.loginId = loginId;
		this.loginKey = loginKey;
	}
	
	public UsernamePasswordAuthenticationToken toAuthenticationToken() {
		
        return new UsernamePasswordAuthenticationToken(loginId, loginKey, getAuthorities());
    }
	
	public Collection<GrantedAuthority> getAuthorities() {
        return Collections.singleton(() -> ADMIN);
    }
	
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "CCMUserDTO [staffId=" + staffId + ", loginId=" + loginId
				+ ", loginKey=" + loginKey + "]";
	}
	
	

}
