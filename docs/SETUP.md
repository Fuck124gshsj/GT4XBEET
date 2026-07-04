# প্রজেক্ট সেটআপ গাইড

## প্রয়োজনীয় সফটওয়্যার

- Node.js (v16 বা তার উপরে)
- MongoDB
- Git

## স্টেপ ১: প্রজেক্ট ক্লোন করুন

```bash
git clone https://github.com/Fuck124gshsj/GT4XBEET.git
cd GT4XBEET
```

## স্টেপ ২: Backend সেটআপ করুন

```bash
cd backend
npm install
cp .env.example .env
```

`.env` ফাইল এডিট করুন এবং নিম্নলিখিত তথ্য যোগ করুন:

```
MONGODB_URI=mongodb://localhost:27017/gaming-platform
PORT=5000
JWT_SECRET=আপনার_নিরাপদ_সিক্রেট_কী
ADMIN_BKASH_NUMBER=01xxxxxxxxx
ADMIN_NAGAD_NUMBER=01xxxxxxxxx
```

Backend চালু করুন:

```bash
npm run dev
```

Server `http://localhost:5000` এ চলবে

## স্টেপ ३: মোবাইল অ্যাপ সেটআপ করুন

```bash
cd mobile
npm install
```

Expo দিয়ে চালু করুন:

```bash
expo start
```

QR কোড স্ক্যান করে Expo Go অ্যাপে খুলুন।

## স্টেপ ৪: Admin Dashboard সেটআপ করুন

```bash
cd admin
npm install
npm start
```

Admin ড্যাশবোর্ড `http://localhost:3000` এ খোলা হবে

## API এন্ডপয়েন্টস

### Authentication
- `POST /api/auth/register` - নিবন্ধন
- `POST /api/auth/login` - লগইন
- `POST /api/auth/logout` - লগআউট

### গেম
- `GET /api/games/all` - সব গেম
- `POST /api/games/start` - গেম শুরু
- `GET /api/games/result/:sessionId` - গেম ফলাফল

### পেমেন্ট
- `POST /api/payments/deposit` - ডিপোজিট রিকোয়েস্ট
- `POST /api/payments/withdraw` - উইথড্র রিকোয়েস্ট
- `GET /api/payments/transactions/:userId` - ট্রানজাকশন

### এডমিন
- `GET /api/admin/dashboard` - ড্যাশবোর্ড ডেটা
- `POST /api/admin/approve-deposit` - ডিপোজিট অনুমোদন
- `POST /api/admin/approve-withdraw` - উইথড্র অনুমোদন
- `POST /api/admin/set-user-balance` - ইউজার ব্যালেন্স সেট করুন
- `POST /api/admin/ban-user` - ইউজার ব্যান করুন

## ডেটাবেস মডেলস

### User Model
```javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  phone: String,
  password: String (hashed),
  balance: Number,
  isActive: Boolean,
  isAdmin: Boolean,
  createdAt: Date
}
```

### Game Session Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  gameId: String,
  betAmount: Number,
  result: Number,
  winAmount: Number,
  status: String, // 'running', 'completed', 'lost'
  createdAt: Date
}
```

### Transaction Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  type: String, // 'deposit', 'withdraw'
  amount: Number,
  method: String, // 'bkash', 'nagad'
  status: String, // 'pending', 'completed', 'rejected'
  reference: String,
  createdAt: Date
}
```

---

**সেটআপ সম্পূর্ণ!** 🎉
