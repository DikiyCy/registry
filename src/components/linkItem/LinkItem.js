import React from 'react';
import { Link } from 'react-router-dom';

import './LinkItem.scss';

const LinkItem = ({ text, to }) => (

  <Link to={ to } className="links">{ text }</Link>

);

export default LinkItem;
