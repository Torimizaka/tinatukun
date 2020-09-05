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


rogcount=rog.length+1;

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

    if (geigeki == 1) {
        geican = 1;
    }

Mdeme = Math.floor( Math.random() * 100);
Edeme = Math.floor( Math.random() * 100);

Hsute="" ;
Hteki="" ;

Dhan = 0;
sokusi="";
ransu=0;
tokusyu="";
Thantei=1;

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

    if (number == 0) f_panisyo();
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


if(Mdeme >=96){
Mseihi = 0;
}else{
Mkeisan = dais - Mdeme;
if(Mkeisan >= 0){
Mseihi = 1;
}else{
Mseihi = 0;
}
}


Ekeisan = Esute - Edeme;
if(Ekeisan >= 0){
Eseihi = 1;
}else{
Eseihi =0;
}



seike = Mseihi - Eseihi;

if(Mkuri ==1) {if(Ekuri ==0)
seike=1;
}

if(Ekuri ==1){if(Mkuri ==0)
seike =-1 ;
}

if(Mdeme ==0)seika -=1;
if(Edeme ==0)seika +=1;

if(seike == 0 ) {
goukei = "失敗";
Dhan = 0;
}
if(seike >= 1 ) {
goukei = "成功、一発";
Dhan = 0;
}
if(seike <= -1 ) {
goukei = "失敗、ダメージ";
Dhan = 1;
}
if(Mdeme >= 50){if(kanst ==1){
Khantei =  Math.floor( Math.random() * 10);
if(Khantei >= 5 ){
if(seike ==0){
  goukei = "失敗、ダメージ";
  Dhan =1;
}
if(seike <= -1 ) {
goukei = "失敗、ダメージ";
Dhan = 1;
}
if(seike >= 1 ) {
goukei = "失敗";
Dhan = 0;
}
        }
    }
    }

    if (seike <= -1) {

        if (geican >= 1) {
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
if(Mdeme <= 5) {if(pale == 1){
Phantei =  Math.floor( Math.random() * 10);
if( ( Phantei % 2 ) == 0 ) {
double = "２回攻撃";
Dhan = 0;
}}}

if(number　== 0) f_panisyo();
if(number　== 1) f_panisyo();
if(number　== 2) f_Z29();
if(number　== 3) f_Z01();
if(number　== 4) f_Z37();
if(number　== 5) f_Z50();
if(number　== 6) f_Z39();
if(number　== 7) f_Z22();
if(number　== 8) f_Z15();
if(number　== 9) f_Z45();
if(number　== 10) f_Z34();
if(number　== 11) f_Z32();
if(number　== 12) f_Z19();
if(number　== 13) f_Z09();
if(number　== 14) f_Z20();
if(number　== 15) f_Z21();
if(number　== 16) f_Z03();
if(number　== 17) f_Z23();
if(number　== 18) f_Z36();
if(number　== 19) f_Z60();
if(number　== 20) f_Z44();
if(number　== 21) f_Z43();
if(number　== 22) f_Z10();
if(number　== 23) f_Z13();
    if (number == 24) f_Z59();
    if (number == 25) f_Z54();
    if (number == 26) f_Z49();
    if (number == 27) f_Z666a();
    if (number == 28) f_Z666b();
    if (number == 29) f_Z16();
    if (number == 30) f_Z06();
    if (number == 31) f_Z04();
    if (number == 32) f_Z42a();
    if (number == 33) f_Z42b();


    if ((geihan % 2) == 0) {
        dame = 0;
        tokusyu = "";
    }

damehyo =dame;
if(dame ==0){
damehyo ="";
}
damehyo3 ="";
if(dame3 >=1){
 damehyo3=dame3 +"ﾀﾞﾒ"

}

dise_log();

if(bumon==0){
document.tinatukeisan['kekka'].value ="@DeusEXZZZ12\n#Z社_鎮圧ロール \nターン"+ tarn + "\n" +  name + "→" + Hteki + "\n" +"部門移動中、ターン" + tarn + "終了";
twetext="@DeusEXZZZ12\n#Z社_鎮圧ロール \nターン"+ tarn + "\n" +  name + "→" + Hteki + "\n" +"部門移動中、ターン" + tarn + "終了";
return false;

}else{

document.tinatukeisan['kekka'].value ="@DeusEXZZZ12\n#Z社_鎮圧ロール \nターン"+ tarn + "\n" +  name + "→" + Hteki + "\n" + Hsute +  dais + ":" + Mdeme + Mkurifan + kansei +"\n"  + "相手" + Esute + ":" + Edeme + Ekurifan + "\n" + goukei + double + damehyo +tokusyu+damehyo3+ sokusi + "\n" + "ターン" + tarn + "終了";
twetext="@DeusEXZZZ12\n#Z社_鎮圧ロール \nターン"+ tarn + "\n" +  name + "→" + Hteki + "\n" + Hsute +  dais + ":" + Mdeme + Mkurifan + kansei +"\n"  + "相手" + Esute + ":" + Edeme + Ekurifan + "\n" + goukei + double + damehyo +tokusyu+damehyo3+ sokusi + "\n" + "ターン" + tarn + "終了";
return false;

}





}

function openTwitter(tarn,name,Hteki,Hsute,dais,Mdeme,Mkurifan,kansei,Esute,Edeme,Ekurifan,goukei,double,damehyo,tokusyu,damehyo3,sokusi) {

var turl = "https://twitter.com/intent/tweet?text="+ encodeURIComponent(twetext);
window.open(turl,'_blank');
}

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



function f_panisyo(){
Hteki = pani_name;
Esute = pani_sute;
if(Dhan == 1){
dame = Math.floor( Math.random() * 4 +1);
}
if(Dhan == 1){if(Mfan == 1){
dame = Math.floor( Math.random() * 4 +1)*2;
}}
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

function f_Z34(){
Hteki = "莞爾の崇拝者";
Esute = 53;
if(Dhan == 1){
ransu =  Math.floor( Math.random() * 3+1);
if(ransu ==1){
tokusyu="部門全体に2d6白";
}
if(ransu ==2){
dame1 = Math.floor( Math.random() * 6 +1);
dame2 = Math.floor( Math.random() * 6 +1);
dame = Math.round((dame1 + dame2)*2);
tokusyu ="白";
}
if(Dhan == 1){if(Mfan == 1){
dame1 = Math.floor( Math.random() * 6 +1);
dame2 = Math.floor( Math.random() * 6 +1);
dame = Math.round((dame1 + dame2)*2*2);
tokusyu ="白";
}}
}
if(ransu ==3){
  dame = 0;
  tokusyu ="殺人性パニック";
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