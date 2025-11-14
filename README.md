Space Mission Control

v0.1.0

A lightweight web-application built with JavaScript/HTML/CSS (powered by Vite) that simulates controlling and monitoring space missions.
(Repository by ebk1996)

🛰️ Table of Contents

Motivation

Features

Getting Started

Prerequisites

Installation

Running Locally

Usage

Project Structure

Contributing

License

Roadmap

Motivation

Space mission control systems carry an incredible complexity — this project is a playful exploration of that domain in a web-environment. The goal is to provide an interactive experience where users can:

launch / monitor simulated missions

view telemetry / status updates

manage mission states (pre-launch, launch, orbit, re-entry, etc)
This provides a fun sandbox for doing UI/UX around real-time data flows, animations, state machines, and a bit of sci-fi flair.

Features

Here are some of the core features available in this version (v0.1.0):

Dashboard UI that displays mission status (launch count, current phase, telemetry)

Ability to start / abort / reset a mission

Simple animation or visual indicator of mission progress

Built using modern frontend tooling: JS, HTML, CSS, Vite build system

Clean folder structure and modular codebase (see Project Structure
)

Getting Started
Prerequisites

Node.js and npm (or Yarn) installed

Basic familiarity with running web apps from local environment

Installation
# Clone the repository  
git clone https://github.com/ebk1996/space_mission_control.git  
cd space_mission_control  

# Install dependencies  
npm install  
# or  
yarn install  

Running Locally
# Start the development server  
npm run dev  
# or  
yarn dev  


This will launch the app in your browser (typically at http://localhost:3000 or whatever Vite indicates).
Edit files in src/ and hot-reload will reflect changes.

Usage

Once running:

Navigate to the homepage.

You’ll see the mission control dashboard.

Use the “Start Mission” button to begin.

Watch the telemetry update as the mission moves through phases (e.g., Launch → Orbit → Re-entry).

Use the “Abort” or “Reset” controls as necessary to test various states.

Inspect the code under src/ for where mission phase logic is implemented (you can extend or tweak logic/animations).

Tip: If you want to simulate more realistic telemetry, you can modify the logic in src/ to generate dynamic values (altitude, speed, fuel, etc).

Project Structure
/space_mission_control
├── src/
│   ├── components/        # reusable UI components
│   ├── assets/            # images, styles, icons
│   ├── logic/             # mission state machine, telemetry generator
│   ├── styles/            # global CSS or SCSS
│   └── main.js            # entry point
├── index.html             # main HTML
├── package.json           # dependencies & scripts
├── vite.config.js         # Vite build config
├── .gitignore             # ignore list
└── LICENSE                # MIT License

Contributing

Contributions are very welcome! If you’d like to contribute:

Fork the repo.

Create a new feature branch: git checkout -b feature/my-awesome-mission.

Make your changes, add tests/documentation where appropriate.

Submit a pull request with details of what your change does and why.

I’ll review and merge if it aligns with the project objectives.

License

This project is licensed under the MIT License. See the LICENSE
 file for full details.

Roadmap

Here are some ideas planned for future versions:

Extend telemetry simulation: altitude curve, velocity, fuel usage, communication signal strength

Add mission-planner UI: choose spacecraft, trajectory, target orbit/planet

Add historical mission presets (e.g., Apollo, Mars, ISS)

Integrate WebSocket or server backend for multi-user missions

Add unit tests & end-to-end UI tests

Improve mobile responsiveness and accessibilit
