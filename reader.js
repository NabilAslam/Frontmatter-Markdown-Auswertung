const fs = require('fs'), fm = require('front-matter')

fs.readFile('./datei.md', 'utf8', function(err, data) {
    if (err) throw err

    const content = fm(data)

    console.log(content)
})