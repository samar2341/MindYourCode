# 🧠 Mind Your Code

> **Understand your code, not just write it.**

Mind Your Code is a visual learning platform that helps users **see how code executes step-by-step**. Instead of reading static code, users can follow execution flow with highlighted lines, explanations, and state changes — making programming easier to understand.

---

## 🚀 Features

### 🟢 Core (MVP)

* 📚 Prebuilt code examples (loops, conditions, arrays, functions)
* 🧾 Syntax-highlighted code viewer
* ▶️ Step-by-step execution system
* 🎯 Active line highlighting
* 🧠 Explanation panel for each step
* 📊 Execution state tracking (variable values)

---

### 🎮 Interactive Features

* ⏭️ Next / Previous step navigation
* ⏯️ Auto-play execution
* ⚡ Speed control (1x, 2x, etc.)
* 🔁 Restart execution

---

### 🎨 UI/UX

* Split-screen layout (like VS Code)
* Dark theme for code panel
* Clean and minimal design
* Smooth transitions between steps

---

### 🔥 Planned Features

* 🌊 Flowchart visualization (execution flow)
* 📈 Step timeline view
* 🌙 Dark/Light mode toggle
* 🔍 Search & filter examples
* 🧠 AI-powered code explanation (future)
* 💾 Save & share sessions

---

## 🧱 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Monaco Editor (optional)

### Backend

* Node.js
* Express.js

### Database (optional for future)

* MongoDB

---

## 📁 Project Structure

```bash
mind-your-code/
│── client/        # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── CodePanel.jsx
│   │   │   ├── ExplanationPanel.jsx
│   │   │   ├── Controls.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│
│── server/        # Express backend
│   ├── routes/
│   ├── data/
│   ├── server.js
│
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/mind-your-code.git
cd mind-your-code
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🧠 How It Works

1. User selects a code example
2. Code is displayed in the left panel
3. Steps are pre-defined in structured format:

   ```js
   {
     line: 0,
     explanation: "Initialize i = 0"
   }
   ```
4. As user navigates:

   * Active line is highlighted
   * Explanation updates
   * Execution state is shown

---

## 🎯 Example

### Code:

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

### Execution Steps:

1. Initialize `i = 0`
2. Check condition `i < 3`
3. Print `0`
4. Increment `i`
5. Repeat until condition fails

---

## 🧩 Future Roadmap

* 🔴 User-uploaded code execution
* 🤖 AI-based explanations
* 🐞 Debugging assistant
* 📚 Learning paths (DSA, basics, etc.)
* 🌐 Deployment & SaaS model

---

## 🎯 Target Users

* Beginner programmers
* Students learning DSA
* Anyone struggling to understand code flow

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Make changes
4. Submit a PR

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 💡 Vision

> "From confusion to clarity — one step at a time."

Mind Your Code aims to become a platform where **learning programming feels interactive, visual, and intuitive**.

---

## 🚀 Author

**Samar Ansari**
