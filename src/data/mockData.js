export default function getData() {
    let word_1 = 'cat';
    let word_2 = 'dog';
    let word_3 = 'mouse';
    let word_4 = 'computer';
    let word_5 = 'house';
    let word_6 = 'beer';

    let data = [];

    for (let i = 0; i < 1000; i++) {
        data.push({
            title: `This is result number ${i}`,
            link: `https://www.result-number-${i}-url.com`,
            description: `Lorem Ipsum is simply ${i % 7 ? word_1 : word_2} dummy text of the ${i} printing and typesetting industry. Lorem ${i % 9 ? word_3 : word_4} Ipsum has been the industry's standard dummy ${i + 256} text ever since the 1500s, when an unknown printer took a ${i % 17 ? word_5 : word_6} galley of type and scrambled it ${String.fromCharCode(((i % 127) > 48) && ((i % 127) < 90) ? i % 127 : parseInt(48 - (Math.random() * 10)))} to make a type specimen book.`
        })
    }
    return data;
}