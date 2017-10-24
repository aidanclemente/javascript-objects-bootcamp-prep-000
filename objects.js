var playlist = { artistName: "songTitle" };

function updatePlaylist (playlist, artistName, songTitle) {
  var updatePlaylist1 = Object.assign({}, playlist, { [artistName]: songTitle })
  return updatePlaylist1
}

function removeFromPlaylist (playlist, artistName) {
  var removeFromPlaylist1 = delete playlist[artistName]
  return removeFromPlaylist1
}
