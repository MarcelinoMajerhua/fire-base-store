const {DeleteContactService} = require("../services/delete-contact-service");

class DeleteContact {
  async run(contactId) {
    return DeleteContactService.run(contactId)
  }
}

module.exports = {
  DeleteContact: new DeleteContact()
}