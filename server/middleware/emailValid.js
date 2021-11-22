module.exports = (req, res, next) => {
  const { email, username, password, first_name } = req.body;

  const validEmail = (userEmail) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  };

  if (req.path === '/register') {
    if (![email, username, password, first_name].every(Boolean)) {
      return res.status(401).json('Missing Credentials');
    } else if (!validEmail(email)) {
      return res.status(401).json('Invalid Email');
    }
  } else if (req.path === '/login') {
    if (![username, password].every(Boolean)) {
      return res.status(401).json('Missing Credentials');
    }
    // else if (!validEmail(email)) {
    //   return res.status(401).json('Invalid Email');
    // }
  }

  next();
};
