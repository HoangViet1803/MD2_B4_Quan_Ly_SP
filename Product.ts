export class Product {
    private name: string;
    private price: number;

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    constructor (name: string, price: number) {
        this.name = name;
        this.price = price;
    }

}