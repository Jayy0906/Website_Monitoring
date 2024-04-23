#! /bin/bash

echo "installing packages..."

echo "$1"

npm i --legacy-peer-deps

echo "packages installed sucessfully!"

sudo chmod u+x ./install.sh

