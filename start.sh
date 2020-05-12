#!/bin/bash

# Start OSC Node Server
node server/server.js &

# Deploys P5.js locally
p5 serve &

