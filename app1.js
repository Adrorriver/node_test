var emitter = require('./emitter1.js');

var emtr = new emitter();
    
    
emtr.on('greet',function(){
    console.log('someone said hello');
})

emtr.on('greet',function(){
    console.log('and hello again...');
})

emtr.on('amir',function(){
    console.log('amir is here.');
})

console.log('hello');
emtr.emit('greet');
console.log('hi amir are you there?')
emtr.emit('amir');