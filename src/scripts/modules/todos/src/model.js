var todoList = [];

module.exports = {
    initialize: function(){
        this.load();

    },
    /**
     * 获取数据
     */
    getData: function(){
        return todoList;
    },

    /**
     * 添加数据
     * @param {Object} item
     * @param {Number} [index]
     */
    add: function(item, index){
        //TODO 处理index
        item && todoList.push(item);
        this.save();
        return todoList.length;
    },
    /**
     * 删除数据
     * @param {Number} index
     */
    remove: function(index){
        var res = todoList.splice(index, 1);
        this.save();
        return res;
    },

    get: function(index){
        return todoList[index || 0];
    },

    set: function(index, obj){
        var res = obj && todoList.splice(index || 0, 1, obj);
        if(res){
            this.save();
        }
        return res
    },

    clear: function(){
        todoList = [];
    },

    save: function(){
        localStorage.setItem('d-todos', JSON.stringify(todoList))
    },

    load: function(){
        var dTodos = localStorage.getItem('d-todos');

        if(dTodos){
            todoList = JSON.parse(dTodos)
        }
    },

    getLeftCount: function(){
        var i = 0, list = todoList, len = list.length, count = len;
        if(len){
            for(; i<len; i++){
                if(list[i]._checked){
                    count--;
                }
            }
        }
        return count;
    }
}
