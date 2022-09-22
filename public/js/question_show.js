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
        // use field votes because in controller we return votes
        $container.find('.js-vote-total').text(data.votes);
    });
});
