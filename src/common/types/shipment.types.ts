export interface ShipmentType {
    id: string;
    scheduled_delivery: string;
    projected_delivery: string;
    vendor: Vendor;
    status: string;
}

export interface Vendor {
    id: string;
    name: string;
    email: string;
}