import * as http from 'http'

//test index.ts using jest


//test createServer function
describe('createServer', () => {
    it('should return a http server', () => {
        const server = module.require('./index.ts').createServer();
        expect(server).toBeInstanceOf(http.Server);
        //close the server
        server.close();
    });
    }
);


