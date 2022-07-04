const {GetContactsService} = require("../services/get-contacts-service");

class GetContacts {
  async run() {
    return GetContactsService.run()
  }
}

module.exports = {
  GetContacts: new GetContacts()
}