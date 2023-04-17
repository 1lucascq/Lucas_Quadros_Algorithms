/*
Create an algorithm that generates the following random ID pattern: XXXX-AAAA-BBBB-CCCC
    Where XXXX, AAAA, BBBB and CCCC patterns are random alphanumeric
    The default is a string: "XXXX-AAAA-BBBB-CCCC"
    The result must be stored in a variable. For example:
    $id = generarId()
    id is ~ abc1-bb12-234a-bcc2
*/

const generarId = () => {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const TOTAL_CHARACTERS = characters.length;
    const TOTAL_ID_LENGTH_PLUS_ONE = 20;

    let id = '';
    for (let i = 1; i < TOTAL_ID_LENGTH_PLUS_ONE; i++) {
        i % 5 == 0
            ? id += '-'
            : id += characters[Math.round(Math.random() * TOTAL_CHARACTERS)];
    }
    return id;
}

const id = generarId()
console.log(Math.random() * 62)
