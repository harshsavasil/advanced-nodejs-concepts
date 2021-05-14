const dns = require('dns');

dns.lookup('www.pluralsight.com', { all: true }, (err, address) => {
    if (err) {
        console.error(err);
    }
    console.log(address);
});

// dns.resolve4('pluralsight.com', 'MX', (err, address) => {
//     console.log(address);
// });

dns.reverse('104.19.161.127', (err, hostnames) => {
    console.log(hostnames);
})