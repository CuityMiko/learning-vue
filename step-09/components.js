Vue.component('testp',{
    props:['msg'],
    data(){
        return {
            textinfo:'',
            contents:[]
        }
    },
    methods:{
        add(){
            let _self=this;
            if(_self.textinfo)
                _self.contents.push(_self.textinfo);
        }
    },
    template:`<div>
            <h3>{{ msg }}</h3>
            <p>
                <input type="text" v-model="textinfo" />
            </p>
            <p>{{ textinfo }}</p>
            <p>
                <button class="btn btn-info" @click="add">添 加</button>
            </p>
            <p>
                <ol>
                    <li v-for="(item,index) in contents" :key="index">{{ item }}</li>
                </ol> 
            </p>
            </div>`
})