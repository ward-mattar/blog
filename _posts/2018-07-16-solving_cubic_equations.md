---
id: 3645
title: "אז איך פותרים משוואה ממעלה שלישית?"
date: 2018-07-16 22:40:28
layout: post
categories: 
  - אלגברה מופשטת
tags: 
  - משוואה ממעלה שלישית
  - תורת גלואה
---
סדרת הפוסטים שלי על תורת גלואה הגיעה <a href="https://gadial.net/2018/07/12/insolvability_of_the_quintic/">בפוסט הקודם</a> אל נקודת השיא שלה, שבה הוכחתי שאין נוסחה כללית לפתרון משוואות (פולינומיות, כשהפתרון הוא בעזרת רדיקלים) ממעלה 5 ומעלה. ליתר דיוק, מה שהוכחתי הוא זה:
<ul>
 	<li>פולינום הוא פתיר באמצעות רדיקלים אם ורק אם חבורת הגלואה שלו היא פתירה.</li>
 	<li>חבורת הגלואה של "פולינום כללי" ממעלה {::nomarkdown}\(n\){:/nomarkdown} מעל שדה {::nomarkdown}\(F\){:/nomarkdown} שכולל גם את <strong>המקדמים</strong> של הפולינום היא {::nomarkdown}\(S_{n}\){:/nomarkdown}.</li>
 	<li>{::nomarkdown}\(S_{n}\){:/nomarkdown} לא פתירה עבור {::nomarkdown}\(n\ge5\){:/nomarkdown} וכן פתירה עבור {::nomarkdown}\(n\le4\){:/nomarkdown}.</li>
</ul>
מה שעניין אותי עד כה היה ה-"{::nomarkdown}\(S_{n}\){:/nomarkdown} לא פתירה עבור {::nomarkdown}\(n\ge5\){:/nomarkdown}", אבל עכשיו היוצרות מתהפכות ואני מנסה להבין איך המשפט של גלואה "מגלה לנו" את הפתרונות עבור המקרים {::nomarkdown}\(n=2,3,4\){:/nomarkdown}. זו גישה קצת אנכרוניסטית כי היא הופכת את הסדר - הנוסחאות לפתרון משוואות ממעלה רביעית ומטה היו ידועות היטב בימיו של גלואה והתגלו מאות שנים לפני כן. לא "צריך" את תורת גלואה בשבילן, אבל אני חושב שתורת גלואה עוזרת להבין מה בעצם הולך בהן, וזו גם הזדמנות טובה להראות את הצד ה"חיובי" של תורת גלואה בפעולה - זה שאשכרה יודע לפתור משוואות ולא רק להגיד שתשכחו מזה.
<h2>הדיסקרימיננטה</h2>
כזכור או לא, שיטת העבודה שגלואה הציע היא זו: אם {::nomarkdown}\(E/F\){:/nomarkdown} היא ההרחבה שבה {::nomarkdown}\(E\){:/nomarkdown} הוא שדה הפיצול של הפולינום מעל {::nomarkdown}\(F\){:/nomarkdown} שאנחנו רוצים לפתור, ואם {::nomarkdown}\(G=\text{Gal}\left(E/F\right)\){:/nomarkdown} היא פתירה, אז זה נותן לנו סדרה של תת-חבורות {::nomarkdown}\(G=G_{0}\supset G_{1}\supset\dots\supset G_{k}=\left\{ e\right\} \){:/nomarkdown} כך ש-{::nomarkdown}\(G_{i}/G_{i+1}\){:/nomarkdown} היא ציקלית לכל {::nomarkdown}\(0\le i&lt;k\){:/nomarkdown}. תת-החבורות הללו נותנות לנו סדרה של שדות, שהם שדות השבת שלהן: {::nomarkdown}\(F=E_{0}\subset E_{1}\subset\dots\subset E_{k}=E\){:/nomarkdown}. הטוויסט של גלואה עכשיו הוא שאפשר לקבל כל {::nomarkdown}\(E_{i+1}\){:/nomarkdown} כזו מתוך {::nomarkdown}\(E_{i}\){:/nomarkdown} על ידי הוצאת שורש מסדר כלשהו לאיבר ב-{::nomarkdown}\(E_{i}\){:/nomarkdown} (בתנאי שב-{::nomarkdown}\(E_{i}\){:/nomarkdown} כבר יש את שורשי היחידה המתאימים, אחרת תוקעים הרחבה נוספת בין {::nomarkdown}\(E_{i}\){:/nomarkdown} ו-{::nomarkdown}\(E_{i+1}\){:/nomarkdown} שמוסיפה אותם, גם כן על ידי הוצאת שורש).

כעת נשאלת השאלה איך מבצעים בפועל כל צעד בסדרת הצעדים הזו. כלומר, אם {::nomarkdown}\(E/F\){:/nomarkdown} הרחבה כך ש-{::nomarkdown}\(\text{Gal}\left(E/F\right)\){:/nomarkdown} ציקלית מסדר {::nomarkdown}\(n\){:/nomarkdown} ויש ב-{::nomarkdown}\(F\){:/nomarkdown} כבר את שורשי היחידה מסדר {::nomarkdown}\(n\){:/nomarkdown}, מה עושים כדי למצוא את האיבר שצריך להרחיב באמצעות שורש שלו את {::nomarkdown}\(F\){:/nomarkdown} כדי לקבל את {::nomarkdown}\(E\){:/nomarkdown}? אם נסתכל <a href="http://בהוכחה שהראיתי">בהוכחה שהראיתי</a>, אז נראה שהפתרון עובר דרך מה שנקרא <strong>הרזולבנטה של לגראנז'</strong>. הרעיון הוא זה: אם {::nomarkdown}\(\text{Gal}\left(E/F\right)\){:/nomarkdown} ציקלית עם יוצר {::nomarkdown}\(\sigma\){:/nomarkdown}, ואם {::nomarkdown}\(\omega\){:/nomarkdown} הוא שורש יחידה פרימיטיבי מסדר {::nomarkdown}\(n\){:/nomarkdown}, ואם {::nomarkdown}\(\alpha\in E\){:/nomarkdown} הוא איבר כלשהו, אז מגדירים את הרזולבנטה כך:

{::nomarkdown}\(\left(\alpha,\omega\right)=\alpha+\omega\sigma\left(\alpha\right)+\omega^{2}\sigma^{2}\left(\alpha\right)+\dots+\omega^{n-1}\sigma^{n-1}\left(\alpha\right)\){:/nomarkdown}

כלומר, הרזולבנטה של {::nomarkdown}\(\alpha,\omega\){:/nomarkdown} היא איבר של {::nomarkdown}\(E\){:/nomarkdown} שנבנה בתור איזה סכום מתוחכם של דברים שמתקבלים מ-{::nomarkdown}\(\alpha,\omega\){:/nomarkdown} וחבורת הגלואה. מה שהוכחנו כבר הוא שהחזקה ה-{::nomarkdown}\(n\){:/nomarkdown}-ית של האיבר הזה שייכת ל-{::nomarkdown}\(F\){:/nomarkdown}, ושאם האיבר הזה שונה מאפס אז הוא לא שייך לאף שדה ביניים של {::nomarkdown}\(E\){:/nomarkdown}, כלומר הוספה שלו ל-{::nomarkdown}\(F\){:/nomarkdown} תייצר בהכרח את {::nomarkdown}\(E\){:/nomarkdown}. מה שעושים עכשיו הוא לסמן {::nomarkdown}\(a\triangleq\left(\alpha,\omega\right)^{n}\){:/nomarkdown} ולקבל {::nomarkdown}\(E=F\left(\sqrt[n]{a}\right)\){:/nomarkdown} (כאשר כאמור {::nomarkdown}\(a\in F\){:/nomarkdown} כי זה הקסם שרזולבנטה עושה).

בואו נתחיל מלראות דוגמא למה קורה במקרה הפשוט של הרחבה ממימד 2. נסתכל על המקרה הקונקרטי של <strong>יחס הזהב</strong> {::nomarkdown}\(\varphi\){:/nomarkdown} שהוא שורש של הפולינום {::nomarkdown}\(x^{2}-x-1\){:/nomarkdown}, שקל לראות שהוא אי-פריק מעל {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown} ולכן ההרחבה {::nomarkdown}\(\mathbb{Q}\left(\varphi\right)/\mathbb{Q}\){:/nomarkdown} היא ממימד 2. כרגע לא ברור שהיא רדיקלית כי {::nomarkdown}\(\varphi\){:/nomarkdown} <strong>אינו</strong> שורש של אף איבר ב-{::nomarkdown}\(\mathbb{Q}\){:/nomarkdown}. השאלה היא "לאיזה איבר של {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown} ישתלם לנו עכשיו להוציא שורש כדי לקבל את {::nomarkdown}\(\mathbb{Q}\left(\varphi\right)\){:/nomarkdown}".

מכיוון שההרחבה {::nomarkdown}\(\mathbb{Q}\left(\varphi\right)/\mathbb{Q}\){:/nomarkdown} היא ממימד 2, חבורת הגלואה המתאימה היא בת שני איברים, היחידה ו-{::nomarkdown}\(\sigma\){:/nomarkdown}, כאשר {::nomarkdown}\(\sigma\){:/nomarkdown} מחליפה בין {::nomarkdown}\(\varphi\){:/nomarkdown} לבין הפתרון השני של המשוואה שמסומן לעתים כ-{::nomarkdown}\(\varphi_{-}\){:/nomarkdown}. במקרה של חבורה ממימד 2, שורש היחידה שצריך בשביל הרזולבנטה הוא פשוט {::nomarkdown}\(\omega=-1\){:/nomarkdown}, והרזולבנטה של איבר כלשהו תצא {::nomarkdown}\(\left(\alpha,\omega\right)=\alpha-\sigma\left(\alpha\right)\){:/nomarkdown}. מה שאנחנו מחפשים, אם כן, הוא איבר של {::nomarkdown}\(\mathbb{Q}\left(\varphi\right)\){:/nomarkdown} שהרזולבנטה שלו לא תהיה 0, ואז הרזולבנטה הזו תהיה יוצרת של {::nomarkdown}\(\mathbb{Q}\left(\varphi\right)\){:/nomarkdown} והריבוע שלה יהיה שייך ל-{::nomarkdown}\(\mathbb{Q}\){:/nomarkdown}.

את מי ניקח כדי לייצר את הרזולבנטה הזו? למה לא את {::nomarkdown}\(\varphi\){:/nomarkdown} עצמו? {::nomarkdown}\(\varphi\ne\sigma\left(\varphi\right)\){:/nomarkdown} (לא מאמינים? פשוט תבדקו ש-{::nomarkdown}\(x^{2}-x-1\){:/nomarkdown} ספרבילי על ידי גזירה שלו) ולכן {::nomarkdown}\(\varphi-\varphi_{-}\){:/nomarkdown} הוא האיבר שאנחנו מחפשים. אבל מי הוא בעצם? אם פותרים את {::nomarkdown}\(x^{2}-x-1\){:/nomarkdown} בעזרת נוסחת השורשים רואים ש-{::nomarkdown}\(\varphi=\frac{1+\sqrt{5}}{2}\){:/nomarkdown} ואילו {::nomarkdown}\(\varphi_{-}=\frac{1-\sqrt{5}}{2}\){:/nomarkdown}; כלומר, הרזולבנטה היא {::nomarkdown}\(\left(\frac{1+\sqrt{5}}{2}\right)-\left(\frac{1-\sqrt{5}}{2}\right)=\sqrt{5}\){:/nomarkdown}. טה-דה! ההוכחה של גלואה הראתה לנו את מה שהיה ברור לנו אינטואיטיבית מראש - שאם מסתכלים על {::nomarkdown}\(\frac{1+\sqrt{5}}{2}\){:/nomarkdown}, אז "החלק החשוב" פה הוא {::nomarkdown}\(\sqrt{5}\){:/nomarkdown}; ש-{::nomarkdown}\(\mathbb{Q}\left(\sqrt{5}\right)\){:/nomarkdown} היא הדרך ה"רדיקלית" להציג את ההרחבה שלנו. עדיין, זה לא אומר שמה שהולך פה לא היה חמוד - אני מקווה שזה הזכיר לכם את האופן שבו כדי לבודד את החלק <strong>המדומה</strong> מתוך מספר מרוכב {::nomarkdown}\(a+bi\){:/nomarkdown}, <strong>מחסרים</strong> ממנו את הצמוד שלו; זה בדיוק הסיפור כאן.

עכשיו בואו נדבר על מה קורה במקרה של "פולינום כללי". בפוסט הקודם הצגתי שתי שיטות סימון לפולינום כללי, אחת שמציגה אותו בעזרת המקדמים שלו (שההנחה היא שהם בלתי תלויים אלגברית) ואחרת שמציגה אותו באמצעות השורשים שלו (שגם עליהם יש את ההנחה הזו). ההצגה באמצעות מקדמים נראית קצת מוזרה במבט ראשון אבל ראינו למה היא עדיפה על הכתיב היותר אינטואיטיבי בפוסט הקודם:

{::nomarkdown}\(p\left(x\right)=x^{n}-s_{1}x^{n-1}+s_{2}x^{n-2}+\dots+\left(-1\right)^{n-1}s_{n-1}x+\left(-1\right)^{n}s_{n}\){:/nomarkdown}

ההצגה באמצעות שורשים היא זו:

{::nomarkdown}\(p\left(x\right)=\left(x-\alpha_{1}\right)\left(x-\alpha_{2}\right)\cdots\left(x-\alpha_{n}\right)\){:/nomarkdown}

וההרחבה הרלוונטית שאנחנו רוצים להראות שהיא רדיקלית היא {::nomarkdown}\(F\left(\alpha_{1},\dots,\alpha_{n}\right)/F\left(s_{1},\dots,s_{n}\right)\){:/nomarkdown}, כאשר {::nomarkdown}\(F\){:/nomarkdown} הוא שדה כלשהו ממציין 0 אבל בדרך כלל אנחנו חושבים עליו בתור {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown} (הוא בוודאי <strong>מכיל</strong> את {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown}, ואנחנו לא משתמשים בהנחות נוספות לגביו).

בפוסט הקודם ראינו שחבורת הגלואה של ההרחבה הזו היא {::nomarkdown}\(S_{n}\){:/nomarkdown}; עבור כל {::nomarkdown}\(\sigma\in S_{n}\){:/nomarkdown}, האוטומורפיזם של {::nomarkdown}\(F\left(\alpha_{1},\dots,\alpha_{n}\right)\){:/nomarkdown} ש-{::nomarkdown}\(\sigma\){:/nomarkdown} מתארת הוא זה שמבצע פרמוטציה על השורשים {::nomarkdown}\(\alpha_{1},\dots,\alpha_{n}\){:/nomarkdown} כמו ש-{::nomarkdown}\(\sigma\){:/nomarkdown} מבצעת פרמוטציה על {::nomarkdown}\(\left\{ 1,2,\dots,n\right\} \){:/nomarkdown}, כלומר אם משתמשים ב-Abuse of notation ומשתמשים ב-{::nomarkdown}\(\sigma\){:/nomarkdown} גם כדי לתאר את האוטומורפיזם, זה האוטומורפיזם שמבצע {::nomarkdown}\(\sigma\left(\alpha_{i}\right)=\alpha_{\sigma\left(i\right)}\){:/nomarkdown}. על אברי {::nomarkdown}\(F\){:/nomarkdown} האוטומורפזים {::nomarkdown}\(\sigma\){:/nomarkdown} פועל כמו הזהות, ולכן הוא הזהות על כל {::nomarkdown}\(F\left(s_{1},\dots,s_{n}\right)\){:/nomarkdown}, כי כל {::nomarkdown}\(s_{i}\){:/nomarkdown} כזה הוא <strong>פונקציה סימטרית</strong> בשורשים {::nomarkdown}\(\alpha_{1},\dots,\alpha_{n}\){:/nomarkdown} ולכן משתמר על ידי פרמוטציות שלהם.

בואו נסתכל שוב על המקרה של פולינום ממעלה שניה, הפעם פולינום כללי {::nomarkdown}\(p\left(x\right)=x^{2}-bx+c\){:/nomarkdown}. אם אסמן את שורשי הפולינום ב-{::nomarkdown}\(\alpha,\beta\){:/nomarkdown} נקבל את שתי המשוואות

{::nomarkdown}\(b=\alpha+\beta\){:/nomarkdown}

{::nomarkdown}\(c=\alpha\beta\){:/nomarkdown}

במקרה הזה, חבורת הגלואה שלנו כוללת שני איברים, הזהות ו-{::nomarkdown}\(\sigma\){:/nomarkdown} שמקיימת {::nomarkdown}\(\sigma\left(\alpha\right)=\beta\){:/nomarkdown} ו-{::nomarkdown}\(\sigma\left(\beta\right)=\alpha\){:/nomarkdown}. אז אם ניקח את {::nomarkdown}\(\alpha\){:/nomarkdown} בתור יוצר אפשרי של רזולבנטה מועילה, נקבל את הרזולבנטה {::nomarkdown}\(\alpha-\sigma\left(\alpha\right)=\alpha-\beta\){:/nomarkdown}. אם ניקח את הריבוע שלה, נקבל {::nomarkdown}\(\left(\alpha-\beta\right)^{2}=\alpha^{2}-2\alpha\beta+\beta^{2}\){:/nomarkdown} ש<strong>אמור</strong> להיות איבר של {::nomarkdown}\(\mathbb{Q}\left(b,c\right)\){:/nomarkdown}. איך אני יודע שזה יעבוד? כי {::nomarkdown}\(\alpha^{2}-2\alpha\beta+\beta^{2}\){:/nomarkdown} היא פונקציה סימטרית, ולכן ניתנת להצגה בתור צירוף של פונקציות סימטריות פרימיטיביות. עכשיו, לא התעסקתי באלגוריתם שתמיד מוצא ייצוג כזה, אבל אפשר עם תעלול קטן להצליח פה בקלות: פשוט שמים לב לכך ש-

{::nomarkdown}\(b^{2}=\left(\alpha+\beta\right)^{2}=\alpha^{2}+2\alpha\beta+\beta^{2}\){:/nomarkdown}

שזה כמעט אותו דבר כמו מה שאנחנו רוצים, רק צריך להפוך את הסימן של ה-{::nomarkdown}\(2\alpha\beta\){:/nomarkdown} שבאמצע - ואת זה אפשר לעשות בעזרת {::nomarkdown}\(c=\alpha\beta\){:/nomarkdown}. נקבל:

{::nomarkdown}\(b^{2}-4c=\left(\alpha-\beta\right)^{2}\){:/nomarkdown}

ולכן {::nomarkdown}\(\sqrt{b^{2}-4c}=\left(\alpha-\beta\right)\){:/nomarkdown} הוא האיבר שאם נרחיב את {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown} באמצעותו נגיע לשדה שבו נמצאים {::nomarkdown}\(\alpha,\beta\){:/nomarkdown}: {::nomarkdown}\(\mathbb{Q}\left(\alpha,\beta\right)=\mathbb{Q}\left(\sqrt{b^{2}-4c}\right)\){:/nomarkdown}. הביטוי {::nomarkdown}\(b^{2}-4c\){:/nomarkdown} בוודאי מוכר לכם - הוא מופיע בנוסחה הכללית לפתרון משוואה ממעלה שניה, ואולי שמעתם את השם <strong>דיסקרימיננטה</strong> שבא לתאר אותו. אנחנו מכירים את הדיסקרימיננטה בתור כלי שבא לספר לנו משהו על הפתרונות: אם {::nomarkdown}\(b^{2}-4c&gt;0\){:/nomarkdown} אז יש לנוסחה שני פתרונות ממשיים, אם {::nomarkdown}\(b^{2}-4c=0\){:/nomarkdown} אז יש פתרון ממשי יחיד ואם {::nomarkdown}\(b^{2}-4c&lt;0\){:/nomarkdown} אז יש שני פתרונות מרוכבים. עם זאת, זה לא יהיה ההיבט שיעניין אותי עכשיו (אבל שימו לב שאם {::nomarkdown}\(b^{2}-4c=0\){:/nomarkdown} אז אכן, אין הרחבה; הפתרון למשוואה במקרה הזה הוא איבר <strong>יחיד</strong> שכבר שייך ל-{::nomarkdown}\(\mathbb{Q}\){:/nomarkdown}).

עכשיו השאלה היא מה קורה במקרה של פולינום כללי ממעלות גבוהות יותר. התשובה היא שתמיד ניתן להגדיר דיסקרימיננטה, והוספה שלה היא תמיד הצעד הראשון החיובי שאפשר לנקוט בו. אבל מה ההגדרה הנכונה לדיסקרימיננטה כללית? בשביל להבין את זה בואו ננסה להבין את הפרטים המלוכלכים שהיה קל לטאטא מתחת לשטיח במקרה של מימד 2. בואו נסמן ב-{::nomarkdown}\(E\){:/nomarkdown} את שדה השבת של {::nomarkdown}\(A_{n}\){:/nomarkdown} בתוך {::nomarkdown}\(F\left(\alpha_{1},\dots,\alpha_{n}\right)\){:/nomarkdown}, אז מה שאנחנו יודעים הוא שחבורת הגלואה של {::nomarkdown}\(E/F\left(s_{1},\dots,s_{n}\right)\){:/nomarkdown} איזומורפית ל-{::nomarkdown}\(\mathbb{Z}_{2}\){:/nomarkdown}, ואנחנו מנסים למצוא דרך לייצר את {::nomarkdown}\(E\){:/nomarkdown}. הבעיה היא שלא ברור מי הוא {::nomarkdown}\(E\){:/nomarkdown} במקרה הכללי; במקרה של מימד 2, זה היה פשוט {::nomarkdown}\(F\left(\alpha,\beta\right)\){:/nomarkdown} עצמו.

אם כן, השאלה שלנו היא זו: בהינתן {::nomarkdown}\(\sigma\in A_{n}\){:/nomarkdown}, מי האיברים שמשתמרים על ידי כל {::nomarkdown}\(\sigma\){:/nomarkdown} שכזו?מה שדה הביניים של {::nomarkdown}\(F\left(\alpha_{1},\dots,\alpha_{n}\right)\){:/nomarkdown} שמתאים ל-{::nomarkdown}\(A_{n}\){:/nomarkdown}? בשביל לענות לשאלה הזו כדאי לחזור לפוסט שבו <a href="https://gadial.net/2017/03/14/permutation_groups/">הגדרתי לראשונה</a> את {::nomarkdown}\(A_{n}\){:/nomarkdown}. ההגדרה שלי הייתה מוזרה במבט ראשון - הגדרתי את {::nomarkdown}\(A_{n}\){:/nomarkdown} בתור <strong>גרעין של הומומורפיזם</strong> של פונקציה שעשתה את הדבר הבא: הסתכלה על הפולינום {::nomarkdown}\(\Delta=\prod_{1\le i&lt;j\le n}\left(x_{i}-x_{j}\right)\){:/nomarkdown} ולכל {::nomarkdown}\(\sigma\){:/nomarkdown} התאימה את {::nomarkdown}\(\frac{\sigma\left(\Delta\right)}{\Delta}\){:/nomarkdown}, כאשר {::nomarkdown}\(\sigma\){:/nomarkdown} פעל על {::nomarkdown}\(\Delta\){:/nomarkdown} בדרך ה"צפויה": {::nomarkdown}\(\sigma\left(x_{i}\right)=x_{\sigma\left(i\right)}\){:/nomarkdown}. לא קשה להוכיח שזה הומומורפיזם שמחזיר או 1 או {::nomarkdown}\(-1\){:/nomarkdown}, ו-{::nomarkdown}\(A_{n}\){:/nomarkdown} הוגדרה להיות הגרעין שלו. כלומר כל התמורות {::nomarkdown}\(\sigma\){:/nomarkdown} שמקיימות {::nomarkdown}\(\sigma\left(\Delta\right)=\Delta\){:/nomarkdown}. עכשיו, מה זה אומר לנו? אם במקום לדבר על {::nomarkdown}\(x_{i}\){:/nomarkdown}-ים נדבר על {::nomarkdown}\(\alpha_{i}\){:/nomarkdown}-ים, מה שאנחנו רואים הוא ש-{::nomarkdown}\(\Delta\){:/nomarkdown} הוא איבר ששייך <strong>לשדה השבת</strong> של כל אברי {::nomarkdown}\(A_{n}\){:/nomarkdown}, אבל מכיוון שיש איברים ב-{::nomarkdown}\(S_{n}\){:/nomarkdown} שמחזירים עליו {::nomarkdown}\(-1\){:/nomarkdown}, הוא בוודאי לא שייך לשדה השבת של {::nomarkdown}\(S_{n}\){:/nomarkdown}, כלומר הוא לא שייך ל-{::nomarkdown}\(F\left(s_{1},\dots,s_{n}\right)\){:/nomarkdown}.

עכשיו, מהי הרזולבנטה של {::nomarkdown}\(\Delta\){:/nomarkdown}? מכיוון ש-{::nomarkdown}\(S_{n}/A_{n}\cong\mathbb{Z}_{2}\){:/nomarkdown} הסיטואציה דומה לזו שהייתה קודם - הרזולבנטה תהיה {::nomarkdown}\(\Delta-\sigma\left(\Delta\right)\){:/nomarkdown}, אבל צריך להיות קצת זהירים לגבי מהי {::nomarkdown}\(\sigma\){:/nomarkdown} הזו. הרי האיברים של {::nomarkdown}\(S_{n}/A_{n}\){:/nomarkdown} הם <strong>קוסטים</strong> של {::nomarkdown}\(S_{n}\){:/nomarkdown}. מה זה אומר במקרה שלנו? אנחנו לא יכולים להפעיל קוסט על {::nomarkdown}\(\Delta\){:/nomarkdown}!

ובכן, אם נחזור למה שעשינו בהוכחת המשפט היסודי של תורת גלואה נראה שהרעיון הכללי היה זה: אם {::nomarkdown}\(F\subseteq K\subseteq E\){:/nomarkdown} היא מגדל של הרחבות כך ש-{::nomarkdown}\(\text{Gal}\left(E/F\right)=G\){:/nomarkdown} ו-{::nomarkdown}\(\text{Gal}\left(E/K\right)=H\){:/nomarkdown} אז {::nomarkdown}\(\text{Gal}\left(K/F\right)\cong G/H\){:/nomarkdown}, אבל צריך להבין שזה רק איזומורפיזם; זה לא שוויון ממש של חבורות. האיברים של {::nomarkdown}\(\text{Gal}\left(K/F\right)\){:/nomarkdown} הם אוטומורפיזמים של {::nomarkdown}\(K\){:/nomarkdown}, לא קוסטים של {::nomarkdown}\(G/H\){:/nomarkdown}, כלומר קבוצות של אוטומורפיזמים של {::nomarkdown}\(G\){:/nomarkdown}. הנקודה הייתה שאם {::nomarkdown}\(\sigma\in\text{Gal}\left(K/F\right)\){:/nomarkdown} היא אוטומורפיזם של {::nomarkdown}\(K\){:/nomarkdown} אז ניתן <strong>להרחיב</strong> את {::nomarkdown}\(\sigma\){:/nomarkdown} לאוטומורפיזם של {::nomarkdown}\(G\){:/nomarkdown} בשלל דרכים שונות, והדרכים הללו יניבו בדיוק את האיברים של {::nomarkdown}\(G/H\){:/nomarkdown}. במילים אחרות, אם אני רוצה להבין מה {::nomarkdown}\(\sigma\){:/nomarkdown} עושה לאיברים של {::nomarkdown}\(K\){:/nomarkdown}, אני יכול לקחת איבר <strong>כלשהו</strong> של הקוסט המתאים ב-{::nomarkdown}\(G/H\){:/nomarkdown} ולהפעיל אותו על אברי {::nomarkdown}\(K\){:/nomarkdown}, ומובטח לי שלא משנה איזה איבר אני אקח מהקוסט אני אקבל את אותה התוצאה.

במקרה שלנו, כדי להבין מה {::nomarkdown}\(\sigma\in S_{n}/A_{n}\){:/nomarkdown} עושה ל-{::nomarkdown}\(\Delta\){:/nomarkdown} אני יכול לבחור {::nomarkdown}\(\sigma\in S_{n}\){:/nomarkdown} <strong>כלשהו</strong> ששייך לקוסט הלא טריוויאלי ב-{::nomarkdown}\(S_{n}/A_{n}\){:/nomarkdown}; כלומר, {::nomarkdown}\(\sigma\){:/nomarkdown} היא בדיוק תמורה אי-זוגית <strong>כלשהי</strong>. העניין הוא שכפי שכבר ראינו, הפעולה של כל התמורות האי זוגיות על {::nomarkdown}\(\Delta\){:/nomarkdown} היא זהה: {::nomarkdown}\(\sigma\left(\Delta\right)=-\Delta\){:/nomarkdown}. מכאן שהרזולבנטה של {::nomarkdown}\(\Delta\){:/nomarkdown} תהיה {::nomarkdown}\(\left(\Delta,-1\right)=\Delta-\sigma\left(\Delta\right)=\Delta+\Delta=2\Delta\){:/nomarkdown}. כלומר, עד כדי הקבוע חסר המשמעות של 2, הרזולבנטה של {::nomarkdown}\(\Delta\){:/nomarkdown} זו היא עצמה, מה שאומר ש-{::nomarkdown}\(\Delta^{2}\in F\left(s_{1},\dots,s_{n}\right)\){:/nomarkdown}. כמובן, אין כאן משהו מפתיע במיוחד: נסמן {::nomarkdown}\(D=\Delta^{2}\){:/nomarkdown} אז קל לראות ש-{::nomarkdown}\(D=\prod_{1\le i&lt;j\le n}\left(\alpha_{i}-\alpha_{j}\right)^{2}=\prod_{i\ne j}\left(\alpha_{i}-\alpha_{j}\right)\){:/nomarkdown} היא פולינום סימטרי ולכן בוודאי שניתן לכתיבה באמצעות {::nomarkdown}\(s_{1},\dots,s_{n}\){:/nomarkdown}. ה-{::nomarkdown}\(D\){:/nomarkdown} הזה נקרא <strong>הדיסקרימיננטה</strong> של הפולינום; לכל פולינום עם שורשים {::nomarkdown}\(\alpha_{1},\dots,\alpha_{n}\){:/nomarkdown} הדיסקרימיננטה מוגדרת כ-{::nomarkdown}\(\prod_{1\le i&lt;j\le n}\left(\alpha_{i}-\alpha_{j}\right)^{2}\){:/nomarkdown}, גם אם זה לא פולינום גנרי ואפילו אם שורש כלשהו חוזר על עצמו (ולכן {::nomarkdown}\(D=0\){:/nomarkdown} במקרה הזה).

לסיכום: אם אנחנו רוצים לפתור משוואה פולינומית כלשהי באמצעות רדיקלים, הצעד הראשון שכדאי שננקוט בו הוא להוסיף לשדה שלנו את {::nomarkdown}\(\sqrt{D}\){:/nomarkdown} - השורש הריבועי של הדיסקרימיננטה של המשוואה. במשוואות ממעלה שניה זה מסיים את הסיפור. ובמשוואה ממעלה שלישית? ובכן, כאן הסיטואציה מסובכת יותר.
<h2>איך פותרים משוואה ממעלה שלישית, שלב א': מציאת הדיסקרימיננטה</h2>
נתחיל במילה זריזה למי שבאים לפה בתקווה למצוא נוסחה פשוטה כמו עבור משוואות למעלה שניה - <strong>תשכחו מזה</strong>. לא סתם הייתה מהומה שלמה סביב פתרון משוואות כאלו, ואני מקווה לכתוב פוסט מפורט בנושא בעתיד. אבל, וזה אבל גדול, עכשיו משאנחנו מצויידים בידע מתורת גלואה, מה שהולך פה לא יראה כמו מהומה אקראית אלא יש סדר והגיון כלשהו במה שנעשה.

השלב הראשון הוא <strong>פישוט</strong> של המשוואה שאנחנו רוצים לפתור, על ידי החלפת משתנים. <a href="https://gadial.net/2018/07/07/galois_theory_and_radical_extensions/">לא מזמן הצגתי</a> שיטה פשוטה למציאת הנוסחה של משוואה ממעלה שניה; התעלול המרכזי שם היה לפשט את {::nomarkdown}\(x^{2}+ax+b\){:/nomarkdown} על ידי ההחלפה {::nomarkdown}\(y=x+\frac{a}{2}\){:/nomarkdown}. זה "מחק" לגמרי את המקדם של {::nomarkdown}\(x\){:/nomarkdown} במשוואה, ונותרה לנו משוואה עם מקדם חופשי מסובך.

במשוואה ממעלה שלישית ננקוט בתעלול דומה, אבל זה לא יסיים את הסיפור עבורנו אלא רק יעלים את אחד מהגורמים במשוואה, ובכך יפשט את מצב העניינים. אם המשוואה שלנו היא {::nomarkdown}\(x^{3}+ax^{2}+bx+c\){:/nomarkdown}, אז נשתמש בהחלפה {::nomarkdown}\(y=x+\frac{a}{3}\){:/nomarkdown}. כלומר, {::nomarkdown}\(x=y-\frac{a}{3}\){:/nomarkdown}. עכשיו אפשר לבצע חישוב ארוך וכואב ולבדוק עם מה אנחנו נשארים:

{::nomarkdown}\(x^{3}=\left(y-\frac{a}{3}\right)^{3}=y^{3}-y^{2}a+\frac{ya^{2}}{3}-\frac{a^{3}}{27}\){:/nomarkdown}

{::nomarkdown}\(ax^{2}=a\left(y-\frac{a}{3}\right)^{2}=ay^{2}-\frac{2ya^{2}}{3}+\frac{a^{3}}{9}\){:/nomarkdown}

{::nomarkdown}\(bx=by-\frac{ba}{3}\){:/nomarkdown}

שימו לב ל-{::nomarkdown}\(-y^{2}a\){:/nomarkdown} בשורה של {::nomarkdown}\(x^{3}\){:/nomarkdown} ול-{::nomarkdown}\(ay^{2}\){:/nomarkdown} בשורה של {::nomarkdown}\(ax^{2}\){:/nomarkdown} - הם מבטלים זה את זה, ולכן אנחנו הולכים להישאר עם משוואה מהצורה

{::nomarkdown}\(y^{3}+py+q\){:/nomarkdown}

החישוב המדויק של {::nomarkdown}\(p,q\){:/nomarkdown} לא כל כך חשוב לנו כי מכאן ואילך אני הולך לפתור רק את המשוואה הזו ולא אטרח בסוף לחזור למשוואה המקורית, אבל למי שזה חשוב לו, אפשר לבצע את החישוב הזה בקלות, הוא פשוט לא יפה:

{::nomarkdown}\(p=\frac{a^{2}}{3}-2\frac{a^{2}}{3}+b=b-\frac{a^{2}}{3}=\frac{1}{3}\left(3b-a^{2}\right)\){:/nomarkdown}

{::nomarkdown}\(q=-\frac{a^{3}}{27}+\frac{a^{3}}{9}-\frac{ba}{3}+c=\frac{1}{27}\left(2a^{3}-9ab+27c\right)\){:/nomarkdown}

זהו, מעכשיו אני רוצה להתמקד בשאלה איך פותרים את המשוואה הבאה:

{::nomarkdown}\(x^{3}+px+q\){:/nomarkdown}

אם הולכים על פי השיטה של תורת גלואה, הצעד הראשון הוא להוסיף את {::nomarkdown}\(\sqrt{D}\){:/nomarkdown} לשדה שלנו, מה שאומר שנצטרך לחשב את הדיסקרימיננטה (בגלל הפישוט של המשוואה, גם הדיסקרימיננטה תצא פשוטה). השלב השני הוא להמשיך את שרשרת התת-חבורות שלנו: האיבר הנוכחי בשרשרת הוא {::nomarkdown}\(A_{3}\){:/nomarkdown}, שהוא פשוט החבורה הציקלית {::nomarkdown}\(\mathbb{Z}_{3}\){:/nomarkdown}. זה אומר שאם אנחנו כרגע בשדה {::nomarkdown}\(E\){:/nomarkdown}, אז ההרחבה שאנחנו צריכים כדי להגיע אל הפתרונות של המשוואה היא זו: קודם כל להוסיף ל-{::nomarkdown}\(E\){:/nomarkdown} את שורשי היחידה מסדר 3, ואחר כך להוסיף ל-{::nomarkdown}\(E\){:/nomarkdown} רזולבנטה שונה מאפס של איבר כלשהו משדה הפיצול.

אני אגלה מראש שהדיסקרימיננטה שנקבל תהיה {::nomarkdown}\(D=-4p^{3}-27q^{2}\){:/nomarkdown}, אבל כדי לקבל אותה נצטרך לעשות קצת להטוטים.

בואו נסמן את השורשים של המשוואה ב-{::nomarkdown}\(\alpha,\beta,\gamma\){:/nomarkdown}. מה שאנחנו מחפשים הוא דרך לתאר ב-{::nomarkdown}\(\mathbb{Q}\left(p,q\right)\){:/nomarkdown} את

{::nomarkdown}\(\left(\alpha-\beta\right)^{2}\left(\alpha-\gamma\right)^{2}\left(\beta-\gamma\right)^{2}\){:/nomarkdown}

אפשר פשוט לפתוח את הסוגריים ולקבץ איברים, אבל זה יהיה איבר מפלצתי בגודלו. הנה תעלול שיכול לפשט מאוד את העניינים: בואו נכתוב את {::nomarkdown}\(g\left(x\right)=x^{3}+px+q\){:/nomarkdown} במפורש בעזרת השורשים:

{::nomarkdown}\(g\left(x\right)=\left(x-\alpha\right)\left(x-\beta\right)\left(x-\gamma\right)\){:/nomarkdown}

עכשיו, מצד אחד קל לנו לגזור את {::nomarkdown}\(g\left(x\right)\){:/nomarkdown} כשהוא מוצג עם {::nomarkdown}\(p,q\){:/nomarkdown}:

{::nomarkdown}\(g^{\prime}\left(x\right)=3x^{2}+p\){:/nomarkdown}

אם נגזור את {::nomarkdown}\(g\left(x\right)\){:/nomarkdown} בצורה הכפלית שלה, על פי כללי הגזירה הרגילים, נקבל:

{::nomarkdown}\(g^{\prime}\left(x\right)=\left(x-\beta\right)\left(x-\gamma\right)+\left(x-\alpha\right)\left(x-\gamma\right)+\left(x-\alpha\right)\left(x-\beta\right)\){:/nomarkdown}

עכשיו ננקוט בתעלול ונציב בתוך {::nomarkdown}\(g^{\prime}\){:/nomarkdown} הזו כל אחד משלושת השורשים. זה תמיד יאפס שניים מהמחוברים, כך שנקבל:

{::nomarkdown}\(g^{\prime}\left(\alpha\right)=\left(\alpha-\beta\right)\left(\alpha-\gamma\right)\){:/nomarkdown}

{::nomarkdown}\(g^{\prime}\left(\beta\right)=\left(\beta-\alpha\right)\left(\beta-\gamma\right)\){:/nomarkdown}

{::nomarkdown}\(g^{\prime}\left(\gamma\right)=\left(\gamma-\beta\right)\left(\gamma-\alpha\right)\){:/nomarkdown}

ועכשיו תראו איזה קסם קרה! המכפלה של כל שלושת הביטויים הללו היא בדיוק {::nomarkdown}\(D\){:/nomarkdown}, עד כדי סימן!

{::nomarkdown}\(D=-g^{\prime}\left(\alpha\right)g^{\prime}\left(\beta\right)g^{\prime}\left(\gamma\right)=-\left(3\alpha^{2}+p\right)\left(3\beta^{2}+p\right)\left(3\gamma^{2}+p\right)\){:/nomarkdown}

הבעיה היא שעכשיו הכיף נגמר - עדיין יש לי ביטוי מסובך שצריך לפשט, ואין לי ברירה אלא לפתוח את הסוגריים. זה כאילו עברתי לדבר על פולינום אחר, שהמשתנה שלו הוא {::nomarkdown}\(p\){:/nomarkdown} והשורשים שלו הם {::nomarkdown}\(-3\alpha^{2},-3\beta^{2},-3\gamma^{2}\){:/nomarkdown}. לכן ברור שכשאני אפתח את הסוגריים אני אקבל פונקציות סימטריות בשורשים; הכי פשוט יהיה לכתוב את זה ולגמור עם זה:

{::nomarkdown}\(-D=p^{3}+3\left(\alpha^{2}+\beta^{2}+\gamma^{2}\right)p^{2}+9\left(\alpha^{2}\beta^{2}+\alpha^{2}\gamma^{2}+\beta^{2}\gamma^{2}\right)p+27\left(\alpha^{2}\beta^{2}\gamma^{2}\right)\){:/nomarkdown}

אנחנו יודעים שכל פונקציה סימטרית ב-{::nomarkdown}\(\alpha,\beta,\gamma\){:/nomarkdown} ניתנת לכתיבה בתור צירוף כלשהו של {::nomarkdown}\(p,q\){:/nomarkdown} (כי כל פונקציה סימטרית בשורשים של פולינום ניתנת לכתיבה בתור צירוף של המקדמים). זה לא חוסך מאיתנו את הצורך המעיק למצוא את הצירוף הזה.

מה אנחנו יודעים על הקשר בין המקדמים והשורשים?
<ul>
 	<li>{::nomarkdown}\(\alpha+\beta+\gamma=0\){:/nomarkdown} (זה המקדם של {::nomarkdown}\(x^{2}\){:/nomarkdown})</li>
 	<li>{::nomarkdown}\(p=\alpha\beta+\alpha\gamma+\beta\gamma\){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(q=-\alpha\beta\gamma\){:/nomarkdown}</li>
</ul>
אם כן, מייד אנחנו רואים ש-{::nomarkdown}\(\alpha^{2}\beta^{2}\gamma^{2}=q^{2}\){:/nomarkdown} וזה כבר טיפל לנו באחת משלוש הפונקציות הסימטריות שיש למעלה. בואו נמשיך אל הבאות בתור.

אם נעלה בריבוע את {::nomarkdown}\(\alpha+\beta+\gamma\){:/nomarkdown} נקבל:

{::nomarkdown}\(0=\left(\alpha^{2}+\beta^{2}+\gamma^{2}\right)+2\left(\alpha\beta+\alpha\gamma+\beta\gamma\right)=\left(\alpha^{2}+\beta^{2}+\gamma^{2}\right)+2p\){:/nomarkdown}

כך שיש לנו עוד מקדם: המקדם של {::nomarkdown}\(p^{2}\){:/nomarkdown} בדיסקרימיננטה הוא פשוט {::nomarkdown}\(-2p\){:/nomarkdown}.

התעלול האחרון יהיה להעלות בריבוע את {::nomarkdown}\(p\){:/nomarkdown} עצמו. נקבל:

{::nomarkdown}\(p^{2}=\left(\alpha^{2}\beta^{2}+\alpha^{2}\gamma^{2}+\beta^{2}\gamma^{2}\right)+2\left(\alpha^{2}\beta\gamma+\alpha\beta^{2}\gamma+\alpha\beta\gamma^{2}\right)\){:/nomarkdown}

המחובר הימני יעלים את עצמו:

{::nomarkdown}\(\alpha^{2}\beta\gamma+\alpha\beta^{2}\gamma+\alpha\beta\gamma^{2}=q\left(\alpha+\beta+\gamma\right)=0\){:/nomarkdown}

כך שקיבלנו:

{::nomarkdown}\(p^{2}=\left(\alpha^{2}\beta^{2}+\alpha^{2}\gamma^{2}+\beta^{2}\gamma^{2}\right)\){:/nomarkdown}

וכשנציב הכל בביטוי של הדיסקרימיננטה נקבל:

{::nomarkdown}\(-D=p^{3}+3\left(-2p\right)p^{2}+9\left(p^{2}\right)p+27\left(q^{2}\right)=4p^{3}+27q^{2}\){:/nomarkdown}

בדיוק כמו שהבטחתי למעלה.
<h2>איך פותרים משוואה ממעלה שלישית, שלב ב' - שובן של הרזולבנטות</h2>
סיכום ביניים קצר: התחלנו מ-{::nomarkdown}\(\mathbb{Q}\left(p,q\right)\){:/nomarkdown} ועברנו אל {::nomarkdown}\(\mathbb{Q}\left(p,q,\sqrt{D}\right)\){:/nomarkdown} כאשר {::nomarkdown}\(D=-4p^{3}-27q^{2}\){:/nomarkdown}. עכשיו, אומרת תורת גלואה, נא להרחיב את השדה עם שורש יחידה פרימיטיבי מסדר 3. אוקיי, נסמן את השורש הזה ב-{::nomarkdown}\(\omega\triangleq e^{\frac{2\pi i}{3}}\){:/nomarkdown}. אנחנו עכשיו מעל השדה {::nomarkdown}\(\mathbb{Q}\left(p,q,\sqrt{D},\omega\right)\){:/nomarkdown}. ועכשיו? עכשיו אנחנו מחפשים איבר שעדיין אין לנו, שחזקת 3 שלו כן נמצאת איתנו. איבר כזה יכול להתקבל בתור הרזולבנטה של משהו, בתנאי שהרזולבנטה הזו תהיה שונה מאפס.

איך נראית רזולבנטה במקרה שלנו? היא יותר מסובכת ממה שהיה קודם - קודם התעסקנו עם שורש היחידה הפרימיטיבי מסדר 2 ואילו עכשיו יש לנו את {::nomarkdown}\(\omega\){:/nomarkdown}. חבורת הגלואה הרלוונטית היא {::nomarkdown}\(A_{3}\){:/nomarkdown} שאפשר לכתוב הכי במפורש בעולם: {::nomarkdown}\(A_{3}=\left\{ e,\left(1\ 2\ 3\right),\left(1\ 3\ 2\right)\right\} \){:/nomarkdown}. אז אני אסמן {::nomarkdown}\(\sigma=\left(1\ 2\ 3\right)\){:/nomarkdown}. באופן מפורש, זו הפונקציה שמבצעת

{::nomarkdown}\(\sigma\left(\alpha\right)=\beta\){:/nomarkdown}

{::nomarkdown}\(\sigma\left(\beta\right)=\gamma\){:/nomarkdown}

{::nomarkdown}\(\sigma\left(\gamma\right)=\alpha\){:/nomarkdown}

ולכן:

{::nomarkdown}\(\sigma^{2}\left(\alpha\right)=\gamma\){:/nomarkdown}

{::nomarkdown}\(\sigma^{2}\left(\beta\right)=\alpha\){:/nomarkdown}

{::nomarkdown}\(\sigma^{2}\left(\gamma\right)=\beta\){:/nomarkdown}

מה שנעשה עכשיו הוא להסתכל על <strong>כל</strong> הרזולבנטות של השורש {::nomarkdown}\(\alpha\){:/nomarkdown}, עבור כל אחד משלושת שורשי היחידה האפשריים, {::nomarkdown}\(1,\omega,\omega^{2}\){:/nomarkdown}:

{::nomarkdown}\(\left(\alpha,1\right)=\alpha+\sigma\left(\alpha\right)=\sigma^{2}\left(\alpha\right)=\alpha+\beta+\gamma=0\){:/nomarkdown}

{::nomarkdown}\(\left(\alpha,\omega\right)=\alpha+\sigma\left(\alpha\right)\omega=\sigma^{2}\left(\alpha\right)\omega^{2}=\alpha+\beta\omega+\gamma\omega^{2}=\theta_{1}\){:/nomarkdown}

{::nomarkdown}\(\left(\alpha,\omega^{2}\right)=\alpha+\sigma\left(\alpha\right)\omega^{2}=\sigma^{2}\left(\alpha\right)\omega=\alpha+\beta\omega^{2}+\gamma\omega=\theta_{2}\){:/nomarkdown}

השילוב של שלוש הרזולבנטות הללו ביחד יכול לחלץ את {::nomarkdown}\(\alpha\){:/nomarkdown} כמעט מייד באופן הבא: בואו נחבר את שלושתן ונקבל

{::nomarkdown}\(0+\theta_{1}+\theta_{2}=3\alpha+\left(1+\omega+\omega^{2}\right)\beta+\left(1+\omega^{2}+\omega\right)\gamma\){:/nomarkdown}

העניין הוא ש-{::nomarkdown}\(1+\omega+\omega^{2}=0\){:/nomarkdown}. אין כאן קסם מיוחד - זה כך לכל סכום של <strong>כל</strong> שורשי היחידה מסדר מסוים, ונובע פשוט מכך ש-

{::nomarkdown}\(1+\omega+\omega^{2}+\dots+\omega^{n-1}=\frac{\omega^{n}-1}{\omega-1}=\frac{1-1}{\omega-1}=0\){:/nomarkdown}

לכן קיבלנו:

{::nomarkdown}\(\alpha=\frac{\theta_{1}+\theta_{2}}{3}\){:/nomarkdown}

כאשר <strong>מובטח לנו</strong> ש-{::nomarkdown}\(\theta_{1}^{3},\theta_{2}^{3}\){:/nomarkdown} כבר שייכים לשדה שאנחנו עובדים מעליו. כל מה שנשאר לנו לעשות הוא למצוא הצגה מפורשת שלהם. זה יהיה, אולי שלא במפתיע, החלק הכי טכני פה.

איך אני אחשב את {::nomarkdown}\(\theta_{1}^{3}\){:/nomarkdown}? ובכן, במפורש. זה סכום של שלושה איברים, ולכן כשאעלה אותו בחזקה שלישית אני אקבל סכום של 27 איברים וזה לא נעים בכלל, אבל נתמודד עם זה. תהיה הרבה סימטריה.

הנוסחה הכללית שרלוונטית לנו היא זו:

{::nomarkdown}\(\left(x+y+z\right)^{3}=\left(x^{3}+y^{3}+z^{3}\right)+3x^{2}\left(y+z\right)+3y^{2}\left(x+z\right)+3z^{2}\left(x+y\right)+6xyz\){:/nomarkdown}

הרעיון פה הוא כמו <a href="https://gadial.net/2010/06/22/newton_binom/">הבינום של ניוטון</a>: כל מונום בפיתוח הוא תוצאה של בחירה של איבר מכל אחד משלושת המוכפלים. {::nomarkdown}\(x^{3}\){:/nomarkdown} למשל מתאים לסיטואציה שבה בחרנו את {::nomarkdown}\(x\){:/nomarkdown} מכולם, ויש רק דרך אחת לעשות זאת; לעומת זאת, {::nomarkdown}\(x^{2}y\){:/nomarkdown} פירושו שבחרנו {::nomarkdown}\(x\){:/nomarkdown} משני מוכפלים ו-{::nomarkdown}\(y\){:/nomarkdown} מהשלישי, ויש 3 דרכים לעשות זאת (אנחנו בוחרים מאיזה מהמוכפלים ניקח את {::nomarkdown}\(y\){:/nomarkdown}). ה-{::nomarkdown}\(6xyz\){:/nomarkdown} בסיום מגיע מכך שיש 6 פרמוטציות אפשריות על 1,2,3 וכל פרמוטציה אומרת לנו "מהמוכפל ה-{::nomarkdown}\(i\){:/nomarkdown} קח את האיבר ה-{::nomarkdown}\(\sigma\left(i\right)\){:/nomarkdown}-י".

עכשיו אני מציב:

{::nomarkdown}\(x=\alpha\){:/nomarkdown}

{::nomarkdown}\(y=\beta\omega\){:/nomarkdown}

{::nomarkdown}\(z=\gamma\omega^{2}\){:/nomarkdown}

ומקבל:

{::nomarkdown}\(\left(\alpha^{3}+\beta^{3}+\gamma^{3}\right)+\){:/nomarkdown}

{::nomarkdown}\(3\alpha^{2}\left(\beta\omega+\gamma\omega^{2}\right)+3\beta^{2}\omega^{2}\left(\alpha+\gamma\omega^{2}\right)+3\gamma^{2}\omega\left(\alpha+\omega\beta\right)+\){:/nomarkdown}

{::nomarkdown}\(6\alpha\beta\gamma\){:/nomarkdown}

המחובר התחתון הוא פשוט מאוד: זה {::nomarkdown}\(-6q\){:/nomarkdown} ידידינו משכבר הימים.

המחובר העליון גם כן לא מסובך. בואו נציב את {::nomarkdown}\(\alpha,\beta,\gamma\){:/nomarkdown} בביטוי ל-{::nomarkdown}\(\left(x+y+z\right)^{3}\){:/nomarkdown} שהראיתי קודם - אנחנו הרי יודעים ש-{::nomarkdown}\(\alpha+\beta+\gamma=0\){:/nomarkdown} וזה יעזור לנו פעמיים: זה אומר לנו ש-{::nomarkdown}\(\left(x+y+z\right)^{3}=0\){:/nomarkdown} במקרה הזה, וזה מחליף גורם כמו {::nomarkdown}\(3x^{2}\left(y+z\right)\){:/nomarkdown} בגורם הידידותי יותר {::nomarkdown}\(-3x^{3}\){:/nomarkdown}, כך שבסופו של דבר נקבל:

{::nomarkdown}\(0=-2\left(\alpha^{3}+\beta^{3}+\gamma^{3}\right)+6\alpha\beta\gamma\){:/nomarkdown}

כלומר

{::nomarkdown}\(\alpha^{3}+\beta^{3}+\gamma^{3}=-3q\){:/nomarkdown}

עיקר המהומה נמצאת בגורם האמצעי; יותר קל להבין מה קורה איתו אם מקבצים אותו לפי חזקות של {::nomarkdown}\(\omega\){:/nomarkdown}. אנחנו נקבל:

{::nomarkdown}\(3\omega\left(\alpha^{2}\beta+\beta^{2}\gamma+\gamma^{2}\alpha\right)+3\omega^{2}\left(\alpha^{2}\gamma+\beta^{2}\alpha+\gamma^{2}\beta\right)\){:/nomarkdown}

שזה, למען האמת, ביטוי די סימטרי ונחמד! אבל די קשה להרגיש את זה מבלי שתהיו חייבים לכתוב את כל זה בעצמכם (ובואו לא נשלה את עצמנו - אני כותב את הפוסט ברמת הפירוט הזו בדיוק בגלל שאני רוצה להבין את הסיפור הזה פעם אחת ולתמיד). אבל "די סימטרי ונחמד" לא עוזר לי - אני צריך משהו שחי בשדה {::nomarkdown}\(\mathbb{Q}\left(p,q,\sqrt{D},\omega\right)\){:/nomarkdown}. אז בואו אני אוכיח לכם שהמקדם של {::nomarkdown}\(3\omega\){:/nomarkdown} שווה ל-{::nomarkdown}\(\frac{3q+\sqrt{D}}{2}\){:/nomarkdown} והמקדם של {::nomarkdown}\(3\omega^{2}\){:/nomarkdown} שווה ל-{::nomarkdown}\(\frac{3q-\sqrt{D}}{2}\){:/nomarkdown}.

בשביל זה צריך לחזור קודם כל להגדרה של {::nomarkdown}\(\sqrt{D}\){:/nomarkdown}:

{::nomarkdown}\(\sqrt{D}=\left(\alpha-\beta\right)\left(\alpha-\gamma\right)\left(\beta-\gamma\right)\){:/nomarkdown}

מכפלות כאלו כבר קטנות עלינו; בואו נפתח את הסוגריים ונקבל

{::nomarkdown}\(\sqrt{D}=\left(\alpha^{2}\beta+\beta^{2}\gamma+\gamma^{2}\alpha\right)-\left(\alpha^{2}\gamma+\beta^{2}\alpha+\gamma^{2}\beta\right)\){:/nomarkdown}

בואו ניקח את אותו ביטוי בדיוק רק עם פלוס במקום מינוס באמצע:

{::nomarkdown}\(S=\left(\alpha^{2}\beta+\beta^{2}\gamma+\gamma^{2}\alpha\right)+\left(\alpha^{2}\gamma+\beta^{2}\alpha+\gamma^{2}\beta\right)\){:/nomarkdown}

אז ברור ש-

{::nomarkdown}\(\frac{S+\sqrt{D}}{2}=\left(\alpha^{2}\beta+\beta^{2}\gamma+\gamma^{2}\alpha\right)\){:/nomarkdown} (זה המקדם של {::nomarkdown}\(3\omega\){:/nomarkdown})

{::nomarkdown}\(\frac{S-\sqrt{D}}{2}=\left(\alpha^{2}\gamma+\beta^{2}\alpha+\gamma^{2}\beta\right)\){:/nomarkdown} (זה המקדם של {::nomarkdown}\(3\omega^{2}\){:/nomarkdown})

נשאר רק להבין את {::nomarkdown}\(S\){:/nomarkdown} עצמו, אבל זה בדיוק הביטוי שצץ במהלך הפיתוח של {::nomarkdown}\(\left(\alpha+\beta+\gamma\right)^{3}\){:/nomarkdown}:

{::nomarkdown}\(0=\left(\alpha+\beta+\gamma\right)^{3}=\left(\alpha^{3}+\beta^{3}+\gamma^{3}\right)+3S+6\alpha\beta\gamma=-3q+3S-6q\){:/nomarkdown}

כלומר, נקבל {::nomarkdown}\(S=3q\){:/nomarkdown}, כפי שהבטחתי.

בזאת סיימנו! סיימנו את החישוב של {::nomarkdown}\(\theta_{1}^{3}\){:/nomarkdown}:

{::nomarkdown}\(\theta_{1}^{3}=-3q+\frac{3}{2}\omega\left(3q+\sqrt{D}\right)+\frac{3}{2}\omega^{2}\left(3q-\sqrt{D}\right)-6q\){:/nomarkdown}

האם אפשר לפשט את הביטוי הזה עוד יותר? ובכן, כן, אם רוצים להיפטר משורשי היחידה. ראשית, {::nomarkdown}\(\omega+\omega^{2}=-1\){:/nomarkdown}, אז מביטוי כמו זה קל להיפטר. שנית, וזה פחות טריוויאלי, {::nomarkdown}\(\omega-\omega^{2}=\sqrt{-3}\){:/nomarkdown}. כדי לראות את הדבר השני בואו נזכור ש-{::nomarkdown}\(\omega\){:/nomarkdown} הוא שורש של הפולינום הציקלוטומי {::nomarkdown}\(x^{2}+x+1\){:/nomarkdown} ובעזרת הנוסחה לפתרון משוואה ממעלה שניה נקבל {::nomarkdown}\(\omega=\frac{1+\sqrt{-3}}{2}\){:/nomarkdown} ו-{::nomarkdown}\(\omega^{2}=\frac{1-\sqrt{-3}}{2}\){:/nomarkdown} ומהם זה מיידי.

עכשיו הפישוט ברור: נקבל איבר מהצורה {::nomarkdown}\(\frac{9q}{2}\left(\omega+\omega^{2}\right)\){:/nomarkdown} ואיבר מהצורה {::nomarkdown}\(\frac{3\sqrt{D}}{2}\left(\omega-\omega^{2}\right)\){:/nomarkdown}, ובסך הכל נקבל:

{::nomarkdown}\(\theta_{1}^{3}=-9q-\frac{9q}{2}+\frac{3\sqrt{D}}{2}\sqrt{-3}\){:/nomarkdown}

ולכן:

{::nomarkdown}\(\theta_{1}^{3}=-\frac{27}{2}q+\frac{3}{2}\sqrt{-3D}\){:/nomarkdown}

שזה... די פשוט, חייבים להודות!

אוקיי, ומה עם {::nomarkdown}\(\theta_{2}^{3}\){:/nomarkdown}? זה מזעזע, אבל גם אותו צריך לחשב!

אבל... אם עוצרים וחושבים רגע, מה ההבדל בין שניהם? בואו ניזכר איך הם הוגדרו:

{::nomarkdown}\(\theta_{1}=\alpha+\beta\omega+\gamma\omega^{2}\){:/nomarkdown}

{::nomarkdown}\(\theta_{2}=\alpha+\gamma\omega+\beta\omega^{2}\){:/nomarkdown}

כל מה שהשתנה הוא החלפת התפקידים של {::nomarkdown}\(\beta\){:/nomarkdown} ו-{::nomarkdown}\(\gamma\){:/nomarkdown}, אבל למה שזה ישפיע על משהו מהמשך החישוב? כל מה שקורה הוא סימטרי לחלוטין ביחס ל-{::nomarkdown}\(\beta\){:/nomarkdown} ו-{::nomarkdown}\(\gamma\){:/nomarkdown} ו... רגע, לא, לא נכון. יש דבר אחד שבמובהק שובר את הסימטריה: {::nomarkdown}\(\sqrt{D}\){:/nomarkdown}. אולי כבר שכחנו, אבל זו הייתה <strong>כל הפואנטה</strong> של {::nomarkdown}\(\sqrt{D}\){:/nomarkdown}; שזה איבר שלא נמצא בשדה השבת של {::nomarkdown}\(S_{3}\){:/nomarkdown}; הגענו לכך שחילוף בודד מעביר את {::nomarkdown}\(\sqrt{D}\){:/nomarkdown} אל {::nomarkdown}\(-\sqrt{D}\){:/nomarkdown}. זה בדיוק מה שיקרה כאן - הביטוי שנקבל ל-{::nomarkdown}\(\theta_{2}^{3}\){:/nomarkdown} זהה לביטוי של {::nomarkdown}\(\theta_{1}^{3}\){:/nomarkdown} למעט זה שצריך להחליף את {::nomarkdown}\(\sqrt{D}\){:/nomarkdown} ב-{::nomarkdown}\(-\sqrt{D}\){:/nomarkdown}, ונקבל:

{::nomarkdown}\(\theta_{2}^{3}=-\frac{27}{2}q-\frac{3}{2}\sqrt{-3D}\){:/nomarkdown}
<h2>איך פותרים משוואה ממעלה שלישית, שלב ג' - נוסחאות קרדנו</h2>
בואו נעשה סיכום ביניים של מה שיש לנו. מצאנו איברים {::nomarkdown}\(\theta_{1},\theta_{2}\){:/nomarkdown} שנותנים לנו את השורש {::nomarkdown}\(\alpha\){:/nomarkdown} של הפולינום {::nomarkdown}\(x^{3}+px+q\){:/nomarkdown} באופן הבא:

{::nomarkdown}\(\alpha=\frac{\theta_{1}+\theta_{2}}{3}\){:/nomarkdown}

{::nomarkdown}\(\theta_{1}^{3}=-\frac{27}{2}q+\frac{3}{2}\sqrt{-3D}\){:/nomarkdown}

{::nomarkdown}\(\theta_{2}^{3}=-\frac{27}{2}q-\frac{3}{2}\sqrt{-3D}\){:/nomarkdown}

מפתה מאוד לכתוב עכשיו משהו בסגנון הזה:

{::nomarkdown}\(\alpha=\frac{1}{3}\left(\sqrt[3]{-\frac{27}{2}q+\frac{3}{2}\sqrt{-3D}}+\sqrt[3]{-\frac{27}{2}q-\frac{3}{2}\sqrt{-3D}}\right)\){:/nomarkdown}

אבל למרות שזה מפתה, צריך להיזהר פה. לכתוב {::nomarkdown}\(\sqrt[3]{a}\){:/nomarkdown} אומר "קחו את אחד מהשורשים השלישיים של {::nomarkdown}\(a\){:/nomarkdown}, לא חשוב איזה". עכשיו, זה נכון שאפשר לקבל את {::nomarkdown}\(\theta_{1}\){:/nomarkdown} על ידי בחירת שורש שלישי כלשהו של {::nomarkdown}\(-\frac{27}{2}q+\frac{3}{2}\sqrt{-3D}\){:/nomarkdown} באופן שרירותי (עבור בחירה שונה של שורש נקבל בסוף גם שורש שונה מבין שלושת השורשים של הפולינום), אבל מרגע שבחרנו את {::nomarkdown}\(\theta_{1}\){:/nomarkdown} אנחנו כבר לא יכולים לבחור בשרירותיות את {::nomarkdown}\(\theta_{2}\){:/nomarkdown}; הוא תלוי אלגברית ב-{::nomarkdown}\(\theta_{1}\){:/nomarkdown}. לכן, אם אנחנו רוצים לסיים את הסיפור סופית, אנחנו צריכים למצוא את הקשר האלגברי בין שניהם. הקשר הזה הוא די פשוט: {::nomarkdown}\(\theta_{1}\theta_{2}=-3p\){:/nomarkdown}. איך רואים את זה? ובכן, בואו נעשה עוד חשבון ארוך וכואב, בפעם האחרונה:

{::nomarkdown}\(\theta_{1}\theta_{2}=\left(\alpha+\beta\omega+\gamma\omega^{2}\right)\left(\alpha+\gamma\omega+\beta\omega^{2}\right)=\){:/nomarkdown}

{::nomarkdown}\(\left(\alpha^{2}+\beta^{2}+\gamma^{2}\right)+\left(\alpha\beta+\alpha\gamma+\gamma\beta\right)\left(\omega+\omega^{2}\right)=\){:/nomarkdown}

{::nomarkdown}\(-2p-p=-3p\){:/nomarkdown}

כאשר אני מתבסס על החישובים שכבר ביצעתי קודם. זה מסיים את הסיפור כמעט לגמרי, למעט העובדה שבינתיים הראיתי איך למצוא שורש <strong>אחד</strong> של המשוואה; איך מוצאים את כולם?

ובכן, זה החלק הפשוט בסיפור. בואו ניזכר שוב בשלושת האיברים שמככבים פה:

{::nomarkdown}\(0=\alpha+\beta+\gamma\){:/nomarkdown}

{::nomarkdown}\(\theta_{1}=\alpha+\beta\omega+\gamma\omega^{2}\){:/nomarkdown}

{::nomarkdown}\(\theta_{2}=\alpha+\beta\omega^{2}+\gamma\omega\){:/nomarkdown}

הגעתי לנוסחה הקודמת על ידי כך שחיברתי את שלושת האיברים הללו. הפואנטה הייתה שהמקדם של {::nomarkdown}\(\alpha\){:/nomarkdown} היה זהה בשלושתם, ועבור שאר השורשים המקדמים היו שונים בין שלושתם. אפשר לנסות להשיג אפקט דומה עבור {::nomarkdown}\(\beta,\gamma\){:/nomarkdown} על ידי כפל של המשוואות ב-{::nomarkdown}\(\omega\){:/nomarkdown} ו-{::nomarkdown}\(\omega^{2}\){:/nomarkdown}. למשל, כדי לבודד את {::nomarkdown}\(\beta\){:/nomarkdown} אפשר לכפול את {::nomarkdown}\(\theta_{1}\){:/nomarkdown} ב-{::nomarkdown}\(\omega^{2}\){:/nomarkdown} ואת {::nomarkdown}\(\theta_{2}\){:/nomarkdown} ב-{::nomarkdown}\(\omega\){:/nomarkdown} ולקבל:

עכשיו, בואו נכפול את {::nomarkdown}\(\theta_{2}\){:/nomarkdown} ואת {::nomarkdown}\(0\){:/nomarkdown} ב-{::nomarkdown}\(\omega\){:/nomarkdown} ורק אז נחבר:

{::nomarkdown}\(0=\alpha+\beta+\gamma\){:/nomarkdown}

{::nomarkdown}\(\omega^{2}\theta_{1}=\alpha\omega^{2}+\beta+\gamma\omega\){:/nomarkdown}

{::nomarkdown}\(\omega\theta_{2}=\alpha\omega+\beta+\gamma\omega^{2}\){:/nomarkdown}

ועכשיו נקבל {::nomarkdown}\(\beta=\frac{\omega^{2}\theta_{1}+\omega\theta_{2}}{3}\){:/nomarkdown}

ובאותו אופן נקבל {::nomarkdown}\(\gamma=\frac{\omega\theta_{1}+\omega^{2}\theta_{2}}{3}\){:/nomarkdown}

וזה כבר מסיים לחלוטין את הפתרון, ונותן את הנוסחה שמוכרת בתור <strong>נוסחת קרדנו</strong>. הנה הניסוח ה"נקי", שלא מצריך את ההבנה של מה שהלך פה:

בהינתן פולינום {::nomarkdown}\(x^{3}+px+q\){:/nomarkdown}, נגדיר

{::nomarkdown}\(D=-4p^{3}-27q^{2}\){:/nomarkdown}

{::nomarkdown}\(A=\sqrt[3]{-\frac{27}{2}q+\frac{3}{2}\sqrt{-3D}}\){:/nomarkdown}

{::nomarkdown}\(B=\sqrt[3]{-\frac{27}{2}q-\frac{3}{2}\sqrt{-3D}}\){:/nomarkdown}

כאשר {::nomarkdown}\(B\){:/nomarkdown} נבחר באופן כזה ש-{::nomarkdown}\(AB=-3p\){:/nomarkdown}, וכעת השורשים של הפולינום נתונים על ידי

{::nomarkdown}\(x_{1}=\frac{A+B}{3}\){:/nomarkdown}

{::nomarkdown}\(x_{2}=\frac{\omega A+\omega^{2}B}{3}\){:/nomarkdown}

{::nomarkdown}\(x_{3}=\frac{\omega^{2}A+\omega B}{3}\){:/nomarkdown}

ביחס לטירוף שעברנו כדי להגיע אל הנוסחה הזו, אני מרגיש שהתוצאה הסופית היא דווקא אלגנטית למדי.
