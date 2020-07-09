import { Client, GuildResolvable, Guild } from 'discord.js';
export declare function getGuildObject(
	client: Client,
	guild: GuildResolvable
): Guild;
export declare function getChannelObject(
	guild: Guild,
	channel: string
): import('discord.js').GuildChannel;
export declare function getRoleObject(
	guild: Guild,
	role: string
): import('discord.js').Role;
export declare function getMemberObject(
	guild: Guild,
	member: string
): import('discord.js').GuildMember;
