import { Client } from 'discord.js';
import { QueueCall } from '../typings/interfaces';

import Controller from '../structures/Controller';

/**
 * Defines a queue of function calls. Can be executed in order.
 */
export default class QueueController extends Controller {
	ready: boolean;
	private calls: QueueCall[];

	constructor(client: Client) {
		super(client, {
			name: 'queue'
		});

		this.calls = [];
	}

	/**
	 * Initialises the controller
	 */
	init = async () => {
		this.ready = true;
	};

	/**
	 * Adds new call to the queue
	 */
	enqueue = (call: QueueCall) => {
		this.calls.push(call);
	};

	/**
	 * Executes all calls in order
	 */
	executeAll = () => {
		for (const call of this.calls) {
			call.func.call(this, ...call.args);
			this.calls.shift();
		}
	};
}
