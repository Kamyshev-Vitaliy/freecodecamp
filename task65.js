function switchOfStuff(val) {
    let answer = "";

    switch (val) {
        case 'a':
            answer = 'apple';
            break;
        case 'b':
            answer = 'bird';
            break;
        case 'c':
            answer = 'cat';
            break;
        case 'd':
            answer = 'stuff';
            break;
        case 4:
            answer = 'stuff';
            break;
        default:
            answer = 'stuff';
    }

    return answer;
}

switchOfStuff(1);