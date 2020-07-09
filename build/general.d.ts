import { TextChannel, GuildMember, Message } from 'discord.js';
import { AlertLevel, NotificationOptions } from './typings/interfaces';
export declare function createLogMessage(
	message: string,
	alertLevel: AlertLevel
): string;
export declare function parseChannelMention(
	mention: string
): string | undefined;
export declare function parseMemberMention(mention: string): string | undefined;
export declare function parseRoleMention(mention: string): string | undefined;
export declare function notify(options: NotificationOptions): Promise<Message>;
export declare function countUniqueWords(message: string): number;
export declare function capitalise(str: string): string;
export declare function transformObject<T>(
	first: Record<string, unknown>,
	second: Record<string, unknown>
): T;
export declare function awaitMessages(
	channel: TextChannel,
	member: GuildMember
): Promise<string>;
