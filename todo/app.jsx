import React from 'react';
import { render } from 'react-dom';

import Todo from './containers/Todo';

import './static/common.css';

// 性能测试
import Perf from 'react-addons-perf'
if (__DEV__) {
    window.Perf = Perf
}

render(
	<Todo/>,
	document.getElementById('root')
)