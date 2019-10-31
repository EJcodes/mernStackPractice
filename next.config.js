// must restart server whenever you make changes in next.config
module.exports = {
  // process.env.MONGO_SRV
  env: {
    MONGO_SRV: "mongodb+srv://Demon:Esanena7777@test-hiegz.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "<insert-jwt-secret>",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/drll6nq6j/image/upload",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};

