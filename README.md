# todo
 最近JavaScriptの勉強を始めたので、知識を身に付けるためにTODOアプリを作りました。<br >
 以下のように、緊急度と重要度によるマトリックスで、タスクを分けて管理できます。<br >
 <img width="1440" alt="todo_img" src="https://user-images.githubusercontent.com/113396639/194988805-02c017ed-4202-48a4-ae78-88623b2cc14a.png">
# URL
https://tmym-a.github.io/todo/<br >
<br >

## 機能一覧
- タスクの追加
- タスクの消去（右クリック）
- 完了したタスクを線で消す（左クリック）

## 使用技術
- HTML
- Bootstrap5
- JavaScript

## 制作背景
 勉強用とはいえ、多少はオリジナリティのあるアプリにしたかったので、少し試行錯誤しました。<br >
 最終的に、昔読んだスティーブン・R.コヴィーの「7つの習慣」という本に、３番目の習慣として書いてあった「緊急度より重要度を優先する」という考え方に基づいて、TODOリストを4つの領域に分けることにしました。そのためには、各領域のTODOリストをインスタンスとして生成した方が効率的だったので、結果的にJavaScriptでのクラスやインスタンスの扱い方についての勉強にもなったと思います。
