const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "clientid",
  client_secret: "client",
});

module.exports = paypal;
