const router = require("express").Router();
const crypt = require("bcryptjs");

const Id = require("../bdd/models/idModel");
const User = require("../bdd/models/usersModel");

router.get("/", async (req, res) => {
  const users = await User.find({}, { _id: 0 });
  res.send(users);
});

router.get("/:userId(\\d+)", async (req, res) => {
  const user = await User.findByUserId(req.params.userId);

  if (!user) {
    res.status(404).send("Error");
    return;
  }

  res.send(user);
});

router.get("/:username(\\w+)", async (req, res) => {
  const user = await User.findByUsername(req.params.username);

  if (!user) {
    res.status(404).send("Error");
    return;
  }

  res.send(user);
});

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;

  const lastId = (await Id.getLastId("users")).value;

  const salt = await crypt.genSalt(10);
  const cryptedPass = await crypt.hash(req.body.password, salt);

  const user = await new User({
    id: lastId + 1,
    username,
    email,
    password: cryptedPass,
  });

  try {
    console.log(user);
    await user.save();
  } catch (err) {
    res.status(422).send("error");
    return;
  }

  await Id.updateOne({ name: "users" }, { value: user.id });

  res.send(user);
});

router.put("/:userId(\\d+)", async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.findByUserId(req.params.userId);

  if (!user) {
    res.status(404).send({ error: "Not found" });
    return;
  }

  user.username = username || user.username;
  user.email = email || user.email;
  user.password = password || user.password;

  try {
    await user.save();
  } catch (err) {
    res.status(422).send("Error");
    return;
  }

  res.send(user);
});
router.put("/:username(\\w+)", async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.findByUsername(req.params.username);

  if (!user) {
    res.status(404).send({ error: "Not found" });
    return;
  }

  user.username = username || user.username;
  user.email = email || user.email;
  user.password = password || user.password;

  try {
    await user.save();
  } catch (err) {
    res.status(422).send("Error");
    return;
  }

  res.send(user);
});

router.delete("/:userId(\\d+)", async (req, res) => {
  const user = await User.findByUserId(req.params.userId);

  if (!user) {
    res.status(404).send("Error");
    return;
  }

  await User.deleteOne(user);

  res.status(204).send();
});

router.delete("/:username(\\d+)", async (req, res) => {
  const user = await User.findByUserId(req.params.username);

  if (!user) {
    res.status(404).send("Error");
    return;
  }

  await User.deleteOne(user);

  res.status(204).send();
});

module.exports = router;
