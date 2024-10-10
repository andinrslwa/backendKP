const db = require('../db');

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const query = `SELECT * FROM users WHERE username = ? AND user_password = ?`;

        const [rows] = await db.query(query, [username, password]);
        if(rows.length > 0){
            res.status(200).json({message: 'Success'});
        }

    } catch (error) {
        console.log(error);
    }
}