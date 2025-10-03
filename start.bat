@echo off
echo Starting MatricAi Platform...
echo.
echo Server will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
python -m http.server 3000
pause
