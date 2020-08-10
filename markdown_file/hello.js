'use strict';

console.log('Hello, Universe!');


// ブックマークレット
void((function(undefined) {
    alert('test');
}))


// ブックマークレット(jQuery使用)
void((function(f) {
    // jQueryの存在チェックとバージョンチェック
    if(window.jQuery && jQuery().jquery > '2.2.1') {
        // jQueryが存在していればそれをそのまま使う
        f(jQuery);
    }else{
        // <script>タグを生成
        var script = document.createElement('script');

        // cdnjs(https://cdnjs.com) から jQuery 2.2.1 を読み込む
        // プロトコルは省略してドメイン相対パスで
        script.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js';

        // jQuery の読み込みが完了してから本体の処理が実行されるように
        // onload イベントを設定
        script.onload = function() {

            // $をjQueryライブラリに再定義
            var $ = jQuery.noConflict(true);

            // $を渡しつつ本体の処理を実行
            f($);
        };

        // タグを動的に追加
        document.body.appendChild(script);
    }
})(function($, undefined) {

    // バージョン確認
    // ;;; console.log('jQuery: ', $().jQuery);

    // 月日が一桁の場合、頭に０を付ける 例)8→08
    const countNum = (num) => {
        num = num + '';
        if (num.length === 1) num = '0' + num;
        return num;
    };

    // let holidayDates = ['2020/08/10','2020/08/11','2020/09/21','2020/09/22','2020/11/03','2020/11/23'];
    let dt = new Date();
    dt.setDate(dt.getDate() + 3);

    let month, date, next = '';
    dateT = ['日','月','火','水','木','金','土'];
    let day = dateT[dt.getDay()];

    // ３営業日後が土日であれば、日付を＋１
    if (day == '土') dt.setDate(dt.getDate() + 1);
    if (day == '日') dt.setDate(dt.getDate() + 1);

    /* 定休日・祝日であれば日付を＋１(作成中)
    holidayDates.sort();
    for (let i = 0; holidayDates[i]; i++) {
        let dateObj = new Date(holidayDates[i]);
        let diff = dt.getTime() - dateObj.getTime();
        if (Math.floor(diff) == 0) dt.setDate(dt.getDate() + 1);
    }
    */

    // ３営業日後の日付を取得
    month = dt.getMonth() + 1;
    date = dt.getDate();
    day = dateT[dt.getDay()];
    next = countNum(month) + countNum(date);

    let li_first = $('.widget-antennaList-title:first').text();
    alert('Next ' + next + '(' + day + ')' + ' ' + li_first);
}));
