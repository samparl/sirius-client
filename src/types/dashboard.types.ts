export class DashboardType {
    shipments: any[];
    summary: SummaryType;
    total_pages: number;

    constructor() {
        this.shipments = [];
        this.summary = new SummaryType();
        this.total_pages = 0;
    }
}

export class SummaryType {
    on_time: number;
    late: number;
    very_late: number;

    constructor() {
        this.on_time = 0;
        this.late = 0;
        this.very_late = 0;
    }
}

export class DateInput {
    startDate: any;
    endDate: any;
    focused: any;

    constructor() {
        this.startDate = null;
        this.endDate = null;
        this.focused = null;
    }
}