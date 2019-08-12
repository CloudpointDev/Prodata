package com.cpa.prodata.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
@Order(1)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	@Autowired
   private final  SRMUserService staffMemberService;

   private final  TokenAuthenticationService tokenAuthenticationService;
   
   String adminURL = "/api/rest/admin/**";
   String admin= "ADMIN";

    @Autowired
    public SecurityConfiguration(SRMUserService staffMemberService, TokenAuthenticationService tokenAuthenticationService) {
        super(true);
        this.staffMemberService = staffMemberService;
        this.tokenAuthenticationService = tokenAuthenticationService;
        
    }
    

    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	 http
         .exceptionHandling().and()
         .anonymous().and()
         .servletApi().and()
         .headers().cacheControl();

        
    	 http.authorizeRequests()
    	 .antMatchers( "/api/rest/home/auth/**").permitAll()
    	 .antMatchers("api/rest/**").permitAll()
    	 .antMatchers(HttpMethod.PUT, "/api/rest/admin/modifyStaffMemberById").authenticated()
    	 .antMatchers(HttpMethod.PUT, "/api/rest/admin/modifyStaffRolesById").authenticated()
    	 .antMatchers(HttpMethod.POST, adminURL).hasRole(admin)
    	 .antMatchers(HttpMethod.DELETE, adminURL).hasRole(admin)
    	 .antMatchers(HttpMethod.PUT, adminURL).hasRole(admin)
         .antMatchers(HttpMethod.GET, "/api/rest/**").authenticated()
         .antMatchers(HttpMethod.POST, "/api/rest/**").authenticated() 
    	 .antMatchers(HttpMethod.DELETE, "/api/rest/**").authenticated() ;
 
         http.addFilterBefore(
                 new StatelessLoginFilter(
                         "/auth/login",
                         tokenAuthenticationService,
                         staffMemberService,
                         authenticationManager()),
                 UsernamePasswordAuthenticationFilter.class);
 
         http.addFilterBefore(
                new StatelessAuthenticationFilter(tokenAuthenticationService),
                 UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        auth.userDetailsService(staffMemberService).passwordEncoder(passwordEncoder);
    }

    @Override
    protected UserDetailsService userDetailsService() {
        return staffMemberService;
    }
   
	

}
