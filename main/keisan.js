window.onload = function(){
rog=["log"];

}

function calc_sum(){
tarn = parseInt(document.tinatukeisan['tarn'].value);
name = document.tinatukeisan['name'].value;
sute = document.tinatukeisan['sute'].value;
dais = parseInt(document.tinatukeisan['dais'].value);
BW = parseInt(document.tinatukeisan['BW'].value);
bumon = BW;

number = document.tinatukeisan['teki'].value;
pani_name = document.tinatukeisan['pani_name'].value;
pani_type = document.tinatukeisan['pani_type'].value;
pani_sute = parseInt(document.tinatukeisan['pani_dais'].value);

pale = document.tinatukeisan['pale'].value;
kanst = document.tinatukeisan['kanst'].value;
    geigeki = document.tinatukeisan['geigeki'].value;;

    geican = 0;
    geihan = Math.floor(Math.random() * 10);
    geisai = Math.floor(Math.random() * 100);
    geimei = 0;
    geideme = 0;

hiduke = new Date();
twetext="";

    Esute = 0;

    //依頼ノマ
    Iname = ["子猫蝶", "執行人Ｉ", "デュラハン", "花守"];
    Isute = [40, 54, 55, 50];
    Ideme = 0;
    Ikeisan = 0;
    Iseihi = 0;
    Ilog = ["","","",""];
    Itext = '';
    Ilogs = "";
    Ikekka = "";

    //依頼取得
   getirai();


Mkurifan ="";
Ekurifan ="";

Mkeisan=0;
Mseihi=0;
Ekeisan=0;
Eseihi=0;
seike=0;
goukei="";
Khantei=0;
Phantei=0;
double="";
kansei="";

Mfan=0;
Mkuri=0;
Efan=0;
Ekuri=0;

dame=0;
dame1=0;
dame2=0;
dame3=0;

    daissyu = 0;

    rogcount = rog.length + 1;




ECid=[0,999,29,01,37,50,39,22,15,45,34,32,19,09,20,21,03,23,36,60,44,43,10,13,59];
ECname=["無効","pani_name","愛ある温もり","完璧主義者のメイド","無色不透明","チャンディエン","ドッペルゲンガー","太陽の欠片","執行人Ｉ","皮だけのアリス","莞爾の崇拝者","信義のデュラハン","紅蓮","めでたしめでたし","枯れた神木","魅惑の夢の王","慈愛の女神","回回回","静かで大きな海","アウラ","狂えるファヴニール","「セラヒム」","深淵","永遠の子供","魔王"];
ECsute=[0,99,15,20,15,30,99,35,54,48,53,55,66,69,70,70,63,60,45,15,55,55,65,48,75];
EClank=[1,99,1,2,2,2,2,3,4,4,4,4,5,5,5,5,5,5,4,1,4,4,5,4,5];
ECfanc=["panisyo","panisyo","Z29","Z01","Z37","Z50","Z39","Z22","Z15","Z45","Z34","Z32","Z19","Z09","Z20","Z21","Z03","Z23","Z36","Z60","Z44","Z43","Z10","Z13","Z59"];


Esute=ECsute[number];

panihan = ECsute[number];
if(panihan ==99){
Esute=pani_sute;

}
    //迎撃かどうか
    if (geigeki == 1) {
        geican = 1;
    }

    
    //ダイスロール、ステ30未満、ステ50未満はダイス減少
    if (dais <= 29) {
        daissyu = 1;
    } else {
        if (dais <= 49) {
            daissyu = 2;
        } else {

            daissyu = 0;

        }

    }


    Edeme = Math.floor(Math.random() * 100+1);
    if (daissyu == 0) {

Mdeme = Math.floor( Math.random() * 100+1);



    }
    if (daissyu == 1) {

        Mdeme = Math.floor(Math.random() * 30+1);


    }
    if (daissyu == 2) {

        Mdeme = Math.floor(Math.random() * 50+1);


    }
    //ここまで


Hsute="" ;
Hteki="" ;

Dhan = 0;
sokusi="";
ransu=0;
tokusyu="";
Thantei=1;

    //クリファン判定
if(Mdeme >= 96) {
Mkurifan = "ﾌｧﾝﾌﾞﾙ";
Mfan = 1;
}
if(Mdeme <= 5) {
Mkurifan = "ｸﾘﾃｨｶﾙ";
Mkuri = 1;
}
if(Mdeme == 0) {
Mkurifan = "ﾌｧﾝﾌﾞﾙ";
Mfan = 1;
}

if(Edeme >= 96) {
Ekurifan = "ﾌｧﾝﾌﾞﾙ";
Efan=1;
}
if(Edeme <= 5) {
Ekurifan = "ｸﾘﾃｨｶﾙ";
Ekuri=1;
}
if(Edeme == 0) {
Ekurifan = "ﾌｧﾝﾌﾞﾙ";
Efan=1;
}



if(sute　== "yuki") Hsute = "勇気";
if(sute　== "sintyo") Hsute = "慎重";
if(sute　== "zisei") Hsute = "自制";
if(sute　== "seigi") Hsute = "正義";



ransu=0;
tokusyu="";

    sansyo();

    
//ダイス成功・失敗
    if (Mfan == 1) {
        Mseihi = 0;
    } else {
        if (Ekuri == 1) {
            Mseihi = 0;
        } else {
            Mkeisan = dais - Mdeme;
            if (Mkeisan >= 0) {
                Mseihi = 1;
            } else {
                Mseihi = 0;
            }
        }
    }

    if (Efan == 1) {
        Eseihi = 0;
    } else {
        if (Mkuri == 1) {
            Eseihi = 0;
        } else {
            Ekeisan = Esute - Edeme;
            if (Ekeisan >= 0) {
                Eseihi = 1;
            } else {
                Eseihi = 0;
            }
        }
    }
    //カンストルール
    if (Mdeme >= 50) {
        if (kanst == 1) {
            Khantei = Math.floor(Math.random() * 10);
            if (Khantei >= 5) {
                Mseihi = 0;
            }
        }
    }


seike = Mseihi - Eseihi;
//自分成功・相手失敗
    if (seike == 1) {
        goukei = "成功、一発";
        Dhan = 0;
        //PALE２回攻撃
        if (Mkuri == 1) {
            if (pale == 1) {
                Phantei = Math.floor(Math.random() * 10);
                if ((Phantei % 2) == 0) {
                    double = "２回攻撃";
                    
                }
            }
        }
    }
//自分成功・相手成功
    if (seike == 0) {
        goukei = "失敗";
        Dhan = 0;
    }
//自分失敗・相手失敗
    if (seike == 0) {
        goukei = "失敗";
        Dhan = 0;
    }


//自分失敗・相手成功
    if (seike == -1) {
        goukei = "失敗、ダメージ";
        Dhan = 1;
    }



 //迎撃部門効果
    if (seike == -1) {

        if (geican == 1) {
            if ((geihan % 2) == 0) {
                
                geideme = dais - geisai;
                if (geideme >= 0) {
                    Dhan = 0;
                    goukei = "回避、反撃成功";
                } else {
                    Dhan = 0;
                    goukei = "回避成功、反撃失敗";
                }
            } else {
                goukei = "回避失敗、ダメージ";
            } 
        }
    }
//カンスト時の表記用
    if (kanst == 1) {
        if (Khantei >= 5) {
            kansei = "失敗2";
        }
        if (Khantei <= 4) {
            kansei = "成功1";
        }


    }
if(Mdeme <=49){
  kansei="";
}
if(Mdeme >= 96){
  kansei="";
}
if(Mdeme == 0){
  kansei="";
    }



    sansyo();



damehyo =dame;
if(dame ==0){
damehyo ="";
}
damehyo3 ="";
if(dame3 >=1){
 damehyo3=dame3 +"ﾀﾞﾒ"

}

//ダイスログ出力
    dise_log();


//ツイート文生成
if(bumon==0){
    document.tinatukeisan['kekka'].value = "@DeusEXZZZ12\n#Z社_鎮圧ロール \nターン" + tarn + "\n" + name + "→" + Hteki + "\n" +"‼️ 部門移動中、ターン" + tarn + "終了";
    twetext = "@DeusEXZZZ12\n#Z社_鎮圧ロール \nターン" + tarn + "\n" + name + "→" + Hteki + "\n" +"‼️ 部門移動中、ターン" + tarn + "終了";
return false;

}else{

    document.tinatukeisan['kekka'].value = "@DeusEXZZZ12\n#Z社_鎮圧ロール \nターン" + tarn + "\n" + name + "→" + Hteki + "\n"+ Ilogs + Hsute +  dais + ":" + Mdeme + Mkurifan + kansei +"\n"  + "相手" + Esute + ":" + Edeme + Ekurifan + "\n" + goukei + double + damehyo +tokusyu+damehyo3+ sokusi + "\n" + Ikekka +"ターン" + tarn + "終了";
twetext="@DeusEXZZZ12\n#Z社_鎮圧ロール \nターン"+ tarn + "\n" +  name + "→" + Hteki + "\n" + Ilogs + Hsute +  dais + ":" + Mdeme + Mkurifan + kansei +"\n"  + "相手" + Esute + ":" + Edeme + Ekurifan + "\n" + goukei + double + damehyo +tokusyu+damehyo3+ sokusi + "\n" + Ikekka + "ターン" + tarn + "終了";
return false;

}

}


//ツイート
function openTwitter(tarn,name,Hteki,Hsute,dais,Mdeme,Mkurifan,kansei,Esute,Edeme,Ekurifan,goukei,double,damehyo,tokusyu,damehyo3,sokusi) {

var turl = "https://twitter.com/intent/tweet?text="+ encodeURIComponent(twetext);
window.open(turl);
}

//ダイスログ処理
function dise_log(){

  for( i=1 ;i<rogcount; i++){
    if(rog[i]==null){
      if(bumon==0){
        rog[i]="<li>Tarn"+tarn+":移動中"+":"+hiduke.toLocaleString()+"</li>";

      }else{
          rog[i] = "<li>Tarn" + tarn + ":自分" + Mdeme + "(" + kansei + ")" + ":相手" + Edeme + ":" + damehyo + tokusyu + damehyo3 + sokusi+":" + geican + ":" + geihan + ";" + geisai + ":" + geimei  +":"+hiduke.toLocaleString()+"</li>";
}
    }
}
rogtext =rog.join("");
target = document.getElementById("comelog");
target.innerHTML = rogtext;
rogcount+=1;
}


//各ノマ呼び出し
function sansyo() {
    if (number == 0) f_panisyo();
    if (number == 1002) f_panisyo2();
    if (number == 1003) f_panisyo3();
    if (number == 1004) f_panisyo4();
    if (number == 1005) f_panisyo5();
    if (number == 1) f_panisyo();
    if (number == 2) f_Z29();
    if (number == 3) f_Z01();
    if (number == 4) f_Z37();
    if (number == 5) f_Z50();
    if (number == 6) f_Z39();
    if (number == 7) f_Z22();
    if (number == 8) f_Z15();
    if (number == 9) f_Z45();
    if (number == 10) f_Z34();
    if (number == 11) f_Z32();
    if (number == 12) f_Z19();
    if (number == 13) f_Z09();
    if (number == 14) f_Z20();
    if (number == 15) f_Z21();
    if (number == 16) f_Z03();
    if (number == 17) f_Z23();
    if (number == 18) f_Z36();
    if (number == 19) f_Z60();
    if (number == 20) f_Z44();
    if (number == 21) f_Z43();
    if (number == 22) f_Z10();
    if (number == 23) f_Z13();
    if (number == 24) f_Z59();
    if (number == 25) f_Z54();
    if (number == 26) f_Z49();
    if (number == 27) f_Z666a();
    if (number == 28) f_Z666b();
    if (number == 29) f_Z34();
    if (number == 30) f_Z06();
    if (number == 31) f_Z04();
    if (number == 32) f_Z42a();
    if (number == 33) f_Z42b();
    if (number == 34) f_Z47a();
    if (number == 35) f_Z47b();
    if (number == 36) f_Z47c();
    if (number == 37) f_Z52();
    if (number == 38) f_Z18();
    if (number == 39) f_Z37();
    if (number == 40) f_O83();
    if (number == 41) f_O93();
    if (number == 42) f_O69();
    if (number == 43) f_O64();
    if (number == 44) f_O95();
    if (number == 45) f_O97();
    if (number == 46) f_O74();
    if (number == 47) f_O78();
    if (number == 48) f_O107();
    if (number == 49) f_O104();
    if (number == 50) f_O94();
    if (number == 51) f_O96();
    if (number == 52) f_O113();
    if (number == 53) f_O100();
    if (number == 54) f_O70();
    if (number == 55) f_O88();
    if (number == 56) f_O98a();
    if (number == 57) f_O98b();


}


//依頼処理
function getirai() {
    var checks = document.getElementsByClassName('irai');
    
    irai = [0,0,0,0];

    for (i = 0; i < 4; i++) {
        if (checks[i].checked === true) {
            irai[i] += checks[i].value;
            if (irai[i].checked = !0) {
                Ideme = Math.floor(Math.random() * 100 + 1);
                Ikeisan = Isute[1] - Ideme;
                if (Ikeisan >= 0) {
                    Iseihi+= 1;
                } else {
                    Iseihi+= 0;
                }
                Ilog[i] += Iname[i] + Isute[i] + ":" + Ideme + "\n";
            }
        }
    }
    Ilogs = Ilog.join('');
    if (Iseihi >= 1) {
        Ikekka = "参戦ノマ成功" + Iseihi + "回\n";

    }
    
}





function f_panisyo(){
Hteki = pani_name;
    Esute = pani_sute;
    if (seike == 0) {
        if (Mseihi == 1) {
            goukei = "両成功";
            Dhan = 0;
        }
    }
if(Dhan == 1){
dame = Math.floor( Math.random() * 4 +1);
}
if(Dhan == 1){if(Mfan == 1){
dame = Math.floor( Math.random() * 4 +1)*2;
}}
}
function f_panisyo2() {
    Hteki = pani_name;
    Esute = pani_sute;
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 4 + 1);
        dame2 = Math.floor(Math.random() * 4 + 1);
        dame = (dame1 + dame2);
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 4 + 1);
            dame2 = Math.floor(Math.random() * 4 + 1);
            dame = (dame1 + dame2) * 2;
        }
    }
    
}
function f_panisyo3() {
    Hteki = pani_name;
    Esute = pani_sute;
    if (Dhan == 1) {
        dame = Math.floor(Math.random() * 10 + 1);
        
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame = Math.floor(Math.random() * 10 + 1) * 2;
           
        }
    }
}
function f_panisyo4() {
    Hteki = pani_name;
    Esute = pani_sute;
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 6 + 1);
        dame2 = Math.floor(Math.random() * 6 + 1);
        dame = (dame1 + dame2);
        
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 6 + 1);
            dame2 = Math.floor(Math.random() * 6 + 1);
            dame = (dame1 + dame2) * 2;
           
        }
    }
}
function f_panisyo5() {
    Hteki = pani_name;
    Esute = pani_sute;
    if (seike == 0) {
        if (Mseihi == 1) {
            goukei = "両成功";
            Dhan = 0;
        }
    }
    if (Dhan == 1) {
        dame = Math.floor(Math.random() * 20 + 1);
     
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame = Math.floor(Math.random() * 20 + 1) * 2;
          
        }
    }
}

function f_Z29(){
Hteki = "愛ある温もり";
Esute = 15;
if(Dhan == 1){
dame = 0;
}
if(Dhan == 1){if(Mfan == 1){
dame = 0;
}}
}

function f_Z01(){
Hteki = "完璧主義者のメイド";
Esute = 20;
if(Dhan == 1){
dame1 = Math.floor( Math.random() * 4 +1);
dame2 = Math.floor( Math.random() * 4 +1);
dame = (dame1 + dame2);
tokusyu ="白";
}
if(Dhan == 1){if(Mfan == 1){
dame1 = Math.floor( Math.random() * 4 +1);
dame2 = Math.floor( Math.random() * 4 +1);
dame = (dame1 + dame2)*2;
tokusyu ="白";
}}
}

function f_Z37(){
Hteki = "無色不透明";
Esute = 15;
if(Dhan == 1){
dame1 = Math.floor( Math.random() * 4 +1);
dame2 = Math.floor( Math.random() * 4 +1);
dame = (dame1 + dame2);
tokusyu ="赤";
}
if(Dhan == 1){if(Mfan == 1){
dame1 = Math.floor( Math.random() * 4 +1);
dame2 = Math.floor( Math.random() * 4 +1);
dame = (dame1 + dame2)*2;
tokusyu ="赤";
}}
}

function f_Z50(){
Hteki = "チャンディエン";
Esute = 30;
ransu =  Math.floor( Math.random() * 6+1);
if(ransu ==6){

if(Dhan == 1){
dame1 = Math.round(Math.floor( Math.random() * 4 +1)*1.2);
dame2 = Math.round(Math.floor( Math.random() * 4 +1)*1.2);
dame = (dame1 + dame2);
tokusyu ="黒";
}
if(Dhan == 1){if(Mfan == 1){
dame1 = Math.round(Math.floor( Math.random() * 4 +1)*1.2);
dame2 = Math.round(Math.floor( Math.random() * 4 +1)*1.2);
dame = (dame1 + dame2)*2;
tokusyu ="黒";
}}

}else{

if(Dhan == 1){
dame1 = Math.floor( Math.random() * 4 +1);
dame2 = Math.floor( Math.random() * 4 +1);
dame = (dame1 + dame2);
tokusyu ="赤";
}
if(Dhan == 1){if(Mfan == 1){
dame1 = Math.floor( Math.random() * 4 +1);
dame2 = Math.floor( Math.random() * 4 +1);
dame = (dame1 + dame2)*2;
tokusyu ="赤";
}}

}
}


function f_Z39(){
Hteki = "ドッペルゲンガー";
Esute = 22;
if(Dhan == 1){
dame1 = Math.floor( Math.random() * 4 +1);
dame2 = Math.floor( Math.random() * 4 +1);
dame = (dame1 + dame2);
tokusyu ="黒";
}
if(Dhan == 1){if(Mfan == 1){
dame1 = Math.floor( Math.random() * 4 +1);
dame2 = Math.floor( Math.random() * 4 +1);
dame = (dame1 + dame2)*2;
tokusyu ="黒";
}}

}

function f_Z22(){
Hteki = "太陽の欠片";
Esute = 35;
if(Dhan == 1){
dame = Math.floor( Math.random() * 10 +1);
tokusyu ="黒";
}
if(Dhan == 1){if(Mfan == 1){
dame = Math.floor( Math.random() * 10 +1)*2;
tokusyu ="黒";
}}
}

function f_Z15(){
Hteki = "執行人Ｉ";
Esute = 54;
if(Dhan == 1){
dame1 = Math.floor( Math.random() * 6 +1);
dame2 = Math.floor( Math.random() * 6 +1);
dame = (dame1 + dame2);
tokusyu ="赤";
}
if(Dhan == 1){if(Mfan == 1){
dame1 = Math.floor( Math.random() * 6 +1);
dame2 = Math.floor( Math.random() * 6 +1);
dame = (dame1 + dame2)*2;
tokusyu ="赤";
}}
if(Mdeme ==48)sokusi="即死";
if(Edeme ==48)sokusi="即死";
}

function f_Z45(){
Hteki = "皮だけのアリス";
Esute = 48;
if( ( tarn % 3 ) == 0 ) {
sokusi = "アリス移動、1d20ダメージ";
}
if(Dhan == 1){
dame1 = Math.floor( Math.random() * 6 +1);
dame2 = Math.floor( Math.random() * 6 +1);
dame = (dame1 + dame2);
tokusyu ="黒";
}
if(Dhan == 1){if(Mfan == 1){
dame1 = Math.floor( Math.random() * 6 +1);
dame2 = Math.floor( Math.random() * 6 +1);
dame = (dame1 + dame2)*2;
tokusyu ="黒";
}}
}

function f_Z34() {
    Hteki = "莞爾の崇拝者";
    Esute = 53;
    if (Dhan == 1) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            tokusyu = "部門全体に2d6白";
        }
        if (ransu == 2) {
            dame1 = Math.floor(Math.random() * 6 + 1);
            dame2 = Math.floor(Math.random() * 6 + 1);
            dame = Math.round((dame1 + dame2) * 2);
            tokusyu = "白";
        }
        if (Dhan == 1) {
            if (Mfan == 1) {
                dame1 = Math.floor(Math.random() * 6 + 1);
                dame2 = Math.floor(Math.random() * 6 + 1);
                dame = Math.round((dame1 + dame2) * 2 * 2);
                tokusyu = "白";
            }
        }
      if (ransu == 3) {
        dame = 0;
        tokusyu = "殺人性パニック";
     }
}
}

function f_Z32(){
Hteki = "信義のデュラハン";
Esute = 55;
if(seike <= 0 ) {
ransu =  Math.floor( Math.random() * 6+1);
if(ransu ==6){
tokusyu="鎮圧参加者全員に2d6黒";
}else{
if(Dhan == 1){
dame1 = Math.floor( Math.random() * 6 +1);
dame2 = Math.floor( Math.random() * 6 +1);
dame = (dame1 + dame2);
tokusyu ="黒";
}
if(Dhan == 1){if(Mfan == 1){
dame1 = Math.floor( Math.random() * 6 +1);
dame2 = Math.floor( Math.random() * 6 +1);
dame = (dame1 + dame2)*2;
tokusyu ="黒";
}}
}
}}
function f_Z19(){
Hteki = "紅蓮";
Esute = 66;
if(Dhan == 1){
dame = Math.floor( Math.random() * 20 +1);
tokusyu ="赤";
}
if(Dhan == 1){if(Mfan == 1){
dame = Math.floor( Math.random() * 20 +1)*2;
tokusyu ="赤";
}}
}

function f_Z09(){
Hteki = "めでたしめでたし";
Esute = 69;
if(Dhan == 1){
dame = 0;
tokusyu ="青";
}
if(Dhan == 1){if(Mfan == 1){
dame = 0;
tokusyu ="即死";
}}
}

function f_Z20(){
Hteki = "枯れた神木";
Esute = 70;
if(Dhan == 1){
dame = Math.floor( Math.random() * 20 +1);
tokusyu ="黒";
}
if(Dhan == 1){if(Mfan == 1){
dame = Math.floor( Math.random() * 20 +1)*2;
tokusyu ="黒";
}}
}

function f_Z21(){
Hteki = "魅惑の夢の王";
Esute = 70;
if(Dhan == 1){
dame = 0;
tokusyu ="青";
}
if(Dhan == 1){if(Mfan == 1){
dame = 0;
tokusyu ="即死";
}}
}

function f_Z03(){
Hteki = "慈愛の女神";
Esute = 63;
if(Dhan == 1){
dame = Math.floor( Math.random() * 20 +1);
tokusyu ="白";
}
if(Dhan == 1){if(Mfan == 1){
dame = Math.floor( Math.random() * 20 +1)*2;
tokusyu ="白";
}}
}

function f_Z23(){
Hteki = "回回回";
Esute = 60;
ransu = Math.floor( Math.random() * 4);
if(ransu ==0){
if(Dhan == 1){
dame = Math.floor( Math.random() * 20 +1);
tokusyu ="赤、鎮圧ロール一回封印";
}
if(Dhan == 1){if(Mfan == 1){
dame = Math.floor( Math.random() * 20 +1)*2;
tokusyu ="赤、鎮圧ロール一回封印";
}}
}
if(ransu ==1){
if(Dhan == 1){
dame = Math.floor( Math.random() * 20 +1);
tokusyu ="白、自制-10";
}
if(Dhan == 1){if(Mfan == 1){
dame = Math.floor( Math.random() * 20 +1)*2;
tokusyu ="白、自制-10";
}}
}
if(ransu ==2){
if(Dhan == 1){
dame = Math.floor( Math.random() * 20 +1);
tokusyu ="黒、装備効果と補正封印";
}
if(Dhan == 1){if(Mfan == 1){
dame = Math.floor( Math.random() * 20 +1)*2;
tokusyu ="黒、装備効果と補正封印";
}}
}
if(ransu ==3){
if(Dhan == 1){
dame = 0;
tokusyu ="青、成功率30固定";
}
if(Dhan == 1){if(Mfan == 1){
dame = 0;
tokusyu ="即死";
}}
}
0
}
function f_Z36(){
Hteki = "静かで大きな海";
Esute = 45;
if(Dhan == 1){
dame1 = Math.floor( Math.random() * 6 +1);
dame2 = Math.floor( Math.random() * 6 +1);
dame = (dame1 + dame2);
tokusyu ="白";
}
if(Dhan == 1){if(Mfan == 1){
dame1 = Math.floor( Math.random() * 6 +1);
dame2 = Math.floor( Math.random() * 6 +1);
dame = (dame1 + dame2)*2;
tokusyu ="白";
}}
}
function f_Z60(){
Hteki = "アウラ";
Esute = 15;
if(Dhan == 1){
dame = Math.floor( Math.random() * 4 +1);
tokusyu ="赤";
}
if(Dhan == 1){if(Mfan == 1){
dame = Math.floor( Math.random() * 4 +1)*2;
tokusyu ="赤";
}}
}
function f_Z44(){
Hteki = "狂えるファヴニール";
Esute = 55;
if(Dhan == 1){
dame1 = Math.floor( Math.random() * 6 +1);
dame2 = Math.floor( Math.random() * 6 +1);
dame = (dame1 + dame2);
tokusyu ="赤";
}
if(Dhan == 1){if(Mfan == 1){
dame1 = Math.floor( Math.random() * 6 +1);
dame2 = Math.floor( Math.random() * 6 +1);
dame = (dame1 + dame2)*2;
tokusyu ="赤";
}}
}
function f_Z43(){
Hteki = "「セラヒム」";
Esute = 55;
if(Dhan == 1){
dame1 = Math.floor( Math.random() * 6 +1);
dame2 = Math.floor( Math.random() * 6 +1);
dame = (dame1 + dame2);
tokusyu ="黒";
}
if(Dhan == 1){if(Mfan == 1){
dame1 = Math.floor( Math.random() * 6 +1);
dame2 = Math.floor( Math.random() * 6 +1);
dame = (dame1 + dame2)*2;
tokusyu ="黒";
}}
}
function f_Z10(){
Hteki = "深淵";
Esute = 65;
if( ( tarn % 2 ) != 0 ) {
sokusi = "鳴き声";
dame3 =  Math.floor( Math.random() * 10 +1)
}
if(Dhan == 1){
dame = Math.floor( Math.random() * 20 +1);
tokusyu ="黒";
}
if(Dhan == 1){if(Mfan == 1){
dame = Math.floor( Math.random() * 20 +1)*2;
tokusyu ="黒";
}}
}
function f_Z13(){
Hteki = "永遠の子供";
Esute = 48;
if(Dhan == 1){
dame1 = Math.floor( Math.random() * 6 +1);
dame2 = Math.floor( Math.random() * 6 +1);
dame = (dame1 + dame2);
tokusyu ="赤";
}
if(Dhan == 1){if(Mfan == 1){
dame1 = Math.floor( Math.random() * 6 +1);
dame2 = Math.floor( Math.random() * 6 +1);
dame = (dame1 + dame2)*2;
tokusyu ="赤";
}}
}
function f_Z59(){
Hteki = "魔王";
Esute = 75;
if(Dhan == 1){
dame = 0;
tokusyu ="青";
}
if(Dhan == 1){if(Mfan == 1){
dame = 0;
tokusyu ="即死";
}}
}

function f_Z54() {
    Hteki = "魔法少女";
    Esute = 75;
    if (Dhan == 1) {
        dame = Math.floor(Math.random() * 20 + 1);
        tokusyu = "武器依存";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame = Math.floor(Math.random() * 20 + 1) * 2;
            tokusyu = "武器依存";
        }
    }
}
function f_Z49() {
    Hteki = "切り絵";
    Esute = 46;
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 6 + 1);
        dame2 = Math.floor(Math.random() * 6 + 1);
        dame = (dame1 + dame2);
        tokusyu = "赤";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 6 + 1);
            dame2 = Math.floor(Math.random() * 6 + 1);
            dame = (dame1 + dame2) * 2;
            tokusyu = "赤";
        }
    }
}
function f_Z666a() {
    Hteki = "たいふう";
    Esute = 75;
    if (Dhan == 1) {
        dame = Math.floor(Math.random() * 20 + 1);
        tokusyu = "赤";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame = Math.floor(Math.random() * 20 + 1) * 2;
            tokusyu = "赤";
        }
    }
}
function f_Z666b() {
    Hteki = "怪物の子（第使徒）";
    Esute = 75;

    if (Ekuri == 1) {
        dame1 = Math.floor(Math.random() * 50 + 1);
        dame2 = Math.floor(Math.random() * 50 + 1);
        dame = (dame1 + dame2);
        tokusyu = "使途別属性";
    } else {

    if (Dhan == 1) {
        dame = Math.floor(Math.random() * 20 + 1);
        tokusyu = "使徒別属性";
    }
        if (Dhan == 1) {
            if (Mfan == 1) {
                dame = Math.floor(Math.random() * 20 + 1) * 2;
                tokusyu = "使徒別属性";
            }
        }
    }
}
function f_Z16() {
    Hteki = "共鳴する影";
    Esute = 40;
    if (Dhan == 1) {
        dame = Math.floor(Math.random() * 10 + 1);
        tokusyu = "黒";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame = Math.floor(Math.random() * 10 + 1) * 2;
            tokusyu = "黒";
        }
    }
}
function f_Z06() {
    Hteki = "高塔の陽炎";
    Esute = 50;
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 6 + 1);
        dame2 = Math.floor(Math.random() * 6 + 1);
        dame = (dame1 + dame2);
        tokusyu = "白";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 6 + 1);
            dame2 = Math.floor(Math.random() * 6 + 1);
            dame = (dame1 + dame2) * 2;
            tokusyu = "白";
        }
    }
}
function f_Z04() {
    Hteki = "マヨイビト";
    Esute = 47;
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 6 + 1);
        dame2 = Math.floor(Math.random() * 6 + 1);
        dame = (dame1 + dame2);
        tokusyu = "白";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 6 + 1);
            dame2 = Math.floor(Math.random() * 6 + 1);
            dame = (dame1 + dame2) * 2;
            tokusyu = "白";
        }
    }
}
function f_Z42a() {
    Hteki = "喰心の悪魔";
    Esute = 70;
    if (Dhan == 1) {
        dame = Math.floor(Math.random() * 20 + 1);
        tokusyu = "黒";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame = Math.floor(Math.random() * 20 + 1) * 2;
            tokusyu = "黒";
        }
    }
}
function f_Z42b() {
    Hteki = "悪魔の眷属";
    Esute = 45;
    if (Dhan == 1) {
        dame = Math.floor(Math.random() * 10 + 1);
        tokusyu = "黒";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame = Math.floor(Math.random() * 10 + 1) * 2;
            tokusyu = "黒";
        }
    }
}

function f_Z47a() {
    Hteki = "夢幻泡沫";
    Esute = 60;
    ransu = Math.floor(Math.random() * 2 + 1);
    if (ransu == 1) {
        if (Dhan == 1) {
            dame = Math.floor(Math.random() * 20 + 1);
            tokusyu = "赤";
        }
        if (Dhan == 1) {
            if (Mfan == 1) {
                dame = Math.floor(Math.random() * 20 + 1) * 2;
                tokusyu = "赤";
            }
        }
    } else {
        if (Dhan == 1) {
            dame = Math.floor(Math.random() * 20 + 1);
            tokusyu = "黒";
        }
        if (Dhan == 1) {
            if (Mfan == 1) {
                dame = Math.floor(Math.random() * 20 + 1) * 2;
                tokusyu = "黒";
            }
        }
    }

}
function f_Z47b() {
    Hteki = "守衛α";
    Esute = 55;
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 6 + 1);
        dame2 = Math.floor(Math.random() * 6 + 1);
        dame = (dame1 + dame2);
        tokusyu = "黒";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 6 + 1);
            dame2 = Math.floor(Math.random() * 6 + 1);
            dame = (dame1 + dame2) * 2;
            tokusyu = "黒";
        }
    }
}
function f_Z47c() {
    Hteki = "守衛β";
    Esute = 55;
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 6 + 1);
        dame2 = Math.floor(Math.random() * 6 + 1);
        dame = (dame1 + dame2);
        tokusyu = "黒";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 6 + 1);
            dame2 = Math.floor(Math.random() * 6 + 1);
            dame = (dame1 + dame2) * 2;
            tokusyu = "黒";
        }
    }
}
function f_Z52() {
    Hteki = "狂信の科学者";
    Esute = 30;
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 4 + 1);
        dame2 = Math.floor(Math.random() * 4 + 1);
        dame = (dame1 + dame2);
        tokusyu = "黒";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 4 + 1);
            dame2 = Math.floor(Math.random() * 4 + 1);
            dame = (dame1 + dame2) * 2;
            tokusyu = "黒";
        }
    }
}
function f_Z18() {
    Hteki = "崇拝の色彩";
    Esute = 62;
    if (Dhan == 1) {
        dame = Math.floor(Math.random() * 20 + 1);
        tokusyu = "色";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame = Math.floor(Math.random() * 20 + 1) * 2;
            tokusyu = "色";
        }
    }
}
function f_Z37() {
    Hteki = "悲哀の枝";
    Esute = 30;
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 4 + 1);
        dame2 = Math.floor(Math.random() * 4 + 1);
        dame = (dame1 + dame2);
        tokusyu = "白";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 4 + 1);
            dame2 = Math.floor(Math.random() * 4 + 1);
            dame = (dame1 + dame2) * 2;
            tokusyu = "白";
        }
    }
}
function f_O83() {
    Hteki = "露骨にキノコ";
    Esute = 40;
    if (Dhan == 1) {
        dame = Math.floor(Math.random() * 10 + 1);
        tokusyu = "黒";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame = Math.floor(Math.random() * 10 + 1) * 2;
            tokusyu = "黒";
        }
    }
}
function f_O93() {
    Hteki = "燐火";
    Esute = 30;
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 4 + 1);
        dame2 = Math.floor(Math.random() * 4 + 1);
        dame = (dame1 + dame2);
        tokusyu = "白";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 4 + 1);
            dame2 = Math.floor(Math.random() * 4 + 1);
            dame = (dame1 + dame2) * 2;
            tokusyu = "白";
        }
    }
}
function f_O69() {
    Hteki = "五光";
    Esute = 48;
    if (seike == 1) {
        ransu = Math.floor(Math.random() * 5 + 1);
        if (ransu == 5) {
            dame = Math.floor(Math.random() * 10 + 1);
            tokusyu = "ダメージ、反射5";
            goukei = "失敗";
            seike = 0;
        } else {

            sokusi = "、反射しない、命中";
        }
    }
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 6 + 1);
        dame2 = Math.floor(Math.random() * 6 + 1);
        dame = (dame1 + dame2);
        tokusyu = "赤";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 6 + 1);
            dame2 = Math.floor(Math.random() * 6 + 1);
            dame = (dame1 + dame2) * 2;
            tokusyu = "赤";
        }
    }
}
function f_O64() {
    Hteki = "夜光";
    Esute = 55;
    if (seike == 1) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 2) {
            sokusi = "、回避2、白以外なら失敗";
        } else {
        
            sokusi = "、回避1、命中";
        }
    }
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 6 + 1);
        dame2 = Math.floor(Math.random() * 6 + 1);
        dame = (dame1 + dame2);
        tokusyu = "赤";

    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 6 + 1);
            dame2 = Math.floor(Math.random() * 6 + 1);
            dame = (dame1 + dame2) * 2;
            tokusyu = "赤";
        }
    }
}
function f_O95() {
    Hteki = "遠き日の復讐者";
    Esute = 75;
    if (Edeme == 66) {
        sokusi = "パニック";
    }
    if (seike <= 0) {
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 1) {
            if (Dhan == 1) {
                dame = Math.floor(Math.random() * 20 + 1);
                tokusyu = "赤";
            }
            if (Dhan == 1) {
                if (Mfan == 1) {
                    dame = Math.floor(Math.random() * 20 + 1) * 2;
                    tokusyu = "赤";
                }
            }
        } else {
            if (ransu == 2) {
                if (Dhan == 1) {
                    dame = Math.floor(Math.random() * 20 + 1);
                    tokusyu = "白";
                }
                if (Dhan == 1) {
                    if (Mfan == 1) {
                        dame = Math.floor(Math.random() * 20 + 1) * 2;
                        tokusyu = "白";
                    }
                }
            } else {
                if (ransu == 3) {
                    if (Dhan == 1) {
                        dame = Math.floor(Math.random() * 20 + 1);
                        tokusyu = "黒";
                    }
                    if (Dhan == 1) {
                        if (Mfan == 1) {
                            dame = Math.floor(Math.random() * 20 + 1) * 2;
                            tokusyu = "黒";
                        }
                    }
                } else {
                    if (ransu == 4) {
                        if (Dhan == 1) {
                            dame = Math.floor(Math.random() * 2 + 1);
                            tokusyu = "回、1d20黒全体";
                        }
                        if (Dhan == 1) {
                            if (Mfan == 1) {
                                dame = Math.floor(Math.random() * 2 + 1) ;
                                tokusyu = "回、1d20黒全体";
                            }
                        }
                    } else {
                        if (ransu == 5) {
                            if (Dhan == 1) {
                                dame = Math.floor(Math.random() * 3 + 1);
                                tokusyu = "回、1d20青";
                            }
                            if (Dhan == 1) {
                                if (Mfan == 1) {
                                    dame = 0;
                                    tokusyu = "即死";
                                }
                            }
                        } else {
                            if (Dhan == 1) {
                                dame = Math.floor(Math.random() * 3 + 1);
                                tokusyu = "回、青全体";
                            }
                            if (Dhan == 1) {
                                if (Mfan == 1) {
                                    dame = Math.floor(Math.random() * 2 + 1);
                                    tokusyu = "回、青全体、自分即死";
                                }
                            }
                            } 
                        }
                    }
                }
            }
        }
    }
function f_O97() {
    Hteki = "インク瓶";
    Esute = 20;
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 4 + 1);
        dame2 = Math.floor(Math.random() * 4 + 1);
        dame = (dame1 + dame2);
        tokusyu = "黒";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 4 + 1);
            dame2 = Math.floor(Math.random() * 4 + 1);
            dame = (dame1 + dame2) * 2;
            tokusyu = "黒";
        }
    }
}
function f_O74() {
    Hteki = "巡る思考";
    Esute = 50;
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 6 + 1);
        dame2 = Math.floor(Math.random() * 6 + 1);
        dame = (dame1 + dame2);
        tokusyu = "黒";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 6 + 1);
            dame2 = Math.floor(Math.random() * 6 + 1);
            dame = (dame1 + dame2) * 2;
            tokusyu = "黒";
        }
    }
}
function f_O78() {
    Hteki = "『！』";
    Esute = 60;
    if (Dhan == 1) {
        dame = Math.floor(Math.random() * 20 + 1);
        tokusyu = "黒";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame = Math.floor(Math.random() * 20 + 1) * 2;
            tokusyu = "黒";
        }
    }
}
function f_O107() {
    Hteki = "白日の影法師";
    Esute = 54;
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 6 + 1);
        dame2 = Math.floor(Math.random() * 6 + 1);
        dame = (dame1 + dame2);
        tokusyu = "白";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 6 + 1);
            dame2 = Math.floor(Math.random() * 6 + 1);
            dame = (dame1 + dame2) * 2;
            tokusyu = "白";
        }
    }
}
function f_O104() {
    Hteki = "穢れた同上";
    Esute = 60;
    ransu = Math.floor(Math.random() * 4 + 1);
    if (ransu == 4) {
        if (Dhan == 1) {
            dame = 0;
            tokusyu = "参加者全員に黒1d20";
        }
        if (Dhan == 1) {
            dame = 0;
            tokusyu = "参加者全員に黒1d20";
        }
    } else {
        if (Dhan == 1) {
            dame = Math.floor(Math.random() * 20 + 1) ;
            tokusyu = "赤";
        }
        if (Dhan == 1) {
            if (Mfan == 1) {
                dame = Math.floor(Math.random() * 20 + 1) * 2;
                tokusyu = "赤";
            }
        }
    }
}

function f_O94() {
    Hteki = "隠遁の花守";
    Esute = 50;
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 6 + 1);
        dame2 = Math.floor(Math.random() * 6 + 1);
        dame = (dame1 + dame2);
        tokusyu = "白";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 6 + 1);
            dame2 = Math.floor(Math.random() * 6 + 1);
            dame = (dame1 + dame2) * 2;
            tokusyu = "白";
        }
    }
}

function f_O96() {
    Hteki = "劣等星";
    Esute = 25;
    if (Dhan == 1) {
        dame1 = Math.floor(Math.random() * 4 + 1);
        dame2 = Math.floor(Math.random() * 4 + 1);
        dame = (dame1 + dame2);
        tokusyu = "白";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 4 + 1);
            dame2 = Math.floor(Math.random() * 4 + 1);
            dame = (dame1 + dame2) * 2;
            tokusyu = "白";
        }
    }
}

function f_O113() {
    Hteki = "落ちる獣";
    Esute = 41;
    if (Mdeme >= 80) {
        if (Mdeme <= 89) {
            sokusi = "スタン、次ターン自動失敗";
        }}
    if (Dhan == 1) {
        dame = Math.floor(Math.random() * 10 + 1);
        tokusyu = "赤";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame = Math.floor(Math.random() * 10 + 1) * 2;
            tokusyu = "赤";
        }
    }
}

function f_O100() {
    Hteki = "異界駅";
    Esute = 44;
    pale = 0;
    if (Dhan == 1) {
        dame = Math.floor(Math.random() * 10 + 1);
        tokusyu = "黒";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame = Math.floor(Math.random() * 10 + 1) * 2;
            tokusyu = "黒";
        }
    }
}

function f_O70() {
    Hteki = "不羈の家畜";
    Esute = 40;
    if (Dhan == 1) {
        dame = Math.floor(Math.random() * 10 + 1);
        tokusyu = "白";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame = Math.floor(Math.random() * 10 + 1) * 2;
            tokusyu = "白";
        }
    }
}

function f_O88() {
    Hteki = "亡霊武者";
    Esute = 55;
    if (Dhan == 1) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            dame1 = Math.floor(Math.random() * 6 + 1);
            dame2 = Math.floor(Math.random() * 6 + 1);
            dame = Math.round((dame1 + dame2) );
            tokusyu = "赤";
        }
        if (Dhan == 1) {
            if (Mfan == 1) {
                dame1 = Math.floor(Math.random() * 6 + 1);
                dame2 = Math.floor(Math.random() * 6 + 1);
                dame = Math.round((dame1 + dame2)  * 2);
                tokusyu = "赤";
            }
        }
        if (ransu == 2) {
            dame1 = Math.floor(Math.random() * 6 + 1);
            dame2 = Math.floor(Math.random() * 6 + 1);
            dame = Math.round((dame1 + dame2) * 1.5);
            tokusyu = "赤";
        }
        if (Dhan == 1) {
            if (Mfan == 1) {
                dame1 = Math.floor(Math.random() * 6 + 1);
                dame2 = Math.floor(Math.random() * 6 + 1);
                dame = Math.round((dame1 + dame2) *1.5* 2);
                tokusyu = "赤";
            }
        }
        if (ransu == 3) {
            dame1 = Math.floor(Math.random() * 6 + 1);
            dame2 = Math.floor(Math.random() * 6 + 1);
            dame = Math.round((dame1 + dame2) * 2);
            tokusyu = "赤";
        }
        if (Dhan == 1) {
            if (Mfan == 1) {
                dame1 = Math.floor(Math.random() * 6 + 1);
                dame2 = Math.floor(Math.random() * 6 + 1);
                dame = Math.round((dame1 + dame2) * 2 * 2);
                tokusyu = "赤";
            }
        }
    }
}

function f_O98a() {
    Hteki = "猟犬（子犬）";
    Esute = 33;
    if (Dhan == 1) {
        dame = Math.floor(Math.random() * 10 + 1);
        tokusyu = "赤";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame = Math.floor(Math.random() * 10 + 1) * 2;
            tokusyu = "赤";
        }
    }
}

function f_O98b() {
    Hteki = "猟犬（本来）";
    Esute = 66;
    if (Dhan == 1) {
        dame = Math.floor(Math.random() * 20 + 1);
        tokusyu = "赤";
    }
    if (Dhan == 1) {
        if (Mfan == 1) {
            dame = Math.floor(Math.random() * 20 + 1) * 2;
            tokusyu = "赤";
        }
    }
    if (Ekuri == 1) {
        Dhan = 1;
        if (Mfan == 1) {
            dame1 = Math.floor(Math.random() * 40 + 1) * 2;
            dame2 = Math.floor(Math.random() * 40 + 1) * 2;
            dame = Math.round((dame1 + dame2) );
            tokusyu = "赤";
        } else {
            dame1 = Math.floor(Math.random() * 40 + 1) ;
            dame2 = Math.floor(Math.random() * 40 + 1) ;
            dame = Math.round((dame1 + dame2) );
            tokusyu = "赤";

        }

    }
}

