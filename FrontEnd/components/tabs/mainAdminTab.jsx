'use strict';

import React from 'react';
import {render} from 'react-dom';


import AdminNavigationBarContainer from "./AdminNavigationBarContainer";
import FooterContainer from './footerContainer'

render(<AdminNavigationBarContainer/>, document.getElementById('navigationBar'));
render(<FooterContainer/>, document.getElementById('footer'));