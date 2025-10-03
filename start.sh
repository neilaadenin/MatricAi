#!/bin/bash
echo "Starting MatricAi Platform..."
echo ""
echo "Server will be available at: http://localhost:3000"
echo "Press Ctrl+C to stop the server"
echo ""
python3 -m http.server 3000
