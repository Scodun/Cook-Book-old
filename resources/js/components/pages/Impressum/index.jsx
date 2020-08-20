import React from "react";
import DOMPurify from "dompurify";

class Legal extends React.Component {
  render () {
    return (
      <div className="container" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(trans("general.impressum")) }}/>
    );
  }
}

export default Legal;
