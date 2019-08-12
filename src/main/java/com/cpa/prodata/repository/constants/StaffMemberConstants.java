package com.cpa.prodata.repository.constants;

public class StaffMemberConstants {

	public static final String  FIND_STAFF_BY_LOGIN_ID="select * from staff where login_id =:loginId";
	
	public static final String  Find_STAFF="select * from staff where staff_id =:staffId";
	
private StaffMemberConstants() {
		
	}
}
