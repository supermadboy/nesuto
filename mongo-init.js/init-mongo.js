db.createUser(
  {
      user: "testboy",
      pwd: "123test",
      roles: [
          {
              role: "readWrite",
              db: "nesuto"
          }
      ]
  }
);
