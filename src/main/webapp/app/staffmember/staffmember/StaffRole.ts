export class StaffRole {
    splice(arg0: any, arg1: number): any {
      throw new Error("Method not implemented.");
    }
    indexOf(student: any): any {
      throw new Error("Method not implemented.");
    }
      
    constructor( 
      public staffRoleId : any,
      public staffId :any,
      public  authority: string,
      public   displayName : string){
      
    }
}