const { check, validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    pageTitle: "signup",
    currentPage: "signup",
    isLoggedIn: false,
    errors: [],
    oldInput: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userType: "",
    },
  });
};
exports.postSignup = [
  check("firstName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First name should be minimum 2 characters long")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("first name should contain only alphabets"),

  check("lastName")
    .trim()
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("last name should contain only alphabets"),

  check("email")
    .isEmail()
    .withMessage("please enter a valid email")
    .normalizeEmail(),

  check("password")
    .isLength({ min: 8 })
    .withMessage("Password should be at least 8 characters long")
    .matches(/[A-Z]/)
    .withMessage("Password should contain at least one uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Password should contain at least one lowercase letter")
    .matches(/[0-9]/)
    .withMessage("Password should contain at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage(
      "Password should contain at least one special character (!, @, or &)"
    )
    .trim(),

  check("confirmPassword")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("password don't match");
      }
      return true;
    }),

  check("userType")
    .notEmpty()
    .withMessage("please select a user type")
    .isIn(["guest", "host"])
    .withMessage("invalid user type"),

  check("terms")
    .notEmpty()
    .withMessage("please accept the terms and conditions")
    .custom((value, { req }) => {
      if (value !== "on") {
        throw new Error("please accept the terms and conditions");
      }
      return true;
    }),
  (req, res, next) => {
    const { firstName, lastName, email, password, userType } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).render("auth/signup", {
        pageTitle: "signup",
        currentPage: "signup",
        isLoggedIn: false,
        errors: errors.array().map((err) => err.msg),
        oldInput: { firstName, lastName, email, password, userType },
      });
    }
    bcrypt
      .hash(password, 12)
      .then((hashdedPassword) => {
        const user = new User({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashdedPassword,
          userType: userType,
        });
        user.save().then(() => {
          console.log("signup successfully");
          res.redirect("/login");
        });
      })
      .catch((error) => {
        return res.status(422).render("auth/signup", {
          pageTitle: "signup",
          currentPage: "signup",
          isLoggedIn: false,
          errors: [error.message],
          oldInput: { firstName, lastName, email, password, userType },
        });
      });
  },
];

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "login",
    currentPage: "login",
    isLoggedIn: false,
    errors: [],
    oldInput: { email: "" },
  });
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(422).render("auth/login", {
      pageTitle: "login",
      currentPage: "login",
      isLoggedIn: false,
      errors: ["User doesn't exist"],
      oldInput: { email },
    });
  }

  const isCorrectPassword = await bcrypt.compare(password, user.password);
  if (!isCorrectPassword) {
    return res.status(422).render("auth/login", {
      pageTitle: "login",
      currentPage: "login",
      isLoggedIn: false,
      errors: ["Invalid password"],
      oldInput: { email },
    });
  }
  req.session.isLoggedIn = true;
  req.session.user = user;
  await req.session.save();
  res.redirect("/");
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(() => {
    console.log("user logged out");
    res.redirect("/login");
  });
};
