import Inferno from 'inferno';
import 'style-loader!foundation-sites/dist/css/foundation.min.css';
import 'style-loader!css-loader!sass-loader!./styles/app.scss';
import TodoApp from './components/TodoApp.jsx';
import 'inferno-devtools';
$(document).foundation();

Inferno.render(
            <TodoApp/> ,
    document.getElementById('app')
);