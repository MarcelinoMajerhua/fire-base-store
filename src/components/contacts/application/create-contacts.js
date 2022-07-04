const {CreateContactsService} = require("../services/create-contacts-service");

class CreateContacts {
  async run({email, firstname, lastname, phone}) {
    return CreateContactsService.run({email, firstname, lastname, phone})
  }
}

module.exports = {
  CreateContacts: new CreateContacts()
}