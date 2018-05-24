interface IStatusResult {
    AR: { readonly title: string, value: string | number },
    AP: { readonly title: string, value: string | number },
    DEF: { readonly title: string, value: string | number },
    ABS: { readonly title: string, value: string | number },
    HP: { readonly title: string, value: string | number },
    MP: { readonly title: string, value: string | number },
    RES: { readonly title: string, value: string | number },
}

export default IStatusResult;