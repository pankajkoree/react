const { check, validationResult } = require("express-validator");

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
    .withMessage("password should be minimum 8 characters long")
    .matches(/A-Z/)
    .withMessage("password should contain uppercase letters")
    .matches(/a-z/)
    .withMessage("passowrd should contain lowercase letters")
    .matches(/0-9/)
    .withMessage("password should contain numbers")
    .matches(/[!@&]/)
    .withMessage("password should contain special characters")
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
    res.redirect("/login");
  },
];

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "login",
    currentPage: "login",
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res, next) => {
  console.log("login successful");
  req.session.isLoggedIn = true;
  res.redirect("/");
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(() => {
    console.log("user logged out");
    res.redirect("/login");
  });
};
