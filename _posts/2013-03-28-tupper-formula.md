---
id: 2399
title: "נוסחת טאפר - הנוסחה שמציירת את עצמה"
date: 2013-03-28 01:14:08
layout: post
categories: 
  - משחקים וחידות מתמטיות
  - תכנות
tags: 
  - הפניה עצמית
---
בואו ניגש ללב העניין. התבוננו בנוסחה הבאה:

{::nomarkdown}\( \frac{1}{2}&lt;\left\lfloor \mbox{mod}\left(\left\lfloor \frac{y}{17}\right\rfloor 2^{-17\left\lfloor x\right\rfloor -\mbox{mod}\left(\left\lfloor y\right\rfloor ,17\right)},2\right)\right\rfloor \){:/nomarkdown}

בלי פאניקה! הכל יוסבר.

ראשית, סימנים: {::nomarkdown}\( \left\lfloor a\right\rfloor \){:/nomarkdown} מסמל את <strong>הערך השלם התחתון </strong>של המספר {::nomarkdown}\( a\){:/nomarkdown}, שמוגדר להיות המספר השלם הגדול ביותר שקטן או שווה ל-{::nomarkdown}\( a\){:/nomarkdown}. למשל, {::nomarkdown}\( \left\lfloor \frac{5}{3}\right\rfloor =1\){:/nomarkdown} ואילו {::nomarkdown}\( \left\lfloor 2\right\rfloor =2\){:/nomarkdown}. בנוסף, {::nomarkdown}\( \mbox{mod}\left(a,n\right)\){:/nomarkdown} מסמל את הערך שמתקבל כאשר לוקחים את המספר {::nomarkdown}\( a\){:/nomarkdown}, מחלקים אותו ב-{::nomarkdown}\( n\){:/nomarkdown} ולוקחים את השארית. למשל, {::nomarkdown}\( \mbox{mod}\left(3.3,2\right)=1.3\){:/nomarkdown}. זה הכל.

המשוואה הזו מכילה שני משתנים - {::nomarkdown}\( x,y\){:/nomarkdown}. שניהם יכולים לקבל כל ערך שהוא מספר ממשי. עכשיו משחקים את המשחק הבא: מסתכלים על המישור {::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown} שהוא אוסף כל הנקודות {::nomarkdown}\( \left(x,y\right)\){:/nomarkdown} שהן מספרים ממשיים. לכל נקודה {::nomarkdown}\( \left(x,y\right)\){:/nomarkdown} כזו, אם כאשר מציבים את {::nomarkdown}\( x,y\){:/nomarkdown} בנוסחה אי השוויון שבה אכן מתקיים, צובעים את הנקודה {::nomarkdown}\( \left(x,y\right)\){:/nomarkdown} בצבע שחור; אם השוויון לא מתקיים, מותירים את הנקודה לבנה. כעת, אם נסתכל על התמונה שנקבל נראה שקיבלנו תמונה אינסופית שבה המוני נקודות פזורות פה ושם וקשה להבין מה קורה, אבל אם נצטמצם לריבוע קטן יחסית - באורך 17 וברוחב 105 - ונלך למקום המתאים, נראה את התמונה הבאה:

<strong><a href="http://www.gadial.net/wp-content/uploads/2013/03/tupper.png"><img class="alignnone size-medium wp-image-2401" alt="tupper" src="http://www.gadial.net/wp-content/uploads/2013/03/tupper-300x48.png" width="300" height="48" /></a></strong>

רגע, מה? זו תמונה של המשוואה שבעזרתה יצרנו את התמונה מלכתחילה! יש לנו כאן סוג של הפניה עצמית - משוואה שיודעת <strong>לצייר</strong> את עצמה. הזוי לחלוטין, ומתעלה אפילו על <a href="http://www.gadial.net/2009/05/10/godel_incompleteness_proof_sketch/">משפטי אי השלמות של גדל</a> ותוכניות המחשב <a href="http://www.gadial.net/2009/11/27/quine_and_recursion_theorem/">שיודעות להדפיס את הקוד של עצמן</a>!

טוב, לא בדיוק.

הנוסחה הזו, שתוארה לראשונה על ידי ג'ף טאפר ב<a href="http://www.dgp.toronto.edu/people/mooncake/papers/SIGGRAPH2001_Tupper.pdf">מאמר</a> מ-2001, היא קסם במלוא מובן המילה. בהתחלה היא יוצרת רושם מדהים לחלוטין, של משהו בלתי אפשרי לגמרי שהגיע משום מקום, וזו תחושה נפלאה; אחר כך, כשמתחילים לחשוב על זה, מתברר מהר מאוד שהנוסחה משיגה את האפקט הזה על ידי תעלול לא מסובך במיוחד. זה מקלקל למדי את תחושת הפלא הראשונית, אבל מצד שני ההבנה של האופן שבו הקסם מתבצע היא תענוג בפני עצמו. כמובן שאני ממליץ לכולכם לחשוב על העניין בעצמכם; לא צריך הרבה יותר מאשר את הנוסחה שלעיל. יש רק פריט מידע אחד שטרם נתתי לכם - <strong>היכן</strong> בעצם מתחילה אותה תמונה מופלאה בתוך המישור?

ובכן, התמונה מתרחשת בנקודות עם קואורדינטת {::nomarkdown}\( x\){:/nomarkdown} בין 0 ל-105, דהיינו {::nomarkdown}\( 0\le x\le105\){:/nomarkdown}, וקואורדינטת {::nomarkdown}\( y\){:/nomarkdown} בין {::nomarkdown}\( k\){:/nomarkdown} ל-{::nomarkdown}\( k+16\){:/nomarkdown}, כלומר {::nomarkdown}\( k\le y\le k+16\){:/nomarkdown}. מיהו {::nomarkdown}\( k\){:/nomarkdown}? ובכן, מספר גדול לאין שיעור, שמתואר כאן עם רווחים כדי שיהיה קריא ולא יחרוג מגבולות השורה:
<p dir="ltr"><strong>960 939 379 918 958 884 971 672 962 127 852 754 715 004 339 660 129 306 651 505 519 271 702 802 395 266 424 689 642 842 174 350 718 121 267 153 782 770 623 355 993 237 280 874 144 307 891 325 963 941 337 723 487 857 735 749 823 926 629 715 517 173 716 995 165 232 890 538 221 612 403 238 855 866 184 013 235 585 136 048 828 693 337 902 491 454 229 288 667 081 096 184 496 091 705 183 454 067 827 731 551 705 405 381 627 380 967 602 565 625 016 981 482 083 418 783 163 849 115 590 225 610 003 652 351 370 343 874 461 848 378 737 238 198 224 849 863 465 033 159 410 054 974 700 593 138 339 226 497 249 461 751 545 728 366 702 369 745 461 014 655 997 933 798 537 483 143 786 841 806 593 422 227 898 388 722 980 000 748 404 719</strong></p>
חלקכם כבר מנחשים, למראה המספר, שכאן בעצם מסתתרת החוכמה האמיתית - איכשהו הציור "מתחבא" בתוך המספר הזה. אבל איך?

לפני התשובה, הנה לכם משחק אינטראקטיבי - הזינו פנימה ערך של {::nomarkdown}\( k\){:/nomarkdown} (אפשר עם רווחים) וקבלו את התמונה עבור {::nomarkdown}\( 0\le x\le105\){:/nomarkdown} ו-{::nomarkdown}\( k\le y\le k+16\){:/nomarkdown}:
[cf]bigint_js[/cf]
[js]

var square_size = 4;
var get_and_draw = function(){
var t=document.getElementById('number');

var empty = new String;
k_string = t.value.replace(/\s/g, empty);
draw_from_k(str2bigInt(k_string,10,1,1));
}
var draw_from_k = function(k){
var c=document.getElementById('formula');
var ctx=c.getContext('2d');
ctx.clearRect ( 0 , 0 , c.width , c.height );
divInt_(k,17);
for (x=105; x&gt;=0; x=x-1){
for (y=0; y&lt;17; y++){
var bit = modInt(k,2);
if (bit == 1){
draw_pixel(x,y,ctx);
}
divInt_(k,2);
}
}
}

var draw_pixel = function(x,y, ctx){
ctx.fillRect(x*square_size, y*square_size, square_size, square_size);
}

var init = function() {
draw_from_k(ctx,k);
}

[/js]
<canvas id="formula" style="border: 1px solid #000000;" width="424" height="68"></canvas>
<input id="number" type="text" /> <input onclick="get_and_draw()" type="button" value="ציירו!" />

כעת, הבה ונעבור להסבר של מה שקורה כאן. התעלול הוא פשוט מאוד - הנוסחה של טאפר היא נוסחה שמטרתה לפענח קידודים של תמונות מונוכרומטיות (בשחור-לבן). המספר {::nomarkdown}\( k\){:/nomarkdown} מחזיק בתוכו את הקידוד של התמונה, והנוסחה מפענחת את הקידוד הזה ואומרת איפה לשים שחור ואיפה לשים לבן. בשל כך, הנוסחה מסוגלת להחזיר <strong>כל</strong> תמונה שרק נרצה, כל עוד נזין לה את המספר המתאים. לא מאמינים? נסו למשל את זה:
<p dir="ltr"><strong>485 848 307 199 443 192 292 484 775 523 195 446 750 165 771 267 770 474 169 193 207 700 51 005 067 907 907 541 020 178 059 194 196 266 956 625 065 918 178 608 930 545 615 357 634 623 847 182 313 037 176 237 950 246 743 833 022 219 851 353 244 464 297 196 422 052 599 618 366 926 759 595 937 669 170 337 031 986 392 318 882 323 798 450 346 890 393 645 210 909 095 498 636 458 859 695 483 157 512 356 430 020 530 323 399 745 167 547 408 250 078 493 473 637 808 923 733 333 196 160 087 525 223 963 972 079 179 702 470 428 441 062 803 798 996 831 022 016 431 226 755 561 007 151 709 067 404 979 608 249 899 531 206 486 163 294 240 248 539 016 274 762 746 088 450 590 994 298 169 153 574 985 192 777 454 048 087 559 586 719 989 59</strong></p>
ובכן, מה שטאפר עשה (בתור משהו שהוא בסך הכל קוריוז קצרצר בתוך מאמר רציני) היה לצייר את הנוסחה הזו, לחשב את הקידוד שמתאים לציור ולקבל את {::nomarkdown}\( k\){:/nomarkdown} שלנו. לכן קשה לומר שהנוסחה "מציירת את עצמה" - נכון לומר שהיא מציירת <strong>הכל</strong>, ולכן בפרט גם את עצמה, אבל זה פחות מעניין מתוכניות שמדפיסות <strong>רק</strong> את הקוד של עצמן או ממשפטי אי השלמות של גדל. כמובן, זה פותח פתח לאתגר חדש - לכתוב נוסחה שתכיל את {::nomarkdown}\( k\){:/nomarkdown} בצורה מפורשת וגם תצייר את עצמה, אבל זה יישאר כאתגר לקוראים בבית.

עדיין, איך הנוסחה מסוגלת לקחת מספר {::nomarkdown}\( k\){:/nomarkdown}, שבכלל לא מופיע בתוכה באופן מפורש, לפענח אותו ולצייר תמונה? לשם כך צריך להבין מה בעצם הנוסחה עושה. בואו נסתכל שוב על החלק המרכזי בה:

{::nomarkdown}\( \left\lfloor \mbox{mod}\left(\left\lfloor \frac{y}{17}\right\rfloor 2^{-17\left\lfloor x\right\rfloor -\mbox{mod}\left(\left\lfloor y\right\rfloor ,17\right)},2\right)\right\rfloor \){:/nomarkdown}

נתחיל עם {::nomarkdown}\( \left\lfloor \frac{y}{17}\right\rfloor \){:/nomarkdown}. בהנחה ש-{::nomarkdown}\( k\){:/nomarkdown} מתחלק ב-17 (והוא מתחלק - בדקו זאת!) הרי שלכל ערך {::nomarkdown}\( k\le y\le k+16\){:/nomarkdown} נקבל ש-{::nomarkdown}\( \left\lfloor \frac{y}{17}\right\rfloor =\frac{k}{17}\){:/nomarkdown} (הסבירו לעצמכם למה). כלומר, ה-{::nomarkdown}\( \left\lfloor \frac{y}{17}\right\rfloor \){:/nomarkdown} הוא פשוט דרך מחוכמת להכניס את {::nomarkdown}\( k\){:/nomarkdown} לנוסחה בלי לכתוב אותו במפורש; ולמעשה, לא {::nomarkdown}\( k\){:/nomarkdown} הוא מה שמקודד את התמונה אלא {::nomarkdown}\( \frac{k}{17}\){:/nomarkdown} (מבחינה פילוסופית אפשר לטעון ששני המספרים הללו מקודדים את התמונה, אבל תכף נראה שיותר נכון לומר זאת על {::nomarkdown}\( \frac{k}{17}\){:/nomarkdown}). כדי לפשט לעצמי את החיים אסמן מעתה {::nomarkdown}\( a=\frac{k}{17}\){:/nomarkdown}.

עכשיו אנחנו כופלים את {::nomarkdown}\( a\){:/nomarkdown} ב-2 בחזקת מינוס משהו מפלצתי. עזבו לבינתיים את המשהו המפלצתי - נסמן אותו ב-{::nomarkdown}\( t\){:/nomarkdown}. מהו {::nomarkdown}\( a2^{-t}\){:/nomarkdown}? זה סימון אחר ל-{::nomarkdown}\( \frac{a}{2^{t}}\){:/nomarkdown}, כלומר אנחנו מחלקים את {::nomarkdown}\( a\){:/nomarkdown} בחזקה גדולה של 2. הדבר הזה שקול ל<strong>הזזה של הספרות</strong> של {::nomarkdown}\( a\){:/nomarkdown} בייצוג בינארי, או בנקודת מבט אחרת - הזזה של <strong>מיקום הנקודה העשרונית</strong> בייצוג בינארי של {::nomarkdown}\( a\){:/nomarkdown}.

הרבה יותר קל להבין את זה אם חושבים על מספרים בבסיס 10 כפי שאנחנו רגילים. הביטו לרגע במספר {::nomarkdown}\( a=531\){:/nomarkdown}. מספר חביב וטוב לב ואהוב על הבריות. כעת נתעלל בו ונחלק אותו ב-10, וזה כואב, כי הוא לא מתחלק ב-10. מה שנקבל הוא את המספר {::nomarkdown}\( 53.1\){:/nomarkdown}, שזה כמו {::nomarkdown}\( 513.\){:/nomarkdown}, רק אחרי שהנקודה זזה צעד אחד שמאלה. ואם נחלק ב-{::nomarkdown}\( 10^{2}\){:/nomarkdown} כלומר ב-100 נקבל {::nomarkdown}\( 5.31\){:/nomarkdown}, כלומר הנקודה זזה שני צעדים שמאלה. באופן כללי אם מחלקים מספר ב-{::nomarkdown}\( 10^{t}\){:/nomarkdown} , מה שיקרה הוא שהנקודה בייצוג העשרוני שלו תזוז {::nomarkdown}\( t\){:/nomarkdown} צעדים שמאלה. כעת, אם נחלק מספר ב-{::nomarkdown}\( 2^{t}\){:/nomarkdown}, הנקודה תזוז {::nomarkdown}\( t\){:/nomarkdown} צעדים שמאלה בייצוג של המספר בבסיס 2. כך למשל המספר 13 מיוצג בבסיס 2 בתור {::nomarkdown}\( 1101\){:/nomarkdown} (כי {::nomarkdown}\( 13=1\cdot2^{0}+0\cdot2^{1}+1\cdot2^{2}+1\cdot2^{3}\){:/nomarkdown}). אם נחלק אותו ב-{::nomarkdown}\( 4=2^{2}\){:/nomarkdown} נקבל את המספר "שלוש ורבע", שבבסיס בינארי הוא {::nomarkdown}\( 11.01\){:/nomarkdown} (כי {::nomarkdown}\( 11\){:/nomarkdown} בבינארי זה 3 ו-{::nomarkdown}\( .01=0\cdot\frac{1}{2}+1\cdot\frac{1}{4}\){:/nomarkdown}).

יפה, אם כן, הנוסחה מבצעת חישוב שאסמן את התוצאה שלו בתור {::nomarkdown}\( b=a2^{-t}\){:/nomarkdown}, שבסך הכל לוקחת את {::nomarkdown}\( a\){:/nomarkdown} ומזיזה את הנקודה בייצוג הבינארי שלו {::nomarkdown}\( t\){:/nomarkdown} צעדים שמאלה. אז מבצעים את החישוב הבא: {::nomarkdown}\( \left\lfloor \mbox{mod}\left(b,2\right)\right\rfloor \){:/nomarkdown}. כלומר, גם לוקחים את {::nomarkdown}\( b\){:/nomarkdown} מודולו 2, וגם לוקחים ערך שלם תחתון. גם על שתי הפעולות הללו כדאי לחשוב במונחים של הייצוג הבינארי של המספר. ביצוע הפעולה {::nomarkdown}\( \mbox{mod}\left(b,2\right)\){:/nomarkdown} לוקח את {::nomarkdown}\( b\){:/nomarkdown} ופשוט זורק לזבל את כל הספרות ש<strong>משמאל </strong>לנקודה העשרונית, <strong>חוץ מאשר </strong>את הספרה הראשונה שמשמאל לה. כלומר, {::nomarkdown}\( \mbox{mod}\left(101101.1101,2\right)=1.1101\){:/nomarkdown}. למה זה נכון? ובכן, את {::nomarkdown}\( 101101.1101\){:/nomarkdown} אפשר לכתוב גם כסכום שני מספרים: {::nomarkdown}\( 101101.1101=101100+1.1101\){:/nomarkdown}. המספר השמאלי מתחלק ב-2 והמספר הימני קטן מ-2. זה מספיק כדי לראות את נכונות הטענה גם באופן כללי, אבל אשאיר לכם להשלים את הפרטים.

כעת, מה עושה הערך השלם התחתון למספר? פשוט מאוד - מחסל את כל הספרות ש<strong>מימין</strong> לנקודה העשרונית. למה? כי זה החלק השברי של המספר, וזה בדיוק מה שנפטרים ממנו כשלוקחים ערך שלם תחתון.

במילים אחרות, {::nomarkdown}\( \left\lfloor \mbox{mod}\left(b,2\right)\right\rfloor \){:/nomarkdown} לוקחת את המספר {::nomarkdown}\( b\){:/nomarkdown} ומחזירה ספרה בודדת מתוך {::nomarkdown}\( b\){:/nomarkdown} - בדיוק את זו שנמצאת מייד משמאל לנקודה העשרונית בייצוג של {::nomarkdown}\( b\){:/nomarkdown} בבסיס בינארי. מסקנה: {::nomarkdown}\( \left\lfloor \mbox{mod}\left(a2^{-t},2\right)\right\rfloor \){:/nomarkdown} היא פונקציה שלוקחת את {::nomarkdown}\( a\){:/nomarkdown} ומחזירה בדיוק את הספרה במקום ה-{::nomarkdown}\( t\){:/nomarkdown}-י בייצוג הבינארי של {::nomarkdown}\( a\){:/nomarkdown} (כשמתחילים את הספירה של המקומות מ-0). עד כדי כך פשוט.

כעת נותר רק להבין מהו {::nomarkdown}\( t\){:/nomarkdown}. ובכן, {::nomarkdown}\( t=17\left\lfloor x\right\rfloor +\mbox{mod}\left(\left\lfloor y\right\rfloor ,17\right)\){:/nomarkdown}. בואו ננסה להבין את זה.

ראשית {::nomarkdown}\( \left\lfloor x\right\rfloor \){:/nomarkdown} ו-{::nomarkdown}\( \left\lfloor y\right\rfloor \){:/nomarkdown} פירושם שלמרות שהנוסחה יכולה לקבל ערכים ממשיים כלשהם של {::nomarkdown}\( x,y\){:/nomarkdown}, היא מתעניינת רק בערכים השלמים שלהם; הנקודות {::nomarkdown}\( \left(3.5,2.7\right)\){:/nomarkdown} ו-{::nomarkdown}\( \left(3,2\right)\){:/nomarkdown} יהיו צבועות באותו הצבע, ולמעשה אם {::nomarkdown}\( \left(3,2\right)\){:/nomarkdown} צבועה בשחור, כך גם כל נקודה אחרת מהצורה {::nomarkdown}\( \left(3.a,2.b\right)\){:/nomarkdown} עבור מספרים כלשהם {::nomarkdown}\( a,b\){:/nomarkdown}. נשאר רק להבין את {::nomarkdown}\( 17\left\lfloor x\right\rfloor +\mbox{mod}\left(\left\lfloor y\right\rfloor ,17\right)\){:/nomarkdown}.

הנוסחה הזו בוודאי מוכרת לכל מי שקצת תכנת בחייו והתעסק עם מערכים דו ממדיים. בקצרה, <strong>מערך</strong> הוא אוסף תאי זכרון רצופים במחשב, שלכל אחד יש אינדקס (שמתחיל במקרה שלנו מ-0). אם {::nomarkdown}\( A\){:/nomarkdown} הוא מערך, אז {::nomarkdown}\( A\left[4\right]\){:/nomarkdown} מסמן את התא החמישי במערך (מתחילים מאפס!) וכן הלאה. כעת, מערך דו ממדי הוא מערך שבו לכל תא יש שתי קואורדינטות, למשל {::nomarkdown}\( A\left[3\right]\left[5\right]\){:/nomarkdown} מסמן את התא בעמודה מס' 3 ושורה מס' 5 (למתמטיקאים שביניכם, זו פשוט מטריצה בעוד שמערך הוא וקטור, אם כי במטריצות נהוג לתת את אינדקס השורה קודם וכאן עשיתי ההפך כדי להתאים לנוסחה של טאפר).

כעת, מערכים דו ממדיים מאוחסנים בזכרון של המחשב בתור מערכים רגילים, חד ממדיים; כאשר התוכנית נתקלת בגישה למערך מהצורה {::nomarkdown}\( A\left[3\right]\left[4\right]\){:/nomarkdown} היא מתרגמת את הפניה הזו לכתובת במערך החד ממדי המקורי. איך עושים את זה? ובכן, הרעיון הוא לאחסן את המערך הדו-ממדי "עמודה עמודה". נניח שאורך כל עמודה במערך הדו-ממדי היא {::nomarkdown}\( 6\){:/nomarkdown}, אז עמודה מס' 0 אוחסנה בתאי הזכרון 0-5; עמודה מס' 1 בתאי הזכרון 6-11; עמודה 2 ב-12-17, ועמודה 3 ב-18-23, כאשר תא מס' 4 בעמודה (כלומר, התא בשורה 4) הוא התא הרביעי מביניהם, דהיינו 22. כעת, את החישוב שעשינו אפשר לתאר בתור {::nomarkdown}\( 22=3\cdot6+4\){:/nomarkdown}, ובאופן כללי אם אורך כל עמודה במערך הוא {::nomarkdown}\( s\){:/nomarkdown} ואנחנו רוצים לגשת לתא {::nomarkdown}\( A\left[x\right]\left[y\right]\){:/nomarkdown}, אז ניגש אל התא {::nomarkdown}\( x\cdot s+y\){:/nomarkdown}.

נחזור אל {::nomarkdown}\( t=17\left\lfloor x\right\rfloor +\mbox{mod}\left(\left\lfloor y\right\rfloor ,17\right)\){:/nomarkdown}. כאן הנוסחה היא אותו הדבר: ספציפית, {::nomarkdown}\( s=17\){:/nomarkdown}, כלומר במערך שלנו אורך כל עמודה הוא 17 (זהו <strong>גובה</strong> התמונה). כמו כן {::nomarkdown}\( \mbox{mod}\left(\left\lfloor y\right\rfloor ,17\right)\){:/nomarkdown} בעצם בא לנטרל את {::nomarkdown}\( k\){:/nomarkdown} מתוך {::nomarkdown}\( y\){:/nomarkdown}: הרי אמרנו ש-{::nomarkdown}\( k\le y\le k+16\){:/nomarkdown}, כלומר אפשר לכתוב {::nomarkdown}\( y=k+y^{\prime}\){:/nomarkdown} כאשר {::nomarkdown}\( 0\le y^{\prime}\le16\){:/nomarkdown}; אז {::nomarkdown}\( y^{\prime}=\mbox{mod}\left(\left\lfloor y\right\rfloor ,17\right)\){:/nomarkdown}.

כעת הכל ברור - אני מקווה! מה שקורה הוא ש-{::nomarkdown}\( a\){:/nomarkdown} (שהוא, כזכור {::nomarkdown}\( \frac{k}{17}\){:/nomarkdown}) הוא <strong>מערך דו ממדי של ביטים שמקודד כמערך חד ממדי</strong>. ה"קידוד" הוא בדיוק הייצוג הבינארי של {::nomarkdown}\( a\){:/nomarkdown}, ומה שנוסחת טאפר עושה הוא לדגום אותו ביט-ביט. הביטים שנוסחת טאפר קוראת יהיו 0 או 1, ולכן השוואה לחצי תצליח רק כשהביט הוא 1.

אלו מכם שיסתכלו על הקוד שמייצר את התמונות מתוך המספרים למעלה יראו שזה מה שאני עושה - לוקח את המספר, מחלק ב-17 ואז אוכל אותו ביט ביט ומחליט על פי מה לצייר. המימוש הוא פשוט ביותר (אם כי נדרשת ספריה למספרים גדולים) וכל העסק הוא פשוט למדי אחרי שחושבים עליו קצת.

כל זה לא מפחית, לטעמי, מתחושת הפליאה הראשונית, ומכמה שההתעסקות בנוסחה הזו כיפית. והנה מה שיש לשחר אבן-דר מנדל <strong></strong> לומר על זה:
<a href="http://www.gadial.net/wp-content/uploads/2013/03/tupper_shachar.jpg"><img src="http://www.gadial.net/wp-content/uploads/2013/03/tupper_shachar.jpg" alt="tupper_shachar" width="480" height="324" class="alignnone size-full wp-image-2406" /></a>
