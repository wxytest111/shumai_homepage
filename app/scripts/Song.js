'use strict';
function Song(name) {
  this.name = name;
}

Song.prototype.persistFavoriteStatus = function() {
  // something complicated
  throw new Error('not yet implemented');
};