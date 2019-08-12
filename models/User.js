var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

var userSchema = new Schema({

  firstName: { type: String, required: [true, 'Name must be provided'] },
  lastName: { type: String, required: [true, 'Name must be provided'] },

  email: {

    type: String,

    Required: 'Email address cannot be left blank.',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    index: { unique: true, dropDups: true }
  },

  password: { type: String, required: [true, 'Password cannot be left blank'] },
  salt: { type: String },
});

module.exports = mongoose.model('Users', userSchema);