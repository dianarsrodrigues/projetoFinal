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
    const queryInsert = "INSERT INTO post(created_at, edited_at, delete_at, title_post, text_post) VALUES (?)";


    let created_at = new Date();

    const values = [[created_at, req.body.edited_at, req.body.delete_at, req.body.title_post, req.body.text_post]];
    con.query(queryInsert, values, (err, result) => {
        if (err) throw err;
        res.send("Post adicionado com o id " + result.insertId + "!");
    });
    con.end();
};



//Update Post
const functionUpdatePost = (req, res) => {
    const con = openConection();
    
    const queryUpdate = "UPDATE post SET edited_at = ?, title_post = ?, text_post= ? WHERE id = ?;";

    let edited_at = new Date();

    const values = [[edited_at],[req.body.title_post], [req.body.text_post], [req.params.id]];

    con.query(queryUpdate, values, (err, result) => {
        if (err) throw err;
        res.send("Update feito com sucesso!");
    });
    con.end();

};

//Delete Post
const functionDeletePost = (req, res) => {
    const con = openConection();
    // const queryDelete = "DELETE FROM post WHERE id = (?)";

    const queryDelete = "UPDATE post SET delete_at = ?  WHERE id = ?;";

    let delete_at = new Date();

    const values = [[delete_at], [req.params.id]];

    con.query(queryDelete, values, (err, result) => {
        if (err) throw err;
        res.send("Removido com sucesso o id " + req.params.id + "!");
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

    const querySearch = "SELECT * FROM post WHERE delete_at = '0000-00-00';";
    
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