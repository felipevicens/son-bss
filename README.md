# son-bss  [![Build Status](http://jenkins.sonata-nfv.eu/buildStatus/icon?job=son-bss)](http://jenkins.sonata-nfv.eu/job/son-bss) 

BSS GUI 
Very simple gui that allows customers to retrieve and inspect Network Services and additionally allows to request instantiations on them.
### Dependencies
 * Node.js
### Docker support
Build Docker container image 
```
docker rm -f sonata-bss

docker build -t sonata-yo-base .
docker build -t sonata-yo-gen generator/
docker build --no-cache -t sonata-yo-gen-bss application/ 
```

Run Docker container
```
docker run --name sonata-bss -it -p 9000:9000 -p 1337:1337 sonata-yo-gen-bss sudo grunt serve:development
```

### Technologies

* [Grunt] (http://gruntjs.com/) - JavaScript Task Runner
* [AngularJS] (https://www.angularjs.org/) - JavaScript Framework for Web apps
* [Bower] (http://bower.io/) - Package manager for the web
* [npm] (https://www.npmjs.com/) -  Package manager for JavaScript
* [yeoman] (http://yeoman.io/) - Web Scaffolding Tool
* [node.js] (https://nodejs.org/en/) - JavaScript Runtime 

### Lead Developers
The following lead developers are responsible for this repository and have admin rights. They can, for example, merge pull requests.
 * Santiago Rodriguez (srodriguez)
 * Felipe Vicens (felipevicens)
