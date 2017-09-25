//package csvjson
// var csvjson = require('csvjson');
// var fs = require('fs');
// const csvFilePath = './test.csv';
//
// var data = fs.readFileSync(csvFilePath , 'utf8');
// var options = {
//   delimiter : ',', // optional
//   quote     : '"' // optional
// };
//
// console.log(csvjson.toObject(data, options));
//package csvjson

//package csvtojson
const csv = require('csvtojson');
var firebase = require('firebase-admin');

const csvFilePath = '../../test.csv';

csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    // combine csv header row and csv line to a json object
    // jsonObj.a ==> 1 or 4
    console.log(jsonObj);
})
.on('done',(error)=>{
    //console.log(this);
    console.log('end');
    //console.log(process.cwd());
});
//package csvtojson

// Initialize Firebase
var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("./firebase_serviceAccount.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "https://project-test-21899.firebaseio.com"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("contacts");

ref.update({
  "1/nickname": "TEST1",
  "2/nickname": "TEST2",
  "3/nickname": "TEST3"
});
