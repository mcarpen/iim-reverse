function loadEnigma(enigma) {
    const blockMain = $('.block-main');

    let html;

    switch (enigma) {
        case 'step-one':
            html = '<div class="container">\n' +
                '<div class="block-main">\n' +
                '        <div class="enigma-first">\n' +
                '            <div class="row">\n' +
                '                <div class="col">\n' +
                '                    <table class="table">\n' +
                '                        <tbody class="alphabet-first">\n' +
                '                        <tr>\n' +
                '                            <th scope="row">a</th>\n' +
                '                            <td>01100001</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">b</th>\n' +
                '                            <td>01100010</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">c</th>\n' +
                '                            <td>01100011</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">d</th>\n' +
                '                            <td>01100100</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">e</th>\n' +
                '                            <td>01100101</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">f</th>\n' +
                '                            <td>01100110</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">g</th>\n' +
                '                            <td>01100111</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">h</th>\n' +
                '                            <td>01101000</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">i</th>\n' +
                '                            <td>01101001</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">e</th>\n' +
                '                            <td>01100101</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">j</th>\n' +
                '                            <td>01101010</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">k</th>\n' +
                '                            <td>01101011</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">l</th>\n' +
                '                            <td>01101100</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">m</th>\n' +
                '                            <td>01101101</td>\n' +
                '                        </tr>\n' +
                '                        </tbody>\n' +
                '                    </table>\n' +
                '                </div>\n' +
                '                <div class="col">\n' +
                '                    <table class="table">\n' +
                '                        <tbody class="alphabet-second">\n' +
                '                        <tr>\n' +
                '                            <th scope="row">A</th>\n' +
                '                            <td>01000001</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">B</th>\n' +
                '                            <td>01000010</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">C</th>\n' +
                '                            <td>01000011</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">D</th>\n' +
                '                            <td>01000100</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">E</th>\n' +
                '                            <td>01000101</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">F</th>\n' +
                '                            <td>01000110</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">G</th>\n' +
                '                            <td>01000111</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">H</th>\n' +
                '                            <td>01001000</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">I</th>\n' +
                '                            <td>01001001</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">E</th>\n' +
                '                            <td>01000101</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">J</th>\n' +
                '                            <td>01001010</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">K</th>\n' +
                '                            <td>01001011</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">L</th>\n' +
                '                            <td>01001100</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">M</th>\n' +
                '                            <td>01001101</td>\n' +
                '                        </tr>\n' +
                '                        </tbody>\n' +
                '                    </table>\n' +
                '                </div>\n' +
                '                <div class="col">\n' +
                '                    <table class="table">\n' +
                '                        <tbody class="alphabet-third">\n' +
                '                        <tr>\n' +
                '                            <th scope="row">n</th>\n' +
                '                            <td>01101110</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">o</th>\n' +
                '                            <td>01101111</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">p</th>\n' +
                '                            <td>01110000</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">q</th>\n' +
                '                            <td>01110001</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">v</th>\n' +
                '                            <td>01110110</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">r</th>\n' +
                '                            <td>01110010</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">s</th>\n' +
                '                            <td>01110011</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">t</th>\n' +
                '                            <td>01110100</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">u</th>\n' +
                '                            <td>01110101</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">v</th>\n' +
                '                            <td>01110110</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">w</th>\n' +
                '                            <td>01110111</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">x</th>\n' +
                '                            <td>01111000</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">y</th>\n' +
                '                            <td>01111001</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">z</th>\n' +
                '                            <td>01111010</td>\n' +
                '                        </tr>\n' +
                '                        </tbody>\n' +
                '                    </table>\n' +
                '                </div>\n' +
                '                <div class="col">\n' +
                '                    <table class="table">\n' +
                '                        <tbody class="alphabet-fourth">\n' +
                '                        <tr>\n' +
                '                            <th scope="row">N</th>\n' +
                '                            <td>01001110</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">O</th>\n' +
                '                            <td>01001111</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">P</th>\n' +
                '                            <td>01010000</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">Q</th>\n' +
                '                            <td>01010001</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">V</th>\n' +
                '                            <td>01010110</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">R</th>\n' +
                '                            <td>01010010</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">S</th>\n' +
                '                            <td>01010011</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">T</th>\n' +
                '                            <td>01010100</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">U</th>\n' +
                '                            <td>01010101</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">V</th>\n' +
                '                            <td>01010110</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">W</th>\n' +
                '                            <td>01010111</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">X</th>\n' +
                '                            <td>01011000</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">Y</th>\n' +
                '                            <td>01011001</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <th scope="row">Z</th>\n' +
                '                            <td>01011010</td>\n' +
                '                        </tr>\n' +
                '                        </tbody>\n' +
                '                    </table>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="row justify-content-lg-center">\n' +
                '                <div class="col-lg-5 col-lg-push-3">\n' +
                '                    <div class="form-group">\n' +
                '                        <input type="text" class="alphabet-entry form-control" placeholder="Entre le mot décodé">\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '        <div class="infos"></div>\n' +
                '    </div>\n' +
                '<div class="steps">\n' +
                '        <div class="row">\n' +
                '            <div class="col">\n' +
                '                <div class="step step-first pending">\n' +
                '                    <span class="active" data-enigma="first">1</span>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="col">\n' +
                '                <div class="step step-second">\n' +
                '                    <span data-enigma="second">2</span>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="col">\n' +
                '                <div class="step step-third">\n' +
                '                    <span data-enigma="third">3</span>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="col">\n' +
                '                <div class="step step-fourth">\n' +
                '                    <span data-enigma="fourth">4</span>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="col">\n' +
                '                <div class="step step-fifth">\n' +
                '                    <span data-enigma="fifth">5</span>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '    </div>';

            $('.block-home').remove();
            $('body').prepend(html).addClass('enigma');
            $('.steps').show();

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
            break;
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
                '                <iframe src="https://sketchfab.com/models/4a67c586c580419782647a39be419b68/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>\n' +
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