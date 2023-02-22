const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const handler = async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.list({
    limit: 10
  });
  res.status(200).send({ intentList: paymentIntent })
}

export default handler