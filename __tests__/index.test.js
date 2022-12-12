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
        .send((err, res) => {
          if (err) done(err)
          res.should.have.status(200)
          return
        })
      done()
    })
  })
})

describe("Tests the admin route", () => {
  describe("Test /admin/createTable", async(done) => {
    it("Test to test the admin route create table", (done) => {
      chai
        .request(app)
        .post("/admin/createTable")
        .send({
          tableName: "AUTH-1",
          primaryKey: "todo_id",
          sortKey: "title",
        })
        .send((err, res) => {
          if (err) {
            console.log("err🤣", err)
            return
            done()
          }
          res.body.should.be.a("object")
        })
      done()
      return
    }) 
  })
})
