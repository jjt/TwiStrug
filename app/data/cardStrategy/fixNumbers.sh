#!/bin/zsh
i=36
while [[ $i -le 99 ]]; do
  let j=$((i - 1))
  echo "moving 0$i.html, to 0$j.html"
  mv "0$i.html" "0$j.html"
  let i=$((i + 1))
done
