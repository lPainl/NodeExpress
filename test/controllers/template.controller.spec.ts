import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from './../../src/app'
import sinon from 'sinon'
import TemplateService from '../../src/services/template.service'
import { Entity, Status } from '../../src/types'

chai.use(chaiHttp)

describe('Template Controller Test', () => {
    it('Should get Entity', (done) => {
        const templateServiceMock = sinon.mock(TemplateService)

        templateServiceMock.expects('getEntity').resolves({
            id: 4,
            description: 'Fourth Data',
            status: Status.Completed,
        } as Entity)

        chai.request(app)
            .get('/4')
            .end((err, res) => {
                const response = res.body
                expect(response.id).equal(4)
                expect(response.status).equal(Status.Completed)
                expect(res).to.have.status(200)
                done()
            })
    })

    it('Should throw 400 for Bad Request', (done) => {
        chai.request(app)
            .get('/bad')
            .end((err, res) => {
                expect(res).to.have.status(400)
                done()
            })
    })
})
