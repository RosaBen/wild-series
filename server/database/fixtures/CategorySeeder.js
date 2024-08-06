const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)
const UserSeeder = require("./UserSeeder");

class CategorySeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "category", truncate: true, dependencies: [UserSeeder] });
  }

  // The run method - Populate the 'category' table with fake data

  run() {
    // Generate and insert fake data into the 'category' table
    for (let i = 0; i < 10; i += 1) {
      // Generate fake category data
      const fakeCategory = {
        title: this.faker.lorem.word(), // Generate a fake title using faker library
        user_id: this.getRef(`user_${i}`).insertId, // Get the insertId of the corresponding user from UserSeeder
      };

      // Insert the fakeCategory data into the 'category' table
      this.insert(fakeCategory); // insert into category(title, user_id) values (?, ?)
    }
  }
}

// Export the CategorySeeder class
module.exports = CategorySeeder;
