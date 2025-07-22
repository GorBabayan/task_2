let users = [
    { id: 1, name: "Gor" },
    { id: 2, name: "Vardan" }
];

function generateId() {
    return Math.max(0, ...users.map(u => u.id)) + 1;
}

function addUser(user, callback) {
    setTimeout(() => {
        let newUser = { id: generateId(), ...user };
        users.push(newUser);
        callback(newUser);
    }, 500);
}


function deleteUser(id, callback) {
    setTimeout(() => {
        let index = users.findIndex(user => user.id == id);

        if (index == -1) {
            return callback(null, "User not found");
        }

        users = users.filter(user => user.id != id);
        callback(null, users);
    }, 500);
}

function updateUser(id, updates, callback) {
    setTimeout(() => {
        let index = users.findIndex(user => user.id == id);

        if (index == -1) {
            return callback(null, "User not found");
        }

        users[index] = { ...users[index], ...updates };
        callback(users[index]);
    }, 500);
}

addUser({ name: "Armen" }, (user) => {
    console.log("Added: ", user);
        addUser({ name: "Mane" }, (user) => {
            console.log("Added: ", user);
            updateUser(user.id, { name: "Leo" }, (updated) => {
                console.log("Updated: ", updated);
                deleteUser(user.id, (err, users) => {
                    if (err) {
                        console.error(err);
                    }
                    console.log("After delete: ", users);
                });
            });
        });
});



