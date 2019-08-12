package com.cpa.prodata.repository.constants;

public class StaffRoleRepositoryConstants {
	
	public static final String AND = " AND ";
	public static final String SELECT_BASE = "SELECT * FROM staff_roles e where ";
	public static final String ORDER_BY_CLAUSE = " ORDER BY e.staff_role_id ASC";
	public static final String FIND_BY_STAFF_ID = SELECT_BASE +" staff_id = :staffId";
	public static final String BY_STAFF_ID = " e.staff_id = :staffId";
	public static final String FIND_ALL_STAFF_ROLES_BY_STAFF_ID = SELECT_BASE+AND+BY_STAFF_ID;
	public static final String FIND_ALL_STAFF_ROLES_BY_STAFF_ROLE_ID = "SELECT * FROM staff_roles e where e.staff_role_id =:staffRoleId";
	private StaffRoleRepositoryConstants() {
		
	}


}
