rm .\docs\
ng build --configuration production --base-href https://marcusvy.github.io/mv-curriculum/  --output-path docs
cp .\docs\index.html .\docs\404.html
git add .
git commit -am "(deploy) gh-pages"
git push --all