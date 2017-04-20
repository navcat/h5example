'use strict';

/**
 * 使用箭头函数
 */

(function () {
    var _this = this;

    return [function () {
        return _this.x;
    }.bind({ x: 'inner' })()];
}).call({ x: 'outer' });