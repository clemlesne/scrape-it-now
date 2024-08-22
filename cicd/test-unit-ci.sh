#!/bin/bash

# Start the first command in the background
make test-static-server &
# Capture the PID of the background process
UNIT_RUN_PID=$!

# Run the second command
make test-unit-run

# Once the second command exits, kill the first process
kill $UNIT_RUN_PID
