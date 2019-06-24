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

בואו נתחיל מהדוגמה שהיא האבטיפוס. הגדרתי את המרחב {::nomarkdown}\( l^{2}\){:/nomarkdown} בתור מרחב וקטורי מעל {::nomarkdown}\( \mathbb{C}\){:/nomarkdown} שכולל את כל הסדרות מהצורה {::nomarkdown}\( a=a_{1},a_{2},a_{3},\dots\){:/nomarkdown} של מספרים מרוכבים, שמקיימות {::nomarkdown}\( \sum_{n=1}^{\infty}\left\|a_{n}\right\|^{2}&lt;\infty\){:/nomarkdown}. על המרחב הזה הגדרתי את המכפלה הפנימית {::nomarkdown}\( \left\langle a,b\right\rangle =\sum_{n=1}^{\infty}a_{n}\overline{b_{n}}\){:/nomarkdown}. כמובן, לא הוכחתי שכל ההגדרות הללו עובדות: למשל, שסכום של שתי סדרות עדיין מקיים את הדרישה על סכום הערכים המוחלטים. ההוכחות לא מסובכות אבל כן טכניות ולכן אני בורח מהן, לפחות לבינתיים.

אז בואו קבלו את קיומו של {::nomarkdown}\( l^{2}\){:/nomarkdown} כנתון, ובוא נתבונן בוקטורים הבאים: {::nomarkdown}\( e_{n}\){:/nomarkdown} יסמן את הוקטור שהוא סדרה שכולה 0-ים פרט למקום ה-{::nomarkdown}\( n\){:/nomarkdown}-י, שהוא 1. בבירור {::nomarkdown}\( e_{n}\in l^{2}\){:/nomarkdown} לכל {::nomarkdown}\( n\){:/nomarkdown}, ומתקיים {::nomarkdown}\( \left\langle e_{i},e_{j}\right\rangle =\delta_{ij}\){:/nomarkdown}, כלומר כל ה-{::nomarkdown}\( e_{n}\){:/nomarkdown}-ים אורתוגונליים זה לזה, ו-{::nomarkdown}\( \\|e_{n}\\|=1\){:/nomarkdown} לכל {::nomarkdown}\( n\){:/nomarkdown}. זה מזכיר את מה שקראתי לו "בסיס אורתונורמלי" במרחבים סוף-ממדיים, אבל כמובן שזה לא בסיס במובן הרגיל של המילה, כי צירוף לינארי של מספר סופי של {::nomarkdown}\( e_{n}\){:/nomarkdown}-ים שכאלו יניב וקטור שכל הכניסות שלו פרט למספר סופי הן 0, וב-{::nomarkdown}\( l^{2}\){:/nomarkdown} יש וקטורים רבים שאינם כאלו. אבל מה כן נכון? שאם {::nomarkdown}\( a\){:/nomarkdown} הוא וקטור כלשהו ב-{::nomarkdown}\( l^{2}\){:/nomarkdown}, אז ניתן לכתוב:

{::nomarkdown}\( a=\sum_{n=1}^{\infty}a_{n}e_{n}\){:/nomarkdown}

אבל צריך קצת להיזהר עם כתיבת שוויונות כאלו - באיזה מובן יש כאן שוויון? באיזה מובן יש משמעות לסכום האינסופי הזה? ובכן, בפוסט הקודם דיברתי על זה - השוויון הזה הוא דרך אחרת לומר ש-{::nomarkdown}\( \lim_{n\to\infty}\\|a-\sum_{k=1}^{n}a_{k}e_{k}\\|=0\){:/nomarkdown}. עכשיו, שימו לב למקדמים של הצירוף הלינארי - ה-{::nomarkdown}\( a_{k}\){:/nomarkdown}-ים. מאיפה ידעתי לכתוב אותם? ובכן, אם אתם זוכרים מה קרה במרחבים סוף-ממדיים, ראינו שם שאם יש לנו בסיס אורתונורמלי כלשהו {::nomarkdown}\( e_{1},\dots,e_{n}\){:/nomarkdown} ויש לנו וקטור {::nomarkdown}\( a\){:/nomarkdown} במרחב, אז {::nomarkdown}\( a=\sum_{k=1}^{n}\left\langle a,e_{k}\right\rangle e_{k}\){:/nomarkdown}. כלומר, המקדמים של {::nomarkdown}\( a\){:/nomarkdown} בצירוף הלינארי של הבסיס האורתונורמלי הם בדיוק המכפלה הפנימית של {::nomarkdown}\( a\){:/nomarkdown} באיברים של אותו בסיס. במקרה הספציפי של {::nomarkdown}\( l^{2}\){:/nomarkdown}, הבסיס {::nomarkdown}\( e_{n}\){:/nomarkdown} שהצגתי והוקטור {::nomarkdown}\( a=\left(a_{1},a_{2},a_{3},\dots\right)\){:/nomarkdown}, קל לראות שעל פי הגדרה {::nomarkdown}\( \left\langle a,e_{n}\right\rangle =a_{n}\){:/nomarkdown}.

כעת נשאלת השאלה - האם זה עובד באופן כללי? אם אנחנו לוקחים סדרה אינסופית כלשהי {::nomarkdown}\( e_{1},e_{2},\dots\){:/nomarkdown} של וקטורים אורתונורמליים במרחב הילברט {::nomarkdown}\( \mathcal{H}\){:/nomarkdown} כלשהו, ולוקחים {::nomarkdown}\( a\in\mathcal{H}\){:/nomarkdown}, האם נקבל ש-{::nomarkdown}\( a=\sum_{n=1}^{\infty}\left\langle a,e_{n}\right\rangle e_{n}\){:/nomarkdown}? ובכן, באסה, לא. חסר לנו עדיין משהו שיהפוך את הסדרה של הוקטורים האורתונורמליים ל"בסיס אינסופי". אבל לפני שנדבר עליו, בואו ננסה להעריך עד כמה השוויון {::nomarkdown}\( a=\sum_{n=1}^{\infty}\left\langle a,e_{n}\right\rangle e_{n}\){:/nomarkdown} יכול להיכשל. לשם כך אני הולך להציג את מה שמכונים שוויון ואי-שוויון <strong>בסל</strong>: הם עוסקים בנסיון לקרב וקטור {::nomarkdown}\( a\){:/nomarkdown} על ידי קבוצה <strong>סופית</strong> של וקטורים אורתונורמליים. נתחיל מהשוויון:

{::nomarkdown}\( \\|a-\sum_{k=1}^{n}\left\langle a,e_{k}\right\rangle e_{k}\\|^{2}=\\|a\\|^{2}-\sum_{k=1}^{n}\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}\){:/nomarkdown}

כדי להבין מה קורה פה, בואו ניזכר מה זה {::nomarkdown}\( \sum_{k=1}^{n}\left\langle a,e_{k}\right\rangle e_{k}\){:/nomarkdown}: אנחנו לוקחים את המרחב שנפרש על ידי הוקטורים {::nomarkdown}\( \left\{ e_{1},\dots,e_{n}\right\} \){:/nomarkdown} ומטילים את {::nomarkdown}\( a\){:/nomarkdown} עליו. ההטלה הזו מיוצגת על ידי הסכום, ולכן {::nomarkdown}\( a-\sum_{k=1}^{n}\left\langle a,e_{k}\right\rangle e_{k}\){:/nomarkdown} הוא הרכיב שנותר מ-{::nomarkdown}\( a\){:/nomarkdown} אחרי שקיזזנו את מה שהוטל על המרחב שנפרש על ידי הוקטורים האורתונורמליים. שוויון בסל אומר מה הגודל של ה"מה שנשאר" הזה - הגודל בריבוע שווה לגודל של {::nomarkdown}\( a\){:/nomarkdown} בריבוע, פחות סכום הריבועים של המקדמים של הרכיב המוטל של {::nomarkdown}\( a\){:/nomarkdown}.

ההוכחה היא סטנדרטית למדי ומבוססת בעיקר על סדרה של שוויונות, אבל אני רוצה להראות אותה בכל זאת בגלל שטמונה בה תובנה נוספת על כך ש-{::nomarkdown}\( \left\langle a,e_{k}\right\rangle \){:/nomarkdown} הם המקדמים ה"נכונים" לבחור בהם כשאנחנו רוצים לפרק את {::nomarkdown}\( a\){:/nomarkdown} לגורמים.

אז מה שנעשה הוא זה: נסתכל על צירוף לינארי <strong>כלשהו</strong>, {::nomarkdown}\( \sum_{k=1}^{n}\alpha_{k}e_{k}\){:/nomarkdown} וננסה לחשב ישירות מההגדרה את גודל הנורמה במקרה שלו:

{::nomarkdown}\( \\|a-\sum_{k=1}^{n}\alpha_{k}e_{k}\\|^{2}=\left\langle a-\sum_{k=1}^{n}\alpha_{k}e_{k},a-\sum_{k=1}^{n}\alpha_{k}e_{k}\right\rangle \){:/nomarkdown}

{::nomarkdown}\( =\left\langle a,a\right\rangle -\left\langle a,\sum_{k=1}^{n}\alpha_{k}e_{k}\right\rangle -\left\langle \sum_{k=1}^{n}\alpha_{k}e_{k},a\right\rangle +\left\langle \sum_{k=1}^{n}\alpha_{k}e_{k},\sum_{k=1}^{n}\alpha_{k}e_{k}\right\rangle \){:/nomarkdown}

{::nomarkdown}\( =\\|a\\|^{2}-\left\langle a,\sum_{k=1}^{n}\alpha_{k}e_{k}\right\rangle -\left\langle \sum_{k=1}^{n}\alpha_{k}e_{k},a\right\rangle +\sum_{k=1}^{n}\alpha_{k}\overline{\alpha_{k}}\){:/nomarkdown}

המעבר האחרון חיסל את המכפלה הפנימית הימנית על ידי שימוש באורתונורמליות של {::nomarkdown}\( \left\{ e_{1},\dots,e_{n}\right\} \){:/nomarkdown}. עכשיו נשתמש בלינאריות של מכפלה פנימית ונקבל:

{::nomarkdown}\( =\\|a\\|^{2}-\sum_{k=1}^{n}\overline{\alpha_{k}}\left\langle a,e_{k}\right\rangle -\sum_{k=1}^{n}\alpha_{k}\overline{\left\langle a,e_{k}\right\rangle }+\sum_{k=1}^{n}\alpha_{k}\overline{\alpha_{k}}\){:/nomarkdown}

{::nomarkdown}\( =\\|a\\|^{2}+\sum_{k=1}^{n}\left[-\overline{\alpha_{k}}\left\langle a,e_{k}\right\rangle -\alpha_{k}\overline{\left\langle a,e_{k}\right\rangle }+\alpha_{k}\overline{\alpha_{k}}\right]\){:/nomarkdown}

{::nomarkdown}\( =\\|a\\|^{2}-\sum\left\langle a,e_{k}\right\rangle \overline{\left\langle a,e_{k}\right\rangle }+\sum\left[\left\langle a,e_{k}\right\rangle \overline{\left\langle a,e_{k}\right\rangle }-\overline{\alpha_{k}}\left\langle a,e_{k}\right\rangle -\alpha_{k}\overline{\left\langle a,e_{k}\right\rangle }+\alpha_{k}\overline{\alpha_{k}}\right]\){:/nomarkdown}

{::nomarkdown}\( =\\|a\\|^{2}-\sum\left\langle a,e_{k}\right\rangle \overline{\left\langle a,e_{k}\right\rangle }+\sum\left[\left(\left\langle a,e_{k}\right\rangle -\alpha_{k}\right)\overline{\left(\left\langle a,e_{k}\right\rangle -\alpha_{k}\right)}\right]\){:/nomarkdown}

{::nomarkdown}\( =\\|a\\|^{2}-\sum\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}+\sum\left\|\left\langle a,e_{k}\right\rangle -\alpha_{k}\right\|^{2}\){:/nomarkdown}

בשביל מה זה היה טוב, תשאלו? ובכן, כעת בבירור הערך המינימלי של הביטוי הזה מתקבל כאשר {::nomarkdown}\( \alpha_{k}=\left\langle a,e_{k}\right\rangle \){:/nomarkdown}, ובמקרה הזה נקבל את השוויון {::nomarkdown}\( \\|a-\sum_{k=1}^{n}\alpha_{k}e_{k}\\|^{2}=\\|a\\|^{2}-\sum\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}\){:/nomarkdown} שרצינו. כזכור, המקדמים {::nomarkdown}\( \left\langle a,e_{k}\right\rangle \){:/nomarkdown} הללו נקראים <strong>מקדמי פורייה</strong> של {::nomarkdown}\( a\){:/nomarkdown}, על פי הבסיס {::nomarkdown}\( \left(e_{n}\right)\){:/nomarkdown}.

כעת לאי השוויון, שהוא מפורסם יותר: מכיוון שבשוויון לעיל אגף שמאל תמיד חיובי, הרי ש-{::nomarkdown}\( \\|a\\|^{2}-\sum\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}\ge0\){:/nomarkdown}, ועל ידי העברת אגפים נקבל ש-{::nomarkdown}\( \sum_{k=1}^{n}\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}\le\\|a\\|^{2}\){:/nomarkdown}. אי השוויון הזה תקף לכל {::nomarkdown}\( n\){:/nomarkdown}, ולכן נובעת ממנו המסקנה הבאה:

{::nomarkdown}\( \sum_{k=1}^{\infty}\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}\le\\|a\\|^{2}\){:/nomarkdown}

ההוכחה סטנדרטית: אם מניחים בשלילה שהשוויון אינו נכון, אז יהיה סכום חלקי כלשהו שבעצמו כבר עובר את {::nomarkdown}\( \\|a\\|^{2}\){:/nomarkdown} וזו תהיה סתירה לנתון.

עכשיו, מכיוון שהטור חסום, האיבר הכללי שלו בהכרח שואף לאפס, כלומר {::nomarkdown}\( \left\langle a,e_{n}\right\rangle \to0\){:/nomarkdown}, וזה נכון לכל {::nomarkdown}\( a\){:/nomarkdown}. התכונה הזו, של "התכנסות בעזרת מכפלה פנימית", היא כל כך מעניינת שנותנים לה שם: <strong>התכנסות חלשה</strong>. פורמלית, אם יש לנו סדרה {::nomarkdown}\( x_{1},x_{2},x_{3},\dots\){:/nomarkdown}, אז מסמנים {::nomarkdown}\( x_{n}\overset{w}{\to x}\){:/nomarkdown} אם מתקיים ש-{::nomarkdown}\( \left\langle x_{n}-x,a\right\rangle =0\){:/nomarkdown} לכל {::nomarkdown}\( a\){:/nomarkdown} במרחב. במקרה שלנו קיבלנו ש-{::nomarkdown}\( e_{n}\overset{w}{\to0}\){:/nomarkdown}.

השם "התכנסות חלשה" נובע מכך שהתכנסות "רגילה", כלומר {::nomarkdown}\( \\|x-x_{n}\\|\to0\){:/nomarkdown}, גוררת את ההתכנסות החלשה: בואו נניח לרגע שמתקיים {::nomarkdown}\( \lim_{n\to\infty}\\|x_{n}-x\\|=0\){:/nomarkdown}. אני רוצה להראות שזה גורר את הסוג השני של התכנסות, כלומר ש- {::nomarkdown}\( \left\langle x_{n}-x,a\right\rangle \to0\){:/nomarkdown}. כדי להראות את זה, בואו נשתמש ב<strong>אי-שוויון קושי שוורץ</strong>: {::nomarkdown}\( \left\|\left\langle a,b\right\rangle \right\|\le\\|a\\|\\|b\\|\){:/nomarkdown}. אי השוויון הזה עובד בכל מרחב מכפלה פנימית ואני מתחמק מלהוכיח אותו כרגע, אבל בואו נראה מה הוא נותן לנו כאן:

{::nomarkdown}\( \left\|\left\langle x_{n}-x,a\right\rangle \right\|\le\\|x_{n}-x\\|\\|a\\|\){:/nomarkdown}

עכשיו, {::nomarkdown}\( \\|a\\|\){:/nomarkdown} הוא קבוע, ואילו {::nomarkdown}\( \\|x_{n}-x\\|\to0\){:/nomarkdown}, ולכן {::nomarkdown}\( \left\|\left\langle x_{n}-x,a\right\rangle \right\|\to0\){:/nomarkdown}, כלומר {::nomarkdown}\( \left\langle x_{n}-x,a\right\rangle \to0\){:/nomarkdown}, וזאת בלי קשר לשאלה מהו {::nomarkdown}\( a\){:/nomarkdown}.

כדי לראות ששני סוגי ההתכנסויות אינם זהים, מספיק לשים לב לכך שעבור הסדרה האורתונורמלית שלנו, {::nomarkdown}\( \\|e_{n}\\|=1\){:/nomarkdown} לכל {::nomarkdown}\( n\){:/nomarkdown} ולכן {::nomarkdown}\( \\|e_{n}-0\\|\){:/nomarkdown} בוודאי שאינו שואף ל-0. כלומר, ה-{::nomarkdown}\( e_{n}\){:/nomarkdown}-ים מתכנסים חלש לאפס אך לא חזק.

עכשיו, אי השוויון {::nomarkdown}\( \sum_{k=1}^{\infty}\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}\le\\|a\\|^{2}\){:/nomarkdown} בעצם אומר לנו שטור מקדמי הפורייה של {::nomarkdown}\( a\){:/nomarkdown} מתכנס תמיד. האם אפשר להסיק מכך שהטור {::nomarkdown}\( \sum_{n=1}^{\infty}\left\langle a,e_{n}\right\rangle e_{n}\){:/nomarkdown} גם כן מתכנס תמיד? ובכן, אוף, לא. אבל מה שכן קל להראות, עם טכניקות דומות לאלו שהשתמשנו בהן עד כה, הוא שכאשר אנחנו במרחב הילברט, הטור אכן מתכנס תמיד. מה שעושים הוא להראות שבאופן כללי, {::nomarkdown}\( \sum_{k=1}^{n}\alpha_{n}e_{n}\){:/nomarkdown} היא סדרת קושי, ולהשתמש בשלמות של המרחב כדי להסיק שהיא מתכנסת, וזאת כאשר המקדמים {::nomarkdown}\( \alpha_{n}\){:/nomarkdown} מקיימים ש-{::nomarkdown}\( \sum_{n=1}^{\infty}\left\|\alpha_{n}\right\|^{2}&lt;\infty\){:/nomarkdown}. כמו כן, לא קשה להראות שאם הטור מתכנס, אז שוויון פרסבל שהצגתי בפוסט הקודם (עבור סכום סופי של וקטורים אורתונורמליים) מתקיים גם כאן, כלומר {::nomarkdown}\( \\|\sum_{n=1}^{\infty}\alpha_{n}e_{n}\\|^{2}=\sum_{n=1}^{\infty}\left\|\alpha_{n}\right\|^{2}\){:/nomarkdown}.

נפלא, אז האם במרחב הילברט מתקיים {::nomarkdown}\( a=\sum_{n=1}^{\infty}\left\langle a,e_{n}\right\rangle e_{n}\){:/nomarkdown}? ובכן, לא, עדיין לא! הטור באגף ימין עשוי להתכנס, אבל לא מובטח שיתכנס אל {::nomarkdown}\( a\){:/nomarkdown}!

בואו נראה דוגמה. נסתכל על המרחב {::nomarkdown}\( \mathcal{H}=L^{2}\left(\left[-\pi,\pi\right]\right)\){:/nomarkdown}, כלומר פונקציות {::nomarkdown}\( f:\left[-\pi,\pi\right]\to\mathbb{C}\){:/nomarkdown} עם מכפלה פנימית שמוגדרת על ידי אינטגרל. נגדיר {::nomarkdown}\( e_{n}=\frac{1}{\sqrt{\pi}}\sin nx\){:/nomarkdown}. כדי לראות שמדובר על סדרה של וקטורים אורתונורמליים נצטרך לעבוד טיפה. ראשית, המכפלה הפנימית של וקטור עם עצמו:

{::nomarkdown}\( \left\langle e_{n},e_{n}\right\rangle =\frac{1}{\pi}\int_{-\pi}^{\pi}\sin^{2}nxdx=\frac{1}{\pi}\int_{-\pi}^{\pi}\frac{1-\cos2nx}{2}dx=\){:/nomarkdown}

{::nomarkdown}\( =\frac{1}{\pi}\left[\frac{x-\frac{1}{2n}\sin2nx}{2}\right]_{-\pi}^{\pi}=\frac{1}{\pi}\left(\frac{\pi+\pi}{2}\right)=1\){:/nomarkdown}

כאן השתמשנו בכך שסינוס של כפולה שלמה של {::nomarkdown}\( \pi\){:/nomarkdown} הוא אפס. כמו כן, אם {::nomarkdown}\( n\ne m\){:/nomarkdown} אז נקבל

{::nomarkdown}\( \left\langle e_{n},e_{m}\right\rangle =\frac{1}{\pi}\int_{-\pi}^{\pi}\sin nx\sin mxdx=\frac{1}{\pi}\int_{-\pi}^{\pi}\frac{\cos\left(n-m\right)x-\cos\left(n+m\right)x}{2}dx=0\){:/nomarkdown}

כאן הרשיתי לעצמי לקפוץ ל-0 מהר, כי כבר ברור מה יקרה - שני הקוסינוסים יהפכו אחרי אינטגרציה לסינוסים וכשנציב בהם {::nomarkdown}\( \pi\){:/nomarkdown} הם יתאפסו. הסיכוי היחיד של הביטוי להיות שונה מאפס הוא אכן כאשר {::nomarkdown}\( n=m\){:/nomarkdown} ואז ה-{::nomarkdown}\( \cos\left(n-m\right)x\){:/nomarkdown} הופך ל-1.

אז יש לנו וקטורים אורתונורמליים. עכשיו בואו ננסה לקחת את הוקטור {::nomarkdown}\( a=\cos x\){:/nomarkdown} ולהציג אותו כסכום:

{::nomarkdown}\( \sum_{n=1}^{\infty}\left\langle a,e_{n}\right\rangle e_{n}=\frac{\sin nx}{\sqrt{\pi}}\cdot\sum_{n=1}^{\infty}\frac{1}{\sqrt{\pi}}\int_{-\pi}^{\pi}\cos x\sin nxdx\){:/nomarkdown}

{::nomarkdown}\( =\frac{\sin nx}{\sqrt{\pi}}\cdot\sum_{n=1}^{\infty}\frac{1}{\sqrt{\pi}}\int_{-\pi}^{\pi}\frac{\sin\left(n+1\right)x+\sin\left(n-1\right)x}{2}dx=0\){:/nomarkdown}

כאן אפס מגיע הרבה יותר בקלות - פשוט תוך הסתמכות על כך ש-{::nomarkdown}\( \sin\){:/nomarkdown} היא פונקציה אי זוגית ({::nomarkdown}\( f\left(-x\right)=-f\left(x\right)\){:/nomarkdown}) ושאינטגרציה של פונקציות כאלו בתחום סימטרי סביב 0 נותנת 0 תמיד. אם כן, קיבלנו ש-{::nomarkdown}\( \sum_{n=1}^{\infty}\left\langle \cos x,e_{n}\right\rangle e_{n}\){:/nomarkdown} שווה לאפס, במקום ל-{::nomarkdown}\( \cos x\){:/nomarkdown}. הממממ. אז מה עוד חסר?

ראשית, בואו נגדיר את מה שאנחנו רוצים שיקרה: סדרה - של וקטורים אורתונורמליים {::nomarkdown}\( e_{1},e_{2},e_{3},\dots\){:/nomarkdown} נקראת <strong>שלמה</strong> אם {::nomarkdown}\( \sum_{n=1}^{\infty}\left\langle a,e_{n}\right\rangle e_{n}=a\){:/nomarkdown} לכל {::nomarkdown}\( a\){:/nomarkdown} במרחב. בפרט נובע מכך שלכל וקטור במרחב יש דרך הצגה <strong>יחידה</strong> כסכום אינסופי של אברי הסדרה: כי נניח ש-{::nomarkdown}\( \sum_{n=1}^{\infty}\alpha_{n}e_{n}=\sum_{n=1}^{\infty}\beta_{n}e_{n}\){:/nomarkdown}, אז נחסר את האגפים ונקבל {::nomarkdown}\( 0=\sum_{n=1}^{\infty}\left(\alpha_{n}-\beta_{n}\right)e_{n}\){:/nomarkdown} ומשוויון פרסבל נסיק ש-{::nomarkdown}\( 0=\sum_{n=1}^{\infty}\left\|\alpha_{n}-\beta_{n}\right\|^{2}\){:/nomarkdown}, מה שיכול לקרות רק אם {::nomarkdown}\( \alpha_{n}=\beta_{n}\){:/nomarkdown} לכל {::nomarkdown}\( n\){:/nomarkdown}. תכונת ה"קיום ויחידות" הזו מאוד דומה למה שקורה עם בסיס רגיל, רק ששם מדובר על צירוף לינארי סופי, לא אינסופי; עדיין, זה מספיק כדי שנשתמש שנקרא לסדרה אורתונורמלית שלמה "בסיס אורתונורמלי" (כשלכולם ברור מההקשר שזה לא בסיס של צירוף לינארי סופי).

טוב, ההגדרה של סדרה אורתונורמלית שלמה עדיין לא אומרת שיש לנו קריטריון קל לבדיקה שיכריע שסדרת וקטורים נתונה היא שלמה. בואו נחשוב לרגע - איך אפשר לזהות שקבוצה אורתונורמלית של וקטורים היא בסיס למרחב וקטורי ממימד סופי? ובכן, וקטורים אורתוגונליים הם בלתי תלויים לינארית, אז רק צריך להראות שזו קבוצה פורשת; אם היא לא פורשת, אז יש איזה שהוא וקטור שלא נפרש על ידי אברי הקבוצה, ולכן אפשר לפרק אותו לשני רכיבים - רכיב אחד של ההיטל שלו על אברי הקבוצה, ורכיב שני שאורתוגונלי לכל אברי הקבוצה. במילים אחרות, הקבוצה לא פורשת רק אם קיים וקטור שאורתוגונלי לכל אבריה אבל הוא איננו וקטור האפס.

ובכן, הקריטריון הזה עובד גם עבור סדרות אינסופיות. פורמלית, אם {::nomarkdown}\( e_{1},e_{2},\dots\){:/nomarkdown} היא סדרה אורתונורמלית בעלת התכונה שאם {::nomarkdown}\( \left\langle a,e_{n}\right\rangle =0\){:/nomarkdown} לכל {::nomarkdown}\( e_{n}\){:/nomarkdown} בסדרה, אז בהכרח {::nomarkdown}\( a=0\){:/nomarkdown} - אז במקרה כזה, {::nomarkdown}\( e_{1},e_{2},\dots\){:/nomarkdown} היא סדרה אורתונורמלית שלמה. ברור, אגב, שזה חייב להתרחש אם הסדרה היא שלמה, כי אז לכל {::nomarkdown}\( a\){:/nomarkdown} מתקיים {::nomarkdown}\( a=\sum\left\langle a,e_{n}\right\rangle e_{n}\){:/nomarkdown} כך שאם כל המקדמים הם 0 נובע מכך שהסכום הוא 0. השאלה היא רק למה התכונה של המכפלה הפנימית הזו גוררת שהסדרה היא אכן שלמה.

אוקיי, אז בואו ניקח איזה {::nomarkdown}\( a\){:/nomarkdown} ונגדיר {::nomarkdown}\( b=\sum\left\langle a,e_{n}\right\rangle e_{n}\){:/nomarkdown}. כזכור, {::nomarkdown}\( b\){:/nomarkdown} קיים, אבל אם הסדרה אינה שלמה קיימת הסכנה שהוא יהיה שונה מ-{::nomarkdown}\( a\){:/nomarkdown}. אם נראה ש-{::nomarkdown}\( a-b=0\){:/nomarkdown}, סיימנו; בגלל התכונה שלעיל, מספיק להראות ש-{::nomarkdown}\( \left\langle a-b,e_{n}\right\rangle =0\){:/nomarkdown} לכל {::nomarkdown}\( n\){:/nomarkdown}. בואו נפתח את החישוב של המכפלה הפנימית הזו:

{::nomarkdown}\( \left\langle a-b,e_{n}\right\rangle =\left\langle a,e_{n}\right\rangle -\left\langle \sum\left\langle a,e_{k}\right\rangle e_{k},e_{n}\right\rangle =\left\langle a,e_{n}\right\rangle -\sum\left\langle a,e_{k}\right\rangle \delta_{nk}\){:/nomarkdown}

{::nomarkdown}\( =\left\langle a,e_{n}\right\rangle -\left\langle a,e_{n}\right\rangle =0\){:/nomarkdown}

וזה מסיים את זה.

למעשה, אפשר לתת עוד קריטריון שקול לכך שסדרה אורתונורמלית היא שלמה - שוויון פרסבל. ניסחתי אותו כאן כבר בתור {::nomarkdown}\( \\|\sum_{n=1}^{\infty}\alpha_{n}e_{n}\\|^{2}=\sum_{n=1}^{\infty}\left\|\alpha_{n}\right\|^{2}\){:/nomarkdown} - כלומר, בלי להתחייב על מהם המקדמים {::nomarkdown}\( \alpha_{k}\){:/nomarkdown} - אבל אפשר עכשיו לנסח אותו שוב בצורה המוכרת יותר שלו, שתקפה רק עבור סדרה אורתונורמלית שלמה:

{::nomarkdown}\( \\|a\\|^{2}=\sum_{n=1}^{\infty}\left\|\left\langle a,e_{n}\right\rangle \right\|^{2}\){:/nomarkdown}.

לא בכל מרחב הילברט יש סדרה אורתונורמלית שלמה; מרחבים שבהם יש כזו נקראים <strong>ספרביליים</strong>. עכשיו, בואו ניזכר לרגע במה שקרה באלגברה לינארית סוף-ממדית: ראינו שכל מרחב וקטורי ממימד {::nomarkdown}\( n\){:/nomarkdown} איזומורפי ל-{::nomarkdown}\( \mathbb{C}^{n}\){:/nomarkdown} - האיזומורפיזם כלל בחירת בסיס למרחב והתאמה לכל וקטור במרחב של וקטור הקואורדינטות שלו על פי הבסיס. בואו נראה עכשיו שאותה תוצאה עובדת גם עבור מרחבי הילברט ספרביליים (ובפרט עבור כל מרחבי המכפלה הפנימית ממימד סופי): נראה שכל מרחב כזה ממימד {::nomarkdown}\( n\){:/nomarkdown} איזומורפי ל-{::nomarkdown}\( \mathbb{C}^{n}\){:/nomarkdown} כמרחב מכפלה פנימית. ולמי יהיו איזומורפיים מרחבי הילברט הספרביליים האינסוף-ממדיים? נסו לנחש (זה לא קשה) בזמן שאני מגדיר פורמלית מה זה אומר איזומורפיזם כאן: אם {::nomarkdown}\( U,V\){:/nomarkdown} הם שני מרחבי מכפלה פנימית מעל {::nomarkdown}\( \mathbb{C}\){:/nomarkdown} (עזבו את {::nomarkdown}\( \mathbb{R}\){:/nomarkdown}, אין לי כוח לנסח כל משפט פעמיים) אז פונקציה {::nomarkdown}\( T:U\to V\){:/nomarkdown} היא איזומורפיזם שלהם אם היא לינארית ({::nomarkdown}\( T\left(a+b\right)=T\left(a+b\right)\){:/nomarkdown} ו-{::nomarkdown}\( T\left(\lambda a\right)=\lambda T\left(a\right)\){:/nomarkdown}), חד-חד-ערכית ועל, ומשמרת את המכפלה הפנימית, כלומר {::nomarkdown}\( \left\langle T\left(a\right),T\left(b\right)\right\rangle =\left\langle a,b\right\rangle \){:/nomarkdown}.

אז בואו ניקח מרחב מכפלה פנימית ממימד {::nomarkdown}\( n\){:/nomarkdown}. הוא סוף ממדי, ולכן יש לו בסיס רגיל. את הבסיס הרגיל אפשר לגרם-שמדט ולקבל בסיס אורתונורמלי {::nomarkdown}\( \left\{ e_{1},\dots,e_{n}\right\} \){:/nomarkdown}. עכשיו נגדיר את {::nomarkdown}\( T\){:/nomarkdown} באופן המתבקש, על ידי שליחת כל איבר לוקטור הקואורדינטות שלו, דהיינו {::nomarkdown}\( T\left(a\right)=\left(\left\langle a,e_{1}\right\rangle ,\dots,\left\langle a,e_{n}\right\rangle \right)\){:/nomarkdown}. הלינאריות של {::nomarkdown}\( T\){:/nomarkdown} נובעת מייד מתכונות הלינאריות של מכפלה פנימית. כדי להראות ש-{::nomarkdown}\( T\){:/nomarkdown} חח"ע ועל מספיק להראות שהגרעין שלה הוא 0, וזה נובע מכך שאם {::nomarkdown}\( \left\langle a,e_{i}\right\rangle =0\){:/nomarkdown} לכל {::nomarkdown}\( 1\le i\le n\){:/nomarkdown} אז {::nomarkdown}\( a=0\){:/nomarkdown} (פשוט בגלל ש-{::nomarkdown}\( a=\sum_{i=1}^{n}\left\langle a,e_{i}\right\rangle e_{i}\){:/nomarkdown}). לבסוף, {::nomarkdown}\( \left\langle a,b\right\rangle =\left\langle \sum\left\langle a,e_{i}\right\rangle e_{i},\sum\left\langle b,e_{j}\right\rangle e_{j}\right\rangle =\sum\left\langle a,e_{i}\right\rangle \overline{\left\langle b,e_{i}\right\rangle }\){:/nomarkdown} ו-

{::nomarkdown}\( \left\langle T\left(a\right),T\left(b\right)\right\rangle =\left\langle \left(\left\langle a,e_{1}\right\rangle ,\dots,\left\langle a,e_{n}\right\rangle \right),\left(\left\langle b,e_{1}\right\rangle ,\dots,\left\langle b,e_{n}\right\rangle \right)\right\rangle =\sum\left\langle a,e_{i}\right\rangle \overline{\left\langle b,e_{i}\right\rangle }\){:/nomarkdown}

(תזכרו שבמקרה השני, המכפלה הפנימית היא הסטנדרטית על {::nomarkdown}\( \mathbb{C}^{n}\){:/nomarkdown}).

ומה קורה במקרה שבו {::nomarkdown}\( \mathcal{H}\){:/nomarkdown} לא סוף ממדי? עדיין מתבקש לשלוח איבר לוקטור הקואורדינטות שלו, כלומר לסדרה אינסופית של מספרים מרוכבים. זה מזכיר את {::nomarkdown}\( l^{2}\){:/nomarkdown}, אבל כדי שההעתקה הזו באמת תהיה מ-{::nomarkdown}\( \mathcal{H}\){:/nomarkdown} אל {::nomarkdown}\( l^{2}\){:/nomarkdown}, צריך להתקיים שסדרת הקואורדינטות הזו תקיים את התנאי שמגדיר איברים של {::nomarkdown}\( l^{2}\){:/nomarkdown}, שהוא כזכור שיתקיים {::nomarkdown}\( \sum\left\|a_{n}\right\|^{2}&lt;\infty\){:/nomarkdown}. למרבה המזל, כבר ראינו את זה בפוסט: {::nomarkdown}\( \sum_{k=1}^{\infty}\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}\le\\|a\\|^{2}\){:/nomarkdown}, ולכן אם {::nomarkdown}\( a\in\mathcal{H}\){:/nomarkdown} הוא איבר כלשהו, אז יש לנו חסם על {::nomarkdown}\( \sum_{k=1}^{\infty}\left\|\left\langle a,e_{k}\right\rangle \right\|^{2}\){:/nomarkdown} - הנורמה של {::nomarkdown}\( a\){:/nomarkdown}, שהיא תמיד סופית (כך היא מוגדרת). מכאן מקבלים ש-{::nomarkdown}\( T\left(a\right)=\left(\left\langle a,e_{1}\right\rangle ,\left\langle a,e_{2}\right\rangle ,\dots\right)\){:/nomarkdown} היא העתקה חוקית, וקל להראות שהיא לינארית ומשמרת נורמה כמו קודם. המסקנה היא שכל מרחב הילברט אינסוף ממדי ספרבילי הוא איזומורפי ל-{::nomarkdown}\( l^{2}\){:/nomarkdown}, מה שהופך את {::nomarkdown}\( l^{2}\){:/nomarkdown} ל"דוגמה קנונית למרחב הילברט".

עכשיו בואו נדבר על {::nomarkdown}\( L^{2}\){:/nomarkdown}. ראינו כבר קבוצה שמנסה להיות סדרה אורתונורמלית שלמה ב-{::nomarkdown}\( L^{2}\left(\left[-\pi,\pi\right]\right)\){:/nomarkdown} ונכשלת בצורה מבישה. האם קיימת סדרה אורתונורמלית שלמה, כלומר האם המרחב הוא ספרבילי? התשובה חיובית, והסדרה האורתונורמלית שאני רוצה להראות היא חשובה ביותר: היא בעצם מהווה מקרה פרטי חשוב של מה שנקרא <strong>טורי פורייה</strong>.

קודם ניסינו את מזלנו עם סינוסים. זו הייתה בחירה טובה, כי קל להראות שהם אורתונורמליים; מה שהיה חסר לנו בשביל סדרה שלמה הוא גם קוסינוסים. אבל למעשה, אין צורך לדבר על סינוסים וקוסינוסים בנפרד אלו מאלו: אפשר לנצל את זה שהמרחב שלנו הוא מעל המרוכבים, {::nomarkdown}\( \mathbb{C}\){:/nomarkdown}, ושבמרוכבים יש פונקציה שמאחדת גם את סינוס וגם את קוסינוס - האקספוננט המרוכב. גם למי שלא מכיר את זה, מספיק לראות את הנוסחה הבאה, "נוסחת אוילר": {::nomarkdown}\( e^{i\theta}=\cos\theta+i\sin\theta\){:/nomarkdown}. הוכחה של נכונות הנוסחה היא עניין לפוסט באנליזה מרוכבת - בינתיים תאמינו לי שזה עובד.

אברי הסדרה שלנו יהיו האיברים הבאים: {::nomarkdown}\( \varphi_{n}\left(x\right)=\frac{1}{\sqrt{2\pi}}e^{inx}\){:/nomarkdown} (אני משתמש ב-{::nomarkdown}\( \varphi\){:/nomarkdown} כי {::nomarkdown}\( e\){:/nomarkdown} תפוס על ידי הקבוע המתמטי), כאשר {::nomarkdown}\( n\){:/nomarkdown} הוא מספר <strong>שלם</strong>, כלומר אנו מרשים גם מספרים שליליים. הסיבה להכפלה ב-{::nomarkdown}\( \frac{1}{\sqrt{2\pi}}\){:/nomarkdown} היא כדי שנקבל שהנורמה של כל איבר היא 1 (תכף נעשה את החישוב) ואנחנו צריכים {::nomarkdown}\( n\){:/nomarkdown}-ים שליליים אחרת הסדרה לא תהיה שלמה. כמובן, יש משהו קצת מוזר בכך שהסדרה שלנו אינסופית "לשני הכיוונים", אבל זו בסך הכל שיטת סימון קצת שונה שנועדה להקל עלינו; הייתי יכול באותה המידה להגדיר את הסדרה כך:

{::nomarkdown}\( \varphi_{n}\left(x\right)=\begin{cases}\frac{1}{\sqrt{2\pi}}e^{ikx} &amp; n=2k\\\frac{1}{\sqrt{2\pi}}e^{-ikx} &amp; n=2k+1\end{cases}\){:/nomarkdown}

אבל זה יותר מסובך מבחינת הסימונים, ומתמטיקאים שונאים דברים כאלו, ואני מסכים איתם.

בואו נראה שמדובר על סדרה אורתונורמלית. ראשית, מכפלה של איבר בעצמו:

{::nomarkdown}\( \left\langle \varphi_{n},\varphi_{n}\right\rangle =\int_{-\pi}^{\pi}\frac{1}{\sqrt{2\pi}}e^{inx}\cdot\frac{1}{\sqrt{2\pi}}e^{-inx}dx=\frac{1}{2\pi}\int_{-\pi}^{\pi}1dx=1\){:/nomarkdown}

כעת, מכפלה של שני איברים שונים:

{::nomarkdown}\( \left\langle \varphi_{n},\varphi_{m}\right\rangle =\int_{-\pi}^{\pi}\frac{1}{\sqrt{2\pi}}e^{inx}\cdot\frac{1}{\sqrt{2\pi}}e^{-imx}dx=\frac{1}{2\pi}\int_{-\pi}^{\pi}e^{i\left(n-m\right)x}dx\){:/nomarkdown}

{::nomarkdown}\( =\frac{1}{2\pi}\left[\frac{1}{i\left(n-m\right)}e^{i\left(n-m\right)x}\right]_{-\pi}^{\pi}=\frac{e^{i\left(n-m\right)\pi}-e^{-i\left(n-m\right)\pi}}{2\pi\left(i\left(n-m\right)\right)}=0\){:/nomarkdown}

המעבר האחרון נובע מכך ש-{::nomarkdown}\( e^{i\left(n-m\right)\pi}=\cos\left(\pi\left(n-m\right)\right)\){:/nomarkdown} (מנוסחת אוילר) ו-{::nomarkdown}\( e^{-i\left(n-m\right)\pi}=\cos\left(\pi\left(m-n\right)\right)=\cos\left(\pi\left(n-m\right)\right)\){:/nomarkdown} (מכך שקוסינוס היא פונקציה זוגית - סימטרית ביחס לציר {::nomarkdown}\( x=0\){:/nomarkdown}).

מה נשאר? להראות שזו סדרה אורתונורמלית שלמה. כלומר, אם להשתמש בטריק שראינו, להוכיח שאם {::nomarkdown}\( \left\langle \varphi_{n},f\right\rangle =0\){:/nomarkdown} לכל {::nomarkdown}\( n\){:/nomarkdown}, אז {::nomarkdown}\( f=0\){:/nomarkdown}. אבל עם ההוכחה הזו נחכה קצת לפוסט ייעודי שידבר על טורי פורייה.
