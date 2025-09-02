"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = new Map();
users.set("zade@123", {
    id: 'zade@123',
    userName: 'Gagan'
});
users.set('iuyp@988', {
    id: 'iuyp@988',
    userName: 'Karan'
});
const user = users.get("zade@123");
console.log(user);
console.log(users);
