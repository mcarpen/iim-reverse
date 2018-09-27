function stepsNav(currentEnigma, enigma, currentStep) {
    currentStep.removeClass('active').addClass('pending');

    $('.block-main .enigma-' + currentEnigma + '').hide();
    $('.block-main .enigma-' + enigma + '').show();
}