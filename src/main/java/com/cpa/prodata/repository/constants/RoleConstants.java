package com.cpa.prodata.repository.constants;

public class RoleConstants {
	
	public static final String AND = " AND ";
public static final String FIND_ROLE_BY_AUTH = "SELECT * FROM role e WHERE e.active_flag = 'Y' "+ AND +" e.authority like :authority";
	
	private RoleConstants() {
		
	}
	

}
