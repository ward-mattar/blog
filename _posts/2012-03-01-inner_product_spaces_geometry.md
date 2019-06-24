---
id: 1522
title: "(קצת על) הגאומטריה של מרחבי מכפלה פנימית"
date: 2012-03-01 20:08:19
layout: post
categories: 
  - אלגברה לינארית
tags: 
  - אלגברה לינארית
  - גאומטריה
  - מרחבי מכפלה פנימית
---
בפוסט הקודם על אלגברה לינארית הצגנו את מושג המכפלה הפנימית וכמה מושגים נלווים, אבל לא דיברנו על מה שלדעתי הוא הדבר העיקרי פה - האופן שבו מכפלה פנימית משרה על מרחבים וקטורים <strong>גאומטריה</strong>, במובן זה שאם יש לנו מכפלה פנימית על מרחב יש לנו מושגים של אורך וזווית ודברים שנובעים מהם.

נתחיל עם היצור שהגדרתי בפוסט הקודם כחלק אגבי מתהליך גרם-שמידט: נורמה. כזכור, אם {::nomarkdown}\( x\in V\){:/nomarkdown} אז הגדרתי {::nomarkdown}\( \\|x\\|=\sqrt{\left\langle x,x\right\rangle }\){:/nomarkdown}, בהתבסס על כך ש-{::nomarkdown}\( \left\langle x,x\right\rangle \){:/nomarkdown} הוא מספר ממשי חיובי (והפונקציה {::nomarkdown}\( \sqrt{}\){:/nomarkdown}, כתמיד, מחזירה את השורש החיובי). הנורמה מקיימת שלוש תכונות שמאפיינות כל כך טוב את מושג ה"אורך" שאפשר לראות אותה כהכללה טבעית שלו:
<ol>
	<li> {::nomarkdown}\( \\|x\\|\ge0\){:/nomarkdown} ו-{::nomarkdown}\( \\|x\\|=0\){:/nomarkdown} אם ורק אם {::nomarkdown}\( x=0\){:/nomarkdown}.</li>
	<li> {::nomarkdown}\( \\|\lambda x\\|=\left\|\lambda\right\|\\|x\\|\){:/nomarkdown} לכל סקלר {::nomarkdown}\( \lambda\in\mathbb{F}\){:/nomarkdown}</li>
	<li> {::nomarkdown}\( \\|x+y\\|\le\\|x\\|+\\|y\\|\){:/nomarkdown} ("אי שוויון המשולש").</li>
</ol>
תכונה 1 היא פשוט דרישה 4 בהגדרת מכפלה פנימית.

תכונה 2 נובעת מתכונות 2 ו-3 של מכפלה פנימית: {::nomarkdown}\( \\|\lambda x\\|^{2}=\left\langle \lambda x,\lambda x\right\rangle =\lambda\overline{\lambda}\left\langle x,x\right\rangle =\left\|\lambda\right\|^{2}\\|x\\|^{2}\){:/nomarkdown} ולכן על ידי הוצאת שורש נקבל את התכונה.

תכונה 3 לעומת זאת היא מעניינת ולא מיידית. השם "אי שוויון המשולש" נובע מכך שבמשולש, סכום אורכי כל שתי צלעות הוא תמיד גדול מאורך הצלע השלישית. עוד מעט נראה שהתכונה הזו היא המהותית ביותר כאשר אנחנו רוצים לדבר על <strong>מרחק</strong>, שכן היא מונעת סיטואציה אבסורדית שבה מרחק בין שתי נקודות <strong>גדול</strong> מהמרחק בין שתיהן לאיזו נקודה בצד (ולכן יותר מהיר ללכת לא מהנקודה הראשונה לשניה אלא לעבור קודם בנקודה הצדדית). את תכונה 3 אי אפשר להרוויח "סתם" - נשתמש בטענת עזר שהיא חשובה ביותר בזכות עצמה.

ראשית, בואו ננסה להוכיח את הטענה פשוט מההגדרות:

{::nomarkdown}\( \\|x+y\\|^{2}=\left\langle x+y,x+y\right\rangle =\left\langle x,x\right\rangle +\left\langle x,y\right\rangle +\left\langle y,x\right\rangle +\left\langle y,y\right\rangle \){:/nomarkdown}

{::nomarkdown}\( =\\|x\\|^{2}+\left\langle x,y\right\rangle +\overline{\left\langle x,y\right\rangle }+\\|y\\|^{2}=\\|x\\|^{2}+2\mbox{Re}\left\langle x,y\right\rangle +\\|y\\|^{2}\){:/nomarkdown}

המממפף. כאן אנחנו נתקעים, כי לא ברור לנו מה לעשות עם ה-{::nomarkdown}\( 2\mbox{Re}\left\langle x,y\right\rangle \){:/nomarkdown} שתקוע לנו כאן. אנחנו רוצים להבין משהו על טיב הקשר שבין {::nomarkdown}\( \left\langle x,y\right\rangle \){:/nomarkdown} ו-{::nomarkdown}\( \\|x\\|,\\|y\\|\){:/nomarkdown}. לצורך כך, בואו ניזכר במכפלות סקלריות: הגדרנו מכפלה סקלרית ב-{::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown} בתור מכפלת ה<strong>אורכים</strong> של וקטורים בקוסינוס הזווית ביניהם. במילים אחרות, המכפלה הסקלרית הייתה <strong>לכל היותר</strong> מכפלת האורכים של הוקטורים; לרוב היא "התקזזה" קצת בגלל שהוקטורים לא הצביעו לאותו הכיוון. את התחושה האינטואיטיבית הזו אפשר לתרגם לאי-שוויון קונקרטי:

{::nomarkdown}\( \left\|\left\langle x,y\right\rangle \right\|\le\\|x\\|\\|y\\|\){:/nomarkdown}

לאי השוויון הזה קוראים <strong>אי שוויון קושי-שוורץ</strong>, והוא אחד מאותם משפטים מתמטיים שבהם אני נתקל <strong>בכל מקום</strong> (לעתים קרובות בניסוח למקרה פרטי עבור מכפלה פנימית ספציפית, ואז הוא נראה מסורבל <strong>יותר</strong> וקשה יותר להבנה). קשה להפריז בחשיבות שלו, אבל למרבה המזל ההוכחה שלו אינו קשה במיוחד. לפני שנוכיח אותו בואו נראה איך הוא מסיים עם אי-שוויון המשולש: {::nomarkdown}\( 2\mbox{Re}\left\langle x,y\right\rangle \le2\left\|\left\langle x,y\right\rangle \right\|\le2\\|x\\|\\|y\\|\){:/nomarkdown} ולכן:

{::nomarkdown}\( \\|x+y\\|^{2}\le\\|x\\|^{2}+2\\|x\\|\\|y\\|+\\|y\\|^{2}=\left(\\|x\\|+\\|y\\|\right)^{2}\){:/nomarkdown}

ועל ידי הוצאת שורש משני האגפים מקבלים את אי-שוויון המשולש.

יופי, אז איך מוכיחים את קושי-שוורץ? גם כאן כדאי לזכור את מה שהלך עם מכפלה סקלרית. בדוגמה שנתתי, עם עבודה של כוח על גוף, לקחנו את הוקטור שתיאר את העבודה ופירקנו אותו לשני רכיבים - אחד בכיוון תנועת הגוף, והשני בניצב לכיוון הזה. המכפלה הסקלרית של הרכיב הראשון עם הכיוון הייתה בדיוק מכפלה של שני גדלי הוקטורים; המכפלה הסלקרית של הרכיב השני עם הכיוון הייתה 0 (כי הם ניצבים). זה גם מה שנעשה כאן, ונשתמש בדיוק באותם רעיונות שבהם השתמשנו בתהליך גרם-שמידט. ראשית ניקח את {::nomarkdown}\( x\){:/nomarkdown} וננרמל אותו - נגדיר {::nomarkdown}\( a=\frac{x}{\\|x\\|}\){:/nomarkdown} (כאן עלינו להניח ש-{::nomarkdown}\( x\ne0\){:/nomarkdown} אבל אם {::nomarkdown}\( x=0\){:/nomarkdown} אז {::nomarkdown}\( \left\langle x,y\right\rangle =0=\\|0\\|\\|y\\|\){:/nomarkdown} ואי השוויון טריוויאלי). כעת נגדיר {::nomarkdown}\( b=y-\left\langle y,a\right\rangle a\){:/nomarkdown} . כלומר, {::nomarkdown}\( b\){:/nomarkdown} הוא בדיוק מה שנשאר מ-{::nomarkdown}\( y\){:/nomarkdown} אחרי שמחסרים ההטלה של {::nomarkdown}\( y\){:/nomarkdown} על וקטור היחידה {::nomarkdown}\( a\){:/nomarkdown} שנמצא באותו כיוון כמו {::nomarkdown}\( x\){:/nomarkdown}. בפרט, {::nomarkdown}\( \left\langle b,a\right\rangle =0\){:/nomarkdown}

כעת:

{::nomarkdown}\( 0\le\\|b\\|^{2}=\left\langle b,b\right\rangle =\left\langle b,y-\left\langle y,a\right\rangle a\right\rangle \){:/nomarkdown}

{::nomarkdown}\( =\left\langle b,y\right\rangle -\left\langle b,\left\langle y,a\right\rangle a\right\rangle =\left\langle b,y\right\rangle \){:/nomarkdown}

{::nomarkdown}\( =\left\langle y-\left\langle y,a\right\rangle a,y\right\rangle =\left\langle y,y\right\rangle -\left\langle y,a\right\rangle \left\langle a,y\right\rangle \){:/nomarkdown}

{::nomarkdown}\( =\\|y\\|^{2}-\frac{\left\langle y,x\right\rangle \left\langle x,y\right\rangle }{\\|x\\|^{2}}=\\|y\\|^{2}-\frac{\left\|\left\langle x,y\right\rangle \right\|^{2}}{\\|x\\|^{2}}\){:/nomarkdown}

העברת אגפים, כפל, הוצאת שורש וקיבלנו {::nomarkdown}\( \left\|\left\langle x,y\right\rangle \right\|\le\\|x\\|\\|y\\|\){:/nomarkdown}. החישוב שלמעלה נראה טיפה טכני אבל הוא מיידי למדי, והעיקר פה הוא הרעיון שהצגתי קודם.

בואו ננצל את ההזדמנות הזו ונציג רעיון שלא אשתמש בו בהמשך אבל שווה לשים אליו לב: מכיוון ש-{::nomarkdown}\( \left\|\left\langle x,y\right\rangle \right\|\le\\|x\\|\\|y\\|\){:/nomarkdown} הרי ש-{::nomarkdown}\( 0\le\frac{\left\|\left\langle x,y\right\rangle \right\|}{\\|x\\|\\|y\\|}\le1\){:/nomarkdown} תמיד ולכן אפשר לדבר על {::nomarkdown}\( \mbox{arccos}\left(\frac{\left\|\left\langle x,y\right\rangle \right\|}{\\|x\\|\\|y\\|}\right)\){:/nomarkdown} - הביטוי הזה ייתן לנו לנו זווית בין 0 ל-90 מעלות, שבמובן מסויים ניתן לחשוב עליה בתור הזווית בין {::nomarkdown}\( x\){:/nomarkdown} ו-{::nomarkdown}\( y\){:/nomarkdown}. בפרט, אם {::nomarkdown}\( \left\langle x,y\right\rangle =0\){:/nomarkdown} אז הזווית היא בת 90 מעלות, בהתאם לרעיון שלנו של "וקטורים אורתוגונליים הם מאונכים". אבל כאמור, אני לא הולך להגיד על זה יותר שום דבר.

כעת, צריך להיזהר ולא לתת את הרושם השגוי שנורמות צצות רק בהקשרים של מכפלה פנימית. כל פונקציה {::nomarkdown}\( V\to\mathbb{R}\){:/nomarkdown} עבור מרחב וקטורי {::nomarkdown}\( V\){:/nomarkdown} שמקיימת את תכונות 1-3 היא נורמה (אפשר לדבר על נורמות גם בהקשרים שאינם של מרחבים וקטוריים, אבל צריך לתקן את התכונות בהתאם - בפרט תכונה 2), ו<strong>לא כל נורמה מתקבלת ממכפלה פנימית</strong>. כלומר, ייתכן שנגדיר נורמה על מרחב {::nomarkdown}\( V\){:/nomarkdown} כך שפשוט אין מכפלה פנימית על {::nomarkdown}\( V\){:/nomarkdown} שנותנת את הנורמה הזו. איך אפשר להוכיח דבר כזה? או, טוב ששאלתם. בואו נראה שלוש נורמות שונות על {::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown} - שלוש מה"פופולריות" ביותר:
<ol>
	<li> הנורמה האוקלידית הרגילה: {::nomarkdown}\( \\|\left(x,y\right)\\|_{2}=\sqrt{x^{2}+y^{2}}\){:/nomarkdown}</li>
	<li> נורמת "נהגי המוניות": {::nomarkdown}\( \\|\left(x,y\right)\\|_{1}=\left\|x\right\|+\left\|y\right\|\){:/nomarkdown}</li>
	<li> נורמת הסופרמום: {::nomarkdown}\( \\|\left(x,y\right)\\|_{\infty}=\mbox{max}\left\{ \left\|x\right\|,\left\|y\right\|\right\} \){:/nomarkdown}</li>
</ol>
לא אוכיח שאלו נורמות אבל די קל לראות את זה (בפרט שתי התכונות הראשונות הן מיידיות). הסימונים הדומים עבור הנורמות הללו אינם מקריים: באופן כללי, לכל מספר ממשי {::nomarkdown}\( p\ge1\){:/nomarkdown} אפשר להגדיר נורמה על ידי {::nomarkdown}\( \\|\left(x,y\right)\\|_{p}=\left(\left\|x\right\|^{p}+\left\|y\right\|^{p}\right)^{\frac{1}{p}}\){:/nomarkdown} מה שמכליל לנו את שתי הנורמות הראשונות, והשלישית מתקבלת כאשר {::nomarkdown}\( p\to\infty\){:/nomarkdown} (במובן שלא אכנס אליו כרגע).

ההמחשה הטובה ביותר לאופי של הנורמות הללו, לטעמי, היא הציור של "מעגל היחידה" בכל אחד מהן - אוסף כל הנקודות שהמרחק שלהן מהראשית הוא 1, כלומר הוקטור שמתחיל בראשית ונגמר בהן הוא מנורמה 1:

<strong><a href="http://www.gadial.net/wp-content/uploads/2012/03/140px-Vector_norms.svg_.png"><img class="alignnone size-full wp-image-1524" title="140px-Vector_norms.svg" src="http://www.gadial.net/wp-content/uploads/2012/03/140px-Vector_norms.svg_.png" alt="" width="140" height="460" /></a>
</strong>

למי שהאיור הזה נראה לו מופרך לגמרי - נסו זאת בעצמכם! נסו לחשוב כיצד לצייר את מעגלי היחידה עבור שתי הנורמות ה"חדשות". זה קל באופן מפתיע ואחרי זה המעגלים הללו לא ייראו מוזר כל כך.

כעת אני רוצה לטעון שיש תכונה שכל נורמה שמושרית ממכפלה פנימית חייבת לקיים - תכונה שהיא גאומטרית במהותה: <strong>כלל המקבילית</strong>. נניח שיש לנו שני וקטורים, {::nomarkdown}\( a,b\){:/nomarkdown}. אפשר לחשוב עליהם כעל שתי צלעות של מקבילית. לא קשה לראות שהאלכסונים של אותה מקבילית יהיו {::nomarkdown}\( a+b\){:/nomarkdown} ו-{::nomarkdown}\( a-b\){:/nomarkdown}:

<strong><a href="http://www.gadial.net/wp-content/uploads/2012/03/Parallelogram_law.png"><img class="alignnone size-full wp-image-1525" title="Parallelogram_law" src="http://www.gadial.net/wp-content/uploads/2012/03/Parallelogram_law.png" alt="" width="311" height="414" /></a></strong>

כעת, כלל המקבילית הוא מין הכללה של משפט פיתגורס: סכום ריבועי אורכי כל צלעות המקבילית שווה לסכום ריבועי אורכי האלכסונים. בלשון נורמות:

{::nomarkdown}\( 2\\|a\\|^{2}+2\\|b\\|^{2}=\\|a+b\\|^{2}+\\|a-b\\|^{2}\){:/nomarkdown}

למה הכללה של פיתגורס? כי אם {::nomarkdown}\( a,b\){:/nomarkdown} מאונכים זה לזה המקבילית היא מלבן, והאלכסונים בה שווים, ולכן על ידי חלוקה ב-2 מקבלים בדיוק {::nomarkdown}\( \\|a\\|^{2}+\\|b\\|^{2}=\\|a+b\\|^{2}\){:/nomarkdown}; אבל היופי בכלל המקבילית הוא שהוא נכון תמיד, בכל מקבילית.

איך מוכיחים את זה? אפשר עם גאומטריה אוקלידית, אבל אני רוצה לתת כאן הוכחה שתעבוד בכל מרחב מכפלה פנימית שהוא. ובכן, בואו פשוט ננסה לעבוד עם ההגדרה:

{::nomarkdown}\( \\|a+b\\|^{2}+\\|a-b\\|^{2}=\left\langle a+b,a+b\right\rangle +\left\langle a-b,a-b\right\rangle \){:/nomarkdown}

{::nomarkdown}\( =\left(\left\langle a,a\right\rangle +\left\langle a,b\right\rangle +\left\langle b,a\right\rangle +\left\langle b,b\right\rangle \right)+\left(\left\langle a,a\right\rangle -\left\langle a,b\right\rangle -\left\langle b,a\right\rangle +\left\langle b,b\right\rangle \right)\){:/nomarkdown}

{::nomarkdown}\( =2\left\langle a,a\right\rangle +2\left\langle b,b\right\rangle =2\\|a\\|^{2}+2\\|b\\|^{2}\){:/nomarkdown}

וואו. זה היה... קל. די מפתיע איך דרך ההצגה הזו של נורמות ומכפלות פנימיות הופכת דברים מסויימים לטריוויאליים.

ובכן, בואו נראה מה מעוללת נורמת הסופרמום בהקשר של כלל המקבילית, עם הוקטורים {::nomarkdown}\( a=\left(1,0\right)\){:/nomarkdown} ו-{::nomarkdown}\( b=\left(0,1\right)\){:/nomarkdown}:

{::nomarkdown}\( 2\\|\left(1,0\right)\\|_{\infty}^{2}+2\\|\left(0,1\right)\\|_{\infty}^{2}=2+2=4\){:/nomarkdown}

{::nomarkdown}\( \\|\left(1,1\right)\\|_{\infty}^{2}+\\|\left(1,-1\right)\\|_{\infty}^{2}=1+1=2\){:/nomarkdown}

אופס! כלל המקבילית לא מתקיים! לכן אנו רואים, מייד, שנורמת הסופרמום לא נתקבלה ממכפלה פנימית.

ומה על נורמת נהגי המוניות? ובכן, {::nomarkdown}\( \left(1,0\right),\left(0,1\right)\){:/nomarkdown} דווקא לא יגרמו צרות, אבל:

{::nomarkdown}\( 2\\|\left(2,0\right)\\|_{1}^{2}+2\\|\left(0,2\right)\\|_{1}^{2}=8+8=16\){:/nomarkdown}

{::nomarkdown}\( \\|\left(2,2\right)\\|_{1}^{2}+\\|\left(2,-2\right)\\|_{1}^{2}=16+16=32\){:/nomarkdown}

ולכן גם נורמת נהגי המוניות לא מתקבלת ממכפלה פנימית. מצאנו קריטריון פשוט ונחמד לבדוק מתי נורמה לא מושרית ממכפלה פנימית, אבל מסתבר שהקריטריון עוד יותר חזק מכך: אם נורמה כלשהי <strong>כן</strong> מקיימת את כלל המקבילית, אז היא <strong>כן</strong> מושרית ממכפלה פנימית, ואפילו אפשר לייצג את המכפלה הפנימית בעזרת הנורמה. בואו נניח לרגע שאנחנו מעל {::nomarkdown}\( \mathbb{R}\){:/nomarkdown} ושיש לנו נורמה {::nomarkdown}\( \\|\cdot\\|\){:/nomarkdown} שמקיימת את כלל המקבילית, ונשחק ב"נדמה לי" שהנורמה אכן הושרתה על ידי מכפלה פנימית, כלומר {::nomarkdown}\( \\|x\\|^{2}=\left\langle x,x\right\rangle \){:/nomarkdown}. כפי שכבר ראינו, {::nomarkdown}\( \\|a+b\\|^{2}=\\|a\\|^{2}+\left\langle a,b\right\rangle +\left\langle b,a\right\rangle +\\|b\\|^{2}\){:/nomarkdown}, ואם אנחנו מעל {::nomarkdown}\( \mathbb{R}\){:/nomarkdown} אז {::nomarkdown}\( \left\langle a,b\right\rangle =\left\langle b,a\right\rangle \){:/nomarkdown}, ולכן קיבלנו:

{::nomarkdown}\( \left\langle a,b\right\rangle =\frac{\\|a+b\\|^{2}-\\|a\\|^{2}-\\|b\\|^{2}}{2}\){:/nomarkdown}

כלומר, עלה בידינו להביע את המכפלה הפנימית של שני איברים שרירותיים באמצעות הנורמה בלבד.

את הביטוי למעלה אפשר לשנות קצת כדי לקבל משהו יותר סימטרי. אם נחזור על התעלול ונפתח את {::nomarkdown}\( \\|a-b\\|^{2}\){:/nomarkdown} נקבל בסוף {::nomarkdown}\( \left\langle a,b\right\rangle =\frac{\\|a\\|^{2}+\\|b\\|^{2}-\\|a-b\\|^{2}}{2}\){:/nomarkdown}. מחיבור שני הביטויים ל-{::nomarkdown}\( \left\langle a,b\right\rangle \){:/nomarkdown} וחלוקה ב-2 נקבל:

{::nomarkdown}\( \left\langle a,b\right\rangle =\frac{\\|a+b\\|^{2}-\\|a-b\\|^{2}}{4}\){:/nomarkdown}

זהות זו נקראת <strong>זהות הפולריזציה</strong>.

אם אנחנו מעל {::nomarkdown}\( \mathbb{C}\){:/nomarkdown} אותו תעלול יעבוד אבל הנוסחה תהיה מסובכת יותר בגלל שכבר לא מתקיים ש-{::nomarkdown}\( \left\langle a,b\right\rangle =\left\langle b,a\right\rangle \){:/nomarkdown}:

{::nomarkdown}\( \left\langle a,b\right\rangle =\frac{\\|x+y\\|^{2}-\\|x-y\\|^{2}+i\\|x+iy\\|^{2}-i\\|x-iy\\|^{2}}{4}\){:/nomarkdown}

עכשיו אפשר לחזור ביתר שאת לדיון הגאומטרי. הסכמנו כבר (אני מקווה) שנורמה מייצגת "אורך". אם {::nomarkdown}\( u,v\){:/nomarkdown} הם שני איברים במרחב {::nomarkdown}\( V\){:/nomarkdown} אז {::nomarkdown}\( u-v\){:/nomarkdown} הוא הוקטור המחבר ביניהן (ו-{::nomarkdown}\( v-u\){:/nomarkdown} הוא אותו וקטור, בכיוון ההפוך). כלומר, {::nomarkdown}\( \\|u-v\\|\){:/nomarkdown} הוא אורך הוקטור שמחבר את {::nomarkdown}\( u\){:/nomarkdown} עם {::nomarkdown}\( v\){:/nomarkdown}, דהיינו ה<strong>מרחק</strong> בין {::nomarkdown}\( u\){:/nomarkdown} ו-{::nomarkdown}\( v\){:/nomarkdown}. בלשון יותר פורמלית, כל נורמה משרה <strong>מטריקה</strong> - מטריקה היא הכללה של מושג המרחק כשם שנורמה היא הכללה של מושג האורך, אבל מטריקה היא מושג כללי יותר (אפשר להגדיר מטריקות גם על מרחבים שאינם וקטוריים ומרחבים שאין כל משמעות לדיבורים על נורמה בהם). לא אציג עכשיו את התורה של מרחבים מטריים; נסתפק בתחושה האינטואיטיבית ש-{::nomarkdown}\( \\|u-v\\|\){:/nomarkdown} אכן מייצג מרחק ונראה מה עושים עם זה כאן.

אולי מוכרת לכם תוצאה מגאומטריה ב-{::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown}: אם נתון לנו ישר ונקודה מחוצה לו, אז מרחק הנקודה מהישר הוא אורך האנך מהנקודה לישר - כש"אנך" הוא קו שמועבר בין הנקודה אל עבר נקודה כלשהי על הישר, כך שהזווית שהוא יוצר עם הישר היא בת 90 מעלות. מה זה אומר שאורך האנך הוא ה"מרחק" של הנקודה מהישר? שאורכו הוא המרחק <strong>הקטן ביותר</strong> של הנקודה מכל נקודה על הישר.

אפשר לדבר על אותה סיטואציה גם במרחב מכפלה פנימית כללי (במקרה שלנו, סוף-ממדי. אנחנו תמיד מדברים על מרחבים סוף ממדיים בכל הסיפור הזה). אצלנו את מקום הנקודה תופס וקטור {::nomarkdown}\( u\){:/nomarkdown}, ואת מקום הישר תופס תת-מרחב {::nomarkdown}\( W\subseteq V\){:/nomarkdown}. וכעת הטענה היא: {::nomarkdown}\( \min\left\{ \\|u-w\\|\|w\in W\right\} \){:/nomarkdown} קיים ומתקבל בנקודה <strong>יחידה</strong> {::nomarkdown}\( w_{0}\in W\){:/nomarkdown}. כדי להבין למה לא טריוויאלי שמינימום על קבוצת מספרים יהיה תמיד קיים, הביטו בקבוצה {::nomarkdown}\( \left\{ 1,\frac{1}{2},\frac{1}{4},\frac{1}{8},\dots\right\} \){:/nomarkdown} שבבירור אין לה מינימום - האיברים בקבוצה "הולכים ומתקרבים" לאפס, אבל אפס אינו איבר בקבוצה (אפס הוא כן מה שנקרא <strong>האינפימום</strong> של הקבוצה, אבל לא על זה מדברים פה).

המקרה הדו-ממדי הפשוט נותן לנו אינטואיציה חזקה מאוד לגבי מה שצריך לעשות כאן: אנחנו מצפים שאם {::nomarkdown}\( w_{0}\){:/nomarkdown} קיימת, אז הוקטור {::nomarkdown}\( u-w_{0}\){:/nomarkdown} יהיה מאונך ל"ישר" {::nomarkdown}\( W\){:/nomarkdown}, כלומר שיהיה אורתוגונלי לכל וקטור בתת-המרחב {::nomarkdown}\( W\){:/nomarkdown}, כלומר שיתקיים {::nomarkdown}\( \left\langle u-w_{0},w\right\rangle =0\){:/nomarkdown} לכל {::nomarkdown}\( w\in W\){:/nomarkdown}. הבה ונתחיל מלהראות שאכן קיים {::nomarkdown}\( w_{0}\in W\){:/nomarkdown} כך ש-{::nomarkdown}\( u-w_{0}\){:/nomarkdown} אורתוגונלי לכל {::nomarkdown}\( W\){:/nomarkdown}.

מכיוון ש-{::nomarkdown}\( V\){:/nomarkdown} ממימד סופי כך גם {::nomarkdown}\( W\){:/nomarkdown} ולכן קיים ל-{::nomarkdown}\( W\){:/nomarkdown} בסיס אורתונורמלי (גרם-שמידט...) {::nomarkdown}\( \left\{ e_{1},\dots,e_{k}\right\} \){:/nomarkdown}. כמו שכבר ראינו כשהתעסקנו עם גרם-שמידט, {::nomarkdown}\( \sum\left\langle u,e_{i}\right\rangle e_{i}\){:/nomarkdown} הוא בדיוק הרכיב של {::nomarkdown}\( u\){:/nomarkdown} שחי "בתוך" {::nomarkdown}\( W\){:/nomarkdown} - ה<strong>הטלה</strong> של {::nomarkdown}\( u\){:/nomarkdown} על {::nomarkdown}\( W\){:/nomarkdown}. וכפי שראינו, {::nomarkdown}\( u-\sum\left\langle u,e_{i}\right\rangle e_{i}\){:/nomarkdown} יהיה אורתוגונלי לכל אחד מוקטורי הבסיס {::nomarkdown}\( e_{i}\){:/nomarkdown} ולכן אורתוגונלי לכל {::nomarkdown}\( W\){:/nomarkdown}. כלומר, נגדיר {::nomarkdown}\( w_{0}=\sum\left\langle u,e_{i}\right\rangle e_{i}\){:/nomarkdown}. אולי עכשיו קצת יותר ברור למה נכון לחשוב עליו כעל "הטלה" - הפיסות מתחילות להתחבר.

מה שהולך לקרות עכשיו תקף גם במרחבים שאינם סוף-ממדיים, בעצם: אני הולך להראות שאם {::nomarkdown}\( u-w_{0}\){:/nomarkdown}אורתוגונלי לכל {::nomarkdown}\( W\){:/nomarkdown} (כאשר {::nomarkdown}\( w_{0}\){:/nomarkdown} וקטור כלשהו ב-{::nomarkdown}\( W\){:/nomarkdown} ולא משנה איך הגעתי אליו - העיקר שתתקיים תכונת האורתוגונליות) אז {::nomarkdown}\( \\|u-w_{0}\\|\){:/nomarkdown} אכן מינימלי. לצורך כך בואו ניקח {::nomarkdown}\( w\in W\){:/nomarkdown} כלשהו השונה מ-{::nomarkdown}\( w_{0}\){:/nomarkdown}, וננסה להעריך את {::nomarkdown}\( \\|u-w\\|\){:/nomarkdown} תוך שימוש באחד התעלולים הכי סטנדרטיים באנליזה (וברגע שהתחלנו לדבר על נורמות, בין אם נרצה ובין אם לאו, אנחנו מתחילים להתעסק באנליזה) - להוסיף ולהחסיר את אותו איבר:

{::nomarkdown}\( \\|u-w\\|^{2}=\\|u-w_{0}+w_{0}-w\\|^{2}=\\|u-w_{0}\\|^{2}+2\mbox{Re}\left\langle u-w_{0},w_{0}-w\right\rangle +\\|w_{0}-w\\|^{2}\){:/nomarkdown}

רק מה, {::nomarkdown}\( w_{0}-w\in W\){:/nomarkdown} כי אנו מחסירים זה מזה שני איברים ב-{::nomarkdown}\( W\){:/nomarkdown}, ולכן המכפלה הפנימית באמצע היא 0, ולכן קיבלנו ש-{::nomarkdown}\( \\|u-w\\|^{2}\){:/nomarkdown} שווה ל-{::nomarkdown}\( \\|u-w_{0}\\|^{2}\){:/nomarkdown} ועוד משהו חיובי, שהרי {::nomarkdown}\( w_{0}\ne w\){:/nomarkdown} ולכן {::nomarkdown}\( \\|w_{0}-w\\|^{2}\){:/nomarkdown} חייב להיות חיובי. סוף הסיפור - הראינו שאם {::nomarkdown}\( u-w_{0}\){:/nomarkdown} אורתוגונלי ל-{::nomarkdown}\( W\){:/nomarkdown} אז {::nomarkdown}\( w_{0}\){:/nomarkdown} הוא "הקירוב הטוב ביותר" ל-{::nomarkdown}\( u\){:/nomarkdown} ב-{::nomarkdown}\( W\){:/nomarkdown}. אפשר להראות גם ההפך - שאם {::nomarkdown}\( w_{0}\){:/nomarkdown} הוא הקירוב הטוב ביותר אז {::nomarkdown}\( u-w_{0}\){:/nomarkdown} אורתוגונלי ל-{::nomarkdown}\( W\){:/nomarkdown}; ההוכחה קצת יותר טכנית ולכן אתחמק ממנה.

צריך עדיין להראות שאם {::nomarkdown}\( w_{0}\){:/nomarkdown} המהולל קיים הוא גם יחיד. כדי לחשוב על סיטואציה שבה קירוב טוב ביותר הוא לא יחיד, חשבו על קבוצה בצורת פרסה, ונקודה שנמצאת בדיוק באמצע הרווח שבין שני צדדי הפרסה. אלא שפרסה איננה תת-מימד ולכן לא רלוונטית למשפט שלנו (למעשה, אפשר לחזק את המשפט שלנו ולדרוש ש-{::nomarkdown}\( W\){:/nomarkdown} תהיה רק קבוצה <strong>קמורה</strong>, אבל נעזוב את זה). ההוכחה כאן קצרה להפתיע, בהינתן ההוכחה של מה שחמקתי מלהוכיח פסקה קודם: אם שני וקטורים הם קירובים-טובים-ביותר, אז {::nomarkdown}\( u\){:/nomarkdown} פחות כל אחד מהם אורתוגונלי לכל {::nomarkdown}\( W\){:/nomarkdown}, ופשוט לא ייתכן שזה יתקיים עבור שני וקטורים שונים, כי שימו לב להוכחה שבה הראיתי שוקטור אורתוגונלי נותן את הקירוב הטוב ביותר - <strong>לכל</strong> וקטור אחר ב-{::nomarkdown}\( W\){:/nomarkdown}, קיבלנו ש-{::nomarkdown}\( \\|u-w\\|&gt;\\|u-w_{0}\\|\){:/nomarkdown}.

התוצאה הזו היא יפה בפני עצמה, אבל עדיין חסר העוקץ. לצורך כך, הבה ונוסיף הגדרה אחת אחרונה למשחק: אם {::nomarkdown}\( W\){:/nomarkdown} הוא תת-מרחב של {::nomarkdown}\( V\){:/nomarkdown}, נסמן ב-{::nomarkdown}\( W^{\perp}\){:/nomarkdown} את <strong>המשלים האורתוגונלי</strong> שלו - המשמעות של השם תכף תתברר, אבל בינתיים נסתפק בהגדרה היבשה של "כל הוקטורים ב-{::nomarkdown}\( V\){:/nomarkdown} שאורתוגונליים לכל הוקטורים ב-{::nomarkdown}\( W\){:/nomarkdown}", כלומר {::nomarkdown}\( W^{\perp}=\left\{ v\in V\|\forall w\in W:\left\langle v,w\right\rangle =0\right\} \){:/nomarkdown}.

הבה ונסמן ב-{::nomarkdown}\( E\){:/nomarkdown} את הפונקציה שבהינתן וקטור {::nomarkdown}\( u\){:/nomarkdown} מחזירה את ההיטל שלו ב-{::nomarkdown}\( W\){:/nomarkdown}. זוהי טרנספורמציה לינארית, כפי שניתן לראות מהמשוואה שהגדירה את {::nomarkdown}\( w_{0}\){:/nomarkdown} ותכונות הלינאריות של מכפלה פנימית. יותר מכך, זוהי <strong>הטלה</strong> במובן שהגדרתי לפני אי-אילו פוסטים, כלומר מתקיים {::nomarkdown}\( E^{2}=E\){:/nomarkdown} כי {::nomarkdown}\( E\left(w\right)=w\){:/nomarkdown} לכל {::nomarkdown}\( w\in W\){:/nomarkdown} (למה? זה באמת לא קשה). אם אתם זוכרים במעורפל, בשעתו השתמשנו בהטלות כדי לפרק את המרחב כולו לסכום ישר של תתי-המרחבים שעליהם ההטלות, ובכן, מטילות. גם כאן אני טוען שמתקיים {::nomarkdown}\( V=W\oplus W^{\perp}\){:/nomarkdown}, לכל {::nomarkdown}\( W\){:/nomarkdown}. איך נראה את זה?

ניקח {::nomarkdown}\( v\in V\){:/nomarkdown} כלשהו. אז {::nomarkdown}\( Ev\in W\){:/nomarkdown} על פי ההגדרה. מכאן שאפשר לכתוב {::nomarkdown}\( v=Ev+\left(v-Ev\right)\){:/nomarkdown}, וכפי שאמרתי קודם (אבל חמקתי מלהוכיח), {::nomarkdown}\( v-Ev\in W^{\perp}\){:/nomarkdown}. צריך גם לראות ש-{::nomarkdown}\( W\cap W^{\perp}=\left\{ 0\right\} \){:/nomarkdown}, מה שנובע מייד מכך שאם {::nomarkdown}\( w\in W\cap W^{\perp}\){:/nomarkdown} אז {::nomarkdown}\( \left\langle w,w\right\rangle =0\){:/nomarkdown} (כי {::nomarkdown}\( w\in W\){:/nomarkdown} ו-{::nomarkdown}\( w\in W^{\perp}\){:/nomarkdown} אורתוגונליים).

מה שאתם צריכים עכשיו להעלות בדמיון שלכם זה את {::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown} עם מערכת הצירים הרגילה - ציר {::nomarkdown}\( x\){:/nomarkdown} וציר {::nomarkdown}\( y\){:/nomarkdown} הם התת-מרחבים האורתוגונליים שנפרשים על ידי הוקטורים האורתונורמליים {::nomarkdown}\( \left(1,0\right),\left(0,1\right)\){:/nomarkdown} וההטלות על הצירים הללו הן ההטלות ה"רגילות" שאנו מכירים. הנה שוב קיבלנו הכללה של הגאומטריה המוכרת לנו.

טוב, מספיק להשתעשע, בפוסט הבא בנושא נעבור לאקשן האמיתי - מה קורה במפגש הענקים בין הטרנספורמציות הלינאריות והמכפלות הפנימיות.
