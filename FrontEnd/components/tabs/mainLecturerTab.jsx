'use strict';

import React from 'react';
import {render} from 'react-dom';


import LecturerNavigationBarContainer from "./LecturerNavigationBarContainer";
import FooterContainer from './footerContainer'

render(<LecturerNavigationBarContainer/>, document.getElementById('navigationBar'));
render(<FooterContainer/>, document.getElementById('footer'));