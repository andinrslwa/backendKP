const db = require('../db');
const express = require('express');


exports.register = async (req,res)=>{
    try {
        const {username,password} = req.body;

        const query = `INSERT INTO users (username, user_password) VALUES (?, ?)`;

        await db.query(query, [username, password]);
        res.status(200).json({message: 'Success'});
    } catch (error) {
        console.log(error);
    }
}