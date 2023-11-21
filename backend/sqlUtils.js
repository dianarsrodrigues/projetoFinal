const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'fraseparacomplicarotoken';

const openConection = () => {
    const con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database: "projeto_final"
    });
    
    con.connect ((err)  => {
        if(err) throw err;
        console.log("Connected");
    });
    return con;
};

const verifyToken = (req, res) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token missing' });
    }

    jwt.verify(token, secretKey, (err) => {
        if (err) {
        return res.status(401).json({ message: 'Invalid token' });
        }
    });

    return true;
}

//Inserir Post
const functionInsertPost = (req, res) => {
    if (verifyToken(req, res) != true) {
       return;
    }
    
    const con = openConection();
    
    const queryInsert = "INSERT INTO post(created_at, edited_at, delete_at, title, text) VALUES (?)";

    let created_at = new Date();

    const values = [[created_at, req.body.edited_at, req.body.delete_at, req.body.title, req.body.text]];
    con.query(queryInsert, values, (err, result) => {
        if (err) throw err;
        res.json({ id : result.insertId });
    });
    con.end();
};



//Update Post
const functionUpdatePost = (req, res) => {
    
    if (verifyToken(req, res) != true) {
        return;
    }

    const con = openConection();
    
    const queryUpdate = "UPDATE post SET edited_at = ?, title = ?, text= ? WHERE id = ?;";

    let edited_at = new Date();
    
    const values = [[edited_at],[req.body.title], [req.body.text], [req.params.id]];

    con.query(queryUpdate, values, (err, result) => {
        if (err) throw err;
        if (result.affectedRows) {
            res.json({ message : 'Post updated.' });
        } else {
            res.status(404).json({ message : 'Post not found.' });
        }
    });
    con.end();

};

//Delete Post
const functionDeletePost = (req, res) => {
    
    if (verifyToken(req, res) != true) {
        return;
    }

    const con = openConection();
    // const queryDelete = "DELETE FROM post WHERE id = (?)";

    const queryDelete = "UPDATE post SET delete_at = ? WHERE id = ?;";

    let delete_at = new Date();

    const values = [[delete_at], [req.params.id]];

    con.query(queryDelete, values, (err, result) => {
        if (err) throw err;
        if (result.affectedRows) {
            res.json({ message : 'Post deleted.' });
        } else {
            res.status(404).json({ message : 'Post not found.' });
        }
    });
    con.end();
};

//Get Post
const functionGetPost = (req, res) => {
    const con = openConection();

    const querySearch = "SELECT * FROM post WHERE post.id = (?);";
    con.query(querySearch, req.params.id, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
    con.end();
};

//Get Blog
const functionGetPosts = (req, res) => {
    const con = openConection();

    const querySearch = "SELECT * FROM post WHERE delete_at IS NULL ORDER BY id DESC;";
    
    con.query(querySearch, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
    con.end();
};

//Login and generate a token
const functionLogin = async (req, res) => {
    const con = openConection();

    const querySearch = "SELECT * FROM login WHERE username = (?);";

    con.query(querySearch, req.body.username, async (err, result) => {
        if (err) throw err;
        const resultSize = result.length;
        let user = '';
        let storedPassword = '';
        if (resultSize > 0) {
            user = result[0]['username'];
            storedPassword = result[0]['password'];
        } else {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }
        
        if (user != req.body.username) {
            return res.status(401).json({ message: 'User não existe' });
        }

        // Verify the password using bcrypt
        const passwordMatch = await bcrypt.compare(req.body.password, storedPassword);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Password errada' });
        }

        // Create a JWT token with an expiration time (e.g., 1 hour)
        const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    });
    con.end();
};





//só podemos ter um export por ficheiro
module.exports = {
    functionInsertPost,
    functionUpdatePost,
    functionDeletePost,
    functionGetPost,
    functionGetPosts,
    functionLogin
};