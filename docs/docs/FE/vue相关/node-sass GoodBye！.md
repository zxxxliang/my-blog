由于node-sass与node版本绑定过于恶心，所以，需要将项目中的node-sass改成sass

1. node-sass报错🤮

```shell
error ~/project/node_modules/node-sass: Command failed.
Exit code: 1
Command: node scripts/build.js
Arguments: 
Directory: ~/project/node_modules/node-sass
Output:
Building: /usr/local/bin/node ~/project/node_modules/node-gyp/bin/node-gyp.js rebuild --verbose --libsass_ext= --libsass_cflags= --libsass_ldflags= --libsass_library=
gyp info it worked if it ends with ok
gyp verb cli [
gyp verb cli   '/usr/local/bin/node',
gyp verb cli   '~/project/node_modules/node-gyp/bin/node-gyp.js',
gyp verb cli   'rebuild',
gyp verb cli   '--verbose',
gyp verb cli   '--libsass_ext=',
gyp verb cli   '--libsass_cflags=',
gyp verb cli   '--libsass_ldflags=',
gyp verb cli   '--libsass_library='
gyp verb cli ]
gyp info using node-gyp@3.8.0
gyp info using node@14.16.0 | darwin | x64
gyp verb command rebuild []
gyp verb command clean []
gyp verb clean removing "build" directory
gyp verb command configure []
gyp verb check python checking for Python executable "python2" in the PATH
gyp verb `which` failed Error: not found: python2
gyp verb `which` failed     at getNotFoundError (~/project/node_modules/which/which.js:13:12)
gyp verb `which` failed     at F (~/project/node_modules/which/which.js:68:19)
gyp verb `which` failed     at E (~/project/node_modules/which/which.js:80:29)
gyp verb `which` failed     at ~/project/node_modules/which/which.js:89:16
gyp verb `which` failed     at ~/project/node_modules/isexe/index.js:42:5
gyp verb `which` failed     at ~/project/node_modules/isexe/mode.js:8:5
gyp verb `which` failed     at FSReqCallback.oncomplete (fs.js:183:21)
gyp verb `which` failed  python2 Error: not found: python2
gyp verb `which` failed     at getNotFoundError (~/project/node_modules/which/which.js:13:12)
gyp verb `which` failed     at F (~/project/node_modules/which/which.js:68:19)
gyp verb `which` failed     at E (~/project/node_modules/which/which.js:80:29)
gyp verb `which` failed     at ~/project/node_modules/which/which.js:89:16
gyp verb `which` failed     at ~/project/node_modules/isexe/index.js:42:5
gyp verb `which` failed     at ~/project/node_modules/isexe/mode.js:8:5
gyp verb `which` failed     at FSReqCallback.oncomplete (fs.js:183:21) {
gyp verb `which` failed   code: 'ENOENT'
gyp verb `which` failed }
gyp verb check python checking for Python executable "python" in the PATH
gyp verb `which` failed Error: not found: python
gyp verb `which` failed     at getNotFoundError (~/project/node_modules/which/which.js:13:12)
gyp verb `which` failed     at F (~/project/node_modules/which/which.js:68:19)
gyp verb `which` failed     at E (~/project/node_modules/which/which.js:80:29)
gyp verb `which` failed     at ~/project/node_modules/which/which.js:89:16
gyp verb `which` failed     at ~/project/node_modules/isexe/index.js:42:5
gyp verb `which` failed     at ~/project/node_modules/isexe/mode.js:8:5
gyp verb `which` failed     at FSReqCallback.oncomplete (fs.js:183:21)
gyp verb `which` failed  python Error: not found: python
gyp verb `which` failed     at getNotFoundError (~/project/node_modules/which/which.js:13:12)
gyp verb `which` failed     at F (~/project/node_modules/which/which.js:68:19)
gyp verb `which` failed     at E (~/project/node_modules/which/which.js:80:29)
gyp verb `which` failed     at ~/project/node_modules/which/which.js:89:16
gyp verb `which` failed     at ~/project/node_modules/isexe/index.js:42:5
gyp verb `which` failed     at ~/project/node_modules/isexe/mode.js:8:5
gyp verb `which` failed     at FSReqCallback.oncomplete (fs.js:183:21) {
gyp verb `which` failed   code: 'ENOENT'
gyp verb `which` failed }
gyp ERR! configure error 
gyp ERR! stack Error: Can't find Python executable "python", you can set the PYTHON env variable.
gyp ERR! stack     at PythonFinder.failNoPython (~/project/node_modules/node-gyp/lib/configure.js:484:19)
gyp ERR! stack     at PythonFinder.<anonymous> (~/project/node_modules/node-gyp/lib/configure.js:406:16)
gyp ERR! stack     at F (~/project/node_modules/which/which.js:68:16)
gyp ERR! stack     at E (~/project/node_modules/which/which.js:80:29)
gyp ERR! stack     at ~/project/node_modules/which/which.js:89:16
gyp ERR! stack     at ~/project/node_modules/isexe/index.js:42:5
gyp ERR! stack     at ~/project/node_modules/isexe/mode.js:8:5
gyp ERR! stack     at FSReqCallback.oncomplete (fs.js:183:21)
gyp ERR! System Darwin 23.1.0
gyp ERR! command "/usr/local/bin/node" "~/project/node_modules/node-gyp/bin/node-gyp.js" "rebuild" "--verbose" "--libsass_ext=" "--libsass_cflags=" "--libsass_ldflags=" "--libsass_library="
gyp ERR! cwd ~/project/node_modules/node-sass
gyp ERR! node -v v14.16.0
```

2. 卸载node-sass🤬

```shell
% yarn remove node-sass
yarn remove v1.22.19
[1/2] 🗑  Removing module node-sass...
[2/2] 🔨  Regenerating lockfile and installing missing dependencies...
success Uninstalled packages.
✨  Done in 10.60s.
```

3. 安装sass🫡

```shell
% yarn add sass -D
yarn add v1.22.19
[1/5] 🔍  Validating package.json...
[2/5] 🔍  Resolving packages...
[3/5] 🚚  Fetching packages...
[4/5] 🔗  Linking dependencies...
[5/5] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 3 new dependencies.
info Direct dependencies
└─ sass@1.69.7
info All dependencies
├─ immutable@4.3.4
├─ sass@1.69.7
└─ source-map-js@1.0.2
✨  Done in 15.56s.
```

4. 运行项目🤞

```shell
% yarn dev
DONE  Compiled successfully in 8452ms
I  Your application is running here: http://localhost:8000
```

