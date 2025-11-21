var express = require('express')
const mongoose = require('mongoose')
const url ='mongodb+srv://khushboova:123mongodb@cluster0.v3hgc9f.mongodb.net/Testing1?retryWrites=true&w=majority'||process.env.MONGO_URL
const connectionParams = {}
  mongoose
    .connect(url, connectionParams)
    .then((resp) => {
      console.log('Connected to database ')
    })
    .catch(err => {
      console.error(`Error connecting to the database. \n${err}`)
    })