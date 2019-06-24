---
id: 3057
title: "בסיסים אורתונורמליים במרחבי הילברט"
date: 2014-02-19 17:28:45
layout: post
categories: 
  - אלגברה לינארית
  - אנליזה מתמטית
tags: 
  - בסיס אורתונורמלי
  - מרחב הילברט
---
<a href="http://www.gadial.net/2014/02/09/hilbert_spaces/">בפוסט הקודם</a> כתבתי עוד ועוד מילים במקום להגיד "מרחב הילברט הוא מרחב מכפלה פנימית שלם ביחס למטריקה שמושרת מהמכפלה הפנימית שלו". בעיקר ניסיתי לדבר על ההבדל שבין מרחב סוף-ממדי למרחב אינסוף ממדי, שמתבטא בכך שבמרחב אינסוף-ממדי יותר יעיל לנו לפעמים לדבר על מושג של "בסיס" שלא זהה למושג הסטנדרטי. בפוסט הזה אני רוצה להרחיב על כך.

בואו נתחיל מהדוגמה שהיא האבטיפוס. הגדרתי את המרחב $latex l^{2}$ בתור מרחב וקטורי מעל $latex \mathbb{C}$ שכולל את כל הסדרות מהצורה $latex a=a_{1},a_{2},a_{3},\dots$ של מספרים מרוכבים, שמקיימות $latex \sum_{n=1}^{\infty}\left\|a_{n}\right\|^{2}&lt;\infty$. על המרחב הזה הגדרתי את המכפלה הפנימית $latex \left\langle a,b\right\rangle =\sum_{n=1}^{\infty}a_{n}\overline{b_{n}}$. כמובן, לא הוכחתי שכל ההגדרות הללו עובדות: למשל, שסכום של שתי סדרות עדיין מקיים את הדרישה על סכום הערכים המוחלטים. ההוכחות לא מסובכות אבל כן טכניות ולכן אני בורח מהן, לפחות לבינתיים.

אז בואו קבלו את קיומו של $latex l^{2}$ כנתון, ובוא נתבונן בוקטורים הבאים: $latex e_{n}$ יסמן את הוקטור שהוא סדרה שכולה 0-ים פרט למקום ה-$latex n$-י, שהוא 1. בבירור $latex e_{n}\in l^{2}$ לכל $latex n$, ומתקיים $latex \left\langle e_{i},e_{j}\right\rangle =\delta_{ij}$, כלומר כל ה-$latex e_{n}$-ים אורתוגונליים זה לזה, ו-$latex \\|e_{n}\\|=1$ לכל $latex n$. זה מזכיר את מה שקראתי לו "בסיס אורתונורמלי" במרחבים סוף-ממדיים, אבל כמובן שזה לא בסיס במובן הרגיל של המילה, כי צירוף לינארי של מספר סופי של $latex e_{n}$-ים שכאלו יניב וקטור שכל הכניסות שלו פרט למספר סופי הן 0, וב-$latex l^{2}$ יש וקטורים רבים שאינם כאלו. אבל מה כן נכון? שאם $latex a$ הוא וקטור כלשהו ב-$latex l^{2}$, אז ניתן לכתוב:

$latex a=\sum_{n=1}^{\infty}a_{n}e_{n}$

אבל צריך קצת להיזהר עם כתיבת שוויונות כאלו - באיזה מובן יש כאן שוויון? באיזה מובן יש משמעות לסכום האינסופי הזה? ובכן, בפוסט הקודם דיברתי על זה - השוויון הזה הוא דרך אחרת לומר ש-$latex \lim_{n\to\infty}\\|a-\sum_{k=1}^{n}a_{k}e_{k}\\|=0$. עכשיו, שימו לב למקדמים של הצירוף הלינארי - ה-$latex a_{k}$-ים. מאיפה ידעתי לכתוב אותם? ובכן, אם אתם זוכרים מה קרה במרחבים סוף-ממדיים, ראינו שם שאם יש לנו בסיס אורתונורמלי כלשהו $latex e_{1},\dots,e_{n}$ ויש לנו וקטור $latex a$ במרחב, אז $latex a=\sum_{k=1}^{n}\left\langle a,e_{k}\right\rangle e_{k}$. כלומר, המקדמים של $latex a$ בצירוף הלינארי של הבסיס האורתונורמלי הם בדיוק המכפלה הפנימית של $latex a$ באיברים של אותו בסיס. במקרה הספציפי של $latex l^{2}$, הבסיס $latex e_{n}$ שהצגתי והוקטור $latex a=\left(a_{1},a_{2},a_{3},\dots\right)$, קל לראות שעל פי הגדרה $latex \left\langle a,e_{n}\right\rangle =a_{n}$.

כעת נשאלת השאלה - האם זה עובד באופן כללי? אם אנחנו לוקחים סדרה אינסופית כלשהי $latex e_{1},e_{2},\dots$ של וקטורים אורתונורמליים במרחב הילברט $latex \mathcal{H}$ כלשהו, ולוקחים $latex a\in\mathcal{H}$, האם נקבל ש-$latex a=\sum_{n=1}^{\infty}\left\langle a,e_{n}\right\rangle e_{n}$? ובכן, באסה, לא. חסר לנו עדיין משהו שיהפוך את הסדרה של הוקטורים האורתונורמליים ל"בסיס אינסופי". אבל לפני שנדבר עליו, בואו ננסה להעריך עד כמה השוויון $latex a=\sum_{n=1}^{\infty}\left\langle a,e_{n}\right\rangle e_{n}$ יכול להיכשל. לשם כך אני הולך להציג את מה שמכונים שוויון ואי-שוויון <strong>בסל</strong>: הם עוסקים בנסיון לקרב וקטור $latex a$ על ידי קבוצה <strong>סופית</strong> של וקטורים אורתונורמליים. נתחיל מהשוויון:

$latex \\|a-\sum_{k=1}^{n}\left\langle a,e_{k}\right\rangle e_{k}\\|^{2}=\\|a\\|^{2}-\sum_{k=1}^{n}\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}$

כדי להבין מה קורה פה, בואו ניזכר מה זה $latex \sum_{k=1}^{n}\left\langle a,e_{k}\right\rangle e_{k}$: אנחנו לוקחים את המרחב שנפרש על ידי הוקטורים $latex \left\{ e_{1},\dots,e_{n}\right\} $ ומטילים את $latex a$ עליו. ההטלה הזו מיוצגת על ידי הסכום, ולכן $latex a-\sum_{k=1}^{n}\left\langle a,e_{k}\right\rangle e_{k}$ הוא הרכיב שנותר מ-$latex a$ אחרי שקיזזנו את מה שהוטל על המרחב שנפרש על ידי הוקטורים האורתונורמליים. שוויון בסל אומר מה הגודל של ה"מה שנשאר" הזה - הגודל בריבוע שווה לגודל של $latex a$ בריבוע, פחות סכום הריבועים של המקדמים של הרכיב המוטל של $latex a$.

ההוכחה היא סטנדרטית למדי ומבוססת בעיקר על סדרה של שוויונות, אבל אני רוצה להראות אותה בכל זאת בגלל שטמונה בה תובנה נוספת על כך ש-$latex \left\langle a,e_{k}\right\rangle $ הם המקדמים ה"נכונים" לבחור בהם כשאנחנו רוצים לפרק את $latex a$ לגורמים.

אז מה שנעשה הוא זה: נסתכל על צירוף לינארי <strong>כלשהו</strong>, $latex \sum_{k=1}^{n}\alpha_{k}e_{k}$ וננסה לחשב ישירות מההגדרה את גודל הנורמה במקרה שלו:

$latex \\|a-\sum_{k=1}^{n}\alpha_{k}e_{k}\\|^{2}=\left\langle a-\sum_{k=1}^{n}\alpha_{k}e_{k},a-\sum_{k=1}^{n}\alpha_{k}e_{k}\right\rangle $

$latex =\left\langle a,a\right\rangle -\left\langle a,\sum_{k=1}^{n}\alpha_{k}e_{k}\right\rangle -\left\langle \sum_{k=1}^{n}\alpha_{k}e_{k},a\right\rangle +\left\langle \sum_{k=1}^{n}\alpha_{k}e_{k},\sum_{k=1}^{n}\alpha_{k}e_{k}\right\rangle $

$latex =\\|a\\|^{2}-\left\langle a,\sum_{k=1}^{n}\alpha_{k}e_{k}\right\rangle -\left\langle \sum_{k=1}^{n}\alpha_{k}e_{k},a\right\rangle +\sum_{k=1}^{n}\alpha_{k}\overline{\alpha_{k}}$

המעבר האחרון חיסל את המכפלה הפנימית הימנית על ידי שימוש באורתונורמליות של $latex \left\{ e_{1},\dots,e_{n}\right\} $. עכשיו נשתמש בלינאריות של מכפלה פנימית ונקבל:

$latex =\\|a\\|^{2}-\sum_{k=1}^{n}\overline{\alpha_{k}}\left\langle a,e_{k}\right\rangle -\sum_{k=1}^{n}\alpha_{k}\overline{\left\langle a,e_{k}\right\rangle }+\sum_{k=1}^{n}\alpha_{k}\overline{\alpha_{k}}$

$latex =\\|a\\|^{2}+\sum_{k=1}^{n}\left[-\overline{\alpha_{k}}\left\langle a,e_{k}\right\rangle -\alpha_{k}\overline{\left\langle a,e_{k}\right\rangle }+\alpha_{k}\overline{\alpha_{k}}\right]$

$latex =\\|a\\|^{2}-\sum\left\langle a,e_{k}\right\rangle \overline{\left\langle a,e_{k}\right\rangle }+\sum\left[\left\langle a,e_{k}\right\rangle \overline{\left\langle a,e_{k}\right\rangle }-\overline{\alpha_{k}}\left\langle a,e_{k}\right\rangle -\alpha_{k}\overline{\left\langle a,e_{k}\right\rangle }+\alpha_{k}\overline{\alpha_{k}}\right]$

$latex =\\|a\\|^{2}-\sum\left\langle a,e_{k}\right\rangle \overline{\left\langle a,e_{k}\right\rangle }+\sum\left[\left(\left\langle a,e_{k}\right\rangle -\alpha_{k}\right)\overline{\left(\left\langle a,e_{k}\right\rangle -\alpha_{k}\right)}\right]$

$latex =\\|a\\|^{2}-\sum\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}+\sum\left\|\left\langle a,e_{k}\right\rangle -\alpha_{k}\right\|^{2}$

בשביל מה זה היה טוב, תשאלו? ובכן, כעת בבירור הערך המינימלי של הביטוי הזה מתקבל כאשר $latex \alpha_{k}=\left\langle a,e_{k}\right\rangle $, ובמקרה הזה נקבל את השוויון $latex \\|a-\sum_{k=1}^{n}\alpha_{k}e_{k}\\|^{2}=\\|a\\|^{2}-\sum\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}$ שרצינו. כזכור, המקדמים $latex \left\langle a,e_{k}\right\rangle $ הללו נקראים <strong>מקדמי פורייה</strong> של $latex a$, על פי הבסיס $latex \left(e_{n}\right)$.

כעת לאי השוויון, שהוא מפורסם יותר: מכיוון שבשוויון לעיל אגף שמאל תמיד חיובי, הרי ש-$latex \\|a\\|^{2}-\sum\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}\ge0$, ועל ידי העברת אגפים נקבל ש-$latex \sum_{k=1}^{n}\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}\le\\|a\\|^{2}$. אי השוויון הזה תקף לכל $latex n$, ולכן נובעת ממנו המסקנה הבאה:

$latex \sum_{k=1}^{\infty}\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}\le\\|a\\|^{2}$

ההוכחה סטנדרטית: אם מניחים בשלילה שהשוויון אינו נכון, אז יהיה סכום חלקי כלשהו שבעצמו כבר עובר את $latex \\|a\\|^{2}$ וזו תהיה סתירה לנתון.

עכשיו, מכיוון שהטור חסום, האיבר הכללי שלו בהכרח שואף לאפס, כלומר $latex \left\langle a,e_{n}\right\rangle \to0$, וזה נכון לכל $latex a$. התכונה הזו, של "התכנסות בעזרת מכפלה פנימית", היא כל כך מעניינת שנותנים לה שם: <strong>התכנסות חלשה</strong>. פורמלית, אם יש לנו סדרה $latex x_{1},x_{2},x_{3},\dots$, אז מסמנים $latex x_{n}\overset{w}{\to x}$ אם מתקיים ש-$latex \left\langle x_{n}-x,a\right\rangle =0$ לכל $latex a$ במרחב. במקרה שלנו קיבלנו ש-$latex e_{n}\overset{w}{\to0}$.

השם "התכנסות חלשה" נובע מכך שהתכנסות "רגילה", כלומר $latex \\|x-x_{n}\\|\to0$, גוררת את ההתכנסות החלשה: בואו נניח לרגע שמתקיים $latex \lim_{n\to\infty}\\|x_{n}-x\\|=0$. אני רוצה להראות שזה גורר את הסוג השני של התכנסות, כלומר ש- $latex \left\langle x_{n}-x,a\right\rangle \to0$. כדי להראות את זה, בואו נשתמש ב<strong>אי-שוויון קושי שוורץ</strong>: $latex \left\|\left\langle a,b\right\rangle \right\|\le\\|a\\|\\|b\\|$. אי השוויון הזה עובד בכל מרחב מכפלה פנימית ואני מתחמק מלהוכיח אותו כרגע, אבל בואו נראה מה הוא נותן לנו כאן:

$latex \left\|\left\langle x_{n}-x,a\right\rangle \right\|\le\\|x_{n}-x\\|\\|a\\|$

עכשיו, $latex \\|a\\|$ הוא קבוע, ואילו $latex \\|x_{n}-x\\|\to0$, ולכן $latex \left\|\left\langle x_{n}-x,a\right\rangle \right\|\to0$, כלומר $latex \left\langle x_{n}-x,a\right\rangle \to0$, וזאת בלי קשר לשאלה מהו $latex a$.

כדי לראות ששני סוגי ההתכנסויות אינם זהים, מספיק לשים לב לכך שעבור הסדרה האורתונורמלית שלנו, $latex \\|e_{n}\\|=1$ לכל $latex n$ ולכן $latex \\|e_{n}-0\\|$ בוודאי שאינו שואף ל-0. כלומר, ה-$latex e_{n}$-ים מתכנסים חלש לאפס אך לא חזק.

עכשיו, אי השוויון $latex \sum_{k=1}^{\infty}\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}\le\\|a\\|^{2}$ בעצם אומר לנו שטור מקדמי הפורייה של $latex a$ מתכנס תמיד. האם אפשר להסיק מכך שהטור $latex \sum_{n=1}^{\infty}\left\langle a,e_{n}\right\rangle e_{n}$ גם כן מתכנס תמיד? ובכן, אוף, לא. אבל מה שכן קל להראות, עם טכניקות דומות לאלו שהשתמשנו בהן עד כה, הוא שכאשר אנחנו במרחב הילברט, הטור אכן מתכנס תמיד. מה שעושים הוא להראות שבאופן כללי, $latex \sum_{k=1}^{n}\alpha_{n}e_{n}$ היא סדרת קושי, ולהשתמש בשלמות של המרחב כדי להסיק שהיא מתכנסת, וזאת כאשר המקדמים $latex \alpha_{n}$ מקיימים ש-$latex \sum_{n=1}^{\infty}\left\|\alpha_{n}\right\|^{2}&lt;\infty$. כמו כן, לא קשה להראות שאם הטור מתכנס, אז שוויון פרסבל שהצגתי בפוסט הקודם (עבור סכום סופי של וקטורים אורתונורמליים) מתקיים גם כאן, כלומר $latex \\|\sum_{n=1}^{\infty}\alpha_{n}e_{n}\\|^{2}=\sum_{n=1}^{\infty}\left\|\alpha_{n}\right\|^{2}$.

נפלא, אז האם במרחב הילברט מתקיים $latex a=\sum_{n=1}^{\infty}\left\langle a,e_{n}\right\rangle e_{n}$? ובכן, לא, עדיין לא! הטור באגף ימין עשוי להתכנס, אבל לא מובטח שיתכנס אל $latex a$!

בואו נראה דוגמה. נסתכל על המרחב $latex \mathcal{H}=L^{2}\left(\left[-\pi,\pi\right]\right)$, כלומר פונקציות $latex f:\left[-\pi,\pi\right]\to\mathbb{C}$ עם מכפלה פנימית שמוגדרת על ידי אינטגרל. נגדיר $latex e_{n}=\frac{1}{\sqrt{\pi}}\sin nx$. כדי לראות שמדובר על סדרה של וקטורים אורתונורמליים נצטרך לעבוד טיפה. ראשית, המכפלה הפנימית של וקטור עם עצמו:

$latex \left\langle e_{n},e_{n}\right\rangle =\frac{1}{\pi}\int_{-\pi}^{\pi}\sin^{2}nxdx=\frac{1}{\pi}\int_{-\pi}^{\pi}\frac{1-\cos2nx}{2}dx=$

$latex =\frac{1}{\pi}\left[\frac{x-\frac{1}{2n}\sin2nx}{2}\right]_{-\pi}^{\pi}=\frac{1}{\pi}\left(\frac{\pi+\pi}{2}\right)=1$

כאן השתמשנו בכך שסינוס של כפולה שלמה של $latex \pi$ הוא אפס. כמו כן, אם $latex n\ne m$ אז נקבל

$latex \left\langle e_{n},e_{m}\right\rangle =\frac{1}{\pi}\int_{-\pi}^{\pi}\sin nx\sin mxdx=\frac{1}{\pi}\int_{-\pi}^{\pi}\frac{\cos\left(n-m\right)x-\cos\left(n+m\right)x}{2}dx=0$

כאן הרשיתי לעצמי לקפוץ ל-0 מהר, כי כבר ברור מה יקרה - שני הקוסינוסים יהפכו אחרי אינטגרציה לסינוסים וכשנציב בהם $latex \pi$ הם יתאפסו. הסיכוי היחיד של הביטוי להיות שונה מאפס הוא אכן כאשר $latex n=m$ ואז ה-$latex \cos\left(n-m\right)x$ הופך ל-1.

אז יש לנו וקטורים אורתונורמליים. עכשיו בואו ננסה לקחת את הוקטור $latex a=\cos x$ ולהציג אותו כסכום:

$latex \sum_{n=1}^{\infty}\left\langle a,e_{n}\right\rangle e_{n}=\frac{\sin nx}{\sqrt{\pi}}\cdot\sum_{n=1}^{\infty}\frac{1}{\sqrt{\pi}}\int_{-\pi}^{\pi}\cos x\sin nxdx$

$latex =\frac{\sin nx}{\sqrt{\pi}}\cdot\sum_{n=1}^{\infty}\frac{1}{\sqrt{\pi}}\int_{-\pi}^{\pi}\frac{\sin\left(n+1\right)x+\sin\left(n-1\right)x}{2}dx=0$

כאן אפס מגיע הרבה יותר בקלות - פשוט תוך הסתמכות על כך ש-$latex \sin$ היא פונקציה אי זוגית ($latex f\left(-x\right)=-f\left(x\right)$) ושאינטגרציה של פונקציות כאלו בתחום סימטרי סביב 0 נותנת 0 תמיד. אם כן, קיבלנו ש-$latex \sum_{n=1}^{\infty}\left\langle \cos x,e_{n}\right\rangle e_{n}$ שווה לאפס, במקום ל-$latex \cos x$. הממממ. אז מה עוד חסר?

ראשית, בואו נגדיר את מה שאנחנו רוצים שיקרה: סדרה - של וקטורים אורתונורמליים $latex e_{1},e_{2},e_{3},\dots$ נקראת <strong>שלמה</strong> אם $latex \sum_{n=1}^{\infty}\left\langle a,e_{n}\right\rangle e_{n}=a$ לכל $latex a$ במרחב. בפרט נובע מכך שלכל וקטור במרחב יש דרך הצגה <strong>יחידה</strong> כסכום אינסופי של אברי הסדרה: כי נניח ש-$latex \sum_{n=1}^{\infty}\alpha_{n}e_{n}=\sum_{n=1}^{\infty}\beta_{n}e_{n}$, אז נחסר את האגפים ונקבל $latex 0=\sum_{n=1}^{\infty}\left(\alpha_{n}-\beta_{n}\right)e_{n}$ ומשוויון פרסבל נסיק ש-$latex 0=\sum_{n=1}^{\infty}\left\|\alpha_{n}-\beta_{n}\right\|^{2}$, מה שיכול לקרות רק אם $latex \alpha_{n}=\beta_{n}$ לכל $latex n$. תכונת ה"קיום ויחידות" הזו מאוד דומה למה שקורה עם בסיס רגיל, רק ששם מדובר על צירוף לינארי סופי, לא אינסופי; עדיין, זה מספיק כדי שנשתמש שנקרא לסדרה אורתונורמלית שלמה "בסיס אורתונורמלי" (כשלכולם ברור מההקשר שזה לא בסיס של צירוף לינארי סופי).

טוב, ההגדרה של סדרה אורתונורמלית שלמה עדיין לא אומרת שיש לנו קריטריון קל לבדיקה שיכריע שסדרת וקטורים נתונה היא שלמה. בואו נחשוב לרגע - איך אפשר לזהות שקבוצה אורתונורמלית של וקטורים היא בסיס למרחב וקטורי ממימד סופי? ובכן, וקטורים אורתוגונליים הם בלתי תלויים לינארית, אז רק צריך להראות שזו קבוצה פורשת; אם היא לא פורשת, אז יש איזה שהוא וקטור שלא נפרש על ידי אברי הקבוצה, ולכן אפשר לפרק אותו לשני רכיבים - רכיב אחד של ההיטל שלו על אברי הקבוצה, ורכיב שני שאורתוגונלי לכל אברי הקבוצה. במילים אחרות, הקבוצה לא פורשת רק אם קיים וקטור שאורתוגונלי לכל אבריה אבל הוא איננו וקטור האפס.

ובכן, הקריטריון הזה עובד גם עבור סדרות אינסופיות. פורמלית, אם $latex e_{1},e_{2},\dots$ היא סדרה אורתונורמלית בעלת התכונה שאם $latex \left\langle a,e_{n}\right\rangle =0$ לכל $latex e_{n}$ בסדרה, אז בהכרח $latex a=0$ - אז במקרה כזה, $latex e_{1},e_{2},\dots$ היא סדרה אורתונורמלית שלמה. ברור, אגב, שזה חייב להתרחש אם הסדרה היא שלמה, כי אז לכל $latex a$ מתקיים $latex a=\sum\left\langle a,e_{n}\right\rangle e_{n}$ כך שאם כל המקדמים הם 0 נובע מכך שהסכום הוא 0. השאלה היא רק למה התכונה של המכפלה הפנימית הזו גוררת שהסדרה היא אכן שלמה.

אוקיי, אז בואו ניקח איזה $latex a$ ונגדיר $latex b=\sum\left\langle a,e_{n}\right\rangle e_{n}$. כזכור, $latex b$ קיים, אבל אם הסדרה אינה שלמה קיימת הסכנה שהוא יהיה שונה מ-$latex a$. אם נראה ש-$latex a-b=0$, סיימנו; בגלל התכונה שלעיל, מספיק להראות ש-$latex \left\langle a-b,e_{n}\right\rangle =0$ לכל $latex n$. בואו נפתח את החישוב של המכפלה הפנימית הזו:

$latex \left\langle a-b,e_{n}\right\rangle =\left\langle a,e_{n}\right\rangle -\left\langle \sum\left\langle a,e_{k}\right\rangle e_{k},e_{n}\right\rangle =\left\langle a,e_{n}\right\rangle -\sum\left\langle a,e_{k}\right\rangle \delta_{nk}$

$latex =\left\langle a,e_{n}\right\rangle -\left\langle a,e_{n}\right\rangle =0$

וזה מסיים את זה.

למעשה, אפשר לתת עוד קריטריון שקול לכך שסדרה אורתונורמלית היא שלמה - שוויון פרסבל. ניסחתי אותו כאן כבר בתור $latex \\|\sum_{n=1}^{\infty}\alpha_{n}e_{n}\\|^{2}=\sum_{n=1}^{\infty}\left\|\alpha_{n}\right\|^{2}$ - כלומר, בלי להתחייב על מהם המקדמים $latex \alpha_{k}$ - אבל אפשר עכשיו לנסח אותו שוב בצורה המוכרת יותר שלו, שתקפה רק עבור סדרה אורתונורמלית שלמה:

$latex \\|a\\|^{2}=\sum_{n=1}^{\infty}\left\|\left\langle a,e_{n}\right\rangle \right\|^{2}$.

לא בכל מרחב הילברט יש סדרה אורתונורמלית שלמה; מרחבים שבהם יש כזו נקראים <strong>ספרביליים</strong>. עכשיו, בואו ניזכר לרגע במה שקרה באלגברה לינארית סוף-ממדית: ראינו שכל מרחב וקטורי ממימד $latex n$ איזומורפי ל-$latex \mathbb{C}^{n}$ - האיזומורפיזם כלל בחירת בסיס למרחב והתאמה לכל וקטור במרחב של וקטור הקואורדינטות שלו על פי הבסיס. בואו נראה עכשיו שאותה תוצאה עובדת גם עבור מרחבי הילברט ספרביליים (ובפרט עבור כל מרחבי המכפלה הפנימית ממימד סופי): נראה שכל מרחב כזה ממימד $latex n$ איזומורפי ל-$latex \mathbb{C}^{n}$ כמרחב מכפלה פנימית. ולמי יהיו איזומורפיים מרחבי הילברט הספרביליים האינסוף-ממדיים? נסו לנחש (זה לא קשה) בזמן שאני מגדיר פורמלית מה זה אומר איזומורפיזם כאן: אם $latex U,V$ הם שני מרחבי מכפלה פנימית מעל $latex \mathbb{C}$ (עזבו את $latex \mathbb{R}$, אין לי כוח לנסח כל משפט פעמיים) אז פונקציה $latex T:U\to V$ היא איזומורפיזם שלהם אם היא לינארית ($latex T\left(a+b\right)=T\left(a+b\right)$ ו-$latex T\left(\lambda a\right)=\lambda T\left(a\right)$), חד-חד-ערכית ועל, ומשמרת את המכפלה הפנימית, כלומר $latex \left\langle T\left(a\right),T\left(b\right)\right\rangle =\left\langle a,b\right\rangle $.

אז בואו ניקח מרחב מכפלה פנימית ממימד $latex n$. הוא סוף ממדי, ולכן יש לו בסיס רגיל. את הבסיס הרגיל אפשר לגרם-שמדט ולקבל בסיס אורתונורמלי $latex \left\{ e_{1},\dots,e_{n}\right\} $. עכשיו נגדיר את $latex T$ באופן המתבקש, על ידי שליחת כל איבר לוקטור הקואורדינטות שלו, דהיינו $latex T\left(a\right)=\left(\left\langle a,e_{1}\right\rangle ,\dots,\left\langle a,e_{n}\right\rangle \right)$. הלינאריות של $latex T$ נובעת מייד מתכונות הלינאריות של מכפלה פנימית. כדי להראות ש-$latex T$ חח"ע ועל מספיק להראות שהגרעין שלה הוא 0, וזה נובע מכך שאם $latex \left\langle a,e_{i}\right\rangle =0$ לכל $latex 1\le i\le n$ אז $latex a=0$ (פשוט בגלל ש-$latex a=\sum_{i=1}^{n}\left\langle a,e_{i}\right\rangle e_{i}$). לבסוף, $latex \left\langle a,b\right\rangle =\left\langle \sum\left\langle a,e_{i}\right\rangle e_{i},\sum\left\langle b,e_{j}\right\rangle e_{j}\right\rangle =\sum\left\langle a,e_{i}\right\rangle \overline{\left\langle b,e_{i}\right\rangle }$ ו-

$latex \left\langle T\left(a\right),T\left(b\right)\right\rangle =\left\langle \left(\left\langle a,e_{1}\right\rangle ,\dots,\left\langle a,e_{n}\right\rangle \right),\left(\left\langle b,e_{1}\right\rangle ,\dots,\left\langle b,e_{n}\right\rangle \right)\right\rangle =\sum\left\langle a,e_{i}\right\rangle \overline{\left\langle b,e_{i}\right\rangle }$

(תזכרו שבמקרה השני, המכפלה הפנימית היא הסטנדרטית על $latex \mathbb{C}^{n}$).

ומה קורה במקרה שבו $latex \mathcal{H}$ לא סוף ממדי? עדיין מתבקש לשלוח איבר לוקטור הקואורדינטות שלו, כלומר לסדרה אינסופית של מספרים מרוכבים. זה מזכיר את $latex l^{2}$, אבל כדי שההעתקה הזו באמת תהיה מ-$latex \mathcal{H}$ אל $latex l^{2}$, צריך להתקיים שסדרת הקואורדינטות הזו תקיים את התנאי שמגדיר איברים של $latex l^{2}$, שהוא כזכור שיתקיים $latex \sum\left\|a_{n}\right\|^{2}&lt;\infty$. למרבה המזל, כבר ראינו את זה בפוסט: $latex \sum_{k=1}^{\infty}\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}\le\\|a\\|^{2}$, ולכן אם $latex a\in\mathcal{H}$ הוא איבר כלשהו, אז יש לנו חסם על $latex \sum_{k=1}^{\infty}\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}$ - הנורמה של $latex a$, שהיא תמיד סופית (כך היא מוגדרת). מכאן מקבלים ש-$latex T\left(a\right)=\left(\left\langle a,e_{1}\right\rangle ,\left\langle a,e_{2}\right\rangle ,\dots\right)$ היא העתקה חוקית, וקל להראות שהיא לינארית ומשמרת נורמה כמו קודם. המסקנה היא שכל מרחב הילברט אינסוף ממדי ספרבילי הוא איזומורפי ל-$latex l^{2}$, מה שהופך את $latex l^{2}$ ל"דוגמה קנונית למרחב הילברט".

עכשיו בואו נדבר על $latex L^{2}$. ראינו כבר קבוצה שמנסה להיות סדרה אורתונורמלית שלמה ב-$latex L^{2}\left(\left[-\pi,\pi\right]\right)$ ונכשלת בצורה מבישה. האם קיימת סדרה אורתונורמלית שלמה, כלומר האם המרחב הוא ספרבילי? התשובה חיובית, והסדרה האורתונורמלית שאני רוצה להראות היא חשובה ביותר: היא בעצם מהווה מקרה פרטי חשוב של מה שנקרא <strong>טורי פורייה</strong>.

קודם ניסינו את מזלנו עם סינוסים. זו הייתה בחירה טובה, כי קל להראות שהם אורתונורמליים; מה שהיה חסר לנו בשביל סדרה שלמה הוא גם קוסינוסים. אבל למעשה, אין צורך לדבר על סינוסים וקוסינוסים בנפרד אלו מאלו: אפשר לנצל את זה שהמרחב שלנו הוא מעל המרוכבים, $latex \mathbb{C}$, ושבמרוכבים יש פונקציה שמאחדת גם את סינוס וגם את קוסינוס - האקספוננט המרוכב. גם למי שלא מכיר את זה, מספיק לראות את הנוסחה הבאה, "נוסחת אוילר": $latex e^{i\theta}=\cos\theta+i\sin\theta$. הוכחה של נכונות הנוסחה היא עניין לפוסט באנליזה מרוכבת - בינתיים תאמינו לי שזה עובד.

אברי הסדרה שלנו יהיו האיברים הבאים: $latex \varphi_{n}\left(x\right)=\frac{1}{\sqrt{2\pi}}e^{inx}$ (אני משתמש ב-$latex \varphi$ כי $latex e$ תפוס על ידי הקבוע המתמטי), כאשר $latex n$ הוא מספר <strong>שלם</strong>, כלומר אנו מרשים גם מספרים שליליים. הסיבה להכפלה ב-$latex \frac{1}{\sqrt{2\pi}}$ היא כדי שנקבל שהנורמה של כל איבר היא 1 (תכף נעשה את החישוב) ואנחנו צריכים $latex n$-ים שליליים אחרת הסדרה לא תהיה שלמה. כמובן, יש משהו קצת מוזר בכך שהסדרה שלנו אינסופית "לשני הכיוונים", אבל זו בסך הכל שיטת סימון קצת שונה שנועדה להקל עלינו; הייתי יכול באותה המידה להגדיר את הסדרה כך:

$latex \varphi_{n}\left(x\right)=\begin{cases}\frac{1}{\sqrt{2\pi}}e^{ikx} &amp; n=2k\\\frac{1}{\sqrt{2\pi}}e^{-ikx} &amp; n=2k+1\end{cases}$

אבל זה יותר מסובך מבחינת הסימונים, ומתמטיקאים שונאים דברים כאלו, ואני מסכים איתם.

בואו נראה שמדובר על סדרה אורתונורמלית. ראשית, מכפלה של איבר בעצמו:

$latex \left\langle \varphi_{n},\varphi_{n}\right\rangle =\int_{-\pi}^{\pi}\frac{1}{\sqrt{2\pi}}e^{inx}\cdot\frac{1}{\sqrt{2\pi}}e^{-inx}dx=\frac{1}{2\pi}\int_{-\pi}^{\pi}1dx=1$

כעת, מכפלה של שני איברים שונים:

$latex \left\langle \varphi_{n},\varphi_{m}\right\rangle =\int_{-\pi}^{\pi}\frac{1}{\sqrt{2\pi}}e^{inx}\cdot\frac{1}{\sqrt{2\pi}}e^{-imx}dx=\frac{1}{2\pi}\int_{-\pi}^{\pi}e^{i\left(n-m\right)x}dx$

$latex =\frac{1}{2\pi}\left[\frac{1}{i\left(n-m\right)}e^{i\left(n-m\right)x}\right]_{-\pi}^{\pi}=\frac{e^{i\left(n-m\right)\pi}-e^{-i\left(n-m\right)\pi}}{2\pi\left(i\left(n-m\right)\right)}=0$

המעבר האחרון נובע מכך ש-$latex e^{i\left(n-m\right)\pi}=\cos\left(\pi\left(n-m\right)\right)$ (מנוסחת אוילר) ו-$latex e^{-i\left(n-m\right)\pi}=\cos\left(\pi\left(m-n\right)\right)=\cos\left(\pi\left(n-m\right)\right)$ (מכך שקוסינוס היא פונקציה זוגית - סימטרית ביחס לציר $latex x=0$).

מה נשאר? להראות שזו סדרה אורתונורמלית שלמה. כלומר, אם להשתמש בטריק שראינו, להוכיח שאם $latex \left\langle \varphi_{n},f\right\rangle =0$ לכל $latex n$, אז $latex f=0$. אבל עם ההוכחה הזו נחכה קצת לפוסט ייעודי שידבר על טורי פורייה.
