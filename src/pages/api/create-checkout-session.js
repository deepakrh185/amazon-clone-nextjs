const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;
  console.log("item", items);
  console.log(email);

  const transformItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "inr",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));
  console.log("tans=>", transformItems);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1IuYd3SAcRoUVx7bqepkjG5V"],
    line_items: transformItems,
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "IN"],
    },
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  console.log("session", session);
  res.status(200).json({ id: session.id });
};
