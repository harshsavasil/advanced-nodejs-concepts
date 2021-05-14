const massive = require('massive');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test_db');
mongoose.plugin(require('./mongoose-write-stream'));

const { sourceDatabaseConfig } = require('./config');

function getWriteStream() {
    var User = mongoose.model('User', {
        name: String,
        phone: String,
        email: String,
    });
    return User.writeStream();
}

return massive(sourceDatabaseConfig)
    .then((db) => {
        console.time('start');
        db.users.find({}, {  limit: 100000, stream: true })
            .then((readStream) => {
                const writeStream = getWriteStream();
                readStream.pipe(writeStream);
                readStream.on('end', () => {
                    console.timeEnd('start');
                    process.exit();
                });
            });
    });