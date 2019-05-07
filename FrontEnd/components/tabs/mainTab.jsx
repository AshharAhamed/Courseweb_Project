'use strict';

import React from 'react';
import {render} from 'react-dom';


import NavigationBarContainer from "./NavigationBarContainer";
import FooterContainer from './footerContainer'

render(<NavigationBarContainer/>, document.getElementById('navigationBar'));
render(<FooterContainer/>, document.getElementById('footer'));