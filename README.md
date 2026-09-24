# 🚀 JS Backend Starter

A simple and reusable **Node.js backend starter template** to quickly start new backend projects.

## 🛠️ Getting Started

### 1. Clone the repository

Open the terminal inside the folder where you want to create your project and run:

```bash
git clone https://github.com/nishantpal30/js-backend-starter.git .
```

> The `.` at the end clones the repository directly into the current folder.

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the root directory and add your environment variables:

```env
PORT=3000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```
## 🧹 Remove `.gitkeep` Files (Optional)

This starter repository uses `.gitkeep` files to preserve the folder structure.

After cloning the repository, you can remove all `.gitkeep` files by running:

```bash
find . -type f -name ".gitkeep" -delete
```

> Run this command from the root directory of the project.

### 4. Start the project

```bash
npm run dev
```

---
### Remove Existing Git Repository

If you cloned an existing repository and want to push the project to your own GitHub repository, remove the existing Git history:

| Terminal                 | Command                            |
| ------------------------ | ---------------------------------- |
| **Git Bash**             | `rm -rf .git`                      |
| **PowerShell**           | `Remove-Item -Recurse -Force .git` |
| **Command Prompt (CMD)** | `rmdir /s /q .git`                 |


> **Note:** This only removes the `.git` folder. It does not delete `.gitignore`, `.gitkeep`, or any project files.

After removing `.git`, initialize your own repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## 📂 Project Structure

```text
project/
├── src/
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Start Building

Your backend starter project is now ready. Customize it according to your project requirements and start building!

⭐ If you find this starter useful, consider giving the repository a star.
