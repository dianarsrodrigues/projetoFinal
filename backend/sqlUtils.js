const mysql = require('mysql');

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

//Inserir Post
const functionInsertPost = (req, res) => {
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

    const querySearch = "SELECT * FROM post WHERE delete_at IS NULL;";
    
    con.query(querySearch, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
    con.end();
};



//só podemos ter um export por ficheiro
module.exports = {
    functionInsertPost,
    functionUpdatePost,
    functionDeletePost,
    functionGetPost,
    functionGetPosts
};