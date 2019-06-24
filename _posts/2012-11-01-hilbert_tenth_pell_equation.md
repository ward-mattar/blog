---
id: 2220
title: "הבעיה העשירית של הילברט - איך משוואת פל קשורה לכל העניין?"
date: 2012-11-01 06:54:56
layout: post
categories: 
  - תורת המספרים
tags: 
  - הבעיה העשירית של הילברט
  - טכני
  - משוואת פל
---
בואו נחזור לדבר על הבעיה העשירית של הילברט ש<a href="http://www.gadial.net/2012/09/15/hilbert_tenth_sequence_function/">עזבתי בשיא המתח</a> - בדיוק לפני החלק הטכני ביותר, שנתחיל לטפל בו הפעם. תזכורת קטנה למי שאין לו כוח לקרוא את הפוסטים הקודמים: המטרה שלנו היא להוכיח שהפונקציה {::nomarkdown}\( f\left(n,k\right)=n^{k}\){:/nomarkdown} - "הפונקציה האקספוננציאלית" - היא דיופנטית. כלומר, שקיימת מערכת של משוואות פולינומיות בשלמים עם המון משתנים ששלושה מהם הם {::nomarkdown}\( n,k,m\){:/nomarkdown} כך שלכל הצבה של ערכים ב-{::nomarkdown}\( n,k,m\){:/nomarkdown}, יש פתרון למערכת המשוואות אם ורק אם {::nomarkdown}\( m=n^{k}\){:/nomarkdown}. אפשר, כמובן, להתחיל מלהציג את מערכת המשוואות הזו, אבל היא כוללת שתיים-עשרה משוואות ולא מעט משתנים וממבט ראשון לא יהיה ברור מה הולך שם בכלל, אז נחכה עם זה קצת בסבלנות. לפני כן נטפל בבעיה לכאורה לא קשורה, אבל כזו שתוביל אותנו כמעט ישירות אל הפונקציה האקספוננציאלית: <a href="http://www.gadial.net/2012/08/31/pell_equation/">משוואת פל</a>.

כחלק מההכנה לפוסט הזה כתבתי פוסט על משוואת פל שאין צורך לחזור על כל מה שנאמר בו (מרטין דיוויס, במאמר על הבעיה העשירית של הילברט שאני מתבסס עליו, מוכיח מאפס את התכונות שהוא צריך באופן ישיר), אבל בואו נחזור על עיקרי הדברים הרלוונטיים. אם {::nomarkdown}\( d\){:/nomarkdown} הוא מספר טבעי שאינו ריבוע, אז משוואת פל עם הפרמטר {::nomarkdown}\( d\){:/nomarkdown} היא המשוואה {::nomarkdown}\( x^{2}-dy^{2}=1\){:/nomarkdown} (בפוסט שלי השתמשתי ב-{::nomarkdown}\( N\){:/nomarkdown} אבל עכשיו אני הולך לפי סגנון הכתיבה של דיוויס). מה שמעניין במשוואת פל הוא שלפתרונות שלה יש <strong>מבנה</strong> יפה במיוחד: קיים פתרון אחד שנקרא <strong>הפתרון היסודי</strong> ונסמן אותו בתור {::nomarkdown}\( \left(x_{1},y_{1}\right)\){:/nomarkdown}, כך שכל פתרון אחד מתקבל כמעין חזקה של הפתרון היסודי.

ליתר דיוק, מה שעושים הוא להסתכל על המספר האלגברי {::nomarkdown}\( x_{1}+\sqrt{d}y_{1}\){:/nomarkdown} ולקחת את החזקות שלו, כלומר מגדירים {::nomarkdown}\( x_{n}+\sqrt{d}y_{n}=\left(x_{1}+\sqrt{d}y_{1}\right)^{n}\){:/nomarkdown}. למי שאין לו כוח להתעסק עם שורשים אפשר לעשות את זה גם באופן ישיר בצורה הבאה: אם {::nomarkdown}\( \left(x_{n},y_{n}\right)\){:/nomarkdown} ו-{::nomarkdown}\( \left(x_{k},y_{k}\right)\){:/nomarkdown} הם שני פתרונות של משוואת פל, אז אפשר לבנות מהם על ידי "כפל" פתרון חדש {::nomarkdown}\( \left(x_{t},y_{t}\right)\){:/nomarkdown} שנראה כך:

{::nomarkdown}\( x_{t}=x_{n}x_{k}+dy_{n}y_{k}\){:/nomarkdown}

{::nomarkdown}\( y_{t}=x_{n}y_{k}+x_{k}y_{n}\){:/nomarkdown}

זוכרים משהו מזה? יפה. לא זוכרים? לא נורא, זה מה שצריך לזכור. בואו נעבור למה שדיוויס עושה. ראשית כל, <strong>למה</strong> הוא בכלל מתעניין במשוואת פל? ובכן, מצד אחד זו משוואה דיופנטית פשוטה - תנאי כמו {::nomarkdown}\( x^{2}-dy^{2}=1\){:/nomarkdown} אפשר לקודד עם האמצעים שמותר לנו להשתמש בהם. מצד שני, הקטע הזה של "כל פתרון הוא חזקה של הפתרון היסודי" מתנהג כמו, ובכן, חזקה. זהו ה"גשר" שאנו זקוקים לו בין משהו דיופנטי ומשהו אקספוננציאלי. לדעתי זה די מגניב שזה נעשה באמצעות משוואת פל.

בשביל הצרכים שלו, דיוויס נזקק רק למשוואות פל מסוג מסויים: משוואות מהצורה {::nomarkdown}\( x^{2}-dy^{2}=1\){:/nomarkdown} (עד כאן הכל כרגיל) כך ש-{::nomarkdown}\( d=a^{2}-1\){:/nomarkdown}, עבור {::nomarkdown}\( a&gt;1\){:/nomarkdown} כלשהו. כלומר, המשוואות {::nomarkdown}\( x^{2}-3y^{2}=1\){:/nomarkdown}, {::nomarkdown}\( x^{2}-8y^{2}=1\){:/nomarkdown}, {::nomarkdown}\( x^{2}-15y^{2}=1\){:/nomarkdown} וכדומה (כזכור, אם {::nomarkdown}\( d\){:/nomarkdown} הוא ריבוע "ממש", כלומר אם {::nomarkdown}\( d=a^{2}\){:/nomarkdown}, אז למשוואה אין פתרונות) למשוואות שבהן {::nomarkdown}\( d=a^{2}-1\){:/nomarkdown} קל מאוד לתת פתרון: {::nomarkdown}\( x=a,y=1\){:/nomarkdown} תמיד פותר את המשוואה, שהרי {::nomarkdown}\( a^{2}-\left(a^{2}-1\right)1^{2}=a^{2}-a^{2}+1=1\){:/nomarkdown}. האם זהו הפתרון היסודי, כלומר הפתרון שבעזרת "חזקות" שלו (ביחס לפעולת ה"כפל" שהצגתי למעלה) אפשר לקבל את כל שאר הפתרונות הלא טריוויאליים של המשוואה?

כדי להוכיח את זה מספיק להוכיח שאם {::nomarkdown}\( \left(x,y\right)\){:/nomarkdown} הוא פתרון כלשהו של המשוואה, אז לא ייתכן שמתקיים {::nomarkdown}\( 1&lt;x+y\sqrt{d}&lt;a+\sqrt{d}\){:/nomarkdown}, כלמר אין פתרון למשוואה "בין" שני הפתרונות הבסיסיים {::nomarkdown}\( \left(1,0\right)\){:/nomarkdown} ו-{::nomarkdown}\( \left(a,1\right)\){:/nomarkdown}. זה מספיק כי אם {::nomarkdown}\( a+\sqrt{d}&lt;x+y\sqrt{d}\){:/nomarkdown}, אז בוודאי שגם {::nomarkdown}\( a+\sqrt{d}&lt;\left(x^{2}+dy^{2}\right)+\left(xy+yx\right)\){:/nomarkdown}, כלומר החזקה השניה של הפתרון {::nomarkdown}\( \left(x,y\right)\){:/nomarkdown} לא יכולה לתת את {::nomarkdown}\( \left(a,1\right)\){:/nomarkdown}, וגם החזקה השלישית וכן הלאה, מה שמאלץ את {::nomarkdown}\( \left(a,1\right)\){:/nomarkdown} להיות הפתרון היסודי.

אם כן, בואו נניח בכשלילה ש-{::nomarkdown}\( \left(x,y\right)\){:/nomarkdown} הוא פתרון של המשוואה שגם מקיים {::nomarkdown}\( 1&lt;x+y\sqrt{d}&lt;a+\sqrt{d}\){:/nomarkdown}. כעת, מכיוון שמתקיים {::nomarkdown}\( x^{2}-dy^{2}=1\){:/nomarkdown} הרי שאפשר לפרק את הביטוי הזה ולקבל

{::nomarkdown}\( \left(x-y\sqrt{d}\right)\left(x+y\sqrt{d}\right)=x^{2}-dy^{2}=1=a^{2}-d=\left(a-\sqrt{d}\right)\left(a+\sqrt{d}\right)\){:/nomarkdown}

בואו נחלק את שני האגפים ב-{::nomarkdown}\( x+y\sqrt{d}\){:/nomarkdown}. נקבל:

{::nomarkdown}\( x-y\sqrt{d}=a-\sqrt{d}\cdot\frac{a+\sqrt{d}}{x+y\sqrt{d}}&gt;a-\sqrt{d}\){:/nomarkdown}

כי הרי הביטוי {::nomarkdown}\( \frac{a+\sqrt{d}}{x+y\sqrt{d}}\){:/nomarkdown} הוא גדול מ-1 אם מניחים ש-{::nomarkdown}\( x+y\sqrt{d}&lt;a+\sqrt{d}\){:/nomarkdown}. עכשיו, נכפול את שני האגפים במינוס 1, הסימן של אי השוויון יתהפך ולבסוף נקבל:

{::nomarkdown}\( -x+y\sqrt{d}&lt;-a+\sqrt{d}\){:/nomarkdown}

אם נחבר את זה לאי השוויון {::nomarkdown}\( x+y\sqrt{d}&lt;a+\sqrt{d}\){:/nomarkdown} נקבל בסופו של דבר ש-{::nomarkdown}\( 2y\sqrt{d}&lt;2\sqrt{d}\){:/nomarkdown}, כלומר {::nomarkdown}\( y&lt;1\){:/nomarkdown}. זה לכשעצמו עדיין לגיטימי - אולי {::nomarkdown}\( y\){:/nomarkdown} שלילי, או אפס? לכן אנו נזקקים לעוד תעלול. נשים לב לכך שעל פי הנחתנו, {::nomarkdown}\( x+y\sqrt{d}&gt;1\){:/nomarkdown} ולכן {::nomarkdown}\( \left(x-y\sqrt{d}\right)=\frac{1}{x+y\sqrt{d}}&lt;1\){:/nomarkdown}, ולכן {::nomarkdown}\( -x+y\sqrt{d}&gt;-1\){:/nomarkdown}, ואם נחבר את זה ל-{::nomarkdown}\( 1&lt;x+y\sqrt{d}\){:/nomarkdown} נקבל ש-{::nomarkdown}\( 0&lt;y\){:/nomarkdown}, כלומר {::nomarkdown}\( 0&lt;y&lt;1\){:/nomarkdown}, כלומר {::nomarkdown}\( y\){:/nomarkdown} בכלל לא מספר שלם, אבל רק מספרים שלמים הם פתרונות חוקיים של משוואת פל. זה מסיים את הסיפור. אני מודה, ההוכחה הזו היא לא הדבר הכי יפה בעולם.

עכשיו, משאנחנו יודעים מהו הפתרון היסודי, אפשר לתת סימון כללי לשאר הפתרונות החיוביים. מכיוון שהמשוואה שלנו תלויה גם ב-{::nomarkdown}\( d\){:/nomarkdown}, אבל את {::nomarkdown}\( d\){:/nomarkdown} כתבנו בתור {::nomarkdown}\( a^{2}-1\){:/nomarkdown}, אנחנו משתמשים ב-{::nomarkdown}\( x_{n}\left(a\right)\){:/nomarkdown} ו-{::nomarkdown}\( y_{n}\left(a\right)\){:/nomarkdown} כדי לתאר את הפתרונות. פורמלית הסדרות הללו מוגדרות כך: {::nomarkdown}\( x_{0}\left(a\right)=1,y_{0}\left(a\right)=0\){:/nomarkdown}, ובאופן אינדוקטיבי:

{::nomarkdown}\( x_{n+1}\left(a\right)=ax_{n}\left(a\right)+dy_{n}\left(a\right)\){:/nomarkdown}

{::nomarkdown}\( y_{n+1}\left(a\right)=ay_{n}\left(a\right)+x_{n}\left(a\right)\){:/nomarkdown}

או בצורה טיפה יותר אלגנטית אבל לא מפורשת, {::nomarkdown}\( x_{n}\left(a\right)+y_{n}\left(a\right)\sqrt{d}=\left(a+\sqrt{d}\right)^{n}\){:/nomarkdown}. אבחנה חביבה של דיוויס בנקודה הזו היא שהנוסחה הזו דומה באופיה לנוסחת אוילר, {::nomarkdown}\( \cos\theta+i\sin\theta=e^{i\theta}\){:/nomarkdown}. כאן {::nomarkdown}\( \cos\){:/nomarkdown} מיוצג על ידי {::nomarkdown}\( x_{n}\left(a\right)\){:/nomarkdown}, {::nomarkdown}\( \sin\){:/nomarkdown} מיוצג על ידי {::nomarkdown}\( y_{n}\left(a\right)\){:/nomarkdown}, במקום {::nomarkdown}\( i\){:/nomarkdown} יש לנו את {::nomarkdown}\( \sqrt{d}\){:/nomarkdown} ובמקום {::nomarkdown}\( e^{i}\){:/nomarkdown} יש לנו את {::nomarkdown}\( a+\sqrt{d}\){:/nomarkdown}. דיוויס מצביע על כך שניתן להשתמש בייצוג המעריכי הזה כדי לקבל בקלות נוסחאות לחיבור וחיסור (למעשה, כבר יש לנו את הנוסחה לחיבור...) שמזכירות את הנוסחאות המקבילות מטריגו - ושוב, לא במקרה! הדרך הכי טובה לפתח את הנוסחאות מטריגו היא לעבור דרך נוסחת אוילר שפשוט נותנת לנו אותן במתנה. אני מציע לכם לשחק קצת עם המשוואות ולהוכיח את הנוסחאות הללו לעצמכם בדרך הזו:

{::nomarkdown}\( x_{m\pm n}=x_{m}x_{n}\pm dy_{m}y_{n}\){:/nomarkdown}

{::nomarkdown}\( y_{m\pm n}=x_{n}y_{m}\pm x_{m}y_{n}\){:/nomarkdown}

שימו לב שכבר התעצלתי מלכתוב את ה-{::nomarkdown}\( \left(a\right)\){:/nomarkdown} אחרי ה-{::nomarkdown}\( x_{n},y_{n}\){:/nomarkdown} וכך גם אמשיך לעשות בהמשך אם זהותו המדויקת של ה-{::nomarkdown}\( a\){:/nomarkdown} לא רלוונטית באותו רגע או ברורה מההקשר.

עכשיו בואו ננסה להבין כמה תכונות תורת-מספריות של הפתרונות הללו שיהיו חשובות בהמשך. <strong>אני מזהיר מראש</strong> - מכאן ועד סוף הפוסט לא תהיה שום תובנה מהותית לגבי מה לעזאל הולך כאן. רק אוסף של הרבה תכונות, כולן פשוטות בפני עצמן, שבהן נשתמש בצורה אינטנסיבית בפוסט הבא, שבו סוף סוף נדבר על איך מוכיחים שהפונקציה האקספוננציאלית היא דיופנטית. אתם יכולים לדלג על המשך הפוסט אלא אם אתם רוצים (כמוני) לוודא שאתם מבינים את כל מה שהולך בהוכחה הזו.

בתור התחלה, {::nomarkdown}\( x_{n},y_{n}\){:/nomarkdown} הם <strong>זרים</strong> - אין להם מחלק משותף חיובי גדול מ-1. זה מסומן בתור {::nomarkdown}\( \left(x_{n},y_{n}\right)=1\){:/nomarkdown}. למה? פשוט: אם {::nomarkdown}\( d\){:/nomarkdown} חיובי מחלק את {::nomarkdown}\( x_{n}\){:/nomarkdown} ואת {::nomarkdown}\( y_{n}\){:/nomarkdown} אז הוא בוודאי מחלק גם את {::nomarkdown}\( x_{n}^{2}\){:/nomarkdown} ואת {::nomarkdown}\( dy_{n}^{2}\){:/nomarkdown} ולכן גם מחלק את ההפרש ביניהם, שהוא 1. אם {::nomarkdown}\( d\){:/nomarkdown}הוא חיובי ומחלק את 1, הוא בהכרח 1 בעצמו.

קצת יותר מעניינת הטענה ש-{::nomarkdown}\( y_{n}\){:/nomarkdown} מחלק את {::nomarkdown}\( y_{nk}\){:/nomarkdown}. זה מן הסתם נכון עבור {::nomarkdown}\( k=1\){:/nomarkdown} אבל לערכים גדולים יותר יש צורך להוכיח זאת באינדוקציה, בעזרת נוסחת החיבור שלנו:

{::nomarkdown}\( y_{n\left(k+1\right)}=y_{nk+n}=x_{n}y_{nk}+x_{nk}y_{n}\){:/nomarkdown}

מהנחת האינדוקציה עולה ש-{::nomarkdown}\( y_{n}\){:/nomarkdown} מחלק את {::nomarkdown}\( y_{nk}\){:/nomarkdown} ולכן את {::nomarkdown}\( x_{n}y_{nk}\){:/nomarkdown}, וברור שהוא מחלק את {::nomarkdown}\( x_{nk}y_{n}\){:/nomarkdown}, ולכן קיבלנו ש-{::nomarkdown}\( y_{n}\){:/nomarkdown} מחלק את {::nomarkdown}\( y_{n\left(k+1\right)}\){:/nomarkdown}. האם יש עוד איברים בסדרת ה-{::nomarkdown}\( y\){:/nomarkdown}-ים אותם {::nomarkdown}\( y_{n}\){:/nomarkdown} יכול לחלק? מסתבר שלא. נניח ש-{::nomarkdown}\( y_{n}\){:/nomarkdown} מחלק את {::nomarkdown}\( y_{t}\){:/nomarkdown} אבל {::nomarkdown}\( n\){:/nomarkdown} לא מחלק את {::nomarkdown}\( t\){:/nomarkdown}. אז אפשר לחלק אותם עם שארית, כלומר לכתוב {::nomarkdown}\( t=qn+r\){:/nomarkdown} כאשר {::nomarkdown}\( 0&lt;r&lt;n\){:/nomarkdown} היא השארית. נקבל: {::nomarkdown}\( y_{t}=x_{r}y_{nq}+x_{nq}y_{r}\){:/nomarkdown}. אם {::nomarkdown}\( y_{n}\){:/nomarkdown} מחלק את הביטוי הזה, אז מכיוון שאנו יודעים שהוא מחלק את {::nomarkdown}\( y_{nq}\){:/nomarkdown} נקבל שהוא חייב לחלק את {::nomarkdown}\( x_{nq}y_{r}\){:/nomarkdown}. כעת, {::nomarkdown}\( \left(y_{nq},x_{nq}\right)=1\){:/nomarkdown} ולכן לא ייתכן ש-{::nomarkdown}\( y_{n}\){:/nomarkdown} יחלק את {::nomarkdown}\( x_{nq}\){:/nomarkdown}, אחרת הוא היה גורם משותף שלו ושל {::nomarkdown}\( y_{nq}\){:/nomarkdown}. לכן בהכרח {::nomarkdown}\( y_{n}\){:/nomarkdown} מחלק את {::nomarkdown}\( y_{r}\){:/nomarkdown}, אבל זה בלתי אפשרי כי {::nomarkdown}\( y_{n}&gt;y_{r}\){:/nomarkdown}! סוף הסיפור.

אתם בוודאי תוהים לאן אני חותר עם כל התכונות הללו. המטרה היא למצוא משהו שאפשר לקודד דיופנטית איכשהו ויאפשר לנו לאפיין את הסדרות {::nomarkdown}\( x_{n},y_{n}\){:/nomarkdown} במדויק. הכיוון המבטיח ביותר הוא תכונות של הסדרות הללו מודולו משהו. כזכור, {::nomarkdown}\( a\equiv_{n}b\){:/nomarkdown} פירושו ש-{::nomarkdown}\( n\){:/nomarkdown} מחלק את {::nomarkdown}\( a-b\){:/nomarkdown} (ובמילים אחרות, שהשארית של חלוקת {::nomarkdown}\( a\){:/nomarkdown} ו-{::nomarkdown}\( b\){:/nomarkdown} ב-{::nomarkdown}\( n\){:/nomarkdown} היא זהה). הנה דוגמה ראשונה לתכונת מודולו:

{::nomarkdown}\( y_{nk}\equiv_{y_{n}^{3}}kx_{n}^{k-1}y_{n}\){:/nomarkdown}

טוב, במבט ראשון המשוואה הזו נראית מונפצת לגמרי. איך בכלל הגיעו אליה? התשובה היא שמישהו כנראה ניסה, על מנת להבין את הסדרות {::nomarkdown}\( x_{n},y_{n}\){:/nomarkdown}, לשחק איתן כמה שיותר. הוא כנראה הסתכל על האיבר {::nomarkdown}\( x_{nk}+y_{nk}\sqrt{d}=\left(x_{n}+y_{n}\sqrt{d}\right)^{k}\){:/nomarkdown} ושאל את עצמו - הממ, מה יקרה אם פשוט נפתח את הסוגריים באמצעות הבינום של ניוטון (הדרך ה"רגילה" לפתוח סוגריים שכאלה)? התשובה היא שנקבל:

{::nomarkdown}\( \left(x_{n}+y_{n}\sqrt{d}\right)^{k}=\sum_{i=0}^{k}{k \choose i}x_{n}^{k-i}\left(y_{n}\sqrt{d}\right)^{i}=\sum_{i=0}^{k}{k \choose i}x_{n}^{k-i}y_{n}^{i}d^{\frac{i}{2}}\){:/nomarkdown}

שימו לב ל-{::nomarkdown}\( d^{\frac{i}{2}}\){:/nomarkdown}. עבור הערכים הזוגיים של {::nomarkdown}\( i\){:/nomarkdown} זהו מספר טבעי, ולכן כל הגורם {::nomarkdown}\( {k \choose i}x_{n}^{k-i}y_{n}^{i}d^{\frac{i}{2}}\){:/nomarkdown} יתרום ל-{::nomarkdown}\( x_{nk}\){:/nomarkdown} במקרה הזה. עבור {::nomarkdown}\( i\){:/nomarkdown} אי זוגי נקבל {::nomarkdown}\( \sqrt{d}\){:/nomarkdown} בחזקת משהו אי זוגי, ולכן כל הגורם יתרום ל-{::nomarkdown}\( y_{nk}\sqrt{d}\){:/nomarkdown}. אם נחלק ב-{::nomarkdown}\( \sqrt{d}\){:/nomarkdown} את שני האגפים נקבל שהגורם הזה תורם {::nomarkdown}\( {k \choose i}x_{n}^{k-i}y_{n}^{i}d^{\frac{i-1}{2}}\){:/nomarkdown} ל-{::nomarkdown}\( y_{nk}\){:/nomarkdown}. לכן קיבלנו:

{::nomarkdown}\( y_{nk}=\sum_{\begin{array}{c}i=1\\i\mbox{ odd}\end{array}}^{k}{k \choose i}x_{n}^{k-i}y_{n}^{i}d^{\frac{i-1}{2}}\){:/nomarkdown}

עכשיו משתמשים בתעלול שמשתמשים בו כל הזמן בתורת המספרים (תצטרכו להאמין לי). שמים לב לכך שפרט לאיבר הראשון בסכום, זה שמתקבל עבור {::nomarkdown}\( i=1\){:/nomarkdown}, עבור כל שאר האיברים מתקיים {::nomarkdown}\( i\ge3\){:/nomarkdown} ולכן {::nomarkdown}\( y_{n}^{3}\){:/nomarkdown} מחלק את כולם, ולכן מודולו {::nomarkdown}\( y_{n}^{3}\){:/nomarkdown} הם נעלמים (זו הסיבה שבגללה בוחרים {::nomarkdown}\( y_{n}^{3}\){:/nomarkdown} דווקא - כדי שהמודולוס יהיה גדול יחסית ועדיין יישאר לנו ביטוי פשוט יחסית. לכן נישאר רק עם האיבר הראשון:

{::nomarkdown}\( y_{nk}\equiv_{y_{n}^{3}}{k \choose 1}x_{n}^{k-1}y_{n}=kx_{n}^{k-1}y_{n}\){:/nomarkdown}

פתאום הביטוי הזה כבר לא נראה מפחיד כל כך. לפחות לא בשבילי. כמובן, עדיין לא ברור בשביל מה הוא טוב. אז הנה המסקנה המיידית שלו: מה קורה אם במשוואה שקיבלנו נציב {::nomarkdown}\( k=y_{n}\){:/nomarkdown}? נקבל מייד

{::nomarkdown}\( y_{ny_{n}}\equiv_{y_{n}^{3}}y_{n}x_{n}^{y_{n}-1}y_{n}=y_{n}^{2}x_{n}^{y_{n}-1}\){:/nomarkdown}

שזה אומר, בצורה הכי מפורשת שרק אפשר, ש-{::nomarkdown}\( y_{ny_{n}}-y_{n}^{2}x_{n}^{y_{n}-1}=\alpha\cdot y_{n}^{3}\){:/nomarkdown}, כאשר {::nomarkdown}\( \alpha\){:/nomarkdown} הוא מספר שלם לא מעניין כלשהו. נעביר אגפים, נוציא גורם משותף, ונקבל:

{::nomarkdown}\( y_{ny_{n}}=y_{n}^{2}\left(x_{n}^{y_{n}-1}+\alpha y_{n}\right)\){:/nomarkdown}

כלומר, המסקנה שלנו היא ש-{::nomarkdown}\( y_{n}^{2}\){:/nomarkdown} מחלק את {::nomarkdown}\( y_{ny_{n}}\){:/nomarkdown}. עוד תכונת התחלקות של הסדרה {::nomarkdown}\( y_{n}\){:/nomarkdown}! כמו בתכונת ההתחלקות הקודמת, אנחנו גם רוצים להבין מה קורה בכיוון ההפוך. כלומר, אם {::nomarkdown}\( y_{n}^{2}\){:/nomarkdown} מחלק {::nomarkdown}\( y_{t}\){:/nomarkdown} כלשהו, אז מה אפשר לדעת על {::nomarkdown}\( t\){:/nomarkdown}? במקרה שלנו אפשר להוכיח שבהכרח {::nomarkdown}\( y_{n}\){:/nomarkdown} מחלק את {::nomarkdown}\( t\){:/nomarkdown}. למה? טוב, ראשית, אם {::nomarkdown}\( y_{n}^{2}\){:/nomarkdown} מחלק את {::nomarkdown}\( y_{t}\){:/nomarkdown} אז בוודאי שגם {::nomarkdown}\( y_{n}\){:/nomarkdown} מחלק אותו, וכבר ראינו שזה גורר ש-{::nomarkdown}\( n\){:/nomarkdown} מחלק את {::nomarkdown}\( t\){:/nomarkdown}, כלומר אפשר לכתוב {::nomarkdown}\( t=nk\){:/nomarkdown}. עכשיו, {::nomarkdown}\( y_{t}=y_{nk}\equiv_{y_{n}^{3}}kx_{n}^{k-1}y_{n}\){:/nomarkdown}, ולכן בגלל ש-{::nomarkdown}\( y_{n}^{2}\){:/nomarkdown} מחלק את {::nomarkdown}\( y_{t}\){:/nomarkdown} נקבל שהוא מחלק גם את {::nomarkdown}\( kx_{n}^{k-1}y_{n}\){:/nomarkdown}, כלומר {::nomarkdown}\( y_{n}\){:/nomarkdown} מחלק את {::nomarkdown}\( kx_{n}^{k-1}\){:/nomarkdown}. כמו כן, {::nomarkdown}\( \left(y_{n},x_{n}\right)=1\){:/nomarkdown} ולכן {::nomarkdown}\( y_{n}\){:/nomarkdown} מחלק את {::nomarkdown}\( k\){:/nomarkdown}, אבל {::nomarkdown}\( t=nk\){:/nomarkdown} ולכן {::nomarkdown}\( y_{n}\){:/nomarkdown} מחלק את {::nomarkdown}\( t\){:/nomarkdown} - סיימנו.

לעצור. לנשום עמוק. אני כרגע יכול לראות רק "מחלק... מחלק... מחלק..." בכל מקום. זה לא שמשהו עד כה היה מסובך במיוחד אבל זה ים של פרטים שלא ברור עדיין לאן הם מובילים. קצת סבלנות ונגיע.

בואו נעבור לדבר עכשיו על משהו קצת שונה שקשור לסדרות {::nomarkdown}\( x_{n},y_{n}\){:/nomarkdown} - אפשר להציג אותן גם באמצעות נוסחת נסיגה. בפרט:

{::nomarkdown}\( x_{n+1}=2ax_{n}-x_{n-1}\){:/nomarkdown}

{::nomarkdown}\( y_{n+1}=2ay_{n}-y_{n-1}\){:/nomarkdown}

ההוכחה כמעט מיידית באמצעות הנוסחאות שלנו ל-{::nomarkdown}\( x_{n\pm m}\){:/nomarkdown} ו-{::nomarkdown}\( y_{n\pm m}\){:/nomarkdown} ואתם מוזמנים לנסות ולמצוא אותה בעצמכם.

מה שנחמד בנוסחאות הנסיגה הללו הוא שהן מאפשרות להוכיח טענות על הסדרות {::nomarkdown}\( x_{n},y_{n}\){:/nomarkdown} אינדוקטיבית. למשל, בואו נוכיח ש-{::nomarkdown}\( y_{n}\equiv_{a-1}n\){:/nomarkdown}: ראשית כל בודקים ישירות שזה מתקיים עבור {::nomarkdown}\( n=0,1\){:/nomarkdown}, ושנית:

{::nomarkdown}\( y_{n+1}=2ay_{n}-y_{n-1}\equiv_{a-1}2n-\left(n-1\right)=n+1\){:/nomarkdown} (השתמשתי כאן בכך ש-{::nomarkdown}\( a\equiv_{a-1}1\){:/nomarkdown})

כמו כן, וזה כבר מעניין למדי, אם {::nomarkdown}\( a\equiv_{c}b\){:/nomarkdown} אז לכל {::nomarkdown}\( n\){:/nomarkdown} מתקיים ש-{::nomarkdown}\( x_{n}\left(a\right)\equiv_{c}x_{n}\left(b\right)\){:/nomarkdown} ו-{::nomarkdown}\( y_{n}\left(a\right)\equiv_{c}y_{n}\left(b\right)\){:/nomarkdown}. גם ההוכחה פה היא מיידית מתוך נוסחת הנסיגה, כאשר המקרים {::nomarkdown}\( n=0,1\){:/nomarkdown}טריוויאליים (מבחן - היכן אנו משתמשים שם בכך ש-{::nomarkdown}\( a\equiv_{c}b\){:/nomarkdown}?). בכל הנוגע לצעד:

{::nomarkdown}\( y_{n+1}\left(a\right)=2ay_{n}\left(a\right)-y_{n-1}\left(a\right)\equiv_{c}2by_{n}\left(b\right)-y_{n-1}\left(b\right)=y_{n+1}\left(b\right)\){:/nomarkdown}

ואותו דבר בדיוק עבור {::nomarkdown}\( x_{n}\){:/nomarkdown}.

עוד שעשוע הוא להיווכח בכך ש-{::nomarkdown}\( y_{n}\){:/nomarkdown} הוא זוגי עבור {::nomarkdown}\( n\){:/nomarkdown} זוגי, ואי זוגי עבור {::nomarkdown}\( n\){:/nomarkdown} אי זוגי. את זה אפשר להסיק מהסתכלות על נוסחת הנסיגה מודולו 2:

{::nomarkdown}\( y_{n+1}=2ay_{n}-y_{n-1}\equiv_{2}y_{n-1}\){:/nomarkdown}

ובגלל ש-{::nomarkdown}\( y_{0}\){:/nomarkdown} זוגי ו-{::nomarkdown}\( y_{1}\){:/nomarkdown} אי זוגי התוצאה נובעת.

רוצים עוד משהו? לא? ובכן, אין לכם ברירה. התוצאה הבאה היא באמת משהו שנראה הזוי לחלוטין ממבט ראשון ולא ברור מאיפה זה הגיע (ועד לשלב מתקדם יותר גם לא נבין מה עושים עם זה):

{::nomarkdown}\( x_{n}\left(a\right)-y_{n}\left(a\right)\left(a-y\right)\equiv_{2ay-y^{2}-1}y^{n}\){:/nomarkdown}

מי זה {::nomarkdown}\( y\){:/nomarkdown}? מספר כלשהו. אז למה דווקא לסמן אותו ב-{::nomarkdown}\( y\){:/nomarkdown}? כדי לדבוק בסימונים של דיוויס.

ההוכחה, כרגיל, דורשת קודם כל לבדוק את המקרה של {::nomarkdown}\( n=0,1\){:/nomarkdown}. בואו נעשה את זה במפורש הפעם:

{::nomarkdown}\( x_{0}\left(a\right)-y_{0}\left(a\right)\left(a-y\right)=1-0\left(a-y\right)=1\equiv_{2ay-y^{2}-1}y^{0}\){:/nomarkdown}

{::nomarkdown}\( x_{1}\left(a\right)-y_{1}\left(a\right)\left(a-y\right)=a-1\left(a-y\right)=y\equiv_{2ay-y^{2}-1}y^{1}\){:/nomarkdown}

ועכשיו נמשיך אינדוקטיבית:

{::nomarkdown}\( x_{n+1}\left(a\right)-y_{n+1}\left(a\right)\left(a-y\right)=2a\left[x_{n}\left(a\right)-y_{n}\left(a-y\right)\right]-\left[x_{n-1}\left(a\right)-y_{n-1}\left(a-y\right)\right]\equiv_{2ay-y^{2}-1}2ay^{n}-y^{n-1}\){:/nomarkdown}

עוד לא סיימנו:

{::nomarkdown}\( 2ay^{n}-y^{n-1}=y^{n-1}\left(2ay-1\right)\equiv_{2ay-y^{2}-1}y^{n-1}y^{2}=y^{n+1}\){:/nomarkdown}

לב העניין כאן הוא המעבר {::nomarkdown}\( \left(2ay-1\right)\equiv_{2ay-y^{2}-1}y^{2}\){:/nomarkdown} - ודאו שאתם מבינים למה הוא נכון.

עכשיו בואו נבין משהו על קצב הגידול של {::nomarkdown}\( x_{n},y_{n}\){:/nomarkdown}. נתחיל מ-{::nomarkdown}\( y_{n}\){:/nomarkdown}. כזכור, {::nomarkdown}\( y_{n+1}=y_{n}x_{1}+y_{1}x_{n}=ay_{n}+x_{n}\){:/nomarkdown}, ולכן {::nomarkdown}\( y_{n+1}&gt;ay_{n}\){:/nomarkdown} - בפרט אפשר להסיק ש-{::nomarkdown}\( y_{n}\){:/nomarkdown} חיובי לכל {::nomarkdown}\( n\){:/nomarkdown} (לא נצטרך יותר מזה).

בכל הנוגע ל-{::nomarkdown}\( x_{n}\){:/nomarkdown}, יש לנו את הנוסחה {::nomarkdown}\( x_{n+1}=x_{n}x_{1}+dy_{n}y_{1}=ax_{n}+dy_{n}\){:/nomarkdown}. אז {::nomarkdown}\( x_{n+1}&gt;ax_{n}\){:/nomarkdown} לכל {::nomarkdown}\( n\){:/nomarkdown}, ולכן אפשר להראות באינדוקציה ש-{::nomarkdown}\( x_{n}\ge a^{n}\){:/nomarkdown}, כלומר הסדרה גדלה בקצב שהוא לפחות אקספוננציאלי. זה חסם מלמטה, אבל האם אפשר לחסום גם מלמעלה? ובכן, בקלות, עם נוסחת הנסיגה של {::nomarkdown}\( x_{n}\){:/nomarkdown}: {::nomarkdown}\( x_{n+1}=2ax_{n}-x_{n-1}\le2ax_{n}\){:/nomarkdown} ולכן {::nomarkdown}\( x_{n}\le\left(2a\right)^{n}\){:/nomarkdown}.

עוד טיפה וסיימנו. התכונה הבאה נראית מוזר למדי במבט ראשון:

{::nomarkdown}\( x_{2n\pm i}\equiv_{x_{n}}-x_{i}\){:/nomarkdown}

אין כאן יותר מאשר שימוש בהגדרה:

{::nomarkdown}\( x_{2n\pm i}=x_{n}x_{n\pm i}+dy_{n}y_{n\pm i}\equiv_{x_{n}}dy_{n}\left(y_{n}x_{i}\pm x_{n}y_{i}\right)\equiv_{x_{n}}dy_{n}^{2}x_{i}=\left(x_{n}^{2}-1\right)x_{i}\equiv_{x_{n}}-1\){:/nomarkdown}

כאן השתמשנו בכך ש-{::nomarkdown}\( x_{n}^{2}-dy_{n}^{2}=1\){:/nomarkdown}, ולכן {::nomarkdown}\( dy_{n}^{2}=x_{n}^{2}-1\){:/nomarkdown}.

מסקנה מיידית היא ש-{::nomarkdown}\( x_{4n\pm i}\equiv_{x_{n}}x_{i}\){:/nomarkdown}, כי {::nomarkdown}\( x_{4n\pm i}=x_{2n+\left(2n\pm i\right)}\equiv_{x_{n}}-x_{2n\pm i}\equiv_{x_{n}}x_{i}\){:/nomarkdown}.

עכשיו לתוצאה שההוכחה שלה תהיה טיפה יותר ארוכה, אבל כבר נראית די מעניינת: אם {::nomarkdown}\( x_{i}\equiv_{x_{n}}x_{j}\){:/nomarkdown} כך ש-{::nomarkdown}\( i\le j\le2n\){:/nomarkdown} ו-{::nomarkdown}\( n&gt;0\){:/nomarkdown} אז {::nomarkdown}\( i=j\){:/nomarkdown} למעט המקרה {::nomarkdown}\( a=2,n=1,i=0,j=2\){:/nomarkdown}. זה מעניין כי זה מראה שאפשר לזהות בצורה ייחודית, בערך, איברים ב-{::nomarkdown}\( x_{n}\left(a\right)\){:/nomarkdown} על פי תכונות התחלקות שלהם, וזה משהו שאפשר לקודד דיופנטית, בערך.

בדרך כלל כשמדברים על חישובים מודולו {::nomarkdown}\( n\){:/nomarkdown} (ל-{::nomarkdown}\( n\){:/nomarkdown} כלשהו) אנו מסתכלים על הקבוצה {::nomarkdown}\( \left\{ 0,1,2,\dots,n-1\right\} \){:/nomarkdown} ועושים בה את החשבון. אבל בתיאוריה יכלנו לעבוד גם עם הקבוצה {::nomarkdown}\( \left\{ -1,0,\dots,n-2\right\} \){:/nomarkdown} או עם הרבה קבוצות אחרות - העיקר הוא רק למצוא קבוצה שבה אין שני מספרים ששקולים מודולו {::nomarkdown}\( n\){:/nomarkdown}, ויש נציג לכל מחלקת שקילות מודולו {::nomarkdown}\( n\){:/nomarkdown} (בניסוח פשוט, לכל מספר בין {::nomarkdown}\( 0\){:/nomarkdown} ל-{::nomarkdown}\( n-1\){:/nomarkdown} יש בקבוצה איבר ששקול לו מודולו {::nomarkdown}\( n\){:/nomarkdown}). בתורת המספרים לעתים מאוד נוח לעבוד עם קבוצת נציגים שאיננה {::nomarkdown}\( \left\{ 0,1,\dots,n-1\right\} \){:/nomarkdown} אלא כוללת בחציה מספרים שליליים, כאילו הזזנו את הקבוצה {::nomarkdown}\( \left\{ 0,1,\dots,n-1\right\} \){:/nomarkdown} מרחק של חצי {::nomarkdown}\( n\){:/nomarkdown} בערך. כאשר {::nomarkdown}\( n\){:/nomarkdown} אי זוגי אין כזה דבר, "חצי {::nomarkdown}\( n\){:/nomarkdown}", אבל אפשר לדבר על המספר {::nomarkdown}\( q=\frac{n-1}{2}\){:/nomarkdown} שהוא מספר שלם, ואז להתבונן על קבוצת הנציגים {::nomarkdown}\( \left\{ -q,-q+1,\dots,-1,0,1,\dots,q\right\} \){:/nomarkdown} שכוללת בדיוק {::nomarkdown}\( q\){:/nomarkdown} מספרים חיוביים, {::nomarkdown}\( q\){:/nomarkdown} מספרים שליליים ואת {::nomarkdown}\( 0\){:/nomarkdown}, כלומר {::nomarkdown}\( 2q+1=n\){:/nomarkdown} מספרים, ומכיוון שהם כולם ברצף ההפרש בין אף זוג שלהם לא יכול להתחלק ב-{::nomarkdown}\( n\){:/nomarkdown} (ההפרש המקסימלי הוא {::nomarkdown}\( q-\left(-q\right)=2q=n-1\){:/nomarkdown}). כלומר, זו אכן קבוצת נציגים לגיטימית. כפי שאמרתי, לעתים נוח יותר לעבוד עם הקבוצה הזו וכך גם נעשה עכשיו.

אז בואו נניח ש-{::nomarkdown}\( x_{n}\){:/nomarkdown} הוא אי זוגי וניקח את אוסף השאריות מ-{::nomarkdown}\( -q\){:/nomarkdown} עד {::nomarkdown}\( q\){:/nomarkdown} כאשר {::nomarkdown}\( q=\frac{x_{n}-1}{2}\){:/nomarkdown}. עכשיו, בואו נסתכל לרגע במספרים {::nomarkdown}\( x_{0},x_{1},x_{2},\dots,x_{n-1}\){:/nomarkdown}. ראשית, יש בדיוק {::nomarkdown}\( n\){:/nomarkdown} כאלו. שנית, זו סדרה עולה: {::nomarkdown}\( 1=x_{0}&lt;x_{1}&lt;x_{2}&lt;\dots&lt;x_{n-1}&lt;x_{n}\){:/nomarkdown} וזאת בגלל נוסחת הנסיגה שמגדירה את ה-{::nomarkdown}\( x_{n}\){:/nomarkdown}-ים. זה בפרט אומר שכל ה-{::nomarkdown}\( x_{i}\){:/nomarkdown}-ים הללו שונים זה מזה מודולו {::nomarkdown}\( x_{n}\){:/nomarkdown} (למה?). כעת, אפשר לחסום את הגודל של האיבר המקסימלי בסדרה: אנחנו יודעים ש-{::nomarkdown}\( x_{n}=ax_{n-1}+dy_{n-1}\ge ax_{n-1}\){:/nomarkdown} ולכן {::nomarkdown}\( x_{n-1}\le\frac{x_{n}}{a}\le\frac{x_{n}}{2}\){:/nomarkdown}. נובע מזה ש-{::nomarkdown}\( x_{n-1}\le q\){:/nomarkdown} (כי {::nomarkdown}\( x_{n-1}\){:/nomarkdown} הוא שלם ואילו {::nomarkdown}\( q\){:/nomarkdown} הוא הערך השלם התחתון של {::nomarkdown}\( \frac{x_{n}}{2}\){:/nomarkdown}). במילים אחרות, ה-{::nomarkdown}\( x_{i}\){:/nomarkdown}-ים מתאימים <strong>לשאריות חיוביות</strong> בתוך הקבוצה {::nomarkdown}\( \left\{ -q,-q+1,\dots,-1,0,1,\dots,q\right\} \){:/nomarkdown}.

בואו נסתכל עכשיו על המספרים ש<strong>מעבר</strong> ל-{::nomarkdown}\( x_{n}\){:/nomarkdown}: {::nomarkdown}\( x_{n+1},x_{n+2},\dots,x_{2n}\){:/nomarkdown}. לפני רגע ראינו את התכונה {::nomarkdown}\( x_{2n\pm i}\equiv_{x_{n}}-x_{i}\){:/nomarkdown} ועכשיו היא תועיל לנו: היא אומרת שהסדרה {::nomarkdown}\( x_{n+1},x_{n+2},\dots,x_{2n}\){:/nomarkdown} שקולה מודולו {::nomarkdown}\( x_{n}\){:/nomarkdown} לסדרה {::nomarkdown}\( -x_{n-1},-x_{n-2},\dots,-x_{0}\){:/nomarkdown}. מכיוון שה-{::nomarkdown}\( x_{i}\){:/nomarkdown}-ים התאימו לשאריות חיוביות, זה אומר שה-{::nomarkdown}\( x_{n+i}\){:/nomarkdown}-ים מתאימים לשאריות <strong>שליליות</strong> בתוך הקבוצה {::nomarkdown}\( \left\{ -q,-q+1,\dots,-1,0,1,\dots,q\right\} \){:/nomarkdown}. השאריות החיוביות והשליליות בקבוצה לא שקולות זו לזו, ולכן קיבלנו שכל ה-{::nomarkdown}\( x_{i}\){:/nomarkdown}-ים עד {::nomarkdown}\( i\le2n\){:/nomarkdown} לא שקולים האחד לשני (אם אתם עדיין לא משוכנעים נסו להשלים את ההוכחה).

זה טיפל רק במקרה שבו {::nomarkdown}\( x_{n}\){:/nomarkdown} אי זוגי. אם הוא זוגי אז נסמן {::nomarkdown}\( q=\frac{x_{n}}{2}\){:/nomarkdown} ואוסף השאריות יהיה הפעם {::nomarkdown}\( \left\{ -q+1,-q+1,\dots,-1,0,1,\dots,q\right\} \){:/nomarkdown}, כלומר הקצה השמאלי הוא לא {::nomarkdown}\( -q\){:/nomarkdown} אלא מספר שגדול ממנו ב-1. מתי זה יכול להפריע להוכחה שלעיל? רק אם איכשהו הסדרה {::nomarkdown}\( x_{i}\){:/nomarkdown} מגיעה אל {::nomarkdown}\( q\){:/nomarkdown}, והיא יכולה להגיע רק באיבר האחרון שלה, כלומר {::nomarkdown}\( x_{n-1}=q=\frac{x_{n}}{2}\){:/nomarkdown}. זה מקרה קצה, אבל זה עשוי להתרחש. אם זה התרחש, בואו נראה מה נוסחת הנסיגה של {::nomarkdown}\( x_{n}\){:/nomarkdown} אומרת לנו:

{::nomarkdown}\( x_{n}=ax_{n-1}+dy_{n-1}=a\frac{x_{n}}{2}+dy_{n-1}\){:/nomarkdown}

מתי זה יכול לקרות? מכיוון ש-{::nomarkdown}\( a\ge2\){:/nomarkdown}, הדרך היחידה שבה נוכל לקבל שוויון היא אם {::nomarkdown}\( a=2\){:/nomarkdown} (אחרת {::nomarkdown}\( a\frac{x_{n}}{2}+dy_{n-1}&gt;x_{n}\){:/nomarkdown}), ובמקרה זה בהכרח {::nomarkdown}\( y_{n-1}=0\){:/nomarkdown}, אבל זה קורה רק עבור {::nomarkdown}\( n=1\){:/nomarkdown}. הנה הוכחנו שאנחנו במקרה הפרטי היחיד שסייגנו החוצה מראש בניסוח המשפט.

יפה, הוכחנו את המשפט, בואו נרחיב אותו טיפה ונראה שאם {::nomarkdown}\( x_{i}\equiv_{x_{n}}x_{j}\){:/nomarkdown} תוך שאנו מאלצים את {::nomarkdown}\( i\){:/nomarkdown} להיות קטן יותר - {::nomarkdown}\( 0&lt;i\le n\){:/nomarkdown} אבל מרשים ל-{::nomarkdown}\( j\){:/nomarkdown} להיות גדול יותר - {::nomarkdown}\( 0\le j&lt;4n\){:/nomarkdown}, אז או ש-{::nomarkdown}\( j=i\){:/nomarkdown} כמקודם או ש-{::nomarkdown}\( j=4n-i\){:/nomarkdown}. ההוכחה פשוטה: אם {::nomarkdown}\( j\le2n\){:/nomarkdown} פשוט נשתמש במשפט שזה עתה הוכחנו. יש את ה"סכנה" שאנחנו במקרה היוצא מן הכלל, אבל אז {::nomarkdown}\( j=0\){:/nomarkdown} (כי אסרנו על {::nomarkdown}\( i\){:/nomarkdown} להיות 0) וזה מוביל לסתירה כי אז {::nomarkdown}\( i=2&gt;1=n\){:/nomarkdown}. בקיצור, החריג ההוא לא ממש רלוונטי במקרה הזה.

במקרה השני {::nomarkdown}\( j&gt;2n\){:/nomarkdown}. נסמן {::nomarkdown}\( t=4n-j\){:/nomarkdown}, אז {::nomarkdown}\( 0&lt;t&lt;2n\){:/nomarkdown}. כעת, זוכרים שהוכחנו מתישהו ש-{::nomarkdown}\( x_{4n\pm j}\equiv_{x_{n}}x_{j}\){:/nomarkdown}? זה נותן לנו עכשיו ש-{::nomarkdown}\( x_{t}\equiv_{x_{n}}x_{j}\equiv x_{i}\){:/nomarkdown} ולכן שוב, מהמשפט שזה עתה הוכחנו, {::nomarkdown}\( t=i\){:/nomarkdown} (ולמה החריג למשפט לא יכול להתקיים כעת?)

רק עוד דבר אחד וסיימנו: נניח ש-{::nomarkdown}\( 0&lt;i\le n\){:/nomarkdown} ומתקיים {::nomarkdown}\( x_{i}\equiv_{x_{n}}x_{j}\){:/nomarkdown}, בלי שום הנחות על {::nomarkdown}\( j\){:/nomarkdown}. מה נוכל לומר עליו? ובכן, בואו ננסה לחלק אותו ב-{::nomarkdown}\( 4n\){:/nomarkdown}, כלומר נרשום אותו בצורה {::nomarkdown}\( j=4nt+r\){:/nomarkdown} כאשר {::nomarkdown}\( 0\le r&lt;4n\){:/nomarkdown}. עכשיו, זכרו שוב ש-{::nomarkdown}\( x_{4n\pm k}\equiv_{x_{n}}x_{k}\){:/nomarkdown} ושאפשר לכתוב {::nomarkdown}\( 4nt+r=4n+\left(4n\left(t-1\right)+r\right)\){:/nomarkdown}, ולכן {::nomarkdown}\( x_{j}=x_{4nt+r}\equiv_{x_{n}}x_{4n\left(t-1\right)+r}\){:/nomarkdown}. אפשר להמשיך עם זה ולקבל בסופו של דבר {::nomarkdown}\( x_{j}\equiv_{x_{n}}x_{r}\){:/nomarkdown}, ולכן {::nomarkdown}\( x_{r}\equiv_{x_{n}}x_{i}\){:/nomarkdown}. עכשיו {::nomarkdown}\( 0\le r&lt;4n\){:/nomarkdown} ולכן אפשר להשתמש במשפט הקודם עליו ולקבל {::nomarkdown}\( i=r\){:/nomarkdown} או {::nomarkdown}\( i=4n-r\){:/nomarkdown}. משני המקרים הללו נקבל ש-{::nomarkdown}\( j\equiv_{4n}r\equiv_{4n}\pm i\){:/nomarkdown} (אחד משניהם, לא שניהם גם יחד!).

זהו. זה היה מייגע ביותר, אבל עכשיו קיבלנו די והותר כלי נשק להתמודדות עם שאלת הדיופנטיות של {::nomarkdown}\( \left(x_{n},y_{n}\right)\){:/nomarkdown} בפרט, ושל הפונקציה האקספוננציאלית בכלל. בפוסט הבא זה גם יקרה בפועל.
