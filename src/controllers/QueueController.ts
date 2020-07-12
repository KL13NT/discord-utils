import { Client } from 'discord.js';
import { QueueCall } from '../typings/interfaces';

import Controller from '../structures/Controller';

/**
 * @global
 */
export default class QueueController extends Controller {
	ready: boolean;
	calls: QueueCall[];

	constructor(client: Client) {
		super(client, {
			name: 'queue'
		});

		this.calls = [];
	}

	init = async () => {
		this.ready = true;
	};

	enqueue = (call: QueueCall) => {
		this.calls.push(call);
	};

	executeAll = () => {
		for (const call of this.calls) {
			call.func.call(this, ...call.args);
			this.calls.shift();
		}
	};
}
