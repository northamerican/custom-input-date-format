;(function($){
    // Apply year, month and day to 
    // css-accessible data attributes on the inputs
    function dateInputFormats() { 
        $('input[type=date]').each(function() {
            var $date = $(this);
            var date = $date.val().split('-');

            $date.attr({
                'data-year': +date[0],
                'data-month': +date[1],
                'data-day': +date[2]
            });
        });
    }

    $(dateInputFormats);

    $('input[type=date]').change(dateInputFormats);
})(jQuery);