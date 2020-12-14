const log = console.log.bind(console)

const randomId = () => Math.random().toString(36).substring(7);


export {log, randomId}