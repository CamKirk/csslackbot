//var slack = require('slack');
const slackbot = require('slackbots');
const bot = require('./config/bottoken.js')
const fs = require('fs');

bot.on('start', ()=>{
  var params = {
    icon_emoji:':starbucks:'
  }
//   bot.postMessageToUser('camkirk', 'hi', function(data) {
//     //data = { ok: false, error: 'user_not_found' }
//     console.log(data)
// })
  //console.log(bot.getUsers()._value.members)
  //fs.writeFileSync('users.json',JSON.stringify(bot.getUsers()._value.members), console.log('file saved'))
  //bot.postMessageToUser('vizena2005','Hello David, can I get you a coffee?');
  bot.postMessageToChannel('bottest',':parrot_margarita:');


});

bot.on('message',function(data){
  console.log(data);

  bot.postMessageToChannel('detect text');
  if(data.text){

        bot.postMessageToChannel('success');
        bot.postMessageToChannel(data.text);
  }


});


console.log('initialized');
