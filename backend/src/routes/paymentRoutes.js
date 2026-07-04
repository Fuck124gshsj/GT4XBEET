const express = require('express');
const router = express.Router();

// ডিপোজিট রিকোয়েস্ট তৈরি করুন
router.post('/deposit', (req, res) => {
  const { userId, amount, method } = req.body;

  if (!userId || !amount || !method) {
    return res.status(400).json({ error: 'সব তথ্য প্রয়োজন' });
  }

  if (method !== 'bkash' && method !== 'nagad') {
    return res.status(400).json({ error: 'শুধু Bkash বা Nagad সাপোর্ট করা হয়' });
  }

  // TODO: ডেপোজিট রিকোয়েস্ট সেভ করুন
  res.json({
    success: true,
    message: `${amount} টাকা ${method.toUpperCase()} দিয়ে ডিপোজিট করুন`,
    deposit: {
      id: Date.now(),
      userId,
      amount,
      method,
      adminNumber: method === 'bkash' ? process.env.ADMIN_BKASH_NUMBER : process.env.ADMIN_NAGAD_NUMBER,
      status: 'pending',
      reference: `REF${Date.now()}`
    }
  });
});

// উইথড্র রিকোয়েস্ট তৈরি করুন
router.post('/withdraw', (req, res) => {
  const { userId, amount, method, accountNumber } = req.body;

  if (!userId || !amount || !method || !accountNumber) {
    return res.status(400).json({ error: 'সব তথ্য প্রয়োজন' });
  }

  // TODO: উইথড্র রিকোয়েস্ট সেভ করুন
  res.json({
    success: true,
    message: 'উইথড্র রিকোয়েস্ট পাঠানো হয়েছে',
    withdraw: {
      id: Date.now(),
      userId,
      amount,
      method,
      accountNumber,
      status: 'pending'
    }
  });
});

// সব ট্রানজাকশন দেখুন
router.get('/transactions/:userId', (req, res) => {
  const { userId } = req.params;

  // TODO: ডাটাবেস থেকে ট্রানজাকশন পান
  res.json({
    success: true,
    transactions: [
      {
        id: 1,
        type: 'deposit',
        amount: 500,
        method: 'bkash',
        status: 'completed',
        date: new Date()
      },
      {
        id: 2,
        type: 'withdraw',
        amount: 200,
        method: 'nagad',
        status: 'pending',
        date: new Date()
      }
    ]
  });
});

module.exports = router;
