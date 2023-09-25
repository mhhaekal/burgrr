const fs = require('fs')

module.exports = {
    deleteFiles: (files) => {
        console.log('>>>1')
        console.log(files)
        console.log('>>>2')
        files.images.forEach(value => {
            fs.unlinkSync(value.path)
        })
    }
}