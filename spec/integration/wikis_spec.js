const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/wikis/";

const User = require("../../src/db/models").User;
const Wiki = require("../../src/db/models").Wiki;
const sequelize = require("../../src/db/models/index").sequelize;

describe("routes : wikis", () => {

    beforeEach((done) => {
        this.user;
        this.wiki;
        sequelize.sync({force: true}).then((res) => {
        
         User.create({
           username: "wikiuser",
           email: "wikiuser@example.com",
           password: "01234567"
         })
         .then((user) => {
            this.user = user;
            request.get({
                url: "http://localhost:3000/auth/fake",
                form: {
                  userId: user.id,
                  role: user.role,
                  email: user.email
                }
              });

            Wiki.create({
                title: "Wiki title test",
                body: "Enter copy",
                userId: this.user.id
            })
            .then((wiki) => {
                this.wiki = wiki;
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });
          });
        });

    describe("GET /wikis/new", () => {
  
      it("should render a new wiki form", (done) => {
          request.get(`${base}new`, (err, res, body) => {
          expect(err).toBeNull();
          expect(body).toContain("New Wiki");
          done();
          });
       });
          
      });
  
      describe("POST /wikis/create", () => {
          const options = {
            url: `${base}create`,
            form: {
              title: "blink-182 songs",
              body: "What's your favorite blink-182 song?",
              private: false,
              userId: this.user.id
            }
          };
    
          it("should create a new wiki and redirect", (done) => {
            request.post(options,
              (err, res, body) => {
                Wiki.findOne({where: {title: "blink-182 songs"}})
                .then((wiki) => {
                  expect(wiki.title).toBe("blink-182 songs");
                  expect(wiki.body).toBe("What's your favorite blink-182 song?");
                  expect(wiki.private).toBe(false);
                  expect(wiki.userId).not.toBeNull();     
                  done();
                })
                .catch((err) => {
                  console.log(err);
                  done();
                });
              }
            );
          });
        });
  
        describe("GET /wikis/:id", () => { // semi-colon in the URI indicates that id is the URL parameter. An id is passed in the request.
  
          it("should render a view with the selected wiki", (done) => {
            request.get(`${base}${this.wiki.id}`, (err, res, body) => { // make a request and pass in the ID of the wiki we created in the beforeEach call.
              expect(err).toBeNull();
              expect(body).toContain("JS Frameworks"); // set the success code, include the view for the tile of the wiki
              done();
            });
          });
     
        });
  
        describe("POST /wikis/:id/destroy", () => {
  
          it("should delete the wiki with the associated ID", (done) => {
            Wiki.all()
            .then((wikis) => {
              const wikiCountBeforeDelete = wikis.length;
              expect(wikiCountBeforeDelete).toBe(1); 
              request.post(`${base}${this.wiki.id}/destroy`, (err, res, body) => {
                Wiki.all()
                .then((wikis) => {
                  expect(err).toBeNull();
                  expect(wikis.length).toBe(wikiCountBeforeDelete - 1); 
                  done();
                })
     
              });
            });
     
          });
     
        });
  
        describe("GET /wikis/:id/edit", () => {
  
          it("should render a view with an edit wiki form", (done) => {
            request.get(`${base}${this.wiki.id}/edit`, (err, res, body) => {
              expect(err).toBeNull();
              expect(body).toContain("Edit Wiki");
              expect(body).toContain("JS Frameworks");
              done();
            });
          });
     
        });
  
        describe("POST /wikis/:id/update", () => {
  
          it("should update the wiki with the given values", (done) => {
             request.post ({
                url: `${base}${this.wiki.id}/update`,
                form: {
                  title: "JavaScript Frameworks",
                  body: "There are a lot of them",
                  private: false,
                  userId: this.user.id
                }
              },
                (err, res, body) => {
                expect(err).toBeNull();
                Wiki.findOne({
                  where: { id:1 }
                })
                .then((wiki) => {
                  expect(wiki.title).toBe("JavaScript Frameworks");
                  done();
                });
              });
          });
        });
    });

});

// end of wiki spec