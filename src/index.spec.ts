import * as http from 'http'

//test index.ts using jest


//test createServer function
describe('createServer', () => {
    it('should return a http server', () => {
        const server = module.require('./index.ts').createServer();
        expect(server).toBeInstanceOf(http.Server);
    });
    }
);

//test if systerInformation is defined
describe('systemInformation', () => {
    it('should be defined', () => {
        //use systemInformation getter
        const systemInformation = module.require('./index.ts').getSystemInformation();
        expect(systemInformation).toBeDefined();

    });
    }
);
