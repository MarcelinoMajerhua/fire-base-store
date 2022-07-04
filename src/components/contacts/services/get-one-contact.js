const {GetOneDocumentFireBase} = require("../../../shared/firebase/get-one-document-fire-base");
const {NAME_COLLECTIONS} = require("../../../constants");
const {FormatData} = require("../../../shared/document/format-data");

class GetOneContact {
  async run(contactId) {
    const contact = await GetOneDocumentFireBase.run({nameCollection:NAME_COLLECTIONS.CONTACTS, documentId:contactId})
    return FormatData.run({documents:contact, type:"document"})
  }
}

module.exports = {
  GetOneContact: new GetOneContact()
}