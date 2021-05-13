const mongooes = require('mongoose')

const userSchema = mongooes.Schema({
    name: {
        type: String,
        maxLength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minLength: 5
    },
    lastname: {
        type: String,
        maxLength: 50
    },
    role: { //role = 관리자
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: { //토큰 유효기간
        type: Number
    }
})

const User = mongooes.model('User', userSchema) // userSchema를 하나의 모델 형태로 만듬
module.exports = {} // 다른곳에서도 사용할 수 있게 exports