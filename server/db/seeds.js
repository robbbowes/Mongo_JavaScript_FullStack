use books_site;
db.dropDatabase();

db.books.insert([
  {
    title: "Fellowship of the Ring",
    author: "J.R.R.Tolkien",
    // review: [{
    //   comment: "Required reading",
    //   rating 4.5,
    //   reviewer: "Random dude"
    // }]
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    // review: [{
    //   comment: "Had to read this in school",
    //   rating 3.8,
    //   reviewer: "Random dudette"
    // }]
  }]
);

db.books.find();
