const express = require('express');
const router = express.Router();

// ড্যাশবোর্ড ডেটা
router.get('/dashboard', (req, res) => {
  res.json({
    success: true,
    dashboard: {
      totalUsers: 1250,
      totalDeposits: 500000,
      totalWithdrawals: 300000,
      todayRevenue: 50000,
      activeGames: 45,
      pendingDeposits: 12,
      pendingWithdrawals: 8
    }
  });
});

// ডিপোজিট অনুমোদন করুন
router.post('/approve-deposit', (req, res) => {
  const { depositId } = req.body;

  if (!depositId) {
    return res.status(400).json({ error: 'Deposit ID প্রয়োজন' });
  }

  // TODO: ডিপোজিট অনুমোদন করুন এবং ইউজার ব্যালেন্স আপডেট করুন
  res.json({
    success: true,
    message: 'ডিপোজিট অনুমোদিত হয়েছে'
  });
});

// ডিপোজিট বাতিল করুন
router.post('/reject-deposit', (req, res) => {
  const { depositId, reason } = req.body;

  if (!depositId) {
    return res.status(400).json({ error: 'Deposit ID প্রয়োজন' });
  }

  // TODO: ডিপোজিট বাতিল করুন
  res.json({
    success: true,
    message: 'ডিপোজিট বাতিল করা হয়েছে'
  });
});

// উইথড্র অনুমোদন করুন
router.post('/approve-withdraw', (req, res) => {
  const { withdrawId } = req.body;

  if (!withdrawId) {
    return res.status(400).json({ error: 'Withdraw ID প্রয়োজন' });
  }

  // TODO: উইথড্র অনুমোদন করুন
  res.json({
    success: true,
    message: 'উইথড্র অনুমোদিত হয়েছে'
  });
});

// সব পেন্ডিং রিকোয়েস্ট
router.get('/pending-requests', (req, res) => {
  res.json({
    success: true,
    pendingDeposits: [
      {
        id: 1,
        userId: 'user123',
        amount: 500,
        method: 'bkash',
        date: new Date(),
        reference: 'REF123456'
      }
    ],
    pendingWithdrawals: [
      {
        id: 2,
        userId: 'user456',
        amount: 200,
        method: 'nagad',
        accountNumber: '01xxxxxxxxx',
        date: new Date()
      }
    ]
  });
});

// ইউজার ব্যালেন্স সেট করুন
router.post('/set-user-balance', (req, res) => {
  const { userId, balance } = req.body;

  if (!userId || balance === undefined) {
    return res.status(400).json({ error: 'User ID এবং Balance প্রয়োজন' });
  }

  // TODO: ইউজার ব্যালেন্স আপডেট করুন
  res.json({
    success: true,
    message: `${userId} এর ব্যালেন্স ${balance} এ সেট করা হয়েছে`
  });
});

// ইউজার ব্যান করুন
router.post('/ban-user', (req, res) => {
  const { userId, reason } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'User ID প্রয়োজন' });
  }

  // TODO: ইউজার ব্যান করুন
  res.json({
    success: true,
    message: `${userId} ব্যান করা হয়েছে`
  });
});

// গেম সেটিংস আপডেট করুন
router.post('/update-game-settings', (req, res) => {
  const { gameId, minBet, maxBet, enabled } = req.body;

  if (!gameId) {
    return res.status(400).json({ error: 'Game ID প্রয়োজন' });
  }

  // TODO: গেম সেটিংস আপডেট করুন
  res.json({
    success: true,
    message: 'গেম সেটিংস আপডেট হয়েছে'
  });
});

module.exports = router;
