---
id: 2349
title: "הבעיה העשירית של הילברט - לכל דבר טוב (חסום) יש סוף"
date: 2013-02-02 10:37:57
layout: post
categories: 
  - תורת המספרים
tags: 
  - הבעיה העשירית של הילברט
---
בשעה טובה הגענו אל המכשול האחרון שעומד בינינו ובין סיום ההוכחה שהבעיה העשירית של הילברט אינה כריעה - כמת אוניברסלי חסום. אם נצליח להראות שבהינתן ביטוי דיופנטי $latex P$ אפשר להוכיח שגם הביטוי $latex \forall x&lt;n\left(P\right)$ הוא דיופנטי, נסיים. כאן אמורה להיכנס לתמונה העובדה שהוכחנו (בדם יזע ודמעות) שהפונקציה האקספוננציאלית היא דיופנטית. בואו נתחיל בלראות עבור עוד פונקציות שגדלות בקצב מהיר שהן דיופנטיות.

נפתח בפונקציה שהיא אקספוננציאלית-כפולה: $latex h\left(u,v,w\right)=u^{v^{w}}$. בהינתן שהפונקציה האקספוננציאלית היא דיופנטית, קל לבנות ביטוי עבור הפונקציה הזו:

$latex y=u^{v^{w}}\iff\exists z\left(y=u^{z}\wedge z=v^{w}\right)$

דהיינו, אנחנו עושים שימוש כפול במערכות המשוואות עבור הפונקציה האקספוננציאלית, כל פעם עם משתנים אחרים.

זו הייתה פונקציה קלה, בואו נדבר על משהו מסובך יותר - מקדמי הבינום, $latex f\left(n,k\right)={n \choose k}$. כדי לטפל בהם, קודם כל נוכיח את הזהות $latex \sum_{i=k}^{n}{n \choose i}u^{i-k}=\left[\frac{\left(u+1\right)^{n}}{u^{k}}\right]$ שמתקיימת עבור $latex 0&lt;k\le n$ ו-$latex u&gt;2^{n}$ (והוא מספר טבעי), כאשר סוגריים מרובעים מסמנים ערך שלם תחתון (המספר השלם הגדול ביותר שקטן או שווה למה שבתוך הסוגריים).

אני מניח שלפחות חלקכם משער שהדרך הנכונה להתחיל הוכחה כזו היא עם נוסחת הביטום של ניוטון, שמתארת את הסכום כש-$latex k$ מתחיל מ-0: $latex \sum_{i=0}^{n}{n \choose i}u^{i}=\left(u+1\right)^{n}$. כעת, נחלק את שני האגפים ב-$latex u^{k}$ (מתבקש לגמרי, נכון?) ונקבל $latex \sum_{i=0}^{n}{n \choose i}u^{i-k}=\frac{\left(u+1\right)^{n}}{u^{k}}$. את הסכום שבאגף שמאל אפשר לחלק לשני סכומים שונים: $latex \sum_{i=0}^{k-1}{n \choose i}u^{i-k}+\sum_{i=k}^{n}{n \choose i}u^{i-k}$. מביניהם, הימני הוא הסכום שאנו רוצים לחשב, והשמאלי הוא סתם שארית מעצבנת. מה שאנחנו רוצים לומר הוא שכאשר לוקחים ערך שלם תחתון על שני הסכומים הללו, הסכום השמאלי פשוט מתפוגג לו. מכיוון שהסכום הימני הוא מספר שלם, מספיק להראות ש-$latex \sum_{i=0}^{k-1}{n \choose i}u^{i-k}&lt;1$ כדי להוכיח שהערך השלם התחתון יעלים אותו.

כעת, $latex u$ הוא מספר טבעי, כלומר $latex u^{i+1-k}\le1$ לכל $latex 0\le i&lt;k$, כלומר (נחלק ב-$latex u$ את שני האגפים) לכל $latex i&lt;k$ אנו מקבלים $latex u^{i-k}\le u^{-1}$. מכאן שאפשר לחסום את הסכום בצורה הבאה:

$latex \sum_{i=0}^{k-1}{n \choose i}u^{i-k}\le u^{-1}\sum_{i=0}^{k-1}{n \choose i}&lt;u^{-1}\sum_{i=0}^{n}{n \choose i}=u^{-1}2^{n}&lt;1$

וכאן אנחנו משתמשים בהנחה שלנו ש-$latex u&gt;2^{n}$ (וכמובן, בכך שעל פי הבינום של ניוטון, $latex \sum_{i=0}^{n}{n \choose i}=\left(1+1\right)^{n}$).

שימו לב למסקנה הפשוטה מהזהות $latex \sum_{i=k}^{n}{n \choose i}u^{i-k}=\left[\frac{\left(u+1\right)^{n}}{u^{k}}\right]$ - אם ניקח את המשוואה הזו ונתבונן עליה מודולו $latex u$, נקבל $latex {n \choose k}\equiv_{u}\left[\frac{\left(u+1\right)^{n}}{u^{k}}\right]$, כי כל שאר המחוברים מתאפסים כשמסתכלים על המשוואה מודולו $latex u$. זה התעלול שיאפשר לנו להגדיר את $latex {n \choose k}$ דיופנטית. מה שמעניין במשוואה הזו היא שאגף שמאל <strong>לא כולל </strong>את $latex u$. מה שראינו הוא ש<strong>לכל</strong> $latex u&gt;2^{n}$ מתקיים ש-$latex \left[\frac{\left(u+1\right)^{n}}{u^{k}}\right]$ שקול מודולו $latex u$ ל-$latex {n \choose k}$. כעת, $latex {n \choose k}&lt;2^{n}&lt;u$ ולכן זו יותר מסתם שקילות - זה מה שמתקבל כשלוקחים את $latex \left[\frac{\left(u+1\right)^{n}}{u^{k}}\right]$, מחלקים ב-$latex u$ ובודקים מה השארית (נסו לחשב בעצמכם - במחשב - כמה מקרים אם אינכם מאמינים). זה מאפשר לנו להגדיר את $latex {n \choose k}$ באמצעות הביטוי הדיופנטי הבא:

$latex z={n \choose k}\iff\exists u,v,w\left(v=2^{n}\wedge u&gt;v\wedge w=\left[\frac{\left(u+1\right)^{n}}{u^{k}}\right]\wedge z\equiv_{u}w\wedge z&lt;u\right)$

יש כאן כמה וכמה רכיבים בתוך הסוגריים שצריך להשתכנע שכל אחד מהם לכשעצמו הוא דיופנטי. אז ראשית, $latex v=2^{n}$ הוא דיופנטי כי הפונקציה האקספוננציאלית היא דיופנטית (לכן נזקקנו לה). הביטוי $latex u&gt;v$ הוא בבירור דיופנטי (ראינו את זה בעבר - נסו לשחזר מהראש). כנ"ל $latex z&lt;u$. הביטוי $latex z\equiv_{u}w$ אולי נראה טיפה יותר טריקי, אבל הוא שקול ל-$latex \exists a\left(z=ua+w\right)$ הדיופנטי. מי נשאר? רק $latex w=\left[\frac{\left(u+1\right)^{n}}{u^{k}}\right]$ המפחיד. האתגר הוא בעצם להראות ש-$latex w=\left[\frac{x}{y}\right]$ הוא דיופנטי, כי $latex \left(u+1\right)^{n}$ ו-$latex u^{k}$ הן פונקציות אקספוננציאליות ולכן דיופנטיות. למרבה המזל, מכיוון שאי-שוויונים הם דיופנטיים, קל לתאר גם את $latex w=\left[\frac{x}{y}\right]$: הרי אם $latex w=\left[\frac{x}{y}\right]$ זה אומר ש-$latex w\le\frac{x}{y}\le w+1$ ולכן $latex yw\le x\wedge x\le y\left(w+1\right)$, ושתי המשוואות הללו מספיקות. מסקנה סופית: $latex {n \choose k}$ היא דיופנטית (בזכות העובדה שהפונקציה האקספוננציאלית היא דיופנטית).

בואו נעבור עכשיו לתקוף פונקציה מפורסמת אחרת שגדלה מהר: $latex f\left(n\right)=n!$. גם כאן כדי לתקוף אותה אנחנו צריכים משוואה אלגברית נחמדה כלשהי שהיא מקיימת; במקרה שלנו, אם $latex u&gt;\left(2n\right)^{n+1}$ אז $latex n!=\left[u^{n}/{u \choose n}\right]$ היא המשוואה המדוברת. שימו לב שזה משהו בסגנון דומה להוכחה הקודמת; גם פה אנחנו משתמשים בכך שאם אנחנו לוקחים שתי פונקציות שגדלות מהר עם בסיס כלשהו שמסומן ב-$latex u$ שהוא גדול דיו, אז מקבלים קירוב רציונלי די טוב לפונקציה שאנחנו רוצים לתקוף. כמו קודם, בואו ננסה להבין מהו $latex u^{n}/{u \choose n}$ עבור $latex u$ גדול שכזה:

$latex u^{n}/{u \choose n}=u^{n}\cdot\frac{n!\left(u-n\right)!}{u!}=\frac{u^{n}n!}{u\left(u-1\right)\left(u-2\right)\cdots\left(u-n+1\right)}=n!\left(\frac{1}{1\left(1-\frac{1}{u}\right)\cdots\left(1-\frac{n-1}{u}\right)}\right)$

כל מה שהלך כאן הוא אלגברה בסיסית. הביטוי האחרון נראה קצת מבהיל אולי, אבל עם אי שוויון אפשר להיפטר ממנו די בקלות:

$latex n!\left(\frac{1}{1\left(1-\frac{1}{u}\right)\cdots\left(1-\frac{n-1}{u}\right)}\right)&lt;n!\frac{1}{\left(1-\frac{n}{u}\right)^{n}}$

זאת כי ככל שמגדילים את הערך של $latex x$ בביטוי $latex \left(1-\frac{x}{u}\right)$ כך מקטינים את הביטוי, ולכן מגדילים את אחד חלקי הביטוי.

עכשיו, $latex \frac{1}{\left(1-\frac{n}{u}\right)^{n}}=\left(\frac{1}{1-\frac{n}{u}}\right)^{n}$ ולכן כדאי לנו למצוא חסם כלשהו על מה שבפנים, $latex \frac{1}{1-\frac{n}{u}}$. לצורך כך כדאי להיזכר שהדבר הזה נראה כמו סכום של טור גיאומטרי. באופן כללי, אם $latex \left|q\right|&lt;1$, אז מתקיים

$latex \sum_{k=0}^{\infty}q^{k}=\frac{1}{1-q}$

ובמקרה שלנו $latex u&gt;2n$ (ממש ממש גדול יותר, אם תציצו שניה במה שדרשנו עליו) כך ש-$latex \frac{n}{u}&lt;\frac{1}{2}$, ולכן:

$latex \frac{1}{1-\frac{n}{u}}=\sum_{k=0}^{\infty}\left(\frac{n}{u}\right)^{k}=1+\left(\frac{n}{u}\right)\sum_{k=0}^{\infty}\left(\frac{n}{u}\right)^{k}&lt;1+\frac{n}{u}\sum_{k=0}^{\infty}\left(\frac{1}{2}\right)^{k}=1+\frac{2n}{u}$

כל המעברים כאן הם חשבון פשוט, אבל את השני ביצעתי קצת בזריזות: פשוט הוצאתי מהסכום את האיבר הראשון שלו (1) ואז הוצאתי החוצה גורם משותף לשאר האיברים ($latex \frac{n}{u}$).

עכשיו, מה קורה כשמעלים את זה בחזקת $latex n$? אפשר להשתמש בבינום של ניוטון ולקבל:

$latex \left(1+\frac{2n}{u}\right)^{n}=\sum_{k=0}^{n}{n \choose k}\left(\frac{2n}{u}\right)^{k}&lt;1+\frac{2n}{u}\sum_{k=1}^{n}{n \choose k}&lt;1+\frac{2n}{u}2^{n}$

גם פה רוב המעברים הם פשוטים - הראשון הוא הבינום, השני הוא פשוט פירוק לאיבר ראשון בסכום וכל היתר והוצאת גורם משותף והתעלמות מהיתר, בהתבסס על כך ש-$latex \frac{2n}{u}&lt;1$, והמעבר השלישי הוא פשוט הנוסחה $latex \sum_{k=0}^{n}{n \choose k}=2^{n}$ בפעולה.

בואו נזכר ממה התחלנו: $latex u^{n}/{u \choose n}$. הגענו לכך שהוא קטן מ-$latex n!\frac{1}{\left(1-\frac{n}{u}\right)^{n}}$, ולכן:

$latex u^{n}/{u \choose n}&lt;n!+\frac{2n}{u}2^{n}n!&lt;n!+\frac{2^{n+1}n^{n+1}}{u}&lt;n!+1$

המעבר הלפני אחרון נובע מכך ש-$latex n!&lt;n^{n}$ (כמובן - בשני המקרים מכפילים $latex n$ איברים אבל ב-$latex n!$ רובם קטנים יותר מ-$latex n$) המעבר האחרון נובע מההנחה שלנו על $latex u$: $latex u&gt;\left(2n\right)^{n+1}$. זה מסיים את ההוכחה כי זה מראה ש-$latex n!\le u^{n}/{u \choose n}&lt;n!+1$ ולכן לקיחת ערך שלם תמיד תחזיר לנו $latex n!$. אם עוד לא ברור למה הביטוי הזה הוא לפחות $latex n!$, זכרו ש-$latex u^{n}/{u \choose n}=\frac{u^{n}}{u\left(u-1\right)\left(u-2\right)\cdots\left(u-n+1\right)}n!$ - במונה ובמכנה יש $latex n$ מוכפלים, אבל במונה כולם $latex u$ ובמכנה רובם קטנים מ-$latex u$.

עכשיו אפשר להוכיח ש-$latex n!$ דיופנטית בהתבסס על כך ש-$latex {n \choose k}$ דיופנטית. הביטוי הדיופנטי הוא פשוט למדי:

$latex m=n!\iff\exists u\left[{u \choose n}m\le u^{n}\wedge u^{n}\le{u \choose n}\left(m+1\right)\wedge u&gt;\left(2n\right)^{n+1}\right]$

יפה. הראינו כבר על שלוש פונקציות שגדלות "מהר" שהן דיופנטיות - $latex n^{k},{n \choose k},n!$. עכשיו אפשר לעבור לפונקציה שהיא היעד הסופי שלנו, ובהשוואה לשלוש הפונקציות הטבעיות הללו אולי תהיה טיפה מאכזבת: $latex h\left(a,b,y\right)=\prod_{k=1}^{y}\left(a+bk\right)$. מילולית, הפונקציה כופלת את $latex y$ האיברים הראשונים בסדרה חשבונית שהאיבר הראשון שלה הוא $latex a+b$ וההפרש בין שני איברים סמוכים הוא $latex b$. למה הפונקציה הזו דווקא כל כך יעילה? ובכן... אה... זה טכני, חכו ותראו. לא תהיה תובנה מדהימה בסוף.

כדי להראות שהפונקציה הזו דיופנטית נשתמש בתעלול שאיכשהו יערבב את כל שלוש הפונקציות שראינו עד כה. ראשית, נניח שיש לנו $latex q,M$ שעבורם מתקיימת המשוואה $latex bq\equiv_{M}a$. אז נרצה להראות שהקסם הבא מתקיים:

$latex \prod_{k=1}^{y}\left(a+bk\right)\equiv_{M}b^{y}y!{q+y \choose y}$

ההוכחה דווקא פשוטה למדי הפעם. פשוט נפתח את הביטוי:

$latex b^{y}y!{q+y \choose y}=b^{y}y!\frac{\left(q+y\right)!}{y!q!}=b^{y}\left(q+y\right)\left(q+y-1\right)\cdots\left(q+1\right)$

$latex =\left(bq+by\right)\left(bq+b\left(y-1\right)\right)\cdots\left(bq+b\right)\equiv_{M}\prod_{k=1}^{y}\left(a+bk\right)$

מה שנותר לעשות הוא להבטיח שאכן קיימים $latex M,q$ שמקיימים את המשוואה $latex bq\equiv_{M}a$. בגלל האותיות העסק יכול להיראות מבלבל, אז בואו נשכח לרגע מהכל ונעבור לדון במשהו כללי - המשוואה הלינארית $latex ax\equiv_{n}b$ כאשר $latex a,b,n$ נתונים ואילו $latex x$ הוא המשתנה. הטענה היא שלמשוואה הזו קיים פתרון אם $latex \left(a,n\right)=1$, כלומר $latex a$ זר ל-$latex n$. הסיבה לכך היא שבמקרה הזה, קיים ל-$latex a$ הופכי כפלי מודולו $latex n$ ולכן $latex x\equiv_{n}a^{-1}b$. במקרה שלנו ה"משתנה" הוא בכלל $latex q$ ומה שאנחנו צריכים כדי שהמשוואה תהיה פתירה הוא שיתקיים $latex \left(b,M\right)=1$; למזלנו, אנחנו יכולים לבחור את $latex M$ כדי להבטיח שזה יקרה: נבחר $latex M=b\left(a+by\right)^{y}+1$, אז אגף ימין בודאות לא מתחלק על ידי אף ראשוני שמחלק את $latex b$ (כי כפלנו את $latex b$ במשהו והוספנו 1) ולכן $latex \left(M,b\right)$ זרים ומובטח לנו שקיים $latex q$ כלשהו (לא יודע מי) כך ש-$latex bq\equiv_{M}a$. את כל זה אפשר לכתוב בתור ביטוי דיופנטי:

$latex z=\prod_{k=1}^{y}\left(a+bk\right)\iff\exists M,q,t,p$

$latex M=b\left(a+by\right)^{y}+1\wedge bq=a+Mt$

$latex \wedge z&lt;M\wedge z+Mp=b^{y}y!{q+y \choose y}$

ובזאת סיימנו את שלב בניית הכלים. סוף סוף יש לנו את מה שמאפשר להוכיח שהכמת האוניברסלי החסום הוא דיופנטי - הצעד האחרון בהוכחה כולה!

בואו נעבור על מה שאנחנו רוצים לעשות. ביטוי דיופנטי מתורגם בסופו של דבר לפולינום $latex P$ ולמשוואה

$latex \exists y_{1},\dots,y_{m}\left[P\left(x_{1},\dots,x_{n},y_{1},\dots,y_{m}\right)=0\right]$

שמגדירה קבוצה - בדיוק את קבוצת ה-$latex x$-ים שכשמציבים אותם מקבלים משוואה פתירה.

מה שאנחנו רוצים לעשות הוא להוכיח שגם את הביטוי הבא:

$latex \forall z\le y\exists y_{1},\dots,y_{m}\left[P\left(x_{1},\dots,x_{n},z,y,y_{1},\dots,y_{m}\right)=0\right]$

עבור פולינום $latex P$ כלשהו, אפשר להמיר לביטוי מהסוג שלעיל, שלא כולל כמת "לכל" ועדיין מגדיר את אותה קבוצת $latex x$-ים שכשמציבים אותם מקבלים משוואה פתירה. אבחנה אחת להתחלה היא שהביטוי שכתבתי כרגע שקול לביטוי

$latex \exists u\forall_{\le y}z\exists_{\le u}y_{1},\dots,y_{m}\left[P\left(x_{1},\dots,x_{n},z,y,y_{1},\dots,y_{m}\right)=0\right]$

שבו אני מגביל את $latex z$ להיות קטן או שווה ל-$latex y$ כלשהו ומגביל את כל ה-$latex y_{i}$-ים להיות קטנים מ-$latex u$ כלשהו שכמובן קיים בהנחה שקיימים $latex y_{i}$-ים שפותרים את המשוואה (פשוט קחו את המקסימום מביניהם).

עכשיו לאקשן. אני טוען שבהינתן פולינום $latex Q$ מתאים, הביטוי הבא:

$latex \forall_{\le y}z\exists_{\le u}y_{1},\dots,y_{m}\left[P\left(x_{1},\dots,x_{n},z,y,y_{1},\dots,y_{m}\right)=0\right]$

שקול לביטוי המפלצתי הבא, שהחשיבות שלו בכך שהוא <strong>לא כולל</strong> את הכמת האוניברסלי:

$latex \exists c,t,a_{1},\dots,a_{m}$

$latex 1+ct=\prod_{k=1}^{y}1+kt$

$latex \wedge t=Q\left(y,u,x_{1},\dots,x_{n}\right)!\wedge1+ct|\prod_{j=1}^{u}\left(a_{1}-j\right)$

$latex \wedge\dots\wedge1+ct|\prod_{j=1}^{u}\left(a_{m}-j\right)$

$latex \wedge P\left(x_{1},\dots,x_{n},c,y,a_{1},\dots,a_{m}\right)\equiv_{1+ct}0$

כדי שזה יעבוד, $latex Q\left(y,u,x_{1},\dots,x_{n}\right)$ צריך לקיים את שלוש התכונות הבאות:

$latex Q\left(y,u,x_{1},\dots,x_{n}\right)&gt;u$

$latex Q\left(y,u,x_{1},\dots,x_{n}\right)&gt;y$

אם $latex z\le y$ וגם $latex y_{1},\dots,y_{m}\le u$ אז

$latex \left|P\left(x_{1},\dots,x_{n},z,y,y_{1},\dots,y_{m}\right)\right|\le Q\left(y,u,x_{1},\dots,x_{n}\right)$

זהו. אם נצליח לעשות את זה, גמרנו, שכן בבירור הביטוי המפלצתי שכתבתי הוא דיופנטי - הוא כולל רק את $latex \prod\left(a+bk\right)$ שכבר ראינו שהיא דיופנטית, ואת היחס $latex a|b$ ("$latex a$ מחלק את $latex b$") שכבר ראינו שהוא דיופנטי, ואת היחס $latex \equiv$ שכבר ראינו שהוא דיופנטי, ואת הפונקציה $latex n!$ שכבר ראינו שהיא דיופנטית.

עכשיו מכיוון שזו הוכחת שקילות, צריך להוכיח שני כיוונים. בואו נניח קודם כל שיש לנו $latex x_{1},\dots,x_{n},y,u$ שעבורם הביטוי הדיופנטי המפלצתי הוא נכון (כלומר, יש פתרון למשוואות שלו) ונראה שקיים ערך של $latex z$ שחסום על ידי $latex y$ כך שעבורו קיימים ערכים של $latex y_{i}$-ים שחסומים על ידי $latex u$ כך ש-$latex P\left(x_{1},\dots,x_{n},z,y,y_{1},\dots,y_{m}\right)=0$.

בואו נניח ש-$latex z=k$, כאשר $latex 1\le k\le y$. אנחנו רוצים למצוא $latex y_{1}^{\left(k\right)},\dots,y_{m}^{\left(k\right)}$ כך ש-$latex P\left(x_{1},\dots,x_{n},y,k,y_{1}^{\left(k\right)},\dots,y_{m}^{\left(k\right)}\right)=0$. אנחנו יודעים שהביטוי הדיופנטי המפלצתי פתיר. אז בואו ניקח את הצבת הערכים לתוכו ונשתמש בה. בפרט, הצבת הערכים הזו נותנת לנו $latex a_{1},\dots,a_{m}$ ו-$latex t$. בואו נסמן ב-$latex p_{k}$ גורם ראשוני כלשהו של $latex 1+kt$, וכעת נגדיר:

$latex y_{i}^{\left(k\right)}=a_{i}\mbox{ mod }p_{k}$

דהיינו, $latex y_{i}^{\left(k\right)}$ מתקבל מחלוקת $latex a_{i}$ ב-$latex p_{k}$ ולקיחת השארית. אני טוען שהערכים הללו אכן מספקים את $latex P$, ושהם לא גדולים מ-$latex u$, כלומר $latex 1\le y_{i}^{\left(k\right)}\le u$. מדוע?

ובכן, ראשית נטפל בעניין הגודל. שימו לב לכך ש-$latex p_{k}|1+kt$ (כי בחרנו את $latex p_{k}$ להיות גורם של הביטוי הימני), וש-$latex 1+kt|1+ct$ (זה נובע מייד מהמשוואה הראשונה בביטוי המפלצתי) וש-$latex 1+ct|\prod_{j=1}^{u}\left(a_{i}-j\right)$ (זו אחת מהמשוואות בביטוי המפלצתי). מסקנה: $latex p_{k}|\prod_{j=1}^{u}\left(a_{i}-j\right)$, אבל מכיוון שלקחנו את $latex p_{k}$ להיות ראשוני, אם הוא מחלק מכפלה הוא מחלק אחד מאיבריה, כלומר יש $latex j$ ספציפי כלשהו כך ש-$latex p_{k}|a_{i}-j$. מסקנה: $latex a_{i}\equiv_{p_{k}}j\equiv_{p_{k}}y_{i}^{\left(k\right)}$.

אם אצליח לשכנע אתכם ש-$latex y_{i}^{\left(k\right)}=j$ זה יראה ש-$latex y_{i}^{\left(k\right)}$ קטן מספיק, כי $latex 1\le j\le u$. כעת, $latex y_{i}^{\left(k\right)}$ התקבל מחלוקה של משהו ב-$latex p_{k}$ ולקיחת השארית, כלומר הוא אוטומטית קטן מ-$latex p_{k}$. אם נוכיח ש-$latex j&lt;p_{k}$ זה יסיים את העניין כי שני מספרים ששקולים מודולו $latex p_{k}$ ושניהם קטנים מ-$latex p_{k}$ חייבים להיות שווים. כדי להראות ש-$latex j&lt;p_{k}$ מספיק להראות ש-$latex u&lt;p_{k}$. כעת נכניס את $latex Q$ לתמונה: כזכור, $latex Q\left(y,u,x_{1},\dots,x_{n}\right)&gt;u$, ולכן די לנו להראות ש-$latex p_{k}&gt;Q\left(y,u,x_{1},\dots,x_{n}\right)$. איך נעשה את זה? ובכן, בואו נסתכל על הביטוי המפלצתי ונראה איך $latex Q$ בא לידי ביטוי בו.

יש רק משוואה אחת שמערבת את $latex Q$: $latex t=Q\left(y,u,x_{1},\dots,x_{n}\right)!$. מילולית זה אומר ש-$latex t$ הוא מכפלת <strong>כל</strong> המספרים הטבעיים עד וכולל $latex Q\left(y,u,x_{1},\dots,x_{n}\right)$. כעת, אם מישהו מחלק את $latex 1+kt$ אז הוא לא מחלק את $latex t$, ולכן הוא לא יכול להיות אף אחד מהמספרים הטבעיים עד וכולל $latex Q\left(y,u,x_{1},\dots,x_{n}\right)$. מסקנה: $latex p_{k}&gt;Q\left(y,u,x_{1},\dots,x_{n}\right)!$, וזה מה שרצינו.

הראינו אם כן שה-$latex y_{i}^{\left(k\right)}$-ים הם בסדר הגודל הנכון, אבל למה הם פותרים את $latex P$?

ובכן, מכיוון ש-$latex p_{k}$ מחלק את $latex 1+kt$ וגם את $latex 1+ct$ הרי שקיבלנו:

$latex 1+ct\equiv_{p_{k}}0$

$latex 1+kt\equiv_{p_{k}}0$

נכפול את המשוואה הראשונה ב-$latex k$, את השניה ב-$latex c$, ונקבל:

$latex k+kct\equiv_{p_{k}}0$

$latex c+kct\equiv_{p_{k}}0$

נשווה את שתיהן ונקבל ש-$latex k\equiv_{p_{k}}c$. כמו כן, אנחנו זוכרים שעל פי הגדרתם, $latex y_{i}^{\left(k\right)}\equiv_{p_{k}}a_{i}$. המסקנה:

$latex P\left(x_{1},\dots,x_{n},k,y,y_{1}^{\left(k\right)},\dots,y_{m}^{\left(k\right)}\right)\equiv_{p_{k}}P\left(x_{1},\dots,x_{n},c,y,a_{1},\dots,a_{m}\right)\equiv_{p_{k}}0$

(המעבר השני נובע מכך ש-$latex P\equiv_{1+ct}0$ ו-$latex p_{k}$ מחלק את $latex 1+ct$).

עכשיו, השוויון שלעיל לא אומר ש-$latex P\left(x_{1},\dots,x_{n},k,y,y_{1}^{\left(k\right)},\dots,y_{m}^{\left(k\right)}\right)=0$, רק שקול לאפס מודולו $latex p_{k}$. כדי להראות שוויון לאפס צריך להראות שהביטוי הזה גם קטן מ-$latex p_{k}$. אבל זה שוב נובע מ-$latex Q$, הפעם מהתכונה השלישית שלו:

$latex \left|P\left(x_{1},\dots,x_{n},k,y,y_{1}^{\left(k\right)},\dots,y_{m}^{\left(k\right)}\right)\right|\le Q\left(y,u,x_{1},\dots,x_{n}\right)&lt;p_{k}$

וסיימנו את כיוון הגרירה הראשון, לפיו אם $latex x_{1},\dots,x_{n}$ פותרים את הביטוי המפלצתי הם פותרים את $latex P$ ה"רגיל".

נותר הכיוון השני. נניח שעבור $latex x_{1},\dots,x_{n},y$, לכל $latex 1\le k\le y$ יש $latex y_{1}^{\left(k\right)},\dots,y_{m}^{\left(k\right)}$ כך ש-

$latex P\left(x_{1},\dots,x_{n},k,y,y_{1}^{\left(k\right)},\dots,y_{m}^{\left(k\right)}\right)=0$.

אנחנו רוצים עכשיו להוכיח קיום של $latex t,c,a_{1},\dots,a_{m}$ שפותרים את מערכת המשוואות המפלצתית.

נסמן בתור $latex u$ מספר שגדול מכל ה-$latex y_{i}^{\left(k\right)}$-ים הללו. כעת, נגדיר $latex t=Q\left(y,u,x_{1},\dots,x_{n}\right)!$. נותר לנו להגדיר את $latex c$ ואת ה-$latex a_{i}$-ים.

כעת, $latex 1+kt\equiv_{t}1$ ולכן $latex \prod_{k=1}^{y}\left(1+kt\right)\equiv_{t}1$. המשמעות הישירה של השקילות הזו היא שקיים $latex c$ כך ש-$latex \prod_{k=1}^{y}\left(1+kt\right)=1+ct$, כך שמצאנו את ה-$latex c$ שלנו והוא מקיים את המשוואה הראשונה בביטוי המפלצתי. נשאר רק לבחור את ה-$latex a_{i}$-ים כך שיקיימו את המשוואות $latex 1+ct|\prod_{j=1}^{u}\left(a_{i}-j\right)$, וכך שיתקיים $latex P\left(x_{1},\dots,x_{n},c,y,a_{1},\dots,a_{m}\right)\equiv_{1+ct}0$. זה השלב שידרוש תחכום ושימוש במשפט השאריות הסיני.

מה שאני רוצה לעשות הוא להגדיר את $latex a_{i}$ להיות הפתרון למערכת המשוואות $latex a_{i}\equiv_{1+kt}y_{i}^{\left(k\right)}$, $latex 1\le k\le y$ (זה לא כל כך מפתיע מבחינה רעיונית - אם אתם עוד מצליחים לעקוב אחרי מה שקורה בהוכחה ברמת התמונה הגדולה - אני בקושי מצליח - אפשר לראות שה-$latex a_{i}$-ים הללו אמורים לקודד בתוכם איכשהו את הפתרונות ל-$latex P$ עבור כל בחירה של $latex k$ בתחום המתאים). כדי להראות שקיים פתרון למערכת הזו צריך להוכיח שכל המודולוסים זרים, כלומר ש-$latex \left(1+kt,1+lt\right)=1$ עבור $latex 1\le l&lt;k\le y$. נניח בשלילה שיש איזה ראשוני $latex p$ שמחלק את שניהם, אז הוא מחלק גם את ההפרש שלהם, כלומר $latex p|t\left(k-l\right)$. שימו לב ש-$latex p$ לא יכול לחלק את $latex t$, אחרת הוא לא היה מחלק את $latex 1+kt$, ולכן בהכרח $latex p|k-l$. בפרט זה אומר ש-$latex p&lt;y$. כעת, תעלול! הגדרנו $latex t=Q\left(y,u,x_{1},\dots,x_{n}\right)!$, והרי $latex Q\left(y,u,x_{1},\dots,x_{n}\right)&gt;y$, ולכן כל מספר עד $latex y$ נכלל במכפלה שמרכיבה את $latex t$, ולכן $latex p$ חייב לחלק את $latex t$ וזו סתירה. מסקנה: $latex \left(1+kt,1+lt\right)=1$ ואפשר להשתמש במשפט השאריות הסיני כפי שרצינו כדי למצוא את ה-$latex a_{i}$-ים.

למה זה עזר לנו? ובכן, שימו לב כי לכל $latex k$ אנחנו מקבלים:

$latex P\left(x_{1},\dots,x_{n},c,y,a_{1},\dots,a_{m}\right)\equiv_{1+kt}P\left(x_{1},\dots,x_{n},k,y,y_{1}^{\left(k\right)},\dots,y_{m}^{\left(k\right)}\right)=0$

כלומר, לכל $latex 1\le k\le y$ קיבלנו ש-$latex 1+kt$ מחלק את $latex P\left(x_{1},\dots,x_{n},c,y,a_{1},\dots,a_{m}\right)$. מכיוון שכל ה-$latex 1+kt$-ים זרים זה לזה, אפשר להשתמש במשפט נוסף: אם שני מספרים זרים זה לזה מחלקים את אותו מספר, גם המכפלה שלהם מחלקת אותו. בסימנים: אם $latex a|c$ וגם $latex b|c$ וגם $latex \left(a,b\right)=1$ אז $latex ab|c$.

המסקנה שלנו היא ש-$latex 1+ct=\prod_{k=1}^{y}1+kt$ מחלק את $latex P\left(x_{1},\dots,x_{n},c,y,a_{1},\dots,a_{m}\right)$, וזו בדיוק המשוואה האחרונה בביטוי המפלצתי. כמעט סיימנו. נשאר רק להראות שמתקיים $latex 1+ct|\prod_{j=1}^{u}\left(a_{i}-j\right)$ לכל $latex a_{i}$. לשם כך מספיק, כפי שראינו, להראות שלכל $latex a_{i}$ ולכל $latex k$ מתקיים $latex 1+kt|\prod_{j=1}^{u}\left(a_{i}-j\right)$. כדי לחלק מכפלה מספיק לחלק איבר אחד שלה, כלומר מספיק לנו להראות שלכל $latex a_{i}$ ולכל $latex k$ קיים $latex j$ כך ש-$latex 1+kt|a_{i}-j$, אבל זה קל: מכיוון שהגדרנו את $latex a_{i}$ להיות איבר שמקיים $latex a_{i}\equiv_{1+kt}y_{i}^{\left(k\right)}$ זה אומר ש-$latex 1+kt$ מחלק את $latex a_{i}-y_{i}^{\left(k\right)}$ ולכן $latex y_{i}^{\left(k\right)}$ הוא ה-$latex j$ שלנו; רק צריך לשים לב לכך ש-$latex 1\le y_{i}^{\left(k\right)}\le u$ ולכן הוא בתחום המתאים (הנה לנו הסיבה שבגללה היה חשוב להגביל את הערכים של ה-$latex y_{i}$-ים).

סיימנו!

...

או שלא. מה עוד חסר? הפולינום $latex Q$. הרי אמרתי "אני טוען שבהינתן פולינום $latex Q$ מתאים..." ואחר כך נתתי שלוש דרישות ש-$latex Q$ צריך לקיים. אני עדיין צריך להציג את $latex Q$ הזה, ובכך נסיים סופית את ההוכחה.

הבניה של $latex Q$ אינה מורכבת, אבל כיף זה לא הולך להיות. בואו פשוט נראה אותה. ראשית כל, בואו נציג את $latex P$ בתור סכום של מונומים, כלומר נכתוב

$latex P\left(x_{1},\dots,x_{n},k,y,y_{1},\dots,y_{m}\right)=\sum_{r=1}^{N}t_{r}$

כך שכל מונום הוא בעל המראה המזעזע הבא:

$latex t_{r}=cx_{1}^{q_{1}}\cdots x_{n}^{q_{n}}k^{a}y^{b}y_{1}^{s_{1}}\cdots y_{m}^{s_{m}}$

בואו נגדיר מונום חדש, $latex u_{r}$, על בסיס $latex t_{r}$:

$latex u_{r}=\left|c\right|y^{a+b}x_{1}^{q_{1}}\cdots x_{n}^{q_{n}}u^{s_{1}+\dots s_{m}}$

ועכשיו נגדיר את $latex Q$:

$latex Q\left(y,u,x_{1},\dots,x_{n}\right)=u+y+\sum_{r=1}^{N}u_{r}$

בבירור מתקיים $latex Q\left(y,u,x_{1},\dots,x_{n}\right)&gt;u$ וגם $latex Q\left(y,u,x_{1},\dots,x_{n}\right)&gt;y$ רק מעצם הבניה (זכרו שכל הערכים שאפשר להציב בפולינום הם חיוביים). צריך רק להסביר למה מתקיים

$latex \left|P\left(x_{1},\dots,x_{n},k,y,y_{1},\dots,y_{m}\right)\right|\le Q\left(y,u,x_{1},\dots,x_{n}\right)$

וזאת, כזכור, בתנאי ש-$latex k\le y$ וגם $latex y_{1},\dots,y_{m}\le u$.

אז למה זה נכון? ובכן, עם אי-שוויון המשולש נקבל:

$latex \left|P\left(x_{1},\dots,x_{n},k,y,y_{1},\dots,y_{m}\right)\right|\le\sum_{r=1}^{N}\left|t_{r}\right|$

לכן מספיק להשוות מונום-מונום ולהראות ש-$latex \left|t_{r}\right|\le u_{r}$.

את $latex t_{r}$ אפשר להפריד לשלושה חלקים. הראשון הוא $latex \left|c\right|x_{1}^{q_{1}}\cdots x_{n}^{q_{n}}$ שקיים כמו שהוא גם ב-$latex u_{r}$; השני הוא $latex k^{a}y^{b}$ שמכוסה על ידי $latex y^{a+b}$ של $latex u_{r}$ בתנאי ש-$latex k\le y$; והשלישי הוא $latex y_{1}^{s_{1}}\cdots y_{m}^{s_{m}}$ שמכוסה על ידי $latex u^{s_{1}+\dots s_{m}}$ בתנאי ש-$latex y_{i}\le u$. זה מסיים את הבניה של $latex Q$, ולכן מסיים את ההוכחה של הטענה לפיה אפשר לבנות ביטויים דיופנטיים עם הכמת האוניברסלי החסום, ולכן מסיים את ההוכחה שהבעיה העשירית של הילברט לא כריעה!

לא ברור לי כמה מכם הצליחו לשרוד איתי עד לשלב הזה; אכתוב עוד פוסט סיכום (קצר) כדי לחזור על מה שהלך פה ממעוף הציפור ולסיים עם בונוס קטן שקשור למספרים הראשוניים.
