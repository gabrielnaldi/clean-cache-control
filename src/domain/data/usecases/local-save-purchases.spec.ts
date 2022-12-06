class LocalSavePurchases {
    constructor(private readonly cacheStorage: CacheStore) { }

    async save(): Promise<void> {
        this.cacheStorage.delete();
    }
}

interface CacheStore {
    delete: () => void;
}

class CacheStoreSpy implements CacheStore {
    deleteCallsCount = 0;

    delete() {
        this.deleteCallsCount++;
    }
}

describe('LocalSavePurchases', () => {
    test('Should not delete cache on sut.init', () => {
        const cacheStore = new CacheStoreSpy();
        new LocalSavePurchases(cacheStore);
        expect(cacheStore.deleteCallsCount).toBe(0);
    })

    test('Should delete old cache on sut.save', () => {
        const cacheStore = new CacheStoreSpy();
        const sut = new LocalSavePurchases(cacheStore);
        sut.save();
        expect(cacheStore.deleteCallsCount).toBe(1);
    })
})

