/**
 * 提示框
 */
Vue.Component('tipbox',{
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
            else
                $('.tipsmodal').modal('hide');
        }
    },
    mounted(){
        $('.tipsmodal').on('show.bs.modal', function () {
            console.log('小窗体被打开了');
            setTimeout(()=>{
                $('.tipsmodal').modal('hide')
            },2000)
        })
        $('.tipsmodal').on('hide.bs.modal', function () {
            // 执行一些动作...
            console.log('关闭了')
        })
    },
    methods:{
    },
    template:''
})