#!/usr/bin/env bash

set -eu
set -x
set -o pipefail

error() {
  echo "error: $1" >&2
  exit 1
}

main() {
  if ! git diff --quiet HEAD; then
    error "there are uncommitted changes"
  fi
  yarn build
  yarn export

  local temp_dir
  temp_dir=$(mktemp -d -t nextjsdeployment)
  # the weirdest GitHub's decision possible
  # https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#static-site-generators
  touch docs/.nojekyll
  mv docs "${temp_dir}"/

  git fetch origin gh-pages:gh-pages
  git checkout gh-pages
  rm -rf docs/
  mv "${temp_dir}"/docs .
  git add docs && git ci -m"BLOG $(date)"
  git push origin gh-pages
  git co develop
}

main "$@"
