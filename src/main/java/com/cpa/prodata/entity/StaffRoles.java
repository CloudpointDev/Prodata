/*
 * Created on 2019-07-09 ( Date ISO 2019-07-09 - Time 12:15:56 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.cpa.prodata.entity;
import java.util.List;
import java.io.Serializable;
import javax.persistence.*;

/**
 * Persistent class for StaffRoles entity stored in table staff_roles.
 * This class is a "record entity" without JPA links.
 * @author Somesh Biswas version 3.0.0
 */
@Entity
@Table(name="staff_roles", schema="public" )
public class StaffRoles implements Serializable {

	private static final long serialVersionUID = 1L;

    //----------------------------------------------------------------------
    // ENTITY PRIMARY KEY ( BASED ON A SINGLE FIELD )
    //----------------------------------------------------------------------
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="staff_role_id", nullable=false)
    private Integer staffRoleId ;  

    //----------------------------------------------------------------------
    // ENTITY DATA FIELDS 
    //----------------------------------------------------------------------    

  
    @Column(name="authority", nullable=false, length=100)
private String authority ;
 
    @Column(name="display_name", nullable=false, length=100)
private String displayName ;

    @ManyToOne
    @JoinColumn(name="staff_id", referencedColumnName="staff_id")
    private Staff staff       ;

    
    //----------------------------------------------------------------------
    // CONSTRUCTOR(S)
    //----------------------------------------------------------------------
    public StaffRoles() {
		super();
    }

    //----------------------------------------------------------------------
    // GETTER & SETTER FOR THE KEY FIELD
    //----------------------------------------------------------------------
	public void setStaffRoleId(Integer staffRoleId) {
        this.staffRoleId = staffRoleId ;
    }
	public Integer getStaffRoleId() {
        return this.staffRoleId;
    }

    //----------------------------------------------------------------------
    // GETTERS & SETTERS FOR FIELDS
    //----------------------------------------------------------------------
	//--- DATABASE MAPPING : staff_id (int8) 

	//--- DATABASE MAPPING : authority (varchar) 
	public void setAuthority(String authority)
 {this.authority = authority;}


	public String getAuthority()
 {return this.authority;}


	//--- DATABASE MAPPING : display_name (varchar) 
	public void setDisplayName(String displayName)
 {this.displayName = displayName;}


	public String getDisplayName()
 {return this.displayName;}



	public void setStaff( Staff staff )
 {this.staff= staff;}
	public Staff getStaff() 
{return this.staff;}

    //----------------------------------------------------------------------
    // toString METHOD
    //----------------------------------------------------------------------
 	 	public String toString() {
		StringBuilder sb = new StringBuilder(); 
		sb.append("StaffRoles");
		sb.append("staffRoleId :");
		sb.append(staffRoleId); 
		sb.append("|"); 
		sb.append("authority :");
		sb.append(authority); 
		sb.append("|"); 
		sb.append("displayName :");
		sb.append(displayName); 
        return sb.toString();
    }
}