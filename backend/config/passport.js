const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient(); // Initialize Prisma client

const pathToKey = path.join(__dirname, "..", "id_rsa_pub.pem");
const PUB_KEY = fs.readFileSync(pathToKey, "utf8");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ["RS256"],
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, async (jwt_payload, done) => {
      try {
        // Find user by ID using Prisma
        const user = await prisma.user.findUnique({
          where: { id: jwt_payload.id }, // Assuming `id` is the MongoDB ObjectId stored as a String in Prisma
        });

        if (user) {
          return done(null, user);
        } else {
          // If user is not found
          return done(null, false, { message: "User not found" });
        }
      } catch (error) {
        console.error("Error in JWT verification:", error);
        return done(error, false);
      }
    })
  );
};
