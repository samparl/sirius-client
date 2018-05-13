import { SummaryType, ShipmentType } from 'types';

const uri = 'http://localhost:3000';

export class ShipmentService {
  static getShipments(page: number): Promise<ShipmentType[]> {
    const endpoint = `/v1/shipments?page=${ page }`;
    return fetch(uri + endpoint).then(response => response.json());
  }

  static getShipmentsSummary(): Promise<SummaryType> {
    const endpoint = `/v1/shipments/summary`;
    return fetch(uri + endpoint).then(response => response.json());
  }
}
