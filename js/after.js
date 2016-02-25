/*< 翌営業日取得 >*/
function after() {
    var strSql = '';
    var strYokuEigyobi = '';
    var strDate = '';
    alert("start func");

    CMNgetCorrectedTime(strDate, function(dtDateTime) {//ADD 2016.02.24 Hisys-Nagumo
	   transaction(function (trans) {
	        strSql = "sql";
	        alert("goal");

	        trans.executeSql(strSql, [], function (trans, r) {
	            if (r.rows.length >= 1) {
	                strYokuEigyobi = "eigyobi";
	            }
	        }); 
	    	}
	    	
		    , function () { }
		    	
		    , function () {
		        // コールバック関数呼び出し
		        cbFunc(strYokuEigyobi);
		    }
	    );
    }
    ); //ADD 2016.02.24 Hisys-Nagumo
}

function transaction(func1){
	alert("exec transaction");
	func1();
}

function CMNgetCorrectedTime(str,func2){
	alert("exec CMNgetCorrectedTime");
	func2();
}