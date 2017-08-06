/**
 * 自定义Modal组件
 *  配置
 *  modalconfig:{
        open:false,
        title:'',
        msg:'',
        istip:false, // 是否为提醒弹窗
        canceltxt:'',
        confirmtxt:''
    }
    事件：
    confirm:点击确定按钮触发的事件
 */
Vue.component('bmodal',{
    props:['modalconfig'],
    data(){
        return {
            btncls:'btn'
        }
    },
    watch:{
        'modalconfig.open':(newval)=>{            
            if(newval)
                $('.bmodal').modal('show');
        }
    },
    computed:{
        canceltxt(){
            let _self=this;
            if(_self.modalconfig.istip)
                return '确定'
            if(!_self.modalconfig.canceltxt)
                return '取消'
            return _self.modalconfig.canceltxt;
        }
    },
    mounted(){
        let _self=this;
        $('.bmodal').on('hide.bs.modal', function () {
            _self.modalconfig.open=false;
        })
    },
    methods:{
        // 确定
        toConfirm(){
            let obj={ id:11,name:'zhangsan' }
            this.$emit('confirm',obj)
            $('.bmodal').modal('hide');
        }
    },
    template:`
        <div class="bmodal modal fade in" tabindex="-1" data-backdrop="static" data-keyboard="false" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h5 class="modal-title">{{ modalconfig.title || '温馨提示' }}</h5>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                        {{ modalconfig.msg || '' }}
                    </div>
                    <div class="modal-footer">
                        <button type="button" :class="[btncls,{'btn-default':!modalconfig.istip,'btn-primary':modalconfig.istip}]" data-dismiss="modal">{{ canceltxt }}</button>
                        <button type="button" v-show="!modalconfig.istip" class="btn btn-primary" @click="toConfirm">{{ modalconfig.confirmtxt || '确定' }}</button>
                    </div>
                </div>
            </div>
        </div>`
})