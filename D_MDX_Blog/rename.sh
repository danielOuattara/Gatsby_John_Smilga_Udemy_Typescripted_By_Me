for file in *.js
do
  mv "$file" "${file%.js}.tsx"
done
