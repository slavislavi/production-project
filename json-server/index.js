const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const PORT = 8000;
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

// mock delay to imitate true api
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// check if user has been authorized
// eslint-disable-next-line consistent-return
server.use(async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }
    next();
});

server.use(jsonServer.defaults());
server.use(router);

// login endpoint
server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
    const { users } = db;

    const userFromDb = users.find(
        (user) => user.username === username && user.password === password,
    );

    if (userFromDb) {
        return res.json(userFromDb);
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
});

// launch server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
