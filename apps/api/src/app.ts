import { Elysia } from "elysia";

export class App {
	private app: Elysia;

	constructor() {
		this.app = new Elysia();
	}

	listen(port: number) {
		this.app.listen(port);
	}
}
