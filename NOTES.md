
~~~
#build-only
pnpm  build --base /splitboard/
@send-to-dl-dir dist apps/splitboard
~~~

TODO

- [ ] save layout to LS to get it by default (android does not keep hash on install)
- [ ] add a fake app (or specific easter-egg view) that actually configures the url dictionnary (or is it the localstorage app that allows that)
