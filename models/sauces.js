const mongoose = require('mongoose');
const auth = require('../middleware/auth');
mongoose.set('strictQuery', true)

const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: [{type: String}],
  usersDisliked: [{type: String}],
});

module.exports = mongoose.model('Sauce', sauceSchema);
