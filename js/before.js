/*< 翌営業日取得 >*/
function before() {
    var strSql = '';
    var strYokuEigyobi = '';
    var strDate = '';
    alert("start func");

    transaction(function (trans) {
        CMNgetCorrectedTime(strDate, function(dtDateTime) {
        strSql = "sql";
        alert("goal");

        trans.executeSql(strSql, [], function (trans, r) {
            if (r.rows.length >= 1) {
                strYokuEigyobi = "eigyoubi";
            }
        }); 
        }
        );   
    }
    
    , function () { }
    
    , function () {
        // コールバック関数呼び出し
        cbFunc(strYokuEigyobi);
    }
    );
}

function transaction(func1){
	alert("exec transaction");
	func1();
}
