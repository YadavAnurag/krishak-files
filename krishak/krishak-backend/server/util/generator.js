const 
  User = require('../api/user/userModel')
  //Product = require('../api/user/productModel')


const prevData = { 
  names: ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Steve", "Thomas", "Tim","Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler" ]
}

const data = { 
  name: ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward"],
  //name: prevData.names,
  email: [],
  contactNumber: [],
  password: [],
  state: [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Orissa',
    'Pondicherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttaranchal',
    'Uttar Pradesh',
    'West Bengal' 
  ],
  city: ['Agartala', 'Agra', 'Agumbe', 'Ahmedabad', 'Aizawl', 'Ajmer', 'Alappuzha Beach', 'Allahabad', 'Alleppey', 'Almora', 'Amarnath', 'Amritsar', 'Anantagir', 'Andaman and Nicobar Islands', 'Araku valley', 'Aurangabad', 'Ayodhya', 'Badrinath', 'Bangalore', 'Baroda', 'Bastar', 'Bhagalpur', 'Bhilai', 'Bhimtal', 'Bhopal', 'Bhubaneswar', 'Bhuj', 'Bidar', 'Bilaspur', 'Bodh Gaya', 'Calicut', 'Chail', 'Chamba', 'Chandigarh', 'Chennai', 'Chennai Beaches', 'Cherai', 'Cherrapunji', 'Chidambaram', 'Chikhaldara Hills', 'Chopta', 'Coimbatore', 'Coonoor', 'Coorg', 'Corbett National Park', 'Cotigao Wild Life Sanctuary', 'Cuttack', 'Dadra and Nagar Haveli', 'Dalhousie', 'Daman and Diu', 'Darjeeling', 'Dehradun', 'Delhi', 'Devikulam', 'Dhanaulti', 'Dharamashala', 'Dindigul', 'Dudhwa National Park', 'Dwaraka', 'Faridabad', 'Gandhinagar', 'Gangotri', 'Gangtok', 'Gir Wildlife Sanctuary', 'Goa', 'Great Himalayan National Park', 'Gulmarg', 'Gurgaon', 'Guruvayoor', 'Guwahati', 'Gwalior', 'Hampi', 'Haridwar', 'Hogenakkal', 'Horsley Hills', 'Hyderabad', 'Idukki', 'Imphal', 'Indore', 'Itangar', 'Jabalpur', 'Jaipur', 'Jaisalmer', 'Jalandhar', 'Jammu', 'Jamshedpur', 'Jodhpur', 'Kanchipuram', 'Kanha National Park', 'Kanpur', 'Kanyakumari', 'Kargil', 'Karwar', 'Kausani', 'Kedarnath', 'Keoladeoghana National Park', 'Khajuraho', 'Kochi', 'Kodaikanal', 'Kolkata', 'Kollam', 'Konark', 'Kotagiri', 'Kottakkal and Ayurveda', 'Kovalam', 'Kovalam and Ayurveda', 'Kudremukh', 'Kullu', 'Kumaon', 'Kumarakom', 'Kumarakom and Ayurveda', 'Kumarakom Bird Sanctuary', 'Kurukshetra', 'Lakshadweep', 'Lucknow', 'Ludhiana', 'Madurai', 'Mahabalipuram', 'Malpe Beach', 'Manas National Park', 'Mangalore', 'Maravanthe Beach', 'Margoa', 'Mount Abu', 'Mumbai', 'Munnar', 'Mussoorie', 'Mysore', 'Nahsik', 'Nalanda', 'Nanda Devi National Park', 'Nandi Hills', 'Netravali Wild Life Sanctuary', 'Ooty', 'Orchha', 'Pahalgam', 'Palakkad', 'Panchgani', 'Patna', 'Patnitop', 'Pattadakkal', 'Periyar Wildlife Sanctuary', 'Pithoragarh', 'Pondicherry', 'Pune', 'Puri', 'Pushkar', 'Raipur', 'Rajaji National Park', 'Rajgir', 'Rameshwaram', 'Ranchi', 'Ranganthittu Bird Sanctuary', 'Ranikhet', 'Ranthambore', 'Rishikesh', 'Rourkela', 'Sanchi', 'Saputara', 'Sariska Wildlife Sanctuary', 'Shillong', 'Shimla', 'Sohna_Hills', 'Srinagar', 'Sunderbans', 'Surat', 'Tezpur', 'Thanjavur', 'Thiruvananthapuram', 'Thrissur', 'Tirunelveli', 'Tirupati', 'Trichy', 'Udaipur', 'Ujjain', 'Vaishali', 'Valley of Flowers', 'Varanasi', 'Varkala and Ayurveda', 'Vijayawada', 'Vishakhapatnam', 'Vrindhavan', 'Warangal', 'Wayanad', 'Wayanad Wildlife Sanctuary', 'Yercaud', 'Zanskar'],
  zipCode: [],
  addressText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quia tempora soluta nisi, provident.',
  streetAddress: 'This is my streetAddress',
}


users = []

let count = prev = 0
data.name.map((name) =>{
  const user = {}

  user.name = name.trim() 
  user.email = name.toLocaleLowerCase()+'@gmail.com'
  num = ''
  while(num.length!=10){
    num += Math.floor(10*Math.random())
  }
  user.contactNumber = num
  user.password =  name.trim()

  userAddress = {}
  let index = Math.floor(Math.random()*(data.state.length))
  userAddress.state = data.state[index]

  index = Math.floor(Math.random()*(data.city.length))
  userAddress.city = data.city[index]

  let zip = ''
  while(zip.length!=6){
    zip += Math.floor(10*Math.random())
  }
  userAddress.zipCode = zip
  userAddress.addressText = data.addressText
  userAddress.streetAddress = data.streetAddress
  user.address = userAddress
  users.push(user)
})
console.log(users)
const createDoc = (model, doc)=>{
  return new Promise((resolve, reject)=>{
    new model(doc).save((err, saved)=>{
      return err? reject(err): resolve(saved)
    })
  })
}
const cleanDB = ()=>{
  console.log('Cleaning the DB')
  let cleanPromises = [User]
    .map((model)=>{
      return model.deleteMany({}).exec()
    })
  return Promise.all(cleanPromises)
}
const createUsers = (users)=>{

  let promises = users.map((user)=>{
    return createDoc(User, user)
  })
  return Promise.all(promises)
    .then(
      console.log(`${users.length} users seeded`)
    )
}


cleanDB()
  .then(createUsers(users))
  