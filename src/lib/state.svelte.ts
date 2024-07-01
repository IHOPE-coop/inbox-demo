export class User {
    name: string;
    needs: Array<Need> = $state([]);
    notifications: Array<Gift> = $state([]);

    constructor(name: string) {
        this.name = $state(name);
    }

    addNeed(need: Need) {
        this.needs.push(need);
    }

    deleteNeed(index: number) {
        this.needs.splice(index, 1);
    }

    acceptItem(index: number) {
        let gift = this.notifications.splice(index, 1)[0];
        ledger.push(gift);
    }

    declineItem(index: number) {
        let gift = this.notifications.splice(index, 1)[0];
        gift.to.needs.push(gift.need);
    }

    giftUser(to: User, needIndex: number) {
        const description = prompt("Enter the gift:");
        if (description === null) {
            return;
        }

        let need = to.needs.splice(needIndex, 1)[0];
        to.notifications.push(
            new Gift(this, to, need, description)
        );
    }
}

export type Need = {id: number, iWantTo: string, but: string};

export class Gift {
    id = crypto.randomUUID();
    timestamp: Date = new Date();

    from: User;
    to: User;
    need: Need;
    description: string;

    constructor(from: User, to: User, need: Need, description: string) {
        this.from = from;
        this.to = to;
        this.need = need;
        this.description = description;
    }
}

export let sally = new User('Sally');
export let bob = new User('Bob');
export let ledger: Array<Gift> = $state([]);