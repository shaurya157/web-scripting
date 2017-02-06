var casper = require('casper').create();
casper.start('http://sg.jobsdb.com/sg');

casper.then(function() {
    
});

// casper.thenOpen('http://phantomjs.org', function() {
//     this.echo('Second Page: ' + this.getTitle());
// });

casper.run();
