const expressJwt = require('express-jwt');
const config = require('../config/components')

module.exports = jwt;

function jwt() {
    const secret = config.jwtconfig.SECRET;
    console.log(secret);
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/login',
            '/login/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    console.log("Inside the Revoke Function");
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};