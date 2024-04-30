const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");

const app = express();

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

// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});
const User = mongoose.model("User", userSchema);

// Hotel Schema
const hotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  rating: Number,
  price: Number, // New field for hotel price
});
const Hotel = mongoose.model("Hotel", hotelSchema);

// Booking Schema
const bookingSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  hotelId: mongoose.Types.ObjectId,
  checkInDate: String,
  checkOutDate: String,
  numOfGuests: Number,
  totalPrice: Number,
});
const Booking = mongoose.model("Booking", bookingSchema);

// GraphQL Schema
const schema = buildSchema(`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Hotel {
    id: ID!
    name: String!
    location: String!
    description: String
    rating: Float!
    price: Float! # New field for hotel price
  }

  type Booking {
    id: ID!
    userId: ID!
    hotelId: ID!
    checkInDate: String!
    checkOutDate: String!
    numOfGuests: Int!
    totalPrice: Float!
  }

  input HotelInput {
    name: String!
    location: String!
    description: String
    rating: Float!
    price: Float! # New field for hotel price
  }

  input BookingInput {
    userId: ID!
    hotelId: ID!
    checkInDate: String!
    checkOutDate: String!
    numOfGuests: Int!
    totalPrice: Float!
  }

  type Query {
    hotels: [Hotel]
    hotel(id: ID!): Hotel
    users: [User]
    bookings: [Booking]
    booking(id: ID!): Booking
  }

  type Mutation {
    createHotel(input: HotelInput!): Hotel
    updateHotel(id: ID!, input: HotelInput!): Hotel
    deleteHotel(id: ID!): Hotel

    createUser(username: String!, email: String!): User
    updateUser(id: ID!, username: String, email: String): User
    deleteUser(id: ID!): User

    createBooking(input: BookingInput!): Booking
    updateBooking(id: ID!, input: BookingInput!): Booking
    deleteBooking(id: ID!): Booking

    updateHotelPrice(id: ID!, price: Float!): Hotel # New mutation to update hotel price
  }
`);

// Resolver functions
const root = {
  // Hotel Resolvers
  hotels: async () => await Hotel.find(),
  hotel: async ({ id }) => await Hotel.findById(id),
  createHotel: async ({ input }) => await Hotel.create(input),
  updateHotel: async ({ id, input }) => {
    await Hotel.findByIdAndUpdate(id, input);
    return await Hotel.findById(id);
  },
  deleteHotel: async ({ id }) => await Hotel.findByIdAndDelete(id),

  // User Resolvers
  createUser: async ({ username, email }) =>
    await User.create({ username, email }),
  updateUser: async ({ id, username, email }) => {
    await User.findByIdAndUpdate(id, { username, email });
    return await User.findById(id);
  },
  users: async () => await User.find(),
  deleteUser: async ({ id }) => await User.findByIdAndDelete(id),

  // Booking Resolvers
  createBooking: async ({ input }) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(input.userId)) {
        throw new Error("Invalid userId format");
      }
      const existingUser = await User.findById(input.userId);
      if (!existingUser) {
        throw new Error("User with the provided userId does not exist");
      }
      const newBooking = await Booking.create(input);
      return newBooking;
    } catch (error) {
      console.error("Error creating booking:", error);
      throw new Error("Failed to create booking: " + error.message);
    }
  },
  updateBooking: async ({ id, input }) => {
    await Booking.findByIdAndUpdate(id, input);
    return await Booking.findById(id);
  },
  deleteBooking: async ({ id }) => await Booking.findByIdAndDelete(id),
  booking: async ({ id }) => await Booking.findById(id),
  bookings: async () => await Booking.find(),

  // Mutation to update hotel price
  updateHotelPrice: async ({ id, price }) => {
    try {
      const hotel = await Hotel.findByIdAndUpdate(id, { price }, { new: true });
      return hotel;
    } catch (error) {
      console.error("Error updating hotel price:", error);
      throw new Error("Failed to update hotel price: " + error.message);
    }
  },
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

// Server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/graphql`);
});
