import { Snowflake, Guild, Message } from 'discord.js';
export declare type AlertLevel = 'info' | 'warn' | 'error';
export interface ControllerOptions {
	name: string;
}
export interface QueueCall {
	func: (...args: any[]) => any;
	args: any[];
}
export interface IntervalOptions {
	name: string;
	time: number;
	callback: () => void;
}
export interface ModerationEmbedOptions {
	title: string;
	reason: string;
	date?: Date;
	member: Snowflake;
	moderator: Snowflake;
}
export interface RoleEmbedOptions {
	title: string;
	date?: Date;
	role: Snowflake;
	member: Snowflake;
	moderator: Snowflake;
	channel: Snowflake;
}
export interface ClearEmbedOptions {
	date?: Date;
	moderator: Snowflake;
	channel: Snowflake;
	count: number;
}
export interface NotificationOptions {
	guild: Guild;
	channel: Snowflake;
	notification?: string | Message;
}
export interface UserModerationOptions {
	member: Snowflake;
	moderator: Snowflake;
	channel: Snowflake;
	reason?: string;
}
