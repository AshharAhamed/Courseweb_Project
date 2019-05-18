'use strict';

import React from 'react';
import {render} from 'react-dom';


import ManageAdminContainer from './manageAdmin'
import AdminList from '../list/adminList'

render(<ManageAdminContainer/>, document.getElementById('adminBody'));
render(<AdminList/>, document.getElementById('adminList'));
