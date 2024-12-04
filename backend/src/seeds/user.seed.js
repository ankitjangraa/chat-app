import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "monika@example.com",
    fullName: "Monika",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "jyoti@example.com",
    fullName: "Jyoti",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "ritika@example.com",
    fullName: "Ritika",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "money@example.com",
    fullName: "Money",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "priyanshi@example.com",
    fullName: "Priyanshi",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },

  // Male Users
  {
    email: "ankit.jangra@example.com",
    fullName: "Ankit Jangra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "ajay@example.com",
    fullName: "Ajay",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "manoj@example.com",
    fullName: "Manoj Jangra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "sahil@example.com",
    fullName: "Sahil",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
