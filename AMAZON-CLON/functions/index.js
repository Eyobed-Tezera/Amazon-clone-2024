const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-function/logger");
const express = require("express");
const cors = require("cors");
const stripeKey = process.env.STRIPE_KEY;
const dotenv = require("dotenv");
dotenv.config;
const stripe = require("stripe")(stripeKey);

const app = express();

app.use(cors({ origin: true })); //cors({ origin: true }) = Restricts based on the origin of each incoming request.

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success !",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total; // Retrieve the total amount from the query parameters
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      //Create a payment intent
      amount: total, //The amount to be charged (in cents)
      currency: "usd", // // The currency for the transaction
    });
    console.log(paymentIntent);
    res.status(201).json({
      client_secret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json(paymentIntent);
    message: "Total must be greater than 0";
  }
}); //since it await's the stripe

exports.api = onRequest(app);
//onRequest(app):-It tells Firebase to listen for HTTP requests on this endpoint.
