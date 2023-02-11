import React from 'react';
import $ from 'jquery';

class Preloader extends React.Component {
  componentDidMount() {
    if ($('#preloader').length) {
      $('#preloader').delay(500).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  }

  render() {
    return <div id="preloader"></div>;
  }
}

export default Preloader;



