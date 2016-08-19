declare namespace Keycode {
    interface CodesMap {
        [key: string]: number;
    }
    
    interface KeycodeStatic {
        (event: Event): string;
        (keycode: number): string;
        (name: string): number;
        code: CodesMap;
        codes: CodesMap;
        aliases: CodesMap;
        names: CodesMap;
        title: CodesMap;
    }
}

declare var codes: Keycode.KeycodeStatic;

export {
    codes
};
