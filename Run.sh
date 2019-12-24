npm run build
cp build/static/js/main.*.js build/static/js/main.js
cp build/static/css/main.*.css build/static/css/main.css
PORT=5001 serve -s build