# jsEpub
## How to Use
```js
epub.build(option)
```
To use this you will need:
[jszip](https://github.com/Stuk/jszip)
[jquery](https://github.com/jquery/jquery)
[FileSaver](https://github.com/eligrey/FileSaver.js)
### defaultOption
```js
    defaultOption = {
        'title': "",
        'author': "",
        'subject': "",
        'content': "",
        'id': "",
        'cat': "",
        'publisher': "ZJZ",
        'contributor': "ZJZ",
        'fileName': "",
        'dealsingle': function(dealchapter) {},
        'coverurl': "",
        'coverData': "iVBORw0KGgoAAAANSUhEUgAAADwAAABQCAYAAABFyhZTAAABxklEQVR4Xu2YzUvDQBDFJ2BWoXj2UjxUMFhaFQ/+/2cPCgqplbYnP9CjSSqiEokgVZPaTToLs5OXSy+7k/fe7+1SEsxfXnNq0RPAsHLaIKwcMIEwCCtLAJVWBrRkB4RBWFkCqLQyoLi0UGlUWlkCqLQyoLilUWlUWlkCqLQyoLilnVT6OUnp7v6JkiyzKsyWMfnhIAqsFq+5yInh+GaW9/d71gbOzq++bJyeDNe0s3q7E8OFgTriv9fX3bfaXnmFKMOFPNemRRiOx7O8Hy2OgEvTIgwnSUa3D4+UpItLbtMYOhpETVr77x4RhqsUuqIMwxwd4qDDMaPKi3PCF5cxvb1/lN5twg06Hh4szddbw00bA8NNk/uzz3mlm+r0lvCyM1wVxM9z7a3h1hGGYcsEvK00zrB2wpb+Ssu8rTQMWybgFeHReJrv9XYDE4aW9srL6n4ItH2Rk7+WaTan+HpCFFh/uPyld7vToW53h4pf7seJYW6RnPNgmDNNibNAWCIVTk0gzJmmxFkgLJEKpyYQ5kxT4iwQlkiFUxMIc6YpcRYIS6TCqQmEOdOUOAuEJVLh1ATCnGlKnAXCEqlwagJhzjQlzmod4U/40PDwRcuVwgAAAABJRU5ErkJggg=="
    };
```
## About dealsingle Function
you can use this function to deal with your chapter.
And dealchapter() is a inSide function it need:`chapter id`, `chapter title`, `chapter content`
### Ex.
```js
function(dealchapter) {
  $.each(chapterArr, function(tmp_i) {//chapterArr is a data array
    dealchapter(tmp_i + 1, this.title, this.body);
  });
}
```
