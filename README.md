## 何を載せるか

-   練習サンプルサイトで作った物を載せる
-   随時追加

# 参考サイト

-   https://code-jump.com/
-   随時追加

# 注意点

-   sp 版最小 px は 12px
-   html はなるべく見やすく不要な div はなくす
-   なるべく自分がつまづいた部分を練習する。（今後のため）
-   header は今回高さ pc90px、sp60px

# github 連携

## リポジトリの初期化と連携手順

1. ローカルリポジトリの初期化

    ```bash
    git init
    ```

2. .gitignore ファイルの作成

    - node_modules/
    - .env
    - .DS_Store
      などの不要なファイルを除外

3. 空のコミットメッセージを用意

    ```bash
     git commit --allow-empty -m "🚀"
    ```

4. 初回コミットの作成

    ```bash
    git commit -m "initial commit"
    ```

5. GitHub で新しいリポジトリを作成

    - GitHub のウェブサイトにアクセス
    - 新しいリポジトリを作成（プライベート設定推奨）
    - リポジトリ名を設定

6. 下の方「既存のファイルを...」のコードをコピペしてターミナルに貼り付ける

    ```bash
    <!-- 例 -->
    git remote add origin git@github.com:Saya-Nakaya/test-2506-13.git
     git branch -M main
     git push -u origin main
    ```

7. メインブランチの名前を main に変更（必要な場合）

    ```bash
    git branch -M main
    ```

8. ローカルリポジトリを GitHub にプッシュ
    ```bash
    git push -u origin main
    ```
