// must restart server whenever you make changes in next.config
module.exports = {
  // process.env.MONGO_SRV
  env: {
    MONGO_SRV: "mongodb+srv://ehzeta:!Esanena4747@test-hiegz.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "<insert-jwt-secret>",
    CLOUDINARY_URL: "<insert-cloudinary-url>",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
