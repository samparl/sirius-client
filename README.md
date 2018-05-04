# WELOME TO SIRIUS

N.B. The commands below are meant to be run in terminal.

* In order to run this application effectively, you will need to be able to hit the back end, which is installed and served separately at: `https://github.com/samparl/sirius-api.git`

* The backend should be hosted on port 3000, which is hard coded into the shipment service used to hit the API. In future versions, the API url will be set from an environmental variable in the build stage preceding deployment.

* This application uses Node version 6.3.0 and npm version 3.10.3. It also requires the global installation of the webpack-dev-server package to serve up the front end locally, so if you don't have it installed, run `npm install -g webpack-dev-server`.

* Now install the local packages with `npm install`.

* To start up the application locally, run `npm run start:dev`, and open a browser window to `http://localhost:3001`.
