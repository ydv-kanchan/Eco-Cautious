const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  const userId = req.user.id; // Use the ID from the decoded token

  try {
    // Find the user by ID
    const user = await User.getUserProfileById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send the user data as JSON
    res.status(200).json({
      username: user.username,
      fullName: user.fullname,
      email: user.email,
      address: user.address,
      mobileNumber: user.phoneNumber,
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Error fetching profile details" });
  }
});


module.exports = router;
