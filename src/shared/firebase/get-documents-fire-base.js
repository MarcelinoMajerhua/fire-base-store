const {db} = require("./firebase");

class GetDocumentsFireBase {
  async run({nameCollection}) {
    return (await db.collection(nameCollection).get()).docs
  }
}

module.exports = {
  GetDocumentsFireBase: new GetDocumentsFireBase()
}