$(document).ready(function () {
    $(document).on('click', '.enter', function() {
        loadEnigma('step-one');
    });

    $(document).on('click', '.next-enigma', function () {
        const dataFrom = $(this).data('from'),
            dataTo = $(this).data('to');

        $('.steps .step span').removeClass('active');
        $('.steps .' + dataFrom + '').removeClass('pending');
        $('.steps .' + dataFrom + ' span').addClass('completed');
        $('.steps .' + dataTo + '').addClass('pending');
        $('.steps .' + dataTo + ' span').addClass('active');

        $('.block-main .infos').html('');

        loadEnigma(dataTo);
    });

    $(document).on('click', '.step span', function () {
        const enigma = $(this).data('enigma'),
            currentStep = $('.steps .step').find('span.active'),
            currentEnigma = currentStep.data('enigma');

        if ($(this).hasClass('completed')) {
            const step = $('.step-' + currentEnigma + '');

            stepsNav(currentEnigma, enigma, currentStep);

            if (!step.find('span').hasClass('completed')) {
                step.addClass('pending');
            }
            $(this).addClass('active');

        } else if ($(this).hasClass('pending')) {
            stepsNav(currentEnigma, enigma, currentStep);

            $(this).removeClass('pending').addClass('active');
        }
    });
});
