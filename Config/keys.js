if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
    console.log("heroku");
  
  } else {
     module.exports = require('./dev');
     console.log("developer");
  }
  
  
  
  