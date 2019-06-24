---
id: 2292
title: "הבעיה העשירית של הילברט - נקמתן של הפונקציות הרקורסיביות והדיופנטיות"
date: 2013-01-01 23:10:26
layout: post
categories: 
  - תורת המספרים
tags: 
  - הבעיה העשירית של הילברט
---
בפוסטים הקודמים בסדרה <a href="http://www.gadial.net/2012/11/12/hilbert_tenth_exponential_function/">עבדנו קשה</a> כדי להוכיח שהפונקציה האקספוננציאלית היא דיופנטית. הצלחנו בזה סוף סוף ועכשיו אפשר לשכוח מהעניין לבינתיים ולנסות להיזכר מה בעצם אנחנו מנסים להוכיח, ומה האסטרטגיה הכללית שלנו.

כזכור, פונקציה דיופנטית היא פונקציה {::nomarkdown}\( f\left(x_{1},\dots,x_{n}\right)\){:/nomarkdown} כך שקיימת מערכת משוואות דיופנטיות עם המשתנים {::nomarkdown}\( x_{1},\dots,x_{n},y,z_{1},\dots,z_{n}\){:/nomarkdown} בעלת התכונה הבאה: אם אנו מציבים ערכים {::nomarkdown}\( a_{1},\dots,a_{n}\){:/nomarkdown} ב-{::nomarkdown}\( x\){:/nomarkdown}-ים ו-{::nomarkdown}\( b\){:/nomarkdown} ב-{::nomarkdown}\( y\){:/nomarkdown}, אז למה שנשאר ממערכת המשוואות (שכעת היא רק עם המשתנים {::nomarkdown}\( z_{1},\dots,z_{n}\){:/nomarkdown}) קיים פתרון אם ורק אם {::nomarkdown}\( b=f\left(a_{1},\dots,a_{n}\right)\){:/nomarkdown}. כאן "משוואה דיופנטית" היא משוואה פולינומית עם מקדמים חיוביים שהפתרונות שלה גם הם חייבים להיות חיוביים.

הבעיה העשירית של הילברט היא זו: בהינתן משוואה דיופנטית, לקבוע האם קיים לה פתרון או לא. איך זה קשור לפונקציות דיופנטיות? בצורה הבאה: נניח שהצלחנו לפתור את הבעיה העשירית של הילברט; אז אם {::nomarkdown}\( f\){:/nomarkdown} היא פונקציה דיופנטית ואנחנו רוצים לדעת אם {::nomarkdown}\( f\left(a_{1},\dots,a_{n}\right)=b\){:/nomarkdown}, כל מה שאנחנו צריכים לעשות הוא לקחת את מערכת המשוואות שמראה ש-{::nomarkdown}\( f\){:/nomarkdown} היא דיופנטית, להציב במשתנים המתאימים בה את {::nomarkdown}\( a_{1},\dots,a_{n},b\){:/nomarkdown}, ואז לקחת את האלגוריתם שפותר את הבעיה העשירית של הילברט ולהפעיל אותו על המשוואה שקיבלנו. אם יש פתרון, אז {::nomarkdown}\( f\left(a_{1},\dots,a_{n}\right)=b\){:/nomarkdown}; ואם אין פתרון, אז {::nomarkdown}\( f\left(a_{1},\dots,a_{n}\right)\ne b\){:/nomarkdown}.

בואו ניקח את זה צעד אחד קדימה: נניח שכל מה שנתון לנו הם רק {::nomarkdown}\( a_{1},\dots,a_{n}\){:/nomarkdown} ומבקשים מאיתנו <strong>לחשב</strong> את {::nomarkdown}\( f\left(a_{1},\dots,a_{n}\right)\){:/nomarkdown} או אפילו סתם לדעת אם {::nomarkdown}\( f\){:/nomarkdown} מוגדרת על הקלט הזה. באופן כללי זו יכולה להיות בעיה קשה למדי, אבל לא אם יש לנו פתרון לבעיה העשירית של הילברט: במקרה זה פשוט נציב את {::nomarkdown}\( a_{1},\dots,a_{n}\){:/nomarkdown} במשוואות ונראה אם יש לנו פתרון. אם אין פתרון, אז {::nomarkdown}\( f\left(a_{1},\dots,a_{n}\right)\){:/nomarkdown} אינו מוגדר, ואילו אם יש פתרון אז ניקח את הערך שהוצב במשתנה {::nomarkdown}\( y\){:/nomarkdown} במשוואות: הערך הזה יהיה {::nomarkdown}\( b\){:/nomarkdown} שמקיים {::nomarkdown}\( b=f\left(a_{1},\dots,a_{n}\right)\){:/nomarkdown}.

עכשיו, בואו נכניס לתמונה שחקן חדש שתמיד כדאי להכיר: <a href="http://www.gadial.net/2007/09/26/halting_problem/">בעיית העצירה</a>. בניסוח לא פורמלי שיספיק לנו כאן, בעיית העצירה היא זו - נותנים לכם קוד של תוכנית מחשב בשפת C, ושואלים אם תוכנית המחשב הזו מסיימת אי פעם את ריצה (אנו מניחים שאין עליה מגבלות זמן וזכרון כמו שיש על תוכניות שרצות על מחשבים אמיתיים). על פניו לא בעיה נוראית, אבל אלן טיורינג הוכיח ש<strong>אין אלגוריתם</strong> שפותר את הבעיה הזו. עם זאת, הבעיה היא כן "חצי פתירה" במובן הבא: אם התוכנית עוצרת מתישהו תמיד נוכל לגלות את זה אם נריץ אותה מספיק זמן; ולכן יש לנו בעיה לענות נכון רק אם התוכנית לא עוצרת אף פעם (כי מתי אנחנו יכולים להפסיק את הבדיקה ולהחליט בודאות גמורה שהתוכנית לא תעצור אף פעם?). בהתאם לתכונה הזו אפשר להגדיר פונקציה {::nomarkdown}\( f\){:/nomarkdown} שמקבלת כקלט תוכנית מחשב בשפת C, ופולטת את מספר הצעדים שהתוכנית מבצעת עד שהיא עוצרת, ואילו אם התוכנית לא עוצרת אז {::nomarkdown}\( f\){:/nomarkdown} לא מוגדרת עליה.

נניח שבאורח קסום כלשהו {::nomarkdown}\( f\){:/nomarkdown} הייתה דיופנטית והבעיה העשירית של הילברט הייתה פתירה, אז היינו פותרים את בעיית העצירה כך: בהינתן תוכנית מחשב שמקודדת על ידי ערכים {::nomarkdown}\( a_{1},\dots,a_{a}\){:/nomarkdown} ש-{::nomarkdown}\( f\){:/nomarkdown} מקבלת נציב את {::nomarkdown}\( a_{1},\dots,a_{n}\){:/nomarkdown} במשוואה הדיופנטית שמתאימה ל-{::nomarkdown}\( f\){:/nomarkdown}, נפעיל את האלגוריתם שפותר את הבעיה העשירית של הילברט על המשוואה שהתקבלה, ואם אין לה פתרון נכריז שהתוכנית לא עוצרת, ואחרת נכריז שהתוכנית כן עוצרת. פשוט ביותר.

אם כן, כדי להוכיח שהבעיה העשירית של הילברט אינה פתירה, די לי להוכיח שהפונקציה {::nomarkdown}\( f\){:/nomarkdown} שהגדרתי היא דיופנטית. מה שעשו בפועל היה הרבה יותר מכך - הוכיחו שכל פונקציה <strong>ניתנת לחישוב</strong> היא דיופנטית. מהי פונקציה ניתנת לחישוב? פונקציה {::nomarkdown}\( f\){:/nomarkdown} שקיים אלגוריתם שעל כל קלט {::nomarkdown}\( x\){:/nomarkdown} <strong>עבורו היא מוגדרת</strong> מחשבת את {::nomarkdown}\( f\left(x\right)\){:/nomarkdown}, ואילו על קלטים שעבורם {::nomarkdown}\( f\){:/nomarkdown} לא מוגדרת האלגוריתם פשוט לא עוצר. אם כן, זה היעד שלנו וזה מה שמחסל את הבעיה העשירית של הילברט: הטענה "אם פונקציה היא ניתנת לחישוב, אז היא דיופנטית".

הבעיה היא ש"ניתנת לחישוב" הוא מושג די מופשט. צריך להיסגר על פורמליזם קונקרטי של חישוב ולעבוד איתו. אפשר היה ללכת לפורמליזם הסטנדרטי בתורת החישוביות: "מכונת טיורינג". רק שאנחנו לא עושים זאת, כי יש פורמליזם אחר, שקול, שהרבה יותר דומה למה שאנחנו מנסים לעשות עם פונקציות דיופנטית ואיתו העבודה שלנו תהיה קלה בהרבה: המודל של <strong>פונקציות רקורסיביות</strong>. כבר הזכרתי אותן <a href="http://www.gadial.net/2012/09/04/hilbert_tenth_diophantic_functions/">בפוסט השני</a> בסדרת הפוסטים הנוכחית ותיארתי את תחילת ההוכחה לשקילות שלהן ושל הפונקציות הדיופנטיות. מה שנשאר היה רק ליצור "שפה" דמוית לוגיקה שבעזרתה אפשר לבנות פונקציות דיופנטיות מורכבות וזאת כדי להוכיח שכללי הבניה של הפונקציות הרקורסיביות, כשמפעילים אותם על פונקציות דיופנטיות, מחזירים פונקציות דיופנטיות. בואו נתחיל, בזהירות, ליצור את ה"שפה" הזו. פורמלית, אני מגדיר קבוצה של איברים שאני קורא להם ברישול מה "ביטויים דיופנטיים".

ראשית, כל משוואה דיופנטית היא כמובן ביטוי דיופנטי לגיטימי בשפה שלנו. משוואה דיופנטית היא משהו מהצורה {::nomarkdown}\( p\left(x_{1},\dots,x_{n}\right)=0\){:/nomarkdown} כאשר {::nomarkdown}\( x_{1},\dots,x_{n}\){:/nomarkdown} הם משתנים כלשהם ו-{::nomarkdown}\( p\){:/nomarkdown} הוא פולינום. אפשר להכליל את זה קצת ולדבר על משוואות מהצורה {::nomarkdown}\( p\left(x_{1},\dots,x_{n}\right)=q\left(x_{1},\dots,x_{n}\right)\){:/nomarkdown} כאשר {::nomarkdown}\( q\){:/nomarkdown} גם הוא פולינום (גם 0 הוא פולינום חוקי מבחינתנו). המשוואה הדיופנטית שמייצגת את הביטוי {::nomarkdown}\( p\left(x_{1},\dots,x_{n}\right)=q\left(x_{1},\dots,x_{n}\right)\){:/nomarkdown} היא פשוט {::nomarkdown}\( p\left(x_{1},\dots,x_{n}\right)-q\left(x_{1},\dots,x_{n}\right)=0\){:/nomarkdown} (כלומר, הפולינום {::nomarkdown}\( p-q\){:/nomarkdown} מייצג את הביטוי הזה).

כעת, אם {::nomarkdown}\( P,Q\){:/nomarkdown} הם שני ביטויים דיופנטיים שמיוצגים על ידי הפולינומים {::nomarkdown}\( p,q\){:/nomarkdown} בהתאמה, גם {::nomarkdown}\( P\wedge Q\){:/nomarkdown} הוא ביטוי דיופנטי שמיוצג על ידי הפולינום {::nomarkdown}\( p^{2}+q^{2}\){:/nomarkdown} (שמתאפס אם ורק אם {::nomarkdown}\( p,q\){:/nomarkdown} מתאפסים בו זמנית). עד כאן - הכל קל.

עכשיו, נניח ש-{::nomarkdown}\( f\left(x_{1},\dots,x_{n}\right)\){:/nomarkdown} היא פונקציה שכבר הוכחנו שהיא דיופנטית ואנחנו רוצים להשתמש בה בביטוי שלנו. מה זה אומר ש-{::nomarkdown}\( f\){:/nomarkdown} דיופנטית? כפי שאמרנו בתחילת הפוסט, שיש פולינום {::nomarkdown}\( p_{f}\left(x_{1},\dots,x_{n},y,z_{1},\dots,z_{m}\right)\){:/nomarkdown} כך שלערכים נתונים של {::nomarkdown}\( x_{1},\dots,x_{n}\){:/nomarkdown} ו-{::nomarkdown}\( y\){:/nomarkdown}, המשוואה {::nomarkdown}\( p_{f}=0\){:/nomarkdown} (במשתנים שנותרו, {::nomarkdown}\( z_{1},\dots,z_{m}\){:/nomarkdown} פתירה אם ורק אם {::nomarkdown}\( f\left(x_{1},\dots,x_{n}\right)=y\){:/nomarkdown}. אם כן, אפשר להשתמש בביטוי הדיופנטי {::nomarkdown}\( y=f\left(x_{n},\dots,x_{n}\right)\){:/nomarkdown} בתור קיצור ל-{::nomarkdown}\( p_{f}=0\){:/nomarkdown}. אפשר גם לכתוב משהו כמו {::nomarkdown}\( f\left(x_{1},\dots,x_{n}\right)=g\left(x_{1},\dots,x_{n}\right)\){:/nomarkdown} בתור קיצור ל-{::nomarkdown}\( \left(y=f\left(x_{1},\dots,x_{n}\right)\right)\wedge\left(z=g\left(x_{1},\dots,x_{n}\right)\right)\wedge\left(y=z\right)\){:/nomarkdown}.

הדבר האחרון שנזדקק לו הוא <strong>כמתים</strong>. נתחיל בקל מביניהם: אם {::nomarkdown}\( P\){:/nomarkdown} היא ביטוי דיופנטי אז גם {::nomarkdown}\( \exists x\left(P\right)\){:/nomarkdown} הוא ביטוי דיופנטי, כש-{::nomarkdown}\( x\){:/nomarkdown} הוא משתנה כלשהו (כנראה כזה שמופיע ב-{::nomarkdown}\( P\){:/nomarkdown}, אחרת מה הטעם). מבחינה פורמלית, כשאנחנו מתרגמים את הכל לפולינום, אין הבדל בין הפולינום של {::nomarkdown}\( P\){:/nomarkdown} ובין הפולינום של {::nomarkdown}\( \exists x\left(P\right)\){:/nomarkdown}. ההבדל הוא רעיוני: אם משתנה ב-{::nomarkdown}\( P\){:/nomarkdown} נופל תחת כמת {::nomarkdown}\( \exists\){:/nomarkdown} עבורו, אומרים שהוא <strong>משתנה קשור</strong>, ואם הוא לא נופל תחת כמת אומרים שהוא <strong>חופשי</strong>. הרעיון בביטוי דיופנטי הוא לקבל בסופו של דבר פולינום בעל התכונה הבאה: לכל הצבה של ערכים <strong>במשתנים החופשיים</strong>, למשוואה שמיוצגת על ידי הפולינום קיים פתרון אם ורק אם הביטוי הדיופנטי מקבל את ערך האמת "אמת". במילים אחרות, המשתנים הקשורים הם המשתנים שבהם משחקים את משחק ה"האם המשוואה פתירה, עכשיו משהצבתי בה ערכים מסויימים?"

נשאר לנו עוד לתאר כמת אחד אבל קודם כל בואו נראה דוגמאות למכביר כי אחרת קשה להבין מה הלך פה. באופן כללי כשאני רוצה לייצג פונקציה דיופנטית {::nomarkdown}\( f\){:/nomarkdown} כלשהי אני כותב משהו מהצורה {::nomarkdown}\( y=f\left(x_{1},\dots,x_{n}\right)\iff P\left(y,x_{1},\dots,x_{n}\right)\){:/nomarkdown} כאשר {::nomarkdown}\( P\){:/nomarkdown} הוא ביטוי דיופנטי שמקבל "אמת" רק כאשר מתקיים הקשר {::nomarkdown}\( y=f\left(x_{1},\dots,x_{n}\right)\){:/nomarkdown} (או במילים אחרות, הוא מייצג פולינום שאחרי שמציבים בו את {::nomarkdown}\( y,x_{1},\dots,x_{n}\){:/nomarkdown} המשוואה שמתקבלת היא פתירה אם ורק אם {::nomarkdown}\( y=f\left(x_{1},\dots,x_{n}\right)\){:/nomarkdown}).

הפונקציות הרקורסיביות הבסיסיות היו הפונקציה הקבועה {::nomarkdown}\( c\left(x\right)=1\){:/nomarkdown}, פונקציית העוקב {::nomarkdown}\( s\left(x\right)=x+1\){:/nomarkdown} ופונקציות ההטלה {::nomarkdown}\( U_{i}^{n}\left(x_{1},\dots,x_{n}\right)=x_{i}\){:/nomarkdown}. הביטויים הדיופנטיים המתאימים הם:

{::nomarkdown}\( y=c\left(x\right)\iff\left(y=1\right)\){:/nomarkdown}

{::nomarkdown}\( y=s\left(x\right)\iff\left(y=x+1\right)\){:/nomarkdown}

{::nomarkdown}\( y=U_{i}^{n}\left(x_{1},\dots,x_{n}\right)\iff\left(y=x_{i}\right)\){:/nomarkdown}

בכל המקרים הללו הביטוי הדיופנטי הוא מה שקראתי לו "ביטוי בסיסי" מהצורה {::nomarkdown}\( p=q\){:/nomarkdown} כאשר {::nomarkdown}\( p,q\){:/nomarkdown} הם שני פולינומים (ופולינומים פשוטים למדי במקרה שלנו). בניה קצת יותר מעניינת אפשר לתת אם זוכרים שהצלחנו להוכיח שהפונקציה {::nomarkdown}\( h\left(n,k\right)=n^{k}\){:/nomarkdown} היא דיופנטית. נניח שאנחנו רוצים להוכיח עכשיו שהפונקציה {::nomarkdown}\( f\left(n,k,t\right)=n^{\left(k^{t}\right)}\){:/nomarkdown} היא דיופנטית, את זה אפשר לעשות בקלי קלות:

{::nomarkdown}\( y=n^{k^{t}}\iff\exists z\left(y=n^{z}\wedge z=k^{t}\right)\){:/nomarkdown}

שימו לב: כאן {::nomarkdown}\( n,k,t,y\){:/nomarkdown} כולם <strong>פרמטרים</strong> שאנחנו הולכים להציב בפולינום שמתאר את הביטוי באגף ימין, ואחרי שנעשה את זה נישאר עם פולינום שהמשתנה החופשי היחיד שלו הוא {::nomarkdown}\( z\){:/nomarkdown}, ו... רגע, האמנם?

בפולינום הזה יהיה כמובן את {::nomarkdown}\( z\){:/nomarkdown} בתור משתנה חופשי, אבל יהיו בו המון משתנים חופשיים אחרים ש"מוסתרים" כרגע מאיתנו. הביטוי {::nomarkdown}\( y=n^{z}\){:/nomarkdown} והביטוי {::nomarkdown}\( z=k^{t}\){:/nomarkdown} אומרים שניהם את אותו הדבר: עבדנו קשה בפוסטים הקודמים כדי לקבל פולינום מסובך מאוד שמתאר את הפונקציה הזו (אם תזכרו, בסופו של דבר קיבלנו מערכת של 11 משוואות). קחו את הפולינום שמתאים ל-{::nomarkdown}\( z=k^{t}\){:/nomarkdown} ואת הפולינום שמתאים ל-{::nomarkdown}\( y=n^{z}\){:/nomarkdown} (זה אותו פולינום אבל עם שמות שונים למשתנים שבתוכו) ועכשיו "תערבבו" אותם על פי הכלל של {::nomarkdown}\( \wedge\){:/nomarkdown} (דהיינו תעלו בריבוע ותחברו). התוצאה תיראה איום ונורא, אבל כל עוד אנחנו מסוגלים לתאר אותה בצורה הקומפטית {::nomarkdown}\( \exists z\left(y=n^{z}\wedge z=k^{t}\right)\){:/nomarkdown} ולדעת זה עובד, אנחנו מרוצים. וזה כמובן עובד, כי {::nomarkdown}\( \exists z\left(y=n^{z}\wedge z=k^{t}\right)\){:/nomarkdown} מקבל ערך אמת רק אם באמת {::nomarkdown}\( y=n^{k^{t}}\){:/nomarkdown}.

בואו נמשיך לחסל את הפונקציות הרקורסיביות, ונעבור כעת לטפל בכללי הבניה שלהן - די לנו להראות שאם מפעילים את כללי הבניה על פונקציות דיופנטיות מקבלים פונקציה דיופנטית. הכלל הראשון היה הרכבה, ובו בנינו מתוך הפונקציות {::nomarkdown}\( f,g_{1},\dots,g_{m}\){:/nomarkdown} את {::nomarkdown}\( h\left(x_{1},\dots,x_{n}\right)=f\left(g_{1}\left(x_{1},\dots,x_{n}\right),\dots,g_{m}\left(x_{1},\dots,x_{n}\right)\right)\){:/nomarkdown}. הביטוי הדיופנטי המתאים (שכבר הצגתי בעבר) הוא

{::nomarkdown}\( y=h\left(x_{1},\dots,x_{n}\right)\iff\exists t_{1},\dots,t_{m}\){:/nomarkdown}

{::nomarkdown}\( \left(y=f\left(t_{1},\dots,t_{m}\right)\wedge t_{1}=g_{1}\left(x_{1},\dots,x_{n}\right)\wedge\dots\wedge t_{m}=g_{m}\left(x_{1},\dots,x_{n}\right)\right)\){:/nomarkdown}

שבנוי בדיוק על פי אותם עקרונות כמו {::nomarkdown}\( \exists z\left(y=n^{z}\wedge z=k^{t}\right)\){:/nomarkdown}, רק באופן כללי. למעשה, אם תחשבו על כך לרגע, {::nomarkdown}\( f\left(n,k,t\right)=n^{k^{t}}\){:/nomarkdown} מתקבל מהפונקציה {::nomarkdown}\( h\left(n,k\right)=n^{k}\){:/nomarkdown} בעזרת הרכבה: {::nomarkdown}\( f\left(n,k,t\right)=h\left(n,h\left(k,t\right)\right)\){:/nomarkdown} (כלומר, מה שקראתי לו {::nomarkdown}\( f\){:/nomarkdown} בהגדרה הכללית של הרכבה הוא כאן {::nomarkdown}\( h\){:/nomarkdown}, ואילו {::nomarkdown}\( g_{1}\left(n,k,t\right)=n\){:/nomarkdown} ו-{::nomarkdown}\( g_{2}\left(n,k,t\right)=h\left(k,t\right)\){:/nomarkdown}) כך שזה לא ממש מפתיע.

בואו נוסיף עוד כלל בניה של ביטויים דיופנטיים: הקשר "או", {::nomarkdown}\( \vee\){:/nomarkdown}. נניח שיש לנו את הביטויים {::nomarkdown}\( P,Q\){:/nomarkdown} עם פולינומים מתאימים {::nomarkdown}\( p,q\){:/nomarkdown} ואנחנו רוצים למצוא פולינום עבור {::nomarkdown}\( P\vee Q\){:/nomarkdown}, כלומר כזה שמתאפס אם לפחות אחד משני הפולינומים מתאפס, מה נעשה? פשוט נכפול אותם: {::nomarkdown}\( pq\){:/nomarkdown}.

ואו נשלים את הבניה של אוסף הביטויים הדיופנטיים על ידי הוספה של המרכיב האחרון: כמת "לכל". בלוגיקה מסדר ראשון, הכמת {::nomarkdown}\( \forall x\){:/nomarkdown} אומר "לכל {::nomarkdown}\( x\){:/nomarkdown}". אפשר להכניס דבר כזה לביטויים הדיופנטיים שלנו, אבל אז עולה השאלה - איך לתרגם את זה לפולינום? יש כאן איזו שהיא סתירה מובנית - הרי הרעיון הוא שאם הביטוי מקבל ערך אמת אז כל מה שצריך הוא שיהיה <strong>קיים</strong> ערך שאפשר להציב למשתנה {::nomarkdown}\( x\){:/nomarkdown} כחלק מהצבה שמאפסת את הפולינום; ומצד שני, אנחנו רוצים לטפל איכשהו ב<strong>כל</strong> הערכים האפשריים של {::nomarkdown}\( x\){:/nomarkdown}. זו אינטואיציה; אם אתם רוצים לקבל אינטואיציה חזקה יותר נסו לחשוב איך לממש פולינום עבור {::nomarkdown}\( \forall\){:/nomarkdown} ותראו איפה אתם נתקעים. בקיצור, תשכחו מזה אין לנו דרך לעשות משהו כזה.

מה שכן אפשר לעשות, עם זאת, הוא טוב כמעט באותה מידה: כמת {::nomarkdown}\( \forall\){:/nomarkdown} <strong>חסום</strong>. אם {::nomarkdown}\( z\){:/nomarkdown} הוא משתנה שקיבל ערך כלשהו, אנחנו <strong>יכולים</strong> להשתמש בכמת מהצורה {::nomarkdown}\( \forall x&lt;z\){:/nomarkdown}, שפירושו "לכל ערך של {::nomarkdown}\( x\){:/nomarkdown} שקטן מ-{::nomarkdown}\( z\){:/nomarkdown}". איך לממש את הכמת הזה - זה עניין מסובך שידרוש מאיתנו להשתמש בפונקציה האקספוננציאלית, ואני דוחה אותו לפוסט הבא (שיהיה האחרון!). לעת עתה אני רוצה להראות איך בעזרת הכמת הזה אנחנו מסוגלים להתגבר על שני כללי הבניה שעוד נותרו לנו.

כלל הבניה הבא בתור הוא מה שקראתי לו <strong>רקורסיה פרימיטיבית</strong>. בואו נזכיר אותו, כי הוא די קשה לעיכול. בניסוח לא פורמלי, אנחנו חושבים על קלט כלשהו למשתנים {::nomarkdown}\( x_{1},\dots,x_{n}\){:/nomarkdown} כאילו הוא מגדיר סדרה אינסופית {::nomarkdown}\( a_{1},a_{2},a_{3},a_{4},\dots\){:/nomarkdown} שמוגדרת באופן רקורסיבי. האיבר הראשון בסדרה מחושב בדרך כלשהי מתוך {::nomarkdown}\( x_{1},\dots,x_{n}\){:/nomarkdown}; בואו נקרא לדרך הזו {::nomarkdown}\( f\){:/nomarkdown}, כלומר {::nomarkdown}\( a_{1}=f\left(x_{1},\dots,x_{n}\right)\){:/nomarkdown}. כעת, האיבר ה-{::nomarkdown}\( k+1\){:/nomarkdown} בסדרה מחושב מתוך שלושה סוגי קלטים שונים: ראשית, הפרמטרים {::nomarkdown}\( x_{1},\dots,x_{n}\){:/nomarkdown} שאנו לא שוכחים מהם אף פעם; שנית, האיבר הקודם בסדרה, {::nomarkdown}\( a_{k}\){:/nomarkdown}; שלישית, האינדקס של האיבר הקודם בסדרה, כלומר המספר הטבעי {::nomarkdown}\( k\){:/nomarkdown}. נסמן ב-{::nomarkdown}\( g\){:/nomarkdown} את הפונקציה שמקבלת את שלושת הקלטים הללו: {::nomarkdown}\( a_{k+1}=g\left(k,a_{k},x_{1},\dots,x_{n}\right)\){:/nomarkdown}. כעת אפשר להגדיר פונקציה {::nomarkdown}\( h\left(x_{1},\dots,x_{n},k\right)=a_{k}\){:/nomarkdown}.

פורמלית זה הולך כך. אנו מגדירים {::nomarkdown}\( h\left(x_{1},\dots,x_{n},1\right)=f\left(x_{1},\dots,x_{n}\right)\){:/nomarkdown} ולכל {::nomarkdown}\( k\){:/nomarkdown} אנו מגדירים {::nomarkdown}\( h\left(x_{1},\dots,x_{n},k+1\right)=g\left(k,h\left(x_{1},\dots,x_{n},k\right),x_{1},\dots,x_{n}\right)\){:/nomarkdown}. זה בדיוק מה שכתבתי למעלה, רק כתוב יותר פורמלי ויותר מבלבל.

התיאור שנתתי כאן מרמז על האופן שבו אפשר למדל את הבניה הזו עם ביטוי דיופנטי. הנה הנסיון הראשון לעשות את זה:

{::nomarkdown}\( y=h\left(x_{1},\dots,x_{n},k\right)\iff\exists a_{1},a_{2},\dots,a_{k}\){:/nomarkdown}

{::nomarkdown}\( a_{1}=f\left(x_{1},\dots,x_{k}\right)\wedge\){:/nomarkdown}

{::nomarkdown}\( a_{2}=g\left(1,a_{1},x_{1},\dots,x_{n}\right)\wedge\){:/nomarkdown}

{::nomarkdown}\( a_{3}=g\left(2,a_{2},x_{1},\dots,x_{n}\right)\wedge\){:/nomarkdown}

{::nomarkdown}\( \dots\){:/nomarkdown}

{::nomarkdown}\( a_{k}=g\left(k-1,a_{k-1},x_{1},\dots,x_{n}\right)\wedge\){:/nomarkdown}

{::nomarkdown}\( y=a_{k}\){:/nomarkdown}

התיאור הזה טוב ויפה מבחינה רעיונית, אבל <strong>הוא לא ביטוי דיופנטי</strong> חוקי. נסו רגע להבין למה - זה חמקמק למדי. הבעיה כאן היא ש<strong>אורך</strong> הביטוי הזה - כמות האיברים שמופיעים בו - תלויה בפרמטר המספרי {::nomarkdown}\( k\){:/nomarkdown}, אבל זה לא מתאים למה שאנחנו צריכים לעשות - אנחנו צריכים לתת ביטוי <strong>אחד</strong>, שמטפל בכל ה-{::nomarkdown}\( k\){:/nomarkdown} באותו האופן. אם לא נעשה את זה, אנחנו כבר לא תוקפים את הבעיה העשירית של הילברט אלא בעיה עוד יותר כללית (ולכן עוד יותר קשה) - להגיד אם יש פתרון למערכת משוואות דיופמנטיות שבו המשוואות עצמן תלויות בערכים של חלק מהמשתנים (ערכים שונים - משוואות שונות). אם כן, הבניה שלעיל היא לא מוצלחת כל עוד לא מצאנו דרך לכתוב אותה במסגרת הכללים הנוקשים יחסית של בניית ביטויים דיופנטיים שיש לנו.

לב הבעיה הוא בכך שכדי לתאר את הרקורסיה בשלב {::nomarkdown}\( k\){:/nomarkdown} אנחנו צריכים {::nomarkdown}\( k\){:/nomarkdown} משתנים, {::nomarkdown}\( a_{1},\dots,a_{k}\){:/nomarkdown}, כלומר מספר משתנים שאינו קבוע אלא תלוי בפרמטר {::nomarkdown}\( k\){:/nomarkdown}. אם הייתה איכשהו דרך לדחוף את כל המשתנים הללו לתוך משתנה יחיד...

וכאן הגיע הזמן להחזיר למשחק את הפונקציה שתיארתי ב<a href="http://www.gadial.net/2012/09/15/hilbert_tenth_sequence_function/">פוסט השלישי בסדרה</a>: פונקציה דיופנטית {::nomarkdown}\( S\left(i,u\right)\){:/nomarkdown} שהיא בעלת התכונה הבאה: לכל סדרה סופית {::nomarkdown}\( a_{1},\dots,a_{k}\){:/nomarkdown} של מספרים טבעיים חיוביים, קיים {::nomarkdown}\( u\){:/nomarkdown} כך ש-{::nomarkdown}\( S\left(i,u\right)=a_{i}\){:/nomarkdown} לכל {::nomarkdown}\( 1\le i\le k\){:/nomarkdown}. במילים אחרות, {::nomarkdown}\( u\){:/nomarkdown} מקודד את הסדרה {::nomarkdown}\( a_{1},\dots,a_{k}\){:/nomarkdown} במלואה. בעזרת הפונקציה הזו אפשר לכתוב מחדש את הביטוי שלעיל באופן הבא:

{::nomarkdown}\( y=h\left(x_{1},\dots,x_{n},k\right)\iff\exists u\){:/nomarkdown}

{::nomarkdown}\( S\left(1,u\right)=f\left(x_{1},\dots,x_{k}\right)\wedge\){:/nomarkdown}

{::nomarkdown}\( S\left(2,u\right)=g\left(1,S\left(1,u\right),x_{1},\dots,x_{n}\right)\wedge\){:/nomarkdown}

{::nomarkdown}\( S\left(3,u\right)=g\left(2,S\left(2,u\right),x_{1},\dots,x_{n}\right)\wedge\){:/nomarkdown}

{::nomarkdown}\( \dots\){:/nomarkdown}

{::nomarkdown}\( S\left(k,u\right)=g\left(k-1,S\left(k-1,u\right),x_{1},\dots,x_{n}\right)\wedge\){:/nomarkdown}

{::nomarkdown}\( y=S\left(k,u\right)\){:/nomarkdown}

אבל, למרות שעכשיו אנחנו צריכים להניח את קיומו של משתנה יחיד {::nomarkdown}\( u\){:/nomarkdown} ולא של {::nomarkdown}\( k\){:/nomarkdown} משתנים, זה עדיין לא פותר לנו את הבעיה, כי הפסוק עצמו עדיין תלוי באורכו ב-{::nomarkdown}\( k\){:/nomarkdown}. לכן הטוויסט האחרון הוא להשתמש בכמת "לכל":

{::nomarkdown}\( y=h\left(x_{1},\dots,x_{n},k\right)\iff\exists u\){:/nomarkdown}

{::nomarkdown}\( S\left(1,u\right)=f\left(x_{1},\dots,x_{k}\right)\wedge\){:/nomarkdown}

{::nomarkdown}\( \forall i&lt;k\left(S\left(i+1,u\right)=g\left(i,S\left(i,u\right),x_{1},\dots,x_{n}\right)\right)\wedge\){:/nomarkdown}

{::nomarkdown}\( y=S\left(k,u\right)\){:/nomarkdown}

וזהו זה! זה כבר ביטוי תקין לגמרי, בהינתן שאנחנו מאמינים שאפשר להשתמש בכמת "לכל" חסום. כדאי להעיר שהתעלול הזה, של שימוש ב-{::nomarkdown}\( S\){:/nomarkdown} כדי לתפוס רקורסיה בפסוק קצר אחד, הוא המצאתו של קורט גדל (עד לרמה הטכנית של בניית {::nomarkdown}\( S\){:/nomarkdown} עם משפט השאריות הסיני) והוא אחד מהכלים שבהם הוא השתמש בהוכחה המבריקה שלו של משפט אי השלמות הראשון.

אם כן, סיימנו עם הרקורסיה הפרימיטיבית ומותיר לנו רק את כלל היצירה האחרון: מינימיזציה.

כזכור, מינימיזציה הולכת כך:

{::nomarkdown}\( h\left(x_{1},\dots,x_{n}\right)=\min_{y}\left(f\left(x_{1},\dots,x_{n},y\right)=g\left(x_{1},\dots,x_{n},y\right)\right)\){:/nomarkdown}

כלומר, {::nomarkdown}\( h\){:/nomarkdown} מחזירה את הערך המינימלי של {::nomarkdown}\( y\){:/nomarkdown} שכאשר מזינים אותו (יחד עם שאר הפרמטרים {::nomarkdown}\( x_{1},\dots,x_{N}\){:/nomarkdown}) הן ל-{::nomarkdown}\( f\){:/nomarkdown} והן ל-{::nomarkdown}\( g\){:/nomarkdown} מקבלים את אותה התוצאה. אם אין {::nomarkdown}\( y\){:/nomarkdown} שעבורו זה קורה, {::nomarkdown}\( h\){:/nomarkdown} פשוט לא מוגדרת על {::nomarkdown}\( x_{1},\dots,x_{n}\){:/nomarkdown}.

לתרגם את הפונקציה הזו לביטוי יהיה קל יותר מאשר רקורסיה. נתחיל מכך ש-{::nomarkdown}\( f\left(x_{1},\dots,x_{n},y\right)=g\left(x_{1},\dots,x_{n},y\right)\){:/nomarkdown} הוא ביטוי לגיטימי למהדרין. כל מה שנשאר לעשות הוא לקודד איכשהו את תכונת המינימליות. כלומר, אנחנו רוצים להגיד שאין איזה {::nomarkdown}\( t&lt;y\){:/nomarkdown} כך ש-{::nomarkdown}\( f\left(x_{1},\dots,x_{n},t\right)=g\left(x_{1},\dots,x_{n},t\right)\){:/nomarkdown}. הכמת החסום בנוי בדיוק עבור זה:

{::nomarkdown}\( y=h\left(x_{1},\dots,x_{n}\right)\iff f\left(x_{1},\dots,x_{n},y\right)=g\left(x_{1},\dots,x_{n},y\right)\wedge\){:/nomarkdown}

{::nomarkdown}\( \wedge\forall t&lt;y\left(f\left(x_{1},\dots,x_{n},t\right)\ne g\left(x_{1},\dots,x_{n},t\right)\right)\){:/nomarkdown}

דבר אחד שעדיין צריך להסביר הוא איך לתאר את {::nomarkdown}\( f\ne g\){:/nomarkdown}. זה פשוט קיצור של {::nomarkdown}\( \left(f&gt;g\right)\vee\left(f&lt;g\right)\){:/nomarkdown}, ולכן כל מה שנותר לעשות הוא להשתכנע שאפשר להשתמש ב-{::nomarkdown}\( &lt;\){:/nomarkdown}, אבל זה אחד מהדברים הראשונים שהראיתי: כדי לתאר את {::nomarkdown}\( x&lt;y\){:/nomarkdown} משתמשים במשוואה הדיופנטית {::nomarkdown}\( x+z=y\){:/nomarkdown}. וזהו! סיימנו את ההוכחה של אי-כריעות הבעיה העשירית של הילברט!

...פרט לכך שעדיין לא הוכחנו שאפשר לקודד את הכמת "לכל" החסום. זה יהיה תוכן הפוסט הבא, האחרון בסדרה.
