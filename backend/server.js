const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const multer = require('multer'); //upload das imagens
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
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


let sqlUtils = require("./sqlUtils.js");

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

//Insert Post
app.post("/post/new", sqlUtils.functionInsertPost);

//Update Post
app.post("/post/update/:id", sqlUtils.functionUpdatePost);

//Delete Post
app.post("/post/delete/:id", sqlUtils.functionDeletePost);

//Get Post
app.get("/post/:id", sqlUtils.functionGetPost);

//Get Blog
app.get("/posts", sqlUtils.functionGetPosts);

 // Login and generate a token
app.post('/login', sqlUtils.functionLogin);

app.post('/uploads', (req, res) => {

  if (!req.files || !req.files.file) {
    return res.status(400).json({ error: 'Nenhum arquivo enviado' });
  }

  const uploadedFile = req.files.file;

  const destinationPath = '/uploads/' + uploadedFile.name;

  uploadedFile.mv(destinationPath, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Falha ao salvar o arquivo' });
    }

    res.status(200).send('Arquivo enviado com sucesso');
  });
});


// app.get("/posts", (req, res) => {
//   res.json([
//     {
//       id: "1",
//       title: "ola",
//       date: "11-05-2012",
//       text: "wfhoiweh hew iewf wefjo pwef we few",
//       image:
//         "https://s3-alpha-sig.figma.com/img/8bdd/365c/5b5a6dd5651fa3aa09758a0f9a210eeb?Expires=1699833600&Signature=eARBcV9qDljYmcSNZIHCaSBfM8~u6nN2VJZRLs85KX1OjBW6ag3aGkEGNG2Knn2qTkdi1Pf8vpxY~MsmaWBZn8abP68uQE4NyWN9lOHFrGA5HbJK8UszVpldNR3rKafHhR3W1AL-6P51nwJ-SNL13gT~13gZXcLR3TjMWg8wvOVbvq-KOCcza8dL1oF26Bjmw2fwb0XAJJUbbQQv9VBRuKduarwuhHp0PIcahAELysnx96nNgyFC7iqmseCWhYW0L7yfdaJiK7AWkY3faNsTed-lDDE62ShoJQYv3Eepa1FiC-juHPKsgLF7mr~531qyg-2fQ7WLxWiugPtC-sVk4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
//     },
//     {
//       id: "2",
//       title: "ola2",
//       date: "13-05-2012",
//       text: "wfaaaaaaaaaaa few",
//       image:
//         "https://s3-alpha-sig.figma.com/img/23a4/5aa5/f74c01d62517f0e02ef5a88d9cad72de?Expires=1699833600&Signature=Si9XsCle7AQoMqJUNsxnWujtMgFlN0l91XNCbfVPwlZmVyjLW-Kk60TgdulbgUutrkPXtGCZAylraw6Pah4MOYWZNfiNdYXgEDdfCDQDs7WFKnynlcPS8Yv3KavQBWau9NoyN-BytV962Ip-RsODEWYJ3yQPV9mCa4G5GFDjIeNRPqz0KbAglKuk6zChGbIP1cvvve32hQ06BOhA39rjb9AHtpTHcgmKc7fa~Sg9VAU8-9yERlCsGnXqMd1JH9AUMPylMMaBquRel77EOg75joZ7UbQcbMeKbSUW8AukMdCSqwVX~ylm~onO1AYBP8YQGwPESUNB3EFm3TgZSSJTWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
//     },
//     {
//       id: "3",
//       title: "ola3",
//       date: "15-05-2012",
//       text: "aadasfkjohgioqghpowepçwoqjf few",
//       image: "",
//     },
//   ]);
// });
    

const transporter = nodemailer.createTransport({
  service: 'outlook.com',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  }
});

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
