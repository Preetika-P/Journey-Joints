// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect(MONGO_URL);
// }

// const initDB = async () => {
//   await Listing.deleteMany({});
//   await Listing.insertMany(initData.data);
//   console.log("data was initialized");
// };

// initDB();


const mongoose = require("mongoose");
const initdata = require("./data.js");

const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
.then(() =>{
    console.log("Connected To DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () =>{
   await Listing.deleteMany({});
   initdata.data = initdata.data.map((obj) =>({
    ...obj, owner:"674c2ddff8b13f0651de6295",
   })) ;
   await Listing.insertMany(initdata.data);
   console.log("Data was Initialised");
};

initDB();