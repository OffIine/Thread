const { random } = Math

class Thread {
    private uid: string
    private db: any

    constructor(uid?: string) {
        this.uid = uid || pseudoUID()
    }

    get UID() {
        return this.uid
    }

    async Connect(uid: string) {
        console.log(`Thread: connected to ${uid}`)
    }

    On(callback: (v: any) => void, path?: any) {
        console.log(`Thread: waiting on ${JSON.stringify(path)}`)
        callback({ man: "yo" })
    }

    Filter(callback: (v: any, uidA: string, uidB: string) => boolean, path?: any) {
        console.log(`Thread: filtering ${JSON.stringify(path)}; ${callback({ x: 10, y: 5 }, 'Alex', 'Tyler')}`)
    }

    Add(diff: any) {
        console.log(`Thread: added ${JSON.stringify(diff)}`)
    }
}

const _: any = "\u0007"

function pseudoUID() {
    return random()
        .toString(36)
        .substr(2, 5)
}

export default Thread
export {
    _
}
