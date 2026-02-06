const companyName: string = "Tech Innovators Inc.";

const isAccountActivated: boolean = true;

const totalAmount: number = 4009;

const users: Array<string> = ['ravi', 'srinu', 'bhanu','krishna' ];

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    getPassword?(): string;
}

const userInfo: User = {
     id: 1,
    name: 'ravi',
    email: 'ravi@example.com',
    password: 'ravi1234'
    }


const usersArray: Array<User> = [
  {
    id: 1,
    name: 'ravi',
    email: 'ravi@example.com',
    password: 'ravi1234'
  },
  {
    id: 2,
    name: 'suresh',
    email: 'suresh@example.com',
    password: 'suresh1234'
  },
  {
    id: 3,
    name: 'mahesh',
    email: 'mahesh@example.com',
    password: 'mahesh1234'
  },
  {
    id: 4,
    name: 'anita',
    email: 'anita@example.com',
    password: 'anita1234'
  }
];

