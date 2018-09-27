$(document).ready(function () {
    let alphabetTimeout = setInterval(binarAlphabetSwitch, 10000);

    $('.alphabet-entry').on('keyup', function () {
        if (this.value === 'server') {
            clearInterval(alphabetTimeout);

            $('.enigma-first').hide();

            let html = '<div class="alert alert-info" role="alert">\n' +
                'Bien joué t\'as trouvé le code !\n' +
                '</div>\n' +
                '<button type="button" class="btn btn-outline-info next-enigma" data-from="step-first" data-to="step-second">Énigme suivante</button>';

            $('.block-main .infos').append(html);
        }
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
