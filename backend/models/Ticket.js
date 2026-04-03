const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  text: String,
  intent: String,
  urgency: String,
  emotion: String,
  action: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Ticket", TicketSchema);