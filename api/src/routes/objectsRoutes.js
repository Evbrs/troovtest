const router = require("express").Router();

const Id = require("../bdd/models/idModel");
const Object = require("../bdd/models/objectsModel");

router.get("/", async (req, res) => {
  const objects = await Object.find({}, { _id: 0 });
  res.send(objects);
});

router.get("/:objectId(\\d+)", async (req, res) => {
  const object = await Object.findByObjectId(req.params.ObjectId);

  if (!object) {
    res.status(404).send("Error");
    return;
  }

  res.send(object);
});

router.get("/:objectDescription(\\w+)", async (req, res) => {
  const object = await Object.findByObjectname(req.params.objectDescription);

  if (!object) {
    res.status(404).send("Error");
    return;
  }

  res.send(object);
});

router.post("/", async (req, res) => {
  const { objectDescription, place } = req.body;

  const lastId = (await Id.getLastId("objects")).value;
  console.log(req.body);
  const object = new Object({
    id: lastId + 1,
    objectDescription,
    place,
  });

  try {
    await object.save();
  } catch (err) {
    res.status(422).send("Error");
    return;
  }

  Id.updateOne(lastId, { value: object.id });

  res.send(object);
});

router.put("/:objectId(\\d+)", async (req, res) => {
  const { objectDescription, place } = req.body;

  const object = await Object.findByObjectId(req.params.ObjectId);

  if (!object) {
    res.status(404).send({ error: "Not found" });
    return;
  }

  object.objectDescription = objectDescription || object.objectDescription;
  object.place = place || object.place;

  try {
    await object.save();
  } catch (err) {
    res.status(422).send("Error");
    return;
  }

  res.send(object);
});
router.put("/:objectDescription(\\d+)", async (req, res) => {
  const { objectDescription, place } = req.body;

  const object = await Object.findByObjectname(req.params.objectDescription);

  if (!object) {
    res.status(404).send({ error: "Not found" });
    return;
  }

  object.objectDescription = objectDescription || object.objectDescription;
  object.place = place || object.place;

  try {
    await object.save();
  } catch (err) {
    res.status(422).send("Error");
    return;
  }

  res.send(object);
});

router.delete("/:ObjectId(\\d+)", async (req, res) => {
  const object = await Object.findByObjectId(req.params.ObjectId);

  if (!object) {
    res.status(404).send("Error");
    return;
  }

  await object.deleteOne(object);

  res.status(204).send();
});

router.delete("/:objectDescription(\\d+)", async (req, res) => {
  const object = await Object.findByObjectId(req.params.objectDescription);

  if (!object) {
    res.status(404).send("Error");
    return;
  }

  await Object.deleteOne(object);

  res.status(204).send();
});

module.exports = router;
