import supertest from 'supertest';
import {expect} from 'chai';
import { interfaces, it } from 'mocha';
const request = supertest('https://private-anon-87a2e80e45-swyftx.apiary-mock.com/');

let token

describe("Swyftx QE Test", function (done) {
   it("Retrieves a new access token", function(){
       return request.post('auth/refresh/')
       .set('Content-Type','application/json')
       .send({apiKey: "7r4hTa2Yb..."})
       .then((res) => {
        expect(res.body).to.not.be.empty;
        token = res.body.accessToken;
       });      
    });

   it("Get Profile", function(){
       return request.get('user/')
       .set('Content-Type','application/json')
       .set(`Authorization`, `Bearer ${token}`)
       .then((res) => {
        expect(res.body).to.not.be.empty;
        expect(res.body.profile.email).to.eq('john.doe@example.com');
        expect(res.body.profile.name.first).to.eq('John');
        expect(res.body.profile.name.last).to.eq('Doe');
       });
    });

    it("Get Balance", function(){
        return request.get('user/balance/')
        .set('Content-Type','application/json')
        .set(`Authorization`,`Bearer ${token}`)
        .then((res) => {
          expect(res.body)
        });
    });   

});
