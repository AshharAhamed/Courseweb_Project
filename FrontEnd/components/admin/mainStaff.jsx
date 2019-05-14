'use strict';

import React from 'react';
import {render} from 'react-dom';


import ManageStaffContainer from './manageStaff'
import StaffList from '../list/staffList'

render(<ManageStaffContainer/>, document.getElementById('body'));
render(<StaffList/>, document.getElementById('staffList'));
