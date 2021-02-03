Array.prototype.unique = function () {
    let s = new Set();
    return this.filter((value, index, self) => {
        if (property && s.has(value[property])) {
            return false;
        } else if (property) {
            s.add(value[property])
            return true;
        }
        if (s.has(value)) {
            return false;
        }
        s.add(value);
        return true;
    })
}
