const router = require('express').Router();
const bcrypt = require('bcryptjs');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.post('/hash', (req, res) => {
  const  pw = req.body.password;

  //hash pw

  req.body.password = bcrypt.hashSync(pw, 12);

  //return to user in an object

  res.status(200).json({password: `${pw}`, hashed: `${req.body.password}`});
})

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

module.exports = router;
