const {UpdateDocumentFireBase} = require("../../../shared/firebase/update-document-fire-base");
const {NAME_COLLECTIONS} = require("../../../constants");

class UpdateContact {
  async run({email, firstname, lastname, phone,contactId}){
    const body = {email, firstname, lastname, phone}
    await UpdateDocumentFireBase.run({
      nameCollection: NAME_COLLECTIONS.CONTACTS,
      body,
      documentId: contactId
    })
    return body
  }
}

module.exports = {
  UpdateContact: new UpdateContact()
}