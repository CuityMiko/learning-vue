/**
 * 自定义Alert组件
 * warnalert:{
        title:'警告！',
        warnshow:true,
        info:'',
        alerttype:'success'
    }
 */
Vue.component('alert',{
    props:['warnalert'],
    data(){
        return {
            warncls:'alert alert-dismissable fade in col-md-5'
        }
    },
    methods:{
        close(){
            console.log('sdsda')
            this.warnalert.warnshow=false;
        }
    },
    watch:{
        "warnalert.warnshow":(newval,oldval) => {
            console.log(`newval:${newval},oldval:${oldval}`)
        }
    },
    template:`<div class="row">
                    <div :class="[warncls,{hide:!warnalert.warnshow},'alert-'+warnalert.alerttype]">
                        <button type="button" class="close" aria-hidden="true" @click="close">
                            &times;
                        </button>
                        <strong>{{ warnalert.title }}</strong><slot></slot>
                    </div>
                </div>`
})