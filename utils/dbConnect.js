const mongoose = require("mongoose")

const dbConnection = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://Habeeb:Ademola1234@habeeb.pal57xa.mongodb.net/techNotesDB?retryWrites=true&w=majority")
        if(connect){
            console.log(`connected`)
        } else{
            console.log("error occured")
        }

        
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = dbConnection