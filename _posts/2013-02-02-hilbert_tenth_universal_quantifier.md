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
בשעה טובה הגענו אל המכשול האחרון שעומד בינינו ובין סיום ההוכחה שהבעיה העשירית של הילברט אינה כריעה - כמת אוניברסלי חסום. אם נצליח להראות שבהינתן ביטוי דיופנטי {::nomarkdown}\( P\){:/nomarkdown} אפשר להוכיח שגם הביטוי {::nomarkdown}\( \forall x&lt;n\left(P\right)\){:/nomarkdown} הוא דיופנטי, נסיים. כאן אמורה להיכנס לתמונה העובדה שהוכחנו (בדם יזע ודמעות) שהפונקציה האקספוננציאלית היא דיופנטית. בואו נתחיל בלראות עבור עוד פונקציות שגדלות בקצב מהיר שהן דיופנטיות.

נפתח בפונקציה שהיא אקספוננציאלית-כפולה: {::nomarkdown}\( h\left(u,v,w\right)=u^{v^{w}}\){:/nomarkdown}. בהינתן שהפונקציה האקספוננציאלית היא דיופנטית, קל לבנות ביטוי עבור הפונקציה הזו:

{::nomarkdown}\( y=u^{v^{w}}\iff\exists z\left(y=u^{z}\wedge z=v^{w}\right)\){:/nomarkdown}

דהיינו, אנחנו עושים שימוש כפול במערכות המשוואות עבור הפונקציה האקספוננציאלית, כל פעם עם משתנים אחרים.

זו הייתה פונקציה קלה, בואו נדבר על משהו מסובך יותר - מקדמי הבינום, {::nomarkdown}\( f\left(n,k\right)={n \choose k}\){:/nomarkdown}. כדי לטפל בהם, קודם כל נוכיח את הזהות {::nomarkdown}\( \sum_{i=k}^{n}{n \choose i}u^{i-k}=\left[\frac{\left(u+1\right)^{n}}{u^{k}}\right]\){:/nomarkdown} שמתקיימת עבור {::nomarkdown}\( 0&lt;k\le n\){:/nomarkdown} ו-{::nomarkdown}\( u&gt;2^{n}\){:/nomarkdown} (והוא מספר טבעי), כאשר סוגריים מרובעים מסמנים ערך שלם תחתון (המספר השלם הגדול ביותר שקטן או שווה למה שבתוך הסוגריים).

אני מניח שלפחות חלקכם משער שהדרך הנכונה להתחיל הוכחה כזו היא עם נוסחת הביטום של ניוטון, שמתארת את הסכום כש-{::nomarkdown}\( k\){:/nomarkdown} מתחיל מ-0: {::nomarkdown}\( \sum_{i=0}^{n}{n \choose i}u^{i}=\left(u+1\right)^{n}\){:/nomarkdown}. כעת, נחלק את שני האגפים ב-{::nomarkdown}\( u^{k}\){:/nomarkdown} (מתבקש לגמרי, נכון?) ונקבל {::nomarkdown}\( \sum_{i=0}^{n}{n \choose i}u^{i-k}=\frac{\left(u+1\right)^{n}}{u^{k}}\){:/nomarkdown}. את הסכום שבאגף שמאל אפשר לחלק לשני סכומים שונים: {::nomarkdown}\( \sum_{i=0}^{k-1}{n \choose i}u^{i-k}+\sum_{i=k}^{n}{n \choose i}u^{i-k}\){:/nomarkdown}. מביניהם, הימני הוא הסכום שאנו רוצים לחשב, והשמאלי הוא סתם שארית מעצבנת. מה שאנחנו רוצים לומר הוא שכאשר לוקחים ערך שלם תחתון על שני הסכומים הללו, הסכום השמאלי פשוט מתפוגג לו. מכיוון שהסכום הימני הוא מספר שלם, מספיק להראות ש-{::nomarkdown}\( \sum_{i=0}^{k-1}{n \choose i}u^{i-k}&lt;1\){:/nomarkdown} כדי להוכיח שהערך השלם התחתון יעלים אותו.

כעת, {::nomarkdown}\( u\){:/nomarkdown} הוא מספר טבעי, כלומר {::nomarkdown}\( u^{i+1-k}\le1\){:/nomarkdown} לכל {::nomarkdown}\( 0\le i&lt;k\){:/nomarkdown}, כלומר (נחלק ב-{::nomarkdown}\( u\){:/nomarkdown} את שני האגפים) לכל {::nomarkdown}\( i&lt;k\){:/nomarkdown} אנו מקבלים {::nomarkdown}\( u^{i-k}\le u^{-1}\){:/nomarkdown}. מכאן שאפשר לחסום את הסכום בצורה הבאה:

{::nomarkdown}\( \sum_{i=0}^{k-1}{n \choose i}u^{i-k}\le u^{-1}\sum_{i=0}^{k-1}{n \choose i}&lt;u^{-1}\sum_{i=0}^{n}{n \choose i}=u^{-1}2^{n}&lt;1\){:/nomarkdown}

וכאן אנחנו משתמשים בהנחה שלנו ש-{::nomarkdown}\( u&gt;2^{n}\){:/nomarkdown} (וכמובן, בכך שעל פי הבינום של ניוטון, {::nomarkdown}\( \sum_{i=0}^{n}{n \choose i}=\left(1+1\right)^{n}\){:/nomarkdown}).

שימו לב למסקנה הפשוטה מהזהות {::nomarkdown}\( \sum_{i=k}^{n}{n \choose i}u^{i-k}=\left[\frac{\left(u+1\right)^{n}}{u^{k}}\right]\){:/nomarkdown} - אם ניקח את המשוואה הזו ונתבונן עליה מודולו {::nomarkdown}\( u\){:/nomarkdown}, נקבל {::nomarkdown}\( {n \choose k}\equiv_{u}\left[\frac{\left(u+1\right)^{n}}{u^{k}}\right]\){:/nomarkdown}, כי כל שאר המחוברים מתאפסים כשמסתכלים על המשוואה מודולו {::nomarkdown}\( u\){:/nomarkdown}. זה התעלול שיאפשר לנו להגדיר את {::nomarkdown}\( {n \choose k}\){:/nomarkdown} דיופנטית. מה שמעניין במשוואה הזו היא שאגף שמאל <strong>לא כולל </strong>את {::nomarkdown}\( u\){:/nomarkdown}. מה שראינו הוא ש<strong>לכל</strong> {::nomarkdown}\( u&gt;2^{n}\){:/nomarkdown} מתקיים ש-{::nomarkdown}\( \left[\frac{\left(u+1\right)^{n}}{u^{k}}\right]\){:/nomarkdown} שקול מודולו {::nomarkdown}\( u\){:/nomarkdown} ל-{::nomarkdown}\( {n \choose k}\){:/nomarkdown}. כעת, {::nomarkdown}\( {n \choose k}&lt;2^{n}&lt;u\){:/nomarkdown} ולכן זו יותר מסתם שקילות - זה מה שמתקבל כשלוקחים את {::nomarkdown}\( \left[\frac{\left(u+1\right)^{n}}{u^{k}}\right]\){:/nomarkdown}, מחלקים ב-{::nomarkdown}\( u\){:/nomarkdown} ובודקים מה השארית (נסו לחשב בעצמכם - במחשב - כמה מקרים אם אינכם מאמינים). זה מאפשר לנו להגדיר את {::nomarkdown}\( {n \choose k}\){:/nomarkdown} באמצעות הביטוי הדיופנטי הבא:

{::nomarkdown}\( z={n \choose k}\iff\exists u,v,w\left(v=2^{n}\wedge u&gt;v\wedge w=\left[\frac{\left(u+1\right)^{n}}{u^{k}}\right]\wedge z\equiv_{u}w\wedge z&lt;u\right)\){:/nomarkdown}

יש כאן כמה וכמה רכיבים בתוך הסוגריים שצריך להשתכנע שכל אחד מהם לכשעצמו הוא דיופנטי. אז ראשית, {::nomarkdown}\( v=2^{n}\){:/nomarkdown} הוא דיופנטי כי הפונקציה האקספוננציאלית היא דיופנטית (לכן נזקקנו לה). הביטוי {::nomarkdown}\( u&gt;v\){:/nomarkdown} הוא בבירור דיופנטי (ראינו את זה בעבר - נסו לשחזר מהראש). כנ"ל {::nomarkdown}\( z&lt;u\){:/nomarkdown}. הביטוי {::nomarkdown}\( z\equiv_{u}w\){:/nomarkdown} אולי נראה טיפה יותר טריקי, אבל הוא שקול ל-{::nomarkdown}\( \exists a\left(z=ua+w\right)\){:/nomarkdown} הדיופנטי. מי נשאר? רק {::nomarkdown}\( w=\left[\frac{\left(u+1\right)^{n}}{u^{k}}\right]\){:/nomarkdown} המפחיד. האתגר הוא בעצם להראות ש-{::nomarkdown}\( w=\left[\frac{x}{y}\right]\){:/nomarkdown} הוא דיופנטי, כי {::nomarkdown}\( \left(u+1\right)^{n}\){:/nomarkdown} ו-{::nomarkdown}\( u^{k}\){:/nomarkdown} הן פונקציות אקספוננציאליות ולכן דיופנטיות. למרבה המזל, מכיוון שאי-שוויונים הם דיופנטיים, קל לתאר גם את {::nomarkdown}\( w=\left[\frac{x}{y}\right]\){:/nomarkdown}: הרי אם {::nomarkdown}\( w=\left[\frac{x}{y}\right]\){:/nomarkdown} זה אומר ש-{::nomarkdown}\( w\le\frac{x}{y}\le w+1\){:/nomarkdown} ולכן {::nomarkdown}\( yw\le x\wedge x\le y\left(w+1\right)\){:/nomarkdown}, ושתי המשוואות הללו מספיקות. מסקנה סופית: {::nomarkdown}\( {n \choose k}\){:/nomarkdown} היא דיופנטית (בזכות העובדה שהפונקציה האקספוננציאלית היא דיופנטית).

בואו נעבור עכשיו לתקוף פונקציה מפורסמת אחרת שגדלה מהר: {::nomarkdown}\( f\left(n\right)=n!\){:/nomarkdown}. גם כאן כדי לתקוף אותה אנחנו צריכים משוואה אלגברית נחמדה כלשהי שהיא מקיימת; במקרה שלנו, אם {::nomarkdown}\( u&gt;\left(2n\right)^{n+1}\){:/nomarkdown} אז {::nomarkdown}\( n!=\left[u^{n}/{u \choose n}\right]\){:/nomarkdown} היא המשוואה המדוברת. שימו לב שזה משהו בסגנון דומה להוכחה הקודמת; גם פה אנחנו משתמשים בכך שאם אנחנו לוקחים שתי פונקציות שגדלות מהר עם בסיס כלשהו שמסומן ב-{::nomarkdown}\( u\){:/nomarkdown} שהוא גדול דיו, אז מקבלים קירוב רציונלי די טוב לפונקציה שאנחנו רוצים לתקוף. כמו קודם, בואו ננסה להבין מהו {::nomarkdown}\( u^{n}/{u \choose n}\){:/nomarkdown} עבור {::nomarkdown}\( u\){:/nomarkdown} גדול שכזה:

{::nomarkdown}\( u^{n}/{u \choose n}=u^{n}\cdot\frac{n!\left(u-n\right)!}{u!}=\frac{u^{n}n!}{u\left(u-1\right)\left(u-2\right)\cdots\left(u-n+1\right)}=n!\left(\frac{1}{1\left(1-\frac{1}{u}\right)\cdots\left(1-\frac{n-1}{u}\right)}\right)\){:/nomarkdown}

כל מה שהלך כאן הוא אלגברה בסיסית. הביטוי האחרון נראה קצת מבהיל אולי, אבל עם אי שוויון אפשר להיפטר ממנו די בקלות:

{::nomarkdown}\( n!\left(\frac{1}{1\left(1-\frac{1}{u}\right)\cdots\left(1-\frac{n-1}{u}\right)}\right)&lt;n!\frac{1}{\left(1-\frac{n}{u}\right)^{n}}\){:/nomarkdown}

זאת כי ככל שמגדילים את הערך של {::nomarkdown}\( x\){:/nomarkdown} בביטוי {::nomarkdown}\( \left(1-\frac{x}{u}\right)\){:/nomarkdown} כך מקטינים את הביטוי, ולכן מגדילים את אחד חלקי הביטוי.

עכשיו, {::nomarkdown}\( \frac{1}{\left(1-\frac{n}{u}\right)^{n}}=\left(\frac{1}{1-\frac{n}{u}}\right)^{n}\){:/nomarkdown} ולכן כדאי לנו למצוא חסם כלשהו על מה שבפנים, {::nomarkdown}\( \frac{1}{1-\frac{n}{u}}\){:/nomarkdown}. לצורך כך כדאי להיזכר שהדבר הזה נראה כמו סכום של טור גיאומטרי. באופן כללי, אם {::nomarkdown}\( \left\|q\right\|&lt;1\){:/nomarkdown}, אז מתקיים

{::nomarkdown}\( \sum_{k=0}^{\infty}q^{k}=\frac{1}{1-q}\){:/nomarkdown}

ובמקרה שלנו {::nomarkdown}\( u&gt;2n\){:/nomarkdown} (ממש ממש גדול יותר, אם תציצו שניה במה שדרשנו עליו) כך ש-{::nomarkdown}\( \frac{n}{u}&lt;\frac{1}{2}\){:/nomarkdown}, ולכן:

{::nomarkdown}\( \frac{1}{1-\frac{n}{u}}=\sum_{k=0}^{\infty}\left(\frac{n}{u}\right)^{k}=1+\left(\frac{n}{u}\right)\sum_{k=0}^{\infty}\left(\frac{n}{u}\right)^{k}&lt;1+\frac{n}{u}\sum_{k=0}^{\infty}\left(\frac{1}{2}\right)^{k}=1+\frac{2n}{u}\){:/nomarkdown}

כל המעברים כאן הם חשבון פשוט, אבל את השני ביצעתי קצת בזריזות: פשוט הוצאתי מהסכום את האיבר הראשון שלו (1) ואז הוצאתי החוצה גורם משותף לשאר האיברים ({::nomarkdown}\( \frac{n}{u}\){:/nomarkdown}).

עכשיו, מה קורה כשמעלים את זה בחזקת {::nomarkdown}\( n\){:/nomarkdown}? אפשר להשתמש בבינום של ניוטון ולקבל:

{::nomarkdown}\( \left(1+\frac{2n}{u}\right)^{n}=\sum_{k=0}^{n}{n \choose k}\left(\frac{2n}{u}\right)^{k}&lt;1+\frac{2n}{u}\sum_{k=1}^{n}{n \choose k}&lt;1+\frac{2n}{u}2^{n}\){:/nomarkdown}

גם פה רוב המעברים הם פשוטים - הראשון הוא הבינום, השני הוא פשוט פירוק לאיבר ראשון בסכום וכל היתר והוצאת גורם משותף והתעלמות מהיתר, בהתבסס על כך ש-{::nomarkdown}\( \frac{2n}{u}&lt;1\){:/nomarkdown}, והמעבר השלישי הוא פשוט הנוסחה {::nomarkdown}\( \sum_{k=0}^{n}{n \choose k}=2^{n}\){:/nomarkdown} בפעולה.

בואו נזכר ממה התחלנו: {::nomarkdown}\( u^{n}/{u \choose n}\){:/nomarkdown}. הגענו לכך שהוא קטן מ-{::nomarkdown}\( n!\frac{1}{\left(1-\frac{n}{u}\right)^{n}}\){:/nomarkdown}, ולכן:

{::nomarkdown}\( u^{n}/{u \choose n}&lt;n!+\frac{2n}{u}2^{n}n!&lt;n!+\frac{2^{n+1}n^{n+1}}{u}&lt;n!+1\){:/nomarkdown}

המעבר הלפני אחרון נובע מכך ש-{::nomarkdown}\( n!&lt;n^{n}\){:/nomarkdown} (כמובן - בשני המקרים מכפילים {::nomarkdown}\( n\){:/nomarkdown} איברים אבל ב-{::nomarkdown}\( n!\){:/nomarkdown} רובם קטנים יותר מ-{::nomarkdown}\( n\){:/nomarkdown}) המעבר האחרון נובע מההנחה שלנו על {::nomarkdown}\( u\){:/nomarkdown}: {::nomarkdown}\( u&gt;\left(2n\right)^{n+1}\){:/nomarkdown}. זה מסיים את ההוכחה כי זה מראה ש-{::nomarkdown}\( n!\le u^{n}/{u \choose n}&lt;n!+1\){:/nomarkdown} ולכן לקיחת ערך שלם תמיד תחזיר לנו {::nomarkdown}\( n!\){:/nomarkdown}. אם עוד לא ברור למה הביטוי הזה הוא לפחות {::nomarkdown}\( n!\){:/nomarkdown}, זכרו ש-{::nomarkdown}\( u^{n}/{u \choose n}=\frac{u^{n}}{u\left(u-1\right)\left(u-2\right)\cdots\left(u-n+1\right)}n!\){:/nomarkdown} - במונה ובמכנה יש {::nomarkdown}\( n\){:/nomarkdown} מוכפלים, אבל במונה כולם {::nomarkdown}\( u\){:/nomarkdown} ובמכנה רובם קטנים מ-{::nomarkdown}\( u\){:/nomarkdown}.

עכשיו אפשר להוכיח ש-{::nomarkdown}\( n!\){:/nomarkdown} דיופנטית בהתבסס על כך ש-{::nomarkdown}\( {n \choose k}\){:/nomarkdown} דיופנטית. הביטוי הדיופנטי הוא פשוט למדי:

{::nomarkdown}\( m=n!\iff\exists u\left[{u \choose n}m\le u^{n}\wedge u^{n}\le{u \choose n}\left(m+1\right)\wedge u&gt;\left(2n\right)^{n+1}\right]\){:/nomarkdown}

יפה. הראינו כבר על שלוש פונקציות שגדלות "מהר" שהן דיופנטיות - {::nomarkdown}\( n^{k},{n \choose k},n!\){:/nomarkdown}. עכשיו אפשר לעבור לפונקציה שהיא היעד הסופי שלנו, ובהשוואה לשלוש הפונקציות הטבעיות הללו אולי תהיה טיפה מאכזבת: {::nomarkdown}\( h\left(a,b,y\right)=\prod_{k=1}^{y}\left(a+bk\right)\){:/nomarkdown}. מילולית, הפונקציה כופלת את {::nomarkdown}\( y\){:/nomarkdown} האיברים הראשונים בסדרה חשבונית שהאיבר הראשון שלה הוא {::nomarkdown}\( a+b\){:/nomarkdown} וההפרש בין שני איברים סמוכים הוא {::nomarkdown}\( b\){:/nomarkdown}. למה הפונקציה הזו דווקא כל כך יעילה? ובכן... אה... זה טכני, חכו ותראו. לא תהיה תובנה מדהימה בסוף.

כדי להראות שהפונקציה הזו דיופנטית נשתמש בתעלול שאיכשהו יערבב את כל שלוש הפונקציות שראינו עד כה. ראשית, נניח שיש לנו {::nomarkdown}\( q,M\){:/nomarkdown} שעבורם מתקיימת המשוואה {::nomarkdown}\( bq\equiv_{M}a\){:/nomarkdown}. אז נרצה להראות שהקסם הבא מתקיים:

{::nomarkdown}\( \prod_{k=1}^{y}\left(a+bk\right)\equiv_{M}b^{y}y!{q+y \choose y}\){:/nomarkdown}

ההוכחה דווקא פשוטה למדי הפעם. פשוט נפתח את הביטוי:

{::nomarkdown}\( b^{y}y!{q+y \choose y}=b^{y}y!\frac{\left(q+y\right)!}{y!q!}=b^{y}\left(q+y\right)\left(q+y-1\right)\cdots\left(q+1\right)\){:/nomarkdown}

{::nomarkdown}\( =\left(bq+by\right)\left(bq+b\left(y-1\right)\right)\cdots\left(bq+b\right)\equiv_{M}\prod_{k=1}^{y}\left(a+bk\right)\){:/nomarkdown}

מה שנותר לעשות הוא להבטיח שאכן קיימים {::nomarkdown}\( M,q\){:/nomarkdown} שמקיימים את המשוואה {::nomarkdown}\( bq\equiv_{M}a\){:/nomarkdown}. בגלל האותיות העסק יכול להיראות מבלבל, אז בואו נשכח לרגע מהכל ונעבור לדון במשהו כללי - המשוואה הלינארית {::nomarkdown}\( ax\equiv_{n}b\){:/nomarkdown} כאשר {::nomarkdown}\( a,b,n\){:/nomarkdown} נתונים ואילו {::nomarkdown}\( x\){:/nomarkdown} הוא המשתנה. הטענה היא שלמשוואה הזו קיים פתרון אם {::nomarkdown}\( \left(a,n\right)=1\){:/nomarkdown}, כלומר {::nomarkdown}\( a\){:/nomarkdown} זר ל-{::nomarkdown}\( n\){:/nomarkdown}. הסיבה לכך היא שבמקרה הזה, קיים ל-{::nomarkdown}\( a\){:/nomarkdown} הופכי כפלי מודולו {::nomarkdown}\( n\){:/nomarkdown} ולכן {::nomarkdown}\( x\equiv_{n}a^{-1}b\){:/nomarkdown}. במקרה שלנו ה"משתנה" הוא בכלל {::nomarkdown}\( q\){:/nomarkdown} ומה שאנחנו צריכים כדי שהמשוואה תהיה פתירה הוא שיתקיים {::nomarkdown}\( \left(b,M\right)=1\){:/nomarkdown}; למזלנו, אנחנו יכולים לבחור את {::nomarkdown}\( M\){:/nomarkdown} כדי להבטיח שזה יקרה: נבחר {::nomarkdown}\( M=b\left(a+by\right)^{y}+1\){:/nomarkdown}, אז אגף ימין בודאות לא מתחלק על ידי אף ראשוני שמחלק את {::nomarkdown}\( b\){:/nomarkdown} (כי כפלנו את {::nomarkdown}\( b\){:/nomarkdown} במשהו והוספנו 1) ולכן {::nomarkdown}\( \left(M,b\right)\){:/nomarkdown} זרים ומובטח לנו שקיים {::nomarkdown}\( q\){:/nomarkdown} כלשהו (לא יודע מי) כך ש-{::nomarkdown}\( bq\equiv_{M}a\){:/nomarkdown}. את כל זה אפשר לכתוב בתור ביטוי דיופנטי:

{::nomarkdown}\( z=\prod_{k=1}^{y}\left(a+bk\right)\iff\exists M,q,t,p\){:/nomarkdown}

{::nomarkdown}\( M=b\left(a+by\right)^{y}+1\wedge bq=a+Mt\){:/nomarkdown}

{::nomarkdown}\( \wedge z&lt;M\wedge z+Mp=b^{y}y!{q+y \choose y}\){:/nomarkdown}

ובזאת סיימנו את שלב בניית הכלים. סוף סוף יש לנו את מה שמאפשר להוכיח שהכמת האוניברסלי החסום הוא דיופנטי - הצעד האחרון בהוכחה כולה!

בואו נעבור על מה שאנחנו רוצים לעשות. ביטוי דיופנטי מתורגם בסופו של דבר לפולינום {::nomarkdown}\( P\){:/nomarkdown} ולמשוואה

{::nomarkdown}\( \exists y_{1},\dots,y_{m}\left[P\left(x_{1},\dots,x_{n},y_{1},\dots,y_{m}\right)=0\right]\){:/nomarkdown}

שמגדירה קבוצה - בדיוק את קבוצת ה-{::nomarkdown}\( x\){:/nomarkdown}-ים שכשמציבים אותם מקבלים משוואה פתירה.

מה שאנחנו רוצים לעשות הוא להוכיח שגם את הביטוי הבא:

{::nomarkdown}\( \forall z\le y\exists y_{1},\dots,y_{m}\left[P\left(x_{1},\dots,x_{n},z,y,y_{1},\dots,y_{m}\right)=0\right]\){:/nomarkdown}

עבור פולינום {::nomarkdown}\( P\){:/nomarkdown} כלשהו, אפשר להמיר לביטוי מהסוג שלעיל, שלא כולל כמת "לכל" ועדיין מגדיר את אותה קבוצת {::nomarkdown}\( x\){:/nomarkdown}-ים שכשמציבים אותם מקבלים משוואה פתירה. אבחנה אחת להתחלה היא שהביטוי שכתבתי כרגע שקול לביטוי

{::nomarkdown}\( \exists u\forall_{\le y}z\exists_{\le u}y_{1},\dots,y_{m}\left[P\left(x_{1},\dots,x_{n},z,y,y_{1},\dots,y_{m}\right)=0\right]\){:/nomarkdown}

שבו אני מגביל את {::nomarkdown}\( z\){:/nomarkdown} להיות קטן או שווה ל-{::nomarkdown}\( y\){:/nomarkdown} כלשהו ומגביל את כל ה-{::nomarkdown}\( y_{i}\){:/nomarkdown}-ים להיות קטנים מ-{::nomarkdown}\( u\){:/nomarkdown} כלשהו שכמובן קיים בהנחה שקיימים {::nomarkdown}\( y_{i}\){:/nomarkdown}-ים שפותרים את המשוואה (פשוט קחו את המקסימום מביניהם).

עכשיו לאקשן. אני טוען שבהינתן פולינום {::nomarkdown}\( Q\){:/nomarkdown} מתאים, הביטוי הבא:

{::nomarkdown}\( \forall_{\le y}z\exists_{\le u}y_{1},\dots,y_{m}\left[P\left(x_{1},\dots,x_{n},z,y,y_{1},\dots,y_{m}\right)=0\right]\){:/nomarkdown}

שקול לביטוי המפלצתי הבא, שהחשיבות שלו בכך שהוא <strong>לא כולל</strong> את הכמת האוניברסלי:

{::nomarkdown}\( \exists c,t,a_{1},\dots,a_{m}\){:/nomarkdown}

{::nomarkdown}\( 1+ct=\prod_{k=1}^{y}1+kt\){:/nomarkdown}

{::nomarkdown}\( \wedge t=Q\left(y,u,x_{1},\dots,x_{n}\right)!\wedge1+ct\|\prod_{j=1}^{u}\left(a_{1}-j\right)\){:/nomarkdown}

{::nomarkdown}\( \wedge\dots\wedge1+ct\|\prod_{j=1}^{u}\left(a_{m}-j\right)\){:/nomarkdown}

{::nomarkdown}\( \wedge P\left(x_{1},\dots,x_{n},c,y,a_{1},\dots,a_{m}\right)\equiv_{1+ct}0\){:/nomarkdown}

כדי שזה יעבוד, {::nomarkdown}\( Q\left(y,u,x_{1},\dots,x_{n}\right)\){:/nomarkdown} צריך לקיים את שלוש התכונות הבאות:

{::nomarkdown}\( Q\left(y,u,x_{1},\dots,x_{n}\right)&gt;u\){:/nomarkdown}

{::nomarkdown}\( Q\left(y,u,x_{1},\dots,x_{n}\right)&gt;y\){:/nomarkdown}

אם {::nomarkdown}\( z\le y\){:/nomarkdown} וגם {::nomarkdown}\( y_{1},\dots,y_{m}\le u\){:/nomarkdown} אז

{::nomarkdown}\( \left\|P\left(x_{1},\dots,x_{n},z,y,y_{1},\dots,y_{m}\right)\right\|\le Q\left(y,u,x_{1},\dots,x_{n}\right)\){:/nomarkdown}

זהו. אם נצליח לעשות את זה, גמרנו, שכן בבירור הביטוי המפלצתי שכתבתי הוא דיופנטי - הוא כולל רק את {::nomarkdown}\( \prod\left(a+bk\right)\){:/nomarkdown} שכבר ראינו שהיא דיופנטית, ואת היחס {::nomarkdown}\( a\|b\){:/nomarkdown} ("{::nomarkdown}\( a\){:/nomarkdown} מחלק את {::nomarkdown}\( b\){:/nomarkdown}") שכבר ראינו שהוא דיופנטי, ואת היחס {::nomarkdown}\( \equiv\){:/nomarkdown} שכבר ראינו שהוא דיופנטי, ואת הפונקציה {::nomarkdown}\( n!\){:/nomarkdown} שכבר ראינו שהיא דיופנטית.

עכשיו מכיוון שזו הוכחת שקילות, צריך להוכיח שני כיוונים. בואו נניח קודם כל שיש לנו {::nomarkdown}\( x_{1},\dots,x_{n},y,u\){:/nomarkdown} שעבורם הביטוי הדיופנטי המפלצתי הוא נכון (כלומר, יש פתרון למשוואות שלו) ונראה שקיים ערך של {::nomarkdown}\( z\){:/nomarkdown} שחסום על ידי {::nomarkdown}\( y\){:/nomarkdown} כך שעבורו קיימים ערכים של {::nomarkdown}\( y_{i}\){:/nomarkdown}-ים שחסומים על ידי {::nomarkdown}\( u\){:/nomarkdown} כך ש-{::nomarkdown}\( P\left(x_{1},\dots,x_{n},z,y,y_{1},\dots,y_{m}\right)=0\){:/nomarkdown}.

בואו נניח ש-{::nomarkdown}\( z=k\){:/nomarkdown}, כאשר {::nomarkdown}\( 1\le k\le y\){:/nomarkdown}. אנחנו רוצים למצוא {::nomarkdown}\( y_{1}^{\left(k\right)},\dots,y_{m}^{\left(k\right)}\){:/nomarkdown} כך ש-{::nomarkdown}\( P\left(x_{1},\dots,x_{n},y,k,y_{1}^{\left(k\right)},\dots,y_{m}^{\left(k\right)}\right)=0\){:/nomarkdown}. אנחנו יודעים שהביטוי הדיופנטי המפלצתי פתיר. אז בואו ניקח את הצבת הערכים לתוכו ונשתמש בה. בפרט, הצבת הערכים הזו נותנת לנו {::nomarkdown}\( a_{1},\dots,a_{m}\){:/nomarkdown} ו-{::nomarkdown}\( t\){:/nomarkdown}. בואו נסמן ב-{::nomarkdown}\( p_{k}\){:/nomarkdown} גורם ראשוני כלשהו של {::nomarkdown}\( 1+kt\){:/nomarkdown}, וכעת נגדיר:

{::nomarkdown}\( y_{i}^{\left(k\right)}=a_{i}\mbox{ mod }p_{k}\){:/nomarkdown}

דהיינו, {::nomarkdown}\( y_{i}^{\left(k\right)}\){:/nomarkdown} מתקבל מחלוקת {::nomarkdown}\( a_{i}\){:/nomarkdown} ב-{::nomarkdown}\( p_{k}\){:/nomarkdown} ולקיחת השארית. אני טוען שהערכים הללו אכן מספקים את {::nomarkdown}\( P\){:/nomarkdown}, ושהם לא גדולים מ-{::nomarkdown}\( u\){:/nomarkdown}, כלומר {::nomarkdown}\( 1\le y_{i}^{\left(k\right)}\le u\){:/nomarkdown}. מדוע?

ובכן, ראשית נטפל בעניין הגודל. שימו לב לכך ש-{::nomarkdown}\( p_{k}\|1+kt\){:/nomarkdown} (כי בחרנו את {::nomarkdown}\( p_{k}\){:/nomarkdown} להיות גורם של הביטוי הימני), וש-{::nomarkdown}\( 1+kt\|1+ct\){:/nomarkdown} (זה נובע מייד מהמשוואה הראשונה בביטוי המפלצתי) וש-{::nomarkdown}\( 1+ct\|\prod_{j=1}^{u}\left(a_{i}-j\right)\){:/nomarkdown} (זו אחת מהמשוואות בביטוי המפלצתי). מסקנה: {::nomarkdown}\( p_{k}\|\prod_{j=1}^{u}\left(a_{i}-j\right)\){:/nomarkdown}, אבל מכיוון שלקחנו את {::nomarkdown}\( p_{k}\){:/nomarkdown} להיות ראשוני, אם הוא מחלק מכפלה הוא מחלק אחד מאיבריה, כלומר יש {::nomarkdown}\( j\){:/nomarkdown} ספציפי כלשהו כך ש-{::nomarkdown}\( p_{k}\|a_{i}-j\){:/nomarkdown}. מסקנה: {::nomarkdown}\( a_{i}\equiv_{p_{k}}j\equiv_{p_{k}}y_{i}^{\left(k\right)}\){:/nomarkdown}.

אם אצליח לשכנע אתכם ש-{::nomarkdown}\( y_{i}^{\left(k\right)}=j\){:/nomarkdown} זה יראה ש-{::nomarkdown}\( y_{i}^{\left(k\right)}\){:/nomarkdown} קטן מספיק, כי {::nomarkdown}\( 1\le j\le u\){:/nomarkdown}. כעת, {::nomarkdown}\( y_{i}^{\left(k\right)}\){:/nomarkdown} התקבל מחלוקה של משהו ב-{::nomarkdown}\( p_{k}\){:/nomarkdown} ולקיחת השארית, כלומר הוא אוטומטית קטן מ-{::nomarkdown}\( p_{k}\){:/nomarkdown}. אם נוכיח ש-{::nomarkdown}\( j&lt;p_{k}\){:/nomarkdown} זה יסיים את העניין כי שני מספרים ששקולים מודולו {::nomarkdown}\( p_{k}\){:/nomarkdown} ושניהם קטנים מ-{::nomarkdown}\( p_{k}\){:/nomarkdown} חייבים להיות שווים. כדי להראות ש-{::nomarkdown}\( j&lt;p_{k}\){:/nomarkdown} מספיק להראות ש-{::nomarkdown}\( u&lt;p_{k}\){:/nomarkdown}. כעת נכניס את {::nomarkdown}\( Q\){:/nomarkdown} לתמונה: כזכור, {::nomarkdown}\( Q\left(y,u,x_{1},\dots,x_{n}\right)&gt;u\){:/nomarkdown}, ולכן די לנו להראות ש-{::nomarkdown}\( p_{k}&gt;Q\left(y,u,x_{1},\dots,x_{n}\right)\){:/nomarkdown}. איך נעשה את זה? ובכן, בואו נסתכל על הביטוי המפלצתי ונראה איך {::nomarkdown}\( Q\){:/nomarkdown} בא לידי ביטוי בו.

יש רק משוואה אחת שמערבת את {::nomarkdown}\( Q\){:/nomarkdown}: {::nomarkdown}\( t=Q\left(y,u,x_{1},\dots,x_{n}\right)!\){:/nomarkdown}. מילולית זה אומר ש-{::nomarkdown}\( t\){:/nomarkdown} הוא מכפלת <strong>כל</strong> המספרים הטבעיים עד וכולל {::nomarkdown}\( Q\left(y,u,x_{1},\dots,x_{n}\right)\){:/nomarkdown}. כעת, אם מישהו מחלק את {::nomarkdown}\( 1+kt\){:/nomarkdown} אז הוא לא מחלק את {::nomarkdown}\( t\){:/nomarkdown}, ולכן הוא לא יכול להיות אף אחד מהמספרים הטבעיים עד וכולל {::nomarkdown}\( Q\left(y,u,x_{1},\dots,x_{n}\right)\){:/nomarkdown}. מסקנה: {::nomarkdown}\( p_{k}&gt;Q\left(y,u,x_{1},\dots,x_{n}\right)!\){:/nomarkdown}, וזה מה שרצינו.

הראינו אם כן שה-{::nomarkdown}\( y_{i}^{\left(k\right)}\){:/nomarkdown}-ים הם בסדר הגודל הנכון, אבל למה הם פותרים את {::nomarkdown}\( P\){:/nomarkdown}?

ובכן, מכיוון ש-{::nomarkdown}\( p_{k}\){:/nomarkdown} מחלק את {::nomarkdown}\( 1+kt\){:/nomarkdown} וגם את {::nomarkdown}\( 1+ct\){:/nomarkdown} הרי שקיבלנו:

{::nomarkdown}\( 1+ct\equiv_{p_{k}}0\){:/nomarkdown}

{::nomarkdown}\( 1+kt\equiv_{p_{k}}0\){:/nomarkdown}

נכפול את המשוואה הראשונה ב-{::nomarkdown}\( k\){:/nomarkdown}, את השניה ב-{::nomarkdown}\( c\){:/nomarkdown}, ונקבל:

{::nomarkdown}\( k+kct\equiv_{p_{k}}0\){:/nomarkdown}

{::nomarkdown}\( c+kct\equiv_{p_{k}}0\){:/nomarkdown}

נשווה את שתיהן ונקבל ש-{::nomarkdown}\( k\equiv_{p_{k}}c\){:/nomarkdown}. כמו כן, אנחנו זוכרים שעל פי הגדרתם, {::nomarkdown}\( y_{i}^{\left(k\right)}\equiv_{p_{k}}a_{i}\){:/nomarkdown}. המסקנה:

{::nomarkdown}\( P\left(x_{1},\dots,x_{n},k,y,y_{1}^{\left(k\right)},\dots,y_{m}^{\left(k\right)}\right)\equiv_{p_{k}}P\left(x_{1},\dots,x_{n},c,y,a_{1},\dots,a_{m}\right)\equiv_{p_{k}}0\){:/nomarkdown}

(המעבר השני נובע מכך ש-{::nomarkdown}\( P\equiv_{1+ct}0\){:/nomarkdown} ו-{::nomarkdown}\( p_{k}\){:/nomarkdown} מחלק את {::nomarkdown}\( 1+ct\){:/nomarkdown}).

עכשיו, השוויון שלעיל לא אומר ש-{::nomarkdown}\( P\left(x_{1},\dots,x_{n},k,y,y_{1}^{\left(k\right)},\dots,y_{m}^{\left(k\right)}\right)=0\){:/nomarkdown}, רק שקול לאפס מודולו {::nomarkdown}\( p_{k}\){:/nomarkdown}. כדי להראות שוויון לאפס צריך להראות שהביטוי הזה גם קטן מ-{::nomarkdown}\( p_{k}\){:/nomarkdown}. אבל זה שוב נובע מ-{::nomarkdown}\( Q\){:/nomarkdown}, הפעם מהתכונה השלישית שלו:

{::nomarkdown}\( \left\|P\left(x_{1},\dots,x_{n},k,y,y_{1}^{\left(k\right)},\dots,y_{m}^{\left(k\right)}\right)\right\|\le Q\left(y,u,x_{1},\dots,x_{n}\right)&lt;p_{k}\){:/nomarkdown}

וסיימנו את כיוון הגרירה הראשון, לפיו אם {::nomarkdown}\( x_{1},\dots,x_{n}\){:/nomarkdown} פותרים את הביטוי המפלצתי הם פותרים את {::nomarkdown}\( P\){:/nomarkdown} ה"רגיל".

נותר הכיוון השני. נניח שעבור {::nomarkdown}\( x_{1},\dots,x_{n},y\){:/nomarkdown}, לכל {::nomarkdown}\( 1\le k\le y\){:/nomarkdown} יש {::nomarkdown}\( y_{1}^{\left(k\right)},\dots,y_{m}^{\left(k\right)}\){:/nomarkdown} כך ש-

{::nomarkdown}\( P\left(x_{1},\dots,x_{n},k,y,y_{1}^{\left(k\right)},\dots,y_{m}^{\left(k\right)}\right)=0\){:/nomarkdown}.

אנחנו רוצים עכשיו להוכיח קיום של {::nomarkdown}\( t,c,a_{1},\dots,a_{m}\){:/nomarkdown} שפותרים את מערכת המשוואות המפלצתית.

נסמן בתור {::nomarkdown}\( u\){:/nomarkdown} מספר שגדול מכל ה-{::nomarkdown}\( y_{i}^{\left(k\right)}\){:/nomarkdown}-ים הללו. כעת, נגדיר {::nomarkdown}\( t=Q\left(y,u,x_{1},\dots,x_{n}\right)!\){:/nomarkdown}. נותר לנו להגדיר את {::nomarkdown}\( c\){:/nomarkdown} ואת ה-{::nomarkdown}\( a_{i}\){:/nomarkdown}-ים.

כעת, {::nomarkdown}\( 1+kt\equiv_{t}1\){:/nomarkdown} ולכן {::nomarkdown}\( \prod_{k=1}^{y}\left(1+kt\right)\equiv_{t}1\){:/nomarkdown}. המשמעות הישירה של השקילות הזו היא שקיים {::nomarkdown}\( c\){:/nomarkdown} כך ש-{::nomarkdown}\( \prod_{k=1}^{y}\left(1+kt\right)=1+ct\){:/nomarkdown}, כך שמצאנו את ה-{::nomarkdown}\( c\){:/nomarkdown} שלנו והוא מקיים את המשוואה הראשונה בביטוי המפלצתי. נשאר רק לבחור את ה-{::nomarkdown}\( a_{i}\){:/nomarkdown}-ים כך שיקיימו את המשוואות {::nomarkdown}\( 1+ct\|\prod_{j=1}^{u}\left(a_{i}-j\right)\){:/nomarkdown}, וכך שיתקיים {::nomarkdown}\( P\left(x_{1},\dots,x_{n},c,y,a_{1},\dots,a_{m}\right)\equiv_{1+ct}0\){:/nomarkdown}. זה השלב שידרוש תחכום ושימוש במשפט השאריות הסיני.

מה שאני רוצה לעשות הוא להגדיר את {::nomarkdown}\( a_{i}\){:/nomarkdown} להיות הפתרון למערכת המשוואות {::nomarkdown}\( a_{i}\equiv_{1+kt}y_{i}^{\left(k\right)}\){:/nomarkdown}, {::nomarkdown}\( 1\le k\le y\){:/nomarkdown} (זה לא כל כך מפתיע מבחינה רעיונית - אם אתם עוד מצליחים לעקוב אחרי מה שקורה בהוכחה ברמת התמונה הגדולה - אני בקושי מצליח - אפשר לראות שה-{::nomarkdown}\( a_{i}\){:/nomarkdown}-ים הללו אמורים לקודד בתוכם איכשהו את הפתרונות ל-{::nomarkdown}\( P\){:/nomarkdown} עבור כל בחירה של {::nomarkdown}\( k\){:/nomarkdown} בתחום המתאים). כדי להראות שקיים פתרון למערכת הזו צריך להוכיח שכל המודולוסים זרים, כלומר ש-{::nomarkdown}\( \left(1+kt,1+lt\right)=1\){:/nomarkdown} עבור {::nomarkdown}\( 1\le l&lt;k\le y\){:/nomarkdown}. נניח בשלילה שיש איזה ראשוני {::nomarkdown}\( p\){:/nomarkdown} שמחלק את שניהם, אז הוא מחלק גם את ההפרש שלהם, כלומר {::nomarkdown}\( p\|t\left(k-l\right)\){:/nomarkdown}. שימו לב ש-{::nomarkdown}\( p\){:/nomarkdown} לא יכול לחלק את {::nomarkdown}\( t\){:/nomarkdown}, אחרת הוא לא היה מחלק את {::nomarkdown}\( 1+kt\){:/nomarkdown}, ולכן בהכרח {::nomarkdown}\( p\|k-l\){:/nomarkdown}. בפרט זה אומר ש-{::nomarkdown}\( p&lt;y\){:/nomarkdown}. כעת, תעלול! הגדרנו {::nomarkdown}\( t=Q\left(y,u,x_{1},\dots,x_{n}\right)!\){:/nomarkdown}, והרי {::nomarkdown}\( Q\left(y,u,x_{1},\dots,x_{n}\right)&gt;y\){:/nomarkdown}, ולכן כל מספר עד {::nomarkdown}\( y\){:/nomarkdown} נכלל במכפלה שמרכיבה את {::nomarkdown}\( t\){:/nomarkdown}, ולכן {::nomarkdown}\( p\){:/nomarkdown} חייב לחלק את {::nomarkdown}\( t\){:/nomarkdown} וזו סתירה. מסקנה: {::nomarkdown}\( \left(1+kt,1+lt\right)=1\){:/nomarkdown} ואפשר להשתמש במשפט השאריות הסיני כפי שרצינו כדי למצוא את ה-{::nomarkdown}\( a_{i}\){:/nomarkdown}-ים.

למה זה עזר לנו? ובכן, שימו לב כי לכל {::nomarkdown}\( k\){:/nomarkdown} אנחנו מקבלים:

{::nomarkdown}\( P\left(x_{1},\dots,x_{n},c,y,a_{1},\dots,a_{m}\right)\equiv_{1+kt}P\left(x_{1},\dots,x_{n},k,y,y_{1}^{\left(k\right)},\dots,y_{m}^{\left(k\right)}\right)=0\){:/nomarkdown}

כלומר, לכל {::nomarkdown}\( 1\le k\le y\){:/nomarkdown} קיבלנו ש-{::nomarkdown}\( 1+kt\){:/nomarkdown} מחלק את {::nomarkdown}\( P\left(x_{1},\dots,x_{n},c,y,a_{1},\dots,a_{m}\right)\){:/nomarkdown}. מכיוון שכל ה-{::nomarkdown}\( 1+kt\){:/nomarkdown}-ים זרים זה לזה, אפשר להשתמש במשפט נוסף: אם שני מספרים זרים זה לזה מחלקים את אותו מספר, גם המכפלה שלהם מחלקת אותו. בסימנים: אם {::nomarkdown}\( a\|c\){:/nomarkdown} וגם {::nomarkdown}\( b\|c\){:/nomarkdown} וגם {::nomarkdown}\( \left(a,b\right)=1\){:/nomarkdown} אז {::nomarkdown}\( ab\|c\){:/nomarkdown}.

המסקנה שלנו היא ש-{::nomarkdown}\( 1+ct=\prod_{k=1}^{y}1+kt\){:/nomarkdown} מחלק את {::nomarkdown}\( P\left(x_{1},\dots,x_{n},c,y,a_{1},\dots,a_{m}\right)\){:/nomarkdown}, וזו בדיוק המשוואה האחרונה בביטוי המפלצתי. כמעט סיימנו. נשאר רק להראות שמתקיים {::nomarkdown}\( 1+ct\|\prod_{j=1}^{u}\left(a_{i}-j\right)\){:/nomarkdown} לכל {::nomarkdown}\( a_{i}\){:/nomarkdown}. לשם כך מספיק, כפי שראינו, להראות שלכל {::nomarkdown}\( a_{i}\){:/nomarkdown} ולכל {::nomarkdown}\( k\){:/nomarkdown} מתקיים {::nomarkdown}\( 1+kt\|\prod_{j=1}^{u}\left(a_{i}-j\right)\){:/nomarkdown}. כדי לחלק מכפלה מספיק לחלק איבר אחד שלה, כלומר מספיק לנו להראות שלכל {::nomarkdown}\( a_{i}\){:/nomarkdown} ולכל {::nomarkdown}\( k\){:/nomarkdown} קיים {::nomarkdown}\( j\){:/nomarkdown} כך ש-{::nomarkdown}\( 1+kt\|a_{i}-j\){:/nomarkdown}, אבל זה קל: מכיוון שהגדרנו את {::nomarkdown}\( a_{i}\){:/nomarkdown} להיות איבר שמקיים {::nomarkdown}\( a_{i}\equiv_{1+kt}y_{i}^{\left(k\right)}\){:/nomarkdown} זה אומר ש-{::nomarkdown}\( 1+kt\){:/nomarkdown} מחלק את {::nomarkdown}\( a_{i}-y_{i}^{\left(k\right)}\){:/nomarkdown} ולכן {::nomarkdown}\( y_{i}^{\left(k\right)}\){:/nomarkdown} הוא ה-{::nomarkdown}\( j\){:/nomarkdown} שלנו; רק צריך לשים לב לכך ש-{::nomarkdown}\( 1\le y_{i}^{\left(k\right)}\le u\){:/nomarkdown} ולכן הוא בתחום המתאים (הנה לנו הסיבה שבגללה היה חשוב להגביל את הערכים של ה-{::nomarkdown}\( y_{i}\){:/nomarkdown}-ים).

סיימנו!

...

או שלא. מה עוד חסר? הפולינום {::nomarkdown}\( Q\){:/nomarkdown}. הרי אמרתי "אני טוען שבהינתן פולינום {::nomarkdown}\( Q\){:/nomarkdown} מתאים..." ואחר כך נתתי שלוש דרישות ש-{::nomarkdown}\( Q\){:/nomarkdown} צריך לקיים. אני עדיין צריך להציג את {::nomarkdown}\( Q\){:/nomarkdown} הזה, ובכך נסיים סופית את ההוכחה.

הבניה של {::nomarkdown}\( Q\){:/nomarkdown} אינה מורכבת, אבל כיף זה לא הולך להיות. בואו פשוט נראה אותה. ראשית כל, בואו נציג את {::nomarkdown}\( P\){:/nomarkdown} בתור סכום של מונומים, כלומר נכתוב

{::nomarkdown}\( P\left(x_{1},\dots,x_{n},k,y,y_{1},\dots,y_{m}\right)=\sum_{r=1}^{N}t_{r}\){:/nomarkdown}

כך שכל מונום הוא בעל המראה המזעזע הבא:

{::nomarkdown}\( t_{r}=cx_{1}^{q_{1}}\cdots x_{n}^{q_{n}}k^{a}y^{b}y_{1}^{s_{1}}\cdots y_{m}^{s_{m}}\){:/nomarkdown}

בואו נגדיר מונום חדש, {::nomarkdown}\( u_{r}\){:/nomarkdown}, על בסיס {::nomarkdown}\( t_{r}\){:/nomarkdown}:

{::nomarkdown}\( u_{r}=\left\|c\right\|y^{a+b}x_{1}^{q_{1}}\cdots x_{n}^{q_{n}}u^{s_{1}+\dots s_{m}}\){:/nomarkdown}

ועכשיו נגדיר את {::nomarkdown}\( Q\){:/nomarkdown}:

{::nomarkdown}\( Q\left(y,u,x_{1},\dots,x_{n}\right)=u+y+\sum_{r=1}^{N}u_{r}\){:/nomarkdown}

בבירור מתקיים {::nomarkdown}\( Q\left(y,u,x_{1},\dots,x_{n}\right)&gt;u\){:/nomarkdown} וגם {::nomarkdown}\( Q\left(y,u,x_{1},\dots,x_{n}\right)&gt;y\){:/nomarkdown} רק מעצם הבניה (זכרו שכל הערכים שאפשר להציב בפולינום הם חיוביים). צריך רק להסביר למה מתקיים

{::nomarkdown}\( \left\|P\left(x_{1},\dots,x_{n},k,y,y_{1},\dots,y_{m}\right)\right\|\le Q\left(y,u,x_{1},\dots,x_{n}\right)\){:/nomarkdown}

וזאת, כזכור, בתנאי ש-{::nomarkdown}\( k\le y\){:/nomarkdown} וגם {::nomarkdown}\( y_{1},\dots,y_{m}\le u\){:/nomarkdown}.

אז למה זה נכון? ובכן, עם אי-שוויון המשולש נקבל:

{::nomarkdown}\( \left\|P\left(x_{1},\dots,x_{n},k,y,y_{1},\dots,y_{m}\right)\right\|\le\sum_{r=1}^{N}\left\|t_{r}\right\|\){:/nomarkdown}

לכן מספיק להשוות מונום-מונום ולהראות ש-{::nomarkdown}\( \left\|t_{r}\right\|\le u_{r}\){:/nomarkdown}.

את {::nomarkdown}\( t_{r}\){:/nomarkdown} אפשר להפריד לשלושה חלקים. הראשון הוא {::nomarkdown}\( \left\|c\right\|x_{1}^{q_{1}}\cdots x_{n}^{q_{n}}\){:/nomarkdown} שקיים כמו שהוא גם ב-{::nomarkdown}\( u_{r}\){:/nomarkdown}; השני הוא {::nomarkdown}\( k^{a}y^{b}\){:/nomarkdown} שמכוסה על ידי {::nomarkdown}\( y^{a+b}\){:/nomarkdown} של {::nomarkdown}\( u_{r}\){:/nomarkdown} בתנאי ש-{::nomarkdown}\( k\le y\){:/nomarkdown}; והשלישי הוא {::nomarkdown}\( y_{1}^{s_{1}}\cdots y_{m}^{s_{m}}\){:/nomarkdown} שמכוסה על ידי {::nomarkdown}\( u^{s_{1}+\dots s_{m}}\){:/nomarkdown} בתנאי ש-{::nomarkdown}\( y_{i}\le u\){:/nomarkdown}. זה מסיים את הבניה של {::nomarkdown}\( Q\){:/nomarkdown}, ולכן מסיים את ההוכחה של הטענה לפיה אפשר לבנות ביטויים דיופנטיים עם הכמת האוניברסלי החסום, ולכן מסיים את ההוכחה שהבעיה העשירית של הילברט לא כריעה!

לא ברור לי כמה מכם הצליחו לשרוד איתי עד לשלב הזה; אכתוב עוד פוסט סיכום (קצר) כדי לחזור על מה שהלך פה ממעוף הציפור ולסיים עם בונוס קטן שקשור למספרים הראשוניים.
