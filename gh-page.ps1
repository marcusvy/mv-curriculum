rm .\docs\
ng build --configuration production --base-href https://marcusvy.github.io/mv-curriculum/  --output-path docs
git add .
git commit -am "(deploy) gh-pages"
git push --all