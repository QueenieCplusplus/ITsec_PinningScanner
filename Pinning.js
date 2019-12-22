// 2019, 12/22, AM 9:00, by Queenie
//PingAttacks
// 設計 timeout 逾時時間來判斷主機是否還存活，可用或是不可用？


// 設定掃描範圍(上下限和總數)
var min = 1;
var max = 50;
var scanned = 0;
var startTime;

// 平行產生 WebWorkers 數量
var workersNum = 5;
var workerId = 0;
var checkCompleteDelay = 1000;

// 花費五秒為 50 個 IP 建立出 50 個 XmlHttpRequest
var start = new Date().getTime();
var xhrTimeout = 5000;

var pinHosts = [];
var subNet = "192.168.0.0";

// 產生 worker, 並從一資源中取回資料
function genWorker(min, max){

    workId ++;

    // 利用 eval 函數建立工人

}

function checkWorkDone(){
    if(workersNum)

}

function scanSunNet(){
   console.log("Listening on those Valid Hosts on" + subNet + "/24");
   genWorker(1, 50);
   genWorker(51, 100);
   genWorker(101, 150);
}

// 第一次呼叫掃瞄子網域可用主機
scanSunNet();

var checkCompleteInterval = setInterval(function(){
        checkWorkDone()}, checkCompleteDelay);


