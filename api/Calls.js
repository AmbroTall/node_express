const uuid = require('uuid');
const express = require('express');
const members = require('../Members')

const router = express.Router();

router.get('/', (req, res)=>{
    res.send(members)
})


router.get('/:id', (req, res) =>{
    const found = members.some(mem => mem.id === parseInt(req.params.id))

    if(found){
        res.json(members.filter(mem => mem.id === parseInt(req.params.id) ))
    }else{
        res.status(400).json({msg : `does not exist ${req.params.id}`})
    }
})

router.post('/', (req,res)=>{
    const newMember = {
        id : uuid.v4(),
        name: req.body.name, 
        age: req.body.age,
        email : req.body.email,
    }

    if(!newMember.name || !newMember.email || !newMember.age){
        return res.status(400).json({msg: 'fields a must'})
    }

    members.push(newMember)
    res.json(members)
})


router.put('/:id', (req, res)=>{
    const found = members.some(mem => mem.id === parseInt(req.params.id))

    if(found){
        members.forEach(mem =>{
            if(mem.id === parseInt(req.params.id)){
                mem.name = req.body.name ? req.body.name : mem.name,
                mem.email = req.body.email? req.body.email : mem.email, 
                mem.age = req.body.age? req.body.age : mem.age,


                res.json({msg : 'members updated', members})
            }
        })
    }else{
        res.status(400).json({msg : `does not exist ${req.params.id}`})
    }
})


router.delete('/:id', (req, res)=>{
    const found = members.some(mem => mem.id === parseInt(req.params.id))

    if(found){
        res.json(members.filter(mem => mem.id !== parseInt(req.params.id) ))
    }else{
        res.status(400).json({msg : `does not exist ${req.params.id}`})
    }
})

module.exports = router