class FormatData {
  run({documents, type = 'collection'}) {
    if (type === 'collection') {
      return documents.map(document => ({
        id: document.id,
        ...document.data()
      }))
    }
    return {
      id: documents.id,
      ...documents.data()
    }
  }
}

module.exports = {
  FormatData: new FormatData()
}