// Some data to make the trick

const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];
  
    // Declare the action
  
    const browse = (req, res) => {
        if (req.query.q != null) {
          const filteredCategories = categories.filter((category) =>
            category.name.includes(req.query.q)
          );
      
          res.json(filteredCategories);
        } else {
          res.json(categories);
        }
      };
  
      const read = (req, res) => {
        const parsedId = parseInt(req.params.id, 10);
      
        const category = categories.find((p) => p.id === parsedId);
      
        if (category != null) {
          res.json(category);
        } else {
          res.sendStatus(404);
        }
      };
  
  
  module.exports = { browse, read };