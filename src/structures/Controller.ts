import { ControllerOptions } from '../typings/interfaces';
import { Client } from 'discord.js';

export default abstract class Controller {
	client: Client;
	options: ControllerOptions;

	constructor(client: Client, options: ControllerOptions) {
		this.client = client;
		this.options = options;
	}

	abstract init(): Promise<void>;
}
