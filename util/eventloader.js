const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
  client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
  client.on('guildMemberRemove', reqEvent('guildMemberRemove'));
  
  var util = require('util')
var EventEmitter = require('events')
 
function MyClass() { EventEmitter.call(this) }
util.inherits(MyClass, EventEmitter)
util.inherits(MyClass, EventEmitter)
};
