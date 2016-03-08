///<reference path="../bundle.d.ts"/>


import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);


chai.expect(Promise.resolve(3), 'test').to.eventually.equal(3).then(() => {
    console.log('Success');
});

chai.assert.eventually.equal(Promise.resolve(2), 3, 'test').then(() => {
    console.log('Fails');
}).catch(() => {
    console.log('Success');
});


chai.expect(Promise.reject(new Error())).to.be.rejectedWith(Error).then(() => {
    console.log('Success');
});