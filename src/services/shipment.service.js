// import path from 'path';
const uri = 'http://localhost:3000';

export class ShipmentService {
  static getShipments(page) {
    const endpoint = `/v1/shipments?page=${ page }`;
    return fetch(uri + endpoint).then(response => response.json());
  }
}
