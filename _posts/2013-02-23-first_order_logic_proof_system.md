---
id: 2357
title: "מערכת הוכחה ללוגיקה מסדר ראשון"
date: 2013-02-23 16:54:04
layout: post
categories: 
  - לוגיקה
tags: 
  - לוגיקה מסדר ראשון
  - לוגיקה מתמטית
  - מערכות הוכחה
---
סדרת הפוסטים שלי על לוגיקה הגיעה עד לתיאור של הסינטקס והסמנטיקה של <a href="http://www.gadial.net/2012/06/17/first_order_logic/">לוגיקה מסדר ראשון</a> ושם עצרתי, כי השלב הבא, שעליו אני רוצה לדבר עכשיו, הוא לא פשוט. בתחשיב הפסוקים, שהצגתי בתור "חימום" ללוגיקה מסדר ראשון, היעד שלנו היה הצגת <strong>מערכת הוכחה: </strong>אוסף של אקסיומות וכללי גזירה שמאפשרים, בהינתן קבוצת פסוקים כלשהי ("הנחות"), לגזור את כל המסקנות הסמנטיות מאותה קבוצת פסוקים באופן סינטקטי לגמרי: לכל מסקנה שכזו תהיה הוכחה, שהיא בסך הכל סדרה סופית של פסוקים שכל אחד מהם הוא אקסיומה, הנחה או נובעת מפסוקים קודמים על ידי כללי הגזירה. אחרי ש<a href="http://www.gadial.net/2012/04/04/propositional_caclulus_proofs/">הצגתי</a> את מערכת ההוכחה <a href="http://www.gadial.net/2012/04/08/propositional_calculus_completeness/">הראיתי</a> שהיא <strong>נאותה</strong> ו<strong>שלמה</strong>, כאשר נאותות פירושה היה "כל מה שיכיח, נכון" ואילו שלמות הייתה "כל מה שנכון, יכיח". ההוכחה של משפט השלמות הייתה מורכבת יחסית; בלוגיקה מסדר ראשון יש לנו רמת סיבוך נוספת.

נתחיל עם הצגה של מערכת ההוכחה שלי עבור לוגיקה מסדר ראשון. כדאי להעיר שאין קונצנזוס בנקודה הזו: יש מערכות הוכחה רבות ושונות בספרות, למרות שבשורה התחתונה ההוכחות של משפט השלמות והנאותות שלהן דומות באופיין. אני בוחר להציג כאן את זו שבעיני אישית היא הפשוטה ביותר. אני מניח שהקוראים זוכרים בערך איך מוגדרים הסינטקס והסמנטיקה של לוגיקה מסדר ראשון, כמו גם מה בערך הולך במערכת ההוכחה של תחשיב הפסוקים; לא אחזור על זה שוב כאן.

מכיוון שלוגיקה מסדר ראשון היא מעין הכללה של תחשיב הפסוקים, די ברור שמערכת ההוכחה שלנו תהיה הכללה של זו של תחשיב הפסוקים. כזכור, במערכת ההוכחה הזו השתמשתי בשלוש "תבניות אקסיומה":
<ol>
	<li>{::nomarkdown}\( \alpha\to\left(\beta\to\alpha\right)\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( \left[\alpha\to\left(\gamma\to\beta\right)\right]\to\left[\left(\alpha\to\gamma\right)\to\left(\alpha\to\beta\right)\right]\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( \left(\neg\alpha\to\neg\beta\right)\to\left(\beta\to\alpha\right)\){:/nomarkdown}</li>
</ol>
אלו "תבניות" כי במקום {::nomarkdown}\( \alpha,\beta,\gamma\){:/nomarkdown} אפשר להציב פסוקים כלשהם. באותו האופן התבניות הללו יהיו שייכות גם למערכת ההוכחה של לוגיקה מסדר ראשון, כאשר במקום {::nomarkdown}\( \alpha,\beta,\gamma\){:/nomarkdown} מציבים נוסחאות כלשהן בלוגיקה מסדר ראשון. תבנית כזו היא בעלת התכונה הסמנטית שלא חשוב מה נציב בה - בכל מבנה ובכל השמה, הפסוק שמתקבל מההצבות הללו יהיה בעל ערך אמת, ואפילו אם הנוסחאות שמציבים הן מורכבות וכללות כמתים ופונקציות ואקשן. הסיבה פשוטה: אם מחשבים את ערך האמת של הפסוק שמתקבל מההשמות, בסופו של דבר נקבל שכל מה שהצבנו במקום {::nomarkdown}\( \alpha\){:/nomarkdown} מתורגם לאחד משניים: או {::nomarkdown}\( \mbox{T}\){:/nomarkdown} או {::nomarkdown}\( \mbox{F}\){:/nomarkdown}, וכך גם עבור {::nomarkdown}\( \beta,\gamma\){:/nomarkdown}, מה שאומר שלא משנה איזו נוסחה מורכבת אפשר להציב במקום {::nomarkdown}\( \alpha,\beta,\gamma\){:/nomarkdown}, עדיין תחת מבנה והשמה נתונים הם מתנהגים כמו משתנים בתחשיב הפסוקים, ולכן תבנית אקסיומה שהייתה טאוטולוגיה בתחשיב הפסוקים נותרת כזו גם כעת.

כלל ההיסק שלנו בתחשיב הפסוקים היה מודוס פוננס, {::nomarkdown}\( \mbox{MP}\){:/nomarkdown}, שמתוך {::nomarkdown}\( \alpha\){:/nomarkdown} ו-{::nomarkdown}\( \alpha\to\beta\){:/nomarkdown} גזר את {::nomarkdown}\( \beta\){:/nomarkdown}. נשתמש בו גם כעת. כפי שראינו, זה מספיק כדי לגזור כל טאוטולוגיה בתחשיב הפסוקים. הבעיה היא שבלוגיקה מסדר ראשון יש עוד דברים. מן הסתם יהיו אלה דברים שקשורים לכמתי ה"קיים" ו"לכל" שאין משהו דומה להם בתחשיב הפסוקים. בואו ניתן דוגמה:

{::nomarkdown}\( \forall x\left(R\left(x\right)\right)\to R\left(y\right)\){:/nomarkdown}

זו נוסחה שמשתמשת בסימן יחס חד-מקומי {::nomarkdown}\( R\){:/nomarkdown}, ויש בה משתנה קשור אחד {::nomarkdown}\( x\){:/nomarkdown} ומשתנה חופשי אחד {::nomarkdown}\( y\){:/nomarkdown}. בכל מבנה {::nomarkdown}\( \mathcal{M}\){:/nomarkdown} ערך האמת של הרישא של הפסוק - {::nomarkdown}\( \forall x\left(R\left(x\right)\right)\){:/nomarkdown} - נקבע באופן יחיד, והוא יהיה {::nomarkdown}\( \mbox{T}\){:/nomarkdown} אם ורק אם {::nomarkdown}\( R^{\mathcal{M}}=D^{\mathcal{M}}\){:/nomarkdown}, כלומר אם היחס {::nomarkdown}\( R\){:/nomarkdown} מתפרש ב-{::nomarkdown}\( \mathcal{M}\){:/nomarkdown} בתור "כל העולם". כעת, אם הערך של {::nomarkdown}\( \forall x\left(R\left(x\right)\right)\){:/nomarkdown} הוא {::nomarkdown}\( \mbox{F}\){:/nomarkdown} אז הנוסחה כולה היא תמיד בעל ערך אמת {::nomarkdown}\( \mbox{T}\){:/nomarkdown}; ואילו אם ערך האמת שלו הוא {::nomarkdown}\( \mbox{T}\){:/nomarkdown} אז {::nomarkdown}\( R^{\mathcal{M}}=D^{\mathcal{M}}\){:/nomarkdown} ולכן לכל השמה אפשרית, לא משנה איזה ערך היא נותנת ל-{::nomarkdown}\( y\){:/nomarkdown}, יתקיים ש-{::nomarkdown}\( R\left(y\right)\){:/nomarkdown} הוא {::nomarkdown}\( \mbox{T}\){:/nomarkdown} ולכן שוב הנוסחה כולה תהיה {::nomarkdown}\( \mbox{T}\){:/nomarkdown}. במילים אחרות, הנוסחה {::nomarkdown}\( \forall x\left(R\left(x\right)\right)\to R\left(y\right)\){:/nomarkdown}היא בעלת ערך האמת {::nomarkdown}\( \mbox{T}\){:/nomarkdown} בכל מבנה ובכל השמה אפשריים. לנוסחה בעלת התכונה הזו אני קורא <strong>אמת לוגית</strong>, ובכוונה אני לא קורא לה "טאוטולוגיה" כמו בתחשיב הפסוקים. במילה "טאוטולוגיה" בלוגיקה מסדר ראשון אני משתמש כדי לתאר את מה שמתקבל מלקיחת טאוטולוגיה בתחשיב הפסוקים ואז הצבת נוסחאות בתור המשתנים, ואילו {::nomarkdown}\( \forall x\left(R\left(x\right)\right)\to R\left(y\right)\){:/nomarkdown} בבירור לא יכול להתקבל בצורה הזו. הדרך היחידה שבה הוא יכול להתקבל היא על ידי הצבה בפסוק {::nomarkdown}\( X\to Y\){:/nomarkdown}, אבל הפסוק הזה כלל אינו טאוטולוגיה.

זה מראה לנו שהסיבות לכך ש-{::nomarkdown}\( \forall x\left(R\left(x\right)\right)\to R\left(y\right)\){:/nomarkdown} היא אמת לוגית הן עמוקות יותר מאשר הסיבות לכך שנוסחה כמו {::nomarkdown}\( \forall x\left(R\left(x\right)\right)\to\left(R\left(y\right)\to\forall x\left(R\left(x\right)\right)\right)\){:/nomarkdown} היא אמת לוגית; השניה מתקבלת מהצבה בפסוק {::nomarkdown}\( X\to\left(Y\to X\right)\){:/nomarkdown} שהוא כן טאוטולוגיה של תחשיב הפסוקים, ולכן ערך האמת שלה נובע במובן מסויים רק מתכונות ה<strong>קשרים</strong> ({::nomarkdown}\( \to\){:/nomarkdown} במקרה הזה), בעוד שערך האמת הלוגית של {::nomarkdown}\( \forall x\left(R\left(x\right)\right)\to R\left(y\right)\){:/nomarkdown} נובע גם מתכונות ה<strong>כמתים</strong> (שימו לב: אם נחליף את {::nomarkdown}\( \forall\){:/nomarkdown} ב-{::nomarkdown}\( \exists\){:/nomarkdown} נקבל משהו שאינו אמת לוגית). אני מקווה שזה עוזר להבין למה מה שעשינו בתחשיב הפסוקים רחוק מלהיות מספיק גם בתחשיב היחסים.

הנוסחה שלעיל מרמזת על סוג חדש של תבנית אקסיומה שנזדקק לו. אבל איך אפשר לפרמל אותה? בואו נראה עוד כמה דוגמאות לפני שנציג את המקרה הכללי. ראשית, הביטו בנוסחה הזו:

{::nomarkdown}\( \forall x\left(\exists y\left(x+y&gt;c\right)\right)\to \left(\exists y\left(z+y&gt;c\right)\right)\){:/nomarkdown}

כאן המשתנים {::nomarkdown}\( x,y\){:/nomarkdown} הם קשורים ואילו {::nomarkdown}\( z\){:/nomarkdown} הוא המשתנה החופשי; {::nomarkdown}\( c\){:/nomarkdown} הוא סימן קבוע, {::nomarkdown}\( +\){:/nomarkdown}הוא סימן פונקציה ו-{::nomarkdown}\( &gt;\){:/nomarkdown} הוא סימן יחס. לא קשה לראות שגם הנוסחה הזו היא אמת לוגית. מה הדמיון בינה ובין הנוסחה הקודמת שהצגתי? בשתיהן יש "לכל {::nomarkdown}\( x\){:/nomarkdown} <strong>משהו </strong>עבור<strong> {::nomarkdown}\( x\){:/nomarkdown}</strong> גורר <strong>משהו</strong> עבור {::nomarkdown}\( y\){:/nomarkdown}". שם ה"משהו" היה {::nomarkdown}\( R\left(x\right)\){:/nomarkdown} וכאן ה"משהו" הוא {::nomarkdown}\( \exists y\left(x+y&gt;c\right)\){:/nomarkdown} . באופן כללי "משהו" כזה יכול להיות כל נוסחה, אפילו נוסחאות שבהן {::nomarkdown}\( x\){:/nomarkdown} בכלל לא מופיע. אז לכאורה הצורה של האקסיומה צריכה להיות {::nomarkdown}\( \forall x\varphi\to\varphi\){:/nomarkdown}, אבל הצורה הזו <strong>לא כללית מספיק</strong>. היא מסוגלת ליצור משהו כמו {::nomarkdown}\( \forall x\left(R\left(x\right)\right)\to R\left(x\right)\){:/nomarkdown}, אבל הוא לא מסוגלת ליצור משהו כמו {::nomarkdown}\( \forall x\left(R\left(x\right)\right)\to R\left(y\right)\){:/nomarkdown}.

אם כן, אולי אפשר לומר שהצורה של האקסיומה תהיה {::nomarkdown}\( \forall x\varphi\to\psi\){:/nomarkdown}, כאשר {::nomarkdown}\( \psi\){:/nomarkdown} מתקבל מ-{::nomarkdown}\( \varphi\){:/nomarkdown} על ידי <strong>שינוי השם</strong> של המשתנה {::nomarkdown}\( x\){:/nomarkdown}. זה כבר יותר בכיוון, אבל הנה נוסחה שהיא אמת לוגית ולא יכולה להתקבל כך:

{::nomarkdown}\( \forall x\left(x\ge0\right)\to\left(1\ge0\right)\){:/nomarkdown}

כאן {::nomarkdown}\( 0,1\){:/nomarkdown} הם סימני קבועים של השפה ו-{::nomarkdown}\( \ge\){:/nomarkdown} הוא סימן יחס. כאן כבר לא סתם שינינו את השם של {::nomarkdown}\( x\){:/nomarkdown} אלא ממש החלפנו אותו בקבוע. ואפשר היה לעשות גם משהו כזה:

{::nomarkdown}\( \forall x\left(x\ge0\right)\to\left(\left(1+z\right)^{2}\ge0\right)\){:/nomarkdown}

כאשר כאן העלאה בריבוע היא סימן פונקציה, וגם חיבור הוא סימן פונקציה. מה שקרה הוא שהחלפנו את {::nomarkdown}\( x\){:/nomarkdown} ב<strong>שם עצם</strong>: {::nomarkdown}\( \left(1+z\right)^{2}\){:/nomarkdown}. אם כן, אפשר לומר שהצורה של האקסיומה תהיה {::nomarkdown}\( \forall x\varphi\to\psi\){:/nomarkdown} כאשר {::nomarkdown}\( \psi\){:/nomarkdown} מתקבל מ-{::nomarkdown}\( \varphi\){:/nomarkdown} על ידי החלפת כל מופע של {::nomarkdown}\( x\){:/nomarkdown} בשם עצם ספציפי כלשהו {::nomarkdown}\( t\){:/nomarkdown}. זה בהחלט בכיוון, אבל זה כבר <strong>כללי יותר מדי</strong>. אם נעשה את זה, אנחנו עלולים לקבל נוסחאות שאינן אמיתות לוגיות. הנה דוגמה. ניקח את {::nomarkdown}\( \varphi\){:/nomarkdown} להיות {::nomarkdown}\( \exists y\left(y&gt;x\right)\){:/nomarkdown} ואת {::nomarkdown}\( t\){:/nomarkdown} להיות {::nomarkdown}\( y\){:/nomarkdown} ונקבל:

{::nomarkdown}\( \forall x\left(\exists y\left(y&gt;x\right)\right)\to\exists y\left(y&gt;y\right)\){:/nomarkdown}

וזה בבירור לא פסוק שהוא אמת לוגית, כי קחו בתור מודל את המספרים הטבעיים - לכל מספר טבעי {::nomarkdown}\( x\){:/nomarkdown} קיים מספר גדול ממנו {::nomarkdown}\( y\){:/nomarkdown}, אבל אין אף מספר טבעי שגדול מעצמו. מה השתבש? הבעיה היא שאנחנו משתמשים ב-{::nomarkdown}\( y\){:/nomarkdown} בתפקיד כפול: בתוך {::nomarkdown}\( \varphi\){:/nomarkdown} הוא משתנה <strong>מכומת</strong>, בעוד ש-{::nomarkdown}\( x\){:/nomarkdown} הוא משתנה <strong>חופשי</strong> בתוך {::nomarkdown}\( \varphi\){:/nomarkdown}. בכך שאנחנו מציבים את {::nomarkdown}\( y\){:/nomarkdown} במקום {::nomarkdown}\( x\){:/nomarkdown} אנחנו הופכים משהו שלפני שניה היה חופשי (ולכן לא מושפע מהכמת {::nomarkdown}\( \exists y\){:/nomarkdown}) למשהו קשור (שכן מושפע מהכמת הזה). זה סוג שינוי שאנחנו חייבים למנוע. זה מוביל אותנו להגדרה שהיא קצת קשה לעיכול אם לא רואים לה קודם מוטיבציה: שם עצם {::nomarkdown}\( t\){:/nomarkdown} הוא <strong>חופשי להצבה</strong> במקום {::nomarkdown}\( x\){:/nomarkdown} בפסוק {::nomarkdown}\( \varphi\){:/nomarkdown} אם {::nomarkdown}\( t\){:/nomarkdown} לא מכיל אף משתנה {::nomarkdown}\( y\){:/nomarkdown} כך שיש מופע חופשי של {::nomarkdown}\( x\){:/nomarkdown} ב-{::nomarkdown}\( \varphi\){:/nomarkdown} שנופל תחת כמת עבור {::nomarkdown}\( y\){:/nomarkdown}. זו הגדרה מסובכת מבחינה מילולית, אבל העיקרון ברור - אנחנו לא רוצים להחליף את {::nomarkdown}\( x\){:/nomarkdown} במשהו, ואז לגלות שבתוך המשהו היה משתנה שפתאום הופך להיות מכומת.

עוד נקודה שצריך לשים לב אליה היא ש-{::nomarkdown}\( \varphi\){:/nomarkdown} עשוי להכיל גם מופעים לא חופשיים של {::nomarkdown}\( x\){:/nomarkdown}, ובהם אסור להציב. זה מקרה קצה מוזר למדי אבל עדיין יש להתחשב בו. הנה דוגמה: ניקח בתור {::nomarkdown}\( \varphi\){:/nomarkdown} את {::nomarkdown}\( \exists x\left(x&gt;0\right)\){:/nomarkdown} ובתור {::nomarkdown}\( t\){:/nomarkdown} את הקבוע {::nomarkdown}\( 0\){:/nomarkdown}, ונקבל:

{::nomarkdown}\( \forall x\left(\exists x\left(x&gt;0\right)\right)\to\left(\exists x\left(0&gt;0\right)\right)\){:/nomarkdown}

שהוא כמובן לא נכון. הבעיה כאן היא הפוכה ביחס לבעיה הקודמת: קודם הפכנו מישהו לא מכומת למכומת, ואילו כאן אנחנו משתמשים בהצבה לתוך {::nomarkdown}\( x\){:/nomarkdown} כדי "להימלט" מהכמת {::nomarkdown}\( \exists x\){:/nomarkdown}. הפתרון הוא פשוט למדי: לא מציבים את {::nomarkdown}\( t\){:/nomarkdown} בתוך מופעים מכומתים של {::nomarkdown}\( x\){:/nomarkdown} ב-{::nomarkdown}\( \varphi\){:/nomarkdown} אלא רק במופעים החופשיים שלו.

עכשיו אפשר סוף סוף לנסח את תבנית האקסיומה במפורש. התבנית היא:
<ol start="4">
	<li>{::nomarkdown}\( \forall x\varphi\to\psi\){:/nomarkdown}</li>
</ol>
כאשר {::nomarkdown}\( \psi\){:/nomarkdown} מתקבל מ-{::nomarkdown}\( \varphi\){:/nomarkdown} על ידי הצבה בכל מופע חופשי של {::nomarkdown}\( x\){:/nomarkdown} ב-{::nomarkdown}\( \varphi\){:/nomarkdown} שם עצם {::nomarkdown}\( t\){:/nomarkdown} כלשהו שהוא חופשי להצבה במקום {::nomarkdown}\( x\){:/nomarkdown} ב-{::nomarkdown}\( \varphi\){:/nomarkdown}.

צריך כמובן להוכיח שכל נוסחה כזו היא אכן אמת לוגית, מה שניתן לעשות באופן ישיר למדי הישר מהגדרות הסמנטיקה של לוגיקה מסדר ראשון ואוותר על כך כאן (ההוכחה דומה למה שעשיתי לעיל עבור {::nomarkdown}\( \varphi=R\left(x\right)\){:/nomarkdown}).

בואו נעבור להתבונן על נוסחה אחרת שעדיין אין לנו יכולת להוכיח במערכת שלנו:

{::nomarkdown}\( \forall x\left(R\left(y\right)\to S\left(x\right)\right)\to\left(R\left(y\right)\to\forall xS\left(x\right)\right)\){:/nomarkdown}

כאן {::nomarkdown}\( R,S\){:/nomarkdown} הם סימני יחס כלשהם שנמצאים פה בעיקר לצורך הדוגמה. מה הולך פה? הנוסחה הזו היא פשוט דרך אחרת להגיד שאם יש לנו כמת על שני דברים (במקרה שלנו {::nomarkdown}\( R,S\){:/nomarkdown}) כך שהכמת בכלל לא רלוונטי לראשון מביניהם, אפשר להעביר אותו אל השני בלבד וחסל. נסו להוכיח שהנוסחה הזו היא אמת לוגית; אין כאן הרבה יותר ממשחק בהגדרות.

הפורמליזציה של תבנית האקסיומה הזו פשוטה:
<ol start="5">
	<li>{::nomarkdown}\( \forall x\left(\varphi\to\psi\right)\to\left(\varphi\to\forall x\psi\right)\){:/nomarkdown}</li>
</ol>
כאשר הדרישה היא ש-{::nomarkdown}\( x\){:/nomarkdown} איננו משתנה חופשי ב-{::nomarkdown}\( \varphi\){:/nomarkdown}. קל לראות שהדרישה הזו הכרחית כדי שהתבנית תגדיר נוסחאות אמיתיות לוגיות; בואו נביט על {::nomarkdown}\( \forall x\left(x&gt;0\to x&gt;0\right)\to\left(x&gt;0\to\forall x\left(x&gt;0\right)\right)\){:/nomarkdown} שהוא בבירור לא אמת לוגית - אגף ימין שלו בבירור מתקיים אבל אגף שמאל אומר שאם {::nomarkdown}\( x\){:/nomarkdown} <strong>ספציפי</strong> הוא גדול מאפס אז נובע מכך ש<strong>כל {::nomarkdown}\( x\){:/nomarkdown}</strong> הוא גדול מאפס וזה בוודאי לא נכון.

האם באמת היה צריך להוסיף את תבנית האקסיומה החדשה הזו? האם אי אפשר לקבל אותה מהדברים הקיימים? לא ממש. התבנית הקודמת שהצגתי יודעת <strong>להסיר</strong> {::nomarkdown}\( \forall\){:/nomarkdown}; היא לא יודעת <strong>להזיז</strong> אותו. זה מרמז גם על מה שעדיין חסר לנו - דרך <strong>לייצר</strong> {::nomarkdown}\( \forall\){:/nomarkdown}. לצורך כך אוסיף <strong>כלל היסק</strong> חדש שנקרא {::nomarkdown}\( \mbox{Gen}\){:/nomarkdown} (מלשון Generalization - הכללה). הכלל מקבל פסוק {::nomarkdown}\( \varphi\){:/nomarkdown} ומייצר ממנו את {::nomarkdown}\( \forall x\varphi\){:/nomarkdown} עבור משתנה כלשהו {::nomarkdown}\( x\){:/nomarkdown}, וניתן להשתמש בו גם כאשר {::nomarkdown}\( x\){:/nomarkdown} כן מופיע חופשי ב-{::nomarkdown}\( \alpha\){:/nomarkdown}. עם זאת, יש עליו סייג קטן: אם {::nomarkdown}\( \Phi\){:/nomarkdown} היא קבוצת ההנחות שבה אנחנו משתמשים בהוכחה שלנו, אסור להשתש ב-Gen עבור אף משתנה {::nomarkdown}\( x\){:/nomarkdown} שמופיע חופשי בהנחה כלשהי ב-{::nomarkdown}\( \Phi\){:/nomarkdown}. אצלנו ממילא אנחנו הולכים לדבר רק על קבוצת הנחות שהן <strong>פסוקים</strong>, כלומר נוסחאות בלי משתנים חופשיים, כך שהסייג הזה לא יהיה רלוונטי לנו ונוכל להשתמש ב-Gen בחופשיות.

תחת הסייג הזה פשוט למדי להוכיח ש-Gen עובד: נניח ש-{::nomarkdown}\( \Phi\models\varphi\){:/nomarkdown}, כלומר כל מבנה {::nomarkdown}\( \mathcal{M}\){:/nomarkdown} והשמה {::nomarkdown}\( z\){:/nomarkdown} מקיימים שאם {::nomarkdown}\( \mathcal{M}\models_{z}\Phi\){:/nomarkdown} אז {::nomarkdown}\( \mathcal{M}\models_{z}\varphi\){:/nomarkdown}. כדי להראות ש-{::nomarkdown}\( \mathcal{M}\models_{z}\forall x\varphi\){:/nomarkdown} צריך להראות שמתקיים {::nomarkdown}\( \mathcal{M}\models_{z\left[x\leftarrow a\right]}\varphi\){:/nomarkdown} לכל {::nomarkdown}\( a\in D^{\mathcal{M}}\){:/nomarkdown}. כעת, מכיוון ש-{::nomarkdown}\( x\){:/nomarkdown} לא מופיע חופשי באף הנחה ב-{::nomarkdown}\( \Phi\){:/nomarkdown} הרי ש-{::nomarkdown}\( \mathcal{M}\models_{z\left[x\leftarrow a\right]}\Phi\){:/nomarkdown} (השינוי של הערך ש-{::nomarkdown}\( x\){:/nomarkdown} מקבל בהשמה {::nomarkdown}\( z\){:/nomarkdown} לא משפיע על ערך האמת ש-{::nomarkdown}\( z\){:/nomarkdown} נתנה לפסוקי {::nomarkdown}\( \Phi\){:/nomarkdown}) ולכן {::nomarkdown}\( \mathcal{M}\models_{z\left[x\leftarrow a\right]}\varphi\){:/nomarkdown}.

האם סיימנו להציג את מערכת ההוכחה? תלוי. בהגדרות מסויימות של לוגיקה מסדר ראשון, כן; אבל אני הגדרתי לוגיקה מסדר ראשון כשהיא כוללת את סימן השוויון, והוא זקוק לטיפול מיוחד, מכיוון שהסמנטיקה שלו מיוחדת. הדרך הפשוטה ביותר להבין זאת היא להיות מודעים לכך שכרגע אין למערכת ההוכחה שלנו שום דרך להוכיח את הנוסחה הבאה:

{::nomarkdown}\( x=x\){:/nomarkdown}

די ברור שאפשר להוסיף אותה כתבנית אקסיומה, אבל זה עדיין לא מספיק. צריך עוד תבנית אקסיומה שתגיד לנו שאם שני משתנים הם שווים בערכם, אז כל שני שמות עצם שזהים פרט לאותם משתנים גם כן שווים בערכם, וכל שתי נוסחאות שזהות פרט לאותם משתנים הן שקולות. פורמלית, אז אלו האקסיומות שקשורות לשוויון ({::nomarkdown}\( x,y\){:/nomarkdown} מייצגים משתנים, {::nomarkdown}\( t,s\){:/nomarkdown} מייצגים שמות עצם, {::nomarkdown}\( \varphi,\psi\){:/nomarkdown} מייצגים נוסחאות):
<ol>
	<li>{::nomarkdown}\( x=x\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( x=y\to t=s\){:/nomarkdown} כאשר {::nomarkdown}\( s\){:/nomarkdown} מתקבל מ-{::nomarkdown}\( t\){:/nomarkdown} על ידי החלפת מופע אחד או יותר של {::nomarkdown}\( x\){:/nomarkdown} ב-{::nomarkdown}\( y\){:/nomarkdown}.</li>
	<li>{::nomarkdown}\( x=y\to\left[\varphi\to\psi\right]\){:/nomarkdown} כאשר {::nomarkdown}\( \psi\){:/nomarkdown} מתקבל מ-{::nomarkdown}\( \varphi\){:/nomarkdown} על ידי החלפת מופע אחד או יותר של {::nomarkdown}\( x\){:/nomarkdown} ב-{::nomarkdown}\( y\){:/nomarkdown}.</li>
</ol>
האם סיימנו? באופן מפתיע למדי, התשובה היא כן! מסתבר שדי באקסיומות וכללי ההיסק שהראיתי כדי להוכיח כל פסוק בלוגיקה מסדר ראשון שנובע לוגית מקבוצת פסוקים של הנחות. כלומר, כעת אני יכול להוכיח את משפט השלמות והנאותות הבא: אם {::nomarkdown}\( \Phi\){:/nomarkdown} היא קבוצת פסוקים בלוגיקה מסדר ראשון ו-{::nomarkdown}\( \varphi\){:/nomarkdown} הוא פסוק כלשהו, אז {::nomarkdown}\( \Phi\vdash\varphi\iff\Phi\models\varphi\){:/nomarkdown}. את ההוכחה אתחיל להציג בפוסט הבא.
