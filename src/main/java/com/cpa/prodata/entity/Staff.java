package com.cpa.prodata.entity;
import java.util.List;
import java.io.Serializable;
import javax.persistence.*;

import com.cpa.prodata.converters.StringCryptoConverter;

/**
 * Persistent class for Staff entity stored in table staff.
 * This class is a "record entity" without JPA links.
 * @author Somesh Biswas version 3.0.0
 */
@Entity
@Table(name="staff", schema="public" )
public class Staff implements Serializable {

	private static final long serialVersionUID = 1L;

    //----------------------------------------------------------------------
    // ENTITY PRIMARY KEY ( BASED ON A SINGLE FIELD )
    //----------------------------------------------------------------------
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="staff_id", nullable=false)
    private Long staffId ;  

    //----------------------------------------------------------------------
    // ENTITY DATA FIELDS 
    //----------------------------------------------------------------------    

 
    @Column(name="staff_fname", nullable=false, length=255)
private String staffFname ;
 
    @Column(name="staff_lname", nullable=false, length=255)
private String staffLname ;
 
    @Column(name="login_key", nullable=false, length=255)
    private String loginKey ;
 
    @Column(name="login_id", nullable=true, length=255)
    private String loginId ;
 
    @Column(name="active_flag", nullable=false, length=10)
private String activeFlag ;

    @OneToMany(mappedBy="staff", targetEntity=StaffRoles.class)
    private List<StaffRoles> listOfStaffRoles;

    
    //----------------------------------------------------------------------
    // CONSTRUCTOR(S)
    //----------------------------------------------------------------------
    public Staff() {
		super();
    }

    //----------------------------------------------------------------------
    // GETTER & SETTER FOR THE KEY FIELD
    //----------------------------------------------------------------------
	public void setStaffId(Long staffId) {
        this.staffId = staffId ;
    }
	public Long getStaffId() {
        return this.staffId;
    }

    //----------------------------------------------------------------------
    // GETTERS & SETTERS FOR FIELDS
    //----------------------------------------------------------------------
	//--- DATABASE MAPPING : staff_fname (varchar) 
	public void setStaffFname(String staffFname)
 {this.staffFname = staffFname;}


	public String getStaffFname()
 {return this.staffFname;}


	//--- DATABASE MAPPING : staff_lname (varchar) 
	public void setStaffLname(String staffLname)
 {this.staffLname = staffLname;}


	public String getStaffLname()
 {return this.staffLname;}


	//--- DATABASE MAPPING : login_key (varchar) 
	public void setLoginKey(String loginKey)
 {this.loginKey = loginKey;}


	public String getLoginKey()
 {return this.loginKey;}


	//--- DATABASE MAPPING : loginId (varchar) 
	public void setLoginid(String loginId)
 {this.loginId = loginId;}


	public String getLoginid()
 {return this.loginId;}


	//--- DATABASE MAPPING : active_flag (varchar) 
	public void setActiveFlag(String activeFlag)
 {this.activeFlag = activeFlag;}


	public String getActiveFlag()
 {return this.activeFlag;}



	public void setListOfStaffRoles( List listOfStaffRoles )
 {this.listOfStaffRoles= listOfStaffRoles;}
	public List getListOfStaffRoles() 
{return this.listOfStaffRoles;}

    //----------------------------------------------------------------------
    // toString METHOD
    //----------------------------------------------------------------------
 	 	public String toString() {
		StringBuilder sb = new StringBuilder(); 
		sb.append("Staff");
		sb.append("staffId :");
		sb.append(staffId); 
		sb.append("staffFname :");
		sb.append(staffFname); 
		sb.append("|"); 
		sb.append("staffLname :");
		sb.append(staffLname); 
		sb.append("|"); 
		sb.append("loginKey :");
		sb.append(loginKey); 
		sb.append("|"); 
		sb.append("loginid :");
		sb.append(loginId); 
		sb.append("|"); 
		sb.append("activeFlag :");
		sb.append(activeFlag); 
        return sb.toString();
    }
}