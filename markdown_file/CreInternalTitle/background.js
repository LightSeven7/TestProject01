'use strict';

chrome.contextMenus.create({
    "title": "01 Internal Title Create",
    "type": "normal",
    "contexts": ["all"],
    "onclick": function(info) {
        chrome.tabs.getSelected(null, function(tab) {
            //# 現在選択中のtab.idが必要なので、getSelectedメソッドの中にsendRequestを記述する。
            chrome.tabs.sendRequest(tab.id, {greeting: "hello"}, function(response) {
                //# content scripts からのレスポンス
                if (response.farewell === 'OK') {
                    alert("■トップタイトル:" + '\n' + response.title);
                }
            });
        });
    }
});
