const {GetOneContactService} = require("../services/get-one-contact-service");

class GetOneContact {
  async run(contactId) {
    return GetOneContactService.run(contactId)
  }
}

module.exports = {
  GetOneContact: new GetOneContact()
}