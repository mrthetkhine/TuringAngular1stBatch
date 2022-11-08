"use strict";
class FileSystemObject {
    constructor(path, networked) {
        this.path = path;
        this.networked = networked;
    }
    isFile() {
        return this instanceof FileRep;
    }
    isDirectory() {
        return this instanceof Directory;
    }
}
class FileRep extends FileSystemObject {
    constructor(path, content) {
        super(path, false);
        this.content = content;
    }
}
class Directory extends FileSystemObject {
    constructor() {
        super(...arguments);
        this.children = [];
    }
}
let k = new FileRep("foo/bar.txt", "foo");
console.log("K ", k.isFile());
