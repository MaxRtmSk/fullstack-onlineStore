import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor(){
        this._types = [
            {id: 1, name: `Холодильник`},
            {id: 2, name: `Смартфон`}
        ]
        this._brands = [
            {id: 1, name: `Samsung`},
            {id: 2, name: `LG`}
        ]
        this._devices = [
            {id: 1, name: `Iphone 12 pro`, price: 25000, rating: 5, img: "https://timonvs.gallerycdn.vsassets.io/extensions/timonvs/reactsnippetsstandard/1.1.0/1488031987588/Microsoft.VisualStudio.Services.Icons.Default"},
            {id: 2, name: `Iphone 12 pro`, price: 25000, rating: 5, img: "https://timonvs.gallerycdn.vsassets.io/extensions/timonvs/reactsnippetsstandard/1.1.0/1488031987588/Microsoft.VisualStudio.Services.Icons.Default"},
            {id: 3, name: `Iphone 12 pro`, price: 25000, rating: 5, img: "https://timonvs.gallerycdn.vsassets.io/extensions/timonvs/reactsnippetsstandard/1.1.0/1488031987588/Microsoft.VisualStudio.Services.Icons.Default"},
            {id: 4, name: `Iphone 12 pro`, price: 25000, rating: 5, img: "https://timonvs.gallerycdn.vsassets.io/extensions/timonvs/reactsnippetsstandard/1.1.0/1488031987588/Microsoft.VisualStudio.Services.Icons.Default"},
            {id: 5, name: `Iphone 12 pro`, price: 25000, rating: 5, img: "https://timonvs.gallerycdn.vsassets.io/extensions/timonvs/reactsnippetsstandard/1.1.0/1488031987588/Microsoft.VisualStudio.Services.Icons.Default"},
            {id: 6, name: `Iphone 12 pro`, price: 25000, rating: 5, img: "https://timonvs.gallerycdn.vsassets.io/extensions/timonvs/reactsnippetsstandard/1.1.0/1488031987588/Microsoft.VisualStudio.Services.Icons.Default"},
            {id: 7, name: `Iphone 12 pro`, price: 25000, rating: 5, img: "https://timonvs.gallerycdn.vsassets.io/extensions/timonvs/reactsnippetsstandard/1.1.0/1488031987588/Microsoft.VisualStudio.Services.Icons.Default"},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    
    setTypes(types) {
        this._isAuth = types
    }
    setBrands(brands){
        this._user = brands
    }
    setDevices(devices){
        this._user = devices
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }
    
    get types(){
        return this._types
    }

    get brands(){
        return this._brands
    }

    get devices(){
        return this._devices
    }

    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}