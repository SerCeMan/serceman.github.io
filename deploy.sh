#!/usr/bin/env bash

lein run
cp -r resources/public/ /tmp/
git co master
rm -rf *
cp -r /tmp/public/* .
echo "serce.me" > CNAME
git add . && git ci -m"BLOG $(date)"
git push origin master
git co develop
