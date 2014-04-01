#!/bin/zsh
i=1
while read f;
do
  echo "Getting image #$i from $f"
  curl $f -o "cardImages/`printf %03d $i`.jpg"
  i=$[$i+1]
; done < imageUrls.txt
