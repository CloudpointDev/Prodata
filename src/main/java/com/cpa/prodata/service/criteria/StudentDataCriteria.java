/*
 * Created on 2019-05-30 ( Date ISO 2019-05-30 - Time 14:40:05 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.cpa.prodata.service.criteria;

/**
 * Criteria bean used for StudentData search.
 * @author Somesh Biswas version 3.0.0
 */
public class StudentDataCriteria {

    private String activeflag; 
    private String address; 
    private String name; 
    private String std; 
	// Constructor
	public StudentDataCriteria() {
		// Needed empty constructor for serialization
	}

	public void setActiveflag(String activeflag) {this.activeflag = activeflag;}
	public String getActiveflag() {return this.activeflag;}
	public void setAddress(String address) {this.address = address;}
	public String getAddress() {return this.address;}
	public void setName(String name) {this.name = name;}
	public String getName() {return this.name;}
	public void setStd(String std) {this.std = std;}
	public String getStd() {return this.std;}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder(); 
		sb.append(activeflag); 
		sb.append("|"); 
		sb.append(address); 
		sb.append("|"); 
		sb.append(name); 
		sb.append("|"); 
		sb.append(std); 
        return sb.toString();
	}
}
