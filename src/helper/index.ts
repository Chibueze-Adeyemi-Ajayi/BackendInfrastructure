export function log(...msg:any[]) {
    console.log(...msg);
}

export function warn(...msg:any[]) {
    console.warn(...msg);
}

export function error(...msg:any[]) {
    console.error(...msg);
}

export function info(...msg:any[]) {
    console.info(...msg);
}

export function sendRespnse (msg:any, code = 200) {
    return {
        code: code,
        msg: msg
    }
}

export function sendErr (msg:any, code = 400) {
    return {
        code: code,
        msg: msg
    }
}