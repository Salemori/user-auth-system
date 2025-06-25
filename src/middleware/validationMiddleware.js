exports.validateSignUp = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const passwordRegex = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;

  const errors = [];

  if (!firstName) {
    errors.push("First name is required");
  }

  if (!lastName) {
    errors.push("Last name is required");
  }

  if (!email) {
    errors.push("Email is required");
  }

  if (!password) {
    errors.push("Password is reqired");
  }

  if (!passwordRegex.test(password)) {
    errors.push(
      "Password must be at least 8 characters long, contain at least one uppercase letter, and one special character."
    );
  }

  if (errors.length > 0) {
    return res.status(400).json({ message: errors });
  }

  next();
};

exports.validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  const errors = [];

  if (!email) {
    errors.push("Email is required");
  }

  if (!password) {
    errors.push("Password is reqired");
  }

  if (errors.length > 0) {
    return res.status(400).json({ message: errors });
  }

  next();
};