import express from "express";
import {
  Addservice,
  addCategory,
  addMeeting,
  addNews,
  deleteCategory,
  deleteNews,
  viewCategory,
  viewMeeting,
  viewNews,
  viewService,
} from "../Controllers/AdminController.js";
const router = express();

router.post("/addservice", Addservice);
router.get("/viewservice", viewService);
router.post("/meeting", addMeeting);
router.get("/meeting", viewMeeting);
router.post("/category", addCategory);
router.delete("/deleteCategory/:id", deleteCategory);
router.get("/category", viewCategory);
router.post("/news", addNews);
router.get("/news", viewNews);
router.delete("/news/:id", deleteNews);

export default router;
