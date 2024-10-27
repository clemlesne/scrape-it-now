#!/bin/bash

# Function to check if a command exists
command_exists () {
  type "$1" &> /dev/null ;
}

mermaid_cli() {
  npx --yes @mermaid-js/mermaid-cli $@
}

# Help message function
display_help() {
  echo "Usage: $0 [-h]"
  echo ""
  echo "Run the script and follow the prompts to paste Mermaid content."
  echo "The script will generate a high-definition PNG image with no background,"
  echo "crop it, and save it with a timestamped filename."
  echo ""
  echo "  -h  Display this help message and exit"
}

# Clean up temporary directory
cleanup() {
  echo "Cleaning up temporary directory"
  rm -rf $TMP_DIR
}

# Generate the Mermaid image from the content file passed as parameter, and the ouptut file name
generate_image() {
  echo "Generating image $2"
  mermaid_cli --input $1 --output $2 --backgroundColor transparent --theme dark --scale 4

  if [ ! -f $2 ]; then
    echo "Error: Failed to create the image $2."
    cleanup
    exit 1
  fi
}

# Check for -h flag
if [ "$1" == "-h" ]; then
  display_help
  exit 0
fi

# Check if required CLI tools are installed
if ! command_exists npx || ! command_exists convert; then
  echo "Error: Required CLI tools are not installed."
  exit 1
fi

# Use a temporary directory
TMP_DIR=$(mktemp -d)
cd $TMP_DIR

# Use a timestamp for the file name
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
CONTENT_FILE="mermaid.mmd"
FILE_NAME_SVG="mermaid-${TIMESTAMP}.svg"
FILE_NAME_PNG="mermaid-${TIMESTAMP}.png"

# Wait for user input
echo "Please paste your multiline mermaid content. Press Ctrl-D when finished:"
mermaid_content=$(</dev/stdin)

# Save content to a .mmd file
echo "$mermaid_content" > $CONTENT_FILE

# Run Mermaid CLI to generate the PNG
generate_image $CONTENT_FILE $FILE_NAME_PNG

# Remove background, convert white pixels to transparent, crop size to content, optimize
convert $FILE_NAME_PNG -background none -flatten -transparent white -trim -strip -interlace Plane -quality 50% $FILE_NAME_PNG

# Run Mermaid CLI to generate the SVG
generate_image $CONTENT_FILE $FILE_NAME_SVG

# Move the final image to the current user directory
cd -
mv $TMP_DIR/$FILE_NAME_PNG .
mv $TMP_DIR/$FILE_NAME_SVG .

cleanup

echo "Images saved as $FILE_NAME_PNG and $FILE_NAME_SVG in the current directory."
