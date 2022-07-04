const {GetOneDocumentFireBase} = require("../../../shared/firebase/get-one-document-fire-base");
const {NAME_COLLECTIONS} = require("../../../constants");
const {FormatData} = require("../../../shared/document/format-data");
const {Contact} = require("../domain");

class GetOneContactService {
  async run(contactId) {
    /*const contact = await GetOneDocumentFireBase.run({nameCollection:NAME_COLLECTIONS.CONTACTS, documentId:contactId})
    FormatData.run({documents:contact, type:"document"})*/
    return Contact.findById(contactId)
  }
}

module.exports = {
  GetOneContactService: new GetOneContactService()
}