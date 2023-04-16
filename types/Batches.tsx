export interface Batch {
    key: string,
    brewDate: number,
    batchNumber: number,
    name: string,
    status: string,
    style: string
}
  
export interface Batches {
    batches: Batch[]
}