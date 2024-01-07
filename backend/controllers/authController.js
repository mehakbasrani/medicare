import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15d",
    }
  );
};

export const register = async (req, res) => {
  const { email, name, password, role, gender, photo, userType } = req.body;

  try {
    let user = null;

    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email });
    }

    //check if user already exists
    if (user) {
      return res.status(404).json({ message: "User already exists" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (role === "patient") {
      user = new User({
        name,
        email,
        password: hashPassword,
        gender,
        role,
        photo,
        userType,
      });
    }
    if (role === "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashPassword,
        gender,
        role,
        photo,
        userType,
      });
    }

    await user.save();
    res
      .status(200)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const login = async (req, res) => {
  const { email } = req.body;

  try {
    let user = null;

    const patient = await User.findOne({ email });
    const doctor = await Doctor.findOne({ email });

    if (patient) {
      user = patient;
    }

    if (doctor) {
      user = doctor;
    }

    //if user exist or not
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isPasswordMatched = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordMatched) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid Credentials" });
    }

    //get token
    const token = generateToken(user);

    const { password, role, appointments, ...rest } = user._doc;

    res.status(200).json({
      status: true,
      message: "LoggedIn Successfully",
      token,
      data: { ...rest },
      role,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Login failed" });
  }
};
