const jsonServer = require('json-server');
const querystring = require('querystring'); 
const path = require('path')

const calculateDistance = require('./calculateDistance');

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares);

router.render = (req, res) => {

  if (req.path == '/grupos') {
    let filteredGroups = res.locals.data;
    const parsedUrl = req.originalUrl.split('?');

    if (parsedUrl.length > 1) {
      const queryParams = querystring.parse(parsedUrl[1]);
      const { center, radius } = queryParams;
      
      if (!!center && !!radius) {
        const _center = JSON.parse(center);
        
        filteredGroups = filteredGroups.filter((grupo) => {
          const distance = calculateDistance(_center, grupo.localizacao);
          return distance <= parseFloat(radius);
        });
        res.locals.data = filteredGroups;
        
      }
    }
  }
  res.json(res.locals.data);
};

server.use('/api', router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});

module.exports = server;