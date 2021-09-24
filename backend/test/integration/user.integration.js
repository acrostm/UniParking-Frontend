// eslint validated

var expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../../app');



describe('integration test on user registration', function () {
    // Set the maximize waiting time to 15 seconds
    this.timeout(15000);
    var thisID = null;
    var addedUser = null;
    describe('getAllUsers', function () {
        context('check if we can get all registered users', function () {
            it('get all users', function (done) {
                supertest(app)
                    .get('/users/fetchUsers')
                    .send({})
                    .end(function (err, res) {
                        expect(res.statusCode).to.equal(200);

                        res.body.forEach(element => {
                            expect(element).to.include.all.keys(['username', 'password']);
                        });
                        done();
                    });
            });
        });
    });

    describe('Check if we can add a user successfully', function () {
        context('check that if we can add an user with both username and password', function () {
            it('post an user with both username and password', async function () {
                let newUser = {
                    firstname: "NBO",
                    lastname: "Parking",
                    username: "NBO999@unimelb.com",
                    email2: "NBO999@unimelb.com",
                    password: "password999",
                    password2: "password999"
                };

                const res = await supertest(app)
                    .post('/users/insertUserFE')
                    .send(newUser);
                expect(res.statusCode).to.equal(200);
                expect(res.type).to.equal('application/json');
                expect(res.body).to.include.all.keys(['username', 'password', 'firstname']);
                thisID = res.body._id;
                addedUser = res.body;

            });
        });


        context('check that if we can add an user without firstname', function () {
            it('POST an user without firstname', async function () {
                let newUser = {

                    lastname: "Parking",
                    username: "testing@unimelb.com",
                    email2: "testing@unimelb.com",
                    password: "password999",
                    password2: "password999"
                };

                const res = await supertest(app)
                    .post('/users/insertUserFE')
                    .send(newUser);
                expect(res.statusCode).to.equal(400);
            });
        });


        context('check that if we can add an user without username', function () {
            it('post an user without username', async function () {
                let newUser = {
                    firstname: "NBO",
                    lastname: "Parking",
                    password: "password999",
                    password2: "password999"
                };

                const res = await supertest(app)
                    .post('/users/insertUserFE')
                    .send(newUser);

                expect(res.statusCode).to.equal(400);
            });
        });
    });





    describe('Check we can fetch the user we just added', function () {
        context('Fetch the newly added user with the correct userID', function () {
            it('GET user with correct _id', async function () {

                const res = await supertest(app)
                    .get('/users/fetchUsers');
                expect(res.statusCode).to.equal(200);
                expect(res.type).to.equal('application/json');
                expect(res.body).to.deep.include(addedUser);

            });
        });
        it('GET user with inccorrect _id', async function () {
            const res = await supertest(app)
                .get('/users/fetchUsers');
            expect(res.statusCode).to.equal(200);
            expect(res.type).to.equal('application/json');
            expect(res.body).to.deep.not.include({
                _id: 'I_AM_FAKE',
                username: 'I_AM_FAKE',
                password: 'I_AM_FAKE',
                __v: 0
            });
        });
    });


    describe('Check if we can delete a user successfully', function () {
        context('check that if we can delete a registered user', function () {
            it('delete a registered user', async function () {

                var deletePoint = "/users/" + thisID;
                const res = await supertest(app)
                    .delete(deletePoint);
                expect(res.statusCode).to.equal(200);
                expect(res.type).to.equal('text/html');
                expect(res.text).to.equal("Deleted successfully");
            });
        });
        context('check that if we can delete a fake user', function () {
            it('delete a unregistered user', async function () {

                var deletePoint = "/users/" + "I_AM_FAKE";

                const res = await supertest(app)
                    .delete(deletePoint);

                expect(res.statusCode).to.equal(400);
            });
        });
    });
});


describe('integration test on  user login', function () {
    // Set the maximize waiting time to 15 seconds
    this.timeout(15000);



    describe('Check if we can log in a user successfully', function () {
        context('check that if we can log in with valid credential', function () {
            it('POST a login request with a pre-existing user', async function () {
                let userCredential = {
                    username: "Integration@Testing.com",
                    password: "testing"

                };

                const res = await supertest(app)
                    .post('/users/userLoginFE')
                    .send(userCredential);
                expect(res.statusCode).to.equal(200);
                expect(res.type).to.equal('application/json');

            });
        });


        context('check what happens when we login with an invalid credential', function () {
            it('POST a login request with a wrong password entered', async function () {
                let userCredential = {
                    username: "Integration@Testing.com",
                    password: "WRONG_PASSWORD"

                };

                const res = await supertest(app)
                    .post('/users/userLoginFE')
                    .send(userCredential);
                expect(res.statusCode).to.equal(400);
            });
        });
    });

});



