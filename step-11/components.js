/**
 * 提示框
 * tipconfig:{
        tiptype:'info',
        open:false,
        msg:''
    }
 */
Vue.component('tipbox',{
    props:['tipconfig'],
    data(){
        return {
        }
    },
    computed: {
        tipstyle(){
            let _self=this;
            let _style='color:#1E90FF';
            switch (_self.tipconfig.tiptype) {
                case 'info':
                    _style='color:#1E90FF';
                    break;
                case 'success':
                    _style='color:#00CD00';
                    break;
                case 'warning':
                    _style='color:#EEDC82';
                    break;
                case 'danger':
                    _style='color:#FF0000';
                    break;
                default:
                    _style='color:#1E90FF';
                    break;
            }
            return _style;
        }
    },
    watch:{
        'tipconfig.open':(newval)=>{            
            if(newval)
                $('.tipsmodal').modal('show');
        }
    },
    mounted(){
        let _self=this;
        $('.tipsmodal').on('show.bs.modal', function () {
            _self.tipconfig.open=false;
            setTimeout(()=>{
                $('.tipsmodal').modal('hide')
            },2000)
        })
    },
    methods:{
    },
    template:`
        <div class="tipsmodal modal fade in bs-example-modal-sm" data-backdrop="false" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <span :style="tipstyle">{{ tipconfig.msg }}</span>
                    </div>
                </div>
            </div>
        </div>
    `
})