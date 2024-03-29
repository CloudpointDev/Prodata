/*
 * Created on 2019-05-07 ( Date ISO 2019-05-07 - Time 19:47:34 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.cpa.prodata.service.criteria;

/**
 * Criteria bean used for StudentLogin search.
 * @author Somesh Biswas version 3.0.0
 */
public class StudentLoginCriteria {

    private String password; 
	// Constructor
	public StudentLoginCriteria() {
		// Needed empty constructor for serialization
	}

	public void setPassword(String password) {this.password = password;}
	public String getPassword() {return this.password;}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder(); 
		sb.append(password); 
        return sb.toString();
	}
}
