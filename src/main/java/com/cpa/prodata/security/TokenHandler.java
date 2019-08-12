package com.cpa.prodata.security;

import java.security.Key;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;



@Component
public final class TokenHandler {
	
	private final String secret;
    
	@Autowired
	private final SRMUserService staffMemberService;
    
    @Autowired
    public TokenHandler(@Value("mySecretkeyshouldbealwaysbesecuredforsecuredaccessforsecuredusers") String secret, SRMUserService staffMemberService) {
        this.secret = secret;
        this.staffMemberService=staffMemberService;
    }    
    
    Optional<UserDetails> parseUserFromToken(String token){
    	
    	String login = Jwts.parser()
    				.setSigningKey(secret)
    				.parseClaimsJws(token)
    				.getBody()
    				.getSubject();
    	return Optional.ofNullable(staffMemberService.loadUserByUsername(login));
    	
    }
    
 
	
	public String createTokenForUser(UserDetails user) {
    	final ZonedDateTime oneDay = ZonedDateTime.now().plusDays(1);
    	return Jwts.builder()
                .setSubject(user.getUsername())
                .claim("Role", user.getAuthorities().toString())
                .signWith(SignatureAlgorithm.HS384,secret)
                .setExpiration(Date.from(oneDay.toInstant()))
                .compact();
    	
    	
    }
  
}
