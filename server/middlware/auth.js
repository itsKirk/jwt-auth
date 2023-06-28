const passport = require("passport");

// Auth middleware
exports.requireAuth = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      // Handle unauthorized access
      return res.status(401).json({ error: "Unauthorized", info });
    }
    // User authenticated successfully
    const userData = { name: user.name, email: user.email, id: user._id };
    req.user = userData;
    next();
  })(req, res, next);
};
