import './fonts.css'
import './index.scss'

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBacon, faAnchor } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap';

library.add(faBacon);
library.add(faAnchor);
dom.watch();

import $ from 'jquery';

const body = $('body');
const p = $('<p></p>').text('Adding text').css('color', 'red');

body.append(p);