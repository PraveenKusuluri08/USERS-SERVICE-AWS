const { createTable } = require("../utils/config")

class Admin {
  constructor(user) {
    this.actionPerformer = user
  }

  async _create_table(payload) {
    const { tableName, primaryKey, sortKey } = payload
    if (tableName === "" && primaryKey === "" && sortKey === "") {
      throw new Error("Failed to create table")
    }
    try {
      let msg = await createTable(payload)
      if (!msg) {
        return msg
      } else throw new Error("Failed to create table")
    } catch (err) {
      throw err
    }
  }
}

module.exports = Admin