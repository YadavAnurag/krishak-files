const User = require('../api/user/userModel')

console.log('Seeding the database')

const users = [
  {email: 'anu@gmail.com', password: 'anu', name: 'anu', contactNumber: '8354820950', address: {city: 'Ambedkar Nagar', state: 'Uttar Pradesh', zipCode: '224190'}},
  {email: 'sahu@gmail.com', password: 'sahu', name: 'sahu', contactNumber: '9455546969', address: {city: 'Jaunpur', state: 'Uttar Pradesh', zipCode: '224188'}},
  {email: 'shivam@gmail.com', password: 'shivam', name: 'shivam verma', contactNumber: '8127958674', address: {city: 'Gorakhpur', state: 'Uttar Pradesh', zipCode: '273010'}}
]

createDocument = (model, doc)=>{
  return new Promise((resolve, reject)=>{
    new model(doc).save((err, saved)=>{
      return err? reject: resolved(saved)
    })
  })
}

const cleanDB = ()=>{
  console.log('Cleaning DB')
  const cleanPromises = [User]
    .map((model)=>{
      model.remove.exec()
    })
  return Promise.all(cleanPromises)
}

const createUsers = (userData)=>{
  let promises = users.map((user)=>{
    return createDocument(User, user)
  })

  return Promise.all(promises)
    .then((users)=>{
      let users = {...users, ...data || {}}
      return users
    })
}


cleanDB()
  .then(createUsers)