const guestsByPhone = {
  '0502000636': {name: 'Michal Tal', tickets: 1},
  '0503278425': {name: 'יוגב כהן', tickets: 1},
  '0503313852': {name: 'נתן מור', tickets: 1},
  '0503387906': {name: 'שימי אברמוב', tickets: 1},
  '0504333278': {name: 'מתן לוי', tickets: 1},
  '0504359914': {name: 'עידו מהגר', tickets: 1},
  '0504450542': {name: 'כפיר מרודי', tickets: 1},
  '0504474455': {name: 'שיר מאיר', tickets: 1},
  '0504503951': {name: 'יובל כהן אור', tickets: 1},
  '0504580240': {name: 'Vered Waksman', tickets: 1},
  '0504798855': {name: 'Ofri Avidor', tickets: 1},
  '0504989892': {name: 'Liat Veiss', tickets: 1},
  '0505302688': {name: 'Ran Shemer', tickets: 1},
  '0505367742': {name: 'Karin Gabay', tickets: 1},
  '0506560097': {name: 'עמית מליכס', tickets: 1},
  '0506574001': {name: 'Moria Harush', tickets: 1},
  '0506660512': {name: 'Aviv Berger', tickets: 1},
  '0506840850': {name: 'נוי גובי', tickets: 1},
  '0507430845': {name: 'Tamara Markovich', tickets: 1},
  '0507560356': {name: 'אור וילדר', tickets: 1},
  '0507999084': {name: 'עדי לוין', tickets: 1},
  '0508117152': {name: 'Michal Ovadia', tickets: 1},
  '0508463230': {name: 'reut david', tickets: 1},
  '0508549698': {name: 'שרון רוזנפלד', tickets: 1},
  '0508580240': {name: 'Nurit Waksman', tickets: 1},
  '0508670678': {name: 'Itay Bargil', tickets: 1},
  '0508766708': {name: 'Asaf Levy', tickets: 1},
  '0509315993': {name: 'Stav Nave', tickets: 1},
  '0509599113': {name: 'אביבית ז׳נו', tickets: 1},
  '0509605087': {name: 'Lorin Perez', tickets: 1},
  '0509964155': {name: 'Bracha Zaafran', tickets: 1},
  '0522223341': {name: 'Michal Cohen', tickets: 1},
  '0522439697': {name: 'רועי משה', tickets: 1},
  '0522539363': {name: 'שחר גרנות', tickets: 1},
  '0522649675': {name: 'Hedi Inbr', tickets: 1},
  '0522811973': {name: 'אדר שומרון', tickets: 1},
  '0522825450': {name: 'מיכל שלכט', tickets: 1},
  '0522947824': {name: 'Ofir Ziman', tickets: 1},
  '0523229516': {name: 'Moran Yana', tickets: 1},
  '0523314932': {name: 'מאי חגי', tickets: 1},
  '0523324982': {name: 'אלעד יעקב', tickets: 1},
  '0523331061': {name: 'Inbar Binyamin', tickets: 1},
  '0523450999': {name: 'Raz Doitch', tickets: 1},
  '0523694205': {name: 'Adi Aris', tickets: 1},
  '0523782638': {name: 'קרין יוסף', tickets: 1},
  '0523864491': {name: 'Michal Shamir', tickets: 1},
  '0524380096': {name: 'avinoam roz', tickets: 1},
  '0524422647': {name: 'מאי טטרו', tickets: 1},
  '0524529191': {name: 'שני קלר', tickets: 1},
  '0524616754': {name: 'אביה שרעבי', tickets: 1},
  '0524661134': {name: 'מעיין גילבוע', tickets: 1},
  '0524666815': {name: 'תמוז רוברמן', tickets: 1},
  '0524722494': {name: 'שלומי גרינברג', tickets: 1},
  '0524777268': {name: 'Nofar Birenbaum', tickets: 1},
  '0524778688': {name: 'Anat Fishbain', tickets: 1},
  '0524795395': {name: 'עמית אסייג', tickets: 1},
  '0525361626': {name: 'Rom Shternlib', tickets: 1},
  '0525404228': {name: 'גיל שאגרין', tickets: 1},
  '0525492152': {name: 'Noa Tishby', tickets: 1},
  '0525610865': {name: 'David Nesimi', tickets: 1},
  '0525704254': {name: 'ליאת לוי', tickets: 1},
  '0525858027': {name: 'Ela Bloom', tickets: 1},
  '0525918059': {name: 'Oz Blumenfeld', tickets: 1},
  '0525953763': {name: 'אורין מור', tickets: 1},
  '0526165830': {name: 'קלייר איטלסון', tickets: 2},
  '0526345902': {name: 'rotem shabbat', tickets: 1},
  '0526403828': {name: 'מעיין אורן', tickets: 1},
  '0526567808': {name: 'תהילה גורדון', tickets: 1},
  '0526606557': {name: 'אריאל פופובסקי', tickets: 1},
  '0526617752': {name: 'עידו גולדשטיין', tickets: 1},
  '0526699322': {name: 'עמית כהן', tickets: 1},
  '0526757442': {name: 'לי סובר', tickets: 1},
  '0526778680': {name: 'לינוי שלמה', tickets: 1},
  '0527211446': {name: 'Tami Bar', tickets: 1},
  '0528000225': {name: 'עדי מור לוי', tickets: 1},
  '0528358554': {name: 'Marina Breyl', tickets: 1},
  '0528410088': {name: 'Karin Goldin', tickets: 1},
  '0528421782': {name: 'שי נחמיאס', tickets: 1},
  '0528432005': {name: 'Lital Alperin', tickets: 1},
  '0528557899': {name: 'ענבל שני', tickets: 2},
  '0528729717': {name: 'Yarden Adi', tickets: 1},
  '0528746188': {name: 'Mika Bell', tickets: 1},
  '0528886778': {name: 'Shahar Suisa', tickets: 1},
  '0528932302': {name: 'Gal Parizat', tickets: 1},
  '0532708883': {name: 'ירין מסס', tickets: 1},
  '0535698499': {name: 'דניאל בנימין', tickets: 1},
  '0542046190': {name: 'הדר זק', tickets: 1},
  '0542245008': {name: 'טלי אש', tickets: 2},
  '0542277043': {name: 'ירדן קליין', tickets: 1},
  '0542288250': {name: 'Guy Zuck', tickets: 1},
  '0542300390': {name: 'Ofri Avivi', tickets: 1},
  '0542471519': {name: 'דולב זהבי', tickets: 2},
  '0542656989': {name: 'גיל ז׳נו', tickets: 1},
  '0542689747': {name: 'Diana Michalson', tickets: 1},
  '0543010143': {name: 'Dor Grinblat', tickets: 1},
  '0543157121': {name: 'נופר אהרוני', tickets: 1},
  '0543310008': {name: 'Omri Yamini', tickets: 1},
  '0543328938': {name: 'נוי ארז', tickets: 1},
  '0543355288': {name: 'Yoav Wiener', tickets: 2},
  '0543451018': {name: 'Noa Weisberg', tickets: 2},
  '0544213219': {name: 'Shachar Brookstein', tickets: 1},
  '0544227255': {name: 'Yarin Banian', tickets: 1},
  '0544241002': {name: 'מאור יהלומי', tickets: 1},
  '0544254066': {name: 'דניאל הוטמאכר', tickets: 1},
  '0544412407': {name: 'שיר שוואלב', tickets: 1},
  '0544457923': {name: 'Or Malca', tickets: 1},
  '0544477095': {name: 'יונתן חצור', tickets: 1},
  '0544830941': {name: 'ליאור בן יוסף', tickets: 1},
  '0544870074': {name: 'רותם ציפורי', tickets: 1},
  '0544959200': {name: 'Tal Malka', tickets: 1},
  '0545229997': {name: 'נטע נייגר', tickets: 1},
  '0545446019': {name: 'Adi Mendelman', tickets: 1},
  '0545470222': {name: 'נתנאל מרדכי', tickets: 1},
  '0545589109': {name: 'דני סימן טוב', tickets: 1},
  '0545656053': {name: 'מאי בלונדר', tickets: 1},
  '0545793184': {name: 'Yarden Mizrahi', tickets: 1},
  '0545866360': {name: 'עמרי גל', tickets: 1},
  '0545949505': {name: 'Rotem Zioni', tickets: 1},
  '0545967024': {name: 'May Dan', tickets: 1},
  '0546220735': {name: 'נעה עציון', tickets: 1},
  '0546303284': {name: 'ליהי ירוס', tickets: 1},
  '0546359860': {name: 'אילעאי נעוס', tickets: 1},
  '0546436618': {name: 'שחר גואטה', tickets: 1},
  '0546480359': {name: 'מתן אקהאוס', tickets: 1},
  '0546561188': {name: 'Adam Klein', tickets: 2},
  '0546565105': {name: 'Efrat Harel', tickets: 1},
  '0546565671': {name: 'ניק סקליארסקי', tickets: 1},
  '0546669054': {name: 'שחר עבדי', tickets: 1},
  '0546685204': {name: 'יעל שייה', tickets: 1},
  '0546886032': {name: 'אופיר ישראל', tickets: 1},
  '0546900902': {name: 'סהר אלחיאני', tickets: 1},
  '0546904490': {name: 'דורון הפנר', tickets: 1},
  '0547350189': {name: 'עדי אוטמזגין', tickets: 1},
  '0547501851': {name: 'יוני צחורי', tickets: 1},
  '0547684544': {name: 'עומר מורג', tickets: 1},
  '0547687837': {name: 'Jonathan Buchwald', tickets: 1},
  '0547792286': {name: 'Omri Saporta', tickets: 1},
  '0547799970': {name: 'יובל חמו', tickets: 2},
  '0547933199': {name: 'Merav Atar', tickets: 1},
  '0547983365': {name: 'גל אדלר', tickets: 1},
  '0548009527': {name: 'דן וילנסקי', tickets: 1},
  '0548121500': {name: 'נוי גרין', tickets: 1},
  '0548143527': {name: 'Sapir Bashan', tickets: 1},
  '0548173280': {name: 'Guy Atlan', tickets: 1},
  '0548177669': {name: 'שירלי לנדר', tickets: 1},
  '0548733436': {name: 'ויטאלי קובטוננקו', tickets: 1},
  '0549294541': {name: 'אבשה', tickets: 1},
  '0549374909': {name: 'Hadar Abo', tickets: 1},
  '0549728228': {name: 'שימי אברהם', tickets: 1},
  '0549777379': {name: 'דור אלידן', tickets: 1},
  '0559372756': {name: 'Noam Abarbanel', tickets: 2},
  '0585046331': {name: 'Noy Smouha', tickets: 1},
  '0587227265': {name: 'מאי שושני', tickets: 1},
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { guestsByPhone };
}