// import path from 'path';
const uri = 'http://localhost:3000';

export class ShipmentService {
  static getShipments() {
    const endpoint = '/v1/shipments';
    return fetch(uri + endpoint).then(response => response.json());
  }

  static getShipmentsSummary() {
    const endpoint = '/v1/shipments/summary';
    return fetch(uri + endpoint).then(response => response.json());
  }
}
