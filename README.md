🛰️ Space Mission Control

A lightweight, interactive mission-simulation web application built with Vite, JavaScript, HTML, and CSS.

🔖 Badges
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Version](https://img.shields.io/badge/version-v0.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)
![Made with](https://img.shields.io/badge/made%20with-JavaScript-yellow)

📘 Table of Contents

Motivation

Features

Getting Started

Prerequisites

Installation

Running Locally

Project Structure

Usage

Screenshots

Roadmap

Contributing

License

🚀 Motivation

Space mission control systems are full of complex states, events, and real-time telemetry.
This project recreates a simplified version of that ecosystem in a browser, offering an environment to:

Simulate mission lifecycles

Display live-updating telemetry

Explore UI/UX patterns for stateful systems

Experiment with animations, timers, and mission logic

It’s fun, educational, and extendable.

✨ Features
✔ Mission lifecycle simulation (launch → orbit → re-entry)  
✔ Dashboard with mission status indicators  
✔ Telemetry updates (mocked state)  
✔ Start / Abort / Reset mission controls  
✔ Lightweight & fast Vite development environment  
✔ Modular folder layout for easy extension  

🧰 Getting Started
Prerequisites

Ensure you have:

Node.js >= 16
npm or yarn

Installation
# Clone repository
git clone https://github.com/ebk1996/space_mission_control.git

# Enter project directory
cd space_mission_control

# Install dependencies
npm install
# or
yarn install

Running Locally
# Launch development server
npm run dev
# or
yarn dev


Vite will output a local development URL (usually http://localhost:5173).

📁 Project Structure
space_mission_control/
├── src/
│   ├── components/        # UI components
│   ├── logic/             # mission state machine, telemetry
│   ├── assets/            # icons, images, etc
│   ├── styles/            # CSS or SCSS
│   └── main.js            # app entry point
│
├── index.html
├── package.json
├── vite.config.js
├── LICENSE
└── README.md

🕹️ Usage

Once the app launches:

Open the mission dashboard.

Click Start Mission to begin the lifecycle simulation.

Watch telemetry and phase indicators update in real-time.

Use Abort or Reset for testing and UI exploration.

Modify files in src/ to customize mission logic, animation, or UI.

🖼 Screenshots

(Add screenshots here once available)

![Mission Dashboard Placeholder](docs/screenshot-dashboard.png)

🧭 Roadmap
⬜ More realistic telemetry models (velocity, altitude, fuel)
⬜ Add mission planner (select spacecraft, orbit profiles)
⬜ Add historical mission templates (Apollo, ISS, etc.)
⬜ Optional Node/WebSocket backend for multi-user sessions
⬜ Improved responsive layout + accessibility features
⬜ Add automated testing suite

🤝 Contributing

Contributions are welcome!

1. Fork the project  
2. Create a feature branch:  git checkout -b feature/my-update  
3. Commit changes  
4. Push and open a pull request  

📄 License

Distributed under the MIT License.
See the LICENSE file for more information.

