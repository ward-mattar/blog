---
id: 3108
title: "מכפלות טנזוריות (של מרחבים וקטוריים)"
date: 2014-06-10 11:37:08
layout: post
categories: 
  - אלגברה לינארית
tags: 
  - מכפלה טנזורית
---
בסדרת הפוסטים שלי על אלגברה לינארית יש נושא אחד שהזנחתי בצד - <strong>מכפלה טנזורית</strong> של מרחבים וקטוריים. לא הזנחתי אותו במקרה, וזה גם לא מקרה שספרי הלימוד הסטנדרטיים באלגברה לינארית לא מתעסקים בו יותר מדי - לרוב אין בו צורך, והוא קצת קשה לעיכול בשל האבסטרקטיות היחסית שלו. הדרך ה"נכונה" עבור מתמטיקאים להתקל במכפלות טנזוריות היא בהקשרים מתקדמים יותר מאשר קורס בסיסי באלגברה לינארית, ואחרי שמבינים את המושג בהקשרים הללו גם אין בעיה להבין אותו בהקשר הספציפי של מרחבים וקטוריים.

אבל, אני הולך להצטרך את המושג הזה בהמשך, ואני רוצה לתת לו מבוא קל עד כמה שאפשר, שלא יצריך מתמטיקה מתקדמת בכלל, ורק ידע בסיסי באלגברה לינארית (מהם מרחבים וקטוריים ואולי גם קצת מהן טרנספורמציות לינאריות). בנוסף, אני רוצה להציג את המושג הזה בצורה שתהיה ידידותית יחסית ולכן לא אגש ישר להגדרות אלא קודם אנסה לתת מוטיבציה. אחר כך אתן הגדרה שהיא מאוד ישירה, ורק בסוף אתן את ההגדרה שמסתכלת על הכל "ממעוף הציפור" והיא כנראה ההגדרה הנכונה ביותר.

מה שמתמטיקאים אוהבים לעשות, בהינתן אובייקטים מתמטיים, הוא לבנות מהם אובייקטים מתמטיים חדשים. בניה נפוצה אחת שניתן לבצע היא זו: אם יש לנו שתי קבוצות {::nomarkdown}\( A,B\){:/nomarkdown} שהן <strong>זרות</strong>, כלומר אין להן איברים משותפים, אנחנו בונים קבוצה חדשה שהיא <strong>האיחוד הזר</strong> שלהן: {::nomarkdown}\( C=A\cup B=\left\{ x\ \|\ x\in A\vee x\in B\right\} \){:/nomarkdown}. הקבוצה הזו כוללת את כל האיברים שנמצאים או ב-{::nomarkdown}\( A\){:/nomarkdown} או ב-{::nomarkdown}\( B\){:/nomarkdown}. אם נחשב את הגודל שלה - מספר האיברים שבה - נקבל שהוא {::nomarkdown}\( \left\|A\cup B\right\|=\left\|A\right\|+\left\|B\right\|\){:/nomarkdown}. כלומר, איחוד זר מתקשר לנו אינטואיטיבית ל"חיבור" של קבוצות.

באופן דומה מוגדרת <strong>מכפלה קרטזית</strong> של קבוצות: {::nomarkdown}\( A\times B=\left\{ \left(a,b\right)\ \|\ a\in A,b\in B\right\} \){:/nomarkdown} - אוסף כל הזוגות של איברים שהשמאלי מביניהם שייך ל-{::nomarkdown}\( A\){:/nomarkdown} והימני שייך ל-{::nomarkdown}\( B\){:/nomarkdown}. מתקיים ש-{::nomarkdown}\( \left\|A\times B\right\|=\left\|A\right\|\cdot\left\|B\right\|\){:/nomarkdown}, כך שמכפלה קרטזית אכן מתקשרת לנו אינטואיטיבית ל"כפל" של קבוצות.

כעת, רוב הקבוצות במתמטיקה כוללות <strong>מבנה</strong> כלשהו שמגיע עליהן - מבנה של מרחב וקטורי, או חבורה, או מרחב טופולוגי, או אלף ואחד דברים אחרים. ואם אנחנו בונים מתוך שתי קבוצות בעלות מבנה קבוצה חדשה, אנחנו רוצים להגדיר גם עליה את אותו מבנה, באופן ש"נובע" איכשהו מהמבנה על הקבוצות הקיימות. אנחנו מדברים על מרחבים וקטוריים כאן, ולכן אני אתאר איך זה קורה במקרה שלהם.

בואו ניקח שני מרחבים וקטוריים {::nomarkdown}\( V,W\){:/nomarkdown} מעל שדה {::nomarkdown}\( \mathbb{F}\){:/nomarkdown}, עם ממדים {::nomarkdown}\( n,m\){:/nomarkdown} בהתאמה. אוטומטית, לא ייתכן ש-{::nomarkdown}\( V,W\){:/nomarkdown} הן קבוצות זרות כי שתיהן כוללות את איבר האפס של המרחב הוקטורי. אבל הן יכולות להיות "זרות-פרט-לאפס", כלומר {::nomarkdown}\( V\cap W=\left\{ 0\right\} \){:/nomarkdown}. במקרה הזה, אפשר להגדיר את מה שנקרא <strong>סכום ישר</strong> של שני המרחבים: {::nomarkdown}\( V\oplus W\triangleq\left\{ v+w\ \|\ v\in V,w\in W\right\} \){:/nomarkdown}. בהגדרה הזו מובלעת הנחה שאנחנו יודעים איך לחבר את האיברים של {::nomarkdown}\( V\){:/nomarkdown} עם האיברים של {::nomarkdown}\( W\){:/nomarkdown}, אז אפשר להניח לצורך פשטות ש-{::nomarkdown}\( V,W\){:/nomarkdown} הם תת-מרחבים של מרחב גדול יותר; אפשר להסתדר גם בלי ההנחה הזו, כפי שנראה תכף.

כעת, בואו ניקח שני <strong>בסיסים</strong> עבור המרחבים הללו: עבור {::nomarkdown}\( V\){:/nomarkdown} נסמן את אברי הבסיס בתור {::nomarkdown}\( \left\{ e_{1},\dots,e_{n}\right\} \){:/nomarkdown}, ואילו עבור {::nomarkdown}\( W\){:/nomarkdown} נסמן את אברי הבסיס בתור {::nomarkdown}\( \left\{ f_{1},\dots,f_{m}\right\} \){:/nomarkdown}. כעת זה תרגיל לא קשה להראות שהקבוצה {::nomarkdown}\( \left\{ e_{1},\dots,e_{n},f_{1},\dots,f_{m}\right\} \){:/nomarkdown} היא בסיס ל-{::nomarkdown}\( V\oplus W\){:/nomarkdown}, ולכן המימד של {::nomarkdown}\( V\oplus W\){:/nomarkdown} שווה ל-{::nomarkdown}\( n+m\){:/nomarkdown}. אם כן, זו האינטואיציה שלנו ל"סכום" של שני מרחבים וקטוריים. שימו לב שויתרנו על האינטואיציה הנאיבית של "שתי הקבוצות יהיו זרות"; שימו לב שגם ויתרנו על האינטואיציה הנאיבית של "המרחב יהיה מורכב בדיוק מאברי האיחוד הזר" (תחת זאת הוא מורכב מסכומים שלהם). עדיין, התוצאה שקיבלנו היא התאמה די טבעית של רעיון ה"סכום" של שתי קבוצות עבור ההקשר של מרחבים וקטוריים.

מכפלה טנזורית של מרחבים וקטוריים זה אותו דבר, רק עבור - לא מפתיע - כפל.

איך נכפול מרחבים וקטוריים? אני יכול לחשוב מיידית על שתי דרכים אינטואיטיביות נורא לעשות את זה. רק מה, כפי שנראה הראשונה היא לא מעניינת, והשניה היא הדרך הנכונה. הראשונה היא פשוט להסתכל על קבוצת כל הזוגות {::nomarkdown}\( V\times W=\left\{ \left(v,w\right)\ \|\ v\in V,w\in W\right\} \){:/nomarkdown} ולהגיד "הנה מרחב וקטורי חדש. איבר האפס שלו הוא {::nomarkdown}\( \left(0,0\right)\){:/nomarkdown}. חיבור שני וקטורים הוא בצורה הטבעית, {::nomarkdown}\( \left(a_{1},b_{1}\right)+\left(a_{2},b_{2}\right)\triangleq\left(a_{1}+a_{2},b_{1}+b_{2}\right)\){:/nomarkdown}. כפל בסקלר הוא בצורה הטבעית, {::nomarkdown}\( \lambda\left(a,b\right)=\left(\lambda a,\lambda b\right)\){:/nomarkdown}".

אוקיי, נחמד, למה אני אומר שזה לא מעניין? כי כרגע הגדרתי מחדש את {::nomarkdown}\( V\oplus W\){:/nomarkdown} בתחפושת. הנה לכם איזומורפיזם בין שני המרחבים הללו: טרנספורמציה לינארית {::nomarkdown}\( T:V\times W\to V\oplus W\){:/nomarkdown} שהיא חח"ע ועל: {::nomarkdown}\( T\left(\left(a,b\right)\right)=a+b\){:/nomarkdown}. וואו, זה היה פשוט. אתם מוזמנים להוכיח שזה גם עובד.

אני חושב שדרך נוחה מאוד להבין את העניין היא דרך מרחבים וקטוריים מעל שדה <strong>סופי</strong>. נאמר, {::nomarkdown}\( \left\|\mathbb{F}\right\|=3\){:/nomarkdown}. במקרה הזה, אנחנו יודעים בדיוק כמה איברים יש ב-{::nomarkdown}\( V\){:/nomarkdown}: לכל איבר ב-{::nomarkdown}\( V\){:/nomarkdown} יש ייצוג יחיד בצורה {::nomarkdown}\( \sum\lambda_{i}e_{i}\){:/nomarkdown} כך ש-{::nomarkdown}\( \lambda_{i}\in\mathbb{F}\){:/nomarkdown}, כלומר יש 3 אפשרויות לערך של {::nomarkdown}\( \lambda_{i}\){:/nomarkdown} לכל {::nomarkdown}\( 1\le i\le n\){:/nomarkdown}, ולכן - קומבינטוריקה פשוטה - {::nomarkdown}\( \left\|V\right\|=3^{n}\){:/nomarkdown}. בדומה, {::nomarkdown}\( \left\|W\right\|=3^{m}\){:/nomarkdown}. ולכן: {::nomarkdown}\( \left\|V\times W\right\|=\left\|V\right\|\cdot\left\|W\right\|=3^{n}3^{m}=3^{n+m}\){:/nomarkdown}. כבר מהתוצאה המספרית הזו אנו רואים שהמכפלה הקרטזית תניב לנו מרחב וקטורי שהמימד שלו הוא {::nomarkdown}\( n+m\){:/nomarkdown}. אין עם זה שום בעיה עקרונית, כן? הסכום הישר של מרחבים וקטוריים הוא בניה חשובה ומועילה מאוד.

גישת ה"מכפלה" עוזרת לפייס את מי שלא הבין איך אפשר לקחת סכום ישר של מרחבים וקטוריים שאנחנו לא יודעים איך לחבר את האיברים שלהם: התשובה היא שאנחנו לא באמת מחברים אותם אלא מסתכלים על <strong>סכומים פורמליים</strong> של אבריהם. כלומר, אני כותב {::nomarkdown}\( v+w\){:/nomarkdown}, אבל אני לא מתכוון בכך בהכרח לכך שאפשר לבצע פישוט כלשהו שיניב מ-{::nomarkdown}\( v+w\){:/nomarkdown} איבר {::nomarkdown}\( u\){:/nomarkdown} שהוא "שניהם ביחד"; פשוט אין לי בעיה להשאיר את הביטוי הזה בצורת סכום. כולנו מכירים סכומים פורמליים לפחות במקום אחד - פולינומים! נניח, הפולינום {::nomarkdown}\( 5x^{2}+3x+7\){:/nomarkdown} מורכב מסכום פורמלי של שלושה ביטויים ואין לאף אחד בעיה עם זה שהוא כולל פלוסים בתוכו. אני מתעכב על הנקודה הזו כי כפי שאתם ודאי מנחשים, אני תכף הולך להשתמש בסכומים פורמליים למטרה נוספת.

מה הדרך האינטואיטיבית השניה להגדיר את המכפלה של שני המרחבים הוקטוריים? ובכן, שוב, טוב לשאוב השראה מסכומים ישרים: שם מה שקרה הוא שהבסיס של הסכום הישר היה האיחוד הזר של <strong>הבסיסים</strong> של המרחבים. אז אצלנו הבסיס של המכפלה יהיה המכפלה של הבסיסים של המרחבים. שימו לב: מה שנקבל אחרי המכפלה לא יהיה כל המרחב; זה יהיה רק <strong>בסיס</strong> למרחב. אם נתון לנו בסיס, מי הם שאר האיברים?

ובכן, אתם לא תאהבו את התשובה הזו, אבל היא פשוטה מאוד: אברי המרחב יהיו פשוט כל הצירופים הלינאריים הפורמליים של אברי הבסיס. הרי זה הרעיון בבסיס - ש<strong>כל</strong> איבר במרחב יהיה ניתן לייצוג <strong>יחיד</strong> כצירוף לינארי של אברי הבסיס.

זה מוביל אותנו להגדרה הפורמלית הבאה של מכפלה טנזורית: {::nomarkdown}\( V\otimes W\triangleq\mbox{span}\left\{ e_{i}\otimes f_{j}\ \|\ 1\le i\le n,1\le j\le m\right\} \){:/nomarkdown}. הסימן {::nomarkdown}\( \otimes\){:/nomarkdown} הוא סימן מיוחד שבא להבהיר לנו ש-{::nomarkdown}\( V\otimes W\){:/nomarkdown} היא מכפלה טנזורית ולא כפל רגיל; וכאשר אני כותב {::nomarkdown}\( e\otimes f\){:/nomarkdown} זה ביטוי פורמלי נטו; הייתי יכול לכתוב גם {::nomarkdown}\( \left(e,f\right)\){:/nomarkdown} או {::nomarkdown}\( e\diamondsuit f\){:/nomarkdown} או כל סימן אחר שעדיין היה מאפשר לי לדעת מי הם {::nomarkdown}\( e,f\){:/nomarkdown} ש"תורמים" לאיבר הזה. השימוש בסימן {::nomarkdown}\( \otimes\){:/nomarkdown} כאן הוא פשוט מוסכמה.

ההגדרה די פשוטה. אבל יש מרחק בין להבין אותה ובין "להרגיש" מה קורה פה, אז הכרחי לתת דוגמה קונקרטית עם שני מרחבים פשוטים אבל שיהיו שונים זה מזה. אז ניקח {::nomarkdown}\( V=\mathbb{R}^{2}\){:/nomarkdown} ו-{::nomarkdown}\( W=\mathbb{R}_{3}\left[x\right]\){:/nomarkdown}. כלומר, איבר ב-{::nomarkdown}\( V\){:/nomarkdown} הוא זוג מספרים ממשיים {::nomarkdown}\( \left(a,b\right)\){:/nomarkdown} ואילו איבר ב-{::nomarkdown}\( W\){:/nomarkdown} הוא פולינום ממעלה לכל היותר 2, {::nomarkdown}\( p\left(x\right)\){:/nomarkdown}. בסיס פשוט של {::nomarkdown}\( V\){:/nomarkdown} הוא {::nomarkdown}\( \left\{ \left(1,0\right),\left(0,1\right)\right\} \){:/nomarkdown} ובסיס פשוט של {::nomarkdown}\( W\){:/nomarkdown} הוא {::nomarkdown}\( \left\{ 1,x,x^{2}\right\} \){:/nomarkdown}. המכפלה הטנזורית של שני המרחבים הללו תהיה מרחק ממימד 6 שנפרש על ידי האיברים הבאים:

{::nomarkdown}\( V\otimes W=\mbox{span}\left\{ \left(1,0\right)\otimes1,\left(1,0\right)\otimes x,\left(1,0\right)\otimes x^{2},\left(0,1\right)\otimes1,\left(0,1\right)\otimes x,\left(0,1\right)\otimes x^{2}\right\} \){:/nomarkdown}

כלומר, איבר לדוגמה במכפלה הטנזורית הוא {::nomarkdown}\( \pi\left(\left(0,1\right)\otimes x^{2}\right)+17\left(\left(1,0\right)\otimes1\right)\){:/nomarkdown} (כאן המקדם של אחד מאברי הבסיס הוא {::nomarkdown}\( \pi\){:/nomarkdown}, מקדם של איבר בסיס אחר הוא 17 וכל היתר הם 0).

טוב, שמעו, זה נראה נורא.

מייד עולה מאליה השאלה אם לא ניתן להציג לפחות חלק מהאיברים של המכפלה הטנזורית בצורה נחמדה יותר. שוב, כדי לקבל אינטואיציה כללית אני אסתכל קודם כל על דוגמה פשוטה - הפעם נבחר {::nomarkdown}\( V=W=\mathbb{R}^{2}\){:/nomarkdown}. אז אנחנו יודעים ש-{::nomarkdown}\( V\otimes W\){:/nomarkdown} הוא מרחב ממימד 4 מעל {::nomarkdown}\( \mathbb{R}\){:/nomarkdown} ולכן איזומורפי ל-{::nomarkdown}\( \mathbb{R}^{4}\){:/nomarkdown}. כדי לתאר את האיזומורפיזם מספיק לתאר איך אברי הבסיס של {::nomarkdown}\( V\otimes W\){:/nomarkdown} עוברים לאיברים ב-{::nomarkdown}\( \mathbb{R}^{4}\){:/nomarkdown}. אז בואו נגדיר את זה שרירותית:

{::nomarkdown}\( \left(1,0\right)\otimes\left(1,0\right)\mapsto\left(1,0,0,0\right)\){:/nomarkdown}

{::nomarkdown}\( \left(1,0\right)\otimes\left(0,1\right)\mapsto\left(0,0,1,0\right)\){:/nomarkdown}

{::nomarkdown}\( \left(0,1\right)\otimes\left(1,0\right)\mapsto\left(0,1,0,0\right)\){:/nomarkdown}

{::nomarkdown}\( \left(0,1\right)\otimes\left(0,1\right)\mapsto\left(0,0,0,1\right)\){:/nomarkdown}

אם תחשבו על זה לרגע, תראו שההגדרה אינה שרירותית אלא יש בה הגיון כלשהו. הנה נוסחה כללית שמתארת את הטרנספורמציה שביצעתי:

{::nomarkdown}\( \left(a_{1},a_{2}\right)\otimes\left(b_{1},b_{2}\right)\mapsto\left(a_{1}b_{1},a_{2}b_{1},a_{1}b_{2},a_{2}b_{2}\right)\){:/nomarkdown}

כשאני רואה את הנוסחה הזו, מדגדג לי להציב בתור הוקטורים הכלליים {::nomarkdown}\( \left(a_{1},a_{2}\right),\left(b_{1},b_{2}\right)\){:/nomarkdown} גם וקטורים שאינם אברי בסיס ולשאול - מה יקרה? למשל, עבור {::nomarkdown}\( \left(1,1\right)\otimes\left(1,0\right)\){:/nomarkdown}, האיבר הזה יעבור אל {::nomarkdown}\( \left(1,1,0,0\right)\){:/nomarkdown}, שלא קשה לראות שהוא התמונה של {::nomarkdown}\( \left(1,0\right)\otimes\left(1,0\right)+\left(0,1\right)\otimes\left(1,0\right)\){:/nomarkdown}, אז בעצם קיבלתי את המשוואה הבאה:

{::nomarkdown}\( \left(1,0\right)\otimes\left(1,0\right)+\left(0,1\right)\otimes\left(1,0\right)=\left(1,1\right)\otimes\left(1,0\right)\){:/nomarkdown}

ואם אני מנסה להכליל אותה, אני אקבל את זוג המשוואות הבא:

{::nomarkdown}\( e_{1}\otimes f+e_{2}\otimes f=\left(e_{1}+e_{2}\right)\otimes f\){:/nomarkdown}

{::nomarkdown}\( e\otimes f_{1}+e\otimes f_{2}=e\otimes\left(f_{1}+f_{2}\right)\){:/nomarkdown}

כלומר, אם אני אנסה להכליל את {::nomarkdown}\( \otimes\){:/nomarkdown} למכפלה של שני איברים כללים ב-{::nomarkdown}\( V,W\){:/nomarkdown}, אז רצוי ש-{::nomarkdown}\( \otimes\){:/nomarkdown} יקיים מעין תכונת אדיטיביות (שמזכירה את זו של מכפלה פנימית, למי שמכיר).

ומה בדבר כפל בסקלר? ובכן, {::nomarkdown}\( 2\left(1,0\right)\otimes\left(0,1\right)\){:/nomarkdown} הולך לעבור אל {::nomarkdown}\( \left(2,0,0,0\right)\){:/nomarkdown}, כלומר אל {::nomarkdown}\( 2\left(\left(1,0\right)\otimes\left(0,1\right)\right)\){:/nomarkdown}, וכך גם {::nomarkdown}\( \left(1,0\right)\otimes2\left(0,1\right)\){:/nomarkdown}, מה שמוביל אותנו לחוק הבא:

{::nomarkdown}\( \lambda\left(e\otimes f\right)=\lambda e\otimes f=e\otimes\lambda f\){:/nomarkdown}

מצויידים בשלושת החוקים הללו, קל לנו להגדיר את {::nomarkdown}\( v\otimes w\){:/nomarkdown} בצורה כללית: פשוט נכתוב {::nomarkdown}\( v=\sum\lambda_{i}e_{i}\){:/nomarkdown} ו-{::nomarkdown}\( w=\sum\rho_{j}f_{j}\){:/nomarkdown}, נשתמש בכללי הפישוט שהגדרתי לעיל, ונקבל:

{::nomarkdown}\( v\otimes w=\left(\sum\lambda_{i}e_{i}\right)\otimes\left(\sum\rho_{j}f_{j}\right)=\sum_{i,j}\lambda_{i}\rho_{j}\left(e_{i}\otimes f_{j}\right)\){:/nomarkdown}

הכתיב {::nomarkdown}\( v\otimes w\){:/nomarkdown}, אם כן, משמש אותנו סתם בתור סימון מקוצר כאן. בפועל העסק הרבה פחות שרירותי ממה שנדמה לנו כרגע ואראה את זה בסוף הפוסט, אבל בינתיים אני רוצה שנעכל את הקפיצה אל שימוש בסימונים כמו {::nomarkdown}\( v\otimes w\){:/nomarkdown}. יש שתי טעויות מתבקשות שכולנו עושים כשאנחנו רואים את צורת הסימון הזו: ראשית, אנחנו שוכחים שלאותו איבר של המכפלה הטנזורית יכולים להיות <strong>כמה ייצוגים שונים</strong> בדרך הזו. למשל, כפי שראינו לפני רגע, {::nomarkdown}\( \left(2,0\right)\otimes\left(0,1\right)\){:/nomarkdown} ו-{::nomarkdown}\( \left(1,0\right)\otimes\left(0,2\right)\){:/nomarkdown} הם <strong>שני ייצוגים שונים לאותו איבר בדיוק</strong>. שנית, אנחנו עלולים לחשוב בטעות ש<strong>כל</strong> איבר ב-{::nomarkdown}\( V\otimes W\){:/nomarkdown} הוא איבר מהצורה {::nomarkdown}\( v\otimes w\){:/nomarkdown} עבור {::nomarkdown}\( v\in V\){:/nomarkdown} ו-{::nomarkdown}\( w\in W\){:/nomarkdown}, וזה <strong>ממש לא נכון</strong>. לאיבר שניתן לכתוב בצורה {::nomarkdown}\( v\otimes w\){:/nomarkdown} קוראים לפעמים "טנזור טהור" כדי להבדיל אותו מהאיברים של {::nomarkdown}\( V\otimes W\){:/nomarkdown} שלא ניתנים לכתיבה בצורה הזו, אבל בהחלט יש כאלו. אז איך כותבים אותם? בתור <strong>סכום</strong> של טנזורים טהורים. והאם אני יכול לתת דוגמה ליצור כזה? בטח.

אנחנו עדיין ב-{::nomarkdown}\( \mathbb{R}^{2}\otimes\mathbb{R}^{2}\){:/nomarkdown}. בואו נסתכל על {::nomarkdown}\( \left(1,0\right)\otimes\left(1,0\right)+\left(0,1\right)\otimes\left(0,1\right)\){:/nomarkdown}. האם אתם רואים דרך "לפשט" את הביטוי הזה ולהציג אותו בצורה {::nomarkdown}\( \left(a_{1},a_{2}\right)\otimes\left(b_{1},b_{2}\right)\){:/nomarkdown}? אני מניח שלא. אבל זה שאתם לא רואים איך לעשות משהו לא אומר שאי אפשר לעשות אותו; צריך להוכיח שאי אפשר. אז בואו ניקח את הביטוי הכללי {::nomarkdown}\( \left(a_{1},a_{2}\right)\otimes\left(b_{1},b_{2}\right)\){:/nomarkdown} ונפרק אותו לסכום אברי בסיס:

{::nomarkdown}\( \left(a_{1},a_{2}\right)\otimes\left(b_{1},b_{2}\right)=a_{1}b_{1}\left[\left(1,0\right)\otimes\left(1,0\right)\right]+a_{1}b_{2}\left[\left(1,0\right)\otimes\left(0,1\right)\right]+a_{2}b_{1}\left[\left(0,1\right)\otimes\left(1,0\right)\right]+a_{2}b_{2}\left[\left(0,1\right)\otimes\left(0,1\right)\right]\){:/nomarkdown}

נשווה את זה עם הביטוי {::nomarkdown}\( \left(1,0\right)\otimes\left(1,0\right)+\left(0,1\right)\otimes\left(0,1\right)\){:/nomarkdown} וקיבלנו מערכת של ארבע משוואות בארבעה נעלמים:

{::nomarkdown}\( a_{1}b_{1}=1\){:/nomarkdown}

{::nomarkdown}\( a_{1}b_{2}=0\){:/nomarkdown}

{::nomarkdown}\( a_{2}b_{1}=0\){:/nomarkdown}

{::nomarkdown}\( a_{2}b_{2}=1\){:/nomarkdown}

קל מאוד לראות שאין למערכת הזו פתרון: מכיוון ש-{::nomarkdown}\( a_{1}b_{2}=0\){:/nomarkdown} אחד משניהם חייב להיות 0. אם {::nomarkdown}\( a_{1}=0\){:/nomarkdown} אז {::nomarkdown}\( 1=a_{1}b_{1}=0\){:/nomarkdown} וזה בלתי אפשרי; אם {::nomarkdown}\( b_{2}=0\){:/nomarkdown} אז {::nomarkdown}\( 1=a_{2}b_{2}=0\){:/nomarkdown} וגם זה בלתי אפשרי. מסקנה: {::nomarkdown}\( \left(1,0\right)\otimes\left(1,0\right)+\left(0,1\right)\otimes\left(0,1\right)\){:/nomarkdown} הוא לא טנזור טהור.

כמובן, קל לראות שלא ייתכן שהמכפלה הטנזורית תכיל רק טנזורים טהורים אפילו משיקולים פשוטים יותר: אם נחזור אל המרחבים הוקטוריים מעל השדה הסופי עם שלושה איברים, אז כפי שכבר ראינו אם {::nomarkdown}\( \left\|V\right\|=3^{n}\){:/nomarkdown} ו-{::nomarkdown}\( \left\|W\right\|=3^{m}\){:/nomarkdown} אז {::nomarkdown}\( \left\|V\times W\right\|=3^{m+n}\){:/nomarkdown} וזה גם מספר הטנזורים ה"טהורים", אבל המכפלה הטנזורית היא מרחב ממימד {::nomarkdown}\( nm\){:/nomarkdown} ולכן מכילה {::nomarkdown}\( 3^{mn}\){:/nomarkdown} איברים - הרבה יותר מאשר {::nomarkdown}\( 3^{m+n}\){:/nomarkdown} עבור כמעט כל הערכים של {::nomarkdown}\( n,m\){:/nomarkdown}.

טוב, אז אני מקווה שאנחנו מבינים מה זו מכפלה טנזורית ברמת ההגדרות ואפשר יהיה להשתמש במושג הזה יחסית בחופשיות בפוסטים שבהם אזדקק לו (מן הסתם מתוכננים כאלו). עכשיו אפשר לעבור לדוגמה כללית יחסית וחשובה מאוד - מכפלה טנזורית של מטריצות. כלומר, {::nomarkdown}\( V\){:/nomarkdown} יהיה מרחב של מטריצות וגם {::nomarkdown}\( W\){:/nomarkdown} יהיה מרחב של מטריצות. אין חשיבות לסדר של המטריצות - הוא יכול להיות שונה בצורה דרסטית. כעת, כדי לתאר את {::nomarkdown}\( V\otimes W\){:/nomarkdown} מספיק לי לתאר איך נראה איבר כללי {::nomarkdown}\( A\otimes B\){:/nomarkdown} עבור {::nomarkdown}\( A\in V\){:/nomarkdown} ו-{::nomarkdown}\( B\in W\){:/nomarkdown}. התיאור הוא פשוט ומקסים: בואו נכתוב בצורה כללית את {::nomarkdown}\( A\){:/nomarkdown}:

{::nomarkdown}\( A=\left[\begin{array}{cccc}a_{11} &amp; a_{12} &amp; \cdots &amp; a_{1m}\\a_{21} &amp; a_{22} &amp; \cdots &amp; a_{2m}\\\vdots &amp; \vdots &amp; \ddots &amp; \vdots\\a_{n1} &amp; a_{n2} &amp; \cdots &amp; a_{nm}\end{array}\right]\){:/nomarkdown}

כעת, {::nomarkdown}\( A\otimes B\){:/nomarkdown} יוגדר כך:

{::nomarkdown}\( A\otimes B\triangleq\left[\begin{array}{cccc}a_{11}B &amp; a_{12}B &amp; \cdots &amp; a_{1m}B\\a_{21}B &amp; a_{22}B &amp; \cdots &amp; a_{2m}B\\\vdots &amp; \vdots &amp; \ddots &amp; \vdots\\a_{n1}B &amp; a_{n2}B &amp; \cdots &amp; a_{nm}B\end{array}\right]\){:/nomarkdown}

הסימון הזה נראה מוזר - כאילו אנחנו דוחפים מטריצה לתוך הכניסות של מטריצה אחרת, ומה זה אומר בכלל. בפועל זה סימון מקובל עבור <strong>מטריצת בלוקים</strong>. הדרך הכי טובה להסביר היא פשוט לתת דוגמה: נבחר {::nomarkdown}\( A=\left[\begin{array}{cc}1 &amp; 2\\3 &amp; 4\end{array}\right]\){:/nomarkdown} ו-{::nomarkdown}\( B=\left[\begin{array}{cc}5 &amp; 0\\0 &amp; 5\end{array}\right]\){:/nomarkdown} ונקבל ש-

{::nomarkdown}\( A\otimes B=\left[\begin{array}{cccc}5 &amp; 0 &amp; 10 &amp; 0\\0 &amp; 5 &amp; 0 &amp; 10\\15 &amp; 0 &amp; 20 &amp; 0\\0 &amp; 15 &amp; 0 &amp; 20\end{array}\right]\){:/nomarkdown}

רואים את ה"בלוקים"?

כמובן, כדי להוכיח שההגדרה שלנו למכפלה הטנזורית באמת עובדת אנחנו צריכים להראות שיש איזומורפיזם בין המרחב שהגדרתי כרגע ובין ההגדרה ה"רגילה" שלי של מכפלה טנזורית - זה כמובן יעבוד ואני משאיר את זה בתור תרגיל למי שמעוניין.

עכשיו, לסיום, אני רוצה להציג נקודת מבט טיפה שונה על ההגדרה של מכפלה טנזורית, שנותנת דרך התבוננות שהיא ככל הנראה נכונה יותר, אם כי גם קשה יותר לעיכול. מילת המפתח פה היא <strong>העתקה בילינארית</strong>. בואו נזכיר מה זה אומר: <strong>העתקה לינארית</strong> (או "טרנספורמציה לינארית" כמו שאני לרוב קורא לה) היא פונקציה {::nomarkdown}\( T:V\to W\){:/nomarkdown} בין שני מרחבים וקטוריים (מעל אותו שדה) שמשמרת את פעולות החיבור והכפל בסקלר, כלומר {::nomarkdown}\( T\left(a+b\right)=T\left(a\right)+T\left(b\right)\){:/nomarkdown} ו-{::nomarkdown}\( T\left(\lambda a\right)=\lambda T\left(a\right)\){:/nomarkdown} עבור סקלר {::nomarkdown}\( \lambda\){:/nomarkdown}. העתקה בילינארית זה בערך אותו דבר, אבל עבור פונקציה בשני משתנים.

פורמלית, אם {::nomarkdown}\( V,W,U\){:/nomarkdown} הם מרחבים וקטוריים מעל אותו שדה אז {::nomarkdown}\( f:V\times W\to U\){:/nomarkdown} היא העתקה בילינארית אם כאשר ניקח את {::nomarkdown}\( f\){:/nomarkdown} ו"נקפיא" את אחד מהמשתנים שלה, הפונקציה שנקבל במשתנה השני תהיה העתקה לינארית. במילים אחרות, ניקח וקטור {::nomarkdown}\( w\in W\){:/nomarkdown} כלשהו ונגדיר פונקציה חדשה {::nomarkdown}\( T_{w}:V\to U\){:/nomarkdown}, {::nomarkdown}\( T_{w}\left(v\right)=f\left(v,w\right)\){:/nomarkdown}, אז אני דורש -{::nomarkdown}\( T_{w}\){:/nomarkdown} תהיה העתקה לינארית. כך גם אם אקח {::nomarkdown}\( v\in V\){:/nomarkdown} ואגדיר {::nomarkdown}\( S_{v}:W\to U\){:/nomarkdown} על ידי {::nomarkdown}\( S_{v}\left(w\right)=f\left(v,w\right)\){:/nomarkdown} (הפעולה הזו, של הצבת ערך קבוע בתוך פונקציה בכמה משתנים ועל ידי כך "ייצור" של פונקציה עם משתנה אחד פחות מכונה Currying על שם הלוגיקאי הסקל קרי; זה תעלול מקובל בשפות תכנות מסויימות, למשל הסקל).

העתקה לינארית הוגדרה על ידי שני תנאים, אז אם ננסה לפרוט לפרוטות את התנאים של העתקה בילינארית נראה שהיא מוגדרת על ידי ארבעה, שניים לכל רכיב:
<ol>
	<li>{::nomarkdown}\( f\left(v_{1}+v_{2},w\right)=f\left(v_{1},w\right)+f\left(v_{2},w\right)\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( f\left(\lambda v,w\right)=\lambda f\left(v,w\right)\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( f\left(v,w_{1}+w_{2}\right)=f\left(v,w_{1}\right)+f\left(v,w_{2}\right)\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( f\left(v,\lambda w\right)=\lambda f\left(v,w\right)\){:/nomarkdown}</li>
</ol>
נראה מוכר? לא במקרה, כמובן.

ניקח שני מרחבים וקטוריים {::nomarkdown}\( V,W\){:/nomarkdown}. יש כמובן המון פונקציות בילינאריות שניתן להגדיר עליהם, שהולכות למרחבים רבים ושונים. הרעיון במכפלה טנזורית הוא לתאר את המכפלה הבילינארית <strong>הכללית ביותר</strong> שאפשר להגדיר על {::nomarkdown}\( V\times W\){:/nomarkdown}. מה זה אומר? ובכן, בואו נניח שקיים מרחב וקטורי {::nomarkdown}\( E\){:/nomarkdown} ופונקציה בילינארית {::nomarkdown}\( h:V\times W\to E\){:/nomarkdown} שמקיימים את התכונה הבאה: אם {::nomarkdown}\( U\){:/nomarkdown} הוא מרחב וקטורי <strong>כלשהו</strong> ו-{::nomarkdown}\( f:V\times W\to U\){:/nomarkdown} היא פונקציה בילינארית <strong>כלשהי</strong>, אז אפשר לבנות את {::nomarkdown}\( f\){:/nomarkdown} על ידי הרכבה של פונקציה לינארית מתאימה על {::nomarkdown}\( h\){:/nomarkdown}, באופן שהוא <strong>יחיד</strong>. פורמלית, קיימת {::nomarkdown}\( T:E\to U\){:/nomarkdown} <strong>יחידה</strong> כך ש-{::nomarkdown}\( f=Th\){:/nomarkdown} (כלומר, {::nomarkdown}\( f\left(v,w\right)=T\left(h\left(v,w\right)\right)\){:/nomarkdown} לכל {::nomarkdown}\( v\in V,w\in W\){:/nomarkdown}). זה אומר ש-{::nomarkdown}\( h\){:/nomarkdown} היא אכן "כללית ביותר" כי היא לא מאבדת שום מידע; אחרי שמפעילים אותה אפשר לבצע "תיקון" ולקבל כל פונקציה בילינארית אחרת. ככה זה נראה בדיאגרמה קומוטטיבית:

{::nomarkdown}\( \xymatrix{ &amp; E\ar[dd]^{T}\\V\times W\ar[ur]^{h}\ar[dr]^{f}\\ &amp; U}\){:/nomarkdown}

הכוונה ב"קומוטטיבית" כאן היא שלא משנה איך הולכים עם החצים - אם הולכים עם {::nomarkdown}\( f\){:/nomarkdown} או אם הולכים עם {::nomarkdown}\( h\){:/nomarkdown} ואז עם {::nomarkdown}\( T\){:/nomarkdown} - בסוף מגיעים לאותו דבר (אם התחלנו מאותו איבר קלט).

התכונה שתיארתי כעת היא דוגמה ל<strong>תכונה אוניברסלית</strong>; לא אכנס כאן להגדרה מדוייקת של מה זו תכונה אוניברסלית כי זה כבר ייקח אותי לתוך תורת הקטגוריות. תחת זאת, אני רוצה לשכנע אתכם שיש בדיוק מרחב {::nomarkdown}\( E\){:/nomarkdown} יחיד (עד כדי איזומורפיזם) שמקיים את התכונה הזו. ההוכחה טריוויאלית למדי: נניח שיש {::nomarkdown}\( E_{1},E_{2}\){:/nomarkdown} עם פונקציות {::nomarkdown}\( h_{1},h_{2}\){:/nomarkdown} שמקיימים את התכונה שלעיל. אז בפרט אם נבחר {::nomarkdown}\( f=h_{2}\){:/nomarkdown} נקבל שקיימת טרנספורמציה לינארית {::nomarkdown}\( T_{1}:E_{1}\to E_{2}\){:/nomarkdown} כך ש-{::nomarkdown}\( h_{2}=T_{1}h_{1}\){:/nomarkdown}. בדומה, קיימת טרנספורמציה לינארית {::nomarkdown}\( T_{2}:E_{2}\to E_{1}\){:/nomarkdown} כך ש-{::nomarkdown}\( h_{1}=T_{2}h_{2}\){:/nomarkdown}. אם כן, נקבל: {::nomarkdown}\( h_{1}=T_{2}h_{2}=T_{2}T_{1}h_{1}\){:/nomarkdown}.

שימו לב מה קיבלנו:

{::nomarkdown}\( \xymatrix{ &amp; E_{1}\ar[dd]^{T_{2}T_{1}}\\V\times W\ar[ur]^{h_{1}}\ar[dr]^{h_{1}}\\ &amp; E_{1}}\){:/nomarkdown}

מה שקורה כאן הוא שראינו שאת ההעתקה {::nomarkdown}\( h_{1}:V\times W\to E_{1}\){:/nomarkdown} אפשר לבנות בתור ההרכבה {::nomarkdown}\( T_{2}T_{1}h_{1}\){:/nomarkdown}. אבל מצד שני, אפשר לבנות אותה גם בתור ההרכבה של פונקציית הזהות על {::nomarkdown}\( h_{1}\){:/nomarkdown}. כאן נכנסת לתמונה הדרישה שלי שאופן הבניה הזה יהיה <strong>יחיד</strong> - זה אומר ש-{::nomarkdown}\( T_{2}T_{1}\){:/nomarkdown} היא פונקציית הזהות על {::nomarkdown}\( E_{1}\){:/nomarkdown}, ולכן {::nomarkdown}\( T_{1}\){:/nomarkdown} בפרט הפיכה, ולכן היא איזומורפיזם. הצלחתם לעקוב אחרי הטיעון הזה? (כי אני לא ממש) באלגברה מופשטת זה מה שקורה כל הזמן.

עכשיו כשאנחנו יודעים ש-{::nomarkdown}\( E\){:/nomarkdown} הזה הוא יחיד, בואו נראה שהוא בכלל קיים. אפשר להגדיר את {::nomarkdown}\( E\){:/nomarkdown} להיות {::nomarkdown}\( V\otimes W\){:/nomarkdown} שכבר הגדרתי קודם ולהוכיח שהוא מקיים את תכונת האוניברסליות, אבל איפה הכיף בזה? בואו נבנה אותו בגישה שונה.

ראשית, ברור ש-{::nomarkdown}\( h:V\times W\to E\){:/nomarkdown} חייבת להיות חד-חד-ערכית, כלומר ש-{::nomarkdown}\( E\){:/nomarkdown} יהיה חייב להכיל בתוכו עותק של {::nomarkdown}\( V\times W\){:/nomarkdown}. כי בואו נניח ש-{::nomarkdown}\( h\left(v_{1},w_{1}\right)=h\left(v_{2},w_{2}\right)\){:/nomarkdown} עבור {::nomarkdown}\( \left(v_{1},w_{1}\right)\ne\left(v_{2},w_{2}\right)\){:/nomarkdown}; במקרה זה נגדיר {::nomarkdown}\( f\){:/nomarkdown} בילינארית שמקיימת {::nomarkdown}\( f\left(v_{1},w_{1}\right)=f\left(v_{2},w_{2}\right)\){:/nomarkdown} ואז הלך עלינו - לא משנה איזה {::nomarkdown}\( T\){:/nomarkdown} נבחר, נקבל ש-{::nomarkdown}\( Th\left(v_{1},w_{1}\right)=Th\left(v_{2},w_{2}\right)\){:/nomarkdown} ולכן אין סיכוי ש-{::nomarkdown}\( f=Th\){:/nomarkdown}. אז {::nomarkdown}\( E\){:/nomarkdown} חייב לכלול איבר ייחודי שאסמן {::nomarkdown}\( \delta_{\left(v,w\right)}\){:/nomarkdown} לכל {::nomarkdown}\( \left(v,w\right)\){:/nomarkdown} (ולמה לא להשתמש בסימון {::nomarkdown}\( v\otimes w\){:/nomarkdown} וחסל? עוד מעט נבין). עכשיו, ה-{::nomarkdown}\( \delta_{\left(v,w\right)}\){:/nomarkdown} לא מרכיבים את כל המרחב לבדם; מכיוון שאנחנו רוצים ש-{::nomarkdown}\( E\){:/nomarkdown} יהיה מרחב וקטורי, אנחנו צריכים להגדיר גם פעולות של חיבור וכפל בסקלר עליהם. כאן אי אפשר סתם לתת הגדרות שרירותיות, כי אז יצוצו בעיות. למשל, נניח שאנו מגדירים שרירותית ש-{::nomarkdown}\( \lambda\delta_{\left(v_{1},w_{1}\right)}=\delta_{\left(v_{2},w_{2}\right)}\){:/nomarkdown}. מה נובע מזה? אם {::nomarkdown}\( T\){:/nomarkdown} היא טרנספורמציה לינארית מ-{::nomarkdown}\( E\){:/nomarkdown}, אז היא תקיים תמיד {::nomarkdown}\(  T\left(\delta_{\left(v_{2},w_{2}\right)}\right)=T\left(\lambda\delta_{\left(v_{1},w_{1}\right)}\right)=\lambda T\left(\delta_{\left(v_{1},w_{1}\right)}\right)\){:/nomarkdown}. זה אומר שאם ניקח {::nomarkdown}\( f\){:/nomarkdown} שמקיימת {::nomarkdown}\( f\left(v_{2},w_{2}\right)\ne\lambda f\left(v_{1},w_{1}\right)\){:/nomarkdown} אז אין {::nomarkdown}\( T\){:/nomarkdown} כך ש-{::nomarkdown}\( f=Th\){:/nomarkdown} ואנחנו שוב בצרות.

במילים אחרות, אנחנו חייבים שבמרחב שלנו יהיו יותר איברים מאשר רק {::nomarkdown}\( \delta_{\left(v,w\right)}\){:/nomarkdown}-ים. אז מה נעשה? איך נדע את מי להוסיף ואת מי לא? אם קודם כשבנינו את המכפלה הטנזורית נקטנו בשיטת Bottom-up - התחלנו מהבסיס של מה שאנחנו רוצים שיהיה לנו (מכפלות טנזוריות של אברי הבסיסים) ובנינו את המרחב מתוך זה, הפעם נעשה מעין Top-down: נתחיל ממרחב גדול מדי, ואז נתקן אותו.

מה שנאמר הוא ש<strong>לכל</strong> צירוף לינארי סופי {::nomarkdown}\( \sum\lambda_{i}\delta_{\left(v_{i},w_{i}\right)}\){:/nomarkdown} יהיה לנו איבר במרחב, והמרחב הזה יהיה <strong>חופשי מיחסים</strong> בין האיברים: שני איברים יהיו שונים אם ורק אם הצירוף הלינארי שמגדיר אותם זהה. לדבר כזה קוראים <strong>מרחב וקטורי חופשי</strong>. הבעיה עם המרחב הזה היא שהוא גדול <strong>מדי</strong>. תחשבו על זה ככה: אם {::nomarkdown}\( V=W=\mathbb{R}\){:/nomarkdown} (מרחבים ממימד 1) אז לכל {::nomarkdown}\( s,t\in\mathbb{R}\){:/nomarkdown} יהיה לנו איבר {::nomarkdown}\( \delta_{\left(s,t\right)}\){:/nomarkdown} שהוא איבר <strong>בסיס</strong> של המרחב החדש; זה אומר שהמרחב החדש שלנו יהיה בעל בסיס לא בן מניה - עצום בגודלו. כמו כן, אם נגדיר את ההעתקה {::nomarkdown}\( h\left(v,w\right)=\delta_{\left(v,w\right)}\){:/nomarkdown} קל לראות שזו <strong>אינה</strong> העתקה בילינארית: הרי {::nomarkdown}\( h\left(\lambda v,w\right)=\delta_{\left(\lambda v,w\right)}\ne\lambda\delta_{\left(v,w\right)}=\lambda h\left(v,w\right)\){:/nomarkdown}, כשאי השוויון נובע בדיוק מהחופשיות של המרחב.

במילים אחרות, אם אנחנו רוצים שתהיה לנו תקווה כלשהי לכך ש-{::nomarkdown}\( h\){:/nomarkdown} תהיה בילינארית, אנחנו חייבים לוודא ש-{::nomarkdown}\( \delta_{\left(\lambda v,w\right)}=\lambda\delta_{\left(v,w\right)}\){:/nomarkdown}. איך עושים את זה, למרות שהאיברים הללו כרגע שונים? הטריק הסטנדרטי ביותר בספר: מגדירים <strong>יחס שקילות</strong> על המרחב שלנו, שבו שני איברים הם שקולים אם הם "אמורים להיות שווים", ואז לוקחים את קבוצת המנה (אוסף כל מחלקות השקילות של היחס). אם לא ראיתם את זה מעולם, זה מבלבל נורא: הדוגמה הקלאסית שאני יכול להציע לכם היא מספרים רציונליים; אפשר להגדיר אותם בתור אוסף של זוגות של שלמים, כך ש-{::nomarkdown}\( \left(a,b\right)\){:/nomarkdown} מייצג את המספר {::nomarkdown}\( \frac{a}{b}\){:/nomarkdown}; מהר מאוד אנחנו מבינים ש-{::nomarkdown}\( \left(1,2\right)\){:/nomarkdown} ו-{::nomarkdown}\( \left(2,4\right)\){:/nomarkdown} אמורים לייצג את אותו המספר, אז מגדירים יחס שקילות ש"מזהה" ביניהם.

יחס השקילות שלנו יוגדר על ידי כל התכונות שנדרשות כדי להפוך את {::nomarkdown}\( h\){:/nomarkdown} לבילינארית. פורמלית, מה שעושים הוא לבנות <strong>תת-מרחב וקטורי</strong> של המרחב שלנו, ואז לקחת את <strong>מרחב המנה</strong> - עוד בניה סטנדרטית, שכנראה תהיה מוכרת לכל מי שהתעסק טיפה עם חבורות. תת-המרחב שלנו ייפרש בדיוק על ידי כל האיברים מהצורות הבאות:
<ul>
	<li>{::nomarkdown}\( \delta_{\left(\lambda v,w\right)}-\lambda\delta_{\left(v,w\right)}\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( \delta_{\left(v,\lambda w\right)}-\lambda\delta_{\left(v,w\right)}\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( \delta_{\left(v_{1}+v_{2},w\right)}-\delta_{\left(v_{1},w\right)}-\delta_{\left(v_{2},w\right)}\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( \delta_{\left(v,w_{1}+w_{2}\right)}-\delta_{\left(v,w_{1}\right)}-\delta_{\left(v,w_{2}\right)}\){:/nomarkdown}</li>
</ul>
אחרי שמחלקים בתת-המרחב הזה, כל היוצרים שלו הופכים לשווים לאפס במרחב המנה. לכן, למשל, במרחב המנה המשוואה {::nomarkdown}\( \delta_{\left(\lambda v,w\right)}-\lambda\delta_{\left(v,w\right)}=0\){:/nomarkdown} היא נכונה, כלומר {::nomarkdown}\( \delta_{\left(\lambda v,w\right)}=\lambda\delta_{\left(v,w\right)}\){:/nomarkdown} במרחב הזה.

מה שתיארתי פה הוא בניה סטנדרטית לגמרי באלגברה, שבה בונים אובייקט באמצעות <strong>יוצרים</strong> ו<strong>יחסים</strong>. היוצרים הם ה-{::nomarkdown}\( \delta\){:/nomarkdown}-ות; היחסים הן המשוואות שהגדירו לי את תת-המרחב. אם זו הפעם הראשונה שבה אתם שומעים על המושגים הללו, אני ממליץ לנסות וללמוד אותם דרך תורת החבורות קודם; ככה זה יותר קל לעיכול.

עכשיו אפשר להחזיר לתמונה את הסימון {::nomarkdown}\( v\otimes w\){:/nomarkdown} הידוע לשמצה - זה יהיה האיבר במרחב המנה שמתאים ל-{::nomarkdown}\( \delta_{\left(v,w\right)}\){:/nomarkdown} (<strong>מחלקת השקילות</strong> של {::nomarkdown}\( \delta_{\left(v,w\right)}\){:/nomarkdown}). מכאן ואילך זו עבודה סטנדרטית יחסית להראות שהמרחב הזה אכן מקיים את כל מה שאנחנו רוצים. בהינתן {::nomarkdown}\( f:V\times W\to U\){:/nomarkdown}, מגדירים {::nomarkdown}\( T\left(v\otimes w\right)=f\left(v,w\right)\){:/nomarkdown} ומקבלים ש-{::nomarkdown}\( f=Th\){:/nomarkdown} (צריך להוכיח ש-{::nomarkdown}\( T\){:/nomarkdown} היא טרנספורמציה לינארית מוגדרת היטב - זה נובע מכך ש-{::nomarkdown}\( f\){:/nomarkdown} היא בילינארית). היחידות של {::nomarkdown}\( T\){:/nomarkdown} נובעת מכך שמרגע שהגדרנו את {::nomarkdown}\( T\){:/nomarkdown} על כל האיברים מהצורה {::nomarkdown}\( v\otimes w\){:/nomarkdown} אז {::nomarkdown}\( T\){:/nomarkdown} נקבעת באופן יחיד עבור כל יתר המרחב (למעשה, מספיקה ההגדרה של {::nomarkdown}\( T\){:/nomarkdown} על אברי בסיס כפי שהגדרנו אותם בתחילת הפוסט; לא צריך את כל הטנזורים הטהורים), ובהינתן {::nomarkdown}\( f\){:/nomarkdown}, אין לנו בחירה לערכים של {::nomarkdown}\( T\){:/nomarkdown} על טנזורים טהורים - הם חייבים לתת להם בדיוק מה ש-{::nomarkdown}\( f\){:/nomarkdown} נותנת לזוג המתאים. זה מסיים (בנפנוף ידיים, כמובן) את ההוכחה.

קצת ניסיתי בפוסט הזה ללכת בלי ולהרגיש עם - לא לצלול עמוק מדי אל ההקשר האלגברי הרחב יותר, ובכל זאת להזכיר אותו; אני מקווה שהצלחתי כך לתת משהו לכל קורא של הפוסט, ולא סתם שהרגזתי את כולם במידה שווה.

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    TeX: {extensions: ["http://www.gadial.net/libs/xyjax/extensions/TeX/xypic.js"]}
  });
</script>
