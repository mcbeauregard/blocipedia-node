const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;

describe("User", () => {

  beforeEach((done) => {
// #1  tests an empty table
    sequelize.sync({force: true})
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });

  });

  describe("#create()", () => {

// #2 ensures successful creation  of user with rigth values
    it("should create a User object with a valid email and password", (done) => {
      User.create({
        username: "michelle",
        email: "michelle@example.com",
        password: "password"
      })
      .then((user) => {
        expect(user.username).toBe("michelle");
        expect(user.email).toBe("michelle@example.com");
        expect(user.id).toBe(1);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

// #3 fail test if a used has entered invalid values (email/password)
    it("should not create a user with invalid email or password", (done) => {
      User.create({
        username: "michelle",
        email: "It's-a me, Mario!",
        password: "password"
      })
      .then((user) => {

        // The code in this block will not be evaluated since the validation error
        // will skip it. Instead, we'll catch the error in the catch block below
        // and set the expectations there.

        done();
      })
      .catch((err) => {
// #4 confirm that validation error and returns it
        expect(err.message).toContain("Validation error: must be a valid email");
        done();
      });
    });

    it("should not create a user with an email already taken", (done) => {

// #5 test validation error by creating a user with duplicate email
      User.create({
        username: "michelle",
        email: "michelle@example.com",
        password: "password"
      })
      .then((user) => {

        User.create({
          username: "michelle",
          email: "michelle@example.com",
          password: "nananananananananananananananana BATMAN!"
        })
        .then((user) => {

          // the code in this block will not be evaluated since the validation error
          // will skip it. Instead, we'll catch the error in the catch block below
          // and set the expectations there

          done();
        })
        .catch((err) => {
          expect(err.message).toContain("Validation error");
          done();
        });

        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

  });

});