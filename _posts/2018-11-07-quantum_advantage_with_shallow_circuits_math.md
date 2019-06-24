---
id: 3675
title: "”הוכחה ראשונה לעליונות מחשב קוונטי“ - מה כן (אזהרה - עלול לכלול מתמטיקה)"
date: 2018-11-07 21:37:41
layout: post
categories: 
  - תורת הסיבוכיות
tags: 
  - חישוב קוונטי
---
<h2>מבוא</h2>
אחרי <a href="https://gadial.net/2018/10/23/quantum_advantage_with_shallow_circuits/">שבפוסט הקודם</a> הסברתי קצת בנפנופי ידיים מה הסיפור עם <a href="https://arxiv.org/abs/1704.00690">המאמר</a> ש"הוכיח עליונות קוונטית", בפוסט הזה אני רוצה לגשת לעובי הקורה המתמטי. אני לא לגמרי אניח ידע מוקדם כלשהו, אבל בלי ידע מוקדם שכזה ללא ספק יידרש יותר מאמץ להבין על מה אני מדבר - כדאי לקחת את זה בחשבון.

התוצאה של המאמר היא הפרדה בין שני מודלים חישוביים. בהקשר שלנו, "מודל חישובי" הוא <strong>משהו</strong> שמקבל קלט ומוציא פלט, ויש אילוצים שונים ומשונים לגבי הצורה שבה הוא עושה את זה ואיך מותר לו לעשות את זה. קשר של קלט-פלט נקרא "פונקציה", ומודל חישובי א' הוא חזק יותר ממודל חישובי ב' אם כל מה פונקציה שב' יודע לחשב, גם א' יודע, ובנוסף לכך יש משהו שא' יודע לחשב וב' לא.

המודלים החישוביים שאנחנו מדברים עליהם כאן מנסים למדל <strong>חישוב מקביל</strong>י<strong> קצר</strong>. המודל ה"קלאסי" שמתאר חישוב מקבילי נקרא <strong>מעגלים בוליאניים</strong> ומחלקת הסיבוכיות המתאימה לו מסומנת ב-NC (ראשי תיבות של Nick's Class. כן, ניק זה שם של מישהו. אל תשאלו). תיארתי <a href="https://gadial.net/2011/01/18/what_are_boolean_circuits/">מעגלים בוליאניים</a> כאן, אבל הנה שוב הרעיון: מעגל בוליאני הוא גרף מכוון חסר מעגלים; כל צומת שלא נכנס אליה כלום היא <strong>קלט</strong> וכל צומת שלא יוצא ממנה כלום היא <strong>פלט</strong> וכל צומת פנימי הוא <strong>שער לוגי</strong>. את הקלטים מסמנים ב-{::nomarkdown}\(x_{1},x_{2},\dots,x_{n}\){:/nomarkdown} ואת הפלטים ב-{::nomarkdown}\(y_{1},y_{2},\dots,y_{m}\){:/nomarkdown} (שימו לב שמספר הקלטים והפלטים יכול להיות שונה). השערים הלוגיים יכולים להיות AND, OR, NOT ואנחנו דורשים שלכל שער כזה ייכנסו שתי קשתות לכל היותר.

<strong>חישוב</strong> שמבצע המעגל מתבצע בדרך המתבקשת: מציבים ב-{::nomarkdown}\(x\){:/nomarkdown}-ים ערכים כלשהם של 0 ו-1 ו"מפעפעים" את הערכים הללו בגרף: לכל שער לוגי שהכניסות אליו הן מצמתים שהערך שלהם כבר נקבע, מחשבים את הערך של השער הלוגי בהתאם לפונקציה שלו (שער AND שנכנסים אליו 1 ו-0? הערך שלו יהיה 0). בצורה הזו בסופו של דבר נקבעים הערכים של הפלטים, והרי לנו חישוב של פונקציה. שימו לב שזו פונקציה {::nomarkdown}\(f:\left\{ 0,1\right\} ^{n}\to\left\{ 0,1\right\} ^{m}\){:/nomarkdown}, כלומר בפרט מספר הביטים בכניסה הוא קבוע (מכונות טיורינג, להבדיל, יודעות לפעול על קלטים מאורך כלשהו של ביטים). לכן יותר נפוץ לדבר על <strong>משפחה</strong> של מעגלים - לכל {::nomarkdown}\(n\){:/nomarkdown} יש לנו מעגל שמחשב פונקציה על הקלטים מאורך {::nomarkdown}\(n\){:/nomarkdown}; בדרך כלל דורשים שבהינתן {::nomarkdown}\(n\){:/nomarkdown} נדע לבנות את המעגל הזה אלגוריתמית, אחרת משפחה של מעגלים שכזו עלולה לעשות דברים מוזרים כמו לפתור את בעיית העצירה.

יש לנו שני מדדי סיבוכיות למעגלים - <strong>הגודל</strong> של המעגל, כלומר כמה צמתים יש בו בסך הכל, וה<strong>עומק</strong> שלו, כלומר מה אורך המסלול המקסימלי מקלט אל פלט. האינטואיציה היא כזו: שערים לוגיים שאין תלות בין הקלטים שלהם יכולים לבצע חישובים באופן מקבילי; לכן במקרה הכי קיצוני שבו כל שער לוגי הוא מחשב שפועל עצמאית, אפשר לחשוב על גודל המעגל בתור חסם על מספר המחשבים שנדרשים כדי להריץ את המעגל באופן מקבילי. העומק של המעגל הוא מדד לזמן החישוב - כל מסלול במעגל מייצג סיטואציה שבה מחשב אחד כן צריך לחכות לקלט מהמחשבים שבאים לפניו במסלול כדי שיוכל להמשיך בחישוב.

המחלקה {::nomarkdown}\(\text{NC}\){:/nomarkdown} מחולקת ל"תת-מחלקות": {::nomarkdown}\(\text{NC}^{k}\){:/nomarkdown} כוללת את משפחות המעגלים שבהן <strong>הגודל</strong> של מעגל עם {::nomarkdown}\(n\){:/nomarkdown} קלטים הוא <strong>פולינומי</strong> ב-{::nomarkdown}\(n\){:/nomarkdown}, ואילו העומק שלו הוא {::nomarkdown}\(O\left(\log^{k}n\right)\){:/nomarkdown}, מה שנקרא "פולי-לוגריתמי". המחלקה {::nomarkdown}\(\text{NC}^{0}\){:/nomarkdown} כוללת, אם כן, מעגלים שבהם יש לנו חסם עליון על העומק <strong>שלא תלוי בגודל הקלט</strong>. כלומר, לא משנה אם הקלט הוא מאורך 2 ביטים או 200, עומק המעגל עדיין יהיה חסום על ידי, נאמר, 17. לא קשה לראות שההגבלה הזו יוצרת מגבלה רצינית על הפונקציות שאפשר לחשב במחלקה הזו - כל ביט של פלט יכול להיות תלוי רק במספר סופי של ביטים מהקלט (משהו כמו 2 בחזקת עומק המעגל לכל היותר).
<h2>מעגלים ושערים קוונטיים</h2>
נעבור למעגלים קוונטיים. גם על זה <a href="https://gadial.net/2014/08/19/quantum_circuits_intro/">יש לי פוסט</a>, אבל הנה הסבר שבאמת דורש מינימום היכרות עם קוונטים. אם יש לנו מעגל על {::nomarkdown}\(n\){:/nomarkdown} קיוביטים, אנחנו לא מפרידים אותם, כמו ב-{::nomarkdown}\(\text{NC}^{0}\){:/nomarkdown}, לכל מני אותות שרצים להם על גרף. במקום זה, אנחנו חושבים על המצב של המעגל בכל רגע נתון בתור וקטור במרחב וקטורי מעל {::nomarkdown}\(\mathbb{C}\){:/nomarkdown} ממימד {::nomarkdown}\(2^{n}\){:/nomarkdown}. כל אביר בסיס של המרחב הזה הוא מחרוזת ב-{::nomarkdown}\(\left\{ 0,1\right\} ^{n}\){:/nomarkdown}. למשל, אם {::nomarkdown}\(n=3\){:/nomarkdown} אז אברי הבסיס של המרחב הם {::nomarkdown}\(\left\|000\right\rangle ,\left\|001\right\rangle ,\left\|010\right\rangle ,\left\|011\right\rangle ,\left\|100\right\rangle ,\left\|101\right\rangle ,\left\|110\right\rangle ,\left\|111\right\rangle \){:/nomarkdown}.

הפעלה של שער במעגל היא כפל של הוקטור הזה במטריצה <strong>אוניטרית</strong> מעל {::nomarkdown}\(\mathbb{C}_{2^{n}\times2^{n}}\){:/nomarkdown}. זה כל מה שמעגל קוונטי עושה - כופל את הוקטור בעוד ועוד מטריצות. כדי לשמור את העניינים פשוטים יותר וקרובים יותר למציאות, על פי שער קוונטי משפיע רק על קיוביט אחד או שניים בכל פעם. אבל "משפיע על קיוביט אחד" לא אומר שהפעולה שלו על הוקטור שמייצג את המצב הקוונטי תשנה רק כניסה אחת או שתיים בו; זה רק אומר שמה שהשער בעצם עושה לכל קואורדינטה יושפע רק מביט אחד או שניים במחרוזת שמתארת את הקואורדינטה הזו.

בואו נראה דוגמא מרכזית שנשתמש בה כל הזמן - שער הדאמר, {::nomarkdown}\(H\){:/nomarkdown}. כשחושבים על השער הזה בתור מטריצה שפועלת על מרחב עם קיוביט בודד, התיאור המפורש הוא {::nomarkdown}\(H=\frac{\sqrt{2}}{2}\left(\begin{array}{cc} 1 &amp; 1\\ 1 &amp; -1 \end{array}\right)\){:/nomarkdown}. זו צורת כתיב סבירה, אבל אני אשתמש בצורת כתיב קצת שונה, שבה קצת יותר קל להרגיש מה {::nomarkdown}\(H\){:/nomarkdown} עושה:
<ul>
 	<li>{::nomarkdown}\(H\left\|0\right\rangle =\left\|0\right\rangle +\left\|1\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(H\left\|1\right\rangle =\left\|0\right\rangle -\left\|1\right\rangle \){:/nomarkdown}</li>
</ul>
הכתיב הזה קצת מרמה - מה שאני <strong>באמת</strong> צריך לכתוב הוא {::nomarkdown}\(H\left\|0\right\rangle =\frac{\sqrt{2}}{2}\left\|0\right\rangle +\frac{\sqrt{2}}{2}\left\|1\right\rangle \){:/nomarkdown} כי בלי המקדמים הללו המצב הוא לא תקין (הוא חייב להיות וקטור מנורמה 1) אבל אני מחפף בזה כי בלי המקדמים העסק יותר קריא ואין סכנה אמיתית לבלבול.

עכשיו, איך {::nomarkdown}\(H\){:/nomarkdown} פועל על מצב קוונטי שמורכב מ<strong>שני</strong> קיוביטים? כאן צריך להיזהר - אין משמעות לומר ש-{::nomarkdown}\(H\){:/nomarkdown} פועל על המצב בלי לומר על איזה מהקיוביטים הוא פועל. אז אני אכתוב {::nomarkdown}\(H^{1}\){:/nomarkdown} כדי להגיד \textquotedblright{::nomarkdown}\(H\){:/nomarkdown} שמופעל על הקיוביט הראשון" ו-{::nomarkdown}\(H^{2}\){:/nomarkdown} כדי לומר \textquotedblright{::nomarkdown}\(H\){:/nomarkdown} שמופעל על הקיוביט השני". תחת הסימן הזה:
<ul>
 	<li>{::nomarkdown}\(H^{1}\left\|00\right\rangle =\left\|00\right\rangle +\left\|10\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(H^{1}\left\|10\right\rangle =\left\|00\right\rangle -\left\|10\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(H^{1}\left\|01\right\rangle =\left\|01\right\rangle +\left\|11\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(H^{1}\left\|11\right\rangle =\left\|01\right\rangle -\left\|11\right\rangle \){:/nomarkdown}</li>
</ul>
ואתם כבר יכולים להשלים את מה ש-{::nomarkdown}\(H^{2}\){:/nomarkdown} עושה בעצמכם. עכשיו, הנה השאלה המעניינת באמת - מה מקבלים אם מפעילים את {::nomarkdown}\(H^{1}\){:/nomarkdown} ואחריו את {::nomarkdown}\(H^{2}\){:/nomarkdown}? אפשר גם בסדר ההפעלה ההפוך, מקבלים את אותו הדבר. בואו נכתוב רגע מקרה אחד במפורש:

{::nomarkdown}\(H^{2}\left(H^{1}\left\|00\right\rangle \right)=H^{2}\left\|00\right\rangle +H^{2}\left\|10\right\rangle =\left\|00\right\rangle +\left\|01\right\rangle +\left\|10\right\rangle +\left\|11\right\rangle \){:/nomarkdown}

כלומר, קיבלנו מצב של "פיזור אחיד" בין כל וקטורי הבסיס הקיימים במרחב. כדי לפשט את הסימנים, במקום לכתוב {::nomarkdown}\(H^{2}H^{1}\){:/nomarkdown} אפשר לכתוב {::nomarkdown}\(H^{\otimes2}\){:/nomarkdown}, וגם אפשר "לקודד" את הפעולה הזו בתור אופרטור יחיד, כלומר מטריצה בודדת במקום מכפלה של שתי מטריצות בזו אחר זו (פשוט כפלו את האחת בשניה וקיבלתם את האופרטור). כל הסיפור הזה עובד גם ל-{::nomarkdown}\(n\){:/nomarkdown} ביטים; אנחנו תמיד נקבל

{::nomarkdown}\(H^{\otimes n}\left\|0^{n}\right\rangle =\sum_{x}\left\|x\right\rangle \){:/nomarkdown}

כאשר הסכום רץ על כל ה-{::nomarkdown}\(x\in\left\{ 0,1\right\} ^{n}\){:/nomarkdown} (אני לא כותב את זה במפורש בסכום כי אשמיט את זה גם בהמשך וכדאי שנתרגל). למעשה, המון אלגוריתמים קוונטיים מתחילים בדיוק כך - לוקחים את המצב התמים {::nomarkdown}\(\left\|0^{n}\right\rangle \){:/nomarkdown} ומייצרים ממנו סופרפוזיציה אחידה שכזו על כל המרחב. גם אנחנו נפעל בצורה הזו בהמשך.

אוקיי, אבל מה קורה אם אנחנו מפעילים את {::nomarkdown}\(H^{\otimes n}\){:/nomarkdown} על וקטור בסיס שאינו מחרוזת שכולה אפסים? אני מציע לכם לנסות לעשות את התרגיל הזה בעצמכם קודם, כי זו דרך טובה להבין מה לכל הרוחות הולך פה - וזה גם יהיה קריטי בהמשך, כך שעדיף לכם לגלות את זה עצמאית מאשר שאספר לכם.

חוץ מ-{::nomarkdown}\(H\){:/nomarkdown} יש עוד כמה וכמה שערים נפוצים מאוד. ראשית, ישנם <strong>שערי פאולי</strong> שמסומנים ב-{::nomarkdown}\(X,Y,Z\){:/nomarkdown} ומתוארים על ידי המטריצות

{::nomarkdown}\(X=\left(\begin{array}{cc} 0 &amp; 1\\ 1 &amp; 0 \end{array}\right),Y=\left(\begin{array}{cc} 0 &amp; -i\\ i &amp; 0 \end{array}\right),Z=\left(\begin{array}{cc} 1 &amp; 0\\ 0 &amp; -1 \end{array}\right)\){:/nomarkdown}

מה ש-{::nomarkdown}\(X\){:/nomarkdown} עושה הוא בעצם פעולת NOT:
<ul>
 	<li>{::nomarkdown}\(X\left\|0\right\rangle =\left\|1\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(X\left\|1\right\rangle =\left\|0\right\rangle \){:/nomarkdown}</li>
</ul>
מה ש-{::nomarkdown}\(Z\){:/nomarkdown} עושה מזכיר קצת את {::nomarkdown}\(H\){:/nomarkdown}, רק ש-{::nomarkdown}\(Z\){:/nomarkdown} לא מפצל לשניים, רק מכפיל במינוס 1 באחד מהמקרים:
<ul>
 	<li>{::nomarkdown}\(Z\left\|0\right\rangle =\left\|0\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(Z\left\|1\right\rangle =-\left\|1\right\rangle \){:/nomarkdown}</li>
</ul>
ואילו מה ש-{::nomarkdown}\(Y\){:/nomarkdown} עושה נראה כמו שילוב של {::nomarkdown}\(X\){:/nomarkdown} ו-{::nomarkdown}\(Z\){:/nomarkdown} כשגם מכניסים פנימה את המספר המרוכב {::nomarkdown}\(i\){:/nomarkdown}:
<ul>
 	<li>{::nomarkdown}\(Y\left\|0\right\rangle =-i\left\|1\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(Y\left\|1\right\rangle =i\left\|0\right\rangle \){:/nomarkdown}</li>
</ul>
הדמיון הזה לא מקרי - קל לראות ש-{::nomarkdown}\(Y=iXZ\){:/nomarkdown}, ובאופן דומה גם {::nomarkdown}\(Z=iXY\){:/nomarkdown} וכדומה, כל מטריצת פאולי מתקבלת מכפל של שתי האחרות וסקלר הפיך. תחת ההגדרה המתאימה (שתזהה את כל הכפולות בסקלר הפיך של המטריצות בתור אותו איבר) ותוספת מטריצת היחידה מקבלים פה חבורה - <strong>חבורת פאולי</strong>.

אל האוסף הזה מצטרפת מטריצה נוספת שנקראת לפעמים <strong>פאזה</strong> ומזכירה את {::nomarkdown}\(Z\){:/nomarkdown}:

{::nomarkdown}\(S=\left(\begin{array}{cc} 1 &amp; 0\\ 0 &amp; -i \end{array}\right)\){:/nomarkdown}

קל לבדוק ש-{::nomarkdown}\(S^{2}=Z\){:/nomarkdown}, כך שאפשר לחשוב על {::nomarkdown}\(S\){:/nomarkdown} בתור "שורש" של {::nomarkdown}\(Z\){:/nomarkdown} (למעשה, כמעט תמיד בוחרים בתור {::nomarkdown}\(S\){:/nomarkdown} את המטריצה שבה הכניסה השניה היא {::nomarkdown}\(i\){:/nomarkdown} ולא {::nomarkdown}\(-i\){:/nomarkdown}, אבל המאמר הנוכחי לקח את זו אז אני דבק בסימון הזה). עוד דבר שקל לבדוק הוא ש-{::nomarkdown}\(X=HZH\){:/nomarkdown} (תנסו!) ולכן בעצם אפשר לקבל את כל מטריצות פאולי מתוך {::nomarkdown}\(H,S\){:/nomarkdown} לבד. החבורה שנוצרת על ידי {::nomarkdown}\(H,S\){:/nomarkdown} באופן הזה (כזכור, כשמזהים שתי מטריצות שנבדלות זו מזו על ידי כפל בקבוע) נקראת <strong>חבורת קליפורד</strong> (עבור קיוביט בודד) והיא עומדת במרכז אחד מהמשפטים היפים שאני מכיר בתחום - משפט Gottesman--Knill שמראה כיצד ניתן לבצע סימולציה של מעגל קוונטי שנבנה מתוך שערים מחבורת קליפורד בלבד <strong>בזמן ומקום פולינומיים</strong>. אני מקווה להקדיש לזה פוסט מתישהו, אבל כרגע השורה התחתונה היא שהשערים שראינו עד כה הם לא בדיוק מה שנותן לחישוב קוונטי את הכוח שלו - צריך "עוד משהו". ה"עוד משהו" הזה נקרא שער-{::nomarkdown}\(T\){:/nomarkdown} והוא מוגדר כך: {::nomarkdown}\(T=\left(\begin{array}{cc} 1 &amp; 0\\ 0 &amp; e^{\frac{i\pi}{4}} \end{array}\right)\){:/nomarkdown}.

עד עכשיו דיברתי רק על שערים על קיוביט בודד, אבל זו בעצם קצת רמאות. כל עוד כל מה שמבצעים במעגל קוונטי הוא פעולות על קיוביט בודד, אין שום דבר מעניין במעגל הזה ואפשר לסמלץ אותו קלאסית בלי בעיה - בודקים מה קורה לכל קיוביט בנפרד, וזהו. הכוח של מעגלים קוונטיים מגיע כשגורמים לקיוביטים להיות תלויים זה בזה. למשל, אם אני יוצר את המצב הקוונטי {::nomarkdown}\(\left\|00\right\rangle +\left\|11\right\rangle \){:/nomarkdown} אז קיבלתי מצב שאי אפשר להבין אותו על ידי חשיבה על כל קיוביט בנפרד (להבדיל מ-{::nomarkdown}\(\left\|00\right\rangle +\left\|01\right\rangle +\left\|10\right\rangle \left\|11\right\rangle \){:/nomarkdown} שעליו אפשר לחשוב בתור {::nomarkdown}\(\left(\left\|0\right\rangle +\left\|1\right\rangle \right)\left(\left\|0\right\rangle +\left\|1\right\rangle \right)\){:/nomarkdown} שכזה). אז מה עושים? שערים "נשלטים". אלו שערים של שני קיוביטים, ולכן כאלו שמיוצגים על ידי מטריצה מסדר {::nomarkdown}\(4\times4\){:/nomarkdown}. אני אציג שלושה כאלו - בשניהם הרעיון הוא "אם הקיוביט הראשון הוא 0 לא לעשות כלום, ואם הוא 1 אז להפעיל שער פאולי מסויים על הקיוביט השני". כשמפעילים {::nomarkdown}\(X\){:/nomarkdown} השער נקרא CNOT וכשמפעילים {::nomarkdown}\(Z\){:/nomarkdown} או {::nomarkdown}\(S\){:/nomarkdown} השער נקרא, ובכן, Controlled-Z ו-Controlled-S, או בקיצור {::nomarkdown}\(CZ\){:/nomarkdown} ו-{::nomarkdown}\(CS\){:/nomarkdown}. דווקא {::nomarkdown}\(CZ\){:/nomarkdown} ו-{::nomarkdown}\(CS\){:/nomarkdown} יהיו השערים שבהם נשתמש עבור התוצאה הנוכחית למרות ש-CNOT הוא יותר פופולרי באופן כללי.

המטריצות של השערים הרלוונטיים הן {::nomarkdown}\(CNOT=\left(\begin{array}{cccc} 1 &amp; 0 &amp; 0 &amp; 0\\ 0 &amp; 1 &amp; 0 &amp; 0\\ 0 &amp; 0 &amp; 0 &amp; 1\\ 0 &amp; 0 &amp; 1 &amp; 0 \end{array}\right),CZ=\left(\begin{array}{cccc} 1 &amp; 0 &amp; 0 &amp; 0\\ 0 &amp; 1 &amp; 0 &amp; 0\\ 0 &amp; 0 &amp; 1 &amp; 0\\ 0 &amp; 0 &amp; 0 &amp; -1 \end{array}\right),CS=\left(\begin{array}{cccc} 1 &amp; 0 &amp; 0 &amp; 0\\ 0 &amp; 1 &amp; 0 &amp; 0\\ 0 &amp; 0 &amp; 1 &amp; 0\\ 0 &amp; 0 &amp; 0 &amp; -i \end{array}\right)\){:/nomarkdown} והן פשוטות למדי - הן פשוט <strong>מטריצות בלוקים אלכסוניות</strong> שבהן הבלוק הראשון הוא מטריצת היחידה והשני הוא {::nomarkdown}\(X\){:/nomarkdown} או {::nomarkdown}\(Z\){:/nomarkdown} או {::nomarkdown}\(S\){:/nomarkdown}, בהתאמה. הפעולה שלהן מתוארת כך:
<ul>
 	<li>{::nomarkdown}\(CNOT\left\|00\right\rangle =\left\|00\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(CNOT\left\|01\right\rangle =\left\|01\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(CNOT\left\|10\right\rangle =\left\|11\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(CNOT\left\|11\right\rangle =\left\|10\right\rangle \){:/nomarkdown}</li>
</ul>
ו-
<ul>
 	<li>{::nomarkdown}\(CZ\left\|00\right\rangle =\left\|00\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(CZ\left\|01\right\rangle =\left\|01\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(CZ\left\|10\right\rangle =\left\|10\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(CZ\left\|11\right\rangle =-\left\|11\right\rangle \){:/nomarkdown}</li>
</ul>
ו-
<ul>
 	<li>{::nomarkdown}\(CS\left\|00\right\rangle =\left\|00\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(CS\left\|01\right\rangle =\left\|01\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(CS\left\|10\right\rangle =\left\|10\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(CS\left\|11\right\rangle =-i\left\|11\right\rangle \){:/nomarkdown}</li>
</ul>
שערי {::nomarkdown}\(CZ\){:/nomarkdown} ו-{::nomarkdown}\(CS\){:/nomarkdown} הם מאוד <strong>סימטריים</strong>, להבדיל מ-{::nomarkdown}\(CNOT\){:/nomarkdown} - אפשר לחשוב עליהם בתור מעין שערי AND שכאלו, שמכפילים בקבוע ספציפי רק אם ה-AND של שני הקלטים הוא 1. במובן מסויים הסימטריה לא מפתיעה כי גם {::nomarkdown}\(CNOT\){:/nomarkdown} הוא שער סימטרי, אם מסתכלים על הקלטים כשהם מיוצגים בבסיס קצת שונה, אבל לא ניכנס לזה כרגע.

וזהו, סיימנו להציג את כל השערים הקוונטיים שיהיו רלוונטיים לנו. עכשיו אפשר לחזור למה שקראתי לו "חבורת קליפורד" קודם; ההגדרה המלאה של החבורה היא בתור החבורה שנוצרת על ידי {::nomarkdown}\(H,S\){:/nomarkdown} ו-{::nomarkdown}\(\text{CNOT}\){:/nomarkdown}, ומשפט Gottesman--Knill תקף עבורה - כלומר, הוספת {::nomarkdown}\(\text{CNOT}\){:/nomarkdown}-ים לא מקלקלת את היכולת שלנו לסמלץ מעגלים כאלו באופן קלאסי.

<strong>מעגל קוונטי</strong> הוא בסך הכל סדרה של השערים הללו. את הסדרה אפשר לחלק ל"שכבות" - בכל שכבה אנחנו דורשים שכל השערים יפעלו על קיוביטים שונים (כלומר, אין שני שערים באותה שכבה שפועלים על אותו קיוביט). למשל, ביצוע פעולת {::nomarkdown}\(H^{\otimes n}\){:/nomarkdown} דורש {::nomarkdown}\(n\){:/nomarkdown} שערי {::nomarkdown}\(H\){:/nomarkdown}, אבל כולם יכולים להתבצע "בבת אחת", באותה שכבה. המחלקה SQC כוללת את כל המשפחות של מעגלים קוונטיים עם מספר שערים פולינומי שמספר השכבות שלהם הוא חסום על ידי קבוע שלא תלוי ב-{::nomarkdown}\(n\){:/nomarkdown}.

עכשיו אנחנו מבינים את התוצאה: הוכחה ש-{::nomarkdown}\(\text{SQC}\ne\text{NC}^{0}\){:/nomarkdown}. אבל עדיין צריך להבין את <strong>הבעיה</strong> שתהיה שייכת למחלקה אחת ולא לשניה.
<h2>בעיית ברנשטיין-וזירני</h2>
לפני שנציג את הבעיה שבה עוסק המאמר, בואו נעשה כמוהו ונסתכל קודם על בעיה פשוטה יותר, שגם התוכן שלה וגם הפתרון שלה יהיו דומים מאוד למה שנעשה בהמשך. הבעיה נקראת "בעיית ברנשטיין-וזירני" והיא עוסקת בלמידה של פונקציה לינארית "חבויה" שנתונה באמצעות אורקל. בואו ניכנס לפורמליזם.

באופן כללי אם {::nomarkdown}\(F^{n}\){:/nomarkdown} הוא מרחב וקטורי ממימד {::nomarkdown}\(n\){:/nomarkdown} מעל שדה {::nomarkdown}\(F\){:/nomarkdown} ו-{::nomarkdown}\(f:F^{n}\to F\){:/nomarkdown} היא פונקציונל לינארי ({::nomarkdown}\(f\left(\lambda x+y\right)=\lambda f\left(x\right)+f\left(y\right)\){:/nomarkdown}) אז קל לראות שקיים {::nomarkdown}\(z\in F^{n}\){:/nomarkdown} כך ש-{::nomarkdown}\(f\left(x\right)=z\cdot x=\sum_{i=1}^{n}z_{i}x_{i}\){:/nomarkdown} ; פשוט מגדירים {::nomarkdown}\(z_{i}=f\left(e_{i}\right)\){:/nomarkdown} כאשר {::nomarkdown}\(e_{i}\){:/nomarkdown} הוקטור ב-{::nomarkdown}\(F^{n}\){:/nomarkdown} שכולו 0 למעט 1 במקום {::nomarkdown}\(i\){:/nomarkdown}. כעת,

{::nomarkdown}\(f\left(x\right)=f\left(\sum_{i=1}^{n}x_{i}e_{i}\right)=\sum_{i=1}^{n}x_{i}f\left(e_{i}\right)=\sum_{i=1}^{n}z_{i}x_{i}\){:/nomarkdown}

כלומר, כל פונקציונל לינארי הוא בעצם "מכפלה סקלרית", ואם יש לנו דרך לחשב את {::nomarkdown}\(f\){:/nomarkdown} על הערכים {::nomarkdown}\(e_{1},\dots,e_{n}\){:/nomarkdown} נוכל תוך {::nomarkdown}\(n\){:/nomarkdown} הפעלות של {::nomarkdown}\(f\){:/nomarkdown} "ללמוד" מהו ה-{::nomarkdown}\(z\){:/nomarkdown} שמגדיר את הפונקציונל הזה, ולא משנה באיזו דרך הפונקציונל נתון לנו. גם אם הוא נתון בתור "קופסה שחורה" שכל מה שאנחנו יכולים לעשות איתה הוא להכניס קלט ולקבל פלט, תוך {::nomarkdown}\(n\){:/nomarkdown} שאילתות נלמד את {::nomarkdown}\(f\){:/nomarkdown}.

בהקשר הקונקרטי שלנו, {::nomarkdown}\(F=\mathbb{Z}_{2}\){:/nomarkdown} ו-{::nomarkdown}\(f\){:/nomarkdown} נתונה באמצעות <strong>אורקל</strong>, שהוא הפורמליזם המתמטי של "קופסה שחורה" שכזו. לא קשה להוכיח, אחרי פירמול מתאים, ש<strong>חייבים</strong> {::nomarkdown}\(n\){:/nomarkdown} שאילתות כדי ללמוד את {::nomarkdown}\(z\){:/nomarkdown} - אחרי {::nomarkdown}\(n-1\){:/nomarkdown} שאילתות, האינפורמציה שהתקבלה עדיין מתאימה לשני ערכים שונים של {::nomarkdown}\(z\){:/nomarkdown}. מצד שני, אם האורקל שלנו הוא <strong>קוונטי</strong>, אפשר בקריאות - באופן דרסטי! מספיקה קריאה אחת בלבד לאורקל.

אבל מה זה "אורקל קוונטי"? אורקל רגיל הוא <strong>משהו</strong> שמקבל {::nomarkdown}\(x\){:/nomarkdown} ומחזיר {::nomarkdown}\(f\left(x\right)\){:/nomarkdown}. האורקל הקוונטי שבו נשתמש כאן עושה משהו מוזר יותר: הוא מקבל סופרפוזיציה {::nomarkdown}\(\sum_{x\in\mathbb{Z}_{2}^{n}}a_{x}\left\|x\right\rangle \){:/nomarkdown} ומחזיר סופרפוזיציה {::nomarkdown}\(\sum_{x\in\mathbb{Z}_{2}^{n}}a_{x}\left(-1\right)^{f\left(x\right)}\left\|x\right\rangle \){:/nomarkdown}. באופן קומפקטי, אם אסמן אותו {::nomarkdown}\(U_{f}\){:/nomarkdown}, הוא אופרטור אוניטרי שמבצע את הפעולה הבאה: {::nomarkdown}\(U_{f}\left\|x\right\rangle =\left(-1\right)^{f\left(x\right)}\left\|x\right\rangle \){:/nomarkdown}.

אפשר לטעון שהאורקל הזה הוא מטבעו חזק יותר מאורקל רגיל - אבל העניין הוא שבמימושים מעשיים של אורקל כזה, ה"עבודה" שנדרשת ממנו לא תהיה שונה מהעבודה שנדרשת מאורקל "רגיל" שמחשב את {::nomarkdown}\(f\){:/nomarkdown}. למרבה השמחה אני לא צריך להיכנס לעובי הטיעון הזה בגלל שמה שהמאמר החדש עושה הוא בדיוק <strong>לבטל את השימוש באורקל</strong>; הוא מעין ניסוח מחודש, מתוחכם יותר, של ברנשטיין-וזירני בגרסה שבה הכל נתון במפורש.

עדיין, איך משתמשים באורקל הקוונטי כדי לפתור את ברנשטיין-וזירני בקריאה אחת בלבד? המעגל שפותר את הבעיה הוא פשוט להחריד:

{::nomarkdown}\(\left\|z\right\rangle =H^{\otimes n}U_{f}H^{\otimes n}\left\|0\right\rangle \){:/nomarkdown}

המעגל הזה עושה שלושה דברים: מתחילים מהמצב {::nomarkdown}\(\left\|0\right\rangle \){:/nomarkdown} ומפעילים עליו {::nomarkdown}\(H^{\otimes n}\){:/nomarkdown}, מה שכפי שכבר ראינו מייצר את הסופרפוזיציה האחידה של כל המצבים הקוונטיים האפשריים על {::nomarkdown}\(n\){:/nomarkdown} קיוביטים. אחר כך מפעילים את {::nomarkdown}\(U_{f}\){:/nomarkdown} על המצב הזה - מחשבים "במקביל" את {::nomarkdown}\(f\){:/nomarkdown} על כל הקלטים האפשריים. לבסוף, "מקפלים חזרה" את הסופרפוזיציה באמצעות עוד הפעלה של {::nomarkdown}\(H^{\otimes n}\){:/nomarkdown} ובאופן פלאי היא תתקפל למצב קוונטי אחד ויחיד - {::nomarkdown}\(\left\|z\right\rangle \){:/nomarkdown} - שמקודד בדיוק את הוקטור שחיפשנו. כל מה שנשאר בסיום הוא לבצע מדידה, ומכיוון שאנחנו במצב בסיס אחד ויחיד, המדידה תחזיר את התשובה הנכונה בהסתברות 1: האלגוריתם הוא אפילו לא הסתברותי באופיו, הצלחה תמיד מובטחת. זה יפהפה.

למה זה עובד? בשביל להבין את זה צריך לחזור לשאלה ששאלתי קודם - מהו באופן כללי {::nomarkdown}\(H^{\otimes n}\left\|y\right\rangle \){:/nomarkdown}, עבור {::nomarkdown}\(\left\|y\right\rangle \){:/nomarkdown} שהוא לא בהכרח {::nomarkdown}\(\left\|0\right\rangle \){:/nomarkdown}? לשם כך בואו נזכיר לעצמנו את ההגדרה של {::nomarkdown}\(H\){:/nomarkdown}:
<ul>
 	<li>{::nomarkdown}\(H\left\|0\right\rangle =\left\|0\right\rangle +\left\|1\right\rangle \){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(H\left\|1\right\rangle =\left\|0\right\rangle -\left\|1\right\rangle \){:/nomarkdown}</li>
</ul>
אפשר לחשוב על {::nomarkdown}\(H\){:/nomarkdown} שפועל על וקטור של {::nomarkdown}\(n\){:/nomarkdown} קיוביטים באופן הבא: הוא פועל על קיוביט ספציפי (סימנתי ב-{::nomarkdown}\(H^{i}\){:/nomarkdown} את שער {::nomarkdown}\(H\){:/nomarkdown} שפועל על הקיוביט ה-{::nomarkdown}\(i\){:/nomarkdown}) והוא מייצר שני וקטורים מוקטור הקלט - אחד שבו הקיוביט נותר כמות שהוא, ואחד שבו הקיוביט התהפך. בשלושה מבין ארבעת המקרים הללו הוא לא משנה את הסימן של הוקטור, אבל במקרה אחד הוא מכפיל את הסימן של הוקטור במינוס 1 - במקרה שבו הקיוביט שעליו הוא פועל הוא 1, והוא <strong>הותיר אותו כמות שהוא</strong>.

כעת, נניח ש-{::nomarkdown}\(\left\|y\right\rangle =\left\|0110\right\rangle \){:/nomarkdown}. כשאנחנו מפעילים את {::nomarkdown}\(H^{\otimes4}\){:/nomarkdown} על {::nomarkdown}\(\left\|y\right\rangle \){:/nomarkdown} נקבל סופרפוזיציה של מצבים. מה יהיה הסימן של המצב {::nomarkdown}\(\left\|1100\right\rangle \){:/nomarkdown}? לשם כך, בואו נבין מה ה"מסלול" שבו נוצר המצב הזה. הפעלנו {::nomarkdown}\(H^{1}\){:/nomarkdown} על {::nomarkdown}\(\left\|y\right\rangle \){:/nomarkdown} והחלטנו להפוך את הקיוביט הראשון ל-{::nomarkdown}\(1\){:/nomarkdown} - זה לא כופל במינוס 1 כי הקיוביט לא היה 1 קודם. אחר כך הפעלנו את {::nomarkdown}\(H^{2}\){:/nomarkdown} על התוצאה, {::nomarkdown}\(\left\|1110\right\rangle \){:/nomarkdown} והחלטנו <strong>לא</strong> להפוך את הקיוביט השני, מה שמשאיר אותנו ב-{::nomarkdown}\(\left\|1110\right\rangle \){:/nomarkdown} ומכפיל את המקדם שלנו ב-{::nomarkdown}\(-1\){:/nomarkdown}. את הקיוביט השלישי בחרנו להפוך (<strong>לא</strong> מכפיל במינוס 1) ואת הרביעי בחרנו להותיר כמות שהוא, כך שבסופו של דבר קיבלנו {::nomarkdown}\(-\left\|1100\right\rangle \){:/nomarkdown}.

אם כן, כדי לדעת מה יהיה הסימן של {::nomarkdown}\(\left\|x\right\rangle \){:/nomarkdown} שהתקבל מ-{::nomarkdown}\(\left\|y\right\rangle \){:/nomarkdown} צריך לעשות שני דברים:
<ul>
 	<li>לבדוק אילו קיוביטים הם 1 ב-{::nomarkdown}\(\left\|y\right\rangle \){:/nomarkdown} ונשארו כאלו גם ב-{::nomarkdown}\(\left\|x\right\rangle \){:/nomarkdown}.</li>
 	<li>לספור האם המספר שלהם הוא זוגי (ואז ביצענו מספר זוגי של מכפלות במינוס 1 וכלום לא השתנה) או אי-זוגי.</li>
</ul>
לשני אלו יחד יש תיאור פשוט במיוחד: אנחנו מתעניינים ב-{::nomarkdown}\(x\cdot y\){:/nomarkdown} מודולו 2 - וזה, במקרה, בדיוק גם מה שברנשטיין וזירני מתעסק בו. פורמלית:

{::nomarkdown}\(H^{\otimes n}\left\|y\right\rangle =\sum_{x\in\mathbb{Z}_{2}^{n}}\left(-1\right)^{x\cdot y}\left\|x\right\rangle \){:/nomarkdown}

ועכשיו קל לראות למה המעגל הקוונטי עובד:

{::nomarkdown}\(H^{\otimes n}U_{f}H^{\otimes n}\left\|0\right\rangle =H^{\otimes n}U_{f}\sum_{y}\left\|y\right\rangle =\){:/nomarkdown}

{::nomarkdown}\(=H^{\otimes n}\sum_{y}\left(-1\right)^{z\cdot y}\left\|y\right\rangle =\sum_{y}\sum_{x}\left(-1\right)^{z\cdot y}\left(-1\right)^{x\cdot y}\left\|x\right\rangle =\sum_{x}\left(\sum_{y}\left(-1\right)^{\left(x+z\right)\cdot y}\right)\left\|x\right\rangle \){:/nomarkdown}

כדי להבין מה קורה עכשיו, בואו נקבע את {::nomarkdown}\(x\){:/nomarkdown} להיות משהו, ונבדוק את הערך של המחובר הפנימי, {::nomarkdown}\(\sum_{y}\left(-1\right)^{\left(x+z\right)\cdot y}\){:/nomarkdown}. אולי יהיה יותר קל אם במקום {::nomarkdown}\(x+z\){:/nomarkdown} יופיע שם {::nomarkdown}\(x-z\){:/nomarkdown}, מה ששקול לחלוטין כי אנחנו מעל {::nomarkdown}\(\mathbb{Z}_{2}\){:/nomarkdown} ולכן {::nomarkdown}\(1=-1\){:/nomarkdown}. אז מהו {::nomarkdown}\(\sum_{y}\left(-1\right)^{\left(x-z\right)\cdot y}\){:/nomarkdown}? יש פה שתי אפשרויות. ראשית, אם {::nomarkdown}\(x=z\){:/nomarkdown} אז נקבל את הסכום {::nomarkdown}\(\sum_{y}1=2^{n}\){:/nomarkdown} כי {::nomarkdown}\(y\){:/nomarkdown} רץ על כל {::nomarkdown}\(\left\{ 0,1\right\} ^{n}\){:/nomarkdown}. כעת, אם {::nomarkdown}\(x\ne z\){:/nomarkdown} ולו בקואורדינטה בודדת אז נקבל 0. למה? בואו נניח שההבדל הוא בקואורדינטה הראשונה, כלומר {::nomarkdown}\(x-z=1w^{\prime}\){:/nomarkdown} כך ש-{::nomarkdown}\(w^{\prime}\){:/nomarkdown} היא מחרוזת של {::nomarkdown}\(n-1\){:/nomarkdown} ביטים. עכשיו אפשר לחלק את כל ה-{::nomarkdown}\(y\){:/nomarkdown}-ים לזוגות זוגות של איברים מהצורה {::nomarkdown}\(0y^{\prime}\){:/nomarkdown} ו-{::nomarkdown}\(1y^{\prime}\){:/nomarkdown} כך ש-{::nomarkdown}\(y^{\prime}\){:/nomarkdown} היא מחרוזת של {::nomarkdown}\(n-1\){:/nomarkdown} ביטים; בבירור {::nomarkdown}\(\left(0y^{\prime}\right)\cdot\left(1w^{\prime}\right)\ne\left(1y^{\prime}\right)\cdot\left(1w^{\prime}\right)\){:/nomarkdown} כי באגף שמאל הקואורדינטה הראשונה לא תורמת כלום למכפלה הסקלרית, ובאגף ימין הוא תורמת 1. לכן {::nomarkdown}\(\left(-1\right)^{\left(0y^{\prime}\right)\cdot\left(1w^{\prime}\right)}+\left(-1\right)^{\left(1y^{\prime}\right)\cdot\left(1w^{\prime}\right)}=0\){:/nomarkdown} ולכן כל הסכום {::nomarkdown}\(\sum_{y}\left(-1\right)^{\left(x-z\right)\cdot y}\){:/nomarkdown} יהיה שווה אפס כי הוא סכום של זוגות של איברים שסכומם הוא אפס.

המסקנה? {::nomarkdown}\(\sum_{x}\left(\sum_{y}\left(-1\right)^{\left(x-z\right)\cdot y}\right)\left\|x\right\rangle =2^{n}\left\|z\right\rangle \){:/nomarkdown}, אבל הקבוע לא באמת צריך להיות שם. זוכרים שאני מחפף בכתיבת הקבועים? כשאני כותב {::nomarkdown}\(H^{\otimes n}\left\|0\right\rangle =\sum_{x}\left\|x\right\rangle \){:/nomarkdown} זה שקר; אני באמת צריך לכתוב {::nomarkdown}\(\left(\frac{1}{\sqrt{2}}\right)^{n}\sum_{x}\left\|x\right\rangle \){:/nomarkdown}; וגם ההפעלה השניה של {::nomarkdown}\(H^{\otimes n}\){:/nomarkdown} מכפילה בקבוע הזה, כך שבסך הכל הכפלנו בקבוע {::nomarkdown}\(\frac{1}{2^{n}}\){:/nomarkdown} שמתקזז בדיוק עם ה-{::nomarkdown}\(2^{n}\){:/nomarkdown} שהתווסף לנו. המסקנה הסופית היא ש-{::nomarkdown}\(H^{\otimes n}U_{f}H^{\otimes n}\left\|0\right\rangle =\left\|z\right\rangle \){:/nomarkdown}, כפי שהבטחתי.
<h2>בעיית הפונקציה הלינארית החבויה</h2>
עכשיו נעבור אל הבעיה שהמאמר מתאר. נתחיל עם גרסה פשוטה שלה, ואז נסבך אותה עוד טיפה מסיבה שתכף אבהיר. הרעיון הבסיסי זהה לברנשטיין-וזיראני: יש פונקציה לינארית שמוגדרת על ידי כפל סקלרי בוקטור כלשהו - יש למצוא את הוקטור. ההבדל המהותי? הפונקציה <strong>לא נתונה על ידי אורקל</strong> אלא על ידי פונקציה אחרת, מסובכת יותר, ש"מחביאה" בתוך ההגדרה שלה את הפונקציה הפשוטה.

הפונקציה המורכבת יותר תהיה סוג של <strong>תבנית ריבועית</strong> עם הזזה אפינית. לא אומר לכם כלום? זו פשוט פונקציה {::nomarkdown}\(q\left(x\right):\mathbb{Z}_{2}^{n}\to\mathbb{Z}_{4}\){:/nomarkdown} (שימו לב: הטווח הוא {::nomarkdown}\(\mathbb{Z}_{4}\){:/nomarkdown} ולא {::nomarkdown}\(\mathbb{Z}_{2}\){:/nomarkdown}) שמוגדרת בעזרת מטריצה {::nomarkdown}\(A\in\mathbb{Z}_{2}^{n\times n}\){:/nomarkdown} ווקטור {::nomarkdown}\(b\in\mathbb{Z}_{2}^{n}\){:/nomarkdown} כך ש-

{::nomarkdown}\(q\left(x\right)=2x^{t}Ax+bx=2\sum_{1\le i&lt;j\le n}A_{i,j}x_{i}x_{j}+\sum_{i=1}^{n}b_{i}x_{i}\){:/nomarkdown}

הפונקציה {::nomarkdown}\(q\){:/nomarkdown} נתונה במפורש; אנחנו לא מתעניינים בדיוק בה, אלא בפונקציה לינארית {::nomarkdown}\(f\){:/nomarkdown} שהיא <strong>הצמצום</strong> של {::nomarkdown}\(q\){:/nomarkdown} לתת-מרחב מסויים של {::nomarkdown}\(\mathbb{Z}_{2}^{n}\){:/nomarkdown}. תת-המרחב מוגדר כך:

{::nomarkdown}\(\mathcal{L}_{q}=\left\{ x\in\mathbb{Z}_{2}^{n}\ \|\ \forall y\in\mathbb{Z}_{2}^{n}:q\left(x+y\right)=q\left(x\right)+q\left(y\right)\right\} \){:/nomarkdown}

כלומר, {::nomarkdown}\(\mathcal{L}_{q}\){:/nomarkdown} כולל את כל הוקטורים ב-{::nomarkdown}\(\mathbb{Z}_{2}^{n}\){:/nomarkdown} שעבורם {::nomarkdown}\(q\){:/nomarkdown} "נראית לינארית" ביחס ל<strong>כל</strong> הוקטורים ב-{::nomarkdown}\(\mathbb{Z}_{2}^{n}\){:/nomarkdown}. אנחנו רוצים להשתכנע ש-{::nomarkdown}\(\mathcal{L}_{q}\){:/nomarkdown} הוא באמת תת-מרחב לינארי וש-{::nomarkdown}\(q\){:/nomarkdown} מצומצמת אליו היא פונקציה לינארית. מכיוון שאנחנו מעל {::nomarkdown}\(\mathbb{Z}_{2}\){:/nomarkdown}, כלומר הסקלרים היחידים הם 0 ו-1, העבודה שלנו קלה יחסית: כדי להוכיח שקבוצה היא תת-מרחב מספיק להראות שהיא סגורה לחיבור, וכדי להראות שפונקציה היא לינארית מספיק להראות שהיא מקיימת {::nomarkdown}\(q\left(x+y\right)=q\left(x\right)+q\left(y\right)\){:/nomarkdown}, מה שאוטומטית הולך להתקיים עבור אברי {::nomarkdown}\(\mathcal{L}_{q}\){:/nomarkdown} כי כך המרחב הזה מוגדר.

כדי להראות ש-{::nomarkdown}\(\mathcal{L}_{q}\){:/nomarkdown} הוא מרחב וקטורי צריך להראות שאם {::nomarkdown}\(x,z\in\mathcal{L}_{q}\){:/nomarkdown} אז גם {::nomarkdown}\(x+z\in\mathcal{L}_{q}\){:/nomarkdown}, כלומר שלכל {::nomarkdown}\(y\){:/nomarkdown} מתקיים {::nomarkdown}\(q\left(\left(x+z\right)+y\right)=q\left(x+z\right)+q\left(y\right)\){:/nomarkdown}. כדי לראות את זה, נשים לב לכך ש-{::nomarkdown}\(q\left(\left(x+z\right)+y\right)=q\left(x+\left(z+y\right)\right)\){:/nomarkdown} ומכיוון ש-{::nomarkdown}\(x\in\mathcal{L}_{q}\){:/nomarkdown} נסיק ש

{::nomarkdown}\(q\left(x+\left(z+y\right)\right)=q\left(x\right)+q\left(z+y\right)\){:/nomarkdown}

ומכיוון ש-{::nomarkdown}\(z\in\mathcal{L}_{q}\){:/nomarkdown} אפשר לפתוח גם את המחובר השמאלי ולקבל

{::nomarkdown}\(q\left(x\right)+q\left(z+y\right)=q\left(x\right)+q\left(z\right)+q\left(y\right)\){:/nomarkdown}

ולסיום, {::nomarkdown}\(q\left(x\right)+q\left(z\right)=q\left(x+z\right)\){:/nomarkdown} כמובן שמתקיים בגלל ש-{::nomarkdown}\(x\in\mathcal{L}_{q}\){:/nomarkdown}. זה מסיים את ההוכחה הזו.

אם נצמצם את {::nomarkdown}\(q\){:/nomarkdown} אל {::nomarkdown}\(\mathcal{L}_{q}\){:/nomarkdown} עדיין קשה יהיה לקרוא למה שנקבל "פונקציה לינארית" כי הטווח של פונקציה לינארית צריך להיות מרחב וקטורי בעצמו מעל השדה שלנו, במקרה הזה {::nomarkdown}\(\mathbb{Z}_{2}\){:/nomarkdown}, אבל {::nomarkdown}\(\mathbb{Z}_{4}\){:/nomarkdown} אינו כזה (כי אם {::nomarkdown}\(V\){:/nomarkdown} מרחב וקטורי מעל {::nomarkdown}\(\mathbb{Z}_{2}\){:/nomarkdown} אז {::nomarkdown}\(v+v=\left(1+1\right)v=0\cdot v=0\){:/nomarkdown}, אבל ב-{::nomarkdown}\(\mathbb{Z}_{4}\){:/nomarkdown} קיים איבר מסדר 4). מה שכן קל לראות הוא שדה-פקטו, {::nomarkdown}\(q\){:/nomarkdown} מחזירה רק 0 או 2 על אברי {::nomarkdown}\(\mathcal{L}_{q}\){:/nomarkdown}, כי {::nomarkdown}\(q\left(x\right)+q\left(x\right)=q\left(x+x\right)=q\left(0\right)=0\){:/nomarkdown}, כלומר {::nomarkdown}\(2q\left(x\right)=0\){:/nomarkdown} מה שקורה רק אם {::nomarkdown}\(q\left(x\right)\in\left\{ 0,2\right\} \){:/nomarkdown}. לכן אפשר להגדיר פונקציה {::nomarkdown}\(f:\mathcal{L}_{q}\to\mathbb{Z}_{2}\){:/nomarkdown} על ידי {::nomarkdown}\(f\left(x\right)=\frac{q\left(x\right)}{2}\){:/nomarkdown} ו<strong>זו</strong> תהיה הפונקציה הלינארית שלנו, כלומר קיים {::nomarkdown}\(z\in\mathbb{Z}_{2}^{n}\){:/nomarkdown} כך ש-{::nomarkdown}\(f\left(x\right)=z\cdot x\){:/nomarkdown}, מה שאומר ש-{::nomarkdown}\(q\left(x\right)=2z\cdot x\){:/nomarkdown} לכל {::nomarkdown}\(x\in\mathcal{L}_{q}\){:/nomarkdown}. הנה האתגר שלנו במפורש - למצוא את ה-{::nomarkdown}\(z\){:/nomarkdown} הזה. לבעיה הזו המאמר קורא Hidden Linear Function Problem, והיא <strong>כמעט</strong> הבעיה ששייכת ל-SQC אבל לא ל-{::nomarkdown}\(\text{NC}^{0}\){:/nomarkdown}; הבעיה פה תהיה שהבעיה לא שייכת ל-SQC ויהיה צורך בהגבלה נוספת עליה כדי להכניס אותה ל-SQC למרות שזה לא יהיה מספיק כדי להכניס אותה ל-{::nomarkdown}\(\text{NC}^{0}\){:/nomarkdown}.

המעגל הקוונטי שפותר את הבעיה הזו יהיה שוב פשוט עד להפתיע, ובערך מהצורה {::nomarkdown}\(H^{\otimes n}U_{q}H^{\otimes n}\left\|0\right\rangle \){:/nomarkdown}. אני אומר "בערך" כי החלק של ה-{::nomarkdown}\(U_{q}\){:/nomarkdown} הוא עכשיו לא אורקל אלא מעגל קונקרטי שמקבל כקלט, בנוסף ל-{::nomarkdown}\(H^{\otimes n}\left\|0\right\rangle \){:/nomarkdown}, גם את {::nomarkdown}\(A\){:/nomarkdown} ו-{::nomarkdown}\(b\){:/nomarkdown}. האפקט של {::nomarkdown}\(U_{q}\){:/nomarkdown} על {::nomarkdown}\(\left\|x\right\rangle \){:/nomarkdown} מאוד דומה לזה של ברנשטיין וזירני אבל מביא בחשבון את זה שהפעם יש <strong>ארבעה</strong> פלטים אפשריים שונים של {::nomarkdown}\(q\){:/nomarkdown} על קלט כללי, ולכן המקדם שהוא מצמיד ל-{::nomarkdown}\(\left\|x\right\rangle \){:/nomarkdown} יהיה בעל אחד מבין ארבעה ערכים מובחנים:

{::nomarkdown}\(U_{q}\left\|x\right\rangle =i^{q\left(x\right)}\left\|x\right\rangle \){:/nomarkdown}

כאשר {::nomarkdown}\(i\){:/nomarkdown} הוא מספר מדומה שמקיים {::nomarkdown}\(i^{2}=-1\){:/nomarkdown}.

עוד דבר שהוא קצת שונה הוא שהפעם לא יתקיים {::nomarkdown}\(H^{\otimes n}U_{q}H^{\otimes n}\left\|0\right\rangle =\left\|z\right\rangle \){:/nomarkdown}; הפלט יהיה סופרפוזיציה של מצבים. רק ש<strong>כל</strong> המצבים הללו יתאימו לערכים אפשריים של {::nomarkdown}\(z\){:/nomarkdown} שפותר את הבעיה; הפעם פשוט יש יותר מערך אחד כזה.

אז יש לנו שתי שאלות:
<ol>
 	<li>איך אנחנו מממשים את {::nomarkdown}\(U_{q}\){:/nomarkdown} עם שערים קוונטיים?</li>
 	<li>למה בדיוק כל איבר שכלול ב-{::nomarkdown}\(H^{\otimes n}U_{q}H^{\otimes n}\left\|0\right\rangle \){:/nomarkdown} הוא פתרון?</li>
</ol>
התשובה ל-1 פשוטה ויפה: {::nomarkdown}\(U_{q}=\bigotimes_{j}S_{j}^{b_{j}}\cdot\prod_{1\le i\le j\le n}CZ_{i,j}^{A_{i,j}}\){:/nomarkdown}, אבל בואו נסביר מה זה אומר.

שער {::nomarkdown}\(CZ_{i,j}\){:/nomarkdown} מפעיל Controlled-Z על {::nomarkdown}\(i,j\){:/nomarkdown} כש-{::nomarkdown}\(i\){:/nomarkdown} הוא קיוביט ה"בקרה". כשאני מסמן {::nomarkdown}\(CZ_{i,j}^{A_{i,j}}\){:/nomarkdown} פירוש הדבר הוא שאני מוסיף <strong>עוד התניה</strong> על השער הזה - אם {::nomarkdown}\(A_{i,j}=1\){:/nomarkdown} אז הוא יופעל, ואם {::nomarkdown}\(A_{i,j}=0\){:/nomarkdown} הוא לא יופעל; דה פקטו אפשר לקרוא לזה שער {::nomarkdown}\(CCZ\){:/nomarkdown}. הסימון {::nomarkdown}\(\prod\){:/nomarkdown} בא לומר שאני מפעיל את השערים הללו סדרתית ולא "בבת אחת", למרות שאם אפשר למקבל חלק מההפעלות מן הסתם נעשה את זה.

אחרי שערי ה-{::nomarkdown}\(CZ\){:/nomarkdown} מגיעה הפעלה "בבת אחת" של שערי פאזה: {::nomarkdown}\(S_{j}\){:/nomarkdown} מסמן הפעלה של שער פאזה, כלומר {::nomarkdown}\(\left(\begin{array}{cc} 1 &amp; 0\\ 0 &amp; -i \end{array}\right)\){:/nomarkdown}, על קיוביט מספר {::nomarkdown}\(j\){:/nomarkdown}. רק שכאן גם שערי הפאזה מותנים בכך ש-{::nomarkdown}\(b_{j}=1\){:/nomarkdown} ואחרת הם לא מופעלים; קראתי לשער כזה {::nomarkdown}\(CS\){:/nomarkdown} בהתחלה.

עכשיו, למה שיתקיים {::nomarkdown}\(U_{q}\left\|x\right\rangle =i^{q\left(x\right)}\left\|x\right\rangle \){:/nomarkdown}?

ראשית, {::nomarkdown}\(CZ_{i,j}\left\|x\right\rangle =\left(-1\right)^{x_{i}\cdot x_{j}}\left\|x\right\rangle \){:/nomarkdown} - זוכרים שאמרתי ש-{::nomarkdown}\(CZ\){:/nomarkdown} הוא סוג של AND? כאן רואים את זה. על כן, {::nomarkdown}\(CZ_{i,j}^{A_{i,j}}\left\|x\right\rangle =\left(-1\right)^{A_{i,j}x_{i}\cdot x_{j}}\left\|x\right\rangle \){:/nomarkdown}. מכיוון ש-{::nomarkdown}\(i^{2}=-1\){:/nomarkdown} אפשר גם לכתוב {::nomarkdown}\(CZ_{i,j}^{A_{i,j}}\left\|x\right\rangle =i^{2A_{i,j}x_{i}\cdot x_{j}}\left\|x\right\rangle \){:/nomarkdown}

שנית, {::nomarkdown}\(S_{j}^{b_{j}}\left\|x\right\rangle =i^{b_{j}\cdot x_{j}}\left\|x\right\rangle \){:/nomarkdown}; גם שער {::nomarkdown}\(CS\){:/nomarkdown} הוא מעין AND, הפעם בין {::nomarkdown}\(b_{i}\){:/nomarkdown} ו-{::nomarkdown}\(x_{i}\){:/nomarkdown}.

משני אלו נקבל:

{::nomarkdown}\(U_{q}\left\|x\right\rangle =i^{q\left(x\right)}\left\|x\right\rangle =\prod_{i,j}i^{\left(2A_{i,j}x_{i}\cdot x_{j}\right)}\prod_{j}i^{b_{j}\cdot x_{j}}\left\|x\right\rangle \){:/nomarkdown}

{::nomarkdown}\(=i^{\left(2\sum_{i,j}A_{i,j}x_{i}x_{j}+\sum_{j}b_{j}x_{j}\right)}\left\|x\right\rangle =i^{q\left(x\right)}\left\|x\right\rangle \){:/nomarkdown}

שזה בדיוק מה שרצינו. האורקל נעלם; אנחנו רואים איך אפשר לממש את האפקט {::nomarkdown}\(U_{q}\left\|x\right\rangle =i^{q\left(x\right)}\left\|x\right\rangle \){:/nomarkdown} עם שערים קונקרטיים לחלוטין. הבעיה היחידה היא <strong>עומק</strong> המעגל שמבצע את החישוב, ונדבר על זה עוד מעט.

עכשיו ננסה להבין איך נראה המצב הקוונטי {::nomarkdown}\(H^{\otimes n}U_{q}H^{\otimes n}\left\|0\right\rangle \){:/nomarkdown}. ה-{::nomarkdown}\(H^{\otimes n}\left\|0\right\rangle \){:/nomarkdown} שבהתחלה מייצר את הסופרפוזיציה האחידה, {::nomarkdown}\(\sum_{x\in\mathbb{Z}_{2}^{n}}\left\|x\right\rangle \){:/nomarkdown}, וה-{::nomarkdown}\(U_{q}\){:/nomarkdown} שאחר כך מייצר לנו את הסופרפוזיציה {::nomarkdown}\(\sum_{y\in\mathbb{Z}_{2}^{n}}i^{q\left(y\right)}\left\|y\right\rangle \){:/nomarkdown}. מה עכשיו?

יותר מוקדם בפוסט ראינו ש-{::nomarkdown}\(H^{\otimes n}\left\|y\right\rangle =\sum_{z\in\mathbb{Z}_{2}^{n}}\left(-1\right)^{z\cdot y}\left\|z\right\rangle \){:/nomarkdown}. אם נשתמש בזה כאן, נקבל שהסופרפוזיציה שמגיעים אליה בסיום היא

{::nomarkdown}\(\sum_{y\in\mathbb{Z}_{2}^{n}}i^{q\left(y\right)}\left(\sum_{z\in\mathbb{Z}_{2}^{n}}\left(-1\right)^{z\cdot y}\left\|z\right\rangle \right)\){:/nomarkdown}

או, אם נחליף את סדר הסכימה:

{::nomarkdown}\(\sum_{z\in\mathbb{Z}_{2}^{n}}\left(\sum_{y\in\mathbb{Z}_{2}^{n}}i^{q\left(y\right)}\left(-1\right)^{z\cdot y}\right)\left\|z\right\rangle \){:/nomarkdown}

כלומר, המקדם של {::nomarkdown}\(\left\|z\right\rangle \){:/nomarkdown} בסופרפוזיציה שבסיום הוא הביטוי {::nomarkdown}\(\sum_{y\in\mathbb{Z}_{2}^{n}}i^{q\left(y\right)}\left(-1\right)^{z\cdot y}\){:/nomarkdown}. כדי להקל על חישוב הביטוי הזה, המאמר מאמץ את הסימון הבא, עבור כל תת-מרחב לינארי {::nomarkdown}\(\mathcal{L}\){:/nomarkdown} של {::nomarkdown}\(\mathbb{Z}_{2}^{n}\){:/nomarkdown}:

{::nomarkdown}\(\Gamma\left(\mathcal{L},z\right)=\sum_{y\in\mathbb{Z}_{2}^{n}}i^{q\left(y\right)}\left(-1\right)^{z\cdot y}\){:/nomarkdown}

אז המטרה שלנו היא להבין מהו {::nomarkdown}\(\Gamma\left(\mathbb{Z}_{2}^{n},z\right)\){:/nomarkdown}. המאמר נכנס לחישוב בפירוט, אבל לנו מספיק להבין כרגע למה זה אפס אם {::nomarkdown}\(z\){:/nomarkdown} הוא לא פתרון לבעיית הפונקציה הלינארית החבויה ומשהו שונה מאפס אם הוא כן. לשם כך, המאמר נוקט בגישה הבאה: ניקח משלים ישר {::nomarkdown}\(\mathcal{K}\){:/nomarkdown} <strong>כלשהו</strong> של {::nomarkdown}\(\mathcal{L}_{q}\){:/nomarkdown}, כלומר תת-מרחב וקטורי של {::nomarkdown}\(\mathbb{Z}_{2}^{n}\){:/nomarkdown} כך שמתקיים {::nomarkdown}\(\mathbb{Z}_{2}^{n}=\mathcal{L}_{q}\oplus\mathcal{K}\){:/nomarkdown}. כעת ניתן להוכיח שמתקיים

{::nomarkdown}\(\Gamma\left(\mathbb{Z}_{2}^{n},z\right)=\Gamma\left(\mathcal{L}_{q},z\right)\cdot\Gamma\left(\mathcal{K},z\right)\){:/nomarkdown}

האינטואיציה לכך פשוטה: כל {::nomarkdown}\(y\in\mathbb{Z}_{2}^{n}\){:/nomarkdown} אפשר להציג <strong>באופן יחיד </strong>בתור {::nomarkdown}\(y=y_{1}+y_{2}\){:/nomarkdown} כך ש-{::nomarkdown}\(y_{1}\in\mathcal{L}_{q}\){:/nomarkdown} ו-{::nomarkdown}\(y_{2}\in\mathcal{K}\){:/nomarkdown}. כעת קחו את הביטוי {::nomarkdown}\(\Gamma\left(\mathcal{L},z\right)=\sum_{y\in\mathbb{Z}_{2}^{n}}i^{q\left(y\right)}\left(-1\right)^{z\cdot y}\){:/nomarkdown} והציבו {::nomarkdown}\(y_{1}+y_{2}\){:/nomarkdown} במקום {::nomarkdown}\(y\){:/nomarkdown}: שימו לב ש-{::nomarkdown}\(q\left(y_{1}+y_{2}\right)=q\left(y_{1}\right)+q\left(y_{2}\right)\){:/nomarkdown} כי {::nomarkdown}\(y_{1}\in\mathcal{L}_{q}\){:/nomarkdown} וזו בדיוק התכונה המייחדת של {::nomarkdown}\(\mathcal{L}_{q}\){:/nomarkdown}, שהקסם הזה מתקיים בה.

בואו נשתכנע עכשיו ש-{::nomarkdown}\(\Gamma\left(\mathcal{L}_{q},z\right)\){:/nomarkdown} מתאפס אם ורק אם {::nomarkdown}\(z\){:/nomarkdown} הוא לא פתרון של בעיית הפונקציה הלינארית החבויה. הרעיון הוא כזה: אנחנו רוצים לחשב את {::nomarkdown}\(\sum_{y\in\mathcal{L}_{q}}i^{q\left(y\right)}\left(-1\right)^{z\cdot y}\){:/nomarkdown} ויכולים להיעזר בכך שאנחנו יודעים שמעל {::nomarkdown}\(\mathcal{L}_{q}\){:/nomarkdown}, הפונקציה {::nomarkdown}\(q\left(y\right)\){:/nomarkdown} מתנהגת כמו מכפלה באיבר ספציפי שנקרא לו {::nomarkdown}\(z^{\prime}\){:/nomarkdown}. פורמלית: {::nomarkdown}\(q\left(y\right)=2z^{\prime}\cdot y\){:/nomarkdown}. לכן נקבל:

{::nomarkdown}\(\Gamma\left(\mathcal{L}_{q},z\right)=\sum_{y\in\mathcal{L}_{q}}i^{2z^{\prime}\cdot y}\left(-1\right)^{z\cdot y}=\sum_{y\in\mathcal{L}_{q}}\left(-1\right)^{z^{\prime}\cdot y}\left(-1\right)^{z\cdot y}=\sum_{y\in\mathcal{L}_{q}}\left(-1\right)^{\left(z-z^{\prime}\right)\cdot y}\){:/nomarkdown}

קיבלנו כמעט את אותו הדבר עם ברנשטיין-וזירני, רק ששם הסכום רץ על כל {::nomarkdown}\(\mathbb{Z}_{2}^{n}\){:/nomarkdown} וכאן הוא רץ רק על {::nomarkdown}\(\mathcal{L}_{q}\){:/nomarkdown}. בברנשטיין-וזירני הסכום לא התאפס רק אם המכפלה הפנימית <strong>כן</strong> התאפסה לכל {::nomarkdown}\(y\){:/nomarkdown}; מכיוון ששם {::nomarkdown}\(y\){:/nomarkdown} רץ על כל {::nomarkdown}\(\mathbb{Z}_{2}^{n}\){:/nomarkdown} זה קרה רק אם {::nomarkdown}\(z-z^{\prime}\){:/nomarkdown} היה וקטור האפס, אבל עכשיו {::nomarkdown}\(y\){:/nomarkdown} רץ רק על {::nomarkdown}\(\mathcal{L}_{q}\){:/nomarkdown} ולכן המכפלה הפנימית יכולה להתאפס לעוד איברים; כזכור, משתמשים בסימון {::nomarkdown}\(\mathcal{L}_{q}^{\perp}\){:/nomarkdown} כדי לתאר את קבוצת האיברים הזו - <strong>המרחב האורתוגונלי</strong> של {::nomarkdown}\(\mathcal{L}_{q}\){:/nomarkdown}. אז אם {::nomarkdown}\(z-z^{\prime}\in\mathcal{L}_{q}^{\perp}\){:/nomarkdown}, הסכום לא מתאפס. במקרה שבו {::nomarkdown}\(z-z^{\prime}\in\mathcal{L}_{q}^{\perp}\){:/nomarkdown}, לכל {::nomarkdown}\(y\in\mathcal{L}_{q}\){:/nomarkdown} מתקיים {::nomarkdown}\(\left(z-z^{\prime}\right)y=0\){:/nomarkdown}, כלומר {::nomarkdown}\(zy=z^{\prime}y\){:/nomarkdown}, כלומר {::nomarkdown}\(q\left(y\right)=2z\cdot y\){:/nomarkdown} וקיבלנו שגם {::nomarkdown}\(z\){:/nomarkdown} הוא פתרון לבעיית הפונקציה הלינארית החבויה - כפי שרצינו.

מה קורה אם {::nomarkdown}\(z-z^{\prime}\notin\mathcal{L}_{q}^{\perp}\){:/nomarkdown}? במקרה הזה, קיים {::nomarkdown}\(a\in\mathcal{L}_{q}\){:/nomarkdown} כך ש-{::nomarkdown}\(\left(z-z^{\prime}\right)a=1\){:/nomarkdown}, ועכשיו אפשר לחלק את אברי {::nomarkdown}\(\mathcal{L}_{q}\){:/nomarkdown} לזוגות-זוגות: לכל {::nomarkdown}\(y\in\mathcal{L}_{q}\){:/nomarkdown}, בן הזוג שלו יהיה {::nomarkdown}\(y+a\){:/nomarkdown} (ובן הזוג של {::nomarkdown}\(y+a\){:/nomarkdown} יהיה, ובכן, {::nomarkdown}\(\left(y+a\right)+a=y+2a=y\){:/nomarkdown} כי אנחנו מעל {::nomarkdown}\(\mathbb{Z}_{2}\){:/nomarkdown}). בבירור {::nomarkdown}\(\left(z-z^{\prime}\right)\left(y+a\right)=\left(z-z^{\prime}\right)y+1\){:/nomarkdown} כך ששני האיברים הללו מחזירים ערך שונה בכפל סקלרי ב-{::nomarkdown}\(z-z^{\prime}\){:/nomarkdown} ולכן {::nomarkdown}\(\left(-1\right)^{\left(z-z^{\prime}\right)y}+\left(-1\right)^{\left(z-z^{\prime}\right)\left(y+a\right)}=0\){:/nomarkdown} וקיבלנו ש-{::nomarkdown}\(\Gamma\left(\mathcal{L}_{q},z\right)=0\){:/nomarkdown} אם {::nomarkdown}\(z-z^{\prime}\notin\mathcal{L}_{q}^{\perp}\){:/nomarkdown}, כלומר במקרה שבו {::nomarkdown}\(z\){:/nomarkdown} <strong>אינו</strong> פתרון של בעיית הפונקציה הלינארית החבויה.
<h2>סיכום ביניים זריז ופרידה שהיא בריחה מהירה</h2>
בשלב הזה כיסינו את החלק מהמאמר שקל לתאר ודורש רק קצת אלגברה לינארית נחמדה. ההמשך קצת פחות נחמד והפוסט הזה כבר ארוך דיו, כך שלא אמשיך לתאר את המאמר כאן. עדיין, מה עוד נשאר לעשות?

ראשית, הבעיה עצמה: מה שקראתי לו "בעיית הפונקציה הלינארית החבויה" היא אמנם בעיה שלא שייכת ל-{::nomarkdown}\(\text{NC}^{0}\){:/nomarkdown} אבל גם ל-{::nomarkdown}\(\text{SQC}\){:/nomarkdown} היא כנראה לא שייכת. כדי לקבל בעיה ששייכת ל-{::nomarkdown}\(\text{SQL}\){:/nomarkdown} צריך להגביל את הסיטואציה קצת יותר. בבעיית הפונקציה הלינארית החבויה יש לנו תבנית ריבועית שנתונה על ידי מטריצה {::nomarkdown}\(A\in\mathbb{Z}_{2}^{n\times n}\){:/nomarkdown} ווקטור {::nomarkdown}\(b\in\mathbb{Z}_{2}^{n}\){:/nomarkdown}. ההגבלה הנוספת היא הדרישה שיתקיים {::nomarkdown}\(A_{i,j}=0\){:/nomarkdown} עבור רוב הכניסות של {::nomarkdown}\(A\){:/nomarkdown}. הנה הפורמליזם: בואו נסתכל על השריג {::nomarkdown}\(\mathbb{Z}_{N}\times\mathbb{Z}_{N}\){:/nomarkdown} עבור {::nomarkdown}\(N\){:/nomarkdown} כלשהו; כל נקודה בשריג היא מהצורה {::nomarkdown}\(\left(i,j\right)\){:/nomarkdown} כך ש-{::nomarkdown}\(0\le i,j\le N-1\){:/nomarkdown} - יש בסך הכל {::nomarkdown}\(N^{2}\){:/nomarkdown} נקודות כאלו. נבחר {::nomarkdown}\(n=N^{2}\){:/nomarkdown} (זה מספר השורות והעמודות של {::nomarkdown}\(A\){:/nomarkdown}) וכעת כל כניסה של {::nomarkdown}\(A\){:/nomarkdown} ניתנת לייצוג בתור נקודה בשריג. כעת, {::nomarkdown}\(A\){:/nomarkdown} מכילה 0 בכל כניסה שמתאימה לזוג נקודות ש<strong>אינן</strong> שכנות בשריג - כלומר, המרחק ביניהן על פי המטריקה {::nomarkdown}\(d\left(\left(i,j\right),\left(x,y\right)\right)=\left\|i-x\right\|+\left\|j-y\right\|\){:/nomarkdown} שונה מ-1. עבור כניסות במטריצה שמייצגות נקודות שכנות, הערך יכול להיות 0 או 1. לבעיה <strong>הזו</strong> קורא המאמר "בעיית הפונקציה הלינארית החבויה הדו-ממדית" והיא הבעיה שהיא קלה מספיק כדי להיות ב-{::nomarkdown}\(\text{SQC}\){:/nomarkdown} אבל לא ב-{::nomarkdown}\(\text{NC}^{0}\){:/nomarkdown}.

נותרו שני דברים לעשות, שהם ה"בשר" האמיתי של המאמר - להראות איך לבנות מעגל קוונטי מעומק קבוע עבור הבעיה (בדיוק בעזרת מימוש ה-{::nomarkdown}\(U_{q}\){:/nomarkdown} שראינו למעלה, רק צריך לראות שזה ניתן למימוש), ולהראות שהבעיה לא ב-{::nomarkdown}\(\text{NC}^{0}\){:/nomarkdown}. לעת עתה אני אמלט באלגנטיות מלהציג את הדברים הללו כאן.
