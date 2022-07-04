const {RouterExpress} = require("../../shared/router/router-express");
const {GetContacts} = require("./application/get-contacts");
const {CreateContacts} = require("./application/create-contacts");
const {GetOneContact} = require("./application/get-one-contact");
const {DeleteContact} = require("./application/delete-contact");
const {UpdateContact} = require("./application/update-contact");

class ContactsRoutes extends RouterExpress {
  run() {
    this.router.get("/", async (req, res) => {
      let result = await GetContacts.run()
      res.send(result)
    })

    this.router.post('/', async (req, res) => {
      let {email, firstname, lastname, phone} = req.body
      let result = await CreateContacts.run({email, firstname, lastname, phone})
      res.send(result)
    })

    this.router.put('/:id', async (req, res) => {
      let {email, firstname, lastname, phone} = req.body
      const {id: contactId} = req.params
      const result = await UpdateContact.run({email, firstname, lastname, phone,contactId})
      return res.send(result)
    })

    this.router.get('/:id', async (req, res) => {
      const {id: contactId} = req.params
      const result = await GetOneContact.run(contactId)
      res.send(result)
    })

    this.router.delete("/:id", async (req,res)=>{
      const {id:contactId}=req.params
      const result = await DeleteContact.run(contactId)
      res.send(result)
    })

    return this.router
  }
}

module.exports = {
  ContactsRoutes: new ContactsRoutes()
}