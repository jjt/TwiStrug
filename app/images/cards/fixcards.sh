#!/bin/zsh

e=103
i=37

while [[ $i -le 99 ]]; do
  let j=i-1
  in="0$i.jpg"
  out="0$j.jpg"
  let i=i+1
  echo "$in $out"
  mv "$in" "$out"
done
