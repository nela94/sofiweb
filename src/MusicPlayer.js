import React, { Component }  from 'react';
import './musicplayer.scss';
import jQuery from 'jquery'

function MusicPlayer(){

  (function($) {
  		$(document).ready(function() {

  			// Pause/Play functionality
  			var playButton = $('.control-play'),
  				album = $('.album');

  			playButton.on('click', function() {
  				$('.music-player-container').toggleClass('control-play');
          console.log("clicked")

  			});
  		});
  	})(jQuery);

  return (
    <div className="music-player-container">

		<div className="music-player">
			<div className="player-content-container">
				<h1 className="artist-name">Filo Sofia</h1> {/*track-title*/}
				<h2 className="album-title">Single</h2> {/*album-title*/}
				<h3 className="song-title">"What's Up"</h3> {/*song-title*/}
				<div className="music-player-controls">
					<div className="control-back"></div> {/*control-back*/}
					<div className="control-play"></div> {/*control-play*/}
					<div className="control-forwards"></div> {/*control-forwards*/}
				</div> {/*music-player-controls*/}
			</div> {/*player-content-container*/}
		</div> {/*music-player*/}

		<div className="album">
			<div className="album-art"></div> {/*album-art*/}
			<div className="vinyl"></div> {/*vinyl*/}
		</div> {/*album-art*/}

	</div>
  )
}

export default MusicPlayer
