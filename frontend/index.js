const express = require("express");
const app = express();
const {json} = require("express")
const cors = require('cors')
const usersRouter = require('../backend/routes/users/users-routes')
const authRouter = require('../backend/routes/users/auth-routes')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const path = require('path')
const dirname = require()
const {fileURLToPath} = require('url')
const dbConnection = require("../backend/modules/DbConection")

dotenv.config();

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {credentials:true, origin: process.env.URL || '*'};

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', express.static(join(__dirname, 'public')))
app.use('/api/auth',authRouter);
app.use('/api/users', usersRouter);

app.get('/routes/get', async (req, res) => {
  try{
      const users = await dbConnection.query(`SELECT * FROM users`);
      
      res.send(users);
    
    }catch(error){
      console.error(error)
    }
});


app.post('/routes/add', async (req,res) => {
  try {
 
    const newUser = await dbConnection.query(`INSERT INTO users(nome,email,senha) VALUES ('${req.body.formname}', '${req.body.formemail}', '${req.body.formpassword}')`)

    res.send(console.log('OK'))

  }catch(error){
    console.log(error)
  }
})

app.delete('/routes/delete', async (req,res) => {
  try{
    let resp = await dbConnection.query(`DELETE FROM users WHERE user_name = '${req.body.delete}'`);
    res.redirect('/routes/get')
  
  }catch(error){
    console.log(error)
  }
})

app.post('/routes/contact', async (req,res) => {
  try {
    let resp = await dbConnection.query(`INSERT INTO contact(contact_name, contact_email, contact_message) VALUES ('$1', '$2', '$3')`,[req.body.contactname,req.body.contactemail,req.body.contactmessage]);
    res.redirect('/')

  }catch(error){
    console.log(error)
  }
})

app.listen(PORT, ()=> {
  console.log(`Server is listening on port:${PORT}`);
})