exports.params = (req, res, next, id)=>{
  // User.findById(id)
  //   .then((user)=>{
  //     if(!user){
  //       next(new Error(`No such user with id: ${id}`))
  //     }else{
  //       req.user = user
  //       next()
  //     }
  //   }, (err)=>{
  //     next(err)
  //   })
  let user = {'name': 'something'}
  req.user = user
  next()
}

exports.postSignUp = (req, res, next)=>{
  let newUser = req.body
  res.json({
    'msg': 'userAdded',
    'newUser': newUser
  })
}
exports.postLogin = (req, res, next)=>{
  let newUser = req.body
  res.json({
    'msg': 'user logged in successfully',
  })
}

exports.getUserList = (req, res, next)=>{
  res.json({'msg': 'get users list'})
}
exports.postUserList = (req, res, next)=>{
  res.json({'msg': 'post users list'})
}
exports.deleteUserList = (req, res, next)=>{
  res.json({'msg': 'delete user list'})
}


exports.getOne = (req, res, next)=>{
  let user = req.body
  res.json({'msg': 'get single user'})
}

exports.put = ((req, res, next)=>{
  let user = req.user
  let update = req.body

  newUser = {...user, ...update}

  res.json({'msg': 'single user updated with new object'})

})

exports.patch = ((req, res, next)=>{
  let user = req.user
  let update = req.body

  newUser = {...user, ...update}

  res.json({'msg': 'single user patched'})

})

exports.deleteOne = (req, res, next)=>{
  res.json({'msg': 'user has been deleted successfully'})
}


