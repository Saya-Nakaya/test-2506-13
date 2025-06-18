# 導入したい機能
-  swiper 
- 真ん中にスマホ版サイズのmain画面があって、スクロールできるようにする
- 両サイドには背景色か画像を表示させる
- 練習でつくったサイトいっぱい
- 随時追加

## 何を載せるか
- 練習サンプルサイトで作った物を載せる
- 随時追加

# 参考サイト
- https://code-jump.com/
- 随時追加
- 
- 

# 注意点
- sp版最小pxは12px
- htmlはなるべく見やすく不要なdivはなくす
- 今までの案件で使った機能を必ず１個使う。復習も兼ねる。
- なるべく自分がつまづいた部分を練習する。（今後のため）
- headerは今回高さpc90px、sp60px


# github連携

## リポジトリの初期化と連携手順

1. ローカルリポジトリの初期化
   ```bash
   git init
   ```

2. .gitignoreファイルの作成
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

5. GitHubで新しいリポジトリを作成
   - GitHubのウェブサイトにアクセス
   - 新しいリポジトリを作成（プライベート設定推奨）
   - リポジトリ名を設定

6. 下の方「既存のファイルを...」のコードをコピペしてターミナルに貼り付ける
   ```bash
   <!-- 例 -->
   git remote add origin git@github.com:Saya-Nakaya/test-2506-13.git
    git branch -M main
    git push -u origin main
   ```

7. メインブランチの名前をmainに変更（必要な場合）
   ```bash
   git branch -M main
   ```

8. ローカルリポジトリをGitHubにプッシュ
   ```bash
   git push -u origin main
   ```

## 注意事項
- プッシュ前に必ず.gitignoreファイルを確認
- 機密情報（APIキーなど）は.envファイルで管理し、.gitignoreに追加
- コミットメッセージは具体的に記述
- 定期的なバックアップとしてプッシュを実行
