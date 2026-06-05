/*
#!/bin/bash
MESSAGE=${1:-"update"}
git add .
git commit -m "$MESSAGE"
git push
*/
@echo off

echo ===== AUTO GIT SCRIPT =====

git status

git add .

git commit -m "auto commit %date% %time%"

git push

echo ===== FINISHED =====
pause