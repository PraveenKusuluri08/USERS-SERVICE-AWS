const assert = require("assert").strict
const { expect } = require("chai")
const chai = require("chai")
const chaiHttp = require("chai-http")
const app = require("../index")
chai.use(chaiHttp)
chai.should()

describe("Test For the routes", async () => {
  describe("Test /test", () => {
    it("Test for the test route", (done) => {
      chai
        .request(app)
        .get("/test")
        .end((err, res) => {
          if (err) done(err)
          res.should.have.status(200)
          done()
        })
    })
  })
  describe("Tests the admin route", () => {
    describe("Test /admin/createTable", () => {
      it("Test to test the admin route create table", (done) => {
        chai
          .request(app)
          .post("/admin/createTable")
          .send({
            tableName: "AUTH-1",
            primaryKey: "todo_id",
            sortKey: "title",
          })
          .end((err, res) => {
            if (err) {
              console.log("err🤣", err)
              done()
            }
            res.body.should.be.a("object")
            res.body.should.have.property("tableName")
            res.body.should.have.property("primaryKey")
            res.body.should.have.property("sortKey")
          })
        done()
      })
    })
  })
})
