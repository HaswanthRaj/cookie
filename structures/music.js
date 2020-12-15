module.exports = {
  canModifyQueue(member) {
    const { channelID } = member.voice;
    const botChannel = member.guild.voice.channelID;

    if (channelID !== botChannel) {
      member.send(`Hi ${member.user.username}, You need to join the voice channel in COOKIE first! so that you can hear the cool vibes`).catch(console.error);
      return;
    }

    return true;
  }
};
