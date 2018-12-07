const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const Wiki = require("../../src/db/models").Wiki;

describe("Wiki", () => {

  beforeEach((done) => {
    this.user;
    this.wiki;
    sequelize.sync({force: true}).then((res) => {

      User.create({
        username: "wikiuser",
        email: "wikiuser@example.com",
        password: "12345678"
      })
      .then((user) => {
        this.user = user;

        Wiki.create({
          title: "Human evolution",
          body: "It's the evolutionary process that led to modern humans.",
          private: false,
          userId: this.user.id
        })
        .then((wiki) => {
          this.wiki = wiki;
          done();
        });
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });
  });

  describe("#create()", () => {
    it("should create a Wiki object with a valid title, body and assigned user", (done) => {
      Wiki.create({
        title: "Human evolution",
        body: "It's the evolutionary process that led to modern humans.",
        private: false,
        userId: this.user.id
      })
      .then((wiki) => {
        expect(wiki.title).toBe("Human evolution");
        expect(wiki.body).toBe("It's the evolutionary process that led to modern humans.");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

    it("should not create a user with invalid title, body or assigned user", (done) => {
      Wiki.create({
        title: "Empty title"
    })
      .then((wiki) => {
        done();
      })
      .catch((err) => {
        expect(err.message).toContain("Wiki.body cannot be null");
        expect(err.message).toContain("Wiki.userId cannot be null");
        done();
      });
    });

  }); // end of create

  describe("#getUser()", () => {

    it("should return the associated wiki", (done) => {
    this.wiki.getUser()
    .then((associatedUser) => {
        expect(associatedUser.id).toBe(1);
        done();
    }); 
  });
}); // end of get user

}); // end of unit wiki spec