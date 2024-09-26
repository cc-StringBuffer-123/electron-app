export default class CheckUtil {

    private constructor() {
    }

    public static isAlphaNumeric(s?: string): boolean {
        if (s == null || s.length == 0) {
            return false;
        }
        return /^[a-zA-Z0-9]+$/.test(s);
    }

    public static isEmptyString(s?: string): boolean {
        return s === null || s === undefined || s === "" || s.length === 0;
    }

    public static isNotEmptyString(s: string): boolean {
        return !CheckUtil.isEmptyString(s)
    }

    public static isEmpty(s?: any): boolean {
        return s === null || s === undefined || s === "" || s.length === 0;
    }

    public static isNotEmpty(s: any): boolean {
        return !CheckUtil.isEmpty(s)
    }

    public static isNull(v: any | null | undefined): boolean {
        return v === null || v === undefined;
    }

    public static isNotNull(v: any | null | undefined): boolean {
        return !CheckUtil.isNull(v)
    }

    public static isNumeric(s: string): boolean {
        if (s == null || s.length == 0) {
            return false;
        }
        return !isNaN(parseFloat(s)) && isFinite(Number(s));
    }

    public static isCharacter(s: string): boolean {
        if (s == null || s.length == 0) {
            return false;
        }
        return /^[a-zA-Z]+$/.test(s);
    }

    // public static isValidDomain(s: string): boolean {
    //     const domainRegex = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    //     return domainRegex.test(s);
    // }

    // Check if the input is a valid port or port range definition, e.g. 80,443,8080,10000-20000
    public static isValidPortAndPortRangeDefinition(input: string): boolean {
        // Remove any spaces from the input string
        const str = input.replace(/\s+/g, '');

        // Split the input string by comma to get individual port/range strings
        const portArr = str.split(',');

        // Set to keep track of seen ports/ranges
        const seenSet = new Set<number>();

        // Check each individual port/range string for validity and duplication
        for (const item of portArr) {
            // Check if item is a single port number
            if (/^\d+$/.test(item)) {
                const port = parseInt(item);
                if (port < 1 || port > 65535) {
                    return false;
                }
                if (seenSet.has(port)) {
                    return false;
                }
                seenSet.add(port);
            }
            // Check if item is a port range
            else if (/^\d+-\d+$/.test(item)) {
                const range = item.split('-').map(Number);
                const start = range[0];
                const end = range[1];
                if (start < 1 || start > 65535 || end < 1 || end > 65535 || start > end) {
                    return false;
                }
                for (let i = start; i <= end; i++) {
                    if (seenSet.has(i)) {
                        return false;
                    }
                    seenSet.add(i);
                }
            } else {
                // If the item is not a valid port or port range, return false
                return false;
            }
        }

        // If all checks pass, return true
        return true;
    }


    // Check if the input is a valid network port definition, e.g. 80
    public static isValidNetworkPort(port: string): boolean {
        const portNum = parseInt(port);
        return Number.isInteger(portNum) && portNum >= 0 && portNum <= 65535;
    }

    // Check if the input is a valid network port range definition, e.g. 10000-20000
    public static isValidNetworkPortRange(portRange: string): boolean {
        const [startPort, endPort] = portRange.split("-").map(p => parseInt(p));
        return Number.isInteger(startPort) && Number.isInteger(endPort)
            && startPort >= 0 && startPort <= 65535 && endPort >= 0 && endPort <= 65535
            && startPort <= endPort;
    }

    // Check if the first IP is larger than the second IP
    public static isIPRangeValid(ipRange: string) {
        const [startIP, endIP] = ipRange.split('-').map((ip) => ip.trim());

        const startParts = startIP.split('.').map(Number);
        const endParts = endIP.split('.').map(Number);

        for (let i = 0; i < 4; i++) {
            if (startParts[i] > endParts[i]) {
                return false;
            } else if (startParts[i] < endParts[i]) {
                break;
            }
        }

        return true;
    }

}
