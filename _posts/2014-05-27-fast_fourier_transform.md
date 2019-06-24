---
id: 3106
title: "התמרת פורייה המהירה"
date: 2014-05-27 19:10:00
layout: post
categories: 
  - אנליזה מתמטית
  - מבני נתונים ואלגוריתמים
tags: 
  - התמרת פורייה המהירה
---
בפוסט הקודם הצגתי את התמרת פורייה הבדידה, והבאתי דוגמה אחת לשימוש בה - כפל מהיר של פולינומים. אמרתי גם שכדי שהכפל באמת יהיה מהיר, עלינו לדעת לבצע את התמרת פורייה מהר; ואמרתי גם שהתמרת פורייה הבדידה מיוחדת בכך שהיא עוסקת בכמות סופית של מידע, ולכן אפשר לתכנת אותה במחשב בצורה פשוטה. כפי שאתם ודאי מנחשים מכל זה, הפוסט הנוכחי יהיה הרבה יותר מוטה לכיוון של מדעי המחשב מאשר הפוסטים הקודמים על פורייה; בפרט, אני הולך לדבר על שאלות של <strong>סיבוכיות </strong>ולהציג <strong>אלגוריתמים</strong>.

אבל ראשית, בואו ניזכר מהי התמרת פורייה הבדידה. אני הולך להשתמש בפוסט הזה בסימונים קצת שונים מאלו שהשתמשתי בהם בפוסט הקודם, כי הסימונים הישנים יהיו פחות נוחים לי. על כן אני ממליץ לאלו מכם שקראו את הפוסט הקודם לשכוח מהכל ולהתחיל מחדש. בכל הנוגע לסימונים, זאת אומרת.

אנחנו מסמנים את <strong>שורש היחידה הפרמיטיבי ה-{::nomarkdown}\( n\){:/nomarkdown}-י</strong> בסימון {::nomarkdown}\( \omega_{n}=e^{\frac{2\pi i}{n}}\){:/nomarkdown}, והחזקות שלו {::nomarkdown}\( \left(\omega_{n}^{0},\omega_{n}^{1},\dots,\omega_{n}^{n-1}\right)\){:/nomarkdown} הן כל {::nomarkdown}\( n\){:/nomarkdown} שורשי היחידה מסדר {::nomarkdown}\( n\){:/nomarkdown}. הקלט להתמרת פורייה הבדידה היא סדרה {::nomarkdown}\( \left(a_{0},a_{1},\dots,a_{n-1}\right)\){:/nomarkdown} של {::nomarkdown}\( n\){:/nomarkdown} מספרים מרוכבים (האינדקס מתחיל מ-0 כי אנחנו במדעי המחשב, כמובן) והפלט הוא סדרה {::nomarkdown}\( \left(b_{0},b_{1},\dots,b_{n-1}\right)\){:/nomarkdown} של סדרה של מספרים מרוכבים, כך שמתקיים הקשר הבא בין הסדרות, לכל {::nomarkdown}\( 0\le k&lt;n\){:/nomarkdown}:

{::nomarkdown}\( b_{k}=\sum_{t=0}^{n-1}a_{t}\omega_{n}^{-kt}\){:/nomarkdown} (<strong>משוואת אנליזה</strong>)

{::nomarkdown}\( a_{k}=\frac{1}{n}\sum_{t=0}^{n-1}b_{t}\omega_{n}^{kt}\){:/nomarkdown} (<strong>משוואת סינתזה</strong>)

למעשה, בפוסט הקודם המשוואות נראו טיפה אחרת (ה-{::nomarkdown}\( \frac{1}{n}\){:/nomarkdown} הופיע במשוואת האנליזה דווקא) אבל ההבדל אינו מהותי ומעכשיו המשוואות שיעניינו אותי הן אלו שהצגתי כאן.

במבט ראשון, לא נראה שיש בכלל צורך באלגוריתם כלשהו - המשוואות שמאפשרות לנו לחשב את {::nomarkdown}\( b_{k}\){:/nomarkdown} לכל {::nomarkdown}\( k\){:/nomarkdown} הן פשוטות מאוד. פשוט כופלים שורשי יחידה ב-{::nomarkdown}\( a_{t}\){:/nomarkdown}-ים ומחברים. מה הסיפור? ובכן, פשוט מאוד: יש {::nomarkdown}\( n\){:/nomarkdown} איברים {::nomarkdown}\( b_{t}\){:/nomarkdown} שאנחנו רוצים לחשב, ולכל אחד מהם נצטרך לבצע {::nomarkdown}\( n\){:/nomarkdown} פעולות של כפל ו-{::nomarkdown}\( n\){:/nomarkdown} פעולות של חיבור. סה"כ {::nomarkdown}\( \Theta\left(n^{2}\right)\){:/nomarkdown} פעולות. זה לא המון, אבל זה גם לא מעט. אם {::nomarkdown}\( n=1000\){:/nomarkdown} זה אומר שנזדקק למיליון פעולות בערך.

מה שאנחנו <strong>רוצים</strong> הוא אלגוריתם שמבצע את כל המהומה הזו עם {::nomarkdown}\( \Theta\left(n\log n\right)\){:/nomarkdown} פעולות, כלומר כאשר {::nomarkdown}\( n=1000\){:/nomarkdown} הוא מבצע בערך 7,000 פעולות - ההבדל בין זה ובין מיליון הוא די ברור. להשוואת זמני ריצה בפועל במימושים אמיתיים נגיע בסוף, אבל בינתיים תאמינו לי שזה הבדל גדול.

האלגוריתם שאציג לא יהיה סוף דבר - הוא יהיה שיטה נאיבית יחסית להתמודדות עם הבעיה. זה אומר שיש שיטות מורכבות יותר שאני לא מציג, והוא גם יניח הנחה מוזרה - ש-{::nomarkdown}\( n\){:/nomarkdown} הוא חזקה של 2. עם זאת, הוא ישיג לנו את זמן ה-{::nomarkdown}\( \Theta\left(n\log n\right)\){:/nomarkdown} המובטח ויתן תחושה של "איך עושים את הקסם הזה", שזה מה שאני מחפש.

לפני שנצלול לפרטים, הנה הרעיון, וזה רעיון פשוט מאוד. ראשית, בואו נשים לב שאת משוואות האנליזה ניתן לתאר בתור <strong>הצבה של שורשי יחידה בפולינום</strong>. נגדיר את הפולינום {::nomarkdown}\( A\left(x\right)=\sum_{t=0}^{n-1}a_{t}x^{t}\){:/nomarkdown}. כעת נשים לב לכך ש-{::nomarkdown}\( b_{k}=A\left(\omega_{n}^{-k}\right)\){:/nomarkdown}. אז אפשר לשאול את השאלה הכללית: בהינתן פולינום {::nomarkdown}\( A\){:/nomarkdown} עם {::nomarkdown}\( n\){:/nomarkdown} מקדמים ו-{::nomarkdown}\( n\){:/nomarkdown} נקודות {::nomarkdown}\( x_{0},\dots,x_{n-1}\){:/nomarkdown}, האם ניתן למצוא את {::nomarkdown}\( y_{0},\dots,y_{n-1}\){:/nomarkdown} המוגדרים על ידי {::nomarkdown}\( y_{k}=A\left(x_{k}\right)\){:/nomarkdown} ב-{::nomarkdown}\( \Theta\left(n\log n\right)\){:/nomarkdown} פעולות במקום ב-{::nomarkdown}\( \Theta\left(n^{2}\right)\){:/nomarkdown}?

זו שאלה טובה, ולמיטב ידיעתי התשובה היא <strong>לא </strong>(אבל אני לא מומחה ואין לי הוכחה כרגע). כלומר, אם אני מנסה לחשב את הערכים של {::nomarkdown}\( A\){:/nomarkdown} בנקודות <strong>שרירותיות כלשהן</strong>, אין לי דרך חכמה לעשות את זה. הקסם של התמרת פורייה המהירה הוא שבמקרה <strong>הספציפי</strong> של שורשי היחידה, דווקא כן אפשר לעשות קיצורי דרך בחישובים. זה אומר שהאלגוריתם יצטרך להסתמך איכשהו על תכונות מיוחדות שיש לשורשי היחידה ולסתם מספרים שרירותיים אין.

הרעיון הבסיסי באלגוריתם הוא פשוט מאוד: <strong>הפרד ומשול</strong>. הדוגמה הקלאסית שצריכה להיות לכם בראש היא זו של <a href="http://www.gadial.net/2012/07/10/all_sorts_of_slow_sorts/">אלגוריתם מיון-מיזוג</a>: הרעיון באלגוריתם המיון הזה הוא לקחת את הרשימה שממיינים, לפצל אותה לשניים, למיין כל תת-רשימה באופן רקורסיבי, ואז למזג את שתי הרשימות הממויינות שהתקבלו, תוך ניצול העובדה ש<strong>קל יחסית</strong> למזג שתי רשימות ממויינות.

גם כן אנחנו הולכים לקחת את הסדרה שאנחנו רוצים לבצע לה התמרה, לפצל אותה לשתי תת-סדרות, למצוא התמרה לכל אחת בנפרד ואז "למזג" את שתי ההתמרות להתמרה אחת, יחסית ביעילות. ברמה הטכנית זה מתבצע בעזרת הפולינום {::nomarkdown}\( A\){:/nomarkdown} שתיארתי: אנחנו מפרקים את {::nomarkdown}\( A\){:/nomarkdown} לשני תת-פולינומים {::nomarkdown}\( A^{0},A^{1}\){:/nomarkdown}, ובמקום לחשב את הערך של {::nomarkdown}\( A\){:/nomarkdown} על שורשי היחידה מסדר {::nomarkdown}\( n\){:/nomarkdown}, אנחנו מחשבים את הערכים של שני תתי-הפולינומים על שורשי היחידה מסדר {::nomarkdown}\( \frac{n}{2}\){:/nomarkdown}. את הערכים הללו אנחנו יכולים "למזג" אחר כך ולקבל את הערכים של {::nomarkdown}\( A\){:/nomarkdown} על שורשי היחידה מסדר {::nomarkdown}\( n\){:/nomarkdown}. זה כל הסיפור; רק צריך להבין איך מתבצע שלב ה"מיזוג" במקרה הנוכחי. רק שימו לב לכך שראינו מדוע הכרחי להניח ש-{::nomarkdown}\( n\){:/nomarkdown} הוא חזקה של 2: אנחנו חייבים ש-{::nomarkdown}\( n\){:/nomarkdown} יתחלק ב-2 כדי הפירוק לשני תתי-פולינומים יעבוד ללא בעיות, ומכיוון שאנו פותרים באופן רקורסיבי גם {::nomarkdown}\( \frac{n}{2}\){:/nomarkdown} יצטרך לקיים את התכונה הזו וכן הלאה (עד למקרה של {::nomarkdown}\( n=1\){:/nomarkdown} שהוא טריוויאלי - ההתמרה של סדרה מאורך 1 הוא הסדרה עצמה).

כלי הנשק המתמטי הבסיסי שלנו כאן הוא התכונה הבאה של שורשי היחידה מסדר {::nomarkdown}\( n\){:/nomarkdown}, כאשר {::nomarkdown}\( n\){:/nomarkdown} הוא מספר זוגי: אם נעלה את כל שורשי היחידה מסדר {::nomarkdown}\( n\){:/nomarkdown} בריבוע, נקבל את כל שורשי היחידה מסדר {::nomarkdown}\( \frac{n}{2}\){:/nomarkdown}, כאשר כל שורש יחידה שכזה מתקבל בדיוק פעמיים. הנה דוגמה קלה: שורשי היחידה מסדר 4 הם המספרים {::nomarkdown}\( 1,i,-1,-i\){:/nomarkdown}. אם נעלה אותם בריבוע נקבל את המספרים {::nomarkdown}\( 1,-1,1,-1\){:/nomarkdown}, שהם שורשי היחידה מסדר 2, וכל אחד מהם התקבל בדיוק פעמיים. כבר מהדוגמה הזו מתקבל הרושם ש-{::nomarkdown}\( \frac{n}{2}\){:/nomarkdown} שורשי היחידה הראשונים, עד {::nomarkdown}\( \omega_{n}^{\frac{n}{2}}\){:/nomarkdown}, כבר מספיקים כדי "לכסות" את כל שורשי היחידה מסדר {::nomarkdown}\( \frac{n}{2}\){:/nomarkdown}, וש-{::nomarkdown}\( \frac{n}{2}\){:/nomarkdown} השורשים הבאים נותנים בדיוק את אותם ערכים (באותו סדר) כשמעלים אותם בריבוע.

בואו נוכיח את זה פורמלית. האבחנה הכללית היא ש-{::nomarkdown}\( \omega_{dn}^{dk}=\omega_{n}^{k}\){:/nomarkdown}, וזה נובע ישירות מההגדרה: {::nomarkdown}\( \omega_{dn}^{dk}=e^{\frac{2\pi idk}{dn}}=e^{\frac{2\pi ik}{n}}=\omega_{n}^{k}\){:/nomarkdown}. כמו כן, {::nomarkdown}\( \omega_{n}^{k+n}=\omega_{n}^{k}\cdot\omega_{n}^{n}=\omega_{n}^{k}\){:/nomarkdown} (כי {::nomarkdown}\( \omega_{n}^{n}=1\){:/nomarkdown} שהרי {::nomarkdown}\( \omega_{n}\){:/nomarkdown} הוא שורש יחידה מסדר {::nomarkdown}\( n\){:/nomarkdown}). לכן:

מכאן נקבל לכל {::nomarkdown}\( 0\le k&lt;\frac{n}{2}\){:/nomarkdown}:

{::nomarkdown}\( \left(\omega_{n}^{k+\frac{n}{2}}\right)^{2}=\omega_{n}^{2k+n}=\omega_{n/2}^{k+n/2}=\omega_{n/2}^{k}=\omega_{n}^{2k}=\left(\omega_{n}^{k}\right)^{2}\){:/nomarkdown}

ראינו שהריבועים של {::nomarkdown}\( \omega_{n}^{k}\){:/nomarkdown} ושל {::nomarkdown}\( \omega_{n}^{k+\frac{n}{2}}\){:/nomarkdown} זהים, אבל למה הם שורש יחידה מסדר {::nomarkdown}\( \frac{n}{2}\){:/nomarkdown}? אה, זה קל: כי {::nomarkdown}\( \left[\left(\omega_{n}^{k}\right)^{2}\right]^{\frac{n}{2}}=\left(\omega_{n}^{k}\right)^{n}=1\){:/nomarkdown}. כעת, האם אנחנו באמת תופסים את <strong>כל</strong> שורשי היחידה מסדר {::nomarkdown}\( \frac{n}{2}\){:/nomarkdown} כך? שוב, די בבירור כן, כי {::nomarkdown}\( \omega_{n/2}^{k}=\omega_{n}^{2k}=\left(\omega_{n}^{k}\right)^{2}\){:/nomarkdown} (כאשר {::nomarkdown}\( 0\le k&lt;\frac{n}{2}\){:/nomarkdown}).

אז אם לסכם: הריבועים של {::nomarkdown}\( \omega_{n}^{0},\omega_{n}^{1},\omega_{n}^{2},\dots,\omega_{n}^{\frac{n}{2}-1}\){:/nomarkdown} נותנים בדיוק את כל שורשי היחידה מסדר {::nomarkdown}\( \frac{n}{2}\){:/nomarkdown}, והם זהים (גם בסדר שלהם) לריבועים של {::nomarkdown}\( \omega_{n}^{\frac{n}{2}},\omega_{n}^{\frac{n}{2}+1},\dots,\omega_{n}^{n-1}\){:/nomarkdown}. עכשיו אפשר לעבור לאלגוריתם עצמו.

כזכור, אנחנו מתבוננים בפולינום {::nomarkdown}\( A\left(x\right)=\sum_{t=0}^{n-1}a_{t}x^{t}\){:/nomarkdown} ורוצים לחשב את ההצבה של שורשי היחידה בו. מה שנעשה יהיה לפרק אותו לשני פולינומים - זה של המקדמים במקומות הזוגיים, וזה של המקדמים במקומות האי זוגיים. נגדיר:

{::nomarkdown}\( A^{0}\left(x\right)=\sum_{t=0}^{\frac{n}{2}-1}a_{2t}x^{t}=a_{0}x^{0}+a_{2}x^{1}+a_{4}x^{2}+\dots+a_{n-2}x^{\frac{n}{2}-1}\){:/nomarkdown}

{::nomarkdown}\( A^{1}\left(x\right)=\sum_{t=0}^{\frac{n}{2}-1}a_{2t+1}x^{2t+1}=a_{1}x^{0}+a_{3}x^{1}+a_{5}x^{2}+\dots+a_{n-1}x^{\frac{n}{2}-1}\){:/nomarkdown}

שימו לב - החזקות של ה-{::nomarkdown}\( x\){:/nomarkdown}-ים הן רציפות, מ-1 ועד {::nomarkdown}\( \frac{n}{2}-1\){:/nomarkdown}, ולכן קיבלנו שני פולינומים ממעלה נמוכה בחצי מזו של {::nomarkdown}\( A\left(x\right)\){:/nomarkdown}, שפשוט מחלקים ביניהם את המקדמים שלו.

עכשיו, אפשר לתאר את {::nomarkdown}\( A\left(x\right)\){:/nomarkdown} בעזרת שני הפולינומים הללו בצורה הפשוטה הבאה:

{::nomarkdown}\( A\left(x\right)=A^{0}\left(x^{2}\right)+xA^{1}\left(x^{2}\right)\){:/nomarkdown}

אם אתם לא מאמינים, נסו לבצע את החישוב בעצמכם, זה קל.

המסקנה פשוטה:

{::nomarkdown}\( A\left(\omega_{n}^{k}\right)=A^{0}\left(\omega_{n}^{2k}\right)+\omega_{n}^{k}A^{1}\left(\omega_{n}^{2k}\right)=A^{0}\left(\omega_{n/2}^{k}\right)+\omega_{n}^{k}A^{1}\left(\omega_{n/2}^{k}\right)\){:/nomarkdown}

וכפי שראינו, עבור {::nomarkdown}\( k\ge\frac{n}{2}\){:/nomarkdown} אין צורך לחשב את הערכים של {::nomarkdown}\( A^{0},A^{1}\){:/nomarkdown} על {::nomarkdown}\( \omega_{n}^{k}\){:/nomarkdown} במפורש, אפשר להשתמש בערך שלו על {::nomarkdown}\( \omega_{n}^{k-\frac{n}{2}}\){:/nomarkdown}. <strong>זו</strong> הנקודה שבה אנחנו מנצלים את שורשי היחידה כדי לחסוך משהו.

הנה פסאודו-קוד של האלגוריתם. מכיוון שאני חסיד גדול של גישת "לתת פסאודו-קוד שבאמת אפשר להריץ", הוא כתוב עבור מערכת האלגברה הממוחשבת Sage, שמשתמשת בשפה שהיא כמעט פייתון, עם כמה הרחבות (למשל, הסימן של החזקה). הדברים היחידים שנאלצתי לכתוב כאן ולא הייתי כותב בפסאודו קוד הם I במקום i בשביל השורש של מינוס 1, והמרה מפורשת של {::nomarkdown}\( \frac{n}{2}\){:/nomarkdown} למספר שלם, אחרת Sage לא מוכן לבצע פעולות מודולו {::nomarkdown}\( \frac{n}{2}\){:/nomarkdown}.

[python]
def fft(a):
  n = len(a)
  if (n == 1):
    return a
  omega = e^(2*pi*I/n)
  a0 = [a[2*k] for k in range(n/2)]
  a1 = [a[2*k+1] for k in range(n/2)]
  b0 = fft(a0)
  b1 = fft(a1)
  b = [b0[k % Integer(n/2)] + omega^k*b1[k % Integer(n/2)] for k in range(n)]
  return b
[/python]

כמובן, הקוד הזה מסתיר בתוכו מורכבות בסיסית ש-Sage מטפל בה אוטומטית אבל בשפות תכנות פשוטות אין אותה - אריתמטיקה עם שורשי היחידה {::nomarkdown}\( \omega_{n}^{k}\){:/nomarkdown}. אנחנו מעלים אותם בחזקות, ומחברים אותם, ובלאגן שלם. מי שירצה לממש את התמרת פורייה יצטרך, כמובן, לממש קודם את החלק שמתעסק באריתמטיקה של המספרים הללו (ולכן של מספרים מרוכבים בכלל). לרוב פשוט מתבססים על ספריות קיימות.

קל לנתח את סיבוכיות האלגוריתם על ידי מבט בקוד. בשורות 6-7 ("הפיצול") יש לנו לולאות עם זמן {::nomarkdown}\( O\left(n\right)\){:/nomarkdown} לכל אחת, וכך גם בשורה 10 ("המיזוג"). בשורות 8-9 יש לנו קריאה רקורסיבית לאלגוריתם עם קלט שגודלו חצי מהגודל הנוכחי. אז סיבוכיות האלגוריתם נתונה על ידי פתרון המשוואה {::nomarkdown}\( T\left(n\right)=2T\left(\frac{n}{2}\right)+\Theta\left(n\right)\){:/nomarkdown} - אותה משוואה של מיון מיזוג, שפתרונה הוא {::nomarkdown}\( T\left(n\right)=\Theta\left(n\log n\right)\){:/nomarkdown}.

מכאן גם קל לממש את האלגוריתם עבור ההתמרה ההפוכה. אפשר לכתוב את כל הקוד מחדש, אבל בשביל מה? הנוסחה, כזכור, היא {::nomarkdown}\( a_{k}=\frac{1}{n}\sum_{t=0}^{n-1}b_{t}\omega_{n}^{kt}\){:/nomarkdown}. היא מאוד דומה לנוסחה של התמרה רגילה. אולי אפשר לחשב את ההתמרה ההפוכה בעזרת שימוש בהתמרה הרגילה? יש שני הבדלים בין ההתמרה הרגילה וההפוכה. ראשית, יש את הכפל ב-{::nomarkdown}\( \frac{1}{n}\){:/nomarkdown}; ושנית, יש את הסימן של החזקה של שורש היחידה: הנוסחה של ההתמרה הרגילה היא {::nomarkdown}\( b_{k}=\sum_{t=0}^{n-1}a_{t}\omega_{n}^{-kt}\){:/nomarkdown} ושם יש מינוס בחזקה, בעוד שכרגע אין.

התעלול המרכזי שנשתמש בו הוא שאנחנו כבר יודעים ש-{::nomarkdown}\( \left(\omega_{n}^{k}\right)^{0}=\left(\omega_{n}^{k}\right)^{n}\){:/nomarkdown} ולכן {::nomarkdown}\( \left(\omega_{n}^{k}\right)^{-t}=\left(\omega_{n}^{k}\right)^{n-t}\){:/nomarkdown}. לכן אפשר לכתוב את נוסחת ההתמרה הרגילה גם כך:

{::nomarkdown}\( b_{k}=\sum_{t=0}^{n-1}a_{t}\omega_{n}^{-kt}=\sum_{t=0}^{n-1}a_{t}\left(\omega_{n}^{k}\right)^{n-t}=\sum_{r=1}^{n}a_{n-r}\left(\omega_{n}^{k}\right)^{r}\){:/nomarkdown}

כאן ביצעתי את החלפת המשתנה {::nomarkdown}\( r=n-t\){:/nomarkdown}.

אם נסמן {::nomarkdown}\( a_{n}\triangleq a_{0}\){:/nomarkdown} אפשר לכתוב את הסכום האחרון שלמעלה בתור {::nomarkdown}\( \sum_{r=0}^{n-1}a_{n-r}\left(\omega_{n}^{k}\right)^{r}\){:/nomarkdown}, שנראה קצת יותר מוכר.

אם כן, אם נתונה לי הסדרה {::nomarkdown}\( c_{0},c_{1},\dots,c_{n-1}\){:/nomarkdown} ואני רוצה לבצע עליה את ההתמרה ההפוכה, אני בעצם רוצה לחשב התמרת פורייה רגילה על הסדרה {::nomarkdown}\( a_{0},\dots,a_{n-1}\){:/nomarkdown} המוגדרת על ידי המשוואה:

{::nomarkdown}\( \sum_{r=0}^{n-1}a_{n-r}\left(\omega_{n}^{k}\right)^{r}=\frac{1}{n}\sum_{t=0}^{n-1}c_{t}\left(\omega_{n}^{k}\right)^{t}\){:/nomarkdown}

זה נותן לי את השוויונות הבאים:

{::nomarkdown}\( a_{n-t}=\frac{1}{n}c_{t}\){:/nomarkdown} כאשר {::nomarkdown}\( 0\le t&lt;n\){:/nomarkdown}

כלומר, {::nomarkdown}\( a_{t}=\frac{1}{n}c_{n-t}\){:/nomarkdown} כאשר {::nomarkdown}\( 0&lt;t\le n\){:/nomarkdown}. עבור {::nomarkdown}\( a_{0}\){:/nomarkdown} כזכור מתקיים {::nomarkdown}\( a_{0}=a_{n}\){:/nomarkdown}.

אם לסכם את מה שעשינו כאן, ה-{::nomarkdown}\( a\){:/nomarkdown}-ים שלנו מתקבלים מה-{::nomarkdown}\( c\){:/nomarkdown}-ים בצורה הבאה: את כל ה-{::nomarkdown}\( c\){:/nomarkdown}-ים כופלים ב-{::nomarkdown}\( \frac{1}{n}\){:/nomarkdown}; את האיבר הראשון שלהם משאירים ללא שינוי; את הסדר של היתר הופכים. במילים אחרות, אם {::nomarkdown}\( c=\left(1,2,3,4\right)\){:/nomarkdown} אז נקבל {::nomarkdown}\( a=\left(\frac{1}{4},1,\frac{3}{4},\frac{1}{2}\right)\){:/nomarkdown}. זה יוצא מאוד פשוט בקוד פייתון, שבו יש קונבנציה שאינדקסים שליליים ברשימה עוברים עליה מהסוף להתחלה:

[python]
def inverse_fft(b):
  n = len(b)
  return fft([b[k] / n for k in reversed(range(-(n-1),1))])
[/python]

ומכאן קצרה הדרך לקוד עבור קונבולוציה:

[python]
def convolution(a,b):
  a_pad = a + [0 for i in range(len(a))]
  b_pad = b + [0 for i in range(len(b))]
  A = fft(a_pad)
  B = fft(b_pad)
  return inverse_fft([A[k]*B[k] for k in range(len(A))])[0:len(a)+len(b)-1]
[/python]

הקוד הזה הוא נאיבי, במובן זה שהוא מניח ששתי הרשימות הן באותו האורך (ושהאורך הזה הוא חזקה של 2). יותר מזה, הוא גם עושה משהו מוזר - "מרפד" כל רשימה עם אפסים באופן שמכפיל את גודלה. למה? ובכן, כי שיקרתי קצת בפוסט הקודם: יצרתי את הרושם שקונבולוציה של שתי רשימות סופיות של מספרים אוטומטית מניחה שכל שאר המקומות הם 0, וזה אכן מה שצפוי שיהיה ומה שאנחנו משתמשים בו כשאנחנו כופלים פולינומים, למשל, אבל זה <strong>לא</strong> מה שהתמרת פורייה הבדידה עובדת איתו. זכרו שהתמרת פורייה הבדידה מתייחסת לרשימה של מספרים כאילו הם מייצגים פונקציה <strong>מחזורית</strong>, כלומר מחוץ לגבולות הרשימה הפונקציה מתחילה לחזור על עצמה. זה אומר שהקונבולוציה שאותה התמרת פורייה יודעת להפוך לכפל היא כזו שמניחה שהפונקציה היא מחזורית. הריפוד הוא פשוט דרך להתחמק מזה - אנחנו שמים אפסים בכל המקומות שעשויים להשפיע על החישוב, ואז מתעלמים מהאיברים ה"מיותרים" שנוצרו במהלך חישוב הקונבולוציה. זה מרגיש מלוכלך נורא, אבל זה למעשה לא פתרון כזה גרוע.

סיימנו לבינתיים עם FFT ועם התמרות פורייה למיניהן, אבל כמובן שהסיפור רק מתחיל כאן; פורייה נהיה מעניין כשמשתמשים בו בפועל. אני מקווה להציג בעתיד (אולי הלא רחוק) כמה שימושים מעניינים באמת.
