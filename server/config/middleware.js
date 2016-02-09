var morgan = require('morgan');
var bodyParser = require('body-parser');



module.exports = function(app, express){
  var factRouter = express.Router();
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));

  app.use('/api/facts', function(){});

  // require('../facts/factRoutes.js')(factRouter);
};