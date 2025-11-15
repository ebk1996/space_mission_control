# 🚗 Car Rental Management

A lightweight, interactive car rental management web application built with Vite, React, JavaScript, HTML, and CSS.

## 🔖 Badges
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Version](https://img.shields.io/badge/version-v0.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)
![Made with](https://img.shields.io/badge/made%20with-JavaScript-yellow)

## 📘 Table of Contents

- Motivation
- Features
- Getting Started
  - Prerequisites
  - Installation
  - Running Locally
- Project Structure
- Usage
- Screenshots
- Roadmap
- Contributing
- License

## 🚀 Motivation

Car rental management systems require tracking vehicle availability, rental status, and customer information.
This project creates a simple, user-friendly interface for rental car businesses to manage their fleet, offering:

- Track rental car inventory
- Manage rental status (Available, Rented, Maintenance)
- View renter information
- Easy status updates with action buttons

It's practical, scalable, and easy to customize.

## ✨ Features
✔ Car inventory management with status tracking  
✔ Dashboard with rental status indicators  
✔ Filter cars by status (Available, Rented, Maintenance)  
✔ Quick actions: Rent Out, Return, Maintenance  
✔ Lightweight & fast Vite development environment  
✔ Modular folder layout for easy extension  

## 🧰 Getting Started

### Prerequisites

Ensure you have:

- Node.js >= 16
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/ebk1996/space_mission_control.git

# Enter project directory
cd space_mission_control

# Install dependencies
npm install
# or
yarn install
```

### Running Locally

```bash
# Launch development server
npm run dev
# or
yarn dev
```

Vite will output a local development URL (usually http://localhost:5173).

## 📁 Project Structure

```
car_rental_management/
├── src/
│   ├── components/        # UI components
│   ├── assets/            # icons, images, etc
│   ├── styles/            # CSS modules
│   └── main.jsx           # app entry point
│
├── index.html
├── package.json
├── vite.config.js
├── LICENSE
└── README.md
```

## 🕹️ Usage

Once the app launches:

1. Open the car rental dashboard.
2. View all rental cars with their current status.
3. Use filter buttons to view cars by status (Available, Rented, Maintenance).
4. Click action buttons to:
   - **Rent Out**: Mark a car as rented
   - **Return**: Mark a car as available again
   - **Maintenance**: Mark a car as under maintenance
5. Modify files in `src/` to customize the car data, UI, or functionality.

## 🖼 Screenshots

(Add screenshots here once available)

## 🧭 Roadmap

⬜ Add detailed renter information (name, contact, rental dates)  
⬜ Track rental history for each vehicle  
⬜ Add pricing and payment tracking  
⬜ Vehicle search and sorting functionality  
⬜ Add authentication for rental staff  
⬜ Optional backend API for data persistence  
⬜ Improved responsive layout + accessibility features  
⬜ Add automated testing suite  

## 🤝 Contributing

Contributions are welcome!

1. Fork the project  
2. Create a feature branch: `git checkout -b feature/my-update`  
3. Commit changes  
4. Push and open a pull request  

## 📄 License

Distributed under the MIT License.
See the LICENSE file for more information.
