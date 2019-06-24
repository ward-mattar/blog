---
id: 207
title: "אז מה הקשר בין אוטומטים ופונקציות יוצרות?"
date: 2009-09-10 16:00:41
layout: post
categories: 
  - חישוביות
  - קומבינטוריקה
---
בפוסטים הקודמים <a href="http://www.gadial.net/?p=204">תיארתי אוטומטים סופיים </a>ו<a href="http://www.gadial.net/?p=206">תיארתי פונקציות יוצרות</a>. עכשיו הגיע הזמן להציג את הקשר היפה (לדעתי) בין השניים. שני הפוסטים הקודמים היו מעין מבוא מרפרף, ולכן בפוסט הזה ארשה לעצמי להיות פחות "מבואי" ולדבר יותר לעניין - ולכן הפוסט יהיה גם יותר טכני מהקודמים. ראו הוזהרתם.

ובכן, אם יש לנו שפה רגולרית {::nomarkdown}\( L\){:/nomarkdown}, אפשר לשכוח מהמבנה הפנימי העשיר שלה ולהתמקד בשאלה כמותית - כמה מילים יש מכל אורך? נסמן ב-{::nomarkdown}\( a_{n}\){:/nomarkdown} את מספר המילים ב-{::nomarkdown}\( L\){:/nomarkdown} מאורך {::nomarkdown}\( n\){:/nomarkdown}. אפשר כעת להתאים ל-{::nomarkdown}\( L\){:/nomarkdown} פונקציה יוצרת {::nomarkdown}\( f_{L}\left(x\right)\){:/nomarkdown} שמתארת את הסדרה {::nomarkdown}\( a_{n}\){:/nomarkdown} (למי שתוהה, יש מילה אחת מאורך 0 - "המילה הריקה", כך ש-{::nomarkdown}\( a_{0}\){:/nomarkdown} יכול להיות שווה 1). כל זה טוב ויפה - כעת השאלה היא כיצד ניתן לחשב את {::nomarkdown}\( f_{L}\left(x\right)\){:/nomarkdown}. אציג שיטה כללית לעשות זאת, אם נתון אוטומט {::nomarkdown}\( A\){:/nomarkdown} שמקבל את {::nomarkdown}\( L\){:/nomarkdown}; זה מכתיב דרך פעולה כללית בהתמודדות עם בעיה קומבינטורית שאנחנו רוצים למצוא עבורה פונקציה יוצרת - קודם כל לבדוק האם הבעיה הזו ניתנת לניסוח בתור שפה רגולרית. אם כן, קיבלנו את הפונקציה היוצרת "בחינם".

מכיוון שאנחנו מתמקדים בשאלה כמותית ולא במבנה של כל מילה, אפשר להתעלם מההבדלים שבין אותיות שונות, ולהתמקד בשאלה יותר פשוטה הנוגעת לאוטומט - בכמה מסלולים שונים מאורך {::nomarkdown}\( n\){:/nomarkdown} אפשר להגיע מהמצב ההתחלתי למצב המקבל? מספר המסלולים הזה הוא בדיוק {::nomarkdown}\( a_{n}\){:/nomarkdown}. עם זאת, כפי שקורה בדרך כלל בהוכחות שעוסקות באוטומטים, צריך לשאול שאלה "חזקה" יותר - נניח שאנחנו מתחילים ממצב <strong>כלשהו</strong> של האוטומט, לאו דווקא המצב ההתחלתי. כמה מסלולים מאורך {::nomarkdown}\( n\){:/nomarkdown} שמגיעים למצב מקבל יהיו כעת? אם {::nomarkdown}\( q_{i}\){:/nomarkdown} הוא המצב הזה, אפשר לסמן את המספר בתור {::nomarkdown}\( a_{n}^{i}\){:/nomarkdown}, ואת הפונקציה היוצרת המתאימה בתור {::nomarkdown}\( f_{i}\left(x\right)\){:/nomarkdown}. כדי לפשט עוד יותר את הסימונים אפשר לדבר על <strong>וקטור</strong> של פונקציות יוצרות: {::nomarkdown}\( \overline{f}=\left(f_{0},f_{2},\dots,f_{k}\right)\){:/nomarkdown} (אני מסמן את מספר המצבים הכולל של האוטומט ב-{::nomarkdown}\( k+1\){:/nomarkdown} כדי שהוקטור יראה "נחמד").

מכיוון שויתרנו על זהות האותיות השונות ואנחנו מתמקדים רק במספר הדרכים להגיע ממצב אחד באוטומט לאחר, אפשר להפסיק לדבר על פונקצית המעברים של האוטומט ולהסתפק במעין טבלת מעברים מופשטת - מטריצה מגודל {::nomarkdown}\( \left(k+1\right)\times\left(k+1\right)\){:/nomarkdown} שהן שורותיה והן עמודותיה מייצגות מצבים, ובתא ה-{::nomarkdown}\( \left(i,j\right)\){:/nomarkdown} שלה כתוב מספר הדרכים לעבור מהמצב {::nomarkdown}\( q_{i}\){:/nomarkdown} למצב {::nomarkdown}\( q_{j}\){:/nomarkdown} (בצורה אולטרה פורמלית, זהו {::nomarkdown}\( \left\|\left\{ \sigma\in\Sigma:\delta\left(q_{i},\sigma\right)=q_{j}\right\} \right\|\){:/nomarkdown}). דרך הייצוג הזו, של גרף באמצעות מטריצה, היא מאוד, מאוד נפוצה. אקרא למטריצה הזו {::nomarkdown}\( T\){:/nomarkdown}. אלו שבקיאים באלגברה לינארית ומכירים כפל מטריצות יכולים לוודא לעצמם ש-{::nomarkdown}\( T^{r}\){:/nomarkdown} היא המטריצה שבכניסה {::nomarkdown}\( \left(i,j\right)\){:/nomarkdown} שלה רשום מספר הדרכים להגיע מ-{::nomarkdown}\( i\){:/nomarkdown} אל {::nomarkdown}\( j\){:/nomarkdown} בדיוק ב-{::nomarkdown}\( r\){:/nomarkdown} צעדים.

האבחנה הבסיסית בכל הסיפור הזה היא פשוטה ביותר. מספר המסלולים מאורך {::nomarkdown}\( n\){:/nomarkdown} שמובילים מ-{::nomarkdown}\( q_{i}\){:/nomarkdown} אל מצב מקבל כלשהו ניתן לחישוב באופן רקורסיבי. אם {::nomarkdown}\( n=0\){:/nomarkdown} אז הוא 1 אם {::nomarkdown}\( q_{i}\){:/nomarkdown} הוא בעצמו מצב מקבל ואחרת הוא 0. אפשר לסמן זאת בקומפקטיות באמצעות וקטור: {::nomarkdown}\( \overline{u}\){:/nomarkdown}יהיה וקטור שבכניסה ה-{::nomarkdown}\( i\){:/nomarkdown} שלו יש 1 אם המצב {::nomarkdown}\( q_{i}\){:/nomarkdown} הוא מקבל, ואחרת 0. אם {::nomarkdown}\( n&gt;0\){:/nomarkdown} אז אפשר להפעיל רקורסיה: לכל מצב {::nomarkdown}\( q_{j}\){:/nomarkdown} אפשר לדבר על "מספר המסלולים מאורך {::nomarkdown}\( n\){:/nomarkdown} מ-{::nomarkdown}\( q_{i}\){:/nomarkdown} למצב מקבל, שבצעד הראשון נכנסים ל-{::nomarkdown}\( q_{j}\){:/nomarkdown}". מספר המסלולים הללו הוא בדיוק המכפלה של מספר האפשרויות לעבור מ-{::nomarkdown}\( q_{i}\){:/nomarkdown} אל {::nomarkdown}\( q_{j}\){:/nomarkdown} (כלומר, {::nomarkdown}\( T_{ij}\){:/nomarkdown}) במספר המסלולים מאורך {::nomarkdown}\( n-1\){:/nomarkdown} מ-{::nomarkdown}\( q_{j}\){:/nomarkdown} שמגיעים למצב מקבל. מכיוון ש<strong>כל</strong> מסלול מ-{::nomarkdown}\( q_{i}\){:/nomarkdown} שמגיע למצב מקבל חייב לעבור דרך {::nomarkdown}\( q_{j}\){:/nomarkdown} <strong>כלשהו</strong> בצעד הראשון, מספר המסלולים הכולל הוא סכום של המכפלות הללו, עבור כל ה-{::nomarkdown}\( j\){:/nomarkdown}-ים האפשריים. מי שבקיא באלגברה לינארית אולי רואה כבר <a href="http://he.wikipedia.org/wiki/%D7%9B%D7%A4%D7%9C_%D7%9E%D7%98%D7%A8%D7%99%D7%A6%D7%95%D7%AA">כפל מטריצות</a> מול העיניים, אז אכתוב במפורש את הנוסחה: {::nomarkdown}\( f_{i}\left(x\right) = u_{i}+\sum_{j}T_{ij}\cdot xf_{j}\left(x\right)=u_{i}+\left[T\right]_{i}\cdot x\overline{f}\left(x\right)\){:/nomarkdown}

ההכפלה ב-{::nomarkdown}\( x\){:/nomarkdown} של {::nomarkdown}\( f_{j}\left(x\right)\){:/nomarkdown} היא הדרך שלנו לבטא את העובדה שמסלול מאורך {::nomarkdown}\( n\){:/nomarkdown} של {::nomarkdown}\( f_{i}\){:/nomarkdown} נבנה באמצעות מסלולים מאורך {::nomarkdown}\( n-1\){:/nomarkdown} של אגף ימין. ה-{::nomarkdown}\( u_{i}\){:/nomarkdown} שמתווסף לסכום בא לתאר בדיוק את תנאי העצירה של הרקורסיה (הוא יהיה המקדם החופשי בטור של {::nomarkdown}\( f_{i}\left(x\right)\){:/nomarkdown}).

המשוואה שלמעלה היא משוואה כללית לכל {::nomarkdown}\( i\){:/nomarkdown}; היא בעצם מייצגת מערכת של {::nomarkdown}\( k+1\){:/nomarkdown} משוואות. את כל המערכת הזו אפשר לתאר באופן עוד יותר קומפקטי:

{::nomarkdown}\( \overline{f} = u+T\cdot x\overline{f}\){:/nomarkdown}

ועל ידי העברת אגף מקבלים:

{::nomarkdown}\( \overline{f}\left(I-xT\right) = u\){:/nomarkdown}

ומכאן:

{::nomarkdown}\( \overline{f} = \left(I-xT\right)^{-1}u\){:/nomarkdown}

וזה נותן לנו את וקטור הפונקציות היוצרות עבור כל המצבים. אם רוצים "לבודד" את הפונקציה היוצרת רק עבור המצב {::nomarkdown}\( q_{0}\){:/nomarkdown}, צריך לכפול את שני האגפים בוקטור {::nomarkdown}\( \left(1,0,0,\dots,0\right)\){:/nomarkdown} (הוקטור שכולו אפסים פרט לכניסה במקום ה-0). נסמן וקטור זה כ-{::nomarkdown}\( v\){:/nomarkdown}, ונקבל ש-{::nomarkdown}\( f_{0}\left(x\right)=v\left(I-xT\right)^{-1}u\){:/nomarkdown}. זו הנוסחה.

חישוב של כל העסק הזה הוא לא מסובך, בהינתן שאנחנו כבר יודעים לעשות חשבון עם פולינומים. יש מערכות אלגברה ממוחשבות שעושות את זה בדיוק - אני משתמש ב-<a href="http://www.sagemath.org/">Sage</a> לצורך כך, ובה החישוב שלעיל הוא מיידי. התוצאה המתקבלת היא תמיד פונקציה רציונלית (מנה של שני פולינומים), כך שמציאת נקודות הסינגולריות שלה (הנקודות שבהן "משהו מתקלקל" ולכן אפשר ללמוד מהן על קצב הגידול של {::nomarkdown}\( a_{n}\){:/nomarkdown}) היא פשוטה למדי (אלו בדיוק הנקודות שמאפסות את המכנה).

זה הכל. אחרי ההקדמה הארוכה שנתתי, הפשטות והמיידיות של התוצאה הן לטעמי יפות מאוד, כך שלא אכביר עליהן עוד מילים. מן הסתם נפנפתי פה בידיים ללא הרף ויש נקודות עדינות שעוד דורשות התייחסות, אך למזלי אני יכול להרשות לעצמי כאן להיות לא מדויק.
