function shuffleAndShow(array, el) {
    const newArray = shuffle(array);

    el.html('');

    newArray.forEach(function (item) {
        let component = `<tr>\n` +
            `<th scope="row">${item[0]}</th>\n` +
            `<td>${item[1]}</td>\n` +
            `</tr>`;
        el.append(component);
    });
}