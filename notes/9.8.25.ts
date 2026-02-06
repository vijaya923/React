interface IStudent {
    id: number | string; // Union type (symbol - pipe)
    firstName: string;
    lastName: string;
    age: number;
    gender: 'male' | 'female' | 'other';
    address:{
        street: string;
        city: string;
        state: string;
        pincode: number;

    };
    isHosteller: boolean;
    extraCurricularActivities: string[];
}
const student: IStudent = {
    id: 'S123',
    firstName: 'Kiran',
    lastName: 'babu',
    age: 20,
    gender: 'male',
    address: {
        street: '123 Main St',
        city: 'Hyderabad',
        state: 'Telangana',
        pincode: 500001
    },
    isHosteller: true,
    extraCurricularActivities: ['Basketball', 'Chess Club']
};

class Student {
    // Class Variables - values can be accessed through the class.
    id : number;
    firstName : string;
    lastName : string;
    age : number;
    isHosteller : boolean;
    extraCurricularActivities : Array<string>;

    // Constructor function - 5 parameters / Arguments - values can be accessed only with in the function
    constructor(id: number, ifirstName: string, ilastName: string, age: number, isHosteller: boolean, extraCurricularActivities: Array<string>) {
        this.id = id;
        this.firstName = ifirstName;
        this.lastName = ilastName;
        this.age = age;
        this.isHosteller = isHosteller;
        this.extraCurricularActivities = extraCurricularActivities;

    }

getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
}
getExtraCurricularActivities(): void {
    console.log('Extra Curricular Activities:');
    this.extraCurricularActivities.forEach((activity : string , index : number)  => {
        console.log(`${index + 1}. ${activity}`);
    });
        
    }

    getId(): void {
        console.log('Student ID:', this.id);
    }}

// Constructor function will be involved automatically on creation of object.

// Creation of student 1 & student 2 objects...

// new keyword - Creates the object using class.

const student1 = new Student(205, 'Kiran', 'Babu', 20, true, ['Basketball', 'Chess Club']);

const fullName1=student1.getFullName();

console.log(fullName1);

student1.getExtraCurricularActivities();
student1.getId();

const student2 = new Student(206, 'Raj', 'Kumar', 22, false, ['Basketball', 'Chess club']);

const fullName2=student2.getFullName();

console.log(fullName2);
