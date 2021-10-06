function testSize(num) {
    let resaulte = '';
    if (num < 5) {
        return resaulte = 'Tiny';
    } else if (num < 10) {
        return resaulte = 'Small';
    } else if (num < 15) {
        return resaulte = 'Medium';
    } else if (num < 20) {
        return resaulte = 'Large';
    } else if (num >= 20) {
        return resaulte = 'Huge';
    }

    return "Change Me";

}

console.log(testSize(7));