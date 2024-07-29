const welcome = (req, res) => {
  console.info(req.query);
    res.send(`Welcome to Wild Series, ${req.query.name} !`);
  };

  module.exports = {welcome};