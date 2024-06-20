//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    // Setting up error handling for the app
    app.on("error", (error) => {
            console.log("Server Error: ", error);
            process.exit(1);
        })
    
    // Starting the server
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at PORT: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MongoDB Connection Failed !!!", err)
})





/*

Approach 1:

import express from 'express'
const app = express()

//iffys: to immediately execute
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on PORT: ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/