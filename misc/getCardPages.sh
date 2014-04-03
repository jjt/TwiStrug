#!/bin/zsh
i=1
while read f;
do
  echo "Getting card #$i from $f"
  curl $f -o "cardPages/$i.html"
  i=$[$i+1]
; done < cardUrls.txt
