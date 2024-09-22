# Installing React (UI) onto Pi OS

## 1. React Dependencies

### Update Kernel
`sudo apt update`

### Install Git for version control and cloning
`sudo apt install git`

### Install Node.js
`sudo apt install nodejs`

### Install npm (Node Package Manager)
`sudo apt install npm`

### Install curl
`sudo apt install curl`

### Install NVM (Node Version Manager)
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`

### Commit NVM Install
`source ~/.bashrc`


## 2. React Setup

### Pull from remote repository
`git clone https://github.com/Andorryu/TravellingPianist.git`

### Navigate to react project repository
`cd TravellingPianist/raspi/react`

### Install project dependecies located in package.json
`npm install`

### Launch the Web Server
`npm start`


# Installing Flask (API) onto Pi OS

## 1. Flask Dependencies

### Navigate to flask project repository
`cd TravellingPianist/raspi/flask`

### Install project dependencies located in requirements.txt
`pip install -r requirements.txt`


## 2. Install ChromeDriver

### Download chromedriver from 
`https://googlechromelabs.github.io/chrome-for-testing/`

### Extract executable and place in /usr/bin/chromedriver
`sudo mv chromedriver /usr/bin/chromedriver`


# Booting the Project Servers

## 1. Launching react frontend user interface

### Launch the local react web app from its project folder
`cd TravellingPianist/raspi/react`
`npm start`


### 2. Launching flask backend API

### (In a seperate terminal) Launch the local flash api from its project folder
`cd TravellingPianist/raspi/flask`
`python3 src/main.py`


# Timing Problems
`sudo apt install ntpd`
`/etc/init.d/ntp stop`
`sudo apt install raspi-config`
`sudo raspi-config`
`date -s "29 Jan 2023 14:15:00"`
`/etc/init.d/ntp start`
`sudo reboot`








