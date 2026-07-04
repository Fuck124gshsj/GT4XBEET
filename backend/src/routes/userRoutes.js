const express = require('express');
const router = express.Router();

// ইউজার প্রোফাইল পান
router.get('/profile/:userId', (req, res) => {
  const { userId } = req.params;

  res.json({
    success: true,
    profile: {
      id: userId,
      username: 'Player_123',
      phone: '01xxxxxxxxx',
      email: 'player@example.com',
      balance: 5000,
      totalDeposit: 10000,
      totalWithdraw: 5000,
      totalBets: 50,
      joinDate: new Date()
    }
  });
});

// ইউজার ব্যালেন্স পান
router.get('/balance/:userId', (req, res) => {
  const { userId } = req.params;

  res.json({
    success: true,
    userId,
    balance: 5000,
    bonus: 500
  });
});

// প্রোফাইল আপডেট করুন
router.put('/profile/:userId', (req, res) => {
  const { userId } = req.params;
  const { username, email } = req.body;

  res.json({
    success: true,
    message: 'প্রোফাইল আপডেট হয়েছে'
  });
});

// গেম হিস্ট্রি পান
router.get('/game-history/:userId', (req, res) => {
  const { userId } = req.params;

  res.json({
    success: true,
    history: [
      {
        id: 1,
        gameId: 1,
        gameName: 'Aviator',
        betAmount: 100,
        winAmount: 250,
        multiplier: 2.5,
        status: 'won',
        date: new Date()
      },
      {
        id: 2,
        gameId: 2,
        gameName: 'Color Prediction',
        betAmount: 50,
        winAmount: 0,
        status: 'lost',
        date: new Date()
      }
    ]
  });
});

module.exports = router;
