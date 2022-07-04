const {UpdateContactService} = require("../services/update-contact-service");

class UpdateContact {
  async run({email, firstname, lastname, phone, contactId}) {
    return UpdateContactService.run({email, firstname, lastname, phone, contactId})
  }
}

module.exports = {
  UpdateContact: new UpdateContact()
}