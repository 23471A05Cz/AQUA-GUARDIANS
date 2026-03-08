const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',           // XAMPP default password
    database: 'water'
});

db.connect(err => {
    if (err) console.log('DB Connection Error:', err);
    else console.log('Connected to MySQL database');
});

// Registration API
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);

    db.query(
        'INSERT INTO users1 (name, email, password) VALUES (?, ?, ?)',
        [name, email, hashedPassword],
        (err, result) => {
            if (err) return res.status(500).send({ message: 'Error registering user', err });
            res.send({ message: 'User registered successfully' });
        }
    );
});

// Login API
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query(
        'SELECT * FROM users1 WHERE email = ?',
        [email],
        async (err, results) => {
            if (err) return res.status(500).send({ message: 'DB Error', err });
            if (results.length === 0) return res.status(400).send({ message: 'User not found' });

            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).send({ message: 'Invalid credentials' });

            res.send({ message: 'Login successful', user: { id: user.id, name: user.name, email: user.email } });
        }
    );
});

// Start server
app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
