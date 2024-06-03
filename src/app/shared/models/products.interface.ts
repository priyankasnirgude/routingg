export interface Iproduct{
    pname : string;
    pid : string;
    pstatus : "In-Progress" | "Dispatched" | "Delivered";
    canReturn : 0 | 1;
}