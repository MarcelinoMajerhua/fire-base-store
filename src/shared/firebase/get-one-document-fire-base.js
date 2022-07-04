const {db} = require("./firebase");


class GetOneDocumentFireBase {
  async run({nameCollection, documentId}){
    return await db.collection(nameCollection).doc(documentId).get()
  }
}

module.exports = {
  GetOneDocumentFireBase: new GetOneDocumentFireBase()
}