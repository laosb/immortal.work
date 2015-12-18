#!/bin/sh
# Use this script with script-runner in Atom.
cd ../
git push origin
git tag v0.2.0
git push origin --tag
