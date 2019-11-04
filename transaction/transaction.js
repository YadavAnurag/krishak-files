const uri = `mongodb://localhost:27017/test`

const MongoClient = require("mongodb").MongoClient
//const client = new MongoClient(uri)
let client = null
MongoClient.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db)=>{
    if(err){
        console.log(err)
    }
    client = db

    const session = client.startSession({defaultTransactionOptions: {
        readConcern: {level: 'local'},
        writeConcern: {w: 'majority'},
        readPreference: 'primary'
    }})

    const coll1 = client.db("test").collection("myMovies")
    const coll2 = client.db("test").collection("yourMovies")
    coll2.insertOne({"title": "Story 4", "year": 2000, "type": "movie"}, (err, res)=>{
        if(err){
            console.log(err)
        }
        console.log('First', res)
    })

    // try{
    //     async ()=>{
    //         await session.withTransaction(async function(){
    //             const coll1 = client.db("test").collection("myMovies")
    //             const coll2 = client.db("test").collection("yourMovies")
        
    //             //await coll1.insertOne({"title": "Inglorious Bastards", "year": 2000, "type": "movie"}, {session})
    //             //await coll2.insertOne({"title": "Criminal UK", "year": 2019, "type": "series"}, {session})
    //             coll1.insertOne({"title": "Inglorious Bastards", "year": 2000, "type": "movie"}, {session}, (err, res)=>{
    //                 if(err){
    //                     console.log(err)
    //                 }
    //                 console.log('First', res)
    //             })
    //             setTimeout(()=>{
    //                 coll2.insertOne({"title": "Criminal UK", "year": 2019, "type": "series"}, {session}, (err, res)=>{
    //                     if(err){
    //                         console.log(err)
    //                     }
    //                     console.log('second', res)
    //                 })
    //             }, 5000)

    //         })
    //     }
    // }catch(err){
    //     console.log(err)
    // }
})


// // console.log('connected',client)

// // const session = client.startSession({defaultTransactionOptions: {
// //     readConcern: {level: 'local'},
// //     writeConcern: {w: 'majority'},
// //     readPreference: 'primary'
// // }})

// // try{
// //     async ()=>{
// //         await session.withTransaction(async function(){
// //             const coll1 = client.db("test").collection("myMovies")
// //             const coll2 = client.db("test").collection("yourMovies")
    
// //             await coll1.insertOne({"title": "Inglorious Bastards", "year": 2000, "type": "movie"}, {session})
// //             await coll2.insertOne({"title": "Criminal UK", "year": 2019, "type": "series"}, {session})
// //         })
// //     }
// // }catch(err){
// //     console.log(err)
// // }

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/test";

// MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });