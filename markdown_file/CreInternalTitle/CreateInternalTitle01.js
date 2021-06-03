'use strict';

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {

        // let li_first = $('.widget-antennaList-title:first').text();
        let li_first = CreateTitle();

        if (request.greeting == 'hello') {
            sendResponse({
                farewell: 'OK',
                title: li_first
            });
        } else {
            // レスポンスがない場合でも、必ず空のオブジェクトを返す。
            sendResponse({
                farewell: 'NG'
            });
        }
    }
);

// 月日が一桁の場合、頭に０を付ける 例)8→08
const countNum = (num) => {
    num = num + '';
    if (num.length === 1) num = '0' + num;
    return num;
};

const CreateTitle = () => {

    // 祝日設定
    const holidayDates = ['2020/8/10','2020/8/11','2020/9/21','2020/9/22','2020/11/3','2020/11/23'];

    let dt = new Date();
    let month, date, next = '';
    let day;
    let dateT = ['日','月','火','水','木','金','土'];
    let businessDayCount = 3;
    let workHoliday = '';

    // ※「Day」は曜日が入っている
    dt.setDate(dt.getDate() + 1);

    // ※「businessDayCount」→ 営業日数(現在は１NextCは基本３営業日)
    // 今日＋１の日付を指定した営業日数分、１日づつ増やしながら休日チェック、土日なら＋１日
    for (let i = 0; i < businessDayCount; i++) {

        // 営業日が休日であれば、日付を＋１
        if (dateT[dt.getDay()] === '土') {
            dt.setDate(dt.getDate() + 1);
        }

        if (dateT[dt.getDay()] === '日') {
            dt.setDate(dt.getDate() + 1);
        }

        // 祝日チェック、祝日なら＋１日
        for (let holiday of holidayDates) {
            if (holiday === ConvDateToStr(dt)) {
                dt.setDate(dt.getDate() + 1);
            }
        }

        dt.setDate(dt.getDate() + 1);
    }

    // NextC当日の祝日チェック
    for (let holiday of holidayDates) {
        if (holiday === ConvDateToStr(dt)) {
            dt.setDate(dt.getDate() + 1);
        }
    }

    alert('NextC:' + ConvDateToStr(dt));

    // 指定した営業日後のNextCを取得して整形
    month = dt.getMonth() + 1;
    date = dt.getDate();
    day = dateT[dt.getDay()];
    next = countNum(month) + countNum(date);

    let li_first;
    li_first = $('.widget-antennaList-title:first').text();

    return 'Next ' + next + '(' + day + '曜日)' + '\n' + li_first + '\n' + workHoliday;
};

// 日付から文字列に変換する関数
const ConvDateToStr = (varDate) => {

    let year_str = varDate.getFullYear();
    let month_str = varDate.getMonth() + 1;
    let day_str = varDate.getDate();
    let format_str = 'YYYY/MM/DD';

    format_str = format_str.replace(/YYYY/g, year_str);
    format_str = format_str.replace(/MM/g, month_str);
    format_str = format_str.replace(/DD/g, day_str);

    return format_str;
};

// var date = new Date();
// var rtn_str = getStringFromDate(date);
// console.log(rtn_str);


//日付から文字列に変換する関数
// function getStringFromDate(date) {

//     var year_str = date.getFullYear();
//     //月だけ+1すること
//     var month_str = 1 + date.getMonth();
//     var day_str = date.getDate();
//     var hour_str = date.getHours();
//     var minute_str = date.getMinutes();
//     var second_str = date.getSeconds();


//     format_str = 'YYYY-MM-DD hh:mm:ss';
//     format_str = format_str.replace(/YYYY/g, year_str);
//     format_str = format_str.replace(/MM/g, month_str);
//     format_str = format_str.replace(/DD/g, day_str);
//     format_str = format_str.replace(/hh/g, hour_str);
//     format_str = format_str.replace(/mm/g, minute_str);
//     format_str = format_str.replace(/ss/g, second_str);

//     return format_str;
// };


// #------------------------------------------------------------------


// メニューをクリック時に実行
// chrome.contextMenus.onClicked.addListener(item => {

//     // バージョン確認
//     // ;;; console.log('jQuery: ', $().jQuery);

//     // var $ = jQuery.noConflict(true);

//     // 月日が一桁の場合、頭に０を付ける 例)8→08
//     const countNum = (num) => {
//         num = num + '';
//         if (num.length === 1) num = '0' + num;
//         return num;
//     };

//     // const holidayDates = ['2020/08/10','2020/08/11','2020/09/21','2020/09/22','2020/11/03','2020/11/23'];
//     let dt = new Date();
//     let month, date, next = '', day;
//     let dateT = ['日','月','火','水','木','金','土'];
//     let businessDay = 3;
//     let dayCounter = 0;

//     // ３営業日後が土日であれば、日付を＋１
//     dt.setDate(dt.getDate() + 1);
//     for (let i = 0; i < businessDay; i++) {
//         day = dateT[dt.getDay()];
//         if (day == '土') {
//             dayCounter++;
//         } else if (day == '日') {
//             dayCounter++;
//         }

//         dt.setDate(dt.getDate() + 1);
//     }

//     if (dayCounter > 0) dt.setDate(dt.getDate() + dayCounter);

//     // ３営業日後の日付を取得
//     month = dt.getMonth() + 1;
//     date = dt.getDate();
//     day = dateT[dt.getDay()];
//     next = countNum(month) + countNum(date);

//     let temp = 'aaaい/ああ';
//     temp = temp.split('/').join('／');

//     var li_first;
//     li_first = $('.widget-antennaList-title:first').text();

//     // alert('Next ' + next + '(' + day + ')' + ':' + temp);
//     alert('Next ' + next + '(' + day + ') :' + li_first + ':' + temp);

//     // alert('Create Internal Title');
//     // console.log(item);
//     // console.log(item.menuItemId);

// });
