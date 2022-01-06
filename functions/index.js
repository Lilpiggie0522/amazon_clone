const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KCBssLsDig2OqYxZe7Y9BNuYCcOt2xs2wMLMxAfyz7tUvtlZxOcIVtKnydQP0qq6jR6nS3uN457t10LNotvrkao00JswiR3FI');

// app config
const app = express();
app.use(cors({origin: true}));
app.use(express.json());

// API
app.get('/', (request, response) => response.status(200).send('hello world'));
app.get('/piggie', (request, response) => response.status(200).send("what's up piggie"));

app.post('/payments/create', async(request, response)=>{
    const total = request.query.total;
    console.log("Payment request received boom!!! For this amount: ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //sub units
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

// listen command
exports.api = functions.https.onRequest(app)    
