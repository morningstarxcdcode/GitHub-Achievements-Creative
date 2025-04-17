#!/bin/bash
for i in {1..475}; do
  branch_name="badge-$i"
  echo "Processing branch: $branch_name"
  if git checkout "$branch_name"; then
    git add .
    git commit -m "Add content for badge-$i"
    git push origin "$branch_name"
    echo "Finished processing branch: $branch_name"
  else
    echo "Error: Could not checkout branch '$branch_name'. Skipping."
  fi
done