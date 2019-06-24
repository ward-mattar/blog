---
id: 3285
title: "אנליזה וקטורית - תכונות בסיסיות של הנגזרת"
date: 2015-08-19 16:12:28
layout: post
categories: 
  - אנליזה מתמטית
tags: 
  - אנליזה וקטורית
  - נגזרת
---
<a href="http://www.gadial.net/2015/07/05/multivariable_derivatives/">אז הכרנו</a> את הנגזרת של פונקציה $latex f:\mathbb{R}^{n}\to\mathbb{R}^{m}$ וראינו איך אפשר לחשב אותה באמצעות נגזרות חלקיות. בואו נעבור עכשיו לכמה תוצאות תיאורטיות כלליות וקלות יחסית, כדי שנתרגל; עד סוף הפוסט נגיע להצגת תוצאה לא טריוויאלית ושימושית - <strong>משפט הפונקציה ההפוכה</strong>. אבל נתחיל מהבסיס.

נתחיל בתכונה אחת שנובעת כמעט מייד מכך שפונקציה היא גזירה אבל טרם הראיתי זאת במפורש, והגיע הזמן כי נשתמש בה בהמשך: רציפות. נזכיר ש-$latex f$ היא פונקציה רציפה ב-$latex a$ אם $latex \lim_{x\to a}f\left(x\right)=f\left(a\right)$ - או, באופן שקול, אם $latex \lim_{h\to0}f\left(a+h\right)-f\left(a\right)=0$. זו תכונה מאוד מאוד מועילה במקרים רבים כי היא מבטיחה ש-$latex f$ לא יכולה "להתפרע" יותר מדי כשמתקרבים לנקודה כלשהי. עכשיו, אם $latex f$ גזירה ב-$latex a$ היא גם רציפה שם. למה? כי נניח ש-$latex \lim_{h\to0}\frac{f\left(a+h\right)-f\left(a\right)-Df\left(a\right)h}{\left\|h\right\|}=0$ ועכשיו ננסה לכתוב את $latex \lim_{h\to0}f\left(a+h\right)-f\left(a\right)$ בעזרת הגבול ההוא:

$latex \lim_{h\to0}f\left(a+h\right)-f\left(a\right)=\lim_{h\to0}\left\|h\right\|\left[\frac{f\left(a+h\right)-f\left(a\right)-Df\left(a\right)\cdot h}{\left\|h\right\|}\right]+Df\left(a\right)\cdot h$

ומה קיבלנו פה? גבול שמערב כמה חלקים. ה-$latex \left\|h\right\|$ שואף כמובן לאפס. ה-$latex \left[\frac{f\left(a+h\right)-f\left(a\right)-Df\left(a\right)\cdot h}{\left\|h\right\|}\right]$ גם, כי הנחנו שהפונקציה גזירה. לכן כל המחובר השמאלי שואף לאפס. במחובר הימני אנחנו מקבלים מטריצה קבועה כפול וקטור ששואף לאפס - קל לראות שזה שואף לאפס (טפלו בכל רכיב בנפרד; זו פונקציה רציפה חד ממדית), וזה מסיים את ההוכחה.

עכשיו בואו נעבור לטפל בכללי גזירה שונים ומשונים. ככה זה עובד: הגדרנו פעולה של גזירה על פונקציות. מייד אנו תוהים - מה מניבה הגזירה עבור פונקציות פשוטות יחסית? כמו כן - על פונקציות מוגדרות כל מני פעולות - חיבור, כפל, הרכבה וכדומה. האם קל לדעת את הנגזרת של חיבור פונקציות, אם יודעים את הנגזרת של הפונקציות שמחברים?

פונקציה פשוטה במיוחד היא פונקציה קבועה: $latex f\left(x\right)=c$ עבור $latex c\in\mathbb{R}^{m}$ קבוע כלשהו. מכיוון שעבור פונקציה ממשית קבועה הנגזרת היא 0, נקבל כאן שהנגזרות החלקיות בכל מקום הן 0. אלו נגזרות חלקיות רציפות, ולכן $latex f$ המקורית גזירה והנגזרת שלה היא מטריצת אפסים, כלומר $latex Df\left(a\right)=0$ כשכאן 0 היא טרנספורמציית האפס. עוד פונקציה פשוטה במיוחד היא טרנספורמציה לינארית $latex T:\mathbb{R}^{n}\to\mathbb{R}^{m}$. כאן אפילו אין טעם לדבר על נגזרות חלקיות כשההגדרה הבסיסית עובדת מייד ומראה לנו ש-$latex T$ היא (כמובן) הדיפרנציאל של עצמה: $latex \lim_{h\to0}\frac{T\left(a+h\right)-T\left(a\right)-T\left(h\right)}{h}=\lim_{h\to0}\frac{T\left(a+h-a-h\right)}{h}=\lim_{h\to0}\frac{T\left(0\right)}{h}=0$. דוגמה לטרנספורמציה לינארית פשוטה שכזו היא חיבור: $latex s\left(x,y\right)=x+y$ (זו פונקציה $latex s:\mathbb{R}^{2}\to\mathbb{R}$), אז אנחנו יודעים לגזור גם אותה.

ומה על כפל? $latex p:\mathbb{R}^{2}\to\mathbb{R}$ המוגדרת על ידי $latex p\left(x,y\right)=xy$? גזירה חלקית מראה שהנגזרת בנקודה $latex \left(a,b\right)$ היא $latex \left(b,a\right)$, כלומר הדיפרנציאל הוא $latex bx+ay$.

מה שנחמד בפונקציות החיבור והכפל הללו הוא שהן יאפשרו לנו לטפל בחיבור וכפל של פונקציות סקלריות <strong>כלליות</strong>. למשל, אם $latex f,g:\mathbb{R}^{n}\to\mathbb{R}$ ואנחנו מגדירים $latex h=f+g$, אז $latex h=s\left(f,g\right)$. יש לנו כאן <strong>הרכבה</strong> של פונקציה $latex \mathbb{R}^{n}\to\mathbb{R}^{2}$ שבנויה על הזוג $latex \left(f,g\right)$, עם הפונקציה $latex s:\mathbb{R}^{2}\to\mathbb{R}$. אם נדע איך לגזור הרכבה, נדע לגזור גם חיבור וכפל של פונקציות, בלי שום מאמץ מחשבתי נוסף מצידנו. אז זו הבעיה שאפתור עכשיו.

הכלל שמתאר את העובדה שהרכבה של פונקציות גזירות הוא גזיר ונותן את הנוסחה לביצוע הגזירה נקרא <strong>כלל השרשרת</strong>. אתם בוודאי מכירים את הגרסה שלו עבור פונקציות ממשיות. בואו נתחיל מלראות אותה. מאוד קל לזכור את הגרסה הזו אם משתמשים בסימון של לייבניץ לגזירת פונקציות: אם $latex f\left(x\right)$ היא פונקציה עם המשתנה היחיד $latex x$, אז במקום לכתוב $latex f^{\prime}$ (בערך הכתיב שבו ניוטון השתמש), אפשר לכתוב $latex \frac{df}{dx}$. אחת הסיבות לכתיב הזה היא שקל לזכור את כלל השרשרת בעזרתו.

אם $latex y:\mathbb{R}\to\mathbb{R}$ היא פונקציה, ואנחנו מסתכלים על ההרכבה $latex f\left(y\left(x\right)\right)$, אז הנגזרת שלה היא $latex \frac{df}{dx}=\frac{df}{dy}\frac{dy}{dx}$. הבעיה היא - וזה משהו שאני מרגיש ביתר שאת עכשיו, כשאני מנסה לכתוב את הפוסט הזה בצורה מסודרת - שזה כתיב מאוד לא פורמלי שקל לאבד בו דקויות. בואו נסתכל שוב על המשוואה $latex \frac{df}{dx}=\frac{df}{dy}\frac{dy}{dx}$. כאן נראה ש-$latex f$ היא פונקציה של שני משתנים שונים: המשתנה $latex x$, באגף שמאל; והמשתנה $latex y$, באגף ימין. אבל הרי $latex y$ הוא לא באמת משתנה; הוא פונקציה. ומה שמופיע באגף ימין הוא בעצם לא $latex f$, הוא פונקציה מסובכת יותר שמתקבלת מהרכבת $latex f$ על $latex y$. בקיצור, הסימון הזה יכול להיות מועיל אבל הוא גם מסוכן למי שלא שולט בו, ואני אישית לא אוהב אותו. וזה בלי שניכנס בכלל לתלונות על כך שמתרחש פה משהו שנקרא כמו "צמצום דיפרנציאלים" - משהו שבוודאי אין לו משמעות פורמלית עבור רמת החומר שבדרך כלל נלמדת באינפי 1.

אז הנה העסק בכתיב ניוטוני. נניח ש-$latex f,g;\mathbb{R}\to\mathbb{R}$ ונגדיר $latex h\left(x\right)=f\left(g\left(x\right)\right)$ (לפעמים זה מסומן ב-$latex f\circ g$ ולפעמים ב-$latex g\circ f$, תלוי איזה ספר אתם קוראים, ויש הגיון מאחורי שתי שיטות הסימון; לכן אני שונא גם את הסימון הזה). אז כלל השרשרת אומר לנו ש-$latex h^{\prime}\left(x\right)=f^{\prime}\left(g\left(x\right)\right)g^{\prime}\left(x\right)$. כלומר, הנגזרת ב-$latex x$ שווה למכפלה של הנגזרת של $latex g$ ב-$latex x$, כפול הנגזרת של $latex f$, אבל לא ב-$latex x$ אלא בנקודה שאליה $latex g$ מעביר את $latex x$ (ההבחנה הזו היא עניין מבלבל). למשל, אם $latex g\left(x\right)=x^{2}$ ו-$latex f\left(x\right)=\sin x$ אז $latex h\left(x\right)=\sin\left(x^{2}\right)$ ולכן $latex h^{\prime}\left(x\right)=\cos\left(x^{2}\right)\cdot2x$ (ולא $latex \cos\left(x\right)\cdot2x$).

האינטואיציה מאחורי ההוכחה של המקרה החד ממדי די פשוטה. ראשית, בואו ניזכר בכך שאפשר לכתוב את הנגזרת גם בצורה קצת שונה, אולי קצת יותר טבעית:

$latex h^{\prime}\left(a\right)=\lim_{t\to0}\frac{h\left(a+t\right)-h\left(a\right)}{t}=\lim_{x\to a}\frac{h\left(x\right)-h\left(a\right)}{x-a}$

תוך שימוש בניסוח הזה, פשוט מפרקים את הביטוי של הנגזרת למכפלה של שני ביטויי נגזרת מתאימים על ידי כפל וחילוק ב-$latex g\left(x\right)-g\left(a\right)$:

$latex h^{\prime}\left(a\right)=\lim_{x\to a}\frac{h\left(x\right)-h\left(a\right)}{x-a}=\lim_{x\to a}\frac{f\left(g\left(x\right)\right)-f\left(g\left(a\right)\right)}{g\left(x\right)-g\left(a\right)}\frac{g\left(x\right)-g\left(a\right)}{x-a}=f^{\prime}\left(g\left(a\right)\right)g^{\prime}\left(a\right)$

כמובן, צריך להיות זהירים פה ולהסביר יותר במדויק למה $latex \lim_{x\to a}\frac{f\left(g\left(x\right)\right)-f\left(g\left(a\right)\right)}{g\left(x\right)-g\left(a\right)}=f^{\prime}\left(g\left(a\right)\right)$; הרי יכולות לצוץ כל מני בעיות משונות בגלל ש-$latex g$ יכולה להתנהג מוזר (מה קורה אם $latex g\left(x\right)=g\left(a\right)$ עבור $latex x\ne a$ כלשהו?). אני מביא את חצי ההוכחה הזו כדי שנרגיש מאיפה הנוסחה מגיעה בכלל. הוכחה מלאה ומדוייקת אני אתן עכשיו למשפט הכללי, עבור פונקציות וקטוריות כלליות; מן הסתם נקבל את כלל השרשרת המקורי בתור מקרה פרטי.

אז איך בכלל מנוסח המשפט הכללי? אם אני רוצה להרכיב את $latex f$ על $latex g$ אני צריך שהטווח של $latex g$ יהיה מאותו מימד כמו התמונה של $latex f$, כלומר $latex g:\mathbb{R}^{n}\to\mathbb{R}^{k}$ ואילו $latex f:\mathbb{R}^{k}\to\mathbb{R}^{m}$. שימו לב ל-$latex k$ המשותף הזה. עכשיו נגדיר $latex h\left(x\right)=f\left(g\left(x\right)\right)$ וקיבלנו פונקציה $latex h:\mathbb{R}^{n}\to\mathbb{R}^{m}$ נטולת $latex k$. בהינתן $latex a\in\mathbb{R}^{n}$ אנחנו רוצים לדעת מהי $latex Dh\left(a\right)$; זוהי מטריצה $latex m\times n$ (זוכרים? כל שורה של המטריצה היא גרדיאנט של אחד מהרכיבים של $latex h$; יש ל-$latex h$ $latex m$ רכיבים והאורך של כל גרדיאנט הוא $latex n$). אם נרצה פשוט לקחת את הנוסחה של כלל השרשרת החד ממדי ולכתוב אותה מחדש, נקבל את הדבר הבא:

$latex Dh\left(a\right)=Df\left(g\left(a\right)\right)\cdot Dg\left(a\right)$

מה יש לנו כאן? ובכן, $latex Df\left(g\left(a\right)\right)$ היא מטריצה $latex m\times k$ ואילו $latex Dg\left(a\right)$ היא מטריצה $latex k\times n$. לכן המכפלה שלהן - ובסדר הזה, הנגזרת של $latex f$ משמאל והנגזרת של $latex g$ מימין - נותנת לנו באמת מטריצה $latex m\times n$. כך שנראה שהנוסחה עובדת! רק יהיה צריך להוכיח אותה. הבעיה היא שמייד ברור שההוכחה האלגנטית של המקרה החד ממדי לא תעבוד. כי אנחנו כבר לא עובדים עם ביטוי נחמד כמו $latex \lim_{x\to a}\frac{h\left(x\right)-h\left(a\right)}{x-a}$ אלא עם המפלצת $latex \lim_{t\to0}\frac{h\left(a+t\right)-h\left(a\right)-Dh\left(a\right)t}{\left\|t\right\|}$ שבה $latex t$ הוא בכלל וקטור והמטרה שלנו היא לא להראות שהגבול קיים אלא שהוא אפס. לכו תפתחו את זה למכפלה של שני גבולות שונים, שבהם מה ששואף לאפס שייך למרחבים ממימד אחר, והדיפרנציאלים המעורבים הם ממימדים שונים, וכו' וכו' וכו'. בקיצור, זה הולך להיות יותר טכני. בשורה התחתונה מה שנעשה הוא פשוט לבוא עם פטיש גדול ולהתחיל לדפוק על ההוכחה עד שזה יסתדר - אין כאן חוכמה גדולה ובעיקר יש טיפול שנראה קצת משמים בכל מני ביטויים. סביר להניח שחלקכם יאבדו אותי כאן ויכולים פשוט לקפוץ אל "עכשיו אפשר לשכוח מכל המהומה הטכנית" שאחר כך; מי שבאמת רוצה להבין, אני ממליץ על כתיבת ההוכחה בעצמכם במקביל אלי (הדרך היחידה שבה אני ממש מבין את ההוכחה היא על ידי כך שאני כותב אותה).

בתור התחלה, אנחנו לא מניחים ש-$latex f,g$ בהכרח מוגדרות לכל $latex \mathbb{R}^{n}$ ו-$latex \mathbb{R}^{k}$, בהתאמה (הרבה פעמים אנחנו רוצים להשתמש בכלל השרשרת גם לפונקציות שמוגדרות רק עבור חלק מהתחום הזה). כל מה שאנחנו מניחים הוא ש-$latex g$ היא גזירה ב-$latex a$ ו-$latex f$ גזירה ב-$latex g\left(a\right)$. מכך אני רוצה להסיק ש-$latex h$ גזירה ב-$latex a$ ולמצוא את הנגזרת שלה. לצורך כך אני רוצה להיות מסוגל לדבר על ערכים של $latex h$ ב<strong>סביבה</strong> של $latex a$, כי זה מה שמופיע בהגדרת הנגזרת - כלומר, על ערכים מהצורה $latex h\left(a+t\right)$ עבור $latex t$ קטן. הטענה היא שעבור $latex t$ קטן מספיק (כלומר, $latex \left\|t\right\|&lt;\delta$ עבור $latex \delta&gt;0$ מסויים), הביטוי $latex h\left(a+t\right)$ יהיה מוגדר. עכשיו, מכיוון שאנחנו יודעים ש-$latex f$ רציפה ב-$latex g\left(a\right)$ בפרט קיים $latex \varepsilon&gt;0$ כך ש-$latex f$ מוגדרת לכל $latex y$ כך ש-$latex \left\|y-g\left(a\right)\right\|&lt;\varepsilon$. מהרציפות של $latex g$ עולה שקיים $latex \delta&gt;0$ כך ש-שאם $latex \left\|x-a\right\|&lt;\delta$ אז $latex g$ מוגדרת ב-$latex x$ ומתקיים $latex \left\|g\left(x\right)-g\left(a\right)\right\|&lt;\varepsilon$ (זו ההגדרה של רציפות, כשפותחים אותה לאפסילון-דלתא). קיבלנו את ה-$latex \delta$ שרצינו.

אם כן, בואו ניקח $latex t$ כך ש-$latex \left\|t\right\|&lt;\delta$. זה אומר ש-$latex \left\|g\left(a+t\right)-g\left(a\right)\right\|&lt;\varepsilon$ ולכן $latex f$ מוגדרת ב-$latex g\left(a+t\right)$. כעת, מכיוון ש-$latex f$ גזירה, זה אומר שמתקיים הגבול הבא:

$latex \lim_{s\to0}\frac{f\left(g\left(a\right)+s\right)-f\left(g\left(a\right)\right)-Df\left(g\left(a\right)\right)s}{\left\|s\right\|}=0$

בואו נרשום את הביטוי שבתוך הגבול בתור פונקציה של $latex s$: $latex F\left(s\right)=\frac{f\left(g\left(a\right)+s\right)-f\left(g\left(a\right)\right)-Df\left(g\left(a\right)\right)s}{\left\|s\right\|}$. הפונקציה הזו מוגדרת לכל $latex s$ כך ש-$latex 0&lt;\left\|s\right\|&lt;\varepsilon$ (עבור $latex s$-ים גדולים יותר לא מובטח ש-$latex f\left(g\left(a\right)+s\right)$ תהיה מוגדרת) ומה שאני רוצה לעשות הוא להציב במקום $latex s$ את $latex g\left(a+t\right)-g\left(a\right)$ (שראינו לפני רגע שאכן קטן בערכו המוחלט מאפסילון), בערך כמו מה שעושים בהוכחת כלל השרשרת הרגיל. ההצבה הזו מועילה לי במיוחד בטיפול בגורם $latex f\left(g\left(a\right)+k\right)$: כרגע הוא לא משהו שאני יכול לכתוב עם $latex h$, הפונקציה שאני רוצה בסופו של דבר לגזור; אבל אחרי ההצבה הזו נקבל את $latex f\left(g\left(a+t\right)\right)=h\left(a+t\right)$.

אם כן, בואו ניקח את המשוואה שהגדירה את $latex F\left(s\right)$ ונטפל בה קצת - נכפול ב-$latex \left\|s\right\|$, נעביר אגפים ונקבל

$latex f\left(g\left(a\right)+s\right)-f\left(g\left(a\right)\right)=\left\|s\right\|F\left(k\right)+Df\left(g\left(a\right)\right)s$

לעת עתה אשתמש בקיצור $latex \Delta g=g\left(a+t\right)-g\left(a\right)$ כי זה יחסוך לי כתיבה. אם כן, אחרי הצבת $latex s=\Delta g$ אני מקבל

$latex h\left(a+t\right)-h\left(a\right)=\left\|\Delta g\right\|F\left(\Delta g\right)+Df\left(g\left(a\right)\right)\cdot\Delta g$

בואו ונסתכל על הגורם הכי ימני במשוואה הזו: $latex Df\left(g\left(a\right)\right)\cdot\Delta g$. זה <strong>קצת</strong> מזכיר לנו את מה שאנחנו מצפים שיופיע בנוסחה הסופית: $latex Df\left(g\left(a\right)\right)\cdot Dg\left(a\right)$. כך שהשלב המתבקש הבא הוא לנסות ולמצוא תיאור נחמד יותר עבור $latex \Delta g$. אפשר לשכוח לרגע מהמשוואה שקיבלנו ולהתמקד בניתוח שלו.

לצורך כך, בואו ניזכר בכך שגם $latex g$ היא פונקציה גזירה, ולכן אפשר לכתוב עבורה פונקציה דומה לזו שכתבנו עבור $latex f$, רק פשוטה יותר:

$latex G\left(t\right)=\frac{g\left(a+t\right)-g\left(a\right)-Dg\left(a\right)t}{\left\|t\right\|}$

הפונקציה הזו מוגדרת לכל $latex 0&lt;\left\|t\right\|&lt;\delta$, ואפשר להגדיר $latex G\left(0\right)=0$ ונקבל ש-$latex G$ הזו גם רציפה לכל $latex \left\|t\right\|&lt;\delta$. ושוב, על ידי כפל והעברת אגפים נקבל

$latex \Delta g=\left\|t\right\|G\left(t\right)+Dg\left(a\right)t$

קיבלנו את התיאור עבור $latex \Delta g$ שרצינו. עכשיו, בואו נחזור אל $latex h$. המטרה שלנו, כזכור, היא לחשב את הגבול הבא:

$latex \frac{h\left(a+t\right)-h\left(a\right)-Dh\left(a\right)t}{\left\|t\right\|}$

כאשר ההימור שלנו למועמדת לתפקיד $latex Dh\left(a\right)$ היא $latex Df\left(g\left(a\right)\right)\cdot Dg\left(a\right)$. במילים אחרות, אנחנו רוצים לחשב את הגבול של

$latex \frac{h\left(a+t\right)-h\left(a\right)-Df\left(g\left(a\right)\right)\cdot Dg\left(a\right)\cdot t}{\left\|t\right\|}$

(שימו לב שאני כותב את $latex Df\left(g\left(a\right)\right)\cdot Dg\left(a\right)\cdot t$ בלי סוגריים; זה תקין, מכיוון שכפל מטריצות הוא אסוציאטיבי).

עכשיו, נחליף את $latex h\left(a+t\right)-h\left(a\right)$ בתיאור שמצאנו למעלה, ונקבל:

$latex \frac{\left\|\Delta g\right\|F\left(\Delta g\right)+Df\left(g\left(a\right)\right)\cdot\Delta g-Df\left(g\left(a\right)\right)\cdot Dg\left(a\right)\cdot t}{\left\|t\right\|}$

ועכשיו נציב את ה-$latex \Delta g$ שמצאנו, ונקבל:

$latex \frac{\left\|\Delta g\right\|F\left(\Delta g\right)+\left\|t\right\|Df\left(g\left(a\right)\right)G\left(t\right)+Df\left(g\left(a\right)\right)\cdot Dg\left(a\right)\cdot t-Df\left(g\left(a\right)\right)\cdot Dg\left(a\right)\cdot t}{\left\|t\right\|}$

שני הגורמים האחרונים מבטלים זה את זה, כך שאנחנו נשארים עם הביטוי היחסית פשוט

$latex \frac{\left\|\Delta g\right\|F\left(\Delta g\right)}{\left\|t\right\|}+Df\left(g\left(a\right)\right)G\left(t\right)$

ואנחנו רוצים להראות שהוא שואף לאפס כאשר $latex t$ שואף לאפס. מה שיש כאן הוא חשבון מכולת סטנדרטי של אינפי - מראים שיש לנו סכום של גורמים כך שכל גורם כולל חלק ששואף לאפס, וחלק שהוא חסום ולכן "לא מפריע" לו. נתחיל עם $latex Df\left(g\left(a\right)\right)G\left(t\right)$. כאן $latex Df\left(g\left(a\right)\right)$ הוא מספר קבוע בעוד ש-$latex G\left(t\right)$ שואפת כמובן לאפס (למה "כמובן"? בטח איבדתם אותי לגמרי כבר; $latex G\left(t\right)$ היא הפונקציה שמתארת את הגבול שמגדיר את הגזירות של $latex g$). הביטוי $latex \frac{\left\|\Delta g\right\|}{\left\|t\right\|}F\left(\Delta g\right)$ מאתגר קצת יותר. מכיוון ש-$latex g$ רציפה, הרי ש-$latex \Delta g=g\left(a+t\right)-g\left(a\right)$ שואפת לאפס כאשר $latex t$ שואף לאפס, ומכיוון ש-$latex F$ שואפת לאפס כשהקלט שלה שואף לאפס (מאותה סיבה של $latex G$) קיבלנו ש-$latex F\left(\Delta g\right)$ שואפת לאפס. נשאר רק להראות ש-$latex \frac{\left\|\Delta g\right\|}{\left\|t\right\|}$ חסומה.

לצורך כך, זכרו שראינו כי $latex \Delta g=\left\|t\right\|G\left(t\right)+Dg\left(a\right)t$. ניקח נורמה בשני האגפים ונקבל

$latex \left\|\Delta g\right\|\le\left\|t\right\|\left\|G\left(t\right)\right\|+\left\|Dg\left(a\right)\right\|\left\|t\right\|=\left\|t\right\|\left(\left\|G\left(t\right)\right\|+k\left\|Dg\left(a\right)\right\|\right)$

המעבר האחרון עשוי להיות קצת מבלבל עבור מי שלא מכיר. זכרו ש-$latex Dg\left(a\right)$ היא <strong>מטריצה</strong> מסדר $latex k\times n$ . לכן הביטוי $latex \left\|Dg\left(a\right)\right\|$ עבורה שונה מאשר עבור, נאמר $latex \left\|t\right\|$ - כאן זו <strong>נורמה של מטריצה</strong>. במקרה שלנו, ההגדרה של הנורמה הזו פשוטה - חשבו על המטריצה בתור וקטור ארוך, וקחו את הנורמה הרגילה שלה. כעת, $latex Dg\left(a\right)\cdot t$ זו מכפלה שלוקחת וקטור מגודל $latex n$ ומחזירה וקטור מגודל $latex k$, שהכניסות שלו הן מכפלות סקלריות של $latex t$ עם $latex k$ שורות $latex Dg\left(a\right)$. קל לראות, באמצעות שימוש באי-שוויון המשולש, שמתקיים $latex \left\|Dg\left(a\right)\cdot t\right\|\le k\left\|Dg\left(a\right)\right\|\left\|t\right\|$, ומכאן המעבר שלי.

קיבלנו ש-$latex \frac{\left\|\Delta g\right\|}{\left\|t\right\|}=\left\|G\left(t\right)\right\|+k\left\|Dg\left(a\right)\right\|$. כעת, $latex G\left(t\right)$ רציפה ושואפת לאפס ולכן גם $latex \left\|G\left(t\right)\right\|$, ולכן היא בוודאי חסומה; ואילו $latex k\left\|Dg\left(a\right)\right\|$ הוא קבוע. זה מסיים את ההוכחה.

עכשיו אפשר לשכוח מכל המהומה הטכנית הזו ולקטוף באלגנטיות את הפירות. ראינו שהדיפרנציאל של $latex s\left(x,y\right)=x+y$ בכל נקודה הוא $latex s$ עצמה. כעת, נניח שיש לנו שתי פונקציות $latex f:\mathbb{R}^{n}\to\mathbb{R}$ ו-$latex g:\mathbb{R}^{n}\to\mathbb{R}$ ואנחנו רוצים לגזור את $latex f+g$, מה עושים? נשים לב לכך ש-$latex h\left(x\right)=\left(f+g\right)\left(x\right)=s\left(f,g\right)\left(x\right)$ (כאן $latex f,g$ זו בעצם דרך לתאר פונקציה מ-$latex \mathbb{R}^{n}$ אל $latex \mathbb{R}^{2}$ ש-$latex f,g$ הם רכיביה), ולכן נגזור על פי כלל השרשרת ונקבל

$latex Dh\left(a\right)=Ds\left(f\left(a\right),g\left(a\right)\right)D\left(f\left(a\right),g\left(a\right)\right)=s\left(Df\left(a\right),Dg\left(a\right)\right)=Df\left(a\right)+Dg\left(a\right)$

לא מפתיע, כמובן, אבל נחמד מאוד שזה מתקבל כך. קצת יותר מעניין יהיה לעשות את אותו דבר עבור כפל. שם הדיפרנציאל של $latex xy$ בנקודה $latex \left(a,b\right)$ היה $latex bx+ay$. אצלנו, הנקודה $latex \left(a,b\right)$ היא בעצם $latex \left(f\left(a\right),g\left(a\right)\right)$ ולכן נקבל מכלל השרשרת בסופו של דבר את $latex g\left(a\right)Df\left(a\right)+f\left(a\right)Dg\left(a\right)$.

אם כן, אנחנו יודעים כעת איך מחשבים את הנגזרת של פונקציות מורכבות יחסית - כאלו שמתקבלות מפונקציות פשוטות על ידי חיבור, כפל והרכבה. מה עם חיסור וחילוק? אפשר להרכיב את הפונקציה $latex g\left(x\right)=-x$ על כל פונקציה שנרצה ולקבל בקלות ש-$latex D\left(-f\right)=-Df$, ולכן $latex D\left(f-g\right)=Df-Dg$.

חילוק, כמובן, יהיה בעייתי יותר, כי לא ניתן לחלק באפס. אנחנו רוצים להרכיב את $latex g\left(x\right)=\frac{1}{x}$ (שהנגזרת שלה היא $latex -\frac{1}{x^{2}}$, על פי כללי הגזירה הרגילים) על הפונקציה $latex f$, אבל בשביל זה אנחנו צריכים לדרוש ש-$latex f$ תהיה שונה מאפס בנקודה שבה אנחנו מחשבים את הנגזרת. כלומר, אם $latex f\left(a\right)\ne0$ אז $latex D\frac{1}{f}\left(a\right)=D\left(g\left(f\right)\right)\left(a\right)=-\frac{1}{f^{2}\left(a\right)}Df\left(a\right)$.

מכאן גם אפשר לקבל את הנגזרת הכללית של מנת שתי פונקציות: $latex D\frac{h}{f}=D\left(\frac{1}{f}\cdot h\right)=D\frac{1}{f}h+\frac{1}{f}Dh=-\frac{hDf}{f^{2}}+\frac{1}{f}Dh=\frac{fDh-hDf}{f^{2}}$ - שוב, תחת ההנחה שאנחנו מחשבים את הפונקציות הללו רק בנקודות שבהן $latex f$ שונה מאפס.

כל אלו הן תוצאות נחמדות, כי הן לא שונות, בעצם, ממה שקורה באינפי רגיל במשתנה יחיד, למרות שאצלנו $latex Df$ זה יצור הרבה יותר מסובך מאשר הנגזרת הרגילה. זה בהחלט עוזר להרגיש ש"הצלחנו" בהגדרה שלנו. אם כן, הבה ונמשיך במיטב המסורת של אינפי, ונעבור אל הבניה האחרונה שלנו, שגם היא מוכללת בצורה טבעית, אבל הסיפור שלה אצלנו יהיה מסובך הרבה יותר - נגזרת הפונקציה ההפוכה.

נניח שיש לנו פונקציה $latex f:\mathbb{R}^{n}\to\mathbb{R}^{n}$ (שימו לב - כאן גם התחום וגם הטווח הם מאותו מימד $latex n$). אז $latex g:\mathbb{R}^{n}\to\mathbb{R}^{n}$ היא <strong>הפונקציה ההפוכה</strong> ל-$latex f$ אם $latex f\left(g\left(x\right)\right)=g\left(f\left(x\right)\right)=x$ לכל $latex x\in\mathbb{R}^{n}$. לא תמיד קיימת כזו, כמובן (חשבו על $latex f\left(x\right)=0$). אם קיימת, מסמנים אותה לרוב ב-$latex f^{-1}$. יותר מזה, לעתים קרובות לא קיימת ל-$latex f$ הופכית על כל $latex \mathbb{R}^{n}$, אבל אם נגביל את התחום של $latex f$ לתת-קבוצה $latex A\subseteq\mathbb{R}^{n}$ נקבל משהו הפיך. דוגמה קלאסית היא הפונקציה $latex f\left(x\right)=x^{2}$; היא לא חד-חד-ערכית על הממשיים כי $latex f\left(x\right)=f\left(-x\right)$; מצד שני, על הממשיים האי-שליליים היא כן חד-חד-ערכית והפיכה; ההופכית שלה היא $latex g\left(x\right)=\sqrt{x}$ (המוסכמה הרגילה היא ש-$latex \sqrt{x}$ כאשר $latex x$ ממשי מחזיר את השורש האי-שלילי אם קיימים שני שורשים).

נניח שגם $latex f$ וגם $latex f^{-1}$ הן גזירות, ונניח שאנחנו יודעים מה הנגזרת של $latex f$; האם אפשר למצוא ממנה את הנגזרת של $latex f^{-1}$? למשל, אנחנו יודעים שהנגזרת של $latex \sin x$ היא מאוד פשוטה: $latex \cos x$. אבל איך אפשר לקבל מזה את הנגזרת של $latex \arcsin x$? אני ממש לא זוכר את הנגזרת הזו בעל פה; בואו נראה אם נצליח לפתח אותה מחדש (כמובן, אנחנו מדברים פה על המקרה של אינפי בסיסי, אבל לא יהיה הבדל אמיתי בינו ובין המקרה הכללי).

הטריק הוא להשתמש בכלל השרשרת. אם $latex f\left(f^{-1}\right)=I$ כאשר $latex I$ היא פונקציית הזהות $latex I\left(x\right)=x$, אז מצבנו טוב כי אנחנו יודעים בדיוק מהו $latex DI$: כבר אמרנו שהנגזרת של פונקציה לינארית היא היא עצמה, כלומר $latex DI\left(a\right)=I$ לכל $latex a$. נסמן $latex b=f^{-1}\left(a\right)$ ועכשיו אפשר להשתמש בכלל השרשרת ולקבל ש-$latex I=Df\left(b\right)Df^{-1}\left(a\right)$. היינו רוצים עכשיו "לחלק" ב-$latex Df\left(b\right)$, אבל צריך להיזהר פה: זה לא מספר שאפשר סתם לחלק בו. זו טרנספורמציה לינארית. "לחלק" בהקשר של טרנספורמציות לינאריות פירושו לכפול בהופכי. לכן אני צריך להניח ש-$latex Df\left(b\right)$ הפיכה בכלל, וזה שקול לכך ש-$latex \det Df\left(b\right)\ne0$ (מי שלא מכיר את $latex \det$ - נו נו נו! אמרתי שצריך אלגברה לינארית. <a href="http://www.gadial.net/2011/11/10/determinants/">הנה הפוסט שלי</a> על דטרמיננטות). במקרה שבו זה נכון, אז נקבל ש-$latex Df^{-1}\left(a\right)=\left(Df\left(b\right)\right)^{-1}$ - אלגנטי ויפה.

כדי להבין את הנוסחה הזו, בואו נפעיל אותה במקרה של $latex \mbox{arcsin}$. עבור פונקציות במשתנה יחיד, זכרו שמה שאנחנו קוראים לו $latex Df\left(a\right)$ הוא בעצם הפונקציה הלינארית $latex f^{\prime}\left(a\right)x$. הפונקציה הזו הפיכה אם ורק אם $latex f^{\prime}\left(a\right)\ne0$ ואז ההופכית שלה היא פשוט $latex \frac{1}{f^{\prime}\left(a\right)}x$. כלומר, הנוסחה במקרה הזה הופכת להיות $latex \left(f^{-1}\right)^{\prime}\left(a\right)=\frac{1}{f^{\prime}\left(b\right)}$. לכן קיבלנו ש-$latex \arcsin^{\prime}\left(a\right)=\frac{1}{\sin^{\prime}\left(\arcsin a\right)}=\frac{1}{\cos\left(\arcsin a\right)}$. כאן אנחנו לכאורה נתקעים, כי איך מחשבים קוסינוס של ארקסינוס? אבל מספיק לזכור את הזהות הבסיסית ביותר שקשורה לסינוסים וקוסינוסים - שהם מתארים נקודה על מעגל היחידה, ולכן $latex \cos^{2}x+\sin^{2}x=1$ לכל $latex x$. מכאן אפשר לחלץ ולקבל ש-$latex \cos x=\sqrt{1-\sin^{2}x}$ עבור $latex -\frac{\pi}{2}\le x\le\frac{\pi}{2}$ (עבור ערכי $latex x$ אחרים צריך לפעמים לקחת את השורש השלילי). כלומר, $latex \cos\left(\arcsin\left(a\right)\right)=\sqrt{1-\sin^{2}\left(\arcsin a\right)}=\sqrt{1-a^{2}}$. מסקנה: $latex \arcsin^{\prime}\left(a\right)=\frac{1}{\sqrt{1-a^{2}}}$.

משהו כאן בבירור לא עובד כאשר $latex a=\pm1$, כלומר כאשר הקלט ל-$latex \sin$ הוא כזה שיחזיר 1 או $latex -1$, כלומר $latex \pm\frac{\pi}{2}$, כלומר הנגזרת שמצאנו עובדת רק עבור $latex -\frac{\pi}{2}&lt;a&lt;\frac{\pi}{2}$ ואילו בשתי נקודות הקצה הללו משהו "מתפוצץ" (מה שמסביר, מנקודת מבט שונה, למה נאלצתי להצטמצם לתחום הזה). מה בעצם השתבש? אלו הן בדיוק נקודות המקסימום והמינימום של $latex \sin$; אחרי $latex \frac{\pi}{2}$, למשל, היא מתחילה "ליפול" בעוד שקודם היא עלתה. זה אומר שהיא כבר לא תהיה חד-חד-ערכית ולכן לא הפיכה, ולכן מראש היינו חייבים להצטמצם עם $latex \arcsin$ לקטע הזה. עכשיו, דרך נחמדה לדמיין פונקציה הופכית במימד אחד היא לקחת את הגרף של הפונקציה ולסובב אותו ב-90 מעלות נגד כיוון השעון, ואז לשקף ביחס לציר $latex y$; אם אתם לא מאמינים תנסו לעשות את זה עם $latex f\left(x\right)=x^{2}$. מן הסתם כשעושים דבר כזה, אז נקודה שבה המשיק של $latex \sin x$ היה אופקי (שיפוע 0) תהפוך לנקודה שבה המשיק של $latex \arcsin x$ יהיה אנכי (שיפוע "אינסוף"), מה שמסביר את הפיצוץ הזה.

אם כן, למדנו דבר מעניין - שאם $latex \det Df\left(a\right)\ne0$ אז הנגזרת של $latex f^{-1}$ ב-$latex a$ שווה ל-$latex \left[Df\left(f^{-1}\left(a\right)\right)\right]^{-1}$. אבל שימו לב לשלוש ההנחות שיש לנו כאן:
<ol>
	<li>$latex Df\left(a\right)$ הפיכה.</li>
	<li>$latex f^{-1}$ קיימת.</li>
	<li>$latex f^{-1}$ גזירה.</li>
</ol>
אם שלוש ההנחות הללו התקיימו, אנחנו יודעים לחשב את הנגזרת של $latex f^{-1}$. אבל האמת היא שמתקיים פה קסם - אם $latex f$ היא גזירה ברציפות (כלומר, בעלת נגזרת רציפה) אז די בכך ש-$latex Df\left(a\right)$ תהיה הפיכה על מנת להבטיח ש<strong>קיימת</strong> ל-$latex f$ הופכית בסביבה של $latex a$, ושההופכית הזו תהיה גזירה (למעשה, אם $latex f$ גזירה ברציפות $latex r$ פעמים, כך גם הנגזרת של ההופכית). הקסם הזה, שנקרא <strong>משפט הפונקציה ההפוכה</strong>, הוא המשפט הלא טריוויאלי הראשון שאנחנו הולכים לראות, ומייד אחר כך נראה שימוש יפה שלו - <strong>משפט הפונקציות הסתומות</strong>. מכיוון שזה לא הולך להיות קצר או פשוט, נחכה עם זה (כולל הניסוח הפורמלי) עד לפוסט הבא. לעת עתה, טיזר - בואו נבין אינטואיטיבית למה זה עובד כמעט מייד בפונקציות $latex f:\mathbb{R}\to\mathbb{R}$. אם $latex f^{\prime}\left(a\right)\ne0$ והנגזרת רציפה, זה אומר שיש סביבה של $latex a$ שבה $latex f^{\prime}\left(a\right)$ נמצאת כולה מעל 0 או מתחת ל-0. במקרה הראשון זה אומר ש-$latex f$ עולה בסביבה הזו, ובמקרה השני - שהיא יורדת. בכל מקרה, היא <strong>מונוטונית</strong>. פונקציה מונוטונית היא, כמובן, הפיכה (עדיין צריך להוכיח שהיא גזירה, אבל לא נדבר על זה פה). כמובן שעבור פונקציות במימד גבוה יותר העסק כבר לא יהיה כל כך פשוט כי זה שהנגזרת היא טרנספורמציה לינארית הפיכה לא יגרור שהפונקציה היא מונוטונית; בפוסט הבא ניכנס לפרטים המלוכלכים.
