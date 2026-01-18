# 🕒 Queue-Management-Website

![CI](https://github.com/RashmiDulashani/Queue-Management-System-DevOps/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/RashmiDulashani/Queue-Management-System-DevOps/actions/workflows/deploy.yml/badge.svg)


## 👥 Group Information

- H.M. Imashi Dilshani - ITBIN-2313-0025 - Frontend Developer
- T.H. Imalsha Dilshani - ITBIN-2313-0027 - Backend Developer 
- G. Rashmi Dulashani - ITBIN-2313-0031 - DevOps Manager

## 📝 Project Description

Q-Master is a real-time queue management application built with Next.js. It allows service providers to manage customer flow digitally. Users can join a virtual queue and view their status, while admins can manage the active list and "call" the next person in line.

## 🚀 Live Deployment
**Live URL:** https://queue-management-system-dev-ops.vercel.app/

## 🛠 Technologies Used
- **Core:** Next JS
- **CI/CD:** GitHub Actions
- **Deployment:** Vercel

## ✨ Features
- **Real-time Queue Status:** Live updates of current position and waiting list.
- **Admin Dashboard:** Capability to add, remove, and mark users as "served".
- **Responsive UI:** Optimized for all device screens.

## 🌲 Branch Strategy
We implemented the following branching strategy to manage our collaboration:
- **main:** Production-ready code only (Protected branch).
- **feature/*:** Individual branches for specific feature development.

## 👨‍💻 Individual Contribution

### G. Rashmi Dulashani : ITBIN-2313-0031 (DevOps Manager)
- Repository Setup and configured branch protection rules.
- GitHub Actions CI/CD Pipeline Implementation.
- Deployment Setup & Management.

### H.M.Imashi Dilshani : ITBIN-2313-0025 (Frontend Developer)
- Created the responsive UI/UX using Next.js components and CSS Modules.

## 🔧 Setup Instructions

### Prerequisites
- Node.js (Version 22)
- Git

### Installation
```bash
# Clone the Repository
git clone https://github.com/RashmiDulashani/Queue-Management-Website

# Navigate to Project Directory
cd [Project-Name]

# Install Dependencies
npm install

# Run Development Server
npm run dev
```

## ⚙️ Deployment Process
Our automated pipeline ensures code quality and reliable delivery:
- **Continuous Integration:** On every push to feature/*, GitHub Actions runs the CI pipeline (Linting, Building, Testing).
- **Continuous Deployment:** When code is merged into main, it triggers the Vercel deployment workflow, pushing the latest version to production.
