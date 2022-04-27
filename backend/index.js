// const express = require("express");
// const app = express();
// const {json} = require("express")
// const cors = require('cors')
// const usersRouter = require('../routes/auth-routes.js')
// const authRouter = require('./routes/auth-routes.js')
// const dotenv = require('dotenv')
// const cookieParser = require('cookie-parser')
// const {dirname,join} = require('path')
// const {fileURLToPath} = require('url')
// const dbConnection = require("../../modules/DbConection")

import express, {json} from 'express';
import cors from 'cors';
import usersRouter from './routes/users/users-routes';
import authRouter from './routes/users/auth-routes.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { dirname,join } from 'path';
import { fileURLToPath } from 'url';
import pool from './modules/db';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

// const app = express();
const PORT = process.env.PORT || 4000;
const corsOptions = {credentials:true, origin: process.env.URL || '*'};

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', express.static(join(__dirname, 'public')))
app.use('/api/auth',authRouter);
app.use('/api/users', usersRouter);

app.get('/routes/get', (req, res) => {
  try{
    pool.connect(async (error, client, release) =>{
      let resp = await client.query(`SELECT * FROM users`);
      release();
      res.send(resp.rows);
    })
    }catch(error){
      console.log(error)
    }
});


app.post('/routes/add', (req,res) => {
  try {
  pool.connect(async (error, client, release) =>{
    let resp = await client.query(`INSERT INTO users(user_name, user_email, user_password) VALUES ('${req.body.formname}', '${req.body.formemail}', '${req.body.formpassword}')`)
  })
  }catch(error){
    console.log(error)
  }
})

app.post('/routes/delete', (req,res) => {
  try{
  pool.connect(async (error, client, release) =>{
    let resp = await client.query(`DELETE FROM users WHERE user_name = '${req.body.delete}'`);
    res.redirect('/routes/get')
  })
  }catch(error){
    console.log(error)
  }
})

app.post('/routes/contact', (req,res) => {
  try {
  pool.connect(async (error, client, release) =>{
    let resp = await client.query(`INSERT INTO contact(contact_name, contact_email, contact_message) VALUES ('${req.body.contactname}', '${req.body.contactemail}', '${req.body.contactmessage}')`);
    res.redirect('/')
  })
  }catch(error){
    console.log(error)
  }
})

app.listen(PORT, ()=> {
  console.log(`Server is listening on port:${PORT}`);
})