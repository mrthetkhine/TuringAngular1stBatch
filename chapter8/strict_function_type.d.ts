declare let numberOrString: number | string;
declare function withCallback(fn: (a: number | string) => void): void;
declare function withNumberOnly(a: number): void;
declare class WithPrint {
    print(): void;
}
declare class WithPrintAndRun extends WithPrint {
    run(): void;
}
declare function usePrint(fn: (withPrint: WithPrint) => void): void;
