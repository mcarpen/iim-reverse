function loadEnigma(enigma) {
    const blockMain = $('.block-main');

    let html;

    switch (enigma) {
        case 'step-second':
            html = '<div class="enigma-second">\n' +
                '                <table class="table text-center">\n' +
                '                    <tbody id="sortable">\n' +
                '                    <tr class="ui-state-default" data-pos="2">\n' +
                '                        <td>O</td>\n' +
                '                        <td>P</td>\n' +
                '                        <td class="third">T</td>\n' +
                '                        <td class="clue">I</td>\n' +
                '                        <td>O</td>\n' +
                '                        <td>N</td>\n' +
                '                    </tr>\n' +
                '                    <tr class="ui-state-default" data-pos="5">\n' +
                '                        <td>A</td>\n' +
                '                        <td>R</td>\n' +
                '                        <td class="third">N</td>\n' +
                '                        <td class="clue">A</td>\n' +
                '                        <td>Q</td>\n' +
                '                        <td>U</td>\n' +
                '                        <td>E</td>\n' +
                '                        <td>U</td>\n' +
                '                        <td>R</td>\n' +
                '                    </tr>\n' +
                '                    <tr class="ui-state-default" data-pos="0">\n' +
                '                        <td>W</td>\n' +
                '                        <td>I</td>\n' +
                '                        <td class="third">K</td>\n' +
                '                        <td>I</td>\n' +
                '                    </tr>\n' +
                '                    <tr class="ui-state-default" data-pos="3">\n' +
                '                        <td>P</td>\n' +
                '                        <td>U</td>\n' +
                '                        <td class="third">L</td>\n' +
                '                        <td class="clue">S</td>\n' +
                '                        <td>E</td>\n' +
                '                        <td>U</td>\n' +
                '                        <td>R</td>\n' +
                '                    </tr>\n' +
                '                    <tr class="ui-state-default" data-pos="1">\n' +
                '                        <td>D</td>\n' +
                '                        <td>R</td>\n' +
                '                        <td class="third clue">O</td>\n' +
                '                        <td class="clue">N</td>\n' +
                '                        <td class="clue">E</td>\n' +
                '                    </tr>\n' +
                '                    <tr class="ui-state-default" data-pos="4">\n' +
                '                        <td>B</td>\n' +
                '                        <td>R</td>\n' +
                '                        <td class="third">I</td>\n' +
                '                        <td class="clue">G</td>\n' +
                '                        <td>A</td>\n' +
                '                        <td>N</td>\n' +
                '                        <td>D</td>\n' +
                '                        <td>E</td>\n' +
                '                    </tr>\n' +
                '                    </tbody>\n' +
                '                </table>\n' +
                '            </div>';

            blockMain.prepend(html);

            const divSort = blockMain.find('#sortable');

            divSort.sortable({
                stop: function (event, ui) {
                    const items = $.map($(this).find('tr'), function (el) {
                        return $(el).data('pos') + ' ' + $(el).index();
                    });

                    const length = items.length;
                    let i = 0;
                    items.forEach(function (item) {
                        if (item[0] === item[2]) {
                            i++;
                        }
                        if (i === length) {
                            $('td.third').addClass('highlight');

                            let html = '<button type="button" class="btn btn-outline-info next-enigma" data-from="step-second" data-to="step-third">Énigme suivante</button>';

                            $('.block-main .infos').append(html);
                        }
                    });
                }
            });
            divSort.disableSelection();
            break;

        case 'step-third':
            $('.enigma-second').hide();

            html = '<div class="enigma-third">\n' +
                '<div class="sketchfab-embed-wrapper">\n' +
                '                <iframe src="https://sketchfab.com/models/b9f9983dd3024dc09a1bf95f7f84f88f/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>\n' +
                '            </div>\n' +
                '</div>';

            blockMain.prepend(html);

            html = '<button type="button" class="btn btn-outline-info next-enigma" data-from="step-third" data-to="step-fourth">Énigme suivante</button>';

            $('.block-main .infos').append(html);
            break;
        case 'step-fourth':
            $('.enigma-third').hide();

            html = '<div class="enigma-fourth">\n' +
                '                <div class="row justify-content-center">\n' +
                '                    <div class="col col-lg-6 text-center">\n' +
                '                        <img src="./assets/img/Enigme_4.png" draggable="false">\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>';

            blockMain.prepend(html);

            setTimeout(function () {
                html = '<div class="col col-lg-6 text-center">\n' +
                    '<img src="./assets/img/Enigme_4_indice_2.png">\n' +
                    '</div>';

                $('.enigma-fourth .row').append(html);

                html = '<button type="button" class="btn btn-outline-info next-enigma" data-from="step-fourth" data-to="step-fifth">Énigme suivante</button>';

                $('.block-main .infos').append(html);
            }, 20000);
            break;
        case 'step-fifth':
            $('.enigma-fourth').hide();

            html = '<div class="enigma-fifth">\n' +
                '                <div class="row">\n' +
                '                    <div class="col">\n' +
                '                        <div class="info">\n' +
                '                            <p>Des lettres se sont cachées dans toutes les épreuves précédentes,<br>vous devez les retrouver pour terminer...</p>\n' +
                '                            <p class="hidden">Press any button to hack<span class="blink">_</span></p>\n' +
                '                            <div id="bip" class="display"></div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '                <div class="row">\n' +
                '                    <div class="col text-center">\n' +
                '                        <div class="password hidden"></div>\n' +
                '                        <div class="button start">DÉMARRER !</div>\n' +
                '                        <div class="blink granted hidden">ACCÈS AUTORISÉ !</div>\n' +
                '                        <div class="blink denied hidden">ACCÈS REFUSÉ !</div>\n' +
                '                        <div class="failed hidden">VOUS AVEZ ÉCHOUÉ</div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>';

            blockMain.prepend(html);

            var password = "evtgu";
            var counter = 0;

            var counterbis = 300;
            var intervalId = null;

        function finish() {
            clearInterval(intervalId);
            clearInterval(interval);
            $('.failed').removeClass('hidden');
            $('.password').addClass('hidden');
            $('#bip').addClass('hidden');
        }

        function bip(value = 1) {
            counterbis -= value;
            if (counterbis <= 0) finish();
            else {
                let timy = counterbis > 60 ? Math.floor(counterbis / 60) + " min " : "";
                document.getElementById("bip").innerHTML = timy + (counterbis % 60) + " sec restantes";
            }
        }

        function countdown() {
            intervalId = setInterval(bip, 1000);
        }

            var interval = setInterval(() => {
                let pass = password.slice(0, counter);

                pass += Math.random().toString(36).slice(2, password.length - counter + 2);
                console.log(password.length - counter);
                $('.password').text(pass);
            }, 25);


        function hack() {
            counter++;
            if (counter === password.length) {
                $('.granted, .rerun').removeClass('hidden');
            }
        }

            var timeoutID;


        function delayedAlert() {
            timeoutID = window.setTimeout(slowAlert, 2000);
        }

        function slowAlert() {
            $('.denied').addClass('hidden');
        }

        function wrong() {
            bip(10);
            $('.denied').removeClass('hidden');
            reset();
            delayedAlert();
        }


            $(window).on('keypress', function (e) {
                let letter = String.fromCharCode(e.which);
                if (letter === password[counter]) {
                    hack();

                } else {
                    wrong();
                }
            });

        function clearAlert() {
            window.clearTimeout(timeoutID);
        }

        function reset() {
            counter = 0;
            clearAlert();
        }

//keyboard events won't fire if the iframe isn't selected first in Full Page view
            $(document).on('click', '.start', function () {
                $(this).addClass('hidden');
                $('.info p:last-child, .password').removeClass('hidden');
                countdown();
            });
            break;
    }
}