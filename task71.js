function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    try {
        MATH_CONSTANTS.PI = 3.14;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();