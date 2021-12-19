import mongoose from "mongoose";

const historySchema = new mongoose.Schema(
  {
    currencies: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const HistoryModal = mongoose.model("History", historySchema);

export default HistoryModal;
