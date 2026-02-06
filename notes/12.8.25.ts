const companyName = 'Digital Edify';

console.log(typeof companyName);

let direction: string = 'North';

direction = 'East';

direction = 'South';

direction = 'West';

direction = 'karthik';

enum CardinalDirection {
    North=1,
    East,
    South,
    West
}

console.log(CardinalDirection.South);

enum StatusCodes {
    // Named cnstants
    success = 200,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
}

console.log(StatusCodes.success);

