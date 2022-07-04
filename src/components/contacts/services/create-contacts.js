const {CreateDocumentsFireBase} = require("../../../shared/firebase/create-documents-fire-base");
const {NAME_COLLECTIONS} = require("../../../constants");

class CreateContacts {
  async run({email, firstname, lastname, phone}) {
    const body = {
      email, firstname, lastname, phone
    }

    await CreateDocumentsFireBase.run({
      nameCollection: NAME_COLLECTIONS.CONTACTS,
      body
    })

    return body
  }
}

module.exports = {
  CreateContacts: new CreateContacts()
}