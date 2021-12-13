const koaRequest = require('koa2-request')
const post = async (ctx, next) => {
    let html = `    
    <form action="/post/result" method="post">
        <p>你的名字</p>
        <input name="name" type="text" placeholder="请输入名字："/> 
        <br/>
        <p>你的年龄</p>
        <input name="age" type="text" placeholder="请输入车牌号："/>
        <br/> 
        <button>确定不改了哦</button>
     </form> `
    ctx.body = html
}
const postResult = async (ctx, next) => {
    // console.log(ctx,ctx.request.body)
    const {name, age} = ctx.request.body
    if (name && age) {
        ctx.body = `${name}的年龄为${age}。`
        ctx.cookies.set(
            'name', name,
            {
                domain: 'localhost',  // 写cookie所在的域名
                path: '/post/result',       // 写cookie所在的路径
                maxAge: 10 * 60 * 1000, // cookie有效时长
                expires: new Date('2021-09-17'),  // cookie失效时间
                httpOnly: false,  // 是否只用于http请求中获取
                overwrite: false  // 是否允许重写
            }
        )
    } else {
        ctx.body = '你填写的信息有误!'
    }
}

const getApiData = async (ctx) => {
    const type = ctx.query.type
    const nodeCollectionHash = ctx.query.nodeCollectionHash
    const nodeId = ctx.query.nodeId
    let res = await koaRequest({
        url: `https://nft-metaservice.dappradar.com/api/nft-metadata/${type}/${nodeCollectionHash}/${nodeId}?currency=USD&fiat=USD`,
        method: 'get',
    });
    ctx.body = JSON.parse(res.body)
}

// 参数校验
const testValid = async ctx => {
    const {name, age} = ctx.request.query
    ctx.body = name + age
}


module.exports = {
    post,
    postResult,
    testValid,
    getApiData
}