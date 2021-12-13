const { demo } = require('../controllers/index')
const { vpDemo } = require('../verifyParams/index')
const routes = [
    {
        method:'get',
        path:'/form',
        controller:demo.post
    },
    {
        method:'post',
        path:'/post/result',
        controller:demo.postResult
    },
    {
        method:'get',
        path:'/test/validparams',
        valid:vpDemo.demo,
        controller:demo.testValid,
    },
    {
        method: 'get',
        path: '/getApiData',
        valid: vpDemo.getQuery,
        controller:demo.getApiData
    }
]

module.exports = routes