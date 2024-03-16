  import User from "../Models/Users.js";
  import bcrypt from "bcrypt";
  import jwt from "jsonwebtoken";
  export const register = async (req, res, next) => {
    console.log(req.file)
    try {
      const {
        name,
        age,
        dob,
        gender,
        position,
        password,
        email_id,
        contact_number,
        house_name,
        location,
        district,
        pincode,
        Id_proof,
        userType,
        photo
      } = req.body;
  
      // Ensure photo is available in req.file if multer is set up correctly
      const photoFile = req.file;
      if (!photoFile) {
        return res.status(400).json({ error: "Photo is required" });
      }
  
      // Your file handling logic here...
      
      // Example: save file to a specific directory
      const photoFilePath = `uploads/${photoFile.filename}`;
  
      // Example: save other fields to database
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        age,
        dob,
        gender,
        position,
        password: hashedPassword,
        email_id,
        contact_number,
        house_name,
        location,
        district,
        pincode,
        Id_proof,
        userType,
        photo: photoFilePath // Save the file path to the database
      });
  
      await newUser.save();
      
      res.json({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  export const login = async (req, res, next) => {
    const { email_id, password } = req.body;
    let user = await User.findOne({ email_id });
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log(passwordMatch);
    if (!user) {
      return res.status(401).json("invalid username or password");
    }
    if (!passwordMatch) {
      return res.status(401).json("invalid username or password");
    }
    const token = jwt.sign({ id: user._id, email: user.email }, "abc");
    console.log(token);
    res.json({ user, token });
  };
