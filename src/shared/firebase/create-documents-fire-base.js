const {db} = require("./firebase");

class CreateDocumentsFireBase {
  async run({nameCollection,body}){
    await db.collection(nameCollection).add(body)
  }
}

module.exports = {
  CreateDocumentsFireBase: new CreateDocumentsFireBase()
}