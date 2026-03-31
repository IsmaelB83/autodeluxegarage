#!/bin/bash

# Loop through all files in the current directory with names starting with 'IMG-'
for file in IMG-*.jpg; do
    # Extract the filename without 'IMG-'
    new_name="${file#IMG-}"

    # Rename the file
    mv "$file" "$new_name"
done

echo "Renaming complete."
