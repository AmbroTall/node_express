const uuid = require('uuid')

const Members = [
    {
        id : 1,
        name : 'Ambrose',
        age : 23,
        email : "ndoneambrose@gmail.com",
    },
    {
        id : 2,
        name : 'Mbithi',
        age : 23,
        email : "ndoneambrose@gmail.com",
    },
    {
        id : 3,
        name : 'Ndone',
        age : 23,
        email : "ndoneambrose@gmail.com",
    },
    {
        id : uuid.v4(),
        name : 'Motivation',
        age : 23,
        email : "ndoneambrose@gmail.com",
    }
]

module.exports = Members;