const {db} = require("./firebase");

class UpdateDocumentFireBase {
  async run({nameCollection, body, documentId}){
    await db.collection(nameCollection).doc(documentId).update(body)
  }
}

module.exports = {
  UpdateDocumentFireBase: new UpdateDocumentFireBase()
}