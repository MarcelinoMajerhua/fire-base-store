const {UpdateDocumentFireBase} = require("../../../shared/firebase/update-document-fire-base");
const {NAME_COLLECTIONS} = require("../../../constants");
const {Contact} = require("../domain");

class UpdateContactService {
  async run({email, firstname, lastname, phone,contactId}){
    const body = {email, firstname, lastname, phone}
    /*await UpdateDocumentFireBase.run({
      nameCollection: NAME_COLLECTIONS.CONTACTS,
      body,
      documentId: contactId
    })*/
    return Contact.updateOne({_id: contactId}, body);
  }
}

module.exports = {
  UpdateContactService: new UpdateContactService()
}