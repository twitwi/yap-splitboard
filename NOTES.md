
~~~
#build-only
pnpm  build --base /2025-nesplit/
@send-to-dl-dir dist 2025-nesplit
~~~

TODO

- [ ] save layout to LS to get it by default (android does not keep hash on install)
- [ ] add a fake app that actually configures the url dictionnary (or is it the localstorage app that allows that)
