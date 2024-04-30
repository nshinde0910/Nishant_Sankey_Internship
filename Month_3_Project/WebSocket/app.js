const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/hotel-booking", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Hotel Schema
const hotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  rating: Number,
  price: Number, // Add price field to the schema
});
const Hotel = mongoose.model("Hotel", hotelSchema);

// Define a schema for GraphQL
const schema = buildSchema(`
  type Hotel {
    id: ID!
    name: String!
    location: String!
    description: String
    rating: Float!
    price: Float!
  }

  type Query {
    hotels: [Hotel]
    hotel(id: ID!): Hotel
  }
`);

// Resolver for fetching hotels with prices
const root = {
  hotels: async () => await Hotel.find(),
  hotel: async ({ id }) => await Hotel.findById(id),
};

// GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

// WebSocket endpoint for streaming hotel prices
io.on("connection", (socket) => {
  console.log("A client connected");

  // Stream recent hotel prices to the client
  setInterval(() => {
    generateRecentHotelPrices()
      .then((recentHotelPrices) => {
        socket.emit("recentHotelPrices", recentHotelPrices);
      })
      .catch((error) => {
        console.error("Error generating recent hotel prices:", error);
      });
  }, 5000); // Emit updates every 5 seconds

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});

// Generate recent hotel prices from the database
async function generateRecentHotelPrices() {
  try {
    // Fetch hotels from the database
    const hotels = await Hotel.find();

    // Map hotels to recent prices format
    const recentPrices = hotels.map((hotel) => ({
      id: hotel.id,
      name: hotel.name,
      price: hotel.price,
    }));

    return recentPrices;
  } catch (error) {
    console.error("Error fetching recent hotel prices:", error);
    return [];
  }
}

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
