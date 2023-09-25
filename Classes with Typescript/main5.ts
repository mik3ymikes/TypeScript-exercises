
class Student {
    studentName:string;
    studentAge:number;
    studentGrade:number;
    
    
    // Define the constructor here
    constructor(studentName:string, studentAge:number,studentGrade:number){
        this.studentName=studentName,
        this.studentAge=studentAge,
        this.studentGrade=studentGrade
        
    }
    // Define the displayInfo method here
    displayInfo(){console.log(this.studentName,this.studentAge, this.studentGrade)}
    
    // Define the isPassing method here
    isPassing(gradeThreshold:number){

       return gradeThreshold>60?true:false
    }

}

// Instantiate a new student object and call the methods to test your class
const student1=new Student("mike", 22, 67)
student1.displayInfo()
student1.isPassing(34)