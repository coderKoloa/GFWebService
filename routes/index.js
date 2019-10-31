var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/public/images/11.gif',function (req, res, next) {
    console.log('url : ' , '' + req.url);
    var options = {
        root: __dirname + '/public/images/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    var fileName = req.params.name;
    // res.sendFile('11.gif', options, function (err) {
    //     if (err) {
    //         next(err);
    //     } else {
    //         console.log('Sent:', fileName);
    //     }
    // });

   res.sendfile('/Users/deven/Desktop/Github/koloa/GFWebService/public/images/11.gif');
});

router.get('/public/apps/FMEFB.ipa',function (req,res,next) {
    res.sendfile('/Users/deven/Desktop/Github/koloa/GFWebService/public/apps/FMEFB.ipa');
});


router.get('/public/apps/ftx.apk',function (req,res,next) {
    res.sendfile('/Users/deven/Desktop/Github/koloa/GFWebService/public/apps/ftx.apk');
});

router.get('/openApp',function (req,res,next) {
    // res.redirect('GFApp://');
    res.redirect('GFApp://');
});

router.get('/getData',function (req,res,next) {
    var json = {
        'version' : '2.0.5',
        'success' : 'yes'
    }
   res.send(json);

});

router.get('/public/movie',function(req,res,next){
    res.sendfile('/Users/deven/Desktop/Github/koloa/GFWebService/public/movie/1.mp4');
});

module.exports = router;
