export default interface IVersion {
    tag: string;
    v: number;
    subV?: number;
    date: string;
    descriptions: string[];
}