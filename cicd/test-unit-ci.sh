#!/bin/bash

# Start the first command in the background
make test-static-server 1>/dev/null 2>&1 &

# Capture the PID of the background process
UNIT_RUN_PID=$!

# Run the second command
make test-unit-run
exit_code=$?

# Once the second command exits, kill the first process
kill $UNIT_RUN_PID

# Exit with the same exit code as the second command
exit $exit_code
