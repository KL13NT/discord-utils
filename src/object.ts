import { Client, GuildResolvable, Guild } from 'discord.js';

/**
 * Resolves a GuildResolvable to a Guild
 */
export function getGuildObject(client: Client, guild: GuildResolvable) {
	return client.guilds.resolve(guild);
}

/**
 * Returns a channel object based on name, id
 */
export function getChannelObject(guild: Guild, channel: string) {
	return guild.channels.cache.find(
		ch => channel === ch.id || channel === ch.name
	);
}

/**
 * Returns a Role object based on name, id
 */
export function getRoleObject(guild: Guild, role: string) {
	return guild.roles.cache.find(r => r.id === role || r.name === role);
}

/**
 * Returns a GuildMember object
 */
export function getMemberObject(guild: Guild, member: string) {
	return guild.members.cache.find(m => m.id === member);
}
