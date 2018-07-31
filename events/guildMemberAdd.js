module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoş geldin iyi vakit geçirmen dileğiyle **' + username + '**!');
    member.guild.defaultChannel.send('hg '+username+'');
};
