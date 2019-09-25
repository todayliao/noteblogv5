KindEditor.plugin('hide4login', function (K) {
    var editor = this, name = 'hide4login';
    // 点击图标时执行
    editor.clickToolbar(name, function () {


        var dialog = K.dialog({
            width: 600,
            height: 430,
            title: '添加隐藏模块（登录可见）',
            body: '<div style="margin:10px;">' +
                '<div id="hide4login" style="height: 300px;"></div>',
            closeBtn: {
                name: '关闭',
                click: function (e) {
                    dialog.remove();
                }
            },
            yesBtn: {
                name: '确定',
                click: function (e) {
                    var finalHtml = "<div data-hide='login' " +
                        "style='margin-bottom: 10px;padding: 15px; line-height: 22px;" +
                        "border-left: 5px solid #F44336;border-radius: 0 2px 2px 0;background-color: #f2f2f2;'>"
                        + hideCommentEditor.txt.html() + "</div><br/>";
                    editor.appendHtml(finalHtml);
                    dialog.remove();
                }
            },
            noBtn: {
                name: '取消',
                click: function (e) {
                    dialog.remove();
                }
            }
        });

        var E = window.wangEditor;
        var hideCommentEditor = new E('#hide4login');
        hideCommentEditor.create()


    });
});