import { Guild, TextChannel } from 'discord.js';

import { UserModerationOptions } from './typings/interfaces';

import { getMemberObject, getChannelObject, getRoleObject } from './object';
import { createUserModerationEmbed } from './embed';

/**
 * Mutes a member temporarily by adding 'Muted' role
 * @param duration In seconds
 */
export async function mute(
	guild: Guild,
	role: string,
	options: UserModerationOptions
) {
	const { member, moderator, reason } = options;

	const targetMember = getMemberObject(guild, member);

	const embed = createUserModerationEmbed({
		title: 'Muted Member',
		member,
		moderator,
		reason
	});

	const roleObject = getRoleObject(guild, role);

	const modChannelObject = getChannelObject(guild, options.channel);

	if (!targetMember) throw Error('Member not found');
	if (!roleObject) throw Error('Role not found');
	if (!modChannelObject) throw Error('Channel not found');

	return Promise.all([
		targetMember.roles.add(roleObject.id),
		(<TextChannel>modChannelObject).send(embed)
	]);
}

/**
 * Bans a member
 */
export async function ban(
	guild: Guild,
	role: string,
	options: UserModerationOptions
) {
	const { member, moderator, reason } = options;

	const targetMember = getMemberObject(guild, member);

	const embed = createUserModerationEmbed({
		title: 'Banned Member',
		member,
		moderator,
		reason
	});

	const roleObject = getRoleObject(guild, role);

	const modChannelObject = getChannelObject(guild, options.channel);

	if (!targetMember) throw Error('Member not found');
	if (!roleObject) throw Error('Role not found');
	if (!modChannelObject) throw Error('Channel not found');

	return Promise.all([
		targetMember.ban({ reason }),
		(<TextChannel>modChannelObject).send(embed)
	]);
}

/**
 * Adds 'Warned' role
 */
export async function warn(
	guild: Guild,
	role: string,
	options: UserModerationOptions
) {
	const { member, moderator, reason } = options;

	const targetMember = getMemberObject(guild, member);

	const embed = createUserModerationEmbed({
		title: 'Warned Member',
		member,
		moderator,
		reason
	});

	const roleObject = getRoleObject(guild, role);

	const modChannelObject = getChannelObject(guild, options.channel);

	if (!targetMember) throw Error('Member not found');
	if (!roleObject) throw Error('Role not found');
	if (!modChannelObject) throw Error('Channel not found');

	return Promise.all([
		targetMember.roles.add(roleObject.id),
		(<TextChannel>modChannelObject).send(embed)
	]);
}

/**
 * Removes 'Warned' role from member
 */
export async function unwarn(
	guild: Guild,
	role: string,
	options: UserModerationOptions
) {
	const { member, moderator, reason } = options;

	const targetMember = getMemberObject(guild, member);

	const embed = createUserModerationEmbed({
		title: 'Forgave Member',
		member,
		moderator,
		reason
	});

	const roleObject = getRoleObject(guild, role);

	const modChannelObject = getChannelObject(guild, options.channel);

	if (!targetMember) throw Error('Member not found');
	if (!roleObject) throw Error('Role not found');
	if (!modChannelObject) throw Error('Channel not found');

	return Promise.all([
		targetMember.roles.remove(roleObject.id),
		(<TextChannel>modChannelObject).send(embed)
	]);
}

/**
 * Removes 'Muted' role from member.
 */
export async function unmute(
	guild: Guild,
	role: string,
	options: UserModerationOptions
) {
	const { member, moderator, reason } = options;

	const targetMember = getMemberObject(guild, member);

	const embed = createUserModerationEmbed({
		title: 'Unmuted Member',
		member,
		moderator,
		reason
	});

	const roleObject = getRoleObject(guild, role);

	const modChannelObject = getChannelObject(guild, options.channel);

	if (!targetMember) throw Error('Member not found');
	if (!roleObject) throw Error('Role not found');
	if (!modChannelObject) throw Error('Channel not found');

	return Promise.all([
		targetMember.roles.remove(roleObject.id),
		(<TextChannel>modChannelObject).send(embed)
	]);
}
