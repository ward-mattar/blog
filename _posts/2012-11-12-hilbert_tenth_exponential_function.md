---
id: 2234
title: "הבעיה העשירית של הילברט - הפונקציה האקספוננציאלית היא דיופנטית"
date: 2012-11-12 21:11:31
layout: post
categories: 
  - תורת המספרים
tags: 
  - הבעיה העשירית של הילברט
  - טכני
  - פונקציות דיופנטיות
---
סוף סוף הגענו אל האקשן האמיתי. כזכור, עבור {::nomarkdown}\( a&gt;1\){:/nomarkdown} הגדרנו את משוואת פל {::nomarkdown}\( x^{2}-dy^{2}=1\){:/nomarkdown} כאשר {::nomarkdown}\( d=a^{2}-1\){:/nomarkdown}, וסימנו בתור {::nomarkdown}\( x_{n}\left(a\right)\){:/nomarkdown} את סדרת ערכי ה-{::nomarkdown}\( x\){:/nomarkdown}-ים של פתרונות של המשוואה (כשכולם מוצגים בתור "חזקות" של הפתרון היסודי). המטרה שלנו כרגע היא להראות שהפונקציה {::nomarkdown}\( f\left(a,k\right)=x_{k}\left(a\right)\){:/nomarkdown} היא דיופנטית; לשם כך נציג מערכת משוואות שבה מככבים {::nomarkdown}\( x,k,a\){:/nomarkdown} ועוד כל מני משתנים אחרים, כך שאחרי שמציבים ערכים קונקרטיים ב-{::nomarkdown}\( x,k,a\){:/nomarkdown}, למערכת המשוואות שנותרה יש פתרון אם ורק אם {::nomarkdown}\( x=x_{k}\left(a\right)\){:/nomarkdown}. במערכת הזו יש שמונה משוואות. מוכנים? הנה הן:
<ol>
	<li>{::nomarkdown}\( x^{2}-\left(a^{2}-1\right)y^{2}=1\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( u^{2}-\left(a^{2}-1\right)v^{2}=1\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( s^{2}-\left(b^{2}-1\right)t^{2}=1\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( v=ry^{2}\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( b=1+4py=a+qu\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( s=x+cu\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( t=k+4\left(d-1\right)y\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( y=k+e-1\){:/nomarkdown}</li>
</ol>
יפה. בואו נתחיל להבין מה המשמעות של כל זה ואיך כל משוואה עוזרת לנו.

נתחיל מהראשונה. כל פתרון של המשוואה הזו בעצם נותן לנו פתרון של משוואת פל עבור {::nomarkdown}\( a\){:/nomarkdown} כלשהו. כלומר, כבר מהמשוואה הראשונה אנחנו יכולים להסיק שקיים {::nomarkdown}\( i\){:/nomarkdown} כלשהו כך ש-{::nomarkdown}\( x=x_{i}\left(a\right)\){:/nomarkdown} וגם {::nomarkdown}\( y=y_{i}\left(a\right)\){:/nomarkdown}. בעצם כל האתגר שנותר לנו כעת הוא להוכיח ש-{::nomarkdown}\( k=i\){:/nomarkdown} (זכרו! יש לחשוב על {::nomarkdown}\( k\){:/nomarkdown} בתור קבוע - "פרמטר" שהצבנו במשוואות).

שתי המשוואות הבאות נותנות לנו עוד פתרונות למשוואות פל. משוואה 2 מראה לנו ש-{::nomarkdown}\( u=x_{n}\left(a\right),v=x_{n}\left(a\right)\){:/nomarkdown} עבור {::nomarkdown}\( n\){:/nomarkdown} כלשהו; שימו לב שאלו הם איברים שונים באותה סדרה (של פתרונות משוואת פל עבור {::nomarkdown}\( a\){:/nomarkdown}). לעומת זאת {::nomarkdown}\( s=x_{j}\left(b\right),t=y_{j}\left(b\right)\){:/nomarkdown} הם כבר פתרונות של משוואת פל שעשויה להיות שונה, תלוי אם {::nomarkdown}\( b\){:/nomarkdown} שווה ל-{::nomarkdown}\( a\){:/nomarkdown} או לא. לשם מה אנו נזקקים לעוד שני פתרונות? סבלנות.

מידע שאנחנו מקבלים מייד הוא ש-{::nomarkdown}\( b\){:/nomarkdown} אכן שונה מ-{::nomarkdown}\( a\){:/nomarkdown} ולמעשה הוא בהכרח גדול ממנו - זה נובע ממשוואה 5, {::nomarkdown}\( b=a+qu\){:/nomarkdown}. זכרו שכל המשוואות הללו הן בשלמים <strong>חיוביים</strong> (זה פישוט שעשינו אי-אז בתחילת סדרת הפוסטים הזו).

כעת, האם אנחנו יכולים לומר משהו על הקשר שבין {::nomarkdown}\( \left(x,y\right)\){:/nomarkdown} ובין {::nomarkdown}\( \left(u,v\right)\){:/nomarkdown}? שניהם פתרונות של משוואת פל עם המקדם {::nomarkdown}\( d=a^{2}-1\){:/nomarkdown}, אבל חוץ מזה הם כרוכים האחד בשני עם משוואה 4: {::nomarkdown}\( v=ry^{2}\){:/nomarkdown}, או במפורש: {::nomarkdown}\( y_{n}\left(a\right)=r\left(y_{i}\left(a\right)\right)^{2}\){:/nomarkdown}. במילים אחרות, {::nomarkdown}\( \left(y_{i}\left(a\right)\right)^{2}\){:/nomarkdown} מחלק את {::nomarkdown}\( y_{n}\left(a\right)\){:/nomarkdown}. בפוסט הקודם הראינו שמכך נובע ש-{::nomarkdown}\( y_{i}\left(a\right)\){:/nomarkdown} מחלק את {::nomarkdown}\( n\){:/nomarkdown} (וכמובן ש-{::nomarkdown}\( i\le n\){:/nomarkdown}).

יפה, למדנו משהו על הקשר בין {::nomarkdown}\( i\){:/nomarkdown} ו-{::nomarkdown}\( n\){:/nomarkdown}. עכשיו בואו נכניס את {::nomarkdown}\( x_{j}\left(b\right)\){:/nomarkdown} לתמונה. משוואה 6, כשהיא מנוסחת בסימונים החדשים שלנו, אומרת ש-{::nomarkdown}\( x_{j}\left(b\right)=x_{i}\left(a\right)+cx_{n}\left(a\right)\){:/nomarkdown}. אפשר לסמן זאת גם כך: {::nomarkdown}\( x_{j}\left(b\right)\equiv_{x_{n}\left(a\right)}x_{i}\left(a\right)\){:/nomarkdown}. זה לא סוף מה שאפשר לעשות עם שקילות מודולו {::nomarkdown}\( x_{n}\left(a\right)\){:/nomarkdown}; משוואה 5 אומרת ש-{::nomarkdown}\( b=a+qx_{n}\left(a\right)\){:/nomarkdown}, כלומר {::nomarkdown}\( b\equiv_{x_{n}\left(a\right)}a\){:/nomarkdown}.

עכשיו בואו נשלוף תוצאה מהפוסט הקודם: אם {::nomarkdown}\( a\equiv_{c}b\){:/nomarkdown} אז לכל {::nomarkdown}\( n\){:/nomarkdown} מתקיים ש-{::nomarkdown}\( x_{n}\left(a\right)\equiv_{c}x_{n}\left(b\right)\){:/nomarkdown} (זה נבע מההגדרה האינדוקטיבית של סדרות ה-{::nomarkdown}\( x_{n}\){:/nomarkdown}-ים). אצלנו אפשר להסיק מזה ש-{::nomarkdown}\( x_{j}\left(b\right)\equiv_{x_{n}\left(a\right)}x_{j}\left(a\right)\){:/nomarkdown}, ולכן נקבל ש-{::nomarkdown}\( x_{i}\left(a\right)\equiv_{x_{n}\left(a\right)}x_{j}\left(a\right)\){:/nomarkdown}. לפי התוצאה מסוף הפוסט הקודם, המסקנה היא ש-{::nomarkdown}\( j\equiv_{4n}\pm i\){:/nomarkdown}. כעת, מכיוון ש-{::nomarkdown}\( y_{i}\left(a\right)\){:/nomarkdown} מחלק את {::nomarkdown}\( n\){:/nomarkdown}, הרי ש-{::nomarkdown}\( 4y_{i}\left(a\right)\){:/nomarkdown} מחלק את {::nomarkdown}\( 4n\){:/nomarkdown} וכל דבר שמתחלק על ידו, ועל כן {::nomarkdown}\( j\equiv_{4y_{i}\left(a\right)}\pm i\){:/nomarkdown}.

כעת בואו נשתמש שוב במשוואה 5, בחלק שלה שבו טרם השתמשנו שקובע ש-{::nomarkdown}\( b=1+4py_{i}\left(a\right)\){:/nomarkdown}, כלומר ש-{::nomarkdown}\( b\equiv_{4y_{i}\left(a\right)}1\){:/nomarkdown}, כלומר ש-{::nomarkdown}\( 4y_{i}\left(a\right)\){:/nomarkdown} מחלק את {::nomarkdown}\( b-1\){:/nomarkdown}.

עכשיו בואו נשתמש בעוד תוצאה מהפוסט הקודם, לפיה {::nomarkdown}\( y_{n}\left(a\right)\equiv_{a-1}n\){:/nomarkdown} (גם זה נבע די מייד מנוסחאות הנסיגה). אצלנו נשתמש בזה עם {::nomarkdown}\( j\){:/nomarkdown} ונקבל ש-{::nomarkdown}\( y_{j}\left(b\right)\equiv_{b-1}j\){:/nomarkdown}, כלומר {::nomarkdown}\( y_{j}\left(b\right)\equiv_{4y_{i}\left(a\right)}j\){:/nomarkdown}. מבלבל? טיפה, כן. עכשיו כדי לבלבל עוד יותר נוסיף לתמונה את משוואה 7: {::nomarkdown}\( y_{j}\left(b\right)=k+4\left(d-1\right)y_{i}\left(a\right)\){:/nomarkdown} (<strong>שימו לב</strong> ש-{::nomarkdown}\( d\){:/nomarkdown} כאן הוא משתנה בלי אילוצים עליו פרט לכך שיהיה חיובי; אנחנו <strong>לא</strong>יכולים להניח ש-{::nomarkdown}\( d=a^{2}-1\){:/nomarkdown} וגם לא ניסינו לדרוש משהו כזה). מהמשוואה הזו נקבל מייד ש-{::nomarkdown}\( y_{j}\left(b\right)\equiv_{4y_{i}\left(a\right)}k\){:/nomarkdown}, והנה הכנסנו את {::nomarkdown}\( k\){:/nomarkdown} לתמונה סוף סוף. זכרו - מטרת העל שלנו היא להראות ש-{::nomarkdown}\( k=i\){:/nomarkdown}, והתקדמנו יפה לקראת זה; בואו נערוך סיכום ביניים קצר של תוצאות שמצאנו:
<ol>
	<li>{::nomarkdown}\( j\equiv_{4y_{i}\left(a\right)}\pm i\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( y_{j}\left(b\right)\equiv_{4y_{i}\left(a\right)}j\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( y_{j}\left(b\right)\equiv_{4y_{i}\left(a\right)}k\){:/nomarkdown}</li>
</ol>
משלושת אלו קיבלנו את השרשרת הבאה שבה כל השקילויות הן מודולו {::nomarkdown}\( 4y_{i}\left(a\right)\){:/nomarkdown}: {::nomarkdown}\( k\equiv y_{j}\left(b\right)\equiv j\equiv\pm i\){:/nomarkdown}. אם כן, עוד לא הוכחנו ש-{::nomarkdown}\( k=i\){:/nomarkdown} אבל ראינו ש-{::nomarkdown}\( k\equiv_{4y_{i}\left(a\right)}\pm i\){:/nomarkdown} וגם זו התחלה (וכמעט סיימנו!).

בואו נכניס לתמונה עכשיו את משוואה 8: {::nomarkdown}\( y=k+e-1\){:/nomarkdown}. מה היא בעצם אומרת? זו בסך הכל הדרך הדיופנטית לכתוב {::nomarkdown}\( k\le y_{i}\left(a\right)\){:/nomarkdown} (כי {::nomarkdown}\( e\){:/nomarkdown} הוא מספר חיובי כלשהו). כעת, בפוסט הקודם ראינו ש-{::nomarkdown}\( i\le y_{i}\left(a\right)\){:/nomarkdown}. אם תחשבו על זה קצת, זה אומר ש-{::nomarkdown}\( k=i\){:/nomarkdown}! למה? כי {::nomarkdown}\( k,i\){:/nomarkdown} שניהם נמצאים בתוך טווח שבו אין שני מספרים שונים ששקולים מודולו {::nomarkdown}\( 4y_{i}\left(a\right)\){:/nomarkdown} - הטווח {::nomarkdown}\( -2y_{i}\left(a\right)+1,\dots-1,0,1,\dots,2y_{i}\left(a\right)\){:/nomarkdown} (זוכרים? דיברנו על זה קצת בפוסט הקודם). זהו, סיימנו את הכיוון הראשון! הראינו שאם נתון פתרון למשוואות הדיופנטיות עבור ערכים נתונים של {::nomarkdown}\( x,k,a\){:/nomarkdown} אז הוא מקיים {::nomarkdown}\( x=x_{k}\left(a\right)\){:/nomarkdown}.

הכיוון השני הוא להראות שאם יש לנו ערכים נתונים של {::nomarkdown}\( x,k,a\){:/nomarkdown} שמקיימים {::nomarkdown}\( x=x_{k}\left(a\right)\){:/nomarkdown} ואנחנו מציבים אותם במשוואות שלעיל, אז התוצאה היא מערכת משוואות פתירה. כלומר, אנחנו צריכים לקבוע מה יהיו הערכים ששאר המשתנים מקבלים ולהוכיח שכל המשוואות מתקיימות (עכשיו המשוואות הופכות להיות האויבים שלנו - אם קודם הן סיפקו לנו מידע, עכשיו הן מספקות לנו אילוצים שאנחנו חייבים לקיים).

בואו נתחיל ממשוואה 1 - היא קלה. אם {::nomarkdown}\( x=x_{k}\left(a\right)\){:/nomarkdown} אז אנחנו יודעים שיש {::nomarkdown}\( y=y_{k}\left(a\right)\){:/nomarkdown} כך ש-{::nomarkdown}\( x^{2}+\left(a-1\right)y^{2}=1\){:/nomarkdown} מהגדרת משוואת פל. אז סיפקנו כבר את משוואה 1. בואו נעבור ל-2; כל פתרון אחר של משוואת פל עבור {::nomarkdown}\( a\){:/nomarkdown} יספק אותה, אבל כדאי לבחור את הפתרון הזה בחוכמה כדי שגם שאר המשוואות יסופקו - נבחר {::nomarkdown}\( m=2ky_{k}\left(a\right)\){:/nomarkdown} (למה? כי זה עובד, כפי שנראה בהמשך) ונגדיר {::nomarkdown}\( u=x_{m}\left(a\right)\){:/nomarkdown} ו-{::nomarkdown}\( v=y_{m}\left(a\right)\){:/nomarkdown}, וזה כמובן שיספק את משוואה 2.

עכשיו, בפוסט הקודם ראינו ש-{::nomarkdown}\( y_{n}\){:/nomarkdown} מחלק את {::nomarkdown}\( y_{t}\){:/nomarkdown} אם ורק אם {::nomarkdown}\( n\){:/nomarkdown} מחלק את {::nomarkdown}\( t\){:/nomarkdown}, וכמו כן גם ראינו ש-{::nomarkdown}\( y_{n}^{2}\){:/nomarkdown} תמיד מחלק את {::nomarkdown}\( y_{ny_{n}}\){:/nomarkdown}. מהתוצאה השניה נובע ש-{::nomarkdown}\( y_{k}^{2}\){:/nomarkdown} מחלק את {::nomarkdown}\( y_{m/2}\){:/nomarkdown}, ומהראשונה נובע ש-{::nomarkdown}\( y_{m/2}\){:/nomarkdown} מחלק את {::nomarkdown}\( y_{m}\){:/nomarkdown} ולכן נקבל ש-{::nomarkdown}\( y_{k}^{2}\){:/nomarkdown} מחלק את {::nomarkdown}\( y_{m}\){:/nomarkdown}, כלומר {::nomarkdown}\( y^{2}\){:/nomarkdown} מחלק את {::nomarkdown}\( v\){:/nomarkdown}, כלומר יש {::nomarkdown}\( r\){:/nomarkdown} כך ש-{::nomarkdown}\( v=ry^{2}\){:/nomarkdown}, והנה סיפקנו את משוואה 4. זה עדיין לא מסביר עד הסוף את האופן שבו בחרנו את {::nomarkdown}\( m\){:/nomarkdown} (אם כל מה שהיינו רוצים לעשות הוא להראות ש-{::nomarkdown}\( y^{2}\){:/nomarkdown} מחלק את {::nomarkdown}\( v\){:/nomarkdown} היה אפשר לבחור {::nomarkdown}\( m=ky_{k}\){:/nomarkdown}) אבל זה הרווח הראשון שקצרנו מההגדרה הזו.

האתגר הבא, והגדול ביותר שלנו, הוא לספק את משוואה 5 שאיכשהו קושרת את הפרמטרים של כל שלוש משוואות פל שלנו יחד. נצטרך לבחור את {::nomarkdown}\( b\){:/nomarkdown} בצורה חכמה מאוד, ועל פיו לבחור את מה שיפתור את משוואה 3. נתחיל דווקא מתכונה של {::nomarkdown}\( u,v\){:/nomarkdown}: בפוסט הקודם ראינו שאם {::nomarkdown}\( n\){:/nomarkdown} הוא זוגי אז {::nomarkdown}\( y_{n}\){:/nomarkdown} הוא זוגי וכשהוא אי זוגי אז {::nomarkdown}\( y_{n}\){:/nomarkdown} אי זוגי. במקרה שלנו בחרנו את {::nomarkdown}\( m\){:/nomarkdown} בכוונה באופן שיבטיח שהוא זוגי ולכן {::nomarkdown}\( v\){:/nomarkdown} זוגי, אבל זה אומר שבהכרח {::nomarkdown}\( u\){:/nomarkdown} אי זוגי (כי {::nomarkdown}\( u^{2}+\left(a^{2}-1\right)v^{2}=1\){:/nomarkdown}; מה תהיה הזוגיות של אגף שמאל אם גם {::nomarkdown}\( u\){:/nomarkdown} וגם {::nomarkdown}\( v\){:/nomarkdown} זוגיים?). אנחנו גם יודעים שהמחלק המשותף הגדול ביותר של {::nomarkdown}\( u,v\){:/nomarkdown} הוא 1 (שוב, מהפוסט הקודם), ולכן גם המחלק המשותף הגדול ביותר של {::nomarkdown}\( u\){:/nomarkdown} ושל {::nomarkdown}\( 4y\){:/nomarkdown} הוא 1. רגע, למה? ובכן, בואו נניח ש-{::nomarkdown}\( p\){:/nomarkdown} הוא מספר גדול מ-1 שמחלק גם את {::nomarkdown}\( u\){:/nomarkdown} וגם את {::nomarkdown}\( 4y\){:/nomarkdown}. אפשר תמיד להניח ש-{::nomarkdown}\( p\){:/nomarkdown} ראשוני כי אם ניקח מחלק משותף כלשהו של {::nomarkdown}\( u,4y\){:/nomarkdown} יהיה ראשוני שמחלק אותו; כמו כן, {::nomarkdown}\( p\){:/nomarkdown} חייב להיות אי זוגי כי {::nomarkdown}\( u\){:/nomarkdown} אי זוגי, ולכן {::nomarkdown}\( p\){:/nomarkdown} לא מחלק את {::nomarkdown}\( 4\){:/nomarkdown}, ולכן כדי לחלק את {::nomarkdown}\( 4y\){:/nomarkdown} הוא חייב לחלק את {::nomarkdown}\( y\){:/nomarkdown}. אבל ראינו ש-{::nomarkdown}\( y\){:/nomarkdown} מחלק את {::nomarkdown}\( v\){:/nomarkdown} ולכן קיבלנו ש-{::nomarkdown}\( p\){:/nomarkdown} הוא מחלק משותף של {::nomarkdown}\( u,v\){:/nomarkdown} וזו סתירה לכך שהם זרים.

איך זה עוזר לנו ש-{::nomarkdown}\( u,4y\){:/nomarkdown} זרים? ובכן, זה מאפשר לנו לשלוף מהשרוול כלי נשק קטלני במיוחד. זכרו מהי משוואה 5 - בואו נכתוב אותה הפעם בתור זוג המשוואות שהיא:

{::nomarkdown}\( b=1+4yp\){:/nomarkdown}

{::nomarkdown}\( b=a+uq\){:/nomarkdown}

דרך אחרת, כמעט שקולה, לכתוב את מערכת המשוואות הזו היא:

{::nomarkdown}\( b\equiv_{4y}1\){:/nomarkdown}

{::nomarkdown}\( b\equiv_{u}a\){:/nomarkdown}

וזו מערכת משוואות מודולרית שבה המודולוסים הם זרים, מה שאומר ש<strong>משפט השאריות הסיני</strong> מבטיח שתמיד קיים לה פתרון. נבחר את הערך של המשתנה {::nomarkdown}\( b\){:/nomarkdown} להיות הפתרון הזה. האם סיימנו? עוד לא, כי דרך הכתיבה המודולרית לא שקולה לחלוטין; היא הייתה שקולה רק אם {::nomarkdown}\( p,q\){:/nomarkdown} היו יכולים להיות גם שליליים. למרבה המזל, אם {::nomarkdown}\( b\){:/nomarkdown} הוא פתרון של מערכת המשוואות אז גם {::nomarkdown}\( b+n\left(4yu\right)\){:/nomarkdown} הוא כזה, לכל {::nomarkdown}\( n\){:/nomarkdown} טבעי, ולכן תמיד אפשר לבחור {::nomarkdown}\( b\){:/nomarkdown} גדול מספיק כדי ששתי המשוואות המקוריות יתקיימו. טראח! הנה סיפקנו גם את משוואה 5.

עכשיו, כשיש לנו את {::nomarkdown}\( b\){:/nomarkdown} ביד, אפשר להגדיר את {::nomarkdown}\( s,t\){:/nomarkdown} - הפתרונות למשוואה 3 - בתור {::nomarkdown}\( s=x_{k}\left(b\right),t=y_{k}\left(b\right)\){:/nomarkdown} (אותו {::nomarkdown}\( k\){:/nomarkdown} כמו זה שהיה נתון לנו מלכתחילה). בפוסט הקודם ראינו שאם {::nomarkdown}\( a\equiv_{c}b\){:/nomarkdown} אז {::nomarkdown}\( x_{n}\left(a\right)\equiv_{c}x_{n}\left(b\right)\){:/nomarkdown}. במקרה שלנו, {::nomarkdown}\( b\equiv_{u}a\){:/nomarkdown} ולכן נקבל {::nomarkdown}\( s\equiv_{u}x\){:/nomarkdown}, כלומר {::nomarkdown}\( s=x+cu\){:/nomarkdown} בדיוק כמו משוואה 6. רגע, בדיוק? לא! מי מכם האמין לי? יש פה שוב את אותה בעיה כמו קודם - אף אחד לא ערב לנו ש-{::nomarkdown}\( c\){:/nomarkdown} הזה הוא חיובי. כדי להיווכח בכך שהוא חיובי שימו לב לכך ש-{::nomarkdown}\( b&gt;a\){:/nomarkdown} (זה נובע מהמשוואה {::nomarkdown}\( b=a+uq\){:/nomarkdown}). ולכן {::nomarkdown}\( s=x_{k}\left(b\right)&gt;x_{k}\left(a\right)=x\){:/nomarkdown} (לא בטוחים בזה? הוכיחו לעצמכם, זה נובע מהגדרת {::nomarkdown}\( x_{k}\){:/nomarkdown} כסדרת נסיגה).

נותרו רק משוואות 7 ו-8. משוואה 7 מתעסקת בקשר שבין {::nomarkdown}\( t=y_{k}\left(b\right)\){:/nomarkdown} ו-{::nomarkdown}\( y=y_{k}\left(a\right)\){:/nomarkdown} ו-{::nomarkdown}\( k\){:/nomarkdown}. ראשית כל, שימו לב לכך ש-{::nomarkdown}\( t\ge k\){:/nomarkdown} (בגלל שראינו בפוסט הקודם ש-{::nomarkdown}\( y_{n}\ge n\){:/nomarkdown} תמיד). כמו כן, בפוסט הקודם ראינו גם ש-{::nomarkdown}\( y_{n}\equiv_{a-1}n\){:/nomarkdown}, ובמקרה שלנו זה אומר ש-{::nomarkdown}\( t\equiv_{b-1}k\){:/nomarkdown}. ממשוואה 5 ראינו ש-{::nomarkdown}\( b=1+4yp\){:/nomarkdown} ולכן {::nomarkdown}\( t\equiv_{4yp}k\){:/nomarkdown} ומכאן שבפרט {::nomarkdown}\( t\equiv_{4y}k\){:/nomarkdown}. כעת, מה אומרת משוואה 7? ש-{::nomarkdown}\( t=k+4\left(d-1\right)y\){:/nomarkdown}, ולכן העובדה ש-{::nomarkdown}\( t\equiv_{4y}k\){:/nomarkdown} מראה את זה, כי כבר ראינו ש-{::nomarkdown}\( t\ge k\){:/nomarkdown}.

נותרה רק משוואה 8: {::nomarkdown}\( y=k+e-1\){:/nomarkdown}. להראות שהיא פתירה זה מיידי: {::nomarkdown}\( y=y_{k}\left(a\right)\ge k\){:/nomarkdown} (מאוד שימושית, הטענה ש-{::nomarkdown}\( y_{n}\left(a\right)\ge n\){:/nomarkdown}) ולכן קיים {::nomarkdown}\( e\){:/nomarkdown} כנדרש ({::nomarkdown}\( e=y-k+1\){:/nomarkdown}).

סיימנו! הוכחנו ש-{::nomarkdown}\( f\left(k,a\right)=x_{k}\left(a\right)\){:/nomarkdown} היא פונקציה דיופנטית! זה הישג לא מבוטל, עברנו דרך לא קצרה בדרך לחיסול הבעיה העשירית של הילברט.

לפני שאמשיך, אני רוצה לכתוב את משוואות 1-8 בצורה קצת יותר ידידותית למשתמש, עכשיו כשהבנו פחות או יותר מה הולך בהן:
<ol>
	<li>{::nomarkdown}\( x,y\){:/nomarkdown} הם פתרונות של משוואת פל עם הפרמטר {::nomarkdown}\( a\){:/nomarkdown}.</li>
	<li>{::nomarkdown}\( u,v\){:/nomarkdown} הם פתרונות של משוואת פל עם הפרמטר {::nomarkdown}\( a\){:/nomarkdown}.</li>
	<li>{::nomarkdown}\( s,t\){:/nomarkdown} הם פתרונות של משוואת פל עם הפרמטר {::nomarkdown}\( b\){:/nomarkdown}.</li>
	<li>{::nomarkdown}\( y^{2}\){:/nomarkdown} מחלק את {::nomarkdown}\( v\){:/nomarkdown}.</li>
	<li>{::nomarkdown}\( b\equiv_{4y}1\){:/nomarkdown} וגם {::nomarkdown}\( b\equiv_{u}a\){:/nomarkdown} וגם {::nomarkdown}\( b&gt;a\){:/nomarkdown}.</li>
	<li>{::nomarkdown}\( s\equiv_{u}x\){:/nomarkdown} וגם {::nomarkdown}\( s&gt;x\){:/nomarkdown}.</li>
	<li>{::nomarkdown}\( t\equiv_{4y}k\){:/nomarkdown} וגם {::nomarkdown}\( t&gt;k\){:/nomarkdown}.</li>
	<li>{::nomarkdown}\( y\ge k\){:/nomarkdown}.</li>
</ol>
זה כבר נראה הרבה יותר אנושי. בעצם יש לנו כאן שלושה פתרונות למשוואות פל עם שני פרמטרים וכמה קשרים בסיסיים בין הפרמטרים. כל שאר המשתנים שהיו מעורבים במשוואות היו רק משתני עזר שסייעו לנו לכתוב באופן דיופנטי תכונות כמו {::nomarkdown}\( \ge\){:/nomarkdown} וכמו שקילות מודולו. אני מציג את המשוואות כך כדי שיהיה קצת יותר קל להבין מאיפה הן הגיעו ומה עבר בראש של מי שהמציא אותן, למרות שאין לי מושג איך הגיעו להוכחה הזו.

עכשיו, קדימה לגביע הקדוש שלנו! נגדיר את הפונקציה {::nomarkdown}\( h\left(n,k\right)=n^{k}\){:/nomarkdown} ונוכיח שהיא דיופנטית. לשם כך נבנה מערכת משוואות שכוללת את 8 המשוואות שהצגתי קודם, ועוד 4 משוואות חדשות:
<ol>
	<li>{::nomarkdown}\( \left(x-y\left(a-n\right)-m\right)^{2}=\left(f-1\right)^{2}\left(2an-n^{2}-1\right)^{2}\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( m+g=2an-n^{2}-1\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( w=n+h=k+l\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( a^{2}-\left(w^{2}-1\right)\left(w-1\right)^{2}z^{2}=1\){:/nomarkdown}</li>
</ol>
זה הכל. למה זה עובד?

ובכן, בואו נניח ראשית כל שיש לנו פתרון למערכת המשוואות ונוכיח שמתקיים {::nomarkdown}\( m=n^{k}\){:/nomarkdown}.

ראשית, שימו לב שמשוואה מס' 3 (החדשה; אם אתייחס למשוואות הישנות במספר שלהן אומר זאת במפורש מעתה) גוררת ש-{::nomarkdown}\( w&gt;1\){:/nomarkdown} (כי הוא סכום של שני מספרים חיוביים), ולכן {::nomarkdown}\( \left(w^{2}-1\right)\left(w-1\right)^{2}z^{2}&gt;0\){:/nomarkdown} ומכאן על פי משוואה 4 ש-{::nomarkdown}\( a&gt;1\){:/nomarkdown}. אם {::nomarkdown}\( a&gt;1\){:/nomarkdown} אז כל המשוואות הישנות (1 עד 8) מראות ש-{::nomarkdown}\( x=x_{k}\left(a\right)\){:/nomarkdown} ו-{::nomarkdown}\( y=y_{k}\left(a\right)\){:/nomarkdown} - זה מה שעשינו קודם.

עכשיו, כולנו כבר הדחקנו את זה, אבל בפוסט הקודם ראינו ש-{::nomarkdown}\( x_{k}\left(a\right)-y_{k}\left(a\right)\left(a-n\right)\equiv_{2an-n^{2}-1}n^{k}\){:/nomarkdown} (בחיי! אני לא ממציא את זה!). סוף סוף זה יועיל לנו קצת. כפי שאתם רואים, משוואה 1 מהונדסת פחות או יותר כדי להתאים לביטוי הזה; אם ניקח אותה מודולו {::nomarkdown}\( 2an-n^{2}-1\){:/nomarkdown}, נקבל:

{::nomarkdown}\( \left(x-y\left(a-n\right)-m\right)^{2}\equiv_{2an-n^{2}-1}0\){:/nomarkdown}

או במילים אחרות:

{::nomarkdown}\( m\equiv_{2an-n^{2}-1}x-y\left(a-n\right)\equiv n^{k}\){:/nomarkdown} (המעבר האחרון נובע מהמשפט בפוסט הקודם).

יפה, אז אנחנו קרובים באופן מפתיע ליעד שלנו. רק צריך להשתכנע ש-{::nomarkdown}\( m\){:/nomarkdown} ו-{::nomarkdown}\( n^{k}\){:/nomarkdown} הם קטנים יותר מ-{::nomarkdown}\( 2an-n^{2}-1\){:/nomarkdown} ואז נסיים כמו קודם.

בואו תסתכלו רגע על משוואה 4. נראה לכם מוכר? זה לא במקרה, גם זו משוואת פל! הפעם {::nomarkdown}\( w\){:/nomarkdown} הוא על תקן {::nomarkdown}\( a\){:/nomarkdown}, ולכן יש {::nomarkdown}\( j\){:/nomarkdown} כלשהו כך ש-{::nomarkdown}\( a=x_{j}\left(w\right)\){:/nomarkdown} ו-{::nomarkdown}\( \left(w-1\right)z=y_{j}\left(w\right)\){:/nomarkdown}. עכשיו, משפט מהפוסט הקודם שכבר השתמשנו בו כאן הוא ש-{::nomarkdown}\( y_{j}\equiv_{w-1}j\){:/nomarkdown}, אבל מכיוון ש-{::nomarkdown}\( y_{j}\){:/nomarkdown} מתחלק על ידי {::nomarkdown}\( w-1\){:/nomarkdown} נובע מכך ש-{::nomarkdown}\( j\equiv_{w-1}0\){:/nomarkdown}, ולכן בהכרח {::nomarkdown}\( j\ge w-1\){:/nomarkdown}. עכשיו, אנחנו יודעים ש-{::nomarkdown}\( x_{j}\left(w\right)\ge w^{j}\){:/nomarkdown} (שוב, פוסט קודם) ולכן {::nomarkdown}\( a\ge w^{w-1}&gt;n^{k}\){:/nomarkdown}, כשהמעבר האחרון נובע מכך שמשוואה 2 מראה ש-{::nomarkdown}\( w&gt;a,k\){:/nomarkdown}. זה טוב מאוד - זה מראה ש-{::nomarkdown}\( a\){:/nomarkdown} ענקי, כמו שאנחנו צריכים, אבל עוד לא סיימנו.

בואו נציץ במשוואה 2. מה שהיא בעצם אומרת הוא ש-{::nomarkdown}\( m&lt;2an-n^{2}-1\){:/nomarkdown} - כלומר, נותן לנו את הקוטן של {::nomarkdown}\( m\){:/nomarkdown} שרצינו באופן מפורש. אז אם נראה ש-{::nomarkdown}\( n^{k}&lt;2an-n^{2}-1\){:/nomarkdown}, נסיים את הכיוון הזה של ההוכחה. הדרך לעשות את זה היא להכניס טיפה אנליזה לתמונה. בואו נגדיר פונקציה {::nomarkdown}\( f\left(n\right)=2an-n^{2}-1\){:/nomarkdown}. אז {::nomarkdown}\( f\left(1\right)=2a-2\ge a\){:/nomarkdown} (אי השוויון האחרון נובע מכך ש-{::nomarkdown}\( a&gt;1\){:/nomarkdown}). כעת, נגזור את {::nomarkdown}\( f\){:/nomarkdown} ונקבל {::nomarkdown}\( f^{\prime}\left(n\right)=2a-2n\){:/nomarkdown} וזה גדול מ-0 לכל התחום {::nomarkdown}\( 1\le n&lt;a\){:/nomarkdown}, כלומר {::nomarkdown}\( f\){:/nomarkdown} היא פונקציה עולה בתחום הזה ולכן {::nomarkdown}\( f\left(n\right)\ge a\){:/nomarkdown} לכל {::nomarkdown}\( 1\le n&lt;a\){:/nomarkdown}. כעת, אם {::nomarkdown}\( a&gt;n^{k}\){:/nomarkdown} אז בפרט נקבל {::nomarkdown}\( f\left(n\right)=2an-n^{2}-1\ge a&gt;n^{k}\){:/nomarkdown} (אין ל-{::nomarkdown}\( n\){:/nomarkdown} ברירה, הוא חייב להיות קטן מ-{::nomarkdown}\( a\){:/nomarkdown} אחרת {::nomarkdown}\( n^{k}\){:/nomarkdown} לא היה קטן מ-{::nomarkdown}\( a\){:/nomarkdown}). זה <strong>מסיים את הכיוון הראשון של ההוכחה</strong>!

נותר רק הכיוון השני - להראות שאם {::nomarkdown}\( m=n^{k}\){:/nomarkdown}, אז יש למערכת המשוואות שלנו פתרון. בואו נתחיל ממשוואה 3. היא בסך הכל אומרת ש-{::nomarkdown}\( w&gt;n,k\){:/nomarkdown}, אז בואו נבחר את {::nomarkdown}\( w\){:/nomarkdown} להיות מספר <strong>כלשהו</strong> שמקיים את זה. עכשיו, נגדיר {::nomarkdown}\( a=x_{w-1}\left(w\right)\){:/nomarkdown}. מה עם {::nomarkdown}\( y_{w-1}\left(w\right)\){:/nomarkdown}? מטענה מהפוסט הקודם שכבר עשינו בה שימוש פה, {::nomarkdown}\( y_{w-1}\left(w\right)\equiv_{w-1}w-1\equiv0\){:/nomarkdown}. במילים אחרות, {::nomarkdown}\( w-1\){:/nomarkdown} מחלק את {::nomarkdown}\( y_{w-1}\left(w\right)\){:/nomarkdown} ולכן {::nomarkdown}\( y_{w-1}\left(w\right)=z\left(w-1\right)\){:/nomarkdown}, והנה פתרנו את משוואה 4.

כעת, אם {::nomarkdown}\( w&gt;n\){:/nomarkdown} ו-{::nomarkdown}\( w&gt;k\){:/nomarkdown} אז {::nomarkdown}\( a=x_{w-1}\left(w\right)\ge w^{w-1}&gt;n^{k}\){:/nomarkdown} ולכן נקבל (בדיוק כמו קודם) ש-{::nomarkdown}\( m=n^{k}&lt;2an-n^{2}-1\){:/nomarkdown}, מה שנותן לנו פתרון למשוואה 2. נותרה רק משוואה 1!

ובכן, הבה ונגדיר {::nomarkdown}\( x=x_{k}\left(a\right),y=y_{k}\left(a\right)\){:/nomarkdown}. אנחנו יודעים ש-{::nomarkdown}\( x_{k}\left(a\right)-y_{k}\left(a\right)\left(a-n\right)\equiv_{2an-n^{2}-1}n^{k}\){:/nomarkdown}, ובמילים אחרות: {::nomarkdown}\( 2an-n^{2}-1\){:/nomarkdown} מחלק את {::nomarkdown}\( x-y\left(a-n\right)-m\){:/nomarkdown}, כלומר יש {::nomarkdown}\( f\){:/nomarkdown} כך ש-{::nomarkdown}\( x-y\left(a-n\right)-m=\left(f-1\right)\left(x-y\left(a-n\right)-m\right)\){:/nomarkdown}. רק שיש לנו בעיה קטנה - לא ברור אם {::nomarkdown}\( f\){:/nomarkdown} הזה חיובי או שלילי בכלל. הפתרון הוא להעלות את שני אגפי המשוואה בריבוע, ואז לקבל {::nomarkdown}\( \left(x-y\left(a-n\right)-m\right)^{2}=\left(f-1\right)^{2}\left(x-y\left(a-n\right)-m\right)^{2}\){:/nomarkdown} וכעת אם {::nomarkdown}\( f\){:/nomarkdown} היה שלילי אפשר להחליף אותו ב-{::nomarkdown}\( \left\|f\right\|\){:/nomarkdown} מבלי לשים לב להבדל. זה מסיים עם משוואה 1, ומכיוון שכל המשוואות הישנות מסופקות על ידי הפתרון למשוואת פל {::nomarkdown}\( x_{k}\left(a\right)\){:/nomarkdown}, <strong>סיימנו את ההוכחה!</strong>

זה עדיין לא מוכיח שהבעיה העשירית של הילברט היא לא כריעה, אבל זה מוכיח שהפונקציה האקספוננציאלית היא דיופנטית - וזה המכשול שעמד בפני המתמטיקאים שעבדו על הבעיה במשך עשרות שנים. מכאן ואילך העניינים יפסיקו להיראות כמו "חשבון מכולת" ונחזור לדבר על התמונה הגדולה ולהבין איך פונקציה אקספוננציאלית עוזרת לנו.

קצת קרדיט לסיום על כל ההוכחה הזו. אני עובד, כאמור, על בסיס מאמר של מרטין דיוויס שקישרתי אליו בתחילת סדרת הפוסטים הזו. הוא מייחס את ההוכחה שהצגתי כאן (שמבחינה היסטורית אינה ההוכחה הראשונה מסוגה) לג'וליה רובינסון (אחת מהחוקרות המרכזיות של הבעיה העשירית) תוך שימוש בכמה מהרעיונות של יורי מאטיסייביץ' (מי שהוכיח לראשונה שיש פונקציה דיופנטית שגדלה אקספוננציאלית, ובכך סיים את ההוכחה של אי הכריעות של הבעיה העשירית). זו ההוכחה הפשוטה ביותר שהצלחתי למצוא; יש למאטיסייביץ' עצמו ספר על הבעיה, אבל את המאמר של דיוויס תמיד חיבבתי יותר.
