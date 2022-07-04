const {GetDocumentsFireBase} = require("../../../shared/firebase/get-documents-fire-base");
const {FormatData} = require("../../../shared/document/format-data");
const {NAME_COLLECTIONS} = require("../../../constants");
const {Contact} = require("../domain");

class GetContactsService {
  async run(){
   /* const contact = await GetDocumentsFireBase.run({nameCollection:NAME_COLLECTIONS.CONTACTS})
    FormatData.run({documents:contact})*/
    return Contact.find()
  }
}

module.exports = {
  GetContactsService: new GetContactsService()
}