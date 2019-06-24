---
id: 3094
title: "פוסט של בעיית ההתאמה של פוסט"
date: 2014-04-14 14:41:09
layout: post
categories: 
  - חישוביות
tags: 
  - בעיית ההתאמה של פוסט
  - דקדוקים
  - רדוקציות
---
"בעיית ההתאמה של פוסט" - Post Correspondence Problem, ובקיצור PCP - היא בעיה נחמדה במדעי המחשב שנקראת על שם אמיל פוסט, אחד מחלוצי מדעי המחשב (ואינה קשורה לדואר, כמו שחשבתי הרבה זמן) שתיאר אותה ב-1946. מה שנחמד בבעיה הזו הוא שהיא <strong>בלתי פתירה</strong>, דהיינו לא קיים אלגוריתם שיודע לפתור אותה; זה נשמע כמו חסרון, אבל למי שמעוניינים להוכיח שעוד בעיות במדעי המחשב הן לא פתירות זה דווקא יתרון: כדי להראות שבעיה במדעי המחשב אינה פתירה, מספיק להראות טיעון מהצורה "אם הבעיה שלי הייתה פתירה, אז היינו יכולים לפתור בעזרתה את בעיית ההתאמה של פוסט". מה שטוב בבעיית ההתאמה של פוסט הוא שמצד אחד היא לא פתירה, אבל מצד שני היא מאוד פשוטה לניסוח, ולכן הוכחות של "כך אני פותר את פוסט, בהינתן פתרון לבעיה המוזרה שלי" הן קלות יחסית.

איך מוגדרת הבעיה? ההגדרה קצת מוזרה, אז נתחיל עם דוגמה. בואו נסתכל על שלושה זוגות של מילים מעל {::nomarkdown}\( \left\{ 0,1\right\} \){:/nomarkdown} (כלומר, סדרות של 0 ו-1):

{::nomarkdown}\( \left(00,0\right),\left(1,00\right),\left(0,10\right)\){:/nomarkdown}

שתי מילים אפשר <strong>לשרשר</strong> - לכתוב אותן אחת אחרי השניה. השרשור של 00 עם 01 הוא המילה 0001. אז גם זוגות נשרשר "רכיב רכיב", כלומר {::nomarkdown}\( \left(00,0\right)\cdot\left(1,00\right)=\left(001,000\right)\){:/nomarkdown}. עכשיו, הבה ונסתכל על סדרת השרשורים הבאים:

{::nomarkdown}\( \left(00,0\right)\cdot\left(00,0\right)\cdot\left(1,00\right)\cdot\left(0,10\right)=\left(000010,000010\right)\){:/nomarkdown}

שימו לב מה קיבלתי - זוג שבו המילה בצד ימין והמילה בצד שמאל הן<strong> זהות</strong>, למרות שבכל הזוגות שמהם בניתי אותו המילים הללו תמיד שונות.

בואו נתאר את זה בצורה טיפה יותר פורמלית. נסמן את הזוגות בתור {::nomarkdown}\( \left(a_{1},b_{1}\right),\left(a_{2},b_{2}\right),\left(a_{3},b_{3}\right)\){:/nomarkdown}. למשל, {::nomarkdown}\( b_{3}=10\){:/nomarkdown} ו-{::nomarkdown}\( a_{2}=1\){:/nomarkdown}. אז האבחנה שלעיל היא בעצם האבחנה ש-{::nomarkdown}\( a_{1}a_{1}a_{2}a_{3}=b_{1}b_{1}b_{2}b_{3}\){:/nomarkdown}. עוד יותר פורמלית: מצאנו <strong>סדרת אינדקסים </strong>{::nomarkdown}\( j_{1},j_{2},\dots,j_{k}\){:/nomarkdown} כך ש-{::nomarkdown}\( a_{j_{1}}a_{j_{2}}\cdots a_{j_{k}}=b_{j_{1}}b_{j_{2}}\cdots b_{j_{k}}\){:/nomarkdown}.

אצלנו {::nomarkdown}\( n=4\){:/nomarkdown} ו-{::nomarkdown}\( j_{1}=j_{2}=1\){:/nomarkdown}, {::nomarkdown}\( j_{3}=2\){:/nomarkdown} ו-{::nomarkdown}\( j_{4}=3\){:/nomarkdown}.

הדוגמה הזו בעצם מתארת כמעט לגמרי מה קורה באופן כללי: הקלט לבעיה הוא סדרה <strong>סופית</strong> של זוגות, {::nomarkdown}\( \left(a_{1},b_{1}\right),\dots,\left(a_{n},b_{n}\right)\){:/nomarkdown}, שכולן מעל אותו א"ב (הוא יכול להיות שונה מ-{::nomarkdown}\( \left\{ 0,1\right\} \){:/nomarkdown} ובהמשך אשתמש בזה, אבל זה לצורך נוחות בלבד; אפשר היה בתיאוריה לעשות את הכל גם עם 0,1). השאלה היא האם קיימת סדרת אינדקסים <strong>סופית</strong> {::nomarkdown}\( j_{1},\dots,j_{k}\){:/nomarkdown} כך ש-{::nomarkdown}\( a_{j_{1}}a_{j_{2}}\cdots a_{j_{k}}=b_{j_{1}}b_{j_{2}}\cdots b_{j_{k}}\){:/nomarkdown}. כן או לא. זה הכל. והבעיה האלגוריתמית הזו - אינה כריעה.

המטרה העיקרית שלי בפוסט היא להציג את הוכחת אי הכריעות של הבעיה, שהיא נפלאה לטעמי, אבל לפני כן אני רוצה להראות את היישום הסטנדרטי של הבעיה להוכחת אי הכריעות של בעיה אחרת - ובעיה טבעית ומעניינת למדי: בדיקה האם דקדוק חופשי-הקשר הוא דו-משמעי. זה מצריך ממני להציג בזריזות את ההגדרה של דקדוק חופשי-הקשר, שעדיין לא הצגתי בבלוג בכללת אבל אפשר גם לראות אותה ב<a href="http://he.wikipedia.org/wiki/%D7%93%D7%A7%D7%93%D7%95%D7%A7_%D7%97%D7%95%D7%A4%D7%A9%D7%99-%D7%94%D7%A7%D7%A9%D7%A8">ויקיפדיה</a>. אני חושב על דקדוק בתור מעין מכונה ליצירת מילים: מתחילים מאיזה <strong>משתנה</strong> התחלתי {::nomarkdown}\( S\){:/nomarkdown}, ומבצעים סדרה של <strong>גזירות</strong>, כאשר כל גזירה מחליפה משתנה במילה שיש לנו כרגע בתת-מילה חדשה, שמכילה משתנים חדשים וסימבולים (<strong>טרמינלים</strong>) שאי אפשר לגזור. דקדוק {::nomarkdown}\( G=\left(V,T,S,P\right)\){:/nomarkdown} כולל קבוצה סופית {::nomarkdown}\( V\){:/nomarkdown} של משתנים, קבוצה סופית {::nomarkdown}\( T\){:/nomarkdown} של טרמינלים, משתנה התחלתי {::nomarkdown}\( S\in V\){:/nomarkdown} וקבוצה סופית {::nomarkdown}\( P\){:/nomarkdown} של כללי גזירה שמסומנים {::nomarkdown}\( A\to\beta\){:/nomarkdown} כאשר {::nomarkdown}\( A\){:/nomarkdown} הוא המשתנה שגוזרים ו-{::nomarkdown}\( \beta\){:/nomarkdown} היא מילה שיכולה לכלול משתנים וטרמינלים.

בואו נסתכל לדוגמה על דקדוק טיפשי לגזירת ביטויים חשבוניים. הטרמינלים שלנו יהיו {::nomarkdown}\( 0,1,2,\dots,9,+,\times\){:/nomarkdown}. יהיה לנו רק משתנה אחד: {::nomarkdown}\( S\){:/nomarkdown} עצמו. ויהיו לנו כללי גזירה מהצורה {::nomarkdown}\( S\to0,S\to1,\dots,S\to9\){:/nomarkdown} וכמו כן את {::nomarkdown}\( S\to S+S\){:/nomarkdown} ואת {::nomarkdown}\( S\to S\times S\){:/nomarkdown}. עכשיו בואו ונראה שתי גזירות למילה {::nomarkdown}\( 1+2\times3\){:/nomarkdown}:

{::nomarkdown}\( S\Rightarrow S+S\Rightarrow1+S\Rightarrow1+S\times S\Rightarrow1+2\times S\Rightarrow1+2\times3\){:/nomarkdown}

{::nomarkdown}\( S\Rightarrow S\times S\Rightarrow S\times3\Rightarrow S+S\times3\Rightarrow S+2\times3\Rightarrow1+2\times3\){:/nomarkdown}

שתי הגזירות הללו שונות זו מזו באופן מהותי. ההסבר הפורמלי הוא שיש להן עצי גזירה שונים אבל אני לא אגדיר את המושג הזה בפוסט, אז הנה אינטואיציה: בגזירה הראשונה, הצעד הראשון מפרק את הביטוי לשני חלקים - מה שמשמאל לפלוס ומה שלימינו. אם אנחנו מנסים לחשב את ערכו של הביטוי החשבוני, אפשר לחשוב שמעכשיו אנחנו מחשבים כל חלק בנפרד ובסוף נבצע חיבור שלהם. אגף שמאל יהיה שווה 1, ואגף ימין יהיה שווה {::nomarkdown}\( 2\times3=6\){:/nomarkdown}, ולכן הסכום ייתן 7. עד כאן, הגיוני; אבל אם נעשה את זה גם לגזירה השניה נראה שאחרי הצעד הראשון אנחנו מפרקים את הביטוי לאגף שמאל כפול אגף ימין, כאשר אגף ימין שווה ל-3 אבל אגף שמאל שווה ל-{::nomarkdown}\( 1+2=3\){:/nomarkdown} ולכן המכפלה צריכה לתת... תשע? לא הגיוני, כמובן - לנו זה נראה מובן מאליו שהביטוי שווה 7 כי אנחנו מניחים במובלע <strong>סדר קדימויות</strong> בין כפל וחיבור, אבל מבחינת הדקדוק זה לא קיים.

הסיטואציה הזו, שבה דקדוק יכול לגזור את אותה מילה בשתי דרכים שונות מהותית, היא בעייתית; לרוב משתמשים בנתונים על <strong>סדרת הגזירה</strong> של מילה בדקדוק מסויים כדי להבין את ה<strong>סמנטיקה</strong> שלו - מה הוא אומר בפועל (למשל, במקרה של ביטוי חשבוני, מה ערכו; אבל לעתים קרובות יותר, במקרה של תוכנית מחשב, מה היא עושה). שתי סדרות גזירה שונות פירושן שיש שתי דרכים שונות לפרש את המילה - בעיה. דקדוק שיש לו את הבעיה הזו - מילה אחת לפחות עם שתי סדרות גזירה שונות מהותית - נקרא דקדוק <strong>רב-משמעי</strong>. היינו שמחים, בהינתן הגדרה של דקדוק, לומר אם הוא רב משמעי - אבל באופן די מפתיע, גם זו בעיה לא כריעה אלגוריתמית, כי קל לראות שאם היא הייתה כריעה, גם PCP הייתה כריעה.

מה הרעיון? פשוט מאוד: נניח שיש לנו קלט לבעיית PCP, כלומר {::nomarkdown}\( \left(a_{1},b_{1}\right),\dots,\left(a_{n},b_{n}\right)\){:/nomarkdown}. אנחנו רוצים לבנות דקדוק שבו יש מילה שניתן לגזור בשתי דרכים שונות אם ורק אם אפשר להרכיב גם מה-{::nomarkdown}\( a\){:/nomarkdown}-ים וגם מה-{::nomarkdown}\( b\){:/nomarkdown}-ים את אותה מילה... די ברור מה צריך לעשות. פשוט נגדיר דקדוק שמשתניו הם {::nomarkdown}\( S,A,B\){:/nomarkdown} עם כללי הגזירה {::nomarkdown}\( S\to A\|B\){:/nomarkdown} (הקו המפריד הזה אומר "או" - בעצם אני מתאר כאן שני כללי גזירה בו זמנית) וכמו כן {::nomarkdown}\( A\to a_{i}A\|a_{i}\){:/nomarkdown} ו-{::nomarkdown}\( B\to b_{i}B\|b_{i}\){:/nomarkdown} לכל {::nomarkdown}\( 1\le i\le n\){:/nomarkdown}.

למשל, עבור בעיית ה-PCP שהבאתי כדוגמה בתחילת הפוסט, עם הזוגות {::nomarkdown}\( \left(00,0\right),\left(1,00\right),\left(0,10\right)\){:/nomarkdown}, אקבל כללי גזירה כמו {::nomarkdown}\( A\to00A\){:/nomarkdown} ו-{::nomarkdown}\( A\to00\){:/nomarkdown} ו-{::nomarkdown}\( B\to10\){:/nomarkdown} וכדומה. והנה שתי גזירות שונות של אותה מילה:

{::nomarkdown}\( S\Rightarrow A\Rightarrow00A\Rightarrow0000A\Rightarrow00001A\Rightarrow000010\){:/nomarkdown}

{::nomarkdown}\( S\Rightarrow B\Rightarrow0B\Rightarrow00B\Rightarrow0000B\Rightarrow000010\){:/nomarkdown}

זו בניה נחמדה מאוד, רק חבל שהיא לא עובדת. למה לא עובדת? מאותה סיבה שרוב הבניות הכושלות ברדוקציות בין בעיות חישוביות נכשלות - חשבנו רק על כיוון אחד של הבניה. מה שעשינו הוא לבדוק דקדוק שהוא על בטוח דו-משמעי אם בעיית ה-PCP המקורית פתירה; אבל ייתכן שהוא יהיה דו משמעי גם אם הבעיה המקורית אינה פתירה. למשל, תראו את הגזירות הללו עבור אותו דקדוק כמו קודם:

{::nomarkdown}\( S\Rightarrow A\Rightarrow00\){:/nomarkdown}

{::nomarkdown}\( S\Rightarrow B\Rightarrow00\){:/nomarkdown}

קל לבדוק ולוודא שאלו גזירות חוקיות בדקדוק, אבל 00 היא לא באמת מילה שיכולה להיווצר בבעיית ה-PCP בתור מילה משותפת, שכן היא מצריכה שימוש באינדקסים <strong>שונים</strong> עבור סדרות ה-{::nomarkdown}\( a\){:/nomarkdown} וה-{::nomarkdown}\( b\){:/nomarkdown} ({::nomarkdown}\( a_{1}=00\){:/nomarkdown} אבל {::nomarkdown}\( b_{2}=00\){:/nomarkdown}). לכן הדקדוק שלנו יצטרך בצורה כלשהי גם לציין מה היו האינדקסים שבהם הוא השתמש ביצירת המילה. התעלול הוא לפלוט אותם <strong>בסוף</strong> המילה. אז הנה מה שנעשה: נוסיף לטרמינלים שלנו סימבולים {::nomarkdown}\( t_{1},\dots,t_{n}\){:/nomarkdown} ואת הסימבול {::nomarkdown}\( \#\){:/nomarkdown} (שהוא מיותר אבל יעשה את מה שאעשה בהמשך טיפה יותר קריא) וכעת נבנה את הדקדוק הבא:

{::nomarkdown}\( S\to A\|B\){:/nomarkdown}

{::nomarkdown}\( A\to a_{i}At_{i}\|\#\){:/nomarkdown} לכל {::nomarkdown}\( 1\le i\le n\){:/nomarkdown}

{::nomarkdown}\( B\to b_{i}Bt_{i}\|\#\){:/nomarkdown}לכל {::nomarkdown}\( 1\le i\le n\){:/nomarkdown}

כעת אדגים שוב את הגזירות שנותנות את אותו הדבר:

{::nomarkdown}\( S\Rightarrow A\Rightarrow00At_{1}\Rightarrow0000At_{1}t_{1}\Rightarrow00001At_{2}t_{1}t_{1}\Rightarrow000010At_{3}t_{2}t_{1}t_{1}\Rightarrow000010\#t_{3}t_{2}t_{1}t_{2}\){:/nomarkdown}

{::nomarkdown}\( S\Rightarrow B\Rightarrow0Bt_{1}\Rightarrow00Bt_{1}t_{1}\Rightarrow0000Bt_{2}t_{1}t_{1}\Rightarrow000010Bt_{3}t_{2}t_{1}t_{1}\Rightarrow000010\#t_{3}t_{2}t_{1}t_{1}\){:/nomarkdown}

שימו לב שהאינדקסים מסודרים מהאחרון לראשון - קצת מחשבה תראה שלא יכלתי לעשות זאת בשום דרך אחרת. פרט לכך שזה נראה לנו, הקוראים, קצת מוזר, זה לא באמת מקלקל את ההוכחה.

עכשיו קל לראות שהגזירה השגויה שהצגתי למעלה, של 00, לא תעבוד:

{::nomarkdown}\( S\Rightarrow A\Rightarrow00At_{1}\Rightarrow00\#t_{1}\){:/nomarkdown}

{::nomarkdown}\( S\Rightarrow B\Rightarrow00Bt_{2}\Rightarrow00\#t_{2}\){:/nomarkdown}

כלומר, לא קיבלנו את אותה המילה כי {::nomarkdown}\( t_{1}\ne t_{2}\){:/nomarkdown}. צריך עדיין לשבת ולהוכיח פורמלית שהרדוקציה עובדת, אבל היא עובדת. מסקנה: אם היינו יכולים לבדוק שדקדוק הוא רב משמעי, היינו יכולים לפתור את PCP, ולכן לא ניתן לבדוק את זה.

כמעט אותה בניה מראה לנו שעוד בעיה נפוצה עבור דקדוקים היא לא פתירה - נניח שיש לנו שני דקדוקים {::nomarkdown}\( G_{1},G_{2}\){:/nomarkdown}, ואנחנו רוצים לבדוק שיש מילה ששניהם יודעים לייצר - כלומר, שהחיתוך של השפות שהם מייצרים הוא לא ריק. איך הבעיה הזו פותרת לנו את PCP? פשוט מאוד. במקום כללי הגזירה {::nomarkdown}\( S\to A,S\to B\){:/nomarkdown} בדקדוק הקודם, פשוט נייצג שני דקדוקים ש-{::nomarkdown}\( A\){:/nomarkdown} הוא המשתנה ההתחלתי של אחד מהם, ו-{::nomarkdown}\( B\){:/nomarkdown} הוא המשתנה ההתחלתי של השני. באנג! עוד בעיה לא כריעה.

מספיק עם השימושים, בואו נעבור להוכחה ש-PCP לא כריעה. אבל לפני כן, אני אצטרך לעשות עוד תעלול טכני אחד ולעבור מ-PCP לבעיה כמעט זהה אבל עם מגבלה נוספת, שתקל עלי מאוד בהוכחה. המגבלה היא זו: עד כה, פתרון קביל ל-PCP יכל להשתמש בכל זוג מתי שבא לו. עכשיו אני רוצה להגביל את זה טיפ-טיפה: להגיד שהזוג <strong>הראשון</strong> שבו משתמשים יהיה זוג מיוחד, שמופיע רק פעם אחת - בהתחלה. במילים אחרות, הקלט לבעיה יהיה {::nomarkdown}\( \left(a_{1},b_{1}\right),\dots,\left(a_{n},b_{n}\right)\){:/nomarkdown} ובנוסף לכך עוד זוג {::nomarkdown}\( \left(x,y\right)\){:/nomarkdown}, והשאלה תהיה אם קיימת סדרת אינדקסים {::nomarkdown}\( j,\dots,j_{k}\){:/nomarkdown} כך ש-{::nomarkdown}\( xa_{j_{1}}a_{j_{2}}\cdots a_{j_{k}}=yb_{j_{1}}b_{j_{2}}\cdots b_{j_{k}}\){:/nomarkdown}. על הבעיה <strong>הזו</strong> יהיה לי הרבה יותר קל להראות שהיא לא כריעה; ולכן כדי להראות ש-PCP אינה כריעה, אני צריך קודם כל להסביר איך אני פותר את הבעיה החדשה בעזרת PCP.

התשובה היא שנעשה תעלול טכני. מתוך הקלט {::nomarkdown}\( \left(x,y\right),\left(a_{1},b_{1}\right),\dots,\left(a_{n},b_{n}\right)\){:/nomarkdown} אני הולך ליצור סדרה חדשה של זוגות, שמהונדסים בצורה ש"תכריח" את הזוג שמתאים ל-{::nomarkdown}\( \left(x,y\right)\){:/nomarkdown} להיות ראשון, למרות שחוקי המשחק לא מאפשרים לי להגדיר במפורש שאיבר כלשהו יהיה ראשון.

כרגיל, יהיה הכי נוח להסביר עם דוגמה, אז הנה קלט לדוגמה - וקלט ממש טיפשי, רק כדי שהמניפולציות שאעשה בהמשך יהיו ברורות. {::nomarkdown}\( \left(x,y\right)=\left(11,1\right)\){:/nomarkdown} ו-{::nomarkdown}\( \left(a_{1},b_{1}\right)=\left(11,11\right)\){:/nomarkdown}. ברור ש<strong>אין</strong> מילה משותפת, כי האורך של מילה שמתחילה ב-{::nomarkdown}\( x\){:/nomarkdown} יהיה זוגי והאורך של מילה שמתחילה ב-{::nomarkdown}\( y\){:/nomarkdown} יהיה אי זוגי, אבל אני לא יכול סתם לקחת את הזוגות הללו ולהתייחס אליהן כאל בעיית PCP רגילה, כי {::nomarkdown}\( a_{1}=b_{1}\){:/nomarkdown} הוא פתרון לבעיית ה-PCP הרגילה (פשוט מתעלמים מה-{::nomarkdown}\( \left(x,y\right)\){:/nomarkdown}). אני חייב איכשהו להכריח את {::nomarkdown}\( \left(x,y\right)\){:/nomarkdown} להיות הזוג הראשון אם בכלל תהיה תקווה <strong>כלשהי</strong> לכך שנקבל מילה משותפת.

הרעיון הוא לדחוף סימן מיוחד - שוב פעם אשתמש ב-{::nomarkdown}\( \#\){:/nomarkdown} - בין כל שתי אותיות, של כל מילה שמופיעה בכל זוג, אבל בצורה כזו שהמילה <strong>השמאלית</strong> בכל זוג <strong>תסתיים</strong> ב-{::nomarkdown}\( \#\){:/nomarkdown}, ואילו המילה <strong>הימנית</strong> בכל זוג <strong>תתחיל</strong> ב-{::nomarkdown}\( \#\){:/nomarkdown}. כלומר, אני אהפוך את הזוג {::nomarkdown}\( \left(11,11\right)\){:/nomarkdown} לזוג {::nomarkdown}\( \left(1\#1\#,\#1\#1\right)\){:/nomarkdown}. שימו לב לחוסר ההתאמה הזה במיקומי ה-{::nomarkdown}\( \#\){:/nomarkdown}-ים; הוא מכוון.

כעת, גם ל-{::nomarkdown}\( \left(x,y\right)\){:/nomarkdown} אעניק טיפול דומה במובן זה שאדחוף להם {::nomarkdown}\( \#\){:/nomarkdown} בין כל שתי אותיות, אבל <strong>אף אחד מהם </strong>לא יתחיל ב-{::nomarkdown}\( \#\){:/nomarkdown}, ורק השמאלי יסתיים ב-{::nomarkdown}\( \#\){:/nomarkdown}, כלומר, אני הופך את {::nomarkdown}\( \left(11,1\right)\){:/nomarkdown} ל-{::nomarkdown}\( \left(1\#1\#,1\right)\){:/nomarkdown}.

עכשיו, מה קורה פה? המילה {::nomarkdown}\( xa_{1}\){:/nomarkdown}, שקודם הייתה {::nomarkdown}\( 1111\){:/nomarkdown}, הפכה עכשיו ל-{::nomarkdown}\( 1\#1\#1\#1\#\){:/nomarkdown}. המילה {::nomarkdown}\( yb_{1}\){:/nomarkdown} הפכה ל-{::nomarkdown}\( 1\#1\#1\){:/nomarkdown}. כלומר - כל מילה שמורכבת מהמילים <strong>השמאליות</strong> בכל זוג הולכת להסתיים ב-{::nomarkdown}\( \#\){:/nomarkdown}, וכל מילה שמורכבת מהמילים ה<strong>ימניות</strong> בכל זוג תסתיים בלי ה-{::nomarkdown}\( \#\){:/nomarkdown} הזה. הדרך היחידה לקבל מילה זהה היא "לסגור" את הסיפור באמצעות עוד זוג מיוחד - הזוג {::nomarkdown}\( \left(@,\#@\right)\){:/nomarkdown} כאשר גם {::nomarkdown}\( @\){:/nomarkdown} הוא תו מיוחד חדש שבו אני משתמש ולא מופיע במילים האחרות.

בואו נתאר פורמלית את מה שעשיתי. נגדיר אופרטור {::nomarkdown}\( \Phi\){:/nomarkdown} שלוקח מילה {::nomarkdown}\( w=\sigma_{1}\dots\sigma_{k}\){:/nomarkdown} ודוחף לה {::nomarkdown}\( \#\){:/nomarkdown} בין כל האותיות, כלומר {::nomarkdown}\( \Phi\left(w\right)=\sigma_{1}\#\sigma_{2}\dots\#\sigma_{k}\){:/nomarkdown}. כעת, אם קיבלנו בעיית PCP-עם-זוג-התחלתי {::nomarkdown}\( \left(x,y\right),\left(a_{1},b_{1}\right),\dots,\left(a_{n},b_{n}\right)\){:/nomarkdown} נייצר בעיית PCP "רגילה" עם הזוגות הבאים: לכל {::nomarkdown}\( \left(a_{i},b_{i}\right)\){:/nomarkdown} יהיה לנו את הזוג {::nomarkdown}\( \left(\Phi\left(a_{i}\right)\#,\#\Phi\left(b_{i}\right)\right)\){:/nomarkdown}. כמו כן, במקום {::nomarkdown}\( \left(x,y\right)\){:/nomarkdown} יהיה לנו {::nomarkdown}\( \left(\Phi\left(x\right)\#,\Phi\left(y\right)\right)\){:/nomarkdown}, וכמו כן יהיה לנו את הזוג הנוסף {::nomarkdown}\( \left(@,\#@\right)\){:/nomarkdown}. זה תרגיל מצויין לשבת ולהוכיח שזה עובד - שלבעיה המקורית היה פתרון אם ורק אם לבעיה החדשה עם ה-{::nomarkdown}\( \#\){:/nomarkdown}-ים יש.

עכשיו אפשר להגיע סוף סוף לחלק המרכזי בפוסט - הוכחה שבעיית ה-PCP-עם-זוג-התחלתי היא לא כריעה. האופן שבו נעשה את זה הוא על ידי רדוקציה מהבעיה הלא כריעה הידועה ביותר במדעי המחשב - בעיית העצירה של מכונות טיורינג. לשם כך אזכיר בזריזות את מה שנצטרך לדעת על מכונות טיורינג (ו<a href="http://www.gadial.net/2007/09/23/turing_machine/">יש לי פוסט</a> על הנושא למי שמעוניין). אני הולך להציג כאן גרסה <strong>מפושטת</strong> של מכונות טיורינג ושל בעיית העצירה כי לא אצטרך יותר מכך - אל תסתכלו על מה שאכתוב עכשיו בתור ההגדרה האולטימטיבית!

מכונת טיורינג {::nomarkdown}\( M\){:/nomarkdown} היא מעין מחשב קטן, עם קבוצת <strong>מצבים</strong> פנימיים סופית וסרט אינסופי בכיוון אחד (ימין) שמחולק לתאים שבכל אחד מהם כתובה אות כלשהי. יש למכונה ראש קורא/כותב שמתרוצץ על הסרט, קורא את תוכן התא שמעליו הוא נמצא כרגע, בודק באיזה מצב פנימי המכונה נמצאת, ועל פי הזוג הזה (המצב הפנימי והאות שקראנו) מחליט מה לעשות עכשיו - האם לשנות את תוכן התא, האם לשנות את המצב הפנימי של המכונה, והאם להזיז את הראש.

פורמלית מכונת טיורינג {::nomarkdown}\( M\){:/nomarkdown} בנויה מקבוצת מצבים סופית {::nomarkdown}\( Q\){:/nomarkdown}, מא"ב סופי כלשהו {::nomarkdown}\( \Sigma\){:/nomarkdown} ומפונקציית מעברים {::nomarkdown}\( \delta:Q\times\Sigma\to Q\times\Sigma\times\left\{ R,L,S\right\} \){:/nomarkdown}. {::nomarkdown}\( \delta\left(q,\sigma\right)=\left(p,\tau,X\right)\){:/nomarkdown} פירושו "אם היית במצב {::nomarkdown}\( q\){:/nomarkdown} וקראת {::nomarkdown}\( \sigma\){:/nomarkdown} עבור למצב {::nomarkdown}\( p\){:/nomarkdown}, שנה את תוכן התא ל-{::nomarkdown}\( \tau\){:/nomarkdown} והזז את הראש {::nomarkdown}\( X\){:/nomarkdown}" כאשר אם {::nomarkdown}\( X\){:/nomarkdown} הוא {::nomarkdown}\( L\){:/nomarkdown} מזיזים את הראש צעד אחד שמאלה, אם הוא {::nomarkdown}\( R\){:/nomarkdown} מזיזים אותו צעד אחד ימינה ואם הוא {::nomarkdown}\( S\){:/nomarkdown} לא זזים. כמו כן למכונה יש מצב מיוחד {::nomarkdown}\( q_{f}\in Q\){:/nomarkdown} שאם המכונה נכנסה אליו, אומרים שהיא "עצרה" ומפסיקים את החישוב שלה, ו-{::nomarkdown}\( \delta\){:/nomarkdown} לא מוגדרת עליו (זה לא מתאים לכתיב הפורמלי שלי שבו {::nomarkdown}\( \delta\){:/nomarkdown} מוגדרת על התחום {::nomarkdown}\( Q\times\Sigma\){:/nomarkdown} אבל למי אכפת - אני מרשה לפונקציה הזו לא להיות מוגדרת על כל התחום שלה). יש גם סימן מיוחד {::nomarkdown}\( \flat\in\Sigma\){:/nomarkdown} שמהווה את תוכן תאי הסרט כשהמכונה רק מתחילה לרוץ (חושבים עליו בתור "תא ריק") ומצב מיוחד {::nomarkdown}\( q_{0}\in Q\){:/nomarkdown} שבו המכונה נמצאת כשהיא מתחילה לרוץ.

בעיה טכנית אחת שאולי שמתם לב אליה היא ש-{::nomarkdown}\( M\){:/nomarkdown} עשויה להגיע אל הקצה השמאלי של הסרט, ואז לבצע עוד צעד שמאלה. לרוב מגדירים שבמקרה כזה, היא פשוט נשארת במקום; אבל זה יסבך את הבניה שאציג בהמשך. לכן אני הולך להניח שזה פשוט לא קורה. זה תרגיל נחמד - בהינתן מכונת טיורינג לבנות מכונה שקולה (עוצרת על אותם קלטים) שאף פעם לא "נופלת מקצה הסרט"; בפוסט הזה תאמינו לי שזה אפשרי.

כעת, בכל רגע נתון של הריצה שלה, הריצה של המכונה מאופיינת על ידי שלושה דברים: המצב הפנימי הנוכחי של המכונה; המיקום של הראש הקורא/כותב על גבי הסרט; ותוכן הסרט. שלושת אלו יחד נקראים <strong>הקונפיגורציה</strong> של המכונה. אפשר לכתוב קונפיגורציה בקיצור בצורה הבאה: סדרה של תווים שמתארת את תוכן תאי הסרט, כאשר התא שמעליו נמצא הראש הקורא/כותב אינו תו מתוך {::nomarkdown}\( \Sigma\){:/nomarkdown} אלא תו מיוחד שהוא <strong>זוג</strong> של תו מתוך {::nomarkdown}\( \Sigma\){:/nomarkdown} יחד עם תו שמתאר את המצב הפנימי הנוכחי של המכונה. למשל, {::nomarkdown}\( ab\flat\left(q_{3},b\right)\flat a\flat\){:/nomarkdown} היא מחרוזת שמתארת את הקונפיגורציה הבאה: תוכן הסרט הוא {::nomarkdown}\( ab\flat b\flat a\flat\flat\flat\dots\){:/nomarkdown}, המצב הפנימי הוא {::nomarkdown}\( q_{3}\){:/nomarkdown} ומיקום הראש הוא מעל תא 4 (אם מתחילים את הספירה מ-1). שימו לב שקונפיגורציה מתוארת על ידי מחרוזת <strong>סופית</strong> למרות שהסרט הוא אינסופי - זאת מכיוון שאנחנו יודעים בודאות שכל תא שהמכונה טרם הגיעה אליו הוא ריק, ולכן אפשר להסכים שהמחרוזת מתארת רק את תוכן כל תאי הסרט שהמכונה הגיעה אליהם עד כה מתישהו במהלך ריצתה.

כעת, נניח שבמכונה שאת הקונפיגורציה שלה תיארתי לפני רגע יש את המעבר הבא: {::nomarkdown}\( \delta\left(q_{3},b\right)=\left(q_{5},c,R\right)\){:/nomarkdown}. אז מהקונפיגורציה {::nomarkdown}\( ab\flat\left(q_{3},b\right)\flat a\flat\){:/nomarkdown} המכונה הולכת לעבור לקונפיגורציה {::nomarkdown}\( ab\flat c\left(q_{5},\flat\right)a\flat\){:/nomarkdown}. ודאו לעצכם שאתם מבינים למה - זה יהיה <strong>קריטי לחלוטין</strong> בשביל מה שנעשה בהמשך להבין את כל הקטע המעיק הזה של מעבר קונפיגורציות (מעיק? למה מעיק? לדעתי זה נפלא, צורת התיאור הזו; אבל כל עוד לא רואים איך עושים איתה דברים מגניבים - כמו רדוקציה ל-PCP - זה נראה כמו משהו טכני יבשושי).

אם מקונפיגורציה א' מגיעים לקונפיגורציה ב' תוך צעד אחד, אומרים שב' היא <strong>עוקבת</strong> של א'. כמו כן, למכונה יש קונפיגורציה <strong>התחלתית</strong> פשוטה במיוחד - {::nomarkdown}\( \left(q_{0},\flat\right)\){:/nomarkdown} ("הסרט ריק, המצב הוא {::nomarkdown}\( q_{0}\){:/nomarkdown}, הראש נמצא בתחילת הסרט"). קונפיגורציה <strong>סופית</strong> היא כל קונפיגורציה שבה המצב של המכונה הוא {::nomarkdown}\( q_{f}\){:/nomarkdown}. בעיית העצירה היא בסך הכל השאלה הבאה - בהינתן מכונה {::nomarkdown}\( M\){:/nomarkdown}, האם קיימת סדרת קונפיגורציות עוקבות שמתחילה בקונפיגורציה ההתחלתית ומסתיימת בקונפיגורציה סופית? והשאלה הזו, כאמור, אינה כריעה (לא ניכנס כעת להוכחה של הטענה הזו).

איך כל זה קשור ל-PCP? על פניו זה לא נראה כל כך קשור; אבל בואו ננסה לחשוב איך בכל זאת אפשר לקשר. ב-PCP השאלה היא האם קיימת "מילה משותפת" שאפשר לבנות בשתי דרכים שונות עם אותה סדרת אינדקסים; בבעיית העצירה השאלה היא האם קיימת "סדרת קונפיגורציות" שמתארת ריצה חוקית מקונפיגורציה התחלתית לקונפיגורציה סופית. אלו האובייקטים שעלינו לתרגם ביניהם - האם אפשר לתאר סדרת קונפיגורציות חוקית בתור מילה? בוודאי! כבר הראיתי איך לתאר קונפיגורציה בודדת בתור מילה, אז פשוט בואו נתקע איזה סימן {::nomarkdown}\( \#\){:/nomarkdown} בין קונפיגורציות עוקבות! וכדי לפשט קצת יותר את העניינים, בואו ניפטר מהסוגריים המיותרים הללו שיש בתוך קונפיגורציה: במקום לכתוב {::nomarkdown}\( ab\flat\left(q_{3},b\right)\flat a\flat\){:/nomarkdown} נכתוב {::nomarkdown}\( ab\flat q_{3}b\flat a\flat\){:/nomarkdown} וכל עוד הסימבולים שמתארים מצבים והסימבולים שמתארים את הא"ב של המכונה הם שונים זה מזה לא תהיה בעיה של דו משמעות כאן.

הנה דוגמה לסדרת קונפיגורציות שכזו:

{::nomarkdown}\( q_{0}\flat\#aq_{1}\flat\#q_{2}aa\#q_{f}aa\){:/nomarkdown}

אל תקראו רגע את ההמשך - שבו וכתבו במפורש אילו מעברים צריכים להיות במכונה כדי שתיתן את סדרת הקונפיגורציות הזו. רק כך נוכל להיות בטוחים שאתם מבינים את הפרטים הטכניים הרלוונטיים כאן - והפרטים הללו יהיו לב העניין אחר כך. כתבתם? יפה. המעברים הם {::nomarkdown}\( \delta\left(q_{0},\flat\right)=\left(q_{1},a,R\right)\){:/nomarkdown} ו-{::nomarkdown}\( \delta\left(q_{1},\flat\right)=\left(q_{2},a,L\right)\){:/nomarkdown} ו-{::nomarkdown}\( \delta\left(q_{2},a\right)=\left(q_{f},a,S\right)\){:/nomarkdown}.

עכשיו משהסכמנו על כך שהמילה המשותפת שנייצר תהיה סדרת קונפיגורציות שמתארת ריצה חוקית שעוצרת, נשאלת רק השאלה איך "לכפות" על המילה שנוצרת באמת לתאר ריצה כזו. לשם כך נצטרך להתבסס בצורה חזקה על הדרישה שיש לנו מ-PCP: שאותה סדרה תיווצר <strong>בשתי דרכים שונות</strong>, על ידי <strong>אותם אינדקסים</strong>. מה שנעשה הוא שניצור את המילה בצורה כזו שצד שמאל "רודף" כל הזמן אחרי צד ימין ומפגר אחריו בקונפיגורציה אחת בדיוק, וההזדמנות היחידה שלו להשיג את צד ימין ולהשלים את המילה היא אם צד ימין הגיע למצב הסופי {::nomarkdown}\( q_{f}\){:/nomarkdown}. כדי לעשות את זה יותר ברור אני לא אצייר את המילים בתור צד שמאל וצד ימין אלא בתור למעלה ולמטה. בהתחלה שתי המילים שנבנות ייראו כך:

{::nomarkdown}\( \begin{array}{cc}\#\\\# &amp; q_{0}\flat\#\end{array}\){:/nomarkdown}

כעת, כדי שלמילה למעלה יהיה סיכוי "להדביק" את המילה שלמטה ועדיין להיות זהה לה, האותיות הבאות שחייבות להתווסף אליה הן {::nomarkdown}\( q_{0}\flat\){:/nomarkdown}. עכשיו, נניח שלמכונה יש את הצעד הבא: {::nomarkdown}\( \delta\left(q_{0},\flat\right)=\left(q_{1},a,R\right)\){:/nomarkdown}. אנחנו רוצים שאחרי הוספת הזוג הבא, המילים שאנחנו בונים ייראו כך:

{::nomarkdown}\( \begin{array}{ccc}\# &amp; q_{0}\flat\\\# &amp; q_{0}\flat &amp; \#aq_{1}\end{array}\){:/nomarkdown}

כלומר, המילה שלמעלה "כיסתה" את החלק של {::nomarkdown}\( q_{0}\flat\){:/nomarkdown} ואילצה את המילה שלמטה לבצע את המעבר שמקודד ב-{::nomarkdown}\( \delta\left(q_{0},\flat\right)\){:/nomarkdown}. איך נעשה את זה? פשוט מאוד: לרשימת הזוגות שלנו נוסיף את הזוג {::nomarkdown}\( \left(q_{0}\flat,aq_{1}\right)\){:/nomarkdown}. הוספת הזוג הזה למילה שנבנית יגרום בדיוק לתוצאה שאנחנו מעוניינים בה.

עכשיו צריך לטפל ב-{::nomarkdown}\( \#\){:/nomarkdown} שמסמן סוף קונפיגורציה ומעבר לבאה בתור. אנחנו רוצים לסגור את הקונפיגורציה בו זמנית בשתי המילים, אז נשתמש בזוג {::nomarkdown}\( \left(\#,\#\right)\){:/nomarkdown} ונקבל:

{::nomarkdown}\( \begin{array}{cccc}\# &amp; q_{0}\flat &amp; \#\\\# &amp; q_{0}\flat &amp; \# &amp; aq_{1}\#\end{array}\){:/nomarkdown}

עכשיו, נניח שיש לנו את המעבר {::nomarkdown}\( \delta\left(q_{1},\flat\right)=\left(q_{2},\flat,S\right)\){:/nomarkdown}. איך נטפל בו? אנחנו אמורים להוסיף את הזוג {::nomarkdown}\( \left(q_{1}\flat,q_{2}\flat\right)\){:/nomarkdown} וזה בסדר גמור, אבל אם תשימו לב, במילה שלנו {::nomarkdown}\( q_{1}\){:/nomarkdown} נמצא משמאל ל-{::nomarkdown}\( \#\){:/nomarkdown} שמסמן את סוף הקונפיגורציה, ולא משמאל ל-{::nomarkdown}\( \flat\){:/nomarkdown}. הרעיון הוא שהראש של המכונה הגיע אל הקצה של הסרט שכבר ראינו, ולכן במובלע נובע שיש שם {::nomarkdown}\( \flat\){:/nomarkdown} אבל זה לא נכתב במפורש עדיין. איך נפתור את הבעיה הזו? פתרון מתבקש אחד הוא להוסיף מעבר מהצורה {::nomarkdown}\( \left(q_{1}\#,q_{2}\flat\#\right)\){:/nomarkdown} - אבל זה קצת מסורבל. אפשר להיות יותר חכמים ולמנוע את הבעיה מראש, כבר בשלב סגירת הקונפיגורציה: במקום להשתמש בזוג {::nomarkdown}\( \left(\#,\#\right)\){:/nomarkdown} אנחנו רוצים לאפשר גם להשתמש בזוג {::nomarkdown}\( \left(\#,\flat\#\right)\){:/nomarkdown} שאומר לקונפיגורציה למטה להוסיף {::nomarkdown}\( \flat\){:/nomarkdown} כי אולי נזדקק לו תכף. אם היינו משתמשים בזוג הזה, זוג המילים שאנחנו בונים היה מהצורה:

{::nomarkdown}\( \begin{array}{cccc}\# &amp; q_{0}\flat &amp; \#\\\# &amp; q_{0}\flat &amp; \# &amp; aq_{1}\flat\#\end{array}\){:/nomarkdown}

וכעת אין בעיה; הזוג {::nomarkdown}\( \left(q_{1}\flat,q_{2}\flat\right)\){:/nomarkdown} מטפל בסיטואציה הנוכחית. האם סיימנו? לא, כי שימו לב ל-{::nomarkdown}\( a\){:/nomarkdown} בתחילת הקונפיגורציה - זו האות הבאה שהמילה למעלה צריכה להוסיף לעצמה, וגם במילה למטה היא צריכה להופיע כי המכונה לא נוגעת בה בצעד הזה. אז נוסיף לנו זוג {::nomarkdown}\( \left(a,a\right)\){:/nomarkdown}, וכעת על ידי שימוש ב-{::nomarkdown}\( \left(a,a\right)\){:/nomarkdown} ואחריו ב-{::nomarkdown}\( \left(q_{1}\flat,q_{2}\flat\right)\){:/nomarkdown}, נקבל:

{::nomarkdown}\( \begin{array}{ccccccc}\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\\\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1} &amp; \# &amp; aq_{2}\flat\end{array}\){:/nomarkdown}

לבסוף, נסגור את הקונפיגורציה בצורה "רגילה" עם {::nomarkdown}\( \left(\#,\#\right)\){:/nomarkdown} ונקבל:

{::nomarkdown}\( \begin{array}{cccccc}\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\#\\\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}\flat\#\end{array}\){:/nomarkdown}

בואו נדבר עכשיו על תזוזה שמאלה של הראש, כלומר נניח שיש לנו את המעבר {::nomarkdown}\( \delta\left(q_{2},\flat\right)=\left(q_{3},b,L\right)\){:/nomarkdown}. מה קורה כאן? אנחנו רוצים לעבור לסיטואציה הבאה:

{::nomarkdown}\( \begin{array}{cccccccc}\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}b\\\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}\flat &amp; \# &amp; q_{3}ab\end{array}\){:/nomarkdown}

כלומר, ב"מחיר" של הוספת {::nomarkdown}\( aq_{2}b\){:/nomarkdown} למעלה אנחנו רוצים להוסיף {::nomarkdown}\( q_{3}ab\){:/nomarkdown} למטה. לכן נוסיף את הזוג {::nomarkdown}\( \left(aq_{2}b,q_{3}ab\right)\){:/nomarkdown} לרשימת הזוגות שלנו.

רק דבר אחד עוד נותר לנו להבין לפני שנעבור לתיאור פורמלי של הכל - איך מסיימים? איך מאפשרים למילה שלמעלה להדביק את המילה שלמטה?

ובכן, בואו ניתן למכונה הבדיונית המסכנה שלי להגיע אל המנוחה והנחלה - נניח שיש לנו את המעבר {::nomarkdown}\( \delta\left(q_{3},a\right)=\left(q_{f},a,S\right)\){:/nomarkdown}. קודם כל, הוא יתבטא, כרגיל, בזוג {::nomarkdown}\( \left(q_{3}a,q_{f}a\right)\){:/nomarkdown} ונגיע אל הסיטואציה הבאה:

{::nomarkdown}\( \begin{array}{ccccccccc}\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}b &amp; \# &amp; q_{3}a\\\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}\flat &amp; \# &amp; q_{3}a &amp; b\#q_{f}a\end{array}\){:/nomarkdown}

המילה שלמעלה עדיין צריכה להדביק את ה-{::nomarkdown}\( b\#\){:/nomarkdown} שלמטה עד שתגיע למצב שבו היא צריכה להשוות את ה-{::nomarkdown}\( q_{f}\){:/nomarkdown} שלמטה; את זה היא תעשה עם הזוגות {::nomarkdown}\( \left(b,b\right)\){:/nomarkdown} ו-{::nomarkdown}\( \left(\#,\#\right)\){:/nomarkdown}, ואז נגיע למצב הבא:

{::nomarkdown}\( \begin{array}{cccccccccc}\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}b &amp; \# &amp; q_{3}a &amp; b\#\\\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}\flat &amp; \# &amp; q_{3}a &amp; b\# &amp; q_{f}ab\#\end{array}\){:/nomarkdown}

מה היינו <strong>רוצים</strong> שיקרה עכשיו? ובכן, היינו שמחים אם היה לנו את הזוג הבא: {::nomarkdown}\( \left(q_{f}ab\#\#,\#\right)\){:/nomarkdown}, שהיה משלים אותנו למילה המשותפת הבאה:

{::nomarkdown}\( \begin{array}{cccccccccc}\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}b &amp; \# &amp; q_{3}a &amp; b\# &amp; q_{f}ab\#\#\\\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}\flat &amp; \# &amp; q_{3}a &amp; b\# &amp; q_{f}ab\#\#\end{array}\){:/nomarkdown}

למה לא להוסיף זוג כזה, באמת? למה לא להוסיף זוגות מהצורה {::nomarkdown}\( \left(q_{f}w\#,\#\right)\){:/nomarkdown} כאשר {::nomarkdown}\( w\){:/nomarkdown} הוא המשך של קונפיגורציה עד ה-{::nomarkdown}\( \#\){:/nomarkdown} שבסוף שלה, וזאת לכל {::nomarkdown}\( w\){:/nomarkdown} אפשרית? תיאורטית, זה בדיוק מה שהיינו רוצים לעשות. מעשית, זה בלתי אפשרי כי יש <strong>אינסוף</strong> ערכים אפשריים של {::nomarkdown}\( w\){:/nomarkdown}, אבל בעיית PCP תמיד מורכבת ממספר <strong>סופי</strong> של זוגות. אז יש לנו כאן מגבלה טכנית קלה, ולכן יהיה לה פתרון טכני קל. במקום "לאכול" את כל הקונפיגורציה בבת אחת, נאכל אותה תו תו.

מה זה אומר? זה אומר שנתחיל עם הזוג {::nomarkdown}\( \left(q_{f}a,q_{f}\right)\){:/nomarkdown}, ואחרי שנשתמש בו נגיע לסיטואציה הבאה:

{::nomarkdown}\( \begin{array}{ccccccccccc}\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}b &amp; \# &amp; q_{3}a &amp; b\# &amp; q_{f}a\\\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}\flat &amp; \# &amp; q_{3}a &amp; b\# &amp; q_{f}a &amp; b\#q_{f}\end{array}\){:/nomarkdown}

עכשיו נעתיק את שארית הקונפיגורציה עד לפעם הבאה שבה המילה שלמעלה תצטרך לכתוב {::nomarkdown}\( q_{f}\){:/nomarkdown}, ונגיע לדבר הבא:

{::nomarkdown}\( \begin{array}{cccccccccccc}\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}b &amp; \# &amp; q_{3}a &amp; b\# &amp; q_{f}a &amp; b\#\\\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}\flat &amp; \# &amp; q_{3}a &amp; b\# &amp; q_{f}a &amp; b\# &amp; q_{f}b\#\end{array}\){:/nomarkdown}

מה קרה פה? אם נקרא רק את המילה למטה, זה נראה כאילו עברנו מהקונפיגורציה {::nomarkdown}\( q_{f}ab\){:/nomarkdown} לקונפיגורציה {::nomarkdown}\( q_{f}b\){:/nomarkdown} - כאילו ה-{::nomarkdown}\( a\){:/nomarkdown} "נאכל" על ידי {::nomarkdown}\( q_{f}\){:/nomarkdown}. זה בדיוק מה שהולך לקרות - {::nomarkdown}\( q_{f}\){:/nomarkdown} הרעבתן הולך לבלוס את כל המילה שנמצאת מימינו בקונפיגורציה, אות אחרי אות. ומתי נוכל לסיים? כשיגיע הזמן לבלוס את ה-{::nomarkdown}\( \#\){:/nomarkdown} שבסוף. כלומר, כשנגיע למצב הבא:

{::nomarkdown}\( \begin{array}{cccccccccccccc}\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}b &amp; \# &amp; q_{3}a &amp; b\# &amp; q_{f}a &amp; b\# &amp; q_{f}b &amp; \#\\\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}\flat &amp; \# &amp; q_{3}a &amp; b\# &amp; q_{f}a &amp; b\# &amp; q_{f}b &amp; \# &amp; q_{f}\#\end{array}\){:/nomarkdown}

את זה אפשר לסיים על ידי הזוג {::nomarkdown}\( \left(q_{f}\#\#,\#\right)\){:/nomarkdown}, מה שיביא אותנו אל

{::nomarkdown}\( \begin{array}{cccccccccccccc}\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}b &amp; \# &amp; q_{3}a &amp; b\# &amp; q_{f}a &amp; b\# &amp; q_{f}b &amp; \# &amp; q_{f}\#\#\\\# &amp; q_{0}\flat &amp; \# &amp; a &amp; q_{1}\# &amp; aq_{2}\flat &amp; \# &amp; q_{3}a &amp; b\# &amp; q_{f}a &amp; b\# &amp; q_{f}b &amp; \# &amp; q_{f}\#\#\end{array}\){:/nomarkdown}

וסיימנו!

יש עוד נקודה עדינה שצריך להתייחס אליה - {::nomarkdown}\( q_{f}\){:/nomarkdown} יצטרך לאכול גם סימנים שמשמאלו בקונפיגורציה אם יש כאלו. כדי לראות את זה, בואו נתחיל דוגמה חדשה:

{::nomarkdown}\( \begin{array}{cc}\#q_{0}\flat\#\\\#q_{0}\flat\# &amp; aq_{f}\#\end{array}\){:/nomarkdown}

מה עכשיו? כדי להשוות את ה-{::nomarkdown}\( a\){:/nomarkdown} שיש למטה, חייבים להשתמש בזוג {::nomarkdown}\( \left(a,a\right)\){:/nomarkdown}, ואז נגיע לסיטואציה הבאה:

{::nomarkdown}\( \begin{array}{ccc}\#q_{0}\flat\# &amp; a\\\#q_{0}\flat\# &amp; a &amp; q_{f}\#a\end{array}\){:/nomarkdown}

אבל עכשיו אם נשתמש בזוג {::nomarkdown}\( \left(q_{f}\#\#,\#\right)\){:/nomarkdown}, מה שנגיע אליו יהיה

{::nomarkdown}\( \begin{array}{cccc}\#q_{0}\flat\# &amp; a &amp; q_{f}\#\#\\\#q_{0}\flat\# &amp; a &amp; q_{f}\#a &amp; \#\end{array}\){:/nomarkdown}

ויש לנו כאן בבירור אי התאמה. לכן אין מנוס - נצטרך "לאכול" את ה-{::nomarkdown}\( a\){:/nomarkdown} עם זוג מהצורה {::nomarkdown}\( \left(aq_{f},q_{f}\right)\){:/nomarkdown}. יחד איתנו נגיע ישירות מהמצב הבא:

{::nomarkdown}\( \begin{array}{cc}\#q_{0}\flat\#\\\#q_{0}\flat\# &amp; aq_{f}\#\end{array}\){:/nomarkdown}

אל המצב הזה:

{::nomarkdown}\( \begin{array}{ccc}\#q_{0}\flat\# &amp; aq_{f}\\\#q_{0}\flat\# &amp; aq_{f} &amp; \#q_{f}\end{array}\){:/nomarkdown}

ומכאן נגיע אל

{::nomarkdown}\( \begin{array}{cccc}\#q_{0}\flat\# &amp; aq_{f} &amp; \#\\\#q_{0}\flat\# &amp; aq_{f} &amp; \# &amp; q_{f}\#\end{array}\){:/nomarkdown}

ומפה כבר נסתדר. ועכשיו זה באמת מסיים את כל הפינות האפלות של הבניה (תוך שימוש מובלע בהנחות שציינתי קודם, למשל שהמכונה אף פעם לא מנסה לפנות שמאלה כשהיא בקצה השמאלי של הסרט).

כל זה היה הסבר אינטואיטיבי, אבל לדעתי זה העיקר כאן. אחרי שהבנו אותו, כל מה שנשאר הוא ההגדרה היבשה. בהינתן מ"ט {::nomarkdown}\( M\){:/nomarkdown}, אנחנו בונים ממנה בעיית PCP עם זוג התחלתי באופן הבא:
<ul>
	<li>הזוג ההתחלתי יהיה {::nomarkdown}\( \left(\#,\#q_{0}\flat\#\right)\){:/nomarkdown}.</li>
	<li>לכל {::nomarkdown}\( a\in\Sigma\){:/nomarkdown} יהיה לנו הזוג {::nomarkdown}\( \left(a,a\right)\){:/nomarkdown}</li>
	<li>יהיו לנו הזוגות {::nomarkdown}\( \left(\#,\#\right)\){:/nomarkdown} ו-{::nomarkdown}\( \left(\#,\flat\#\right)\){:/nomarkdown}.</li>
	<li>לכל מעבר {::nomarkdown}\( \delta\left(q,\sigma\right)=\left(p,\tau,R\right)\){:/nomarkdown} יהיה לנו הזוג {::nomarkdown}\( \left(q\sigma,\tau p\right)\){:/nomarkdown}.</li>
	<li>לכל מעבר {::nomarkdown}\( \delta\left(q,\sigma\right)=\left(p,\tau,S\right)\){:/nomarkdown} יהיה לנו הזוג {::nomarkdown}\( \left(q\sigma,p\tau\right)\){:/nomarkdown}.</li>
	<li>לכל מעבר {::nomarkdown}\( \delta\left(q,\sigma\right)=\left(p,\tau,L\right)\){:/nomarkdown} ולכל {::nomarkdown}\( a\in\Sigma\){:/nomarkdown} יהיה לנו הזוג {::nomarkdown}\( \left(aq\sigma,pa\tau\right)\){:/nomarkdown}.</li>
	<li>לכל {::nomarkdown}\( a\in\Sigma\){:/nomarkdown} יהיו לנו הזוגות {::nomarkdown}\( \left(q_{f}a,q_{f}\right)\){:/nomarkdown} ו-{::nomarkdown}\( \left(aq_{f},q_{f}\right)\){:/nomarkdown}.</li>
	<li>יהיה לנו הזוג {::nomarkdown}\( \left(q_{f}\#\#,\#\right)\){:/nomarkdown}.</li>
</ul>
וזו הבניה כולה! קלה, אחרי שמבינים את הרעיון. האם הצלחתי להסביר את הרעיון?
