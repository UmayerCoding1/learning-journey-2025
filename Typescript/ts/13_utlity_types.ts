// utlity types

interface UserRecord {
    name: string;
    age: number;
    email: string
}


// Partial type
const updateUser = (user: Partial<UserRecord>) => {
  console.log(user);
}

updateUser({age: 90})
updateUser({name: 'Umayer', email: "umayer@gmail.com"})


// required type
type User123 = Required<UserRecord>;

let user123 : User123 =  {
    age:10,
    name: "Emam",
    email: "umayer@gmail.com"
}


// readonly
type UserRecord2 = Readonly<UserRecord>;

let userRecord2 : UserRecord2 =  {
    age:10,
    name: "Emam",
    email: "umayer@gmail.com"
}

// userRecord2.age = 12 //Error: Cannot assign to 'age' because it is a read-only property


// pick
type UserInfo = Pick<UserRecord, 'name' | 'email'> ;

const userInfo : UserInfo = {
    name: 'Umayer',
    email: 'umayer@gmail.com'
    // age: 21 //Error : Object literal may only specify known properties, and 'age' does not exist in type 'UserInfo.
}

// Omit

type UserWithoutEmail = Omit<UserRecord, 'email'>;
const userOmitInfo :UserWithoutEmail ={
    name: 'Umayer',
    age: 21,
    // email: 'umayer@gmail.com' //Error : Object literal may only specify known properties, and 'email' does not exist in type 'UserWithoutEmail'.
}


// Record
type UserRecordInfo = Record<string,boolean>;

const userRecordInfo :UserRecordInfo = {
    name: true
}

type Role = 'admin' | 'user' | 'seller';

const userRole : Record<Role, string> = {
    admin: 'Umayer',
    user: "test",
    seller: "top seller"
}

// console.log(userRole.admin);

// Exclude

type Status1 = "success" | 'error' | 'Loading';

type ExcludeError = Exclude<Status1, 'error'>;

const stat1 :ExcludeError = 'success';


// Extract
type ExtractError = Extract<Status1, 'error'>;

const stat2 : ExtractError = 'error';

// NonNullable

type MayBeUser = string | null | undefined;

type UserNull = NonNullable<MayBeUser>;

const userNull : UserNull = 'Diya';


// return Type
function getType () {
    return {name: 'Diya', age: 19}
}

type UserReturenType = ReturnType<typeof getType>;

const userType: UserReturenType = {name: 'umayer', age: 20};


// parameters
function updateUserData (name: string, age: number) {
  console.log(`${name},${age}`);
}

type UpdateUserParams = Parameters<typeof updateUserData>

const params : UpdateUserParams = ['Diya', 20]


// ConstructorParameters
class UserCData {
    constructor (public name: string,age?:number){}
}

type UserContructorParams = ConstructorParameters<typeof UserCData>;

const userCData : UserContructorParams = ['Umayer']