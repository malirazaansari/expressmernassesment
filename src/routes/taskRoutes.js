const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  updateTaskFields,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/tasks", authMiddleware, getTasks);
router.post("/tasks", authMiddleware, createTask);
router.get("/tasks/:id", authMiddleware, getTaskById);
router.put("/tasks/:id", authMiddleware, updateTask);
router.patch("/tasks/:id", authMiddleware, updateTaskFields);
router.delete("/tasks/:id", authMiddleware, deleteTask);

module.exports = router;
