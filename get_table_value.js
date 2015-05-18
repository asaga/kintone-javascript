//テーブルの値を取得する
//テーブルのフィールドコードはTable、テーブル内フィールドのフィールドコードはfld1とfld2とする
(function () {
    "use strict";

    var events = ['app.record.detail.show'];
    kintone.events.on(events, function (event) {
        var table = event.record.Table.value;
        for(var i = 0; i < table.length; i++){
            console.log(table[i].value.fld1.value + "_" + table[i].value.fld2.value);
        }
    });

})();