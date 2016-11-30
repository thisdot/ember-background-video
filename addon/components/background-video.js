import Ember from 'ember';
import layout from '../templates/components/background-video';

const {
  computed,
  isPresent,
  String: { htmlSafe }
} = Ember;

export default Ember.Component.extend({
  layout,
  classNames: 'ember-background-video jquery-background-video-wrapper',
  
  // Milliseconds to fade video in/out (0 for no fade)
  fadeIn: 500, 

  // Seconds to play before pausing (0 for forever)
  pauseAfter: 120, 

  // For all (including manual) pauses
  fadeOnPause: false, 

  // When we've reached the pauseAfter time
  fadeOnEnd: true, 
  
  // Show pause/play button
  showPausePlay: true, 

  // left|right|center
  pausePlayXPos: 'right', 

  // top|bottom|center
  pausePlayYPos: 'top', 

  // pixels or percent from side - ignored if positioned center
  pausePlayXOffset: '15px',

  // pixels or percent from top/bottom - ignored if positioned center
  pausePlayYOffset: '15px',

  attributeBindings: ['style'],

  style: computed('poster', function() {
    let poster = this.get('poster');
    
    if (isPresent(poster)) {
      return htmlSafe(`background-image: url(${poster})`);
    }
  }),

  didInsertElement() {
    let options = this.getProperties([
      'fadeIn', 'pauseAfter', 'fadeOnPause', 'fadeOnEnd',
      'showPausePlay', 'pausePlayXPos', 'pausePlayYPos', 
      'pausePlayXOffset', 'pausePlayYOffset'
    ]);

    this.$().find('.jquery-background-video').bgVideo(options);
  }
});
