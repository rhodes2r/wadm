exports.render = function (req, res) {
    if(req.session.lastVisit){
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    //res.send('Hello World from index.server.controler.js');
    res.render('index', {'title':'Hello World from JSON', 'lastVisit':req.session.lastVisit})
};
