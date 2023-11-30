const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    avatarUrl: {
      type: String,
      default: 'images/default-avatar.png'
    }
  },
  { timestamps: true }
  );

  const User = mongoose.model('User', userSchema);

  module.exports = User;