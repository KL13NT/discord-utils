import Controller from '../structures/Controller';
import { IntervalOptions } from '../typings/interfaces';
import { Client } from 'discord.js';

export default class IntervalsController extends Controller {
	ready = false;
	intervals: Map<string, NodeJS.Timeout>;

	constructor(client: Client) {
		super(client, {
			name: 'intervals'
		});

		this.intervals = new Map<string, NodeJS.Timeout>();
	}

	init = async () => {
		this.ready = true;
	};

	setInterval = (intervalOptions: IntervalOptions) => {
		const { name, time, callback } = intervalOptions;

		if (this.exists(name)) this.clearInterval(name);

		this.intervals.set(name, setInterval(callback, time));
	};

	clearInterval = (name: string) => {
		clearInterval(this.intervals.get(name));
		this.intervals.delete(name);
	};

	exists = (name: string) => {
		return this.intervals.has(name);
	};
}
