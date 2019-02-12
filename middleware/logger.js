module.exports= {
myLogger: function (req, res, next) {
    console.log('LOGGED')
    next()
  },

  requestTime: function (req, res, next) {
    console.log(req.requestTime)
    req.requestTime = Date.now()
    next()
  }
 
}
  