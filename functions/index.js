const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HQbClBAaDiEKpstYU4hCVqHCefasTKWx9ZZEOkGKKYdKliUvWT2D1rC7sfaUAWLOmt9BE1Hn2I9T2PWwg9RJpjh00EEAPgQzC');

const app = express();

app.use(cors({ rigin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved BOOM!! >>>', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

exports.api = functions.https.onRequest(app)

//http://localhost:5001/ecommerce-clone-86587/us-central1/api
