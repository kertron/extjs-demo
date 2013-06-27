Ext.define('Demo.view.article.list', {
  extend: 'Ext.grid.Panel',
  id: "article-list",
  alias: 'widget.article-list',
  title: 'All articles',
  store: 'Articles',

  initComponent: function () {
    //note: store removed
    this.columns = [{
      header: 'id',
      dataIndex: 'id',
      flex: 1
    }, {
      header: '作者',
      dataIndex: 'user',
      flex: 1
    }, {
      header: '标题',
      dataIndex: 'title',
      flex: 1
    }, {
      header: '内容',
      dataIndex: 'content',
      flex: 1
    }, {
      header: '发生时间',
      dataIndex: 'happened_at',
      xtype : 'datecolumn',
      format : 'Y-m-d',
      flex: 1
    //}, {
      //header: "操作",
      //xtype: 'actioncolumn',
      //items: [{
        //icon: 'images/edit.ico',
        //action: 'editArticle',
        //handler: function(grid, rowIndex, colIndex) {
          ////获取被操作的数据记录
          //var rec = grid.getStore().getAt(rowIndex);
          //console.log("编辑 " + rec.get('title'));
        //}
      //},{
        //icon: 'images/del.ico',
        //action: 'delArticle'
      //}]
    }];
    //新建按钮
    this.addArticleButton = new Ext.Button({
      icon: 'images/add.ico',
      text: 'Add Article',
      action: 'addArticle'
    });

    this.editArticleButton = new Ext.Button({
      icon: 'images/edit.ico',
      text: 'Edit Article',
      action: 'editArticle',
      disabled: true
    });

    this.deleteArticleButton = new Ext.Button({
      icon: 'images/del.ico',
      text: 'Delete Article',
      action: 'deleteArticle',
      disabled: true
    });

    this.bbar = [this.addArticleButton, this.editArticleButton, this.deleteArticleButton];
    this.callParent(arguments);
  },

  getSelectedArticle: function() {
    return this.getSelectionModel().getSelection()[0];
  },

  enableRecordButtons: function() {
    this.editArticleButton.enable();
    this.deleteArticleButton.enable();
  },

  disableRecordButtons: function() {
    this.editArticleButton.disable();
    this.deleteArticleButton.disable();
  }
});
