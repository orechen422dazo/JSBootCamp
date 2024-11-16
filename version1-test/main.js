// 問題２
// 配列の中から一致したパスを指定する
// 一致したパスごとに分岐処理でページを移動するlogを出す
// 存在しないパスがあるときは、404 Not Foundを返す

// ルーティング処理を行う関数
function handleRouting(path) {
    // パスが配列に存在するかチェック
    if (!PAGE_PATH.includes(path)) {
        console.log('404 Not Found - Path:', path);
        return;
    }

    // パスに応じて適切なページログを出力
    switch (path) {
        case '/':
            console.log('Root page - Path:', path);
            break;
        case '/login':
            console.log('Login page - Path:', path);
            break;
        case '/register':
            console.log('Register page - Path:', path);
            break;
        case '/homepage':
            console.log('Homepage - Path:', path);
            break;
        default:
            console.log('404 Not Found - Path:', path);
    }
}

// 定義されたパス
const PAGE_PATH = [
    '/',
    '/login',
    '/register',
    '/homepage'
];

// テスト用のパスarray
const testPaths = [
    '/',
    '/login',
    '/register',
    '/homepage',
    '/unknown'  // 存在しないパスのテスト
];

// 各パスでルーティングをテスト
console.log('=== Router Test Start ===');
testPaths.forEach(path => {
    console.log('\nTesting path:', path);
    handleRouting(path);
});
console.log('\n=== Router Test End ===');