---
id: 3461
title: "מכפלות חצי ישרות"
date: 2017-07-21 21:00:47
layout: post
categories: 
  - אלגברה מופשטת
tags: 
  - מכפלות חצי ישרות
  - תורת החבורות
---
<h2>מבוא</h2>
במסגרת העיסוק שלנו בחבורות ראינו עוד ועוד דרכים לתאר חבורות ולבנות חבורות חדשות מחבורות קיימות. עכשיו הגיע הזמן לסגור את החור האחרון שאני רוצה לסגור כרגע (למרות שכמובן, זה רחוק מלהיות סוף הסיפור באופן כללי) ולהראות בניה כללית וחזקה למדי - בניה של <strong>מכפלה חצי ישרה</strong>, שהיא סוג של הכללה של המכפלה הישרה שהראיתי בפוסט קודם. מכפלה ישרה של שתי חבורות {::nomarkdown}\(A,B\){:/nomarkdown} הייתה חבורה {::nomarkdown}\(A\times B=\left\{ \left(a,b\right)\ \|\ a\in A,b\in B\right\} \){:/nomarkdown} עם פעולת כפל "לפי קואורדינטות": {::nomarkdown}\(\left(a_{1},b_{1}\right)\left(a_{2},b_{2}\right)=\left(a_{1}a_{2},b_{1}b_{2}\right)\){:/nomarkdown}. התוצאה תמיד הייתה חבורה אבלית מסדר {::nomarkdown}\(\left\|A\right\|\cdot\left\|B\right\|\){:/nomarkdown}. את הבניה הזו, שהיא "חיצונית" (לוקחים שתי חבורות שאין בהכרח קשר ביניהן ובונים חבורה חדשה) אפשר היה לתאר גם באופן "פנימי": אם {::nomarkdown}\(G\){:/nomarkdown} חבורה עם תת-חבורות {::nomarkdown}\(A,B\){:/nomarkdown} אז אפשר תמיד להגדיר קבוצה {::nomarkdown}\(A\cdot B=\left\{ ab\ \|\ a\in A,b\in B\right\} \){:/nomarkdown}. ראינו <a href="http://www.gadial.net/2017/04/19/direct_product_and_abelian_groups/">בפוסט קודם</a> שהקבוצה הזו היא מגודל {::nomarkdown}\(\frac{\left\|A\right\|\cdot\left\|B\right\|}{\left\|A\cap B\right\|}\){:/nomarkdown}, ושאם מתקיים {::nomarkdown}\(A\cap B=\left\{ e\right\} \){:/nomarkdown} וכמו כן <strong>{::nomarkdown}\(A,B\){:/nomarkdown} </strong>שתיהן נורמליות ב-{::nomarkdown}\(G\){:/nomarkdown}, אז {::nomarkdown}\(AB\cong A\times B\){:/nomarkdown}. כלומר, <strong>בתנאים מסויימים</strong> החבורה {::nomarkdown}\(AB\){:/nomarkdown} שווה למכפלה הישרה של {::nomarkdown}\(A,B\){:/nomarkdown}. ובתנאים אחרים?

אני לא אוהב לעשות טיזינג בפוסטים, אז הנה העיקר: על הקבוצה {::nomarkdown}\(A\times B\){:/nomarkdown} של הזוגות {::nomarkdown}\(\left(a,b\right)\){:/nomarkdown} אני יכול גם להגדיר פעולות נוספות, מתוחכמות קצת יותר, באמצעות מושג ה<strong>פעולה</strong> של חבורה על קבוצה. בואו ניקח פעולה של {::nomarkdown}\(A\){:/nomarkdown} על {::nomarkdown}\(B\){:/nomarkdown} שיש לה את התכונה הנוספת שכל איבר של {::nomarkdown}\(A\){:/nomarkdown} פועל על {::nomarkdown}\(B\){:/nomarkdown} בתור <strong>אוטומורפיזם</strong>, כלומר לא סתם מערבב את אברי {::nomarkdown}\(B\){:/nomarkdown} אלא משמר את מבנה החבורה של {::nomarkdown}\(B\){:/nomarkdown}. אז אפשר להגדיר פעולת כפל כזו: {::nomarkdown}\(\left(a_{1},b_{1}\right)\left(a_{2},b_{2}\right)=\left(a_{1}\left(b_{1}\cdot a_{2}\right),b_{1}b_{2}\right)\){:/nomarkdown}. מה הולך פה? הקואורדינטה השניה מוכפלת בדיוק כמו במכפלה ישרה. בקואורדינטה הראשונה מתרחש תהליך דו-שלבי: ראשית <strong>מפעילים</strong> את {::nomarkdown}\(b_{1}\){:/nomarkdown} על {::nomarkdown}\(a_{2}\){:/nomarkdown}, ורק אחר כך כופלים את התוצאה הזו ב-{::nomarkdown}\(a_{1}\){:/nomarkdown}. הפעולה הזו מגדירה חבורה, שמסומנת ב-{::nomarkdown}\(A\rtimes B\){:/nomarkdown}, וקוראים לדבר הזה <strong>מכפלה חצי ישרה</strong> של {::nomarkdown}\(A\){:/nomarkdown} ב-{::nomarkdown}\(B\){:/nomarkdown}.

כמעט מייד ברורים שני דברים: ראשית, עבור הפעולה הטריוויאלית שבה כל איבר פועל כמו הזהות ({::nomarkdown}\(b\cdot a=a\){:/nomarkdown} לכל {::nomarkdown}\(b\in B\){:/nomarkdown} ולכל {::nomarkdown}\(a\in A\){:/nomarkdown}) קיבלנו שוב את המושג של מכפלה ישרה; ושנית, יש משהו מאוד לא סימטרי בהגדרה הזו, וכתוצאה מכך החבורות שנקבל כך יכולות להיות <strong>לא אבליות</strong>. זה דבר טוב: זה אומר שמצאנו בניה שתאפשר לנו לייצג חבורות לא אבליות מתוך חבורות קיימות, <strong>אפילו אם החבורות הקיימות כן אבליות</strong>. זה מה שמאפשר למכפלה חצי ישרה לתאר הרבה יותר סיטואציות משיכלנו קודם. זה מתבטא במשפט הבא: אם {::nomarkdown}\(A,B\){:/nomarkdown} הן תתי-חבורות של {::nomarkdown}\(G\){:/nomarkdown} כך ש-{::nomarkdown}\(A\cap B=\left\{ e\right\} \){:/nomarkdown}, ואם {::nomarkdown}\(A\){:/nomarkdown} נורמלית ב-{::nomarkdown}\(G\){:/nomarkdown} (אבל {::nomarkdown}\(B\){:/nomarkdown} <strong>לא בהכרח</strong> נורמלית) אז {::nomarkdown}\(AB\cong A\rtimes B\){:/nomarkdown} כאשר הפעולה של {::nomarkdown}\(B\){:/nomarkdown} על {::nomarkdown}\(A\){:/nomarkdown} שמגדירה את המכפלה החצי ישרה היא פעולת ההצמדה של אברי {::nomarkdown}\(A\){:/nomarkdown} על ידי אברי {::nomarkdown}\(B\){:/nomarkdown}.

עכשיו, משהסברתי מה אנחנו רוצים להשיג, בואו ניכנס לפרטים.
<h2>מכפלה חצי ישרה "פנימית"</h2>
בואו נתחיל עם דוגמה קונקרטיות כי בתחום הזה אסור לרחף יותר מדי באוויר. {::nomarkdown}\(S_{3}\){:/nomarkdown}: חבורת התמורות על {::nomarkdown}\(\left\{ 1,2,3\right\} \){:/nomarkdown}. הנה לנו שתי תתי-חבורות שלה: {::nomarkdown}\(A=\left\{ e,\left(1\ 2\ 3\right),\left(1\ 3\ 2\right)\right\} \){:/nomarkdown} ו-{::nomarkdown}\(B=\left\{ e,\left(1\ 2\right)\right\} \){:/nomarkdown}. קל לוודא ששתיהן תתי-חבורות, וקל לוודא ש-{::nomarkdown}\(A\){:/nomarkdown} נורמלית אבל {::nomarkdown}\(B\){:/nomarkdown} <strong>לא נורמלית</strong>. למה? כי נורמליות פירושה להיות סגורים להצמדה; וכשמדברים על תמורות (וזו אחת הסיבות למה טוב לעבוד עם תמורות) המשמעות של הצמדה היא פשוטה - החלפה של התמורה הנוכחית בתמורה אחרת עם אותו מבנה מעגלי. מעל שלושה איברים יש לנו בסך הכל שתי תמורות שהמבנה המעגלי שלהן הוא מעגל יחיד מאורך 3, ולכן {::nomarkdown}\(A\){:/nomarkdown} סגורה להצמדה, אבל יש לנו <strong>שלוש</strong> תמורות שונות עם מבנה מעגלי של מעגל יחיד מאורך 2, ולכן {::nomarkdown}\(B\){:/nomarkdown} לא סגורה להצמדה ואינה נורמלית. מצד שני, אפשר לבדוק באופן ישיר שמתקיים {::nomarkdown}\(AB=BA\){:/nomarkdown}. על פי מה שראינו בפוסט על מכפלות ישרות, די בכך ש-{::nomarkdown}\(A,B\){:/nomarkdown} תתי-חבורות עבורן {::nomarkdown}\(AB=BA\){:/nomarkdown} כדי להבטיח שהמכפלה {::nomarkdown}\(AB\){:/nomarkdown} תהיה חבורה בעצמה, ומכיוון ש-{::nomarkdown}\(A\cap B=\left\{ e\right\} \){:/nomarkdown} יוצא שזו חבורה עם {::nomarkdown}\(3\cdot2=6\){:/nomarkdown} איברים, כלומר קיבלנו ש-{::nomarkdown}\(AB=S_{3}\){:/nomarkdown} עצמה. מצד שני, אנחנו יודעים ש-{::nomarkdown}\(S_{3}\){:/nomarkdown} אינה אבלית, ולכן לא ייתכן ש-{::nomarkdown}\(AB\cong A\times B\){:/nomarkdown} מכיוון שמכפלה ישרה של חבורות כלשהן היא אבלית. מכאן שנדחף לנו בפרצוף הצורך למצוא "סוג חדש של מכפלה".

נעבור רגע לדבר על המקרה הכללי - {::nomarkdown}\(A,B\){:/nomarkdown} תתי-חבורות של {::nomarkdown}\(G\){:/nomarkdown} כך ש-{::nomarkdown}\(A\){:/nomarkdown} נורמלית ו-{::nomarkdown}\(B\){:/nomarkdown} לאו דווקא. איבר כללי של {::nomarkdown}\(AB\){:/nomarkdown} הוא מהצורה {::nomarkdown}\(ab\){:/nomarkdown} כך ש-{::nomarkdown}\(a\in A\){:/nomarkdown} ו-{::nomarkdown}\(b\in B\){:/nomarkdown}. אם ניקח שני איברים שונים של {::nomarkdown}\(AB\){:/nomarkdown}, שאסמן {::nomarkdown}\(a_{1}b_{1}\){:/nomarkdown} ו-{::nomarkdown}\(a_{2}b_{2}\){:/nomarkdown} ואכפול אותם (באמצעות הפעולה שקיימת כבר ב-{::nomarkdown}\(G\){:/nomarkdown}) אני אקבל {::nomarkdown}\(\left(a_{1}b_{1}\right)\cdot\left(a_{2}b_{2}\right)\){:/nomarkdown}. האיבר הזה לא מוצג כרגע בצורה ה"נחמדה" שבה אני רוצה להציג איברים של {::nomarkdown}\(AB\){:/nomarkdown}, כי אני רוצה לקבל הצגה שבה יש לי איבר מ-{::nomarkdown}\(A\){:/nomarkdown} שמוכפל באיבר מ-{::nomarkdown}\(B\){:/nomarkdown} ותו לא. מכיוון שאני יודע ש-{::nomarkdown}\(AB=BA\){:/nomarkdown} אני יכול להחליף את {::nomarkdown}\(b_{1}a_{2}\){:/nomarkdown} במשהו מהצורה {::nomarkdown}\(a^{\prime}b^{\prime}\){:/nomarkdown} ואז לקבל את ההצגה ה"נחמדה" שרציתי, אבל קצת איבדתי משהו - איבדתי את האיברים {::nomarkdown}\(b_{1},a_{2}\){:/nomarkdown} שהוחלפו באיברים כלליים שאני לא יודע עליהם כלום. אז בואו ננסה גישה שונה להציג את המכפלה הזו שלא תצריך אותי לאבד מידע.

התעלול שבו אני אנקוט יתבסס על כך ש-{::nomarkdown}\(A\){:/nomarkdown} היא תת-חבורה נורמלית, כלומר סגורה להצמדה; באופן כללי יותר הוא פשוט לא יעבוד. זה טריק ידוע, לקחת ביטוי שמתאר איבר בחבורה ולדחוף פנימה מכפלה באיבר וההופכי שלו. זה כמובן לא טריק שמוגבל לחבורות - אני מניח שרובכם מכירים את התעלול שמאפשר לי לראות ש-{::nomarkdown}\(\frac{1}{\sqrt{2}}\){:/nomarkdown}זה אותו דבר כמו {::nomarkdown}\(\frac{\sqrt{2}}{2}\){:/nomarkdown} - פשוט כופלים ב-{::nomarkdown}\(\frac{\sqrt{2}}{\sqrt{2}}\){:/nomarkdown}. אז נעשה כאן את אותו הדבר עם {::nomarkdown}\(b_{1}\){:/nomarkdown}:

{::nomarkdown}\(a_{1}b_{1}a_{2}b_{2}=a_{1}b_{1}a_{2}b_{1}^{-1}b_{1}b_{2}\){:/nomarkdown}

כעת קיבלתי איבר שהוא מהצורה:

{::nomarkdown}\(\left(a_{1}\left(b_{1}a_{2}b_{1}^{-1}\right)\right)\left(b_{1}b_{2}\right)\){:/nomarkdown}

מכיוון ש-{::nomarkdown}\(A\){:/nomarkdown} תת-חבורה נורמלית, {::nomarkdown}\(b_{1}a_{2}b_{1}^{-1}\in A\){:/nomarkdown} ולכן קיבלתי הצגה כמכפלה של איבר ב-{::nomarkdown}\(A\){:/nomarkdown} באיבר ב-{::nomarkdown}\(B\){:/nomarkdown}, ואפילו מעט מאוד השתנה פה: את האיברים של {::nomarkdown}\(B\){:/nomarkdown} פשוט כפלתי זה בזה לפי הסדר שלהם, ואילו את האיברים של {::nomarkdown}\(A\){:/nomarkdown} גם כפלתי זה בזה, אבל רק אחרי שהצמדתי את {::nomarkdown}\(a_{2}\){:/nomarkdown} בעזרת {::nomarkdown}\(b_{1}\){:/nomarkdown}.

נחזור לדוגמא שלנו: אני אסתכל על האיברים הבאים של {::nomarkdown}\(AB\){:/nomarkdown}: ראשית על {::nomarkdown}\(\left(1\ 2\ 3\right)\left(1\ 2\right)\){:/nomarkdown} ושנית על {::nomarkdown}\(\left(1\ 3\ 2\right)\){:/nomarkdown} (שמוכפל מימין ב-{::nomarkdown}\(e\){:/nomarkdown} ואני לא טורח לכתוב זאת). המכפלה של שניהם היא {::nomarkdown}\(\left(1\ 2\ 3\right)\left(1\ 2\right)\left(1\ 3\ 2\right)\){:/nomarkdown} ועל פי הכלל שמצאנו, אפשר להצמיד את {::nomarkdown}\(\left(1\ 3\ 2\right)\){:/nomarkdown} על ידי {::nomarkdown}\(\left(1\ 2\right)\){:/nomarkdown} (כלומר, להחליף את 2 ב-1 ולהפך) ולקבל את {::nomarkdown}\(\left(1\ 2\ 3\right)^{2}\cdot\left(1\ 2\right)\){:/nomarkdown} , כלומר את {::nomarkdown}\(\left(1\ 3\ 2\right)\left(1\ 2\right)\){:/nomarkdown}. אם תבדקו ישירות תראו שזה אכן שווה ל-{::nomarkdown}\(\left(1\ 2\ 3\right)\left(1\ 2\right)\left(1\ 3\ 2\right)\){:/nomarkdown}.
<h2>מכפלה חצי ישרה "חיצונית"</h2>
מה שתיארתי עד כה היה מה שנקרא "מכפלה חצי ישרה פנימית". הסיטואציה הייתה שאני מתחיל מחבורה קיימת {::nomarkdown}\(G\){:/nomarkdown}, מסתכל על תת-חבורות שלה שכבר מוגדרת בין איברים שלהן פעולת הכפל של {::nomarkdown}\(G\){:/nomarkdown}, ומייצר מהן תת-חבורה אחרת של {::nomarkdown}\(G\){:/nomarkdown}. כלומר, אני בסך הכל נותן אבחנה על הקשר בין שלוש תת-חבורות קיימות של {::nomarkdown}\(G\){:/nomarkdown}. מה שמעניין יותר הוא האופן שבו אני יכול לקחת שתי חבורות {::nomarkdown}\(A,B\){:/nomarkdown} <strong>שאין ביניהן שום קשר</strong> ולבנות מתוכן חבורה חדשה, גדולה יותר. בחבורה הגדולה יותר הזו אני אוכל למצוא תת-חבורות שיהיו איזומורפיות ל-{::nomarkdown}\(A,B\){:/nomarkdown} ואני אקבל שהחבורה הזו היא המכפלה החצי ישרה של אותן תתי-חבורות. בואו ננסח פורמלית את מה שאני הולך לעשות.

ובכן, יהיו {::nomarkdown}\(A,B\){:/nomarkdown} חבורות כלשהן. בנוסף אליהן אני צריך גם פעולה של {::nomarkdown}\(B\){:/nomarkdown} על {::nomarkdown}\(A\){:/nomarkdown}, אבל כפי שנראה בהמשך, לא סתם פעולה כלשהי (כלומר, הומומורפיזם של {::nomarkdown}\(B\){:/nomarkdown} לתוך חבורת <strong>הפרמוטציות</strong> של {::nomarkdown}\(A\){:/nomarkdown}) אלא פעולה שמכבדת את הפעולה של {::nomarkdown}\(A\){:/nomarkdown}, דהיינו הומומורפיזם של {::nomarkdown}\(B\){:/nomarkdown} לתוך חבורת <strong>האוטומורפיזמים</strong> של {::nomarkdown}\(A\){:/nomarkdown}. אוטומורפיזם של {::nomarkdown}\(A\){:/nomarkdown} הוא פונקציה {::nomarkdown}\(f:A\to A\){:/nomarkdown} שהיא חח"ע ועל (עד כאן זה תיאור של <strong>פרמוטציה</strong>) שבנוסף לכך מקיימת {::nomarkdown}\(f\left(a_{1}a_{2}\right)=f\left(a_{1}\right)f\left(a_{2}\right)\){:/nomarkdown}, כלומר היא הומומורפיזם. נסמן ב-{::nomarkdown}\(\text{Aut}\left(A\right)\){:/nomarkdown} את חבורת האוטומורפיזמים של {::nomarkdown}\(A\){:/nomarkdown}; אז אנחנו רוצים פעולה של {::nomarkdown}\(B\){:/nomarkdown} שמתוארת על ידי הומומורפיזם {::nomarkdown}\(\varphi:B\to\text{Aut}\left(A\right)\){:/nomarkdown}. כן, החלק הזה מתחיל להיות מבלבל, עם הומומורפיזמים שמחזירים אוטומורפיזמים.

עכשיו אני מגדיר את החבורה {::nomarkdown}\(G=A\rtimes_{\varphi}B\){:/nomarkdown} כך: זו הקבוצה {::nomarkdown}\(A\times B\triangleq\left\{ \left(a,b\right)\ \|\ a\in A,b\in B\right\} \){:/nomarkdown} עם פעולת הכפל {::nomarkdown}\(\left(a_{1},b_{1}\right)\left(a_{2},b_{2}\right)=\left(a_{1}b_{1}\cdot a_{2},b_{1}b_{2}\right)\){:/nomarkdown}. כאן {::nomarkdown}\(b_{1}\cdot a_{2}\){:/nomarkdown} זה סימון מקוצר לפעולה של {::nomarkdown}\(B\){:/nomarkdown}, כלומר {::nomarkdown}\(b_{1}\cdot a_{2}\triangleq\varphi\left(b_{1}\right)\left(a_{2}\right)\){:/nomarkdown}. צריך עכשיו להשתכנע בכך ש-{::nomarkdown}\(G\){:/nomarkdown} היא חבורה, בכך ש-{::nomarkdown}\(A,B\){:/nomarkdown} איזומורפיות לתתי-חבורות שלה, וש-{::nomarkdown}\(G\){:/nomarkdown} היא מכפלה חצי ישרה פנימית של שתי-החבורות הללו. חוץ מזה אפשר יהיה גם להראות שתת החבורה שאיזומורפית ל-{::nomarkdown}\(A\){:/nomarkdown} היא תת-חבורה נורמלית.

להוכיח ש-{::nomarkdown}\(A\rtimes_{\varphi}B\){:/nomarkdown} זה... זה כואב. אין מנוס מלהודות בכך. צריך לעשות את כל החישובים ואין דרכי קיצור. בואו נלך אל הדבר שהוא תמיד הגרוע ביותר - אסוציאטיביות. מן הסתם האסוציאטיביות של {::nomarkdown}\(A\rtimes_{\varphi}B\){:/nomarkdown} תנבע מהאסוציאטיביות של {::nomarkdown}\(A,B\){:/nomarkdown} ומאיזו תכונה נחמדה של פעולת חבורה על קבוצה. בואו נעשה את הכל כולל הכל. אתם מוזמנים לדלג אם בא לכם.

{::nomarkdown}\(\left[\left(a_{1},b_{1}\right)\left(a_{2},b_{2}\right)\right]\left(a_{3},b_{3}\right)=\left(a_{1}b_{1}\cdot a_{2},b_{1}b_{2}\right)\left(a_{3},b_{3}\right)\){:/nomarkdown}

{::nomarkdown}\(=\left(a_{1}\left(b_{1}\cdot a_{2}\right)\left(b_{1}b_{2}\cdot a_{3}\right),b_{1}b_{2}b_{3}\right)\){:/nomarkdown}

עכשיו פסק זמן. בואו ניזכר בתכונה הבסיסית של פעולת חבורה: פעולה של מכפלת איברים אפשר לפרק לפעולה-על-פעולה. כלומר {::nomarkdown}\(b_{1}b_{2}\cdot a_{3}=b_{1}\cdot\left(b_{2}\cdot a_{3}\right)\){:/nomarkdown}.

כמו כן, במקרה הספציפי שלנו הפעולה, כזכור, היא <strong>אוטומורפיזם</strong> של {::nomarkdown}\(A\){:/nomarkdown}. במילים אחרות, {::nomarkdown}\(b\cdot\left(xy\right)=\left(b\cdot x\right)\left(b\cdot y\right)\){:/nomarkdown} עבור {::nomarkdown}\(x,y\in A\){:/nomarkdown}. שני הדברים הללו מאפשרים לי לבצע את השלב הבא, שיתבסס על כך ש:

{::nomarkdown}\(\left(b_{1}\cdot a_{2}\right)\left(b_{1}b_{2}\cdot a_{3}\right)=\left(b_{1}\cdot a_{2}\right)\left(b_{1}\cdot\left(b_{2}\cdot a_{3}\right)\right)=b_{1}\cdot\left(a_{2}\left(b_{2}\cdot a_{3}\right)\right)\){:/nomarkdown}

ולכן נקבל

{::nomarkdown}\(\left(a_{1}\left(b_{1}\cdot a_{2}\right)\left(b_{1}b_{2}\cdot a_{3}\right),b_{1}b_{2}b_{3}\right)=\left(a_{1}\left[b_{1}\cdot\left(a_{2}\left(b_{2}\cdot a_{3}\right)\right)\right],b_{1}b_{2}b_{3}\right)\){:/nomarkdown}

{::nomarkdown}\(=\left(a_{1},b_{1}\right)\left(\left(a_{2}\left(b_{2}\cdot a_{3}\right)\right),b_{2}b_{3}\right)\){:/nomarkdown}

{::nomarkdown}\(=\left(a_{1},b_{1}\right)\left[\left(a_{2},b_{2}\right)\left(a_{3},b_{3}\right)\right]\){:/nomarkdown}

טוב, זה היה פחות כואב משחששתי, וכבונוס אפשר לראות יפה מאוד איפה נכנסת לתמונה העובדה שהפעולה של {::nomarkdown}\(B\){:/nomarkdown} היא אוטומורפיזם. כשאני מעודד מההצלחה היחסית הזו בואו נעבור לבדוק את שאר תכונות החבורה.

מי יהיה איבר היחידה, זה די ברור: {::nomarkdown}\(\left(e_{A},e_{B}\right)\){:/nomarkdown}. זה נובע מייד מכך ש-{::nomarkdown}\(e_{B}\cdot x=x\){:/nomarkdown} לכל {::nomarkdown}\(x\in A\){:/nomarkdown}; זו אחת מהתכונות שמאפיינות פעולה של חבורה על קבוצה, שאיבר היחידה תמיד פועל בתור פונקציית הזהות. נראה שגם מתבקש שההופכי של {::nomarkdown}\(\left(a,b\right)\){:/nomarkdown} יהיה {::nomarkdown}\(\left(a^{-1},b^{-1}\right)\){:/nomarkdown} (זה הרי קורה במכפלה ישרה וזה גם הדבר המתבקש ממילא). האמנם? מה קורה אם כופלים אותם?

{::nomarkdown}\(\left(a,b\right)\left(a^{-1},b^{-1}\right)=\left(a\left(b\cdot a^{-1}\right),bb^{-1}\right)=\left(a\left(b\cdot a^{-1}\right),e_{B}\right)\){:/nomarkdown}

ובכן, האם {::nomarkdown}\(a\left(b\cdot a^{-1}\right)\){:/nomarkdown} הוא {::nomarkdown}\(e_{A}\){:/nomarkdown}? לא. חסר לנו פה משהו. אם רק היינו יכולים לבטל את הפעולה של {::nomarkdown}\(b\){:/nomarkdown} איכשהו! ובכן, אפשר: במקום לבחור בתור ההופכי את {::nomarkdown}\(\left(a^{-1},b^{-1}\right)\){:/nomarkdown} נבחר את {::nomarkdown}\(\left(b^{-1}\cdot a^{-1},b^{-1}\right)\){:/nomarkdown}. עכשיו נקבל

{::nomarkdown}\(\left(a,b\right)\left(b^{-1}\cdot a^{-1},b^{-1}\right)=\left(a\left(b^{-1}b\cdot a^{-1}\right),bb^{-1}\right)=\left(aa^{-1},e_{B}\right)=\left(e_{A},e_{B}\right)\){:/nomarkdown}

אבל יש עכשיו סוג של חוסר סימטריה בהגדרה שבגללו אני מרגיש צורך לוודא שגם כפל שבו הופכים את שני האיברים הללו נותן את אותה התוצאה:

{::nomarkdown}\(\left(b^{-1}\cdot a^{-1},b^{-1}\right)\left(a,b\right)=\left(\left(b^{-1}\cdot a^{-1}\right)\left(b^{-1}\cdot a\right),b^{-1}b\right)=\){:/nomarkdown}

{::nomarkdown}\(=\left(b^{-1}\cdot\left(a^{-1}a\right),e_{B}\right)=\left(b^{-1}e_{A},e_{B}\right)=\left(e_{A},e_{B}\right)\){:/nomarkdown}

כאשר שני המעברים האחרונים נובעים מכך שהפעולה של {::nomarkdown}\(B\){:/nomarkdown} היא אוטומורפיזם.
<h2>מכפלה חצי ישרה חיצונית היא מכפלה חצי ישרה פנימית!</h2>
זה מסיים את הצגת המושג של מכפלה חצי ישרה חיצונית. עכשיו אני רוצה לשכנע אתכם שזה אותו מושג כמו מכפלה חצי ישרה פנימית. כלומר, שאפשר לראות את {::nomarkdown}\(A\rtimes_{\varphi}B\){:/nomarkdown} גם בתור מכפלה חצי ישרה פנימית של שתי תתי חבורות - אלו שמתאימות בצורה הטריוויאלית ל-{::nomarkdown}\(A,B\){:/nomarkdown}. אסמן אותן ב-{::nomarkdown}\(H,K\){:/nomarkdown}. כלומר, אגדיר

{::nomarkdown}\(H=\left\{ \left(a,e_{B}\right)\ \|\ a\in A\right\} \){:/nomarkdown}

{::nomarkdown}\(K=\left\{ \left(e_{A},b\right)\ \|\ b\in B\right\} \){:/nomarkdown}

קל לראות ש-{::nomarkdown}\(A\cong H\){:/nomarkdown} ו-{::nomarkdown}\(B\cong K\){:/nomarkdown} אז אדלג על זה. יש שלושה דברים שאני כן רוצה להראות:
<ol>
	<li>{::nomarkdown}\(H\){:/nomarkdown} <strong>נורמלית</strong> ב-{::nomarkdown}\(A\rtimes_{\varphi}B\){:/nomarkdown}. זו אחת מהדרישות לכך שנוכל לדבר על המכפלה החצי ישרה הפנימית של {::nomarkdown}\(H,K\){:/nomarkdown}.</li>
	<li>{::nomarkdown}\(\left\|H\cap K\right\|=1\){:/nomarkdown} - זו עוד דרישה שבלעדיה ברור שהמכפלה הפנימית תהיה שונה מהחיצונית.</li>
	<li>לבסוף, החשוב ביותר - כשדיברנו על מכפלה פנימית, ה"פעולה" של {::nomarkdown}\(K\){:/nomarkdown} על {::nomarkdown}\(H\){:/nomarkdown} הייתה באמצעות <strong>הצמדה</strong>. במכפלה החיצונית של {::nomarkdown}\(A,B\){:/nomarkdown} הפעולה הוגדרה באמצעות {::nomarkdown}\(\varphi\){:/nomarkdown} שהתאימה לכל איבר של {::nomarkdown}\(B\){:/nomarkdown} אוטומורפיזם של {::nomarkdown}\(A\){:/nomarkdown}. מה שעלינו להראות הוא שלכל איבר {::nomarkdown}\(b\in B\){:/nomarkdown}, האוטומורפיזם ש-{::nomarkdown}\(\varphi\){:/nomarkdown} הצמידה לו הוא בדיוק מה שמוגדר על ידי הצמדה באמצעות {::nomarkdown}\(\left(e_{A},b\right)\){:/nomarkdown} (האיבר של {::nomarkdown}\(K\){:/nomarkdown} שמתאים ל-{::nomarkdown}\(b\){:/nomarkdown}). פורמלית, {::nomarkdown}\(\left(b\cdot a,e_{B}\right)=\left(e_{A},b\right)\left(a,e_{B}\right)\left(e_{A},b\right)^{-1}\){:/nomarkdown}.</li>
</ol>
2 הוא מובן מאליו ונובע מההגדרה - האיבר המשותף היחיד הוא {::nomarkdown}\(\left(e_{A},e_{B}\right)\){:/nomarkdown}. בואו נעבור ל-3 דווקא, כי הוא כולל חישוב פשוט יחסית (הצמדה של איבר של {::nomarkdown}\(H\){:/nomarkdown} עם מישהו מ-{::nomarkdown}\(K\){:/nomarkdown}, להבדיל מהוכחה ש-{::nomarkdown}\(H\){:/nomarkdown} נורמלית שתצריך אותי להצמיד עם איבר כלשהו). כאן אין חוכמות גדולות, פשוט כופלים את שלושת האיברים על פי כללי הכפל (ומכיוון שכבר ראינו שיש אסוציאטיביות, לא חשוב איזו משתי ההכפלות נבצע קודם):

{::nomarkdown}\(\left(e_{A},b\right)\left(a,e_{B}\right)\left(e_{A},b\right)^{-1}=\left(e_{A}\left(b\cdot a\right),e_{B}b\right)=\left(e_{A},b\right)^{-1}\){:/nomarkdown}

{::nomarkdown}\(\left(b\cdot a,b\right)\left(e_{A},b\right)^{-1}=\left(b\cdot a,b\right)\left(b^{-1}\cdot e_{A}^{-1},b^{-1}\right)\){:/nomarkdown}

{::nomarkdown}\(=\left(b\cdot a,b\right)\left(e_{A},b^{-1}\right)=\left(\left(b\cdot a\right)\left(b\cdot e_{A}\right),bb^{-1}\right)\){:/nomarkdown}

{::nomarkdown}\(=\left(b\cdot a,e_{B}\right)\){:/nomarkdown}

וקיבלנו את המבוקש.

נשאר רק להראות ש-{::nomarkdown}\(H\){:/nomarkdown} נורמלית. האינטואיציה פה היא שראינו שהצמדה על ידי איבר של {::nomarkdown}\(K\){:/nomarkdown} משמרת את {::nomarkdown}\(H\){:/nomarkdown}, ומן הסתם גם הצמדה על ידי איבר של {::nomarkdown}\(H\){:/nomarkdown} תשמר את {::nomarkdown}\(H\){:/nomarkdown}. עכשיו, אנחנו יודעים ש-{::nomarkdown}\(HK\){:/nomarkdown} כוללת את <strong>כל</strong> אברי החבורה (זה נובע מתכונה 2), כלומר אפשר להציג כל איבר בחבורה בתור מכפלה של איבר מ-{::nomarkdown}\(K\){:/nomarkdown} באיבר מ-{::nomarkdown}\(H\){:/nomarkdown}. זה תרגיל קל להוכיח שהצמדה על ידי מכפלה של שני איברים שכל אחד מהם בנפרד משמר את {::nomarkdown}\(H\){:/nomarkdown} עדיין משמרת את {::nomarkdown}\(H\){:/nomarkdown}, מה שמסיים את ההוכחה.

ראינו כאן את הבניה הבסיסית האחרונה שאני רוצה להציג במסגרת סדרת הפוסטים שלי על חבורות. אבל מה עושים עם זה? אני מקווה לומר מילה וחצי על כך בהמשך.
