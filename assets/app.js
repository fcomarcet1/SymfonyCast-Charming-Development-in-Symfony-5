/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
import $ from 'jquery';

/**
 * Simple (ugly) code to handle the comment vote up/down
 */

// select element .js-vote-arrows
var $container = $('.js-vote-arrows');
// find <a> elements inside the container on click event
$container.find('a').on('click', function(e) {
    e.preventDefault();
    var $link = $(e.currentTarget);
    $.ajax({
        url: '/comments/10/vote/'+$link.data('direction'),
        method: 'POST'
    }).then(function(data) {
        //console.log(data);
        // use field votes because in controller we return votes
        $container.find('.js-vote-total').text(data.votes);
    });
});
