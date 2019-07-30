class Thread {
    private uid: string

    constructor(uid: string) {
        this.uid = uid
    }

    async Connect(uid: string) {
        console.log(`Thread: connected to ${uid}`)
    }

    On(callback: (v: any) => void, path: any) {
        console.log(`Thread: waiting on ${JSON.stringify(path)}`)
        callback({ man: "yo" })
    }

    Filter(callback: (v: any, uidA: string, uidB: string) => boolean, path: any) {
        console.log(`Thread: filtering ${JSON.stringify(path)}; ${callback({ x: 10, y: 5 }, 'Alex', 'Tyler')}`)
    }

    Add(diff: any) {
        console.log(`Thread: added ${JSON.stringify(diff)}`)
    }
}

const __: any = "\u0007"

export default Thread
export {
    __
}
