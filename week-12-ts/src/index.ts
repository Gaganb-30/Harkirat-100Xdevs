// interface User{
//   id : string,
//   name : string,
//   age : number,
//   email : string,
//   password : string,
// }

//- PICK (naya type bana deta hai jisme kuch attributes hot ehai purane wale (subset)) --
// type UpdateProps = Pick<User, 'name'| 'age'>;

// function sumOfAge (user1 : UpdateProps, user2 : UpdateProps) : number {
//   return user1.age + user2.age;
// }


//- PARTIAL (naya type bana ke de deta hai jisme sare attributes optional hote hai --
// type UpdatePropsOptional = Partial<UpdateProps>

// function sumOfAge (user1 : UpdatePropsOptional, user2 : UpdatePropsOptional) : number {
//   // return user1.age + user2.age;
//   return 4;
// }

// const age = sumOfAge({age : 21}, {name : "Karan", age : 24});
// console.log(age);


// ------------------------------ READ ONLY -------------------------------------------
// const obj = {
//   name : 'John',
//   age : 25,
//   counntry : 'USA'
// }

// obj.name = 'Gagan';               // change ho gaya
// console.log(obj);

// // type User1 = {
// //   readonly name : string,
// //   readonly age : number,
// // }
// type User1 = {
//   name : string,
//   age : number,
// }

// const UserObj : User1 = {
//   name : 'Gagan',
//   age : 21,
// }

// const UserObj : Readonly<User1> = {
//   name : 'Gagan',
//   age : 21,
// }
// UserObj.name = 'Golu';
// console.log(UserObj);


// //------------------------- Records and Maps --------------------------------------
// type User = {
//   id : string,
//   userName : string,
// };

// // type Users = {
// //   [key : string] : User,
// // }

// // ----------- OR ---------

// type Users = Record<string, User>;

// const users : Users = {
//   "zade@123" : {
//     id : 'zade@123',
//     userName : 'Gagan'
//   },
//   'iuyp@988' : {
//     id : 'iuyp@988',
//     userName : 'Karan'
//   }
// }

// // -------------------------- MAPS ---------------------------------------
// type User = {
//   id : string,
//   userName : string,
// }
// const users = new Map<string, User>();
// users.set("zade@123", {
//     id : 'zade@123',
//     userName : 'Gagan'
// });
// users.set('iuyp@988', {
//     id : 'iuyp@988',
//     userName : 'Karan'
// });

// const user = users.get("zade@123");
// console.log(user);
// console.log(users);


// ------------------------ EXCLUDE (Same as PICK)---------------------------------------
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>;           //'click | 'mousemove'

const handleEvent = (event : ExcludeEvent) => {
  console.log(`Handling event : ${event}`);
}

handleEvent('click');

