import {
	TextChannel,
	GuildMember,
	Message,
	MessageEmbed,
	Guild,
	Snowflake
} from 'discord.js';

import { getChannelObject, getMemberObject, getRoleObject } from './object';

import { AlertLevel, NotificationOptions } from './typings/interfaces';

/**
 * Creates logging messages
 */
export function createLogMessage(message: string, alertLevel: AlertLevel) {
	return `[${alertLevel}] ${message}`;
}

/**
 * Parses a channel mention and returns the id
 */
export function parseChannelMention(mention: string): string | undefined {
	const channelIdRegex = /^(<#(\d+)>)$/;
	const match = mention.match(channelIdRegex);

	return match ? match[2] || match[3] : undefined;
}

/**
 * Parses a member mention and returns the id
 */
export function parseMemberMention(mention: string): string | undefined {
	const memberIdRegex = /^(<@(\d+)>)$/;
	const match = mention.match(memberIdRegex);

	return match ? match[2] || match[3] : undefined;
}

/**
 * Parses a member mention and returns the id
 */
export function parseRoleMention(mention: string): string | undefined {
	const roleIdRegex = /^(<@&(\d+)>)$/;
	const match = mention.match(roleIdRegex);

	return match ? match[2] || match[3] : undefined;
}

/**
 * Sends notification to specified channel
 */
export async function notify(options: NotificationOptions) {
	const { guild, notification, channel } = options;

	const target = <TextChannel>getChannelObject(guild, channel);

	if (!target) throw Error('Channel unavailable');

	if (notification instanceof MessageEmbed)
		return target.send({ content: '', embed: notification });
	else return target.send({ content: notification });
}

/**
 * Counts the number of unique words in a sentence
 */
export function countUniqueWords(message: string) {
	const unique: { [index: string]: string } = {};

	return message.split(' ').filter(word => {
		if (!unique[word] && word.length >= 2) {
			unique[word] = word;
			return true;
		}

		return false;
	}).length;
}

/**
 * Capitalises each first letter of a word in a string.
 */
export function capitalise(str: string) {
	return str.replace(
		/\w\S*/g,
		txt => txt.charAt(0).toUpperCase() + txt.substr(1)
	);
}

/**
 * Transforms an object to include only keys available in another object.
 * Doesn't handle nested objects.
 */
export function transformObject<T>(
	first: Record<string, unknown>,
	second: Record<string, unknown>
): T {
	const x1 = { ...first };
	const x2 = { ...second };

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

	return <T>(<Record<string, unknown>>x1);
}

/**
 * Awaits a single message for 60 seconds and throws on time
 */
export async function awaitMessages(channel: TextChannel, member: GuildMember) {
	const filter = ({ author }: Message) => author.id === member.id;
	const options = {
		max: 1,
		time: 60 * 1000,
		errors: ['time']
	};

	return (await channel.awaitMessages(filter, options)).first().content;
}

/**
 * Checks whether member has a specific role
 */
export function hasRole(guild: Guild, role: string, member: Snowflake) {
	const targetMember = getMemberObject(guild, member);
	const targetRole = getRoleObject(guild, role);

	return targetMember.roles.cache.some(role => role.id === targetRole.id);
}
