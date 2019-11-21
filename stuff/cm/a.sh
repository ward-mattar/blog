#!/bin/bash
for i in {0..12}
do
   echo "<?xml version=\"1.0\" encoding=\"UTF8\"?>" > course$i.xml
   echo "<courses>" >> course$i.xml
   cat courses`printf "%02d" $i` >> course$i.xml
   echo "</courses>" >> course$i.xml
done
