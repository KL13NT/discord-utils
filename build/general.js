"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasRole = exports.awaitMessages = exports.transformObject = exports.capitalise = exports.countUniqueWords = exports.notify = exports.parseRoleMention = exports.parseMemberMention = exports.parseChannelMention = exports.createLogMessage = void 0;
const discord_js_1 = require("discord.js");
const object_1 = require("./object");
function createLogMessage(message, alertLevel) {
    return `[${alertLevel}] ${message}`;
}
exports.createLogMessage = createLogMessage;
function parseChannelMention(mention) {
    const channelIdRegex = /^(<#(\d+)>)$/;
    const match = mention.match(channelIdRegex);
    return match ? match[2] || match[3] : undefined;
}
exports.parseChannelMention = parseChannelMention;
function parseMemberMention(mention) {
    const memberIdRegex = /^(<@(\d+)>)$/;
    const match = mention.match(memberIdRegex);
    return match ? match[2] || match[3] : undefined;
}
exports.parseMemberMention = parseMemberMention;
function parseRoleMention(mention) {
    const roleIdRegex = /^(<@&(\d+)>)$/;
    const match = mention.match(roleIdRegex);
    return match ? match[2] || match[3] : undefined;
}
exports.parseRoleMention = parseRoleMention;
function notify(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { guild, notification, channel } = options;
        const target = object_1.getChannelObject(guild, channel);
        if (!target)
            throw Error('Channel unavailable');
        if (notification instanceof discord_js_1.MessageEmbed)
            return target.send({ content: '', embed: notification });
        else
            return target.send({ content: notification });
    });
}
exports.notify = notify;
function countUniqueWords(message) {
    const unique = {};
    return message.split(' ').filter(word => {
        if (!unique[word] && word.length >= 2) {
            unique[word] = word;
            return true;
        }
        return false;
    }).length;
}
exports.countUniqueWords = countUniqueWords;
function capitalise(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1));
}
exports.capitalise = capitalise;
function transformObject(first, second) {
    const x1 = Object.assign({}, first);
    const x2 = Object.assign({}, second);
    Object.keys(x2).forEach(key => {
        if (!x1[key]) {
            x1[key] = x2[key];
        }
    });
    Object.keys(x1).forEach(key => {
        if (typeof x2[key] === 'undefined') {
            delete x1[key];
        }
    });
    return x1;
}
exports.transformObject = transformObject;
function awaitMessages(channel, member) {
    return __awaiter(this, void 0, void 0, function* () {
        const filter = ({ author }) => author.id === member.id;
        const options = {
            max: 1,
            time: 60 * 1000,
            errors: ['time']
        };
        return (yield channel.awaitMessages(filter, options)).first().content;
    });
}
exports.awaitMessages = awaitMessages;
function hasRole(guild, role, member) {
    const targetMember = object_1.getMemberObject(guild, member);
    const targetRole = object_1.getRoleObject(guild, role);
    return targetMember.roles.cache.some(role => role.id === targetRole.id);
}
exports.hasRole = hasRole;
