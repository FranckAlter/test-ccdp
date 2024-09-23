class ScriptError extends Error {
    constructor(message) {
        super(message);
        this.name = "ScriptError";
    }
}

module.exports = ScriptError;
