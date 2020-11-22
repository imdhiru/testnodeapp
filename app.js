const express = require('express');
const app = express();
const Joi = require('@hapi/joi');
const movies = require('./movies');

app.use(express.json());
const a = [{
    "id": "1",
    "First_And_Last_name": "C Pal",
    "Company_Name": "GlobalSign",
    "Email": "CPal@gmail.com",
    "Last_Login_Time": "2020-07-02T08:49:28",
    "Certificates_Count": "22433"
},
{
    "id": "2",
    "First_And_Last_name": "Mic P",
    "Company_Name": "ABC Inc.",
    "Email": "MicP@gmail.com",
    "Last_Login_Time": "2020-07-02T08:49:28",
    "Certificates_Count": "4839"
},
{
    "id": "3",
    "First_And_Last_name": "Anthny F",
    "Company_Name": "Openlane",
    "Email": "AnthnyF@gmail.com",
    "Last_Login_Time": "2020-09-23T19:26:17",
    "Certificates_Count": "2021"
},
{
    "id": "4",
    "First_And_Last_name": "Jame Amos",
    "Company_Name": "Yearin",
    "Email": "JameAmos@gmail.com",
    "Last_Login_Time": "2020-06-17T18:01:19",
    "Certificates_Count": "1598"
},
{
    "id": "5",
    "First_And_Last_name": "Cyrus Leo",
    "Company_Name": "Openlane",
    "Email": "CyrusLeo@gmail.com",
    "Last_Login_Time": "2020-02-05T14:58:56",
    "Certificates_Count": "1237"
},
{
    "id": "6",
    "First_And_Last_name": "Huey Culley",
    "Company_Name": "Yearin",
    "Email": "HueyCulley@gmail.com",
    "Last_Login_Time": "2020-06-02T12:06:15",
    "Certificates_Count": "1005"
},
{
    "id": "7",
    "First_And_Last_name": "Marvis Deloach",
    "Company_Name": "Goodsilron",
    "Email": "MarvisDeloach@gmail.com",
    "Last_Login_Time": "2020-10-10T11:35:44",
    "Certificates_Count": "835"
},
{
    "id": "8",
    "First_And_Last_name": "Nathan Brevard",
    "Company_Name": "Condax",
    "Email": "NathanBrevard@gmail.com",
    "Last_Login_Time": "2020-10-05T22:56:29",
    "Certificates_Count": "799"
},
{
    "id": "9",
    "First_And_Last_name": "Kyle Parada",
    "Company_Name": "Opentech",
    "Email": "KyleParada@gmail.com",
    "Last_Login_Time": "2020-06-09T14:57:25",
    "Certificates_Count": "776"
},
{
    "id": "10",
    "First_And_Last_name": "Tiffaney Anastasio",
    "Company_Name": "Golddex",
    "Email": "TiffaneyAnastasio@gmail.com",
    "Last_Login_Time": "2020-09-29T06:10:47",
    "Certificates_Count": "749"
},
{
    "id": "11",
    "First_And_Last_name": "Stefania Bohland",
    "Company_Name": "year-job",
    "Email": "StefaniaBohland@gmail.com",
    "Last_Login_Time": "2019-12-10T17:39:38",
    "Certificates_Count": "676"
},
{
    "id": "12",
    "First_And_Last_name": "Cortez Dais",
    "Company_Name": "Isdom",
    "Email": "CortezDais@gmail.com",
    "Last_Login_Time": "2020-07-14T07:10:54",
    "Certificates_Count": "668"
}];
const b = JSON.stringify(a);


const c =  [
    {
      "id": "1",
      "name": "Johnny sharma",
      "email": "john@globalsign.com"
    },
    {
      "id": "2",
      "name": "Vivek sharma",
      "email": "vivek.sharma@globalsign.com"
    },
    {
      "name": "Sudhir kumar",
      "email": "Sudhir.Kumar@globalsign.com",
      "id": "suel_ht"
    }
  ];
  const d = JSON.stringify(c);
app.use('/abc', movies);
app.get('/users', (req,res) => {
    res.send(d);   
});
app.get('/certificates', (req,res) => {
    res.send(b);   
});

app.get('/users', (req,res) => {
    res.send('Sudhir, Welcome to Daily Code Buffer in Heroku Auto Deployment!!');
});

app.get('/', (req,res) => {
    res.send('Sudhir Welcome to Daily Code Buffer in Heroku Auto Deployment!!');
});







const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));
