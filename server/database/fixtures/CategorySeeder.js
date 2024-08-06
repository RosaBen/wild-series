const AbstractSeeder = require("./AbstractSeeder");

class CategorySeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "category", truncate: true });
  }

  run() {
    const categories = [{ name: "Comédie" }, { name: "Science-Fiction" }, { name: "Drame" }, { name: "Fantastique" }, { name: "Policier" }, { name: "Animation" }, { name: "Aventure" }, { name: "Horreur" }, { name: "Thriller" }, { name: "Documentaire" }];

    categories.forEach((category) => {
      //   this.insert(category); // insert into category(name) values (?)
      const categoryWithRefName = {
        ...category,
        refName: `category_${category.name}`,
      };
      this.insert(categoryWithRefName); // insert into category(name) values (?)
    });
  }
}

// Export the CategorySeeder class
module.exports = CategorySeeder;
