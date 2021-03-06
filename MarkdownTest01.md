## はじめに

個人的に使用している設定になります。
Firefoxにもあるようですが、Googleの拡張機能として記載します。
注意点としては以下の場合、うまく機能が働きません。
・テキストボックス等にカーソルがある時
・Googleの拡張機能画面やウェブストアなど特定の画面
・画面の読み込みが完全に終わっていないタブ
・サスペンド状態になっているタブ

そこに注意さえすれば、Chromeのショートカットキーと組み合わせることで十分に使える便利な拡張機能だと思います。

## vomnibar 検索エンジン指定方法

**■設定方法（Custom search engines欄に）**

``` []
y: https://www.youtube.com/results?search_query=%s Youtube
gm: https://www.google.com/maps?q=%s Google maps
az: https://www.amazon.co.jp/s/?field-keywords=%s Amazon
```

**■操作方法**
「Shift + o」でvomnibarを起動後に
y → Space でYoutube検索
gm → Space でGoogle Map検索
az → Space でAmazon検索

## バインドキー一覧

| キー    | アクション                   | 説明                                                     |
|--------|----------------------------|--------------------------------------------------------|
| **j**  | スクロールダウン               | １行づつ下へスクロール。                                     |
| **k**  | スクロールアップ               | １行づつ上へスクロール。                                     |
| **gg** | 一番上にスクロールアップ         |                                                        |
| **G**  | 一番下にスクロールダウン         |                                                        |
| **d**  | 中間までスクロールダウン         | 半画面分、下へスクロール（移動量の変更可）               |
| **u**  | 中間までスクロールアップ         | 半画面分、上へスクロール（移動量の変更可）               |
| h      | 前ページに戻る                 | ※設定を変更（map h goBack）                      |
| l      | 次ページに進む                 | ※設定を変更（map l goForward）                   |
| H      | 左のタブへ移動                 | ※設定を変更（map H previousTab）                 |
| L      | 右のタブへ移動                 | ※設定を変更（map L nextTab）                     |
| **J**  | 左のタブへ移動                 |                                               |
| **K**  | 右のタブへ移動                 |                                               |
| g9     | 一番左のタブへ移動              | ※設定を変更（map g9 firstTab）元はg0             |
| g0     | 一番右のタブへ移動              | ※設定を変更（map g0 lastTab）元はg$（unmap g$）   |
| **^**  | 前に開いていたタブに戻る          | ^を押すと前に操作していたタブへ移動できるので、^を続けて押すことで2つのタブ間を移動できる。     |
| **<<** | タブの順序を左のタブと入れ替える    | ※「Previous patterns」に設定追加                               |
| **>>** | タブの順序を右のタブと入れ替える    | ※「Next patterns」に設定追加                                   |
| **t**  | 新規タブ作成                   |                                                            |
| **x**  | 現在のタブを閉じる              |                                                            |
| **X**  | 閉じたタブを再度開く             | 複数回押下で、一番最後に閉じたタブから順に遡ってタブを開く。              |
| **W**  | 現在のタブを新しいウインドウへ移動  |                                                                         |
| **yt** | 現在のタブを複製して新規タブで開く  |                                                                         |
| **yy** | 現在のタブのURLをコピー          |                                                                        |
| **r**  | リロード                      | 再描画                                                                     |
| f      | リンク先を現在のタブで開く        | リンクの左上にアルファベットヒントが付くリンクヒントモードになり、表示されている１～２文字のアルファベットを入力するとリンクを現在のタブで開く。 |
| **F**  | リンク先を新規タブで開く          | リンクの左上にアルファベットヒントが付くリンクヒントモードになり、表示されている１～２文字のアルファベットを入力するとリンクを新規タブで開く。   |
| yf     | 画面内のリンクのURLをコピー       | リンクヒントを入力することでコピーする。                                                    |
| P      | コピーしたURLを新規タブで開く     |                                                                         |
| **T**  | 開いているタブのリスト表示        | 候補としてタブが最大で10件リストに初期表示される。リストに表示されていないタブもvomnibarに該当条件を入力する事で表示される。ただし、サスペンド状態のタブは認識されない。  |
| B      | ブックマークを新規タブで開く      |                                                                         |
| **O**  | ヒストリー、ブックマークを新規タブで開く   | 履歴やブックマークにない文字列の場合は新規に検索を行う。            |
| **ge** | 現在のタブのURLを編集して開く           |                                                                         |
| gE     | 現在のタブのURLを編集して新しいタブで開く  |                                                                         |
| **gF** | メイン、トップフレームを選択する         | キー入力が効かないな、という時はまずこれを確認。                             |
| gf     | 次のフレーム選択                  |                                                                         |
| gi     | 入力フォームにフォーカス            |                       |
| {num}gi | {num}番目の入力フォームにフォーカス  |                                                                         |
| **?**  | ヘルプ                     |                                                                              |
| vc     | キャレットモード    | v → c と入力することで、ヴィジュアルモード → キャレットモードへと移行する。画面上にカーソルが表示される                |
| v      | ヴィジュアルモード               | テキストの範囲指定が可能になる                                                         |
| V      | ヴィジュアルラインモード            | テキストの範囲指定が行単位で可能になる                                                     |
| y      | ヴィジュアルモードで選択した範囲をコピー    | ※ヴィジュアルモード時                                                            |
| /      | 検索モード                   | 検索文字列を入力してEnterキー押下                                                     |
| n      | 検索ワード次へ                 | ※検索モード時                                                               |
| N      | 検索ワード前へ                 | ※検索モード時                                                               |
| p      | コピーまたは現在のURLを現在のタブで開く   |                                                                         |
| b      | ブックマークを開く                   | 現在のタブで開く                                                             |
| o      | ヒストリー、ブックマークから開く         | 現在のタブで開く                                                            |

---
