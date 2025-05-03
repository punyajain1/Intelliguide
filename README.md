# 🤖 Intelliguide

Intelliguide is a cutting-edge platform that analyzes Codeforces profiles using AI to provide tailored insights and recommendations for competitive programmers.

> 🚀 **600+ usages and 400+ new users in the first 48 hours!**

## ✨ Highlights

- Developed a platform that leverages AI to analyze Codeforces user data and deliver personalized feedback.
- Utilizes the OpenAI API to generate intelligent, actionable insights on performance trends, improvement areas, and problem-solving strategies.
- Robust backend built with Node.js, TypeScript, Express, and MongoDB, supporting dynamic URL generation.
- Interactive and responsive frontend engineered with Next.js, TypeScript, Tailwind CSS, and ShadCN.
- Empowers competitive programmers by offering a structured approach to identifying weaknesses and enhancing problem-solving skills.

## 📁 Project Structure

```
backend/
  src/
    Routes/
    db.ts
    index.ts
    ...
frontend/
  app/
  components/
  hooks/
  lib/
  ...
```

## 🔥 Features

- Fetch and analyze Codeforces user data
- Visualize contest and rating history
- Analyze programming language usage and verdict statistics
- Modern UI with Next.js, Tailwind CSS, and ShadCN
- RESTful API backend with Express and TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:

   ```sh
   cd backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Copy `.env_example` to `.env` and fill in the required environment variables.

4. Start the backend server:

   ```sh
   npm run build
   npm start
   ```

   The backend will run on `http://localhost:3001`.

### Frontend Setup

1. Navigate to the frontend directory:

   ```sh
   cd frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the frontend development server:

   ```sh
   npm run dev
   ```

   The frontend will run on `http://localhost:3000`.

## 🛠️ API Endpoints

The backend exposes several endpoints under `/api/v1/`, including:

- `/userinfo`
- `/rating`
- `/contest`
- `/programming-lang`
- `/accuracy`
- `/verdict`
- `/count`
- `/message`

See [`backend/src/index.ts`](backend/src/index.ts) for route details.

## 🧰 Technologies Used

- **Backend:** Node.js, Express, TypeScript, MongoDB, OpenAI API
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS, ShadCN
