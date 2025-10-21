const jwt = require('jsonwebtoken');
const secret = 'dfjdf23435lksE##jkdf';


function cretateTokenForUser  (user)  {
    const playload = {
        _id: user._id,
        email: user.email,
        profileImageUrl: user.profileImage,
        role: user.role
    }

    const tokne = jwt.sign(playload,secret);
    return tokne;
}

function validatedToken (token) {
    const playload = jwt.verify(token,secret);
    return playload;
}

module.exports = {
  cretateTokenForUser,
  validatedToken
}