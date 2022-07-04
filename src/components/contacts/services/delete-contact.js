const {DeleteDocumentsFireBase} = require("../../../shared/firebase/delete-documents-fire-base");
const {NAME_COLLECTIONS} = require("../../../constants");

class DeleteContact {
  async run(contactId){
    await DeleteDocumentsFireBase.run({nameCollection:NAME_COLLECTIONS.CONTACTS,documentId:contactId})
    return {message: "El contacto fue eliminado."}
  }
}

module.exports = {
  DeleteContact: new DeleteContact()
}