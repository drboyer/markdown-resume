#!/usr/bin/env node

/* Converts a markdown file in the markdown_source directory to a PDF file with
   the same name in the `resumes` directory */

var markdownpdf = require("markdown-pdf")
  , fs = require("fs")


var sourceFile = process.argv[2]
var outputFile = sourceFile.replace(".md", ".pdf")

var markdownPdfOptions = {
  paperFormat: 'Letter',
  paperBorder: '1.25cm',
  cssPath: 'src/css/default_style.css',
  remarkable: {
        html: true,
        breaks: true,
        plugins: [ require('remarkable-classy') ]
    }
}

markdownpdf(markdownPdfOptions)
  .from('markdown_source/' + sourceFile)
  .to('resumes/' + outputFile, () => {
    console.log("Saved PDF resumes/" + outputFile )
  })
