const {DeleteDocumentsFireBase} = require("../../../shared/firebase/delete-documents-fire-base");
const {NAME_COLLECTIONS} = require("../../../constants");
const {Contact} = require("../domain");

class DeleteContactService {
  async run(contactId){
    //await DeleteDocumentsFireBase.run({nameCollection:NAME_COLLECTIONS.CONTACTS,documentId:contactId})
    await Contact.deleteOne({_id: contactId})
    return {message: "El contacto fue eliminado."}
  }
}

module.exports = {
  DeleteContactService: new DeleteContactService()
}