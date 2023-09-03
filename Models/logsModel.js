import mongoose from 'mongoose';

const logsSchema = new mongoose.Schema({
  spaName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  urlSlug: {
    type: String,
    required: false,
  },
  service: {
    type: String,
    required: false,
  },
});

const logs = mongoose.model('Spa', logsSchema);

export default logs;

