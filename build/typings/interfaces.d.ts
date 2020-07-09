import { ActivityType, Snowflake, Guild, Message } from 'discord.js';
export declare type ListenerHandler = (...args: any[]) => void;
export declare type Template = string;
export declare type AlertLevel = 'info' | 'warn' | 'error';
export interface Presence {
	message: string;
	type: ActivityType;
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
	channel: Snowflake;
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
export interface EventVariable {
	name: string;
	value: string;
}
export interface EventOptions {
	variables: EventVariable[];
	template: Template;
}
export interface NotificationOptions {
	guild: Guild;
	channel: Snowflake;
	notification?: string | Message;
}
export interface LogOptions {
	guild: Guild;
	notification: string | Error;
	alertLevel: AlertLevel;
}
export interface UserModerationOptions {
	member: Snowflake;
	moderator: Snowflake;
	channel?: Snowflake;
	reason?: string;
}
