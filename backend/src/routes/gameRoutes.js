const express = require('express');
const router = express.Router();

// সব গেম পান
router.get('/all', (req, res) => {
  const games = [
    { id: 1, name: 'Aviator', type: 'plane', minBet: 10, maxBet: 100000 },
    { id: 2, name: 'Color Prediction', type: 'color', minBet: 10, maxBet: 50000 },
    { id: 3, name: 'Dice Game', type: 'dice', minBet: 10, maxBet: 50000 },
    { id: 4, name: 'Card Game', type: 'card', minBet: 10, maxBet: 100000 }
  ];
  
  res.json({ success: true, games });
});

// একটি গেম শুরু করুন
router.post('/start', (req, res) => {
  const { gameId, betAmount } = req.body;

  if (!gameId || !betAmount) {
    return res.status(400).json({ error: 'Game ID এবং বেট এমাউন্ট প্রয়োজন' });
  }

  // TODO: বেট সেভ করুন এবং গেম ইঞ্জিন শুরু করুন
  res.json({ 
    success: true, 
    message: 'গেম শুরু হয়েছে',
    gameSession: {
      id: Date.now(),
      gameId,
      betAmount,
      status: 'running'
    }
  });
});

// গেম ফলাফল পান
router.get('/result/:sessionId', (req, res) => {
  const { sessionId } = req.params;

  // TODO: ডাটাবেস থেকে ফলাফল পান
  res.json({ 
    success: true, 
    result: {
      sessionId,
      status: 'completed',
      result: 2.5, // Aviator এর জন্য multiplier
      winAmount: 100 * 2.5 // বেট * মাল্টিপ্লায়ার
    }
  });
});

module.exports = router;
