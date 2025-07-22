let users = [
    { id: 1, name: "Gor" },
    { id: 2, name: "Vardan" }
];

function generateId() {
    return Math.max(0, ...users.map(u => u.id)) + 1;
}

function getUsers() {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve([...users]);
        }, 400);
    });
}

function addUser(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            let newUser = { id: generateId(), ...user };
            users.push(newUser);
            resolve(newUser);
        }, 400);
    });
}

function deleteUser(id) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let index = users.findIndex(user => user.id == id);
            if (index == -1) {
                reject(new Error("User not found"));
            }

            users = users.filter(user => user.id != id);
            resolve(users);
        }, 400);
    });
}

function updateUser(id, updatedMaterial) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let index = users.findIndex(user => user.id == id);
            if (index == -1) {
                reject("User not found");
            }

            users[index] = { ...users[index], ...updatedMaterial };
            resolve(users[index]);
        }, 400);
    });
}

async function run() {
    try {
        const newUser = await addUser({ name: "Ani" });
        console.log("Added: ", newUser);

        const updatedUser = await updateUser(newUser.id, { name: "Mane" });
        console.log("Updated: ", updatedUser);

        const remainingUsers = await deleteUser(2);
        console.log(remainingUsers);
    } catch (error) {
        console.log(console.error);
    }
}

run();