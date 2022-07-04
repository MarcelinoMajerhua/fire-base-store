const {db} = require("./firebase");


class DeleteDocumentsFireBase {
  async run({nameCollection, documentId}){

    await db.collection(nameCollection).doc(documentId).delete()
  }
}

module.exports = {
  DeleteDocumentsFireBase: new DeleteDocumentsFireBase()
}