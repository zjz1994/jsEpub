epub = new Object;
epub.book = new Object;
epub.book.title = "";
epub.book.author = "";
epub.book.subject = "";
epub.book.content = "";
epub.book.id = "";
epub.book.cat = "";
epub.book.publisher = "ZJZ";
epub.book.contributor = "ZJZ";
epub.book.chapterList = new Array();
epub.build = function(option) {
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
    epub.book = $.extend({}, defaultOption, option);
    //static
    epub.container_xml = '<?xml version="1.0"?>\n<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">\n  <rootfiles>\n    <rootfile full-path="content.opf" media-type="application/oebps-package+xml"/>\n  </rootfiles>\n</container>';
    epub.mimetype = "application/epub+zip"
    epub.cover_xhtml = '<?xml version="1.0" encoding="utf-8" ?>\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh-CN"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>Cover</title><style type="text/css" title="override_css">@page { padding: 0pt; margin: 0pt; }body { text-align: center; padding: 0pt; margin: 0pt; }div { margin: 0pt; padding: 0pt; }</style></head>\n<body><div><img src="cover.png" alt="cover" style="height: 100%" /></div></body></html>\n';
    epub.stylesheet_css = '* { white-space: normal; }\nbody { margin: 8px; padding: 0px; font-size: 63%; }\nli, p { font-size: 1.4em; }\np { text-indent: 2em; line-height: 1.4em; margin-top: 0px; margin-bottom: 10px; }\nh1 { text-align: center; page-break-before: always; font-size: 1.6em; line-height: 1.4em; font-weight: bold; border-bottom: dotted 2px Red; }\na { color: blue; text-decoration: underline; }\n.cover { padding: 20px; text-align: center; }\n.cover img { border: solid #CCC 1px; padding: 3px; }\n.cover img:hover { background: #EFEFEF; }\n.bookinfo ul { padding: 5px; margin: 0px; list-style-type: none; border: solid #CCC 1px; margin-bottom: 6px; }\n.bookinfo ul li { padding: 5px; margin: 0px; border-bottom: dotted #CCC 1px; }\n.bookinfo ul li pre { font-size: 14px; margin-left: 30px; word-wrap: break-word; word-break: break-all; }\nul.catalog, .content { margin: 2px; padding: 0px; }\nul.catalog li a { display: block; margin: 0px; text-indent: 1.4em; line-height: 1.7em; color: Black; text-decoration: none; }\nul.catalog li { display: block; background-color: #FFF; height:1.7em; overflow: hidden; opacity: 0.8; }\nul.catalog li:hover.even, ul.catalog li:hover { background-color: #3f3f3f; }\nul.catalog li:hover a { color: White; }\nul.catalog li.even { background-color: #EFEFEF; border-bottom-color: #CCC; border-top-color: #999; border-style: solid; border-width: 1px 0px; }\n';
    epub.title_xhtml = '<?xml version="1.0" encoding="utf-8" ?>\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh-CN"><head><title>封面</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><link href="stylesheet.css" type="text/css" rel="stylesheet" /><style type="text/css">@page { margin-bottom: 5pt; margin-top: 5pt; }</style></head>\n<body>\n<div class="cover">\n<img src="cover.png" alt="' + epub.book.title + '" /></a>\n</div>\n<div class="bookinfo">\n<ul>\n<li><b>书名</b>：' + epub.book.title + '</li>\n<li><b>作者</b>：' + epub.book.author + '</li>\n<li><b>主题</b>：' + epub.book.subject + '</li>\n<li><b>简介</b>：<pre>' + epub.book.content + '</pre></li>\n</ul>\n</div>\n</body>\n</html>\n';
    zip = new JSZip();
    if (epub.book.coverData.length > 0) {
        zip.file("cover.png", epub.book.coverData, {
            base64: true
        });
    } else {
        if (epub.book.coverurl) {
            epub.getBase64Image(epub.book.coverurl, function(base64img) {
                zip.file("cover.png", base64img, {
                    base64: true
                });
            });
        } else {
            zip.file("cover.png", "");
        }
    }

    epub.book.chapterList = [];
    zip.file("mimetype", epub.mimetype);
    zip.file("stylesheet.css", epub.stylesheet_css);
    zip.file("cover.xhtml", epub.cover_xhtml);
    zip.file("title.xhtml", epub.title_xhtml);
    var META_INF = zip.folder("META-INF");
    META_INF.file("container.xml", epub.container_xml);
    //处理单章
    epub.book.dealsingle(epub.dealchapter);
    zip.file("content.opf", epub.dealContent());
    zip.file("toc.ncx", epub.dealToc());
    zip.file("catalog.html", epub.dealCatlog());
    zip.generateAsync({
            type: "blob"
        })
        .then(function(content) {
            saveAs(content, epub.book.fileName + ".epub");
        });
};
epub.getBase64Image = function(url, callback) {
    var img = document.createElement('img');
    img.src = url;
    img.onload = function() {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var dataURL = canvas.toDataURL("image/png");
        callback(dataURL);
    }
};

epub.dealchapter = function(chapter_id, chapter_title, chapter_content) {
    var chapter_html = '<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh-CN">\n<head><title>' + chapter_title + '</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><link href="stylesheet.css" type="text/css" rel="stylesheet" /><style type="text/css">@page { margin-bottom: 5pt; margin-top: 5pt; }</style></head>\n<body>\n<h1>' + chapter_title + '</h1>\n<div class="content">\n' + chapter_content + '\n</div>\n</body>\n</html>\n';
    chapterFileName = "chapter" + chapter_id;
    epub.book.chapterList.push({
        'file': chapterFileName,
        'title': chapter_title
    });
    zip.file(chapterFileName + ".html", chapter_html);
};

epub.dealCatlog = function() {
    var catalog_html = '<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh-CN">\n<head><title>' + epub.book.title + '</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><link href="stylesheet.css" type="text/css" rel="stylesheet" /><style type="text/css">body { margin: 0px; padding: 0px; background-color:White;}@page { margin-bottom: 5pt; margin-top: 5pt; }</style></head>\n<body>\n<h1>目录</h1>\n<ul class="catalog">\n<li><a href="cover.xhtml">封面</a></li>\n<li class="even"><a href="title.xhtml">书籍信息</a></li>\n<li><a href="catalog.html">目录</a></li>\n'
    $.each(epub.book.chapterList, function(tmp_count) {
        if (tmp_count % 2) {
            catalog_html += '<li><a href="' + this.file + '.html">' + this.title + '</a></li>\n';
        } else {
            catalog_html += '<li class="even"><a href="' + this.file + '.html">' + this.title + '</a></li>\n';
        }
    });
    catalog_html += '\n</ul>\n</body>\n</html>';
    return catalog_html;
};

epub.dealToc = function() {
    var toc_ncx = '<?xml version="1.0" encoding="utf-8"?><ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1"><head><meta content="' + epub.book.id + '" name="dtb:uid"/><meta content="1" name="dtb:depth"/><meta content="0" name="dtb:totalPageCount"/><meta content="0" name="dtb:maxPageNumber"/></head><navMap><navPoint id="cover" playOrder="1"><navLabel><text>封面</text></navLabel><content src="cover.xhtml"/></navPoint><navPoint id="title-page" playOrder="2"><navLabel><text>书籍信息</text></navLabel><content src="title.xhtml"/></navPoint><navPoint id="catalog" playOrder="3"><navLabel><text>目录</text></navLabel><content src="catalog.html"/></navPoint>';
    $.each(epub.book.chapterList, function(tmp_count_i) {
        toc_ncx += '<navPoint id="' + this.file + '" playOrder="' + (tmp_count_i + 4) + '"><navLabel><text>' + this.title + '</text></navLabel><content src="' + this.file + '.html"/></navPoint>';
    });
    toc_ncx += '</navMap></ncx>';
    return toc_ncx;
};

epub.dealContent = function() {
    var tmp_part_A = "";
    var tmp_part_B = "";
    var content_opf = '<?xml version="1.0" encoding="utf-8"?><package xmlns="http://www.idpf.org/2007/opf" xmlns:dc="http://purl.org/dc/elements/1.1/" unique-identifier="bookid" version="2.0"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf"><dc:title>' + epub.book.title + '</dc:title><dc:identifier id="bookid">' + epub.book.id + '</dc:identifier><dc:creator>' + epub.book.title + '</dc:creator><dc:language>zh-CN</dc:language><dc:date>Sun Apr 23 17:45:58 CST 2017</dc:date><dc:contributor>' + epub.book.contributor + '</dc:contributor><dc:publisher>' + epub.book.publisher + '</dc:publisher><dc:subject>' + epub.book.cat + '</dc:subject><dc:rights>' + epub.book.author + '</dc:rights><meta name="cover" content="cover-image" /></metadata><manifest><item id="cover" href="cover.xhtml" media-type="application/xhtml+xml" /><item id="title-page" href="title.xhtml" media-type="application/xhtml+xml" /><item id="catalog" href="catalog.html" media-type="application/xhtml+xml" />';
    $.each(epub.book.chapterList, function() {
        tmp_part_A += '<item id="' + this.file + '" href="' + this.file + '.html" media-type="application/xhtml+xml" />';
        tmp_part_B += '<itemref idref="' + this.file + '" />';
    });
    content_opf += tmp_part_A;
    content_opf += '<item id="cover-image" href="cover.png" media-type="image/png" /><item id="stylesheet" href="stylesheet.css" media-type="text/css" /><item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml" /></manifest><spine toc="ncx"><itemref idref="cover" /><itemref idref="title-page" /><itemref idref="catalog" />'
    content_opf += tmp_part_B;
    content_opf += '</spine><guide><reference href="cover.xhtml" type="cover" title="封面"/><reference href="title.xhtml" type="title-page" title="书籍信息"/><reference href="catalog.html" type="toc" title="目录"/></guide></package>'
    return content_opf;
};
