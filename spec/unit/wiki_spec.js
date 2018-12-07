const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const Wiki = require("../../src/db/models").Wiki;

describe("Wiki", () => {

  beforeEach((done) => {
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
    it("should create a User object with a valid email and password", (done) => {
      Wiki.create({
        title: "Human evolution",
        body: "It's the evolutionary process that led to modern humans."
      })
      .then((wiki) => {
        expect(wiki.title).toBe("Human evolution");
        expect(wiki.body).toBe("It's the evolutionary process that led to modern humans.");
        expect(wiki.id).toBe(1);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

    it("should not create a user with invalid title or body", (done) => {
      Wiki.create({
        title: "Human evolution",
        body: "It's the evolutionary process that led to modern humans."
      })
      .then((user) => {
        done();
      })
      .catch((err) => {
        expect(err.message).toContain("Validation error: must be a valid title or body");
        done();
      });
    });

  }); // end of create

  describe("#getUser()", () => {
    it("should return the associated user", (done) => {
      this.wiki.getUser()
      .then((associatedUser) => {
        expect(associatedUser.id).toBe(1);
        done();
      });
    });
  }); // end of get user

});

//