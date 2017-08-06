/**
 * 自定义Modal-Form组件
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
Vue.component('bpage',{
    props: {
        // 页码
        pagerconfig: {
            type: Object,
            default:() => {
                return {
                    
                    total:386, // 总条数
                    pagecapacity:[10,20,30,40,50]
                }
            }
        },
    },
    data(){
        return {
            pageindex:1,
            pagesize:10,
        }
    },
    mounted(){
        this.pager(false)
    },
    methods:{
        bindpage(pageindex){
            console.log(pageindex)
        },
        pager(flag){
            let _self=this;
            _self.pagerconfig.pageindex=flag?1:_self.pagerconfig.pageindex;
            let _totalpage=Math.ceil(_self.pagerconfig.total / parseInt(_self.pagerconfig.pagesize));
            let _info=`<span style="font-size:14px;">（共<strong>${_self.pagerconfig.total}</strong>条数据）</span>`
            laypage({
                cont: 'dpager', //容器
                pages: _totalpage, //通过后台拿到的总页数
                curr: _self.pagerconfig.pageindex, //当前页
                skip: true, //是否开启跳页
                skin: '#5c90d2', //加载内置皮肤
                groups: 8, //连续显示分页数
                jump: function (obj, first) { //触发分页后的回调
                    $("#dpager").children().append(_info);
                    if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                        _self.bindpage(obj.curr);
                    }
                }
            });
        },
        changepager(){
            this.pager(true);
        }
    },
    template:`
        <div class="row">
            <div class="pull-left">
                <select class="form-control" v-model="pagerconfig.pagesize" @change="changepager">
                    <option :value="item" v-for="(item,index) in pagerconfig.pagecapacity" :key="index">{{ item }}</option>
                </select>
            </div>
            <div class="pull-right">
                <div id="dpager"></div>
            </div>
        </div>`
})