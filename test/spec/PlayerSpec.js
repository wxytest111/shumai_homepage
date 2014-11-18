describe('Player', function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song('abc');
  });

  it('should be able to play a Song', function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);
  });


});

describe('AA', function () {
  beforeEach(function() {
    player = new Player();
    player = jasmine.createSpyObj('obj',['play']);
    song = new Song('abc');
    player.play(song);
  });

  it('should be able to play a Song', function() {
    expect(player.play).toHaveBeenCalled();
  });
});