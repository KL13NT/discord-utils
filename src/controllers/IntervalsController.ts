import Controller from '../structures/Controller';
import { IntervalOptions } from '../typings/interfaces';
import { Client } from 'discord.js';

/**
 * Defines a controller for intervals. Useful for preventing duplicate intervals such as temp member mutes.
 */
export default class IntervalsController extends Controller {
	ready = false;
	intervals: Map<string, NodeJS.Timeout>;

	constructor(client: Client) {
		super(client, {
			name: 'intervals'
		});

		this.intervals = new Map<string, NodeJS.Timeout>();
	}

	/**
	 * Initialises the controller
	 */
	init = async () => {
		this.ready = true;
	};

	/**
	 * Sets a new interval with a unique passed 'name'
	 */
	setInterval = (intervalOptions: IntervalOptions) => {
		const { name, time, callback } = intervalOptions;

		if (this.exists(name)) this.clearInterval(name);

		this.intervals.set(name, setInterval(callback, time));
	};

	/**
	 * Clear intervals by name
	 */
	clearInterval = (name: string) => {
		clearInterval(this.intervals.get(name));
		this.intervals.delete(name);
	};

	/**
	 * Clears all intervals
	 */
	clearAll = () => {
		Array.from(this.intervals.keys()).forEach(interval => {
			this.clearInterval(interval);
		});

		this.intervals.clear();
	};

	/**
	 * Checks whether an interval with a specific name exists
	 */
	exists = (name: string) => {
		return this.intervals.has(name);
	};
}
