"use strict";
exports.__esModule = true;
var Button = /** @class */ (function () {
    function Button(_likes, _state) {
        this._likes = _likes;
        this._state = _state;
    }
    Button.prototype.click = function () {
        this._likes += (this._state) ? -1 : 1;
        this._state = !this._state;
        console.log('Likes: ' + this._likes + ', Status: ' + this._state);
    };
    return Button;
}());
exports.Button = Button;
