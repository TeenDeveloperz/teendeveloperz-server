const Express = require('express');
const app = Express();
//const {set, listen, get} = Express();

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () => {
    console.log(`Express server listening on ${app.get('port')}`);
});