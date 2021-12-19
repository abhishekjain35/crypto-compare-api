import express from "express";
import HistoryModal from "../models/history.js";
const router = express.Router();

router.post("/history", (req, res) => {
  const data = new HistoryModal({ currencies: req.body.data });
  data.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to save currencies in DB",
      });
    }
    res.json({ data });
  });
});

router.get("/history", (_, res) => {
  HistoryModal.find()
    .sort({ createdAt: "desc" })
    .exec((err, allHistory) => {
      if (err) {
        return res.status(400).json({
          error: "No history found",
        });
      }
      res.json(allHistory);
    });
});

export default router;
