const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config; // Add parentheses to load environment variables
const stripeKey = process.env.STRIPE_KEY;
const stripe = require("stripe")(stripeKey);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success !",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total; // Retrieve the total amount from the query parameters
  if (total > 0) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // The amount to be charged (in cents)
        currency: "usd", // The currency for the transaction
      });
      res.status(201).json({
        client_secret: paymentIntent.client_secret,
      });
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handle errors from Stripe API
    }
  } else {
    res.status(403).json({
      error: "Total must be greater than 0",
    });
  }
});

app.listen(2000, (err) => {
  if (err) throw err;
  console.log("Amazon server Running on Port: 2000,  http://localhost:2000");
});
