const stringLength = (string) => {
    return string.length;
}

const stringLengthExpand = (string) => {
    if(string.length >= 1 && string.length <= 10)
    return string.length;

    return "string not between 1 and 10 characters long";
}

module.exports = { stringLength, stringLengthExpand  };