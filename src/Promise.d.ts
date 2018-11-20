interface PromiseConstructor {
    /**
     * Returns a promise that resolves after the specified amount of time.  If throws is true, rejects after the
     * specified period instead of resolving.
     * 
     * @param time Amount of time in milliseconds to wait before resolving.  Defaults to 0.
     * @param throws If `true`, causes returned Promise to reject after the specified amount of time rather than
     *               resolving. 
     */
    delay(time: number, throws?: boolean): Promise<void>;
}