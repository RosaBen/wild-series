const AbstractSeeder = require("./AbstractSeeder");
const CategorySeeder = require("./CategorySeeder");

class ProgramSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    // super({ table: "program", truncate: true });
    super({ table: "program", truncate: true, dependencies: [CategorySeeder] });
  }

  run() {
    const programs = [
      {
        title: "The Good Place",
        synopsis:
          "À sa mort, Eleanor Shellstrop est envoyée au Bon Endroit, un paradis fantaisiste réservé aux individus exceptionnellement bienveillants. Or Eleanor n'est pas exactement une « bonne personne » et comprend vite qu'il y a eu erreur sur la personne. Avec l'aide de Chidi, sa prétendue âme sœur dans l'au-delà, la jeune femme est bien décidée à se redécouvrir.",
        poster:
          "https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg",
        country: "USA",
        year: 2016,
        // category_id: ???
        category_id: this.getRef("category_Comédie").insertId,
      },
      {
        title: "Dark",
        synopsis:
          "Quatre familles affolées par la disparition d'un enfant cherchent des réponses et tombent sur un mystère impliquant trois générations qui finit de les déstabiliser.",
        poster:
          "https://img.betaseries.com/zDxfeFudy3HWjxa6J8QIED9iaVw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc47135385da176a87d0dd9177c5f6a41.jpg",
        country: "Allemagne",
        year: 2017,
        // category_id: ???
        category_id: this.getRef("category_Science-Fiction").insertId,
      },
      {
        title: "Saw",
        synopsis:
          "Dans une salle de bain désaffectée, le photographe Adam Stanheight et le docteur Lawrence Gordon se réveillent, aux coins opposés de la pièce, enchaînés par leurs chevilles à des canalisations. Une horloge indique dix heures. Au milieu de la pièce, un corps est allongé sur le sol dans une mare de sang, tenant un revolver et un magnétophone. Lawrence et Adam trouvent dans leurs poches des cassettes sur lesquelles il est écrit : « play me » (« écoutez-moi »). Après avoir enclenché les cassettes, celle d'Adam lui indique qu'il doit s'échapper de la salle de bains, et celle de Lawrence l'informe qu'il doit tuer Adam avant 18 heures, faute de quoi son épouse et sa fille seront tuées et il sera laissé pour mort dans cette pièce. Ils trouvent ensuite des scies à métaux qui ne sont pas assez solides pour couper leurs chaînes, mais assez pour couper leur jambe.",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/5/56/Saw_official_poster.jpg",
        country: "USA",
        year: 2004,
        category_id: this.getRef("category_Horreur").insertId,
      },
      {
        title: "Alabama Monroe",
        synopsis:
          "Didier et Élise vivent une histoire d'amour passionnée et rythmée par la musique. Lui, joue du banjo dans un groupe de Bluegrass Country et vénère l'Amérique. Elle, tient un salon de tatouage et chante dans le groupe de Didier. De leur union fusionnelle naît une fille, Maybelle...",
        poster:
          "https://imgs.search.brave.com/3OuG1VuqSi7cOBSWqO2BW7EiMXqOD1AWgNwQ2Ebw18k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zZW5zY3JpdGlx/dWUuY29tL21lZGlh/LzAwMDAyMTQzMTc3/Ny8zMDAvYWxhYmFt/YV9tb25yb2UuanBn",
        country: "Belgique",
        year: 2013,
        category_id: this.getRef("category_Drame").insertId,
      },
    ];

    programs.forEach((program) => {
      this.insert(program); // insert into program(title, synopsis, poster, country, year, category_id) values (?, ?, ?, ?, ?, ?)
    });
  }
}

// Export the ProgramSeeder class
module.exports = ProgramSeeder;
