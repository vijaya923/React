var student = {
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
var Student = /** @class */ (function () {
    // Constructor function - 5 parameters / Arguments - values can be accessed only with in the function
    function Student(id, ifirstName, ilastName, age, isHosteller, extraCurricularActivities) {
        this.id = id;
        this.firstName = ifirstName;
        this.lastName = ilastName;
        this.age = age;
        this.isHosteller = isHosteller;
        this.extraCurricularActivities = extraCurricularActivities;
    }
    Student.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Student.prototype.getExtraCurricularActivities = function () {
        console.log('Extra Curricular Activities:');
        this.extraCurricularActivities.forEach(function (activity, index) {
            console.log("".concat(index + 1, ". ").concat(activity));
        });
    };
    Student.prototype.getId = function () {
        console.log('Student ID:', this.id);
    };
    return Student;
}());
// Constructor function will be involved automatically on creation of object.
// Creation of student 1 & student 2 objects...
// new keyword - Creates the object using class.
var student1 = new Student(205, 'Kiran', 'Babu', 20, true, ['Basketball', 'Chess Club']);
var fullName1 = student1.getFullName();
console.log(fullName1);
student1.getExtraCurricularActivities();
student1.getId();
var student2 = new Student(206, 'Raj', 'Kumar', 22, false, ['Basketball', 'Chess club']);
var fullName2 = student2.getFullName();
console.log(fullName2);
