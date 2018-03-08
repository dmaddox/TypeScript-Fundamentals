export class Button {

	constructor(private _likes?: number, private _state?: boolean) {}

	click() {
		this._likes += (this._state) ? -1 : 1;
		this._state = !this._state;
		console.log('Likes: ' + this._likes + ', Status: ' + this._state);
	}
}