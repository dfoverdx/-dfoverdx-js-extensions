import '../index';

describe('Promise.delay', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('it waits the specified amount of time before resolving', async () => {
        let cb = jest.fn(),
            p = Promise.delay(200);
        p.then(cb);

        expect(cb).not.toBeCalled();
        
        jest.advanceTimersByTime(199);
        expect(cb).not.toBeCalled();

        jest.runAllTimers();
        await expect(p).resolves.toBeUndefined();
        expect(cb).toBeCalled();
    });

    it('it resolves immediately if time is not set', async () => {
        let cb = jest.fn(),
            p = Promise.delay();
        p.then(cb);

        expect(cb).not.toBeCalled();
        jest.advanceTimersByTime(1);
        await expect(p).resolves.toBeUndefined();
    });

    it('it throws after the specified amount of time when throws argument is set', async () => {
        let cb = jest.fn(),
            throwCb = jest.fn(),
            p = Promise.delay(200, true);
        p.then(cb);
        p.catch(throwCb);
        
        expect(cb).not.toBeCalled();
        expect(throwCb).not.toBeCalled();
        
        jest.advanceTimersByTime(199);
        expect(cb).not.toBeCalled();
        expect(throwCb).not.toBeCalled();

        jest.runAllTimers();
        await expect(p).rejects.toBeUndefined();
        expect(cb).not.toBeCalled();
        expect(throwCb).toBeCalled();
    });
});