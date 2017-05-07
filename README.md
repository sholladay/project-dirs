# project-dirs [![Build status for project-dirs on Circle CI.](https://img.shields.io/circleci/project/sholladay/project-dirs/master.svg "Circle Build Status")](https://circleci.com/gh/sholladay/project-dirs "Project Dirs Builds")

> Get a list of paths to all of your projects.

## Why?

 - Useful for development scripts to automate your work.
 - Makes a good starting point to find other paths.
 - Works even within nested projects.

## Install

```sh
npm install project-dirs --save
```

## Usage

Get it into your program.

```js
const projectDirs = require('project-dirs');
```

Display the location of all top level projects.

```js
projectDirs().then((dirs) => {
    dirs.forEach((dir) => {
        console.log('Project path:', dir);
    });
});
```

## API

### projectDirs(cwd)

Returns an `Array` of paths for the topmost projects within your [code directory](https://github.com/sholladay/code-dir).

#### cwd

Type: `string`<br>
Default: `process.cwd()`

The directory of a project or one of its descendants, marking where to end the downwards search for projects.

## Related

 - [code-dir](https://github.com/sholladay/code-dir) - Find the parent directory for top level projects

## Contributing

See our [contributing guidelines](https://github.com/sholladay/project-dirs/blob/master/CONTRIBUTING.md "The guidelines for participating in this project.") for more details.

1. [Fork it](https://github.com/sholladay/project-dirs/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/project-dirs/compare "Submit code to this project for review.").

## License

[MPL-2.0](https://github.com/sholladay/project-dirs/blob/master/LICENSE "The license for project-dirs.") © [Seth Holladay](http://seth-holladay.com "Author of project-dirs.")

Go make something, dang it.
