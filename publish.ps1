# Setup

$rev = git rev-parse --short HEAD | tr -d "\n"

# Build

node build

# Checkout: master -> gh-pages

git checkout gh-pages

# Publish

# git reset --hard $(git rev-list --max-parents=0 HEAD)

Copy-Item -Path dist/* -Destination . -Recurse -Force

Remove-Item -Path replays -Recurse -Force -ErrorAction Ignore
git checkout master -- replays/

git add -A .
git commit -m "Publish: '$rev'"
git push https://github.com/eriedaberrie/damage-calc.git --force gh-pages

# Checkout: gh-pages -> master

git checkout -
