---
id: 3635
title: "תורת גלואה ופתרון משוואות באמצעות רדיקלים"
date: 2018-07-07 21:01:05
layout: post
categories: 
  - אלגברה מופשטת
tags: 
  - פתרון משוואות באמצעות רדיקלים
  - תורת גלואה
---
<h2>מבוא</h2>
בסדרת הפוסטים הנוכחית הצגתי את הבסיס של תורת גלואה: ראינו את המשפט היסודי שמקשר בין המבנה של הרחבת שדות והמבנה של חבורת האוטומורפיזמים של ההרחבה, וראינו כמה שימושים של התורה הזו כדי להבין יותר טוב איך עובדות הרחבות של שדות. מה שלא ראינו עדיין הוא את הפואנטה - הסיבה שבגללה גלואה המציא מלכתחילה את כל זה: מה שנקרא <strong>פתרון משוואות פולינומיות באמצעות רדיקלים</strong>.

הנושא הזה הוא אחד מהשיאים בכל תיאור היסטורי של התפתחות המתמטיקה, כי זוהי הבעיה שהפכה את האלגברה הקלאסית למה שאנחנו קוראים לו היום "אלגברה מודרנית". מה שגלואה עשה היה אחד מהבסיסים המרכזיים להמצאת המושגים של <strong>חבורה</strong> ושל <strong>שדה</strong>, ומרתק להיכנס לפרטים המלאים של הנושא. רק שלא אעשה את זה כרגע אלא כנראה במועד מאוחר יותר, כי בהיסטוריה של המתמטיקה אני חושב שצריך קודם להבין טוב את ה"איך" לפני שמדברים על ה"מה ולמה".

בואו נתחיל עם הדוגמא המנחה שנותנת מוטיבציה לכל הסיפור הזה - הנוסחה לפתרון משוואה ריבועית. <strong>משוואה ריבועית</strong> היא ביטוי מהצורה {::nomarkdown}\(ax^{2}+bx+c=0\){:/nomarkdown} כאשר {::nomarkdown}\(x\){:/nomarkdown} הוא <strong>משתנה</strong> ואילו ה-{::nomarkdown}\(a,b,c\){:/nomarkdown} הם <strong>מקדמים</strong> מספריים. <strong>פתרון</strong> של משוואה ריבועית הוא מספר {::nomarkdown}\(\theta\){:/nomarkdown} שאפשר להציב במקום {::nomarkdown}\(x\){:/nomarkdown}, לבצע את החישוב {::nomarkdown}\(a\theta^{2}+b\theta+c\){:/nomarkdown} ולבדוק אם קיבלנו אפס או לא (בלשון של הפוסטים האחרונים - נתון לנו<strong> פולינום</strong> ממעלה שניה ואנחנו רוצים למצוא שורש שלו). מה שאנחנו באמת רוצים הוא <strong>נוסחה</strong> שנותנת לנו פתרונות של משוואה שכזו בלי שנצטרך להתאמץ, ובתיכון לומדים שהקסם הזה הוא אפשרי, במחיר אחת הנוסחאות המזעזעות ביותר שהציבור הרחב נחשף להן, ואחת מהיחידות שאני זוכר בעל פה עד היום:

{::nomarkdown}\(x_{1,2}=\frac{-b\pm\sqrt{b^{2}-4ac}}{2a}\){:/nomarkdown}

איך בכלל הגיעו לנוסחה מפלצתית שכזו? <a href="https://gadial.net/2008/01/26/solving_quadratic_equations/">אחד מהפוסטים החביבים עלי</a> בבלוג עוסק בדיוק בשאלה הזו. ברשותכם, אני רוצה לענות עליה שוב, אבל בצורה קצת שונה ויותר מתוחכמת, שתתאים למה שאני הולך לעשות בהמשך. ראשית, ההנחה הבסיסית שלי היא שאותם {::nomarkdown}\(a,b,c\){:/nomarkdown} וגם {::nomarkdown}\(\theta\){:/nomarkdown} נלקחים כולם מתוך <strong>שדה</strong>. כלומר, שאפשר לחבר, לכפול, לחסר <strong>ולחלק</strong> אותם. אפשר גם לדבר על פתרון משוואות מעל חוג, שהוא מקרה יותר כללי, אבל שם לא תמיד יהיו פתרונות וזה נושא לדיון נפרד; עדיף קודם כל להבין את המקרה הפשוט. כמו כן, הנחה נוספת שלי היא ש-{::nomarkdown}\(a\ne0\){:/nomarkdown} אחרת יש לנו ביד משוואה אחרת, פשוטה יותר: {::nomarkdown}\(bx+c=0\){:/nomarkdown}. אם גם {::nomarkdown}\(b=0\){:/nomarkdown} אז הפכנו למשוואה {::nomarkdown}\(c=0\){:/nomarkdown} שהיא או נכונה או לא; אין לה "פתרונות" ספציפיים. אם {::nomarkdown}\(b\ne0\){:/nomarkdown} אז אפשר לחלק בו ולקבל {::nomarkdown}\(x=-\frac{c}{b}\){:/nomarkdown}, כלומר זה מקרה קל עם פתרון יחיד. לכן המקרה המעניין הראשון הוא {::nomarkdown}\(ax^{2}+bx+c\){:/nomarkdown} עם ההנחה הנוספת {::nomarkdown}\(a\ne0\){:/nomarkdown}.

אם {::nomarkdown}\(a\ne0\){:/nomarkdown} אפשר <strong>לפשט</strong> את המשוואה על ידי חלוקה בו: נקבל את המשוואה {::nomarkdown}\(x^{2}+\frac{b}{a}x+\frac{c}{a}\){:/nomarkdown}. בואו נסמן {::nomarkdown}\(A=\frac{b}{x}\){:/nomarkdown} ו-{::nomarkdown}\(B=\frac{c}{a}\){:/nomarkdown} ונקבל את המשוואה הפשוטה יותר {::nomarkdown}\(x^{2}+Ax+B=0\){:/nomarkdown}. המפתח לפתרון המשוואה הזו טמון ב<strong>עוד</strong> תעלול, שנקרא "השלמה לריבוע" ואפשר לתאר בדרך ציורית ויפה ועשיתי את זה בפוסט ההוא, אבל בואו פשוט נציג אותו כאן בדרך שנוחה לי: אני מבצע <strong>החלפת משתנה</strong> על ידי הגדרת {::nomarkdown}\(y=x+\frac{A}{2}\){:/nomarkdown}. חשוב לי שנראה את ההצבה הזו כי ההתמודדות עם משוואות ממעלה שלישית ורביעית מתחילה באותו האופן. מההצבה הזו אנחנו מקבלים

{::nomarkdown}\(x=y-\frac{A}{2}\){:/nomarkdown}

ולכן גם

{::nomarkdown}\(x^{2}=y^{2}-Ay+\frac{A^{2}}{4}\){:/nomarkdown}

ואחרי שנציב את זה במשוואה המקורית, נקבל

{::nomarkdown}\(x^{2}+Ax+B=\left(y^{2}-Ay+\frac{A^{2}}{4}\right)+A\left(y-\frac{A}{2}\right)+B=\){:/nomarkdown}

{::nomarkdown}\(=y^{2}+\frac{A^{2}-2A^{2}+4B}{4}=y^{2}+\frac{-A^{2}+4B}{4}=y^{2}-\frac{A^{2}-4B}{4}\){:/nomarkdown}

עכשיו אפשר להעביר את הביטוי הימני אגף, ולקבל:

{::nomarkdown}\(y^{2}=\frac{A^{2}-4B}{4}\){:/nomarkdown}

ועכשיו מגיע פתאום מהלך חדש, ששובר את כללי המשחק: אנחנו <strong>מוציאים שורש ריבועי</strong> ומקבלים {::nomarkdown}\(y_{1,2}=\pm\frac{\sqrt{A^{2}-4B}}{2}\){:/nomarkdown}. השאלה "האם בכלל מותר לנו להוציא פה שורש?" היא מצויינת ועוד מעט נחזור אליה.

עכשיו, משיש לנו פתרון למשוואה עם {::nomarkdown}\(y\){:/nomarkdown}, אפשר לחזור ממנו אל פתרון למשוואה עם {::nomarkdown}\(x\){:/nomarkdown}:

{::nomarkdown}\(x_{1,2}+\frac{A}{2}=\pm\frac{\sqrt{A^{2}-4B}}{2}\){:/nomarkdown}

{::nomarkdown}\(x_{1,2}=\frac{-A\pm\sqrt{A^{2}-4B}}{2}\){:/nomarkdown}

ועכשיו אפשר לחזור למשוואה עם {::nomarkdown}\(a,b,c\){:/nomarkdown}:

{::nomarkdown}\(x_{1,2}=\frac{-\frac{b}{a}\pm\sqrt{\frac{b^{2}}{a^{2}}-4\frac{c}{a}}}{2}=\frac{a}{a}\frac{-\frac{b}{a}\pm\sqrt{\frac{b^{2}}{a^{2}}-4\frac{c}{a}}}{2}=\){:/nomarkdown}

{::nomarkdown}\(=\frac{-a\cdot\frac{b}{a}\pm\sqrt{a^{2}\cdot\left(\frac{b^{2}}{a^{2}}-4\frac{c}{a}\right)}}{2a}=\frac{-b\pm\sqrt{b^{2}-4ac}}{2a}\){:/nomarkdown}

זה מסיים את הסיפור של המשוואה ממעלה שניה, אבל בואו נראה מה הדברים שלמדנו מפה:
<ol>
 	<li>ה"עולם" שבו כל הסיפור הזה מתרחש הוא <strong>שדה</strong> {::nomarkdown}\(F\){:/nomarkdown} כלשהו.</li>
 	<li>בעולם הזה אנחנו מקבלים פולינום {::nomarkdown}\(p\left(x\right)\in F\left[x\right]\){:/nomarkdown} ומחפשים שורש שלו (או אפילו טוב יותר, את כל השורשים בבת אחת אם אפשר)</li>
 	<li>הנוסחה שלנו נותנת לנו <strong>אלגוריתם</strong> שבונה את שורשי המשוואה באמצעות מספר <strong>סופי</strong> של פעולות.</li>
 	<li>הפעולות שבהן מותר לנו להשתמש הן: חיבור, חיסור, כפל, חילוק <strong>והוצאת שורש</strong>.</li>
 	<li>הקלטים האפשריים של האלגוריתם הם האיברים של {::nomarkdown}\(F\){:/nomarkdown}. בפרט, <strong>המקדמים</strong> של הפולינום {::nomarkdown}\(p\left(x\right)\){:/nomarkdown} יכולים להיות חלק מהקלט.</li>
</ol>
דבר אחד ויחיד שלא הופיע בדוגמא הזו במפורש, וכן יופיע אם ננסה לפתור משוואה ממעלה שלישית הוא ש"הוצאת שורש" כאן אין פירושה רק "הוצאת שורש <strong>ריבועי</strong>" אלא הוצאה של שורש מכל סדר סופי, מה שאנחנו מסמנים בתור הפעולה {::nomarkdown}\(\sqrt[n]{a}\){:/nomarkdown}.

אני אתן הגדרה פורמלית יותר בהמשך, אבל הנה רוח הדברים: אנחנו אומרים שפולינום {::nomarkdown}\(p\left(x\right)\in F\left[x\right]\){:/nomarkdown} ניתן ל<strong>פתרון באמצעות רדיקלים</strong> אם יש נוסחה שעונה לתנאים למעלה עבור השורשים שלו. כעת אפשר לחזור לרגע לסיפור ההיסטורי: נוסחת השורשים עבור משוואה ממעלה שניה הייתה ידועה לאנושות עוד משחר ההיסטוריה; למשל, אצל הבבלים יש לה תיאורים מפורשים. צריך קצת להיזהר עם הניסוח האנכרוניסטי של הטענה הזו, כי המושג של <strong>נוסחה</strong> בכלל לא היה קיים אצל הבבלים, והם לא טיפלו בכל המקרים האפשריים של נוסחת השורשים; אבל מה שהיה להם הוא, בשורה התחתונה, אלגוריתם כדוגמת זה שתיארתי פה.

לעומת זאת, נוסחאות לפתרון באמצעות רדיקלים של משוואות ממעלה שלישית ורביעית זה עניין חדש הרבה יותר, שמקורו באיטליה של תקופת הרנסנס. הסיפור של הגילוי שלהן הוא אחד מהמרתקים בכל תולדות המתמטיקה, בגלל התחרות הקשה שהייתה מעורבת בכך, והאופן שבו המספרים המרוכבים צצו לראשונה מתוכו באופן בלתי נמנע בעליל (ועוד אחזור לזה כשאדבר על פתרון משוואות ממעלה שלישית). החיפוש אחר נוסחה כללית לפתרון משוואה ממעלה <strong>חמישית</strong> הפך מאז אותה תקופה לאחד מהנושאים הלוהטים ביותר במתמטיקה, עד שבשנת 1824 המתמטיקאי נילס הנריק אבל הוכיח (תוך היעזרות בתוצאה חלקית של פאולו רופיני מ-1799) שזה פשוט בלתי אפשרי: אין נוסחה כללית לפתרון באמצעות רדיקלים של משוואה ממעלה חמישית ומעלה. גם אחרי שאבל פרסם את ההוכחה שלו, עדיין נותרה פתוחה שאלה מהותית לא פחות - מתי <strong>כן</strong> אפשר לפתור משוואות ממעלה חמישית ומעלה באמצעות רדיקלים? אבל לא הספיק לפתור את השאלה הזו כי נפטר ב-1829 ממחלה, כשהוא רק בן 26. מי שכן פתר את השאלה הזו היה אווריסט גלואה, שחייו היו טראגיים אף יותר; הוא נהרג בדו-קרב ב-1832 כשהוא בן 20 בלבד, אבל התורה המתמטית שהשאיר אחריו (והראשון ש"פיענח" ופרסם היה ליוביל, ב-1846) הפכה להיות אחד מאבני היסוד באלגברה המודרנית, ובפרט ענתה באופן מלא על האתגר: היא סיפקה תנאי הכרחי ומספיק לכך שמשוואה <strong>כלשהי</strong> תהיה ניתנת לפתרון באמצעות רדיקלים. את התנאי ניתן לנסח בפשטות: לכל משוואה אפשר להתאים <strong>חבורה</strong> - חבורת גלואה של המשוואה הזו, והמשוואה היא פתירה אם ורק אם החבורה היא... אה... פתירה?

בניסוח הזה לא ברור מה בעצם גלואה עשה, עד שאנחנו נזכרים שכל המהות של תורת גלואה היא <strong>רדוקציה</strong>: רדוקציה של שאלות קשות על שדות לשאלות קלות יותר על חבורות. המושג של "חבורה פתירה", <a href="https://gadial.net/2017/08/10/commutators_and_solvable_groups/">שהצגתי לקראת סוף סדרת הפוסטים שלי</a> על תורת החבורות, הוא פשוט יחסית. בפרט קל יחסית להראות שהחבורה שמייצגת את המשוואה הכללית ממעלה חמישית היא לא פתירה. מיותר לציין שהשם "חבורה פתירה" הגיע בדיוק מהמקום הזה; "חבורה פתירה" פירושו "חבורה שהיא חבורת גלואה של משוואה פולינומית שפתירה על ידי רדיקלים".

המשך הסיפור כולל כמה עניינים עיקריים: ראשית, צריך לראות את התוצאה הכללית של גלואה שבה, בהינתן פולינום קונקרטי, הפתירות של הפולינום מומרת בפתירות של חבורה. בשביל זה נצטרך גם להזכיר לעצמנו את המושג של חבורה פתירה ולהוכיח עליהן דברים שלא הוכחתי עד כה בבלוג. שנית, צריך להבין את העניין הקצת חמקמק הזה של "משוואה כללית", שתורת גלואה לכאורה לא מטפלת בה אבל עם עוד קצת עבודה טכנית נראה שהיא כן. לבסוף צריך להסביר למה החבורה הספציפית שמתאימה למשוואה הכללית ממעלה 5 ומעלה היא לא פתירה ואילו עבור מעלות 1,2,3,4 היא כן פתירה; זו עוד הוכחה שהתחמקתי ממנה בבלוג עד כה ולא אתחמק ממנה עתה.
<h2>מה הרעיון הכללי מאחורי ההוכחה של גלואה?</h2>
אם {::nomarkdown}\(p\left(x\right)\in F\left[x\right]\){:/nomarkdown} הוא פולינום ספרבילי אז שדה הפיצול שלו (כלומר, מה שמתקבל מ-{::nomarkdown}\(F\){:/nomarkdown} על ידי הוספת שורשי הפולינום הזה) הוא הרחבת גלואה ואפשר לדבר על חבורת הגלואה שלה; לחבורת הגלואה הזו גם קוראים בשם חבורת הגלואה של הפולינום {::nomarkdown}\(p\){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown}. במקרים הנפוצים שמעניינים אותנו שבהם {::nomarkdown}\(F\){:/nomarkdown} הוא שדה ממציין 0 או שדה סופי, אין צורך לדרוש ש-{::nomarkdown}\(p\left(x\right)\){:/nomarkdown} יהיה ספרבילי; שדה הפיצול שלו עדיין יהיה גלואה, ולכן מעכשיו אדבר בחופשיות על חבורת הגלואה של כל פולינום (רק צריך לזכור שאם עובדים מעל שדה אינסופי שאינו מושלם צריך להיות זהירים מאוד). מה שאיברים בחבורה הזו עושים הוא לבצע <strong>פרמוטציות</strong> על שורשים של הפולינום הזה; למעשה, זו הייתה נקודת המוצא של גלואה. הוא לא דיבר על חבורות באופן כללי אלא על אוספי הפרמוטציות של פתרונות של משוואות, כאשר הפרמוטציות הללו גם "משחקות יפה" עם השדה (כלומר, הן <strong>אוטומורפיזם</strong>).

עכשיו נדבר על מה זה אומר לפתור על ידי רדיקלים. נניח ש-{::nomarkdown}\(E/F\){:/nomarkdown} היא הרחבת שדות כלשהי ו-{::nomarkdown}\(a\in E\){:/nomarkdown}. נאמר ש-{::nomarkdown}\(a\){:/nomarkdown} ניתן להבעה בעזרת רדיקלים אם קיימת סדרה של שדות,

{::nomarkdown}\(F=E_{0}\subseteq E_{1}\subseteq E_{2}\subseteq\dots\subseteq E_{n}=E\){:/nomarkdown} כך שלכל {::nomarkdown}\(0\le i&lt;n\){:/nomarkdown} מתקיים ש-{::nomarkdown}\(E_{i+1}=E_{i}\left(\sqrt[k_{i}]{a_{i}}\right)\){:/nomarkdown} עבור {::nomarkdown}\(k_{i}\ge2\){:/nomarkdown} טבעי ו-{::nomarkdown}\(a_{i}\in E_{i}\){:/nomarkdown} כלשהו (עוד אסביר בהמשך מה זה בדיוק שורש שכזה). הרחבה כזו של שדה, שמתקבלת מהוספה של שורש {::nomarkdown}\(k\){:/nomarkdown}-י של איבר בשדה, נקראת <strong>הרחבה רדיקלית פרימיטיבית</strong>; ואם יש לנו מגדל כזה של הרחבת שדות שבו כל צעד הוא הרחבה רדיקלית פרימיטיבית, אז כל העסק נקרא <strong>הרחבה רדיקלית</strong>; ואם יש לנו פולינום מעל שדה הבסיס אומרים שהוא <strong>ניתן לפתרון באמצעות רדיקלים</strong> אם כל השורשים שלו נמצאים בהרחבות רדיקליות של שדה הבסיס.

ההגדרה הזו מזכירה מאוד את מה שראינו לגבי בעיות בניה בסרגל ומחוגה; מספר {::nomarkdown}\(a\in\mathbb{R}\){:/nomarkdown} כלשהו הוא ניתן לבניה בסרגל ומחוגה אם ורק אם קיימת סדרה של שדות, {::nomarkdown}\(\mathbb{Q}=E_{0}\subseteq E_{1}\subseteq E_{2}\subseteq\dots\subseteq E_{n}=F\left(a\right)\){:/nomarkdown} כך ש-{::nomarkdown}\(\left[E_{i+1}:E_{i}\right]=2\){:/nomarkdown}. למרות הדמיון, חשוב גם לשים לב להבדל: ראשית, אם {::nomarkdown}\(E_{i+1}=E_{i}\left(\sqrt[k_{i}]{a_{i}}\right)\){:/nomarkdown} אז בהחלט ייתכן ש-{::nomarkdown}\(\left[E_{i+1}:E_{i}\right]\){:/nomarkdown} יהיה גדול מ-2 (הגודל חסום על ידי {::nomarkdown}\(k_{i}\){:/nomarkdown}). מצד שני, {::nomarkdown}\(\left[E_{i+1}:E_{i}\right]=2\){:/nomarkdown} זה קצת פחות אינפורמטיבי לגבי איך בדיוק {::nomarkdown}\(E_{i+1}\){:/nomarkdown} מתקבל מ-{::nomarkdown}\(E_{i}\){:/nomarkdown}. אנחנו יודעים שבמקרה הזה, {::nomarkdown}\(E_{i+1}\){:/nomarkdown} התקבל על ידי הוספת שורש של פולינום ממעלה שניה, אבל שורש של פולינום זה לא אותו דבר כמו הפעולה "הוצאת שורש". דוגמא קלאסית לכך היא המספר {::nomarkdown}\(\varphi=1.61803\dots\){:/nomarkdown} המכונה "יחס הזהב"; הוא שורש של הפולינום {::nomarkdown}\(x^{2}-x-1\){:/nomarkdown} מעל {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown}, אבל <strong>לא קיים</strong> מספר רציונלי {::nomarkdown}\(a\in\mathbb{Q}\){:/nomarkdown} כך ש-{::nomarkdown}\(\varphi=\sqrt[k]{a}\){:/nomarkdown}, לכל {::nomarkdown}\(k\){:/nomarkdown}. במילים אחרות, לא כל הרחבה ממימד 2 היא הרחבה רדיקלית פרימיטיבית, ובואו לא נדבר אפילו על ממדים גבוהים יותר.

אז מצד אחד, העובדה שאנחנו לא יכולים להגיד שום דבר על {::nomarkdown}\(\left[E_{i+1}:E_{i}\right]\){:/nomarkdown} מונעת מאיתנו להשתמש בטכניקות הסופר-פשוטות שהראו שאי אפשר לחלק זוויות לשלוש או להכפיל את הקוביה. מצד שני, העובדה שאנחנו כן יודעים משהו מהותי על האופן שבו {::nomarkdown}\(E_{i+1}/E_{i}\){:/nomarkdown} נוצרת מאפשר לנו להגיד משהו מהותי על חבורת הגלואה שמתאימה לה, וזה המפתח לסיפור כולו.

בנפנוף ידיים פרוע, הרעיון הוא שאם יש לנו הרחבה רדיקלית פרימיטיבית, ואם השדה שמעליו אנחנו עובדים הוא "נחמד מספיק", אז חבורת הגלואה של ההרחבה הזו תהיה <strong>ציקלית</strong>. ה"נחמד מספיק" פשוט אומר כאן "כולל את כל שורשי היחידה מסדר כך וכך" ונדבר על זה במפורט בהמשך. הנקודה היא ששורשי יחידה הם בעצמם, ובכן, שורשים; ולכן אפשר תמיד, כשבונים הרחבה רדיקלית, להוסיף אותם "על הדרך".

כשטיפלתי בבעיית הבניה של מצולע משוכלל, הסיטואציה הייתה שהייתה לנו סדרה של הרחבות:

{::nomarkdown}\(E_{0}\subseteq E_{1}\subseteq E_{2}\subseteq\dots\subseteq E_{k}\){:/nomarkdown}

שהתאימו לסדרה של חבורות:

{::nomarkdown}\(G_{k}\subseteq G_{k-1}\subseteq G_{k-2}\subseteq\dots\subseteq G_{0}\){:/nomarkdown}

והרעיון היה שמתקיים {::nomarkdown}\(\text{Gal}\left(E_{i+1}/E_{i}\right)\cong G_{i}/G_{i+1}\){:/nomarkdown} (אני אוכיח את זה בהמשך למקרה שזה לא ברור). לכן, אם יש לנו הרחבה רדיקלית שמקיימת את המה-שזה-לא-יהיה עם שורשי היחידה, אנחנו נקבל שחבורת הגלואה שלה כוללת סדרה עולה של תתי-חבורות (החל מהטריוויאלית ועד לחבורה כולה) כך שהמנה של כל שתי חבורות עוקבות היא ציקלית. לחבורה שמקיימת את התכונה הזו יש שם: <strong>חבורה פתירה</strong>. ליתר דיוק, ההגדרה שהראיתי עד כה לחבורות פתירות הייתה קצת שונה, אבל כאשר החבורה היא <strong>סופית</strong> אז היא פתירה אם ורק אם קיימת בה סדרת תתי-חבורות שכזו - את זה אני אוכיח בפוסט המשך שיתעסק כולו בחומר של תורת החבורות שרלוונטי לעניין הזה שלנו ועדיין לא הראיתי בבלוג.
<h2>הרחבות רדיקליות פרימיטיביות</h2>
בואו ננסה להבין עכשיו איך "עובדת" הרחבה רדיקלית פרימיטיבית. זו הרחבה {::nomarkdown}\(E/F\){:/nomarkdown} כך שמתקיים {::nomarkdown}\(E=F\left(\sqrt[n]{a}\right)\){:/nomarkdown} עבור {::nomarkdown}\(a\in F\){:/nomarkdown} ו-{::nomarkdown}\(n\ge2\){:/nomarkdown} כלשהו, אבל מה המשמעות של {::nomarkdown}\(\sqrt[n]{a}\){:/nomarkdown} בכלל? זה ביטוי שהוא <strong>לא מוגדר היטב</strong> כי לכל {::nomarkdown}\(a\in F\){:/nomarkdown} השונה מאפס קיימים {::nomarkdown}\(n\){:/nomarkdown} שורשים <strong>שונים</strong> בשדה הפיצול של הפולינום {::nomarkdown}\(x^{n}-a\){:/nomarkdown} למעט במקרה שבו {::nomarkdown}\(F\){:/nomarkdown} הוא ממציין שמחלק את {::nomarkdown}\(n\){:/nomarkdown} - ועל מקרה כזה לא נדבר פה. בכל מקרה אחר, הנגזרת של {::nomarkdown}\(x^{n}-a\){:/nomarkdown} היא פשוט {::nomarkdown}\(nx^{n-1}\){:/nomarkdown} שזר ל-{::nomarkdown}\(x^{n}-a\){:/nomarkdown} (למשל, כי השורש היחיד של {::nomarkdown}\(nx^{n-1}\){:/nomarkdown} הוא 0, שאיננו שורש של {::nomarkdown}\(x^{n}-a\){:/nomarkdown}) ולכן {::nomarkdown}\(x^{n}-a\){:/nomarkdown} הוא <strong>פולינום ספרבילי</strong>, כלומר יש לו {::nomarkdown}\(n\){:/nomarkdown} שורשים שונים. אבל מי הם?

ובכן, ברור ש-0 אינו שורש. אם {::nomarkdown}\(\alpha,\beta\){:/nomarkdown} הם שניהם שורשים, אז {::nomarkdown}\(\alpha^{n}=\beta^{n}=a\){:/nomarkdown} ולכן {::nomarkdown}\(\left(\frac{\alpha}{\beta}\right)^{n}=1\){:/nomarkdown}, מה שאומר ש-{::nomarkdown}\(\frac{\alpha}{\beta}\){:/nomarkdown} הוא <strong>שורש יחידה</strong> מסדר {::nomarkdown}\(n\){:/nomarkdown}. כרגיל, אני אסמן ב-{::nomarkdown}\(\omega_{n}\triangleq e^{\frac{2\pi i}{n}}\){:/nomarkdown} את אחד משורשי היחידה הפרימיטיביים מסדר {::nomarkdown}\(n\){:/nomarkdown}, ואז <strong>כל</strong> שורש יחידה מסדר {::nomarkdown}\(n\){:/nomarkdown} הוא מהצורה {::nomarkdown}\(\omega_{n}^{k}\){:/nomarkdown}, כך שאפשר לכתוב {::nomarkdown}\(\beta=\alpha\omega_{n}^{k}\){:/nomarkdown}. יותר מכך: אם {::nomarkdown}\(\omega_{n}^{k}\){:/nomarkdown} הוא שורש יחידה מסדר {::nomarkdown}\(n\){:/nomarkdown} כלשהו, אז {::nomarkdown}\(\left(\alpha\omega_{n}^{k}\right)^{n}=\alpha^{n}\cdot1=a\){:/nomarkdown}. המסקנה: אם ניקח שורש <strong>כלשהו</strong> של {::nomarkdown}\(x^{n}-a\){:/nomarkdown}, לא משנה בכלל איזה, אז <strong>כל</strong> שורש של הפולינום מתקבל מהכפלה שלו בשורש יחידה פרימיטיבי, וכל הכפלה שלו בשורש יחידה פרימיטיבי נותנת שורש של הפולינום. המסקנה היא שאפשר לסמן ב-{::nomarkdown}\(\sqrt[n]{a}\){:/nomarkdown} את אחד מהשורשים של {::nomarkdown}\(x^{n}-a\){:/nomarkdown} באופן <strong>שרירותי לגמרי</strong> - לא משנה איזה שורש נבחר - ואז נקבל שכל השורשים של הפולינום הם בדיוק {::nomarkdown}\(\omega_{n}^{k}\sqrt[n]{a}\){:/nomarkdown} עבור {::nomarkdown}\(0\le k&lt;n\){:/nomarkdown}.

הדוגמא הפשוטה ביותר היא זו של שורשים "רגילים". למשל {::nomarkdown}\(\sqrt{2}\){:/nomarkdown}. אנחנו יודעים שלמשוואה {::nomarkdown}\(x^{2}-2=0\){:/nomarkdown} יש שני פתרונות: {::nomarkdown}\(\sqrt{2}\){:/nomarkdown} ו-{::nomarkdown}\(-\sqrt{2}\){:/nomarkdown}, כשהקונבנציה היא ש-{::nomarkdown}\(\sqrt{2}\){:/nomarkdown} הוא הפתרון "החיובי". זה על פניו לא לגמרי מסתדר עם מה שאמרתי לפני רגע על כך שאפשר לסמן כל אחד מהשורשים בתור {::nomarkdown}\(\sqrt{2}\){:/nomarkdown}, אבל זה בגלל שההקשר שבו אנחנו מדברים על {::nomarkdown}\(\sqrt{2}\){:/nomarkdown} בדרך כלל הוא יותר <strong>ספציפי</strong>: זה ההקשר של {::nomarkdown}\(\mathbb{R}\){:/nomarkdown}, שהוא <strong>שדה סדור</strong>. אפשר להשוות דברים ל-0 ולומר אם הם גדולים או קטנים יותר. בהקשר הכללי יותר של שדות זה לא קיים, ואם תחשבו על זה רגע - גם ההגדרה של "חיובי" ו"שלילי" היא מלכתחילה שרירותית. למה "שלילי" הוא מה שנמצא משמאל לציר {::nomarkdown}\(y\){:/nomarkdown} ולא מה שמימין?

הדוגמא הבאה שקל לנו יחסית להבין היא של המשוואה {::nomarkdown}\(x^{4}=16\){:/nomarkdown}. למשוואה הזו יש את הפתרון המתבקש {::nomarkdown}\(x=2\){:/nomarkdown} וגם את {::nomarkdown}\(x=-2\){:/nomarkdown}, אבל כדי לראות את כל הפתרונות צריך לערב גם מרוכבים, ומקבלים את הפתרונות {::nomarkdown}\(\pm2i\){:/nomarkdown}. כלומר, כל פתרון מתקבל מלקיחת אחד מהפתרונות וכפל באברי הקבוצה {::nomarkdown}\(\left\{ 1,-1,i,-i\right\} \){:/nomarkdown} של שורשי היחידה מסדר 4. הדוגמא הזו מעניינת, כי {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown} מכיל חלק מהפתרונות אבל לא את כולם; כדי שנקבל את כל הפתרונות, אנחנו חייבים להוסיף ל-{::nomarkdown}\(\mathbb{Q}\){:/nomarkdown} גם את {::nomarkdown}\(i\){:/nomarkdown}. הייתה לנו סיטואציה דומה בפוסט קודם, עם הפולינום {::nomarkdown}\(x^{3}-2\){:/nomarkdown}; שם השורשים שלו הם {::nomarkdown}\(\sqrt[3]{2}\){:/nomarkdown} ו-{::nomarkdown}\(\omega_{3}\sqrt[3]{2}\){:/nomarkdown} ו-{::nomarkdown}\(\omega_{3}^{2}\sqrt[3]{2}\){:/nomarkdown}. במקרה הזה, {::nomarkdown}\(\mathbb{Q}\left(\sqrt[3]{2}\right)\){:/nomarkdown} הוא לא שדה הפיצול של הפולינום, אלא רק {::nomarkdown}\(\mathbb{Q}\left(\omega_{3},\sqrt[3]{2}\right)\){:/nomarkdown}. זה מבהיר לנו שאם באופן כללי אנחנו רוצים ש-{::nomarkdown}\(E=F\left(\sqrt[n]{a}\right)\){:/nomarkdown} תהיה הרחבת גלואה, אז צריך ש-{::nomarkdown}\(F\){:/nomarkdown} <strong>כבר יכיל מראש</strong> את שורשי היחידה מסדר {::nomarkdown}\(n\){:/nomarkdown}. לנו זה לא יפריע בכל מקרה, כי אם {::nomarkdown}\(F\){:/nomarkdown} <strong>לא</strong> מכיל אותן, אפשר לבנות שרשרת של הרחבות: {::nomarkdown}\(F\subseteq F\left(\omega_{n}\right)\subseteq F\left(\omega_{n}\right)\left(\sqrt[n]{a}\right)\){:/nomarkdown}. בשרשרת הזו כל איבר התקבל מקודמו על ידי הוספת שורש {::nomarkdown}\(n\){:/nomarkdown}-י של פולינום, ולכן היא עדיין מהווה חלק לגיטימי משרשרת שמראה שהרחבה כלשהי היא רדיקלית. בנוסף לכך, {::nomarkdown}\(F\left(\omega_{n}\right)/F\){:/nomarkdown} היא הרחבת גלואה (<strong>הרחבה ציקלוטומית</strong>) ועכשיו גם {::nomarkdown}\(F\left(\omega_{n}\right)\left(\sqrt[n]{a}\right)/F\left(\omega_{n}\right)\){:/nomarkdown} תהיה הרחבת גלואה.

יפה, אז מעכשיו {::nomarkdown}\(E=F\left(\sqrt[n]{a}\right)\){:/nomarkdown} היא הרחבת גלואה של {::nomarkdown}\(F\){:/nomarkdown}, אבל מה חבורת הגלואה שלה יכולה להיות? אם {::nomarkdown}\(\sigma\){:/nomarkdown} הוא אוטומורפיזם של {::nomarkdown}\(E\){:/nomarkdown} שמשמר את {::nomarkdown}\(F\){:/nomarkdown} אז בפרט הוא משמר את שורשי היחידה. לכן {::nomarkdown}\(\sigma\left(\omega_{n}^{k}\sqrt[n]{a}\right)=\omega_{n}^{k}\sigma\left(\sqrt[n]{a}\right)\){:/nomarkdown}, מה שאומר שהערך של {::nomarkdown}\(\sigma\){:/nomarkdown} על <strong>כל</strong> שורש של {::nomarkdown}\(x^{n}-1\){:/nomarkdown} נקבע באופן יחיד על ידי הפעולה שלו על {::nomarkdown}\(\sqrt[n]{a}\){:/nomarkdown}. האם זה אומר שיש {::nomarkdown}\(n\){:/nomarkdown} אוטומורפיזמים, אחד שמעביר את {::nomarkdown}\(\sqrt[n]{a}\){:/nomarkdown} לכל אחד מ-{::nomarkdown}\(n\){:/nomarkdown} השורשים האפשריים של {::nomarkdown}\(x^{n}-a\){:/nomarkdown}? ובכן, לא בהכרח. בואו נסתכל למשל על השדה {::nomarkdown}\(\mathbb{Q}\left(i\right)\){:/nomarkdown} - כלומר, אחרי שהוספתי לרציונליים את שורשי היחידה מסדר 4. בשדה הזה ניקח את {::nomarkdown}\(a=4\){:/nomarkdown} ונבנה את ההרחבה {::nomarkdown}\(\mathbb{Q}\left(i,\sqrt[4]{4}\right)/\mathbb{Q}\left(i\right)\){:/nomarkdown}. כלומר, הוספנו שורש של הפולינום {::nomarkdown}\(x^{4}-4\){:/nomarkdown}. עכשיו, מכיוון ש-{::nomarkdown}\(4=2^{2}\){:/nomarkdown}, הרי ש-{::nomarkdown}\(\sqrt[4]{4}=\sqrt{2}\){:/nomarkdown}, ולכן אנחנו מקבלים את ההרחבה {::nomarkdown}\(\mathbb{Q}\left(i,\sqrt{2}\right)/\mathbb{Q}\left(i\right)\){:/nomarkdown} שהיא במובהק ממימד 2 כי הפולינום המינימלי של {::nomarkdown}\(\sqrt{2}\){:/nomarkdown} מעל {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown} הוא ממעלה 2. כלומר, יש רק שני אוטומורפיזמים. מה השתבש?

ובכן, אם נפרק את {::nomarkdown}\(x^{4}-4\){:/nomarkdown} לגורמים נקבל את הפולינום {::nomarkdown}\(\left(x-\sqrt{2}\right)\left(x+\sqrt{2}\right)\left(x-i\sqrt{2}\right)\left(x+i\sqrt{2}\right)\){:/nomarkdown}. בינתיים הכל מתקדם לפי התוכנית - השורשים של הפולינום הם אכן שורש אחד קונקרטי ({::nomarkdown}\(\sqrt{2}\){:/nomarkdown} למשל) כפול שורשי היחידה מסדר 4. רק מה, אם נכפול את זוג הגורמים הראשון והשני, ואת זוג הגורמים השלישי והרביעי, נקבל את הדבר הבא:

{::nomarkdown}\(\left(x^{2}-2\right)\left(x^{2}+2\right)\){:/nomarkdown}

זו מכפלה של שני פולינומים ששניהם <strong>כבר שייכים</strong> ל-{::nomarkdown}\(\mathbb{Q}\left(i\right)\){:/nomarkdown}. כלומר, {::nomarkdown}\(x^{4}-4\){:/nomarkdown} הוא <strong>פריק</strong> מעל {::nomarkdown}\(\mathbb{Q}\left(i\right)\){:/nomarkdown}, למרות שאין לו אף שורש בשדה הזה. תורת גלואה אומרת לנו שכל אוטומורפיזם של השדה מבצע פרמוטציה בין השורשים <strong>של כל גורם אי פריק</strong> של הפולינום; אי אפשר שהוא "יקפיץ" שורש מגורם אי פריק אחד לגורם אי פריק אחר.

והנה הסבר מפורש: נניח ש-{::nomarkdown}\(\sigma\){:/nomarkdown} אוטומורפיזם של {::nomarkdown}\(\mathbb{Q}\left(i,\sqrt{2}\right)\){:/nomarkdown} שמשמר את {::nomarkdown}\(\mathbb{Q}\left(i\right)\){:/nomarkdown}. נניח לרגע בשלילה ש-{::nomarkdown}\(\sigma\left(\sqrt{2}\right)=i\sqrt{2}\){:/nomarkdown}, אז אם נעלה את שני האגפים בריבוע, נקבל ש-

{::nomarkdown}\(2=\sigma\left(2\right)=\sigma\left(\sqrt{2}\right)^{2}=\left(i\sqrt{2}\right)^{2}=-2\){:/nomarkdown}

וזו סתירה מפורשת שנובעת מכך שכבר הריבוע של ה"יוצר" {::nomarkdown}\(\sqrt{2}\){:/nomarkdown} שלנו שייך לשדה הבסיס ש-{::nomarkdown}\(\sigma\){:/nomarkdown} מחוייבת לשמר.

אז {::nomarkdown}\(\sigma\){:/nomarkdown} לא בהכרח מסוגלת להעביר את {::nomarkdown}\(\sqrt[n]{a}\){:/nomarkdown} <strong>לכל</strong> שורש אחר של {::nomarkdown}\(x^{n}-a\){:/nomarkdown}, אבל כשהיא כן מעבירה את {::nomarkdown}\(\sqrt[n]{a}\){:/nomarkdown} למשהו, זה יהיה לאיבר מהצורה {::nomarkdown}\(\omega_{n}^{k}\sqrt[n]{a}\){:/nomarkdown}. אם {::nomarkdown}\(\sigma\left(\sqrt[n]{a}\right)=\omega_{n}^{k}\sqrt[n]{a}\){:/nomarkdown} אפשר לסמן את {::nomarkdown}\(\sigma\){:/nomarkdown} בתור {::nomarkdown}\(\sigma_{k}\){:/nomarkdown}. קל לראות ש-{::nomarkdown}\(\sigma_{k}\sigma_{t}=\sigma_{k+t}\){:/nomarkdown} כשהחיבור מתבצע מודולו {::nomarkdown}\(n\){:/nomarkdown}, ולכן יש לנו איזומורפיזם בין {::nomarkdown}\(\text{Gal}\left(F\left(\sqrt[n]{a}\right)/F\right)\){:/nomarkdown} ובין <strong>תת-חבורה </strong>של {::nomarkdown}\(\mathbb{Z}_{n}\){:/nomarkdown}. תת-חבורה של חבורה ציקלית היא בעצמה ציקלית, מה שמסיים את הכיוון הזה של ההוכחה: הראינו שחבורת גלואה של כל הרחבה רדיקלית היא חבורה ציקלית, בתנאי שהשדה שאותו מרחיבים כבר מכיל את שורשי היחידה הרלוונטיים.
<h2>תגידו יפה שלום לרזולבנטה של לגראנז'</h2>
לפני גלואה וגם לפני אבל ורופיני, לגראנז' כבר התעסק עם התעלומה של פתרון משווואות פולינומיות. לומר מה בדיוק עשה - זה עניין לפוסט נפרד שיעסוק בהיסטוריה של הנושא, אבל אפשר לומר שבזכות לגראנז' היה לבאים אחריו קרש קפיצה אל התגליות היפות שלהם. <strong>משפט לגראנז'</strong> בתורת החבורות נולד מתוך העבודה הזו של לגראנז', וכך גם המושג שאני רוצה לתאר עכשיו - <strong>הרזולבנטה</strong>. שוב, לא אכנס כרגע לשאלה מה בדיוק לגראנז' ניסה להשיג באמצעותה, אלא את מה שהיא הולכת לתת לנו עכשיו - היא תוכיח לנו שאם {::nomarkdown}\(E/F\){:/nomarkdown} היא הרחבת גלואה עם חבורת גלואה {::nomarkdown}\(\mathbb{Z}_{n}\){:/nomarkdown} ו-{::nomarkdown}\(F\){:/nomarkdown} מכיל את שורשי היחידה מסדר {::nomarkdown}\(n\){:/nomarkdown}, והמציין שלו לא מחלק את {::nomarkdown}\(n\){:/nomarkdown} - אז במקרה זה, {::nomarkdown}\(E=F\left(\sqrt[n]{a}\right)\){:/nomarkdown} עבור {::nomarkdown}\(a\in F\){:/nomarkdown} כלשהו. כלומר, "כל הרחבה ציקלית היא רדיקלית", כאשר "הרחבה ציקלית" זו הרחבה עם חבורת גלואה ציקלית, ואני מטאטא מתחת לשטיח את הפרטים הטכניים של שורשי היחידה והמציין.

אני בעצמי כבר לא זוכר את זה, אבל הזכרתי מתישהו בחטף את המושג של <strong>עקבה</strong> בתורת גלואה - העקבה (Trace) של איבר {::nomarkdown}\(a\in E\){:/nomarkdown} בהרחבת גלואה {::nomarkdown}\(E/F\){:/nomarkdown} הוא הסכום {::nomarkdown}\(\sum_{\sigma\in\text{Gal}\left(E/F\right)}\sigma\left(a\right)\){:/nomarkdown}, והפואנטה איתו היא שהוא שייך ל-{::nomarkdown}\(F\){:/nomarkdown}; קל לראות את זה אם מפעילים איבר כללי של חבורת הגלואה של {::nomarkdown}\(E/F\){:/nomarkdown} על הסכום הזה; בזכות התכונות של חבורה, נקבל בדיוק את אותו הסכום שוב, ולכן העקבה שייכת לשדה השבת של חבורת הגלואה של {::nomarkdown}\(E/F\){:/nomarkdown}, שהיא {::nomarkdown}\(F\){:/nomarkdown}.

הרזולבנטה של לגרנאז' מזכירה מאוד את זה, פרט לכך שאנחנו מכניסים לתוך הסכום הזה גם חזקות של שורש יחידה. מכיוון שבמקרה שלנו, {::nomarkdown}\(\text{Gal}\left(E/F\right)\){:/nomarkdown} היא ציקלית, אפשר לקחת לה יוצר {::nomarkdown}\(\sigma\){:/nomarkdown} ואז אפשר לכתוב את העקבה בתור {::nomarkdown}\(\sum_{k=0}^{n-1}\sigma^{k}\left(a\right)\){:/nomarkdown}. הרזולבנטה תהיה כמעט אותו דבר, אבל כשמכניסים לתמונה {::nomarkdown}\(\omega\){:/nomarkdown} שהוא שורש יחידה מסדר {::nomarkdown}\(n\){:/nomarkdown}:

{::nomarkdown}\(\left(a,\omega\right)\triangleq\sum_{k=0}^{n-1}\omega^{k}\sigma^{k}\left(a\right)=a+\omega\sigma\left(a\right)+\dots+\omega^{n-1}\sigma^{n-1}\left(a\right)\){:/nomarkdown}

אם תרצו, אפשר לחשוב על זה כאילו העובדה ש-{::nomarkdown}\(\text{Gal}\left(E/F\right)\){:/nomarkdown} היא ציקלית מאפשרת לנו "לתאם" בין החזקות של {::nomarkdown}\(\omega\){:/nomarkdown} ובין האוטומורפיזם שמופעל על {::nomarkdown}\(a\){:/nomarkdown} בכל אחד מהאיברים בסכום.

הרזולבנטה, אם כן, היא איבר ב-{::nomarkdown}\(E\){:/nomarkdown} שמחושב מתוך {::nomarkdown}\(a,\omega\){:/nomarkdown} איכשהו. מה שהולך לעניין אותנו הוא מה קורה לאיבר הזה כשמפעילים עליו את {::nomarkdown}\(\sigma\){:/nomarkdown}, היוצר של חבורת הגלואה של {::nomarkdown}\(E/F\){:/nomarkdown}. מה שיקרה הוא שהסכום שמגדיר את הרזולבנטה "יזוז צעד אחד הצידה":

{::nomarkdown}\(\sigma\left(\left(a,\omega\right)\right)=\sigma\left(\sum_{k=0}^{n-1}\omega^{k}\sigma^{k}\left(a\right)\right)=\){:/nomarkdown}

{::nomarkdown}\(=\sum_{k=0}^{n-1}\omega^{k}\sigma^{k+1}\left(a\right)=\omega^{-1}\sum_{k=0}^{n-1}\omega^{k+1}\sigma^{k+1}\left(a\right)\){:/nomarkdown}

וכעת מגיע הפאנץ': הציקליות ה"משותפת" הן של {::nomarkdown}\(\sigma\){:/nomarkdown} והן של {::nomarkdown}\(\omega\){:/nomarkdown}, שנובעת מכך ש-{::nomarkdown}\(\sigma^{n}=\text{id}\){:/nomarkdown} ו-{::nomarkdown}\(\omega^{n}=1\){:/nomarkdown}; היא מביאה לכך ש-{::nomarkdown}\(\omega^{n}\sigma^{n}\left(a\right)=\omega^{0}\sigma^{0}\left(a\right)\){:/nomarkdown}, ולכן

{::nomarkdown}\(\omega^{-1}\sum_{k=0}^{n-1}\omega^{k+1}\sigma^{k+1}\left(a\right)=\omega^{-1}\sum_{k=1}^{n}\omega^{k}\sigma^{k}\left(a\right)=\){:/nomarkdown}

{::nomarkdown}\(=\omega^{-1}\sum_{k=0}^{n-1}\omega^{k}\sigma^{k}\left(a\right)=\omega^{-1}\left(a,\omega\right)\){:/nomarkdown}

כלומר, להפעיל את {::nomarkdown}\(\sigma\){:/nomarkdown} על הרזולבנטה זה כמו לכפול אותה ב-{::nomarkdown}\(\omega^{-1}\){:/nomarkdown}. כעת, בואו נסתכל על האיבר {::nomarkdown}\(\left(a,\omega\right)^{n}\){:/nomarkdown}. האיבר הזה הוא הרזולבנטה (הרזולבנטה היא איבר ב-{::nomarkdown}\(E\){:/nomarkdown}) כשמעלים אותה בחזקת {::nomarkdown}\(n\){:/nomarkdown}. מה קורה כשמפעילים את {::nomarkdown}\(\sigma\){:/nomarkdown} על האיבר הזה? ובכן, מקבלים:

{::nomarkdown}\(\sigma\left(\left(a,\omega\right)^{n}\right)=\left(\sigma\left(a,\omega\right)\right)^{n}=\left(\omega^{-1}\left(a,\omega\right)\right)^{n}=\){:/nomarkdown}

{::nomarkdown}\(\left(\omega^{n}\right)^{-1}\left(a,\omega\right)=\left(a,\omega\right)\){:/nomarkdown}

במילים אחרות, {::nomarkdown}\(\left(a,\omega\right)^{n}\){:/nomarkdown} מקובע על ידי {::nomarkdown}\(\sigma\){:/nomarkdown}, ומכיוון ש-{::nomarkdown}\(\sigma\){:/nomarkdown} יוצרת את כל {::nomarkdown}\(\text{Gal}\left(E/F\right)\){:/nomarkdown} אז {::nomarkdown}\(\left(a,\omega\right)^{n}\){:/nomarkdown} שייך לשדה השבת של {::nomarkdown}\(\text{Gal}\left(E/F\right)\){:/nomarkdown} ומכיוון שזו הרחבת גלואה אז שדה השבת הזה הוא <strong>בדיוק</strong> {::nomarkdown}\(F\){:/nomarkdown}. קיבלנו ש-{::nomarkdown}\(\left(a,\omega\right)^{n}\in F\){:/nomarkdown}, בדיוק כמו שקורה עם העקבה. עכשיו, מה יש לנו? איבר שהחזקה ה-{::nomarkdown}\(n\){:/nomarkdown}-ית שלו שייכת ל-{::nomarkdown}\(F\){:/nomarkdown}, והוא עצמו שייך ל-{::nomarkdown}\(E\){:/nomarkdown}? זה נותן תחושה ש-{::nomarkdown}\(\left(a,\omega\right)^{n}\){:/nomarkdown} הוא מועמד טוב להיות האיבר שהוספת שורש {::nomarkdown}\(n\){:/nomarkdown}-י שלו יוצרת את כל {::nomarkdown}\(E\){:/nomarkdown} - איבר שאם אוכיח שקיים, הוכחתי ש-{::nomarkdown}\(E/F\){:/nomarkdown} היא הרחבה רדיקלית פרימיטיבית. העניין הוא שאני צריך כאן יותר מאשר תחושה, כי זה פשוט לא יעבוד בהכרח בלי הנחות נוספות. המזל שלי הוא שההגדרה של הרזולבנטה השאירה לי מרחב תמרון בבחירה של ה-{::nomarkdown}\(a\in E\){:/nomarkdown} שיוצר אותה.

בואו נשכח לרגע מרזולבנטה ונשאל שאלה כללית יותר בתורת גלואה: תהא {::nomarkdown}\(E/F\){:/nomarkdown} הרחבת גלואה ויהא {::nomarkdown}\(a\in E\){:/nomarkdown}. מה ישכנע אותנו ש-{::nomarkdown}\(E=F\left(a\right)\){:/nomarkdown}? ובכן, הנה דבר אחד שיעבוד: נניח שלכל {::nomarkdown}\(\sigma\in\text{Gal}\left(E/F\right)\){:/nomarkdown} כך ש-{::nomarkdown}\(\sigma\ne\text{id}\){:/nomarkdown} מתקיים {::nomarkdown}\(\sigma\left(a\right)\ne a\){:/nomarkdown}, כלומר {::nomarkdown}\(a\){:/nomarkdown} לא מקובע על ידי אף איבר לא טריוויאלי בחבורת הגלואה של {::nomarkdown}\(E/F\){:/nomarkdown}. אני טוען שזה מספיק כדי להוכיח ש-{::nomarkdown}\(E=F\left(a\right)\){:/nomarkdown}. למה? ובכן, {::nomarkdown}\(F\left(a\right)\subseteq E\){:/nomarkdown} תמיד, אבל על פי המשפט היסודי של תורת גלואה, {::nomarkdown}\(\text{Gal}\left(E/F\left(a\right)\right)\){:/nomarkdown} היא תת-חבורה של {::nomarkdown}\(\text{Gal}\left(E/F\right)\){:/nomarkdown}. כל איבר של {::nomarkdown}\(\text{Gal}\left(E/F\left(a\right)\right)\){:/nomarkdown} מקבע את כל השדה {::nomarkdown}\(F\left(a\right)\){:/nomarkdown} ובפרט מקבע את {::nomarkdown}\(a\){:/nomarkdown}, וכבר אמרנו שהאיבר היחיד שעושה זאת הוא {::nomarkdown}\(\text{id}\){:/nomarkdown}. המסקנה היא ש-{::nomarkdown}\(\text{Gal}\left(E/F\left(a\right)\right)\){:/nomarkdown} היא החבורה הטריוויאלית מסדר 1, ולכן {::nomarkdown}\(\left[E:F\left(a\right)\right]=1\){:/nomarkdown}, כלומר {::nomarkdown}\(E=F\left(a\right)\){:/nomarkdown}.

חזרה לרזולבנטה - מה שאני צריך לעשות הוא למצוא איברים {::nomarkdown}\(a,\omega\){:/nomarkdown} כך שהרזולבנטה {::nomarkdown}\(\left(a,\omega\right)\){:/nomarkdown} תקיים ש-{::nomarkdown}\(\sigma^{k}\left(\left(a,\omega\right)\right)\ne\left(a,\omega\right)\){:/nomarkdown} לכל {::nomarkdown}\(1\le k\le n-1\){:/nomarkdown}. זה יוכיח ש-{::nomarkdown}\(E=F\left(\left(a,\omega\right)\right)\){:/nomarkdown}, ובמקרה שלנו, אם אגדיר {::nomarkdown}\(b=\left(a,\omega\right)^{n}\){:/nomarkdown} אז {::nomarkdown}\(b\in F\){:/nomarkdown} ואני אקבל ש-{::nomarkdown}\(E=F\left(\sqrt[n]{b}\right)\){:/nomarkdown}. מה שיסיים את ההוכחה.

על פניו לא מצפה לנו בעיה מהותית: ראינו כבר ש-{::nomarkdown}\(\sigma^{k}\left(\left(a,\omega\right)\right)=\omega^{-k}\left(a,\omega\right)\){:/nomarkdown}, כך שכל מה שעלינו לעשות הוא לבחור את {::nomarkdown}\(a,\omega\){:/nomarkdown} כדי למנוע את האפשרות שיקרה משהו כזה, עבור {::nomarkdown}\(0\le k&lt;t\le n-1\){:/nomarkdown}:

{::nomarkdown}\(\omega^{-k}\left(a,\omega\right)=\omega^{-t}\left(a,\omega\right)\){:/nomarkdown}

יש שתי אפשרויות שעלולות לגרום לזה לקרות:
<ul>
 	<li>{::nomarkdown}\(\omega\){:/nomarkdown} אינו שורש יחידה <strong>פרימיטיבי</strong> מסדר {::nomarkdown}\(n\){:/nomarkdown}, כלומר לא כל החזקות {::nomarkdown}\(\omega^{0},\omega^{1},\omega^{2},\dots,\omega^{n-1}\){:/nomarkdown} שונות זו מזו. אין כאן בעיה כי <strong>אני בוחר</strong> איזה {::nomarkdown}\(\omega\){:/nomarkdown} לקחת; אני כן אקח שורש יחידה פרימיטיבי.</li>
 	<li>{::nomarkdown}\(\left(a,\omega\right)=0\){:/nomarkdown}. בואו נדבר על זה.</li>
</ul>
האפשרות שיתקיים {::nomarkdown}\(\left(a,\omega\right)=0\){:/nomarkdown} אינה מופרכת כלל. זה בהחלט קורה, למשל, אם {::nomarkdown}\(a=1\){:/nomarkdown} ואז {::nomarkdown}\(\left(a,\omega\right)=1+\omega+\dots+\omega^{n-1}=\frac{\omega^{n}-1}{\omega-1}=\frac{1-1}{\omega-1}=0\){:/nomarkdown}. למעשה, אני הולך לגייס טיעון כבד משקל כדי לומר שקיים {::nomarkdown}\(a\){:/nomarkdown} עבורו זה <strong>לא</strong> קורה. אם נחשוב על זה לרגע, רזולבנטה היא <strong>צירוף לינארי</strong> של הפעלות של אברי גלואה על {::nomarkdown}\(a\){:/nomarkdown}, כשהמקדמים של הצירוף הלינארי הזה הם החזקות של {::nomarkdown}\(\omega\){:/nomarkdown}. אז בואו נשכח לרגע מ-{::nomarkdown}\(a\){:/nomarkdown} ונסתכל על צירוף לינארי של אוטומורפיזמים:

{::nomarkdown}\(\sigma^{0}+\omega\sigma+\omega^{2}\sigma^{2}+\dots+\omega^{n-1}\sigma^{n-1}\){:/nomarkdown}

העניין הוא <a href="https://gadial.net/2018/05/07/fields_and_groups_collide/">שהוכחתי פה בעבר</a> שאוטומורפיזמים של שדה הם בלתי תלויים לינארית (אפילו לא צריך הרחבת גלואה לשם כך). זה אומר ש-{::nomarkdown}\(\sigma^{0}+\omega\sigma+\omega^{2}\sigma^{2}+\dots+\omega^{n-1}\sigma^{n-1}\ne0\){:/nomarkdown}, כלומר קיים קלט לפונקציה-שהיא-סכום באגף שמאל שלא מאפס אותו. לקלט הזה אקרא {::nomarkdown}\(a\){:/nomarkdown}, ואחרי שאני מציב אותו בסכום אני מקבל בדיוק את {::nomarkdown}\(\left(a,\omega\right)\){:/nomarkdown}. זה מסיים את ההוכחה: {::nomarkdown}\(\left(a,\omega\right)\){:/nomarkdown} הוא האיבר שיוצר את {::nomarkdown}\(E/F\){:/nomarkdown}.

האם זה מסיים את המשפט של גלואה? הו, אפילו לא קרוב.
<h2>הוכחת המשפט של גלואה</h2>
בואו נזכיר מה <strong>כבר</strong> הוכחנו, ומה אנחנו <strong>רוצים</strong> להוכיח. מה ש<strong>כבר</strong> הוכחנו הוא שאם {::nomarkdown}\(F\){:/nomarkdown} הוא שדה ממציין 0 (אפשר גם מציינים אחרים מסויימים אבל נעזוב את זה) שכולל את כל שורשי היחידה מסדר {::nomarkdown}\(n\){:/nomarkdown}, אז:
<ul>
 	<li>אם {::nomarkdown}\(E/F\){:/nomarkdown} הרחבת גלואה עם חבורת גלואה {::nomarkdown}\(\mathbb{Z}_{n}\){:/nomarkdown} אז {::nomarkdown}\(E=F\left(\sqrt[n]{a}\right)\){:/nomarkdown} עבור {::nomarkdown}\(a\in F\){:/nomarkdown}.</li>
 	<li>אם {::nomarkdown}\(E=F\left(\sqrt[n]{a}\right)\){:/nomarkdown} עבור {::nomarkdown}\(a\in F\){:/nomarkdown} אז {::nomarkdown}\(E/F\){:/nomarkdown} הרחבת גלואה עם חבורת גלואה {::nomarkdown}\(\mathbb{Z}_{d}\){:/nomarkdown} כך ש-{::nomarkdown}\(d\|n\){:/nomarkdown}.</li>
</ul>
מה שאנחנו <strong>רוצים</strong> להוכיח הוא משפט שנוגע לפולינומים:
<ul>
 	<li>{::nomarkdown}\(p\left(x\right)\){:/nomarkdown} פתיר על ידי רדיקלים אם ורק אם חבורת הגלואה שלו פתירה.</li>
</ul>
נטפל בכל כיוון בנפרד. <strong>לאט מאוד ובזהירות מאוד</strong>.

ובכן, ראשית נניח ש-{::nomarkdown}\(p\left(x\right)\){:/nomarkdown} פתיר על ידי רדיקלים. זה אומר שלכל {::nomarkdown}\(a\){:/nomarkdown} בשדה הפיצול של {::nomarkdown}\(p\){:/nomarkdown} שמקיים {::nomarkdown}\(p\left(a\right)=0\){:/nomarkdown}, מתקיים ש-{::nomarkdown}\(a\in E\){:/nomarkdown} כך ש-{::nomarkdown}\(E/F\){:/nomarkdown} הרחבה רדיקלית. בשלב הראשון, נרצה להראות למה אפשר להניח ש-{::nomarkdown}\(E/F\){:/nomarkdown} גלואה עם חבורת גלואה פתירה. השלב הראשון הזה יהיה קשה למדי מבחינה טכנית, אז בואו לא נתייאש.

העובדה ש-{::nomarkdown}\(E/F\){:/nomarkdown} היא הרחבה רדיקלית אומרת לנו בדיוק את הדבר הבא: קיימת סדרת תת-שדות, {::nomarkdown}\(F=E_{0}\subseteq E_{1}\subseteq E_{2}\subseteq\dots\subseteq E_{n}=E\){:/nomarkdown}, כך ש-{::nomarkdown}\(E_{i+1}=E_{i}\left(\sqrt[k_{i}]{a_{i}}\right)\){:/nomarkdown} עבור {::nomarkdown}\(a_{i}\in E_{i}\){:/nomarkdown}. מה שאנחנו <strong>לא</strong> יודעים כרגע:
<ul>
 	<li>לא יודעים ש-{::nomarkdown}\(E/F\){:/nomarkdown} היא גלואה בכלל.</li>
 	<li>לא יודעים שב-{::nomarkdown}\(E_{i}\){:/nomarkdown} יש שורשי יחידה.</li>
 	<li>לא יודעים ש-{::nomarkdown}\(E_{i+1}/E_{i}\){:/nomarkdown} היא הרחבה עם חבורת גלואה ציקלית.</li>
</ul>
אנחנו לא יודעים את כל אלו כי הם לא בהכרח נכונים בכלל; אנחנו נרצה לקחת את סדרת ההרחבות הקיימת ולבנות מתוכה סדרה חדשה, טובה יותר, שכן תקיים את כל אלו. ראשית, ניקח <strong>סגור גלואה</strong> {::nomarkdown}\(K/E\){:/nomarkdown}, כלומר את ההרחבה הקטנה ביותר של {::nomarkdown}\(E\){:/nomarkdown} שהיא גלואה מעל {::nomarkdown}\(F\){:/nomarkdown}. עכשיו, אני ארצה להראות שגם {::nomarkdown}\(K/F\){:/nomarkdown} היא הרחבה רדיקלית. לצורך כך תהא {::nomarkdown}\(G=\text{Gal}\left(K/F\right)\){:/nomarkdown} ויהא {::nomarkdown}\(\sigma\in G\){:/nomarkdown} ונסתכל על סדרת ההרחבות שמתקבלת מ-{::nomarkdown}\(E/F\){:/nomarkdown} כש"מזיזים את הכל" בעזרת {::nomarkdown}\(\sigma\){:/nomarkdown}: סדרת ההרחבות

{::nomarkdown}\(F=\sigma\left(E_{0}\right)\subseteq\sigma\left(E_{1}\right)\subseteq\dots\subseteq\sigma\left(E_{n}\right)=\sigma\left(E\right)\){:/nomarkdown}

אם {::nomarkdown}\(E_{i+1}=E_{i}\left(\sqrt[k_{i}]{a_{i}}\right)\){:/nomarkdown} אז {::nomarkdown}\(\sigma\left(E_{i+1}\right)=\sigma\left(E_{i}\right)\left(\sigma\left(\sqrt[k_{i}]{a_{i}}\right)\right)\){:/nomarkdown} ולכן גם הסדרה החדשה היא סדרת הרחבות רדיקליות פרימיטיביות ולכן {::nomarkdown}\(\sigma\left(E\right)/F\){:/nomarkdown} הוא אכן הרחבה רדיקלית. איך זה עזר לנו? כי עכשיו אפשר לקחת את <strong>הקומפוזיטום</strong> של כל השדות {::nomarkdown}\(\sigma\left(E\right)\){:/nomarkdown} כך ש-{::nomarkdown}\(\sigma\in G\){:/nomarkdown}; הקומפוזיטום הזה הוא השדה הקטן ביותר שמכיל את כל ה-{::nomarkdown}\(\sigma\left(E\right)\){:/nomarkdown} הללו. מכיוון ש-{::nomarkdown}\(K\){:/nomarkdown} הוא השדה שמעליו מוגדרים כל האוטומורפיזמים {::nomarkdown}\(\sigma\){:/nomarkdown} הללו, הרי ש-{::nomarkdown}\(K\){:/nomarkdown} מכיל את כל ה-{::nomarkdown}\(\sigma\left(E\right)\){:/nomarkdown} הללו ולכן {::nomarkdown}\(K\){:/nomarkdown} מכיל את הקומפוזיטום. מצד שני, כל ה-{::nomarkdown}\(\sigma\){:/nomarkdown}-ות הללו הן אוטומורפיזמים של הקומפוזיטום (זה, כמובן, תרגיל לא טריוויאלי בפני עצמו) כך שגודל חבורת האוטומורפיזמים של הקומפוזיטום שמשמרים את {::nomarkdown}\(F\){:/nomarkdown} הוא <strong>לפחות</strong> המימד שלו מכל {::nomarkdown}\(F\){:/nomarkdown} - זה גורר שהוא חייב להיות שווה ל-{::nomarkdown}\(K\){:/nomarkdown} עצמו.

זה עדיין לא מסיים את השלב הזה, כי אני רוצה לומר ש-{::nomarkdown}\(K\){:/nomarkdown} הוא הרחבה רדיקלית, וכרגע ראיתי רק שהוא קומפוזיטום של הרחבות רדיקליות. מכיוון שלקחתי קומפוזיטום של מספר סופי של הרחבות, מספיק להסביר למה עובד עבור שתיים ומכאן להמשיך באינדוקציה. ובכן, בואו ניקח שתי הרחבות רדיקליות של שדה {::nomarkdown}\(F\){:/nomarkdown}:

{::nomarkdown}\(F=E_{0}\subseteq E_{1}\subseteq E_{2}\subseteq\dots\subseteq E_{n}=E\){:/nomarkdown}

{::nomarkdown}\(F=K_{0}\subseteq K_{1}\subseteq K_{2}\subseteq\dots\subseteq K_{m}=K\){:/nomarkdown}

אני רוצה להראות ש-{::nomarkdown}\(EK/F\){:/nomarkdown} רדיקלית. ראשית, שימו לב לכך שאם אני מצרף את {::nomarkdown}\(K_{1}\){:/nomarkdown} לכל השדות בהרחבה הראשונה, עדיין קיבלתי הרחבה רדיקלית:

{::nomarkdown}\(F\subseteq E_{0}K_{1}\subseteq E_{1}K_{1}\subseteq E_{2}K_{1}\subseteq\dots\subseteq E_{n}K_{1}=EK_{1}\){:/nomarkdown}

זה עובד מהסיבה הבאה: {::nomarkdown}\(E_{0}K_{1}/F\){:/nomarkdown} זו פשוט ההרחבה {::nomarkdown}\(K_{1}/F\){:/nomarkdown} (הרי {::nomarkdown}\(E_{0}=F\subseteq K_{1}\){:/nomarkdown}) שאנחנו יודעים שהיא רדיקלית פרימיטיבית. כעת, {::nomarkdown}\(E_{i+1}K_{1}/E_{i}K_{1}\){:/nomarkdown} היא רדיקלית פרימיטיבית מאותה הסיבה ש-{::nomarkdown}\(E_{i+1}/E_{i}\){:/nomarkdown} היא כזו: {::nomarkdown}\(E_{i+1}K_{1}=E_{i}K_{1}\left(\sqrt[k_{i}]{a_{i}}\right)\){:/nomarkdown}. כך זה ימשיך לעבוד לכל אורך סדרת השדות, ונקבל ש-{::nomarkdown}\(EK_{1}/F\){:/nomarkdown} היא רדיקלית. ואז נעשה את זה שוב, ונקבל ש-{::nomarkdown}\(EK_{1}K_{2}=EK_{2}\){:/nomarkdown} רדיקלית, וכן הלאה עד ל-{::nomarkdown}\(EK/F\){:/nomarkdown}. זה מסיים, בנפנוף ידיים, את הטענה הבאה:
<ul>
 	<li>אם {::nomarkdown}\(E/F\){:/nomarkdown} הרחבה רדיקלית ניתן להניח שהיא גלואה.</li>
</ul>
עכשיו צריך לדבר על שורשי יחידה. כמקודם, מה שיש לנו כרגע הוא סדרה של הרחבות:

{::nomarkdown}\(F=E_{0}\subseteq E_{1}\subseteq E_{2}\subseteq\dots\subseteq E_{n}=E\){:/nomarkdown}

כל הרחבה מתקבלת מקודמתה על ידי הוספת שורש: {::nomarkdown}\(E_{i+1}=E_{i}\left(\sqrt[k_{i}]{a_{i}}\right)\){:/nomarkdown}. מי שחשוב לי פה הוא ה-{::nomarkdown}\(k_{i}\){:/nomarkdown} - הסדר של השורש שהוספנו. כדי שהכל יתנהג נחמד בהמשך, אני אצטרך ש-{::nomarkdown}\(F\){:/nomarkdown} כבר יכיל את שורשי היחידה מסדר {::nomarkdown}\(k_{i}\){:/nomarkdown}. אז אני אוסיף ל-{::nomarkdown}\(F\){:/nomarkdown} את שורשי היחידה מסדר {::nomarkdown}\(k_{i}\){:/nomarkdown} <strong>לכל</strong> {::nomarkdown}\(k_{i}\){:/nomarkdown} בסדרה (למשל, נוסיף את שורשי היחידה מסדר 3, 8 ו-11 אם ההרחבות בוצעו בעזרת {::nomarkdown}\(\sqrt[3]{a_{1}}\){:/nomarkdown} ו-{::nomarkdown}\(\sqrt[8]{a_{2}}\){:/nomarkdown} ו-{::nomarkdown}\(\sqrt[11]{a_{3}}\){:/nomarkdown}). ונקבל שדה חדש {::nomarkdown}\(F^{\prime}\){:/nomarkdown}. ההרחבה {::nomarkdown}\(F^{\prime}/F\){:/nomarkdown} היא כמובן רדיקלית (היא התקבלה משרשרת של הוספת שורשים) ולכן נשאר להראות שההרחבה הבאה רדיקלית:

{::nomarkdown}\(F^{\prime}=F^{\prime}E_{0}\subseteq F^{\prime}E_{1}\subseteq F^{\prime}E_{2}\subseteq\dots\subseteq F^{\prime}E_{n}=F^{\prime}E\){:/nomarkdown}

הרדיקליות של ההרחבה נובעת מאותם טיעונים כמו קודם. מה שצריך להיזהר הוא שלא נאבד את זה שההרחבה היא <strong>גלואה</strong>; זה נובע מכך ש-{::nomarkdown}\(F^{\prime}/F\){:/nomarkdown} היא גלואה (כי {::nomarkdown}\(F^{\prime}\){:/nomarkdown} הוא שדה הפיצול של הפולינום ששורשיו הם כל שורשי היחידה הרלוונטיים) ומכך שקומפוזיטום של הרחבות גלואה הוא הרחבת גלואה (את זה הוכחתי <a href="https://gadial.net/2018/06/30/finite_fields_and_primitive_element_theorem/">בפוסט הקודם</a>).

אז סיימנו את הטענה הבאה:
<ul>
 	<li>אם {::nomarkdown}\(E/F\){:/nomarkdown} רדיקלית אז אפשר להניח ש-{::nomarkdown}\(E/F\){:/nomarkdown} גלואה ו-{::nomarkdown}\(F\){:/nomarkdown} כולל את כל שורשי היחידה מהסדר שמתאים להרחבות הרדיקליות הפרימיטיביות ב-{::nomarkdown}\(E/F\){:/nomarkdown}.</li>
</ul>
המסקנה היא שאם {::nomarkdown}\(F=E_{0}\subseteq E_{1}\subseteq E_{2}\subseteq\dots\subseteq E_{n}=E\){:/nomarkdown} היא סדרת ההרחבות הרלוונטית, אז {::nomarkdown}\(E_{i+1}/E_{i}\){:/nomarkdown} היא הרחבה ציקלית.

האם סיימנו? <strong>עדיין לא</strong>. מה שהוכחנו הוא שאם {::nomarkdown}\(a\){:/nomarkdown} הוא שורש <strong>כלשהו</strong> של הפולינום {::nomarkdown}\(p\left(x\right)\){:/nomarkdown} אז קיימת לו הרחבה רדיקלית עם התכונות היפות שתיארנו. אבל אנחנו רוצים הרחבה שתעבוד עבור <strong>כל השורשים</strong> של {::nomarkdown}\(p\left(x\right)\){:/nomarkdown} בו-זמנית. התעלול הוא שוב ביצוע קומפוזיטום של הרחבות באופן הדרגתי, כפי שתיארתי קודם, וזה באמת מסיים. אני יכול לטעון את הטענה הבאה:
<ul>
 	<li>אם {::nomarkdown}\(p\left(x\right)\){:/nomarkdown} פתיר על ידי רדיקלים אז קיימת הרחבת גלואה {::nomarkdown}\(E/F\){:/nomarkdown} שכוללת את כל שורשי {::nomarkdown}\(p\left(x\right)\){:/nomarkdown}, וקיימת סדרת תת-שדות {::nomarkdown}\(F=E_{0}\subseteq E_{1}\subseteq E_{2}\subseteq\dots\subseteq E_{n}=E\){:/nomarkdown} כך שההרחבה {::nomarkdown}\(E_{i+1}/E_{i}\){:/nomarkdown} ציקלית לכל {::nomarkdown}\(0\le i&lt;n\){:/nomarkdown}.</li>
</ul>
בואו נסמן {::nomarkdown}\(G=\text{Gal}\left(E/F\right)\){:/nomarkdown} ו-{::nomarkdown}\(G_{i}=\text{Gal}\left(E/E_{i}\right)\){:/nomarkdown}. כלומר, קיבלנו סדרה של תת-חבורות {::nomarkdown}\(\left\{ e\right\} =G_{n}\subseteq G_{n-1}\subseteq\dots\subseteq G_{0}=G\){:/nomarkdown}.

עכשיו, בואו וניזכר במשפט היסודי של תורת גלואה. המשפט הזה אומר לנו שעבור מגדל ההרחבות הבא:

{::nomarkdown}\(E_{i}\subseteq E_{i+1}\subseteq E\){:/nomarkdown}

מתקיים הקשר הבא בין חבורות הגלואה הרלוונטיות:

{::nomarkdown}\(\text{Gal}\left(E_{i+1}/E_{i}\right)\cong\text{Gal}\left(E/E_{i}\right)/\text{Gal}\left(E/E_{i+1}\right)=G_{i}/G_{i+1}\){:/nomarkdown}

מכיוון שבמקרה שלנו אנחנו יודעים ש-{::nomarkdown}\(\text{Gal}\left(E_{i+1}/E_{i}\right)\){:/nomarkdown} היא ציקלית, המסקנה היא ש-{::nomarkdown}\(G_{i}/G_{i+1}\){:/nomarkdown} היא ציקלית. כעת, הנה טענה שאני דוחה לפוסט הבא, כי היא טענה בתורת החבורות נטו:
<ul>
 	<li>אם {::nomarkdown}\(G\){:/nomarkdown} חבורה <strong>סופית</strong> אז {::nomarkdown}\(G\){:/nomarkdown} פתירה אם ורק אם קיימת סדרה של תת-חבורות {::nomarkdown}\(\left\{ e\right\} =G_{0}\subseteq G_{1}\subseteq G_{2}\subseteq\dots\subseteq G_{n}=G\){:/nomarkdown} כך ש-{::nomarkdown}\(G_{i+1}/G_{i}\){:/nomarkdown} ציקלית לכל {::nomarkdown}\(0\le i&lt;n\){:/nomarkdown} (שימו לב שהפכתי פה את האינדקסים).</li>
</ul>
אז נהדר! קיבלנו ש-{::nomarkdown}\(G\){:/nomarkdown} שלנו פתירה! האם סיימנו? ובכן <strong>לא! </strong>

המשפט שאני רוצה להוכיח הוא:
<ul>
 	<li>אם {::nomarkdown}\(p\left(x\right)\){:/nomarkdown} פתיר על ידי רדיקלים אז חבורת הגלואה של {::nomarkdown}\(p\left(x\right)\){:/nomarkdown} פתירה.</li>
</ul>
מה שהוכחתי כרגע היה:
<ul>
 	<li>אם {::nomarkdown}\(p\left(x\right)\){:/nomarkdown} פתיר על ידי רדיקלים אז שדה הפיצול של {::nomarkdown}\(p\left(x\right)\){:/nomarkdown} מוכל בשדה {::nomarkdown}\(E\){:/nomarkdown} כך ש-{::nomarkdown}\(E/F\){:/nomarkdown} הרחבת גלואה עם חבורת גלואה פתירה.</li>
</ul>
אנחנו רוצים להראות שזו חבורת הגלואה <strong>של שדה הפיצול</strong> שפתירה. שדה הפיצול הוא תת-שדה, {::nomarkdown}\(F\subseteq K\subseteq E\){:/nomarkdown}, הוא לא בהכרח שווה ל-{::nomarkdown}\(E\){:/nomarkdown}. בשלב הזה כבר מתחשק לי לבכות, אבל האמת היא שהמצב לא נורא במיוחד. אני יודע בזכות המשפט היסודי שש-{::nomarkdown}\(\text{Gal}\left(K/F\right)\cong\text{Gal}\left(E/F\right)/\text{Gal}\left(E/K\right)\){:/nomarkdown}, ואני יודע ש-{::nomarkdown}\(\text{Gal}\left(E/F\right)\){:/nomarkdown} היא כן חבורה פתירה. כל מה שנשאר לי לעשות הוא לדחות לפוסט הבא את הוכחת הטענה
<ul>
 	<li>חבורת מנה של חבורה פתירה היא חבורת פתירה.</li>
</ul>
ועכשיו באמת סיימתי! כלומר, סיימתי כיוון <strong>אחד</strong> של ההוכחה. יש גם כיוון שני, קל יותר:
<ul>
 	<li>אם חבורת הגלואה של {::nomarkdown}\(p\left(x\right)\){:/nomarkdown} פתירה, אז {::nomarkdown}\(p\left(x\right)\){:/nomarkdown} פתיר על ידי רדיקלים.</li>
</ul>
ההוכחה מאוד מזכירה את הכיוון הקודם. נסמן את שדה הפיצול של {::nomarkdown}\(p\left(x\right)\){:/nomarkdown} בתור {::nomarkdown}\(E\){:/nomarkdown}, אז ההרחבה {::nomarkdown}\(E/F\){:/nomarkdown} היא בעלת חבורת גלואה פתירה {::nomarkdown}\(G\){:/nomarkdown}. תוך שימוש בטענה שחבורה סופית היא פתירה אם ורק אם קיימת שרשרת חבורות שמקיימת כך וכך, נקבל שיש {::nomarkdown}\(\left\{ e\right\} =G_{n}\subseteq G_{n-1}\subseteq\dots\subseteq G_{0}=G\){:/nomarkdown} כך ש-{::nomarkdown}\(G_{i}/G_{i+1}\){:/nomarkdown} ציקלית. עכשיו נגדיר את {::nomarkdown}\(E_{i}\){:/nomarkdown} להיות שדה השבת ב-{::nomarkdown}\(E\){:/nomarkdown} של {::nomarkdown}\(G_{i}\){:/nomarkdown}, ונקבל סדרה של שדות {::nomarkdown}\(F=E_{0}\subseteq E_{1}\subseteq\dots\subseteq E_{n}=E\){:/nomarkdown} כמקודם. הדבר היחיד שמונע ממני להגדיר שזו שרשרת הרחבות רדיקלית היא העובדה שבשדות הללו לא בהכרח יש את שורשי היחידה המתאימים, אז מה שנעשה הוא לנקוט באותו תעלול כמו קודם - נרחיב את {::nomarkdown}\(F\){:/nomarkdown} על ידי הוספת כל שורשי היחידה הדרושים, ונקבל שדה {::nomarkdown}\(F\subseteq F^{\prime}\){:/nomarkdown}, ושרשרת ההרחבות שלנו תיראה כעת כך:

{::nomarkdown}\(F\subseteq E_{0}F^{\prime}\subseteq E_{1}F^{\prime}\subseteq\dots\subseteq E_{n}F^{\prime}=EF^{\prime}\){:/nomarkdown}

כדי לסיים, צריך להשתכנע שכל ההרחבות הן עדיין הרחבות גלואה, ושחבורת הגלואה של כל זוג הרחבות ביניים היא עדיין ציקלית, ואז נוכל להשתמש במשפט שראינו קודם שמבטיח שכל הרחבה מתקבלת מקודמתה על ידי הוספת שורש.

זה נותן לנו מוטיבציה למשפט בסיסי בתורת גלואה שעד כה לא טרחתי להראות כי לא היה ברור למה הוא מעניין בכלל, והוא הולך כך: אם {::nomarkdown}\(E/F\){:/nomarkdown} היא הרחבת גלואה כלשהי, ו-{::nomarkdown}\(F^{\prime}/F\){:/nomarkdown} היא הרחבה (לאו דווקא גלואה) של שדה הבסיס, אז {::nomarkdown}\(EF^{\prime}/F^{\prime}\){:/nomarkdown} היא הרחבת גלואה, וחבורת גלואה שלה היא {::nomarkdown}\(\text{Gal}\left(EF^{\prime}/F^{\prime}\right)\cong\text{Gal}\left(E/E\cap F^{\prime}\right)\){:/nomarkdown}. איך זה מועיל לנו? ובכן, במקרה שלנו זה אומר שיתקיים

{::nomarkdown}\(\text{Gal}\left(E_{i+1}F^{\prime}/E_{i}F^{\prime}\right)\cong\text{Gal}\left(E_{i+1}/E_{i+1}\cap E_{i}F^{\prime}\right)\){:/nomarkdown}

(כאן "שדה הבסיס" היה {::nomarkdown}\(E_{i}\){:/nomarkdown} וההרחבה שלו הייתה {::nomarkdown}\(E_{i}F^{\prime}\){:/nomarkdown}; מכיוון ש-{::nomarkdown}\(E_{i}\subseteq E_{i+1}\){:/nomarkdown} אז הקומפוזיטום של {::nomarkdown}\(E_{i+1}\){:/nomarkdown} עם {::nomarkdown}\(E_{i}F^{\prime}\){:/nomarkdown} הוא פשוט {::nomarkdown}\(E_{i+1}F^{\prime}\){:/nomarkdown}).

עכשיו, החבורה {::nomarkdown}\(\text{Gal}\left(E_{i+1}/E_{i+1}\cap E_{i}F^{\prime}\right)\){:/nomarkdown} היא חבורת אוטומורפיזמים של {::nomarkdown}\(E_{i+1}\){:/nomarkdown} שמקבעים "קצת יותר מאשר את {::nomarkdown}\(E_{i}\){:/nomarkdown} בלבד", כלומר תת-חבורה של {::nomarkdown}\(\text{Gal}\left(E_{i+1}/E_{i}\right)\){:/nomarkdown}. מכיוון שאנחנו כבר יודעים ש-{::nomarkdown}\(\text{Gal}\left(E_{i+1}/E_{i}\right)\){:/nomarkdown} ציקלית, זה מוכיח שגם {::nomarkdown}\(\text{Gal}\left(E_{i+1}F^{\prime}/E_{i}F^{\prime}\right)\){:/nomarkdown} ציקלית (תת-חבורה של חבורה ציקלית היא ציקלית), מה שמסיים את ההוכחה עד כדי המשפט שטרם הוכחתי על כך ש-{::nomarkdown}\(\text{Gal}\left(EF^{\prime}/F^{\prime}\right)\cong\text{Gal}\left(E/E\cap F^{\prime}\right)\){:/nomarkdown}.

אז בואו נוכיח את המשפט הזה ונסיים את הפוסט.

ראשית, להוכיח שאם {::nomarkdown}\(E/F\){:/nomarkdown} גלואה אז גם {::nomarkdown}\(EF^{\prime}/F^{\prime}\){:/nomarkdown} גלואה זה קל. לכאורה העובדה ש-{::nomarkdown}\(F^{\prime}/F\){:/nomarkdown} לא גלואה עלולה להקשות עלינו, אבל לא באמת. העובדה ש-{::nomarkdown}\(E/F\){:/nomarkdown} גלואה אומרת ש-{::nomarkdown}\(E\){:/nomarkdown} הוא שדה פיצול של פולינום {::nomarkdown}\(p\left(x\right)\in F\left[x\right]\){:/nomarkdown}. <strong>אותו פולינום בדיוק</strong> הוא גם איבר של {::nomarkdown}\(F^{\prime}\left[x\right]\){:/nomarkdown} ושדה הפיצול שלו הוא {::nomarkdown}\(EF^{\prime}\){:/nomarkdown} (השדה שמתקבל מלקיחת כל האיברים של {::nomarkdown}\(F^{\prime}\){:/nomarkdown} ובנוסף השורשים של {::nomarkdown}\(p\left(x\right)\){:/nomarkdown}). החלק המעניין הוא להבין מהי חבורת הגלואה {::nomarkdown}\(\text{Gal}\left(EF^{\prime}/F^{\prime}\right)\){:/nomarkdown}. כל איבר {::nomarkdown}\(\sigma\in\text{Gal}\left(EF^{\prime}/F^{\prime}\right)\){:/nomarkdown} הוא אוטומורפיזם של {::nomarkdown}\(EF^{\prime}\){:/nomarkdown}, ואפשר לשאול את עצמנו מה קורה כשהוא מצומצם ל-{::nomarkdown}\(E\){:/nomarkdown}, כלומר מה קורה עם {::nomarkdown}\(\sigma\|_{E}\){:/nomarkdown}. הפונקציה הזו היא פונקציה חח"ע מ-{::nomarkdown}\(E\){:/nomarkdown} לתוך {::nomarkdown}\(EF^{\prime}\){:/nomarkdown} - זה מה שנקרא <strong>שיכון</strong>. רק מה, כשהוכחנו את המשפט היסודי של תורת גלואה, ראינו שאם {::nomarkdown}\(E/F\){:/nomarkdown} גלואה, אז כל שיכון מתוך {::nomarkdown}\(E\){:/nomarkdown} שמשמר את {::nomarkdown}\(F\){:/nomarkdown} הוא בהכרח אוטומורפיזם של {::nomarkdown}\(E\){:/nomarkdown} (זה לא היה טריוויאלי לגמרי להוכחה). במקרה שלנו {::nomarkdown}\(\sigma\|_{E}\){:/nomarkdown} משמר את {::nomarkdown}\(F^{\prime}\){:/nomarkdown} אז הוא בוודאי משמר גם את {::nomarkdown}\(F\){:/nomarkdown}, ולכן הוא אוטומורפיזם של {::nomarkdown}\(E\){:/nomarkdown}. אם כן, קיבלנו הומומורפיזם של חבורות {::nomarkdown}\(\varphi:\text{Gal}\left(EF^{\prime}/F^{\prime}\right)\to\text{Gal}\left(E/F\right)\){:/nomarkdown} שמוגדר על ידי {::nomarkdown}\(\varphi\left(\sigma\right)=\sigma\|_{E}\){:/nomarkdown}.

אני רוצה להראות שההתאמה הזו היא חח"ע, אז לשם כך בואו נבין מהו {::nomarkdown}\(\ker\varphi=\left\{ \sigma\in\text{Gal}\left(EF^{\prime}/F^{\prime}\right)\ \|\ \sigma\|_{E}=\text{id}\right\} \){:/nomarkdown}. אני טוען שהאיבר היחיד ב-{::nomarkdown}\(\ker\varphi\){:/nomarkdown} יכול להיות אוטומורפיזם הזהות על {::nomarkdown}\(EF^{\prime}\){:/nomarkdown}. למה? כי {::nomarkdown}\(\sigma\in\ker\varphi\){:/nomarkdown} אומר ש-{::nomarkdown}\(\sigma\){:/nomarkdown} הוא הזהות הן על השדה {::nomarkdown}\(E\){:/nomarkdown} והן על השדה {::nomarkdown}\(F^{\prime}\){:/nomarkdown} (כי {::nomarkdown}\(F^{\prime}\){:/nomarkdown} הוא שדה הבסיס בהרחבת הגלואה {::nomarkdown}\(EF^{\prime}/F^{\prime}\){:/nomarkdown} שמהחבורה שלה נלקח {::nomarkdown}\(\sigma\){:/nomarkdown}). אם הוא הזהות על שני השדות שמרכיבים את {::nomarkdown}\(EF^{\prime}\){:/nomarkdown} הוא חייב להיות הזהות על כל {::nomarkdown}\(EF^{\prime}\){:/nomarkdown}, אחרת היינו מקבלים ששדה השבת שלו הוא תת-שדה ממש של {::nomarkdown}\(EF^{\prime}\){:/nomarkdown} שמכיל את {::nomarkdown}\(E,F^{\prime}\){:/nomarkdown}, בסתירה למינימליות של {::nomarkdown}\(EF^{\prime}\){:/nomarkdown}. זה מראה לנו ש-{::nomarkdown}\(\varphi\){:/nomarkdown} חח"ע. נשאר רק להשתכנע שהתמונה שלו היא בדיוק {::nomarkdown}\(\text{Gal}\left(E/E\cap F^{\prime}\right)\){:/nomarkdown}.

בואו נסמן את התמונה ב-{::nomarkdown}\(H\){:/nomarkdown}. זו חבורה של אוטומורפיזמים של {::nomarkdown}\(E\){:/nomarkdown}, ולכן יש לה שדה שבת, {::nomarkdown}\(E_{H}\){:/nomarkdown}, שאנחנו רוצים להשתכנע שהוא בדיוק {::nomarkdown}\(E\cap F^{\prime}\){:/nomarkdown}. ההכלה {::nomarkdown}\(E_{H}\supseteq E\cap F^{\prime}\){:/nomarkdown} טריוויאלית: אנחנו יודעים שכל איבר של {::nomarkdown}\(H\){:/nomarkdown} הוא צמצום של אוטומורפיזם שהוא הזהות על כל {::nomarkdown}\(F^{\prime}\){:/nomarkdown}; אז גם על האיברים של {::nomarkdown}\(F^{\prime}\){:/nomarkdown} שעדיין בתחום שלו אחרי שהצטמצמנו ל-{::nomarkdown}\(E\){:/nomarkdown} הוא עדיין יהיה הזהות, מה שאומר שהוא בוודאי הזהות על כל {::nomarkdown}\(E\cap F^{\prime}\){:/nomarkdown}. הכיוון השני הוא המעניין יותר.

מכיוון ש-{::nomarkdown}\(E_{H}\subseteq E\){:/nomarkdown} באופן טריוויאלי, רק צריך להשתכנע ש-{::nomarkdown}\(E_{H}\subseteq F^{\prime}\){:/nomarkdown}. כאן מגיע תעלול: נסתכל על הקומפוזיטום {::nomarkdown}\(E_{H}F^{\prime}\){:/nomarkdown}. זה תת-שדה של {::nomarkdown}\(EF^{\prime}\){:/nomarkdown}, ואנחנו יודעים שכל {::nomarkdown}\(\sigma\in\text{Gal}\left(EF^{\prime}/F^{\prime}\right)\){:/nomarkdown} משמרת אותו (שוב, כי היא הזהות על {::nomarkdown}\(E_{H}\){:/nomarkdown} ועל {::nomarkdown}\(F^{\prime}\){:/nomarkdown}). כלומר, {::nomarkdown}\(E_{H}F^{\prime}\){:/nomarkdown} משתמר על ידי <strong>כל</strong> חבורת הגלואה {::nomarkdown}\(\text{Gal}\left(EF^{\prime}/F^{\prime}\right)\){:/nomarkdown}. אבל כבר ראינו שהרעיון בחבורת גלואה הוא שהשדה שהיא משמרת הוא בדיוק שדה הבסיס של ההרחבה, ולכן {::nomarkdown}\(E_{H}F^{\prime}=F^{\prime}\){:/nomarkdown}. זה יכול לקרות אם ורק אם {::nomarkdown}\(E_{H}\subseteq F^{\prime}\){:/nomarkdown}, מה שמסיים את ההוכחה.
<h2>דברי סיכום והסבר לאן פנינו מועדות</h2>
זהו! הוכחנו את המשפט הכבד ביותר שרציתי להוכיח בתורת גלואה! אבל האם הוכחתי כבר את עניין ה"אין פתרון על ידי רדיקלים למשוואה ממעלה חמישית ומעלה"? לא.

הוכחתי לעת עתה את המשפט "פולינום {::nomarkdown}\(p\left(x\right)\){:/nomarkdown} הוא פתיר על ידי רדיקלים אם ורק אם חבורת גלואה שלו פתירה". זה המשפט המרכזי של גלואה והוא יפהפה, אבל כרגע עוד לא יישמתי אותו לשום מקרה מעשי. אני יכול לקחת פולינום ספציפי ממעלה חמישית, לחשב את חבורת הגלואה שלו, להוכיח שהיא לא פתירה ולסיים בזאת; אבל למען האמת, לטפל בפולינום <strong>כללי</strong> ממעלה חמישית ומעלה זה אפילו יותר פשוט, וגם יותר טוב לאינטואיציה (שכרגע אולי עדיין תוהה מה זה בעצם אומר, פולינום כללי). אז זה משהו שאטפל בו בהמשך, אחרי פוסט של תורת החבורות שיסביר לנו אחת ולתמיד את כל מה שאנחנו צריכים לדעת על חבורות פתירות בהקשר הזה. יהיה כיף.
