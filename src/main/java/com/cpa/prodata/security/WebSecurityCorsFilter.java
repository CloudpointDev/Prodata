
package com.cpa.prodata.security;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class WebSecurityCorsFilter implements Filter {

	@Override
    public void init(FilterConfig filterConfig) throws ServletException {
		
		//Initialization
    }
	
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse res = (HttpServletResponse) response;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
        res.setHeader("Access-Control-Max-Age", "3600");
        res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type, Accept, x-auth-token, x-requested-with, Cache-Control");
        res.setHeader("Access-Control-Expose-Headers", "Authorization, Content-Type, Accept, x-auth-token, x-requested-with, Cache-Control");
        chain.doFilter(request, res);
    }
    
    @Override
    public void destroy() {
    	
    	//Destroying
    }

}
