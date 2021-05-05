import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor(){
        this._isAuth = true
        this._user = {}
        makeAutoObservable(this)
    }

    //Action
    setIsAuth(boolean) {
        this._isAuth = boolean
    }
    setUser(user){
        this._user = user
    }

    //одноименные гетары, нужны для того чтобы получать переменные 
    //компьютед функций, к ним мы будем обращаться как к обычным объектам. они вызываются только в том случае если переменная которая используется внутри была изменена. своего рода оптимизация
    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }
}