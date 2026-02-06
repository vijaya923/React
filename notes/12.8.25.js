var companyName = 'Digital Edify';
console.log(typeof companyName);
var direction = 'North';
direction = 'East';
direction = 'South';
direction = 'West';
direction = 'karthik';
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection[CardinalDirection["North"] = 1] = "North";
    CardinalDirection[CardinalDirection["East"] = 2] = "East";
    CardinalDirection[CardinalDirection["South"] = 3] = "South";
    CardinalDirection[CardinalDirection["West"] = 4] = "West";
})(CardinalDirection || (CardinalDirection = {}));
console.log(CardinalDirection.South);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["success"] = 200] = "success";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["Forbidden"] = 403] = "Forbidden";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.success);
