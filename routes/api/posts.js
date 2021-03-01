const express = require("express");
const router = express.Router();
const { Post, sequelize } = require("../../startup/db");

router.get("/", async (req, res) => {
  const post = await Post.findAll({
    order: [
      ["id", "DESC"],
      ["image", "DESC"],
      ["category", "DESC"],
      ["date", "DESC"],
    ],
    attributes: ["id", "title", "image", "category", "date"],
  });
  res.json(post);
});

router.get("/:postId", async (req, res) => {
  const post = await Post.findAll(req.body, {
    where: { id: req.params.postId },
  });
  post === req.params.postId
    ? res.json(post)
    : res.status(400).send("Bad request / No result.");
});

router.post("/", async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

router.patch("/:postId", async (req, res) => {
  const post = await Post.update(req.body, {
    where: { id: req.params.postId },
  });
  post
    ? res.json({ success: "update" })
    : res.status(400).send("Bad request / No result.");
});

router.delete("/:postId", async (req, res) => {
  const postId = await Post.destroy({
    where: { id: req.params.postId },
  });
  postId !== 0
    ? res.json({ success: "post deleted" })
    : res.status(400).send("Bad request / No result.");
});

module.exports = router;
