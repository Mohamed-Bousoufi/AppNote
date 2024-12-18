#!/usr/bin/env bash
export PORT=${PORT:-8000}
echo "Starting server on port $PORT"
exec python -m gunicorn Bousoufi_Notes.asgi:application -k uvicorn.workers.UvicornWorker 