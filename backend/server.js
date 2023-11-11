const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const multer = require('multer'); //upload das imagens
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const sqlUtils = require("./sqlUtils.js");
const dotenv = require('dotenv');

dotenv.config(); // Carrega variáveis de ambiente do arquivo .env


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(bodyParser())
app.use(
  express.urlencoded({
    extended: true,
  })
);

const transporter = nodemailer.createTransport({
  service: 'outlook.com',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  }
});

// Configuração do Multer para o armazenamento de arquivos
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/'); // Pasta onde os arquivos serão armazenados
    console.log("entrou3");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname); // Use o nome original do arquivo
    console.log("entrou4");
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.json({ message: "ok" });
})

//Access images from frontend
app.get('/images/:filename', (req, res) => {
  res.sendFile(__dirname + '/uploads/' + req.params.filename);
});

//Insert Post
app.post("/post/new", upload.array('file'), sqlUtils.functionInsertPost);

//Update Post
app.post("/post/update/:id", upload.array('file'), sqlUtils.functionUpdatePost);

//Delete Post
app.post("/post/delete/:id", sqlUtils.functionDeletePost);

//Get Post
app.get("/post/:id", sqlUtils.functionGetPost);

//Get Blog
app.get("/posts", sqlUtils.functionGetPosts);

 // Login and generate a token
app.post('/login', sqlUtils.functionLogin);
    

app.post('/contacts', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  const mailOptions = {
    from: 'teste12356@outlook.pt',
    to: 'teste12356@outlook.pt',
    subject: subject,
    text: `Nome: ${firstName} ${lastName} \nEmail: ${email} \n\nMensagem: ${message}`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Erro ao enviar o e-mail' });
    } else {
      console.log('E-mail enviado: ' + info.response);
      res.json({ message: 'E-mail enviado com sucesso' });
    }
  });
});


app.post('/uploadImage', upload.single('file'), (req, res) => {
  if (!req.file) {
    console.log("No file received");
    return res.send({
      success: false
    });

  } else {
    console.log('file received');
    return res.send({
      success: true
    })
  }
});






app.listen(PORT, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
