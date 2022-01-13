#!/bin/bash

root=$(pwd)

echo "Root path $root"

echo "🗑 Cleaning the dist..."
rm -rf $root/dist
mkdir $root/dist
cp -R $root/src $root/dist/src

echo "🗣 Executing the babel..."
yarn run build:babel &
wait $!

echo "📑 Extracting the types..."
node $root/node_modules/.bin/tsc -p $root/config/tsconfig.builder.json &
wait $!

echo "📥 Moving the project types..."
node $root/scripts/copyBuildTypes.js &
wait $!

echo "🌟 All right!"
