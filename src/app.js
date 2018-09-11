const fs = require ('fs');
const path = require ('path');
const express = require('express');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const accountData  = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8');
const accounts = JSON.parse(accountData);
const userData   = fs.readFileSync(path.join(__dirname, 'json', 'users.json'), 'utf8');
const users  = JSON.parse(userData);

app.get('/',(req,res) => res.render('index',{title:'Account Summary', accounts:accounts}));
app.get('/profile',(req,res) => res.render('profile',{title:'Profile', user: users[0]}));
app.get('/savings',(req,res) => res.render('account',{title:'Savings', account:accounts.savings}));
app.get('/checking',(req,res) => res.render('account',{title:'Checking', account:accounts.checking}));
app.get('/credit',(req,res) => res.render('account',{title:'Credit', account:accounts.credit}));


app.listen(3000, () => console.log('PS project running on port 3000'))
