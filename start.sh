#!/bin/sh

# sudo docker build -t csl-docs .
sudo docker run --name csl-docs -p 3000:3000 -d csl-docs
