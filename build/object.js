"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMemberObject = exports.getRoleObject = exports.getChannelObject = exports.getGuildObject = void 0;
function getGuildObject(client, guild) {
    return client.guilds.resolve(guild);
}
exports.getGuildObject = getGuildObject;
function getChannelObject(guild, channel) {
    return guild.channels.cache.find(ch => channel === ch.id || channel === ch.name);
}
exports.getChannelObject = getChannelObject;
function getRoleObject(guild, role) {
    return guild.roles.cache.find(r => r.id === role || r.name === role);
}
exports.getRoleObject = getRoleObject;
function getMemberObject(guild, member) {
    return guild.members.cache.find(m => m.id === member);
}
exports.getMemberObject = getMemberObject;
