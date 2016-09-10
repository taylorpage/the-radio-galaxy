import React from 'react';

export default class MediaNav extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 text-xs-center navbar">
          <a className="col-md-2 white" href="#">Tab 1</a>
          <a className="col-md-2 white" href="#">Tab 2</a>
          <a className="col-md-2 white" href="#">Tab 3</a>
          <a className="col-md-2 white" href="#">Tab 4</a>
          <a className="col-md-2 white" href="#">Tab 5</a>
          <a className="col-md-2 white" href="#">Tab 6</a>
        </div>
      </div>
    )
  }
}