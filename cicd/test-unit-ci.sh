#!/bin/bash

write_header() {
  lightcyan='\033[1;36m'
  nocolor='\033[0m'
  echo -e "${lightcyan}➡️ $1${nocolor}"
}

cleanup() {
  write_header "Cleaning up"
  kill $aws_mock_pid
  kill $static_server_pid
}

# Unregister on success
trap 'cleanup; exit 0' EXIT
# Unregister on Ctrl+C
trap 'cleanup; exit 130' INT
# Unregister on SIGTERM
trap 'cleanup; exit 143' TERM

# Start AWS mock in background
write_header "Starting AWS mock"
make test-aws-mock 2>&1 &
aws_mock_pid=$!

# Start static server in background
write_header "Starting static server"
make test-static-server 2>&1 &
static_server_pid=$!

# Run the unit tests
make test-unit-run
exit_code=$?
write_header "Unit tests finished"
exit $exit_code
