export interface SavePurchases {
    save: (PurchaseModel: Array<SavePurchases.Params>) => Promise<void>
}

namespace SavePurchases {
    export type Params = {
        id: string;
        date: Date;
        value: number;
    }
}