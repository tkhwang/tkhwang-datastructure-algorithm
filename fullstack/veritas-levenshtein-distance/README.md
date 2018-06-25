# Levenshtein distance Quick Prototyp Implementation in Javascript


## How to use Heroku

### Deploy

[How to Deploy a Node.js App to Heroku ― Scotch](https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku)

#### Login

```bash
❯ heroku login
heroku: Enter your login credentials
Email [tkhwang@gmail.com]:
Password: *********
Logged in as tkhwang@gmail.com
```

#### Create app

```bash
❯ heroku create veritas-levenshtein-distance
Creating ⬢ veritas-levenshtein-distance... done
https://veritas-levenshtein-distance.herokuapp.com/ | https://git.heroku.com/veritas-levenshtein-distance.git
```


#### How to use

Local

```bash
❯ npm start

> node-sample@ start /Users/tkhwang/_tkhwang/_repo/heroku/veritas-levenshtein-distance
> node server.js

Our app is running on http://localhost:8080
```

Heroku : https://veritas-levenshtein-distance.herokuapp.com/


#### Push source

Heroku 의 장점 : Git 로 source upload == deploy.

```bash
❯ git push heroku master
Counting objects: 13, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (10/10), done.
Writing objects: 100% (13/13), 2.04 KiB | 2.04 MiB/s, done.
Total 13 (delta 1), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
...
```

## Levenshtein Algorithm




## Reference

https://www.npmjs.com/package/js-levenshtein

https://github.com/hiddentao/fast-levenshtein

https://gist.github.com/andrei-m/982927

https://rosettacode.org/wiki/Levenshtein_distance


