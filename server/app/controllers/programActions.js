// Some data to make the trick
const tables = require("../../database/tables");

  
  // Declare the action
  
  const browse = async (req, res, next) => {
      try {
      const programsFromDB = await tables.program.readAll();
  
      res.json(programsFromDB);
    } catch (err) {
      // Pass any errors to the error-handling middleware
      next(err);
    }
  };

  // ******************************************************

  const read = async (req, res, next) => {
    try {
      // Fetch a specific program from the database based on the provided ID
      const programFromDB = await tables.program.read(req.params.id);
  
      // If the program is not found, respond with HTTP 404 (Not Found)
      // Otherwise, respond with the program in JSON format
      if (programFromDB == null) {
        res.sendStatus(404);
      } else {
        res.json(programFromDB);
      }
    } catch (err) {
      // Pass any errors to the error-handling middleware
      next(err);
    }
  };

// *****************************************************
  
  // Export it to import it somewhere else
  
  module.exports = { browse, read };