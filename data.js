let users = [];
let currentId = 1;

module.exports = {
    getUsers: () => users,
    addUser: (user) => {
        user.id = currentId++;
        users.push(user);
    },
}