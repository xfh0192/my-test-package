class BaseClass {
    constructor(args = {}) {
        this.args = args
        this.logStart()
    }

    logStart() {
        console.log('test package start')
    }
}

module.exports = BaseClass