const {GetDocumentsFireBase} = require("../../../shared/firebase/get-documents-fire-base");
const {FormatData} = require("../../../shared/document/format-data");
const {NAME_COLLECTIONS} = require("../../../constants");

class GetContacts {
  async run(){
    const contact = await GetDocumentsFireBase.run({nameCollection:NAME_COLLECTIONS.CONTACTS})
    return FormatData.run({documents:contact})
  }
}

module.exports = {
  GetContacts: new GetContacts()
}