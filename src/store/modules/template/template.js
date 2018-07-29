const state={
    topbar:{
        title:"",
        goBackShow:false
    },
    menu:{
        list:[
            {
                name:"apply",
                title:"新申请",
                icon:"icon iconfont icon-xinshenqing"
            },
            {
                name:"myApproval",
                title:"我的审批",
                icon:"icon iconfont icon-shenpi"
            },
            {
                name:"myApply",
                title:"已提交",
                icon:"icon iconfont icon-shangchuan"
            }
        ]
    }
};

const getters={
    /**
     * 获取顶部topbar对象
     */
    topbarGet(state, getters, rootState){
        return state.topbar;
    },
    /**
     * 获取底部菜单menu对象
     */
    menusGet(state, getters, rootState){
        return state.menu;
    }
};

const actions={
    setTopbarTitle(context, payload){
        context.commit("setTopbarTitle",payload);
    },
    setGoBackShow(context,payload){
        context.commit("setGoBackShow",payload);
    }
};

const mutations={
    /**
     * 设置标题
     * @param {*} state 
     * @param {*} payload 
     */
    setTopbarTitle(state, payload) {
        state.topbar.title=payload;
    },
    /**
     * 设置是否显示返回栏
     * @param {*} state 
     * @param {*} payload 
     */
    setGoBackShow(state,payload){
        state.topbar.goBackShow=payload;
    }
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

