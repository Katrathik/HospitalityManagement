const express = require('express');
const router = express.Router();

router.route('/api').get((req, res)=>{res.send("From Server")})
router.route('/api/loginSign').post( async(req, res) => {
  const { email, pwd, fName, lName, phno } = req.body;
  
  res.json({ message: 'Form data received and processed successfully' });
});

module.exports = router; 