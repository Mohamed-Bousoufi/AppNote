#!/usr/bin/env bash
export PORT=${PORT:-8000}
echo "Starting server on port $PORT"
exec gunicorn -c gunicorn_config.py your_project.wsgi:application