import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive'

const Learn: React.FC = () => {
  return (
    <div>
      <MediaQuery query="(min-Width: 768px)">

      </MediaQuery>
      <MediaQuery query="(max-Width: 767px)">
      </MediaQuery>
    </div>
  )
}

export default Learn
