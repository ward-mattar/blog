---
id: 2187
title: "הבעיה העשירית של הילברט - איך מקודדים דיופנטית את כל הסדרות הסופיות?"
date: 2012-09-15 14:52:58
layout: post
categories: 
  - תורת המספרים
tags: 
  - הבעיה העשירית של הילברט
---
בסיום הפוסט הקודם על הבעיה העשירית של הילברט הגענו למסקנה שכדי להוכיח שהבעיה העשירית של הילברט אינה כריעה (על ידי כך שנוכיח שכל פונקציה רקורסיבית היא דיופנטית) אנחנו נזקקים לפונקציה דיופנטית מיוחדת, שמסוגלת באורח קסום כלשהו לקודד <strong>כל סדרה סופית</strong>.

עזבו אתכם לרגע משאלת הדיופנטיותת איך בכלל נראית פונקציה כזו? פשוט מאוד: זו תהיה פונקציה {::nomarkdown}\( S\left(i,u\right)\){:/nomarkdown} על שני משתנים שהם מספרים טבעיים חיוביים, כך שלכל סדרה סופית {::nomarkdown}\( a_{1},\dots,a_{N}\){:/nomarkdown} של מספרים טבעיים חיוביים, יהיה קיים {::nomarkdown}\( u\){:/nomarkdown} כך ש-{::nomarkdown}\( S\left(i,u\right)=a_{i}\){:/nomarkdown} לכל {::nomarkdown}\( 1\le i\le N\){:/nomarkdown}. במילים אחרות, תחשבו שהתאמנו מספר טבעי לכל סדרה סופית, ואז {::nomarkdown}\( S\){:/nomarkdown} מקבלת הן את מספר הסדרה הזו ({::nomarkdown}\( u\){:/nomarkdown}) והן את האינדקס של איבר ספציפי בסדרה ({::nomarkdown}\( i\){:/nomarkdown}) ומחזירה אותו. מכיוון שיש רק מספר בן מניה של סדרות סופיות, ברור שקיימת פונקציה כמו {::nomarkdown}\( S\){:/nomarkdown}; למעשה, קיימות המון פונקציות שמקיימות את התכונה של {::nomarkdown}\( S\){:/nomarkdown} כי יש לנו לא מעט חופש בחירה (מה יהיה המספר שמקודד כל סדרה, ומה הערכים ש-{::nomarkdown}\( S\left(i,u\right)\){:/nomarkdown} מחזירה כאשר {::nomarkdown}\( i\){:/nomarkdown} גדול מהאינדקס של האיבר האחרון בסדרה {::nomarkdown}\( u\){:/nomarkdown}).

האתגר שלנו, אם כן, הוא למצוא פונקציה {::nomarkdown}\( S\left(i,u\right)\){:/nomarkdown} שכזו שתהיה גם <strong>דיופנטית</strong>. כלומר, שיהיה פולינום במספר משתנים {::nomarkdown}\( p\left(x_{1},x_{2},x_{3},y_{1},\dots,y_{k}\right)\){:/nomarkdown} כך שלכל הצבה של ערכים ב-{::nomarkdown}\( x_{1},x_{2},x_{3}\){:/nomarkdown}, המשוואה הדיופנטית המתקבלת {::nomarkdown}\( p\left(a_{1},a_{2},a_{3},y_{1},\dots,y_{k}\right)=0\){:/nomarkdown} במשתנים {::nomarkdown}\( y_{1},\dots,y_{k}\){:/nomarkdown} היא פתירה אם ורק אם {::nomarkdown}\( a_{3}=S\left(a_{1},a_{2}\right)\){:/nomarkdown}.

יפה, אז הבנו מה היעד שלנו. לפני שנגיע אליו, בואו נפתור בעיה פשוטה יותר, שאחר כך נשתמש, כמובן, בפתרונה: פונקציות דיופנטיות שממירות זוגות של טבעיים למספר טבעי באופן חד-חד-ערכי ועל, וההפך.

בואו נתחיל עם פונקציה דיופנטית תמימה למראה - הפונקציה של <strong>המספרים המשולשיים</strong>, {::nomarkdown}\( T\left(n\right)=1+2+3+\dots+n=\frac{n\left(n+1\right)}{2}\){:/nomarkdown}. למי שתוהה איך הגעתי לנוסחה באגף ימין, זה תעלול של גאוס: אם ניקח את הסדרה {::nomarkdown}\( 1,2,\dots,n\){:/nomarkdown}, נכתוב מתחתיה את הסדרה {::nomarkdown}\( n,n-1,\dots,1\){:/nomarkdown} ונחבר כל שני איברים שנמצאים האחד מעל השני, נקבל תמיד {::nomarkdown}\( n+1\){:/nomarkdown}, ויש לנו בדיוק {::nomarkdown}\( n\){:/nomarkdown} איברים כאלו. זה מראה ש-{::nomarkdown}\( T\left(n\right)+T\left(n\right)=n\left(n+1\right)\){:/nomarkdown} ולכן {::nomarkdown}\( T\left(n\right)=\frac{n\left(n+1\right)}{2}\){:/nomarkdown}. ולמה "מספרים משולשיים"? כי אם נצייר משולש שמורכב מתפוזים כך שבקודקוד העליון שלו יש תפוז אחד, בשורה שמתחתיו שני תפוזים, מתחת לכך שלושה תפוזים וכן הלאה - מספר התפוזים במשולש יהיה {::nomarkdown}\( T\left(n\right)\){:/nomarkdown} כאשר {::nomarkdown}\( n\){:/nomarkdown} הוא מספר השורות.

למה הפונקציה הזו דיופנטית? ובכן, {::nomarkdown}\( p\left(x_{1},x_{2}\right)=2x_{2}-x_{1}\left(x_{1}+1\right)\){:/nomarkdown} עושה את העבודה - היא מקיימת {::nomarkdown}\( p\left(n,T\left(n\right)\right)=0\){:/nomarkdown} וכמו כן {::nomarkdown}\( p\left(a,b\right)\ne0\){:/nomarkdown} אם {::nomarkdown}\( b\ne T\left(a\right)\){:/nomarkdown}.

עכשיו נתחיל עם להטוטים של תורת המספרים. ראשית, שימו לב לכך ש-{::nomarkdown}\( T\left(n\right)\){:/nomarkdown} היא פונקציה <strong>עולה ממש</strong>, כלומר {::nomarkdown}\( T\left(n\right)&lt;T\left(n+1\right)\){:/nomarkdown} תמיד, וכמו כן היא אינה חסומה (זה מובן מאליו - כל פונקציה עולה ממש של טבעיים אינה חסומה). זה אומר שלכל מספר טבעי {::nomarkdown}\( z\){:/nomarkdown}, קיים איזה שהוא {::nomarkdown}\( n\ge0\){:/nomarkdown} כך ש-{::nomarkdown}\( T\left(n\right)&lt;z\le T\left(n+1\right)\){:/nomarkdown}, כלומר {::nomarkdown}\( z\){:/nomarkdown} נופל באיזה שהוא קטע שבין {::nomarkdown}\( T\left(n\right)\){:/nomarkdown} ו-{::nomarkdown}\( T\left(n+1\right)\){:/nomarkdown} (ורק בקטע אחד כזה!). לכן אפשר לכתוב את {::nomarkdown}\( z\){:/nomarkdown} בצורה <strong>יחידה</strong> בתור {::nomarkdown}\( z=T\left(n\right)+y\){:/nomarkdown} כך ש-{::nomarkdown}\( 1\le y\le n+1\){:/nomarkdown} והערכים של {::nomarkdown}\( n,y\){:/nomarkdown} נקבעים באופן יחיד בהינתן {::nomarkdown}\( z\){:/nomarkdown}.

בעיה קטנה שצצה עכשיו היא ש-{::nomarkdown}\( n\){:/nomarkdown} יכול להיות שווה 0 אבל אנחנו מתעסקים רק במספרים שערכם לפחות 1. לכן את {::nomarkdown}\( n\){:/nomarkdown} נכתוב בעזרת {::nomarkdown}\( y\){:/nomarkdown}: {::nomarkdown}\( n=y+x-2\){:/nomarkdown}, כאשר {::nomarkdown}\( x\){:/nomarkdown} הוא משתנה כלשהו שערכו נע בין 1 ובין {::nomarkdown}\( n+1\){:/nomarkdown}, כמו {::nomarkdown}\( y\){:/nomarkdown}. אם כן, אפשר לכתוב:

{::nomarkdown}\( z=T\left(x+y-2\right)+y\){:/nomarkdown}

ושוב - {::nomarkdown}\( x,y\){:/nomarkdown} נקבעים <strong>ביחידות</strong>בהינתן {::nomarkdown}\( z\){:/nomarkdown}. נגדיר כעת שלוש פונקציות:
<ol>
	<li>{::nomarkdown}\( L\left(z\right)=x\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( R\left(z\right)=y\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( P\left(x,y\right)=T\left(x+y-2\right)+y\){:/nomarkdown}</li>
</ol>
בואו נבין מה הפונקציות הללו עושות. ראשית אכתוב את הזוגות {::nomarkdown}\( \left(L\left(z\right),R\left(z\right)\right)\){:/nomarkdown} עבור הערכים הראשונים של {::nomarkdown}\( z=1,2,3,4,\dots\){:/nomarkdown}. עבור {::nomarkdown}\( z=1\){:/nomarkdown} ברור ש-{::nomarkdown}\( n=0\){:/nomarkdown} ו-{::nomarkdown}\( y=1\){:/nomarkdown}, ולכן {::nomarkdown}\( x=1\){:/nomarkdown}, כלומר הזוג הראשון הוא {::nomarkdown}\( \left(1,1\right)\){:/nomarkdown}. עבור {::nomarkdown}\( z=2\){:/nomarkdown} ברור ש-{::nomarkdown}\( n=1\){:/nomarkdown} ו-{::nomarkdown}\( y=1\){:/nomarkdown} ולכן {::nomarkdown}\( x=2\){:/nomarkdown} ולכן הזוג השני הוא {::nomarkdown}\( \left(2,1\right)\){:/nomarkdown}, וכן הלאה. נקבל את הסדרה:

{::nomarkdown}\( \left(1,1\right),\left(2,1\right),\left(1,2\right),\left(3,1\right),\left(2,2\right),\left(1,3\right),\dots\){:/nomarkdown}

העקרון די ברור: אנחנו קודם כל עוברים על כל הזוגות {::nomarkdown}\( \left(x,y\right)\){:/nomarkdown} שבהם {::nomarkdown}\( x+y=2\){:/nomarkdown} - יש רק זוג אחד כזה - ולכן על כל הזוגות שמתאימים ל-{::nomarkdown}\( n=0\){:/nomarkdown} (כזכור, {::nomarkdown}\( n=x+y-2\){:/nomarkdown}). אחר כך אנחנו עוברים על כל הזוגות שמתאימים ל{::nomarkdown}\( n=1\){:/nomarkdown}, כלומר {::nomarkdown}\( x+y=3\){:/nomarkdown}, לאחר מכן על הזוגות של {::nomarkdown}\( n=2\){:/nomarkdown}, כלומר {::nomarkdown}\( x+y=4\){:/nomarkdown}, וכן הלאה. בכל הזוגות הללו אנחנו מתחילים מ-{::nomarkdown}\( x\){:/nomarkdown} הגדול ביותר האפשרי ובמעבר לזוג הבא מקטינים אותו ב-1 ומגדילים את {::nomarkdown}\( y\){:/nomarkdown} ב-1.

{::nomarkdown}\( P\left(x,y\right)\){:/nomarkdown} היא בבירור הפונקציה ההפוכה ל-{::nomarkdown}\( L,R\){:/nomarkdown}, כלומר מתקיים {::nomarkdown}\( P\left(L\left(z\right),R\left(z\right)\right)=z\){:/nomarkdown} לכל {::nomarkdown}\( z\){:/nomarkdown}, כמו גם {::nomarkdown}\( L\left(P\left(x,y\right)\right)=x\){:/nomarkdown} ו-{::nomarkdown}\( R\left(P\left(x,y\right)\right)=y\){:/nomarkdown}. בראשית ימי הבלוג <a href="http://www.gadial.net/2007/09/18/r_and_re/">הצגתי</a>את הפונקציה הזו (בניסוח טיפה יותר מפורש וטיפה שונה) ואמרתי ש"רק אתמול גיליתי" את הפונקציה (מה שנכון נכון). בתגובות לפוסט העירו לי שאם מעוניינים לקודד כל זוג מספרים טבעיים באופן חח"ע ועל באמצעות מספר טבעי יחיד אפשר גם להשתמש בפונקציה {::nomarkdown}\( f\left(x,y\right)=2^{x}\left(2y+1\right)-1\){:/nomarkdown} (שהולכת מהטבעיים עם 0 לטבעיים עם 0, אבל זה לא באמת משנה) שהיא קצת יותר ברורה. החסרון של הפונקציה הזו בהקשר הנוכחי היא שבגלל ה-{::nomarkdown}\( 2^{x}\){:/nomarkdown} שמופיע שם לא ברור איך להוכיח שהיא דיופנטית בלי עוד עבודה, וגם לא ברור איך "להפוך" אותה באמצעות פונקציות דמויות {::nomarkdown}\( L,R\){:/nomarkdown}. במקרה שלנו, לעומת זאת, קל לראות שכל הפונקציות שהצגתי הן דיופנטיות. הבה ונעשה זאת במפורש:
<ol>
	<li>{::nomarkdown}\( x=L\left(z\right)\iff\exists y\left(2z=\left(x+y-2\right)\left(x+y-1\right)+2y\right)\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( y=R\left(z\right)\iff\exists x\left(2z=\left(x+y-2\right)\left(x+y-1\right)+2y\right)\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( z=P\left(x,y\right)\iff2z=\left(x+y-2\right)\left(x+y-1\right)+2y\){:/nomarkdown}</li>
</ol>
זה משלים את החלק הראשון של הבניה שלנו: הראנו שמספור (והיפוך המספור) של זוגות של טבעיים הוא פונקציה דיופנטית. כעת - להגדרת הפונקציה {::nomarkdown}\( S\left(i,u\right)\){:/nomarkdown}, שהיא כבר ממש בהישג ידינו!

נגדיר {::nomarkdown}\( S\left(i,u\right)=L\left(u\right)\mbox{ mod }\left(1+iR\left(u\right)\right)\){:/nomarkdown}, וזו הפונקציה המבוקשת. רגע, מה?

ראשית, צריך טיפה להיזהר פה עם ההגדרה שלנו. אני מגדיר את {::nomarkdown}\( a\mbox{ mod }b\){:/nomarkdown} להיות כאן המספר החיובי שמתקבל כשמחלקים {::nomarkdown}\( a\){:/nomarkdown} ב-{::nomarkdown}\( b\){:/nomarkdown} ולוקחים שארית, אלא אם {::nomarkdown}\( a\){:/nomarkdown} מתחלק ממש ב-{::nomarkdown}\( b\){:/nomarkdown} ואז במקום 0 הפונקציה מחזירה את {::nomarkdown}\( b\){:/nomarkdown} (אני עושה את זה כדי לחמוק מהחזרה של 0).

כעת, בואו ננסה להבין איך הפונקציה "עובדת". כל סדרה מקודדת על ידי מספר {::nomarkdown}\( u\){:/nomarkdown}, שבעצם אנחנו חושבים עליו כאילו הוא מקודד זוג מספרים טבעיים, {::nomarkdown}\( \left(a,b\right)\){:/nomarkdown}. עכשיו לוקחים את {::nomarkdown}\( a\){:/nomarkdown} ומתחילים "לגרד" ממנו את אברי הסדרה: מחלקים אותו ב-{::nomarkdown}\( 1+b\){:/nomarkdown}, ב-{::nomarkdown}\( 1+2b\){:/nomarkdown}, ב-{::nomarkdown}\( 1+3b\){:/nomarkdown} וכן הלאה... בכל פעם לוקחים את השארית ומוסיפים אותה לסדרה. מתישהו {::nomarkdown}\( 1+ib\){:/nomarkdown} הולך להיות גדול יותר מ-{::nomarkdown}\( a\){:/nomarkdown} ואז הסדרה "תתקע" על להחזיר {::nomarkdown}\( a,a,a,\dots\){:/nomarkdown} כל הזמן, אבל זה לא מפריע לנו - אנחנו רוצים רק לקודד סדרות סופיות ולא מעניין אותנו מה קורה עבור {::nomarkdown}\( i\){:/nomarkdown}-ים שגדולים מאורך הסדרה.

מה שאני צריך לשכנע אתכם בו הוא כפול: ראשית, שהפונקציה הזו דיופנטית; את זה אעשה אחר כך. שנית, שאכן אפשר לקבל כל סדרה סופית בעזרת השיטה הזו של לקחת {::nomarkdown}\( a\){:/nomarkdown} מסויים ולהתחיל "לקלף" אותו עם {::nomarkdown}\( 1+ib\){:/nomarkdown}.

כאן נכנס <a href="http://www.gadial.net/2012/09/12/chinese_remainder_theorem/">משפט השאריות הסיני</a> לתמונה. נניח שאנחנו רוצים לקודד את הסדרה {::nomarkdown}\( a_{1},\dots,a_{N}\){:/nomarkdown}. בואו נניח גם שאנחנו מכירים {::nomarkdown}\( b\){:/nomarkdown} כלשהו כך ש-{::nomarkdown}\( 1+b,1+2b,\dots,1+Nb\){:/nomarkdown} כולם זרים זה לזה. במקרה הזה, ניצחנו, כי נסתכל על מערכת המשוואות:

{::nomarkdown}\( x\equiv_{1+b}a_{1}\){:/nomarkdown}

{::nomarkdown}\( \vdots\){:/nomarkdown}

{::nomarkdown}\( x\equiv_{1+Nb}a_{N}\){:/nomarkdown}

משפט השאריות הסיני מבטיח שקיים למערכת הזו פתרון. ניקח את הפתרון הזה להיות {::nomarkdown}\( a\){:/nomarkdown}, וסיימנו. השאלה, אם כן, היא רק האם לכל {::nomarkdown}\( N\){:/nomarkdown} טבעי קיים {::nomarkdown}\( b\){:/nomarkdown} טבעי כך ש-{::nomarkdown}\( 1+b,1+2b,\dots,1+Nb\){:/nomarkdown} כולם זרים זה לזה. בואו נשאל את עצמנו מה יגרום לכך שעבור {::nomarkdown}\( N\){:/nomarkdown} מסויים {::nomarkdown}\( b\){:/nomarkdown} ספציפי לא יעבוד, כלומר יהיו {::nomarkdown}\( i,j\){:/nomarkdown} כך ש-{::nomarkdown}\( 1+ib,1+jb\){:/nomarkdown} לא יהיו זרים, כלומר יהיה איזה שהוא מספר {::nomarkdown}\( d\){:/nomarkdown} שמחלק את שניהם.

אם {::nomarkdown}\( d\){:/nomarkdown} מחלק את שניהם, הוא מחלק גם כל צירוף לינארי שלהם, כלומר סכום שלהם כשהם מוכפלים במספר שלם כלשהו, כלומר {::nomarkdown}\( d\){:/nomarkdown} בפרט מחלק גם את {::nomarkdown}\( j\left(1+ib\right)-i\left(1+jb\right)=j-i\){:/nomarkdown}. עכשיו, מכיוון ש-{::nomarkdown}\( 1\le i,j\le N\){:/nomarkdown} הרי שבהכרח גם {::nomarkdown}\( 1\le d\le N\){:/nomarkdown}; לכן כדי שנקבל מספרים זרים די לנו להבטיח שאף אחד מהם לא יוכל להתחלק על ידי מספר שבין 1 ל-{::nomarkdown}\( N\){:/nomarkdown}. התעלול פשוט: נבחר את {::nomarkdown}\( b\){:/nomarkdown} להיות מספר שמתחלק ב-{::nomarkdown}\( N!\){:/nomarkdown}, ובנוסף לכך הוא גם גדול מכל האיברים {::nomarkdown}\( a_{1},\dots,a_{N}\){:/nomarkdown} של סדרה (כדי להבטיח ש-{::nomarkdown}\( a\){:/nomarkdown} מודולו {::nomarkdown}\( 1+ib\){:/nomarkdown} אכן יחזיר את {::nomarkdown}\( a_{i}\){:/nomarkdown} ולא רק מספר ששקול לו). כעת, אם {::nomarkdown}\( b\){:/nomarkdown} מתחלק ב-{::nomarkdown}\( N!\){:/nomarkdown} אז בפרט כל {::nomarkdown}\( 1\le d\le N\){:/nomarkdown} מחלק את {::nomarkdown}\( b\){:/nomarkdown}, ולכן מחלק את {::nomarkdown}\( ib\){:/nomarkdown}, ולכן <strong>לא</strong> מחלק את {::nomarkdown}\( 1+ib\){:/nomarkdown}; זו הסיבה לבחירה ה"מוזרה" שלנו בסדרת המודולוסים.

התעלול המקסים הזה קודם לעיסוק בפונקציות דיופנטיות; הוא מופיע כבר במאמר המפורסם של קורט גדל שבו הוא הוכיח את משפט אי השלמות שלו (כזכור, זה גם המאמר שבו הופיעו הפונקציות הרקורסיביות לראשונה). עם זאת, אנחנו הולכים צעד אחד מעבר לגדל בכך שאנחנו מוכיחים גם ש-{::nomarkdown}\( S\left(i,u\right)\){:/nomarkdown} היא דיופנטית.

הנה מערכת משוואות דיופנטיות שמראה ש-{::nomarkdown}\( S\left(i,u\right)\){:/nomarkdown} דיופנטית:

{::nomarkdown}\( S\left(i,u\right)=w\){:/nomarkdown}

{::nomarkdown}\( \iff\){:/nomarkdown}

{::nomarkdown}\( x=L\left(u\right)\wedge y=R\left(u\right)\){:/nomarkdown}

{::nomarkdown}\( \wedge\exists z\left(x=w+z\left(1+iy\right)\right)\){:/nomarkdown}

{::nomarkdown}\( \wedge\exists v\left(1+iy=w+v-1\right)\){:/nomarkdown}

שתי המשוואות הראשונות נתונות בצורה לא מפורשת על ידי {::nomarkdown}\( x=L\left(u\right)\wedge y=R\left(u\right)\){:/nomarkdown} שכבר ראינו. זו בעצם דרך "לפרק" את{::nomarkdown}\( u\){:/nomarkdown} לתוך המשתנים {::nomarkdown}\( x,y\){:/nomarkdown} של המשוואה הדיופנטית. השורה הבאה אומרת לנו ש-{::nomarkdown}\( w\){:/nomarkdown} התקבל מ-{::nomarkdown}\( x\){:/nomarkdown} על ידי חלוקה ב-{::nomarkdown}\( \left(1+iy\right)\){:/nomarkdown} ולקיחת שארית ({::nomarkdown}\( z\){:/nomarkdown} הוא המנה של החלוקה). השורה האחרונה אומרת לנו במפורש ש-{::nomarkdown}\( w\le1+iy\){:/nomarkdown} (העדפתי לכתוב זאת במפורש מאשר לכתוב את הנוסחה עם סימן האי-שוויון, כי מי זוכר כבר איך הראינו שהיחס הזה דיופנטי). בקיצור, ההוכחה היא פשוטה למדי, בהינתן מה שכבר למדנו על פונקציות דיופנטיות!

סיימנו עם קידוד לכל הסדרות הסופיות, ועוד נשתמש בו בעתיד. בפוסט הבא על הבעיה העשירית של הילברט נעבור לבנות את הכלי הכבד המרכזי שלנו - הוכחה שהפונקציה האקספוננציאלית היא דיופנטית. יהיה אקשן.
