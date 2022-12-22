migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r597i955jkr0kx0")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r597i955jkr0kx0")

  collection.name = "cards"

  return dao.saveCollection(collection)
})
