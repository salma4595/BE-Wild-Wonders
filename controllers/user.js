const Users = require('../models/User');

// //require dayjs (after installing)
// const dayjs = require('dayjs')
// var relativeTime = require('dayjs/plugin/relativeTime')
// dayjs.extend(relativeTime)

exports.user_fetch_post = (req,res) => {
    
    Users.findById(req.body.userID)
    .then((userDetails) => {
        res.json({"userDetails":userDetails});
        //res.render("user/index", {users, dayjs, "title":"Show Users List"});
    })
    .catch((error) => {
        console.log("There was an error: " + error);
        //res.send("Cannot Show All Users. Please try again later.");
    })
}