import https from 'https'
import fs from 'fs'

const url = 'https://qiita.com/'
const outfile = fs.createWriteStream('test.html')

https.get(url, function (res) {
  res.pipe(outfile)
  res.on('end', function() {
    outfile.close()
    console.log('ok')
  })
})
