const {CreateDocumentsFireBase} = require("../../../shared/firebase/create-documents-fire-base");
const {NAME_COLLECTIONS} = require("../../../constants");
const {Contact} = require("../domain");

class CreateContactsService {
  async run({email, firstname, lastname, phone}) {
    const body = {
      email, firstname, lastname, phone
    }

   /* await CreateDocumentsFireBase.run({
      nameCollection: NAME_COLLECTIONS.CONTACTS,
      body
    })*/
    await Contact.insertMany(body)
    return body
  }
}

module.exports = {
  CreateContactsService: new CreateContactsService()
}