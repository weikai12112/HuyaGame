// var topJava = [7000,7500,13000,14000,16000,16500,18000,19800,20400,22000,24400,26000,29200,30200,30400,31400,32800,34500,34900,36400,36900,38300,38600,40300,40900,42800,43000,46000,46800,48900,49700,50800,51900,54400,55200,55400,56200,57200,57400,59300,60600,61700,62400,63200,64300,64500,65200,66800,67000,68500,68700]
// var bottomJava = [8000,8500,11000,11500,13750,17600,19000,20800,21600,23200,23600,24800,26800,29400,30600,30800,31600,34700,35900,36100,36700,37100,38500,38700,40600,41600,41800,43300,46300,49300,50000,52300,53300,54300,55300,56500,56900,57600,58000,59500,60500,61500,62600,62800,64100,65000,65800,66000,67200,69200]
// var leftJava = [9000,9500,10000,10500,14400,14800,15600,15900,17000,17900,22800,25200,29600,31200,31800,32500,33000,34000,34200,35700,37300,37500,39000,39300,41100,41300,42300,43600,46500,47300,49500,50500,52600,53900,54700,55600,55900,56800,58000,59800,60300,61200,62200,63500,63900,64700,65700,66500,67600,68200,69400]
// var rightJava = [10250,10750,15000,15300,17300,18500,19400,21200,22400,24000,25600,26400,29800,30000,32000,32300,33300,33600,35100,35400,37800,38000,39500,39800,40000,42000,42600,43900,47000,49700,50200,53000,53600,55000,55800,56700,57000,57800,60000,60800,61000,62000,63000,63700,64800,65500,66200,67500,67900,68900,69600]
// var topJavaTrue = [26800,27300,44000,47700,51000]
// var bottomJavaTrue = [27800,44400,47900,48500,51200]
// var leftJavaTrue = [28300,28800,44800,48200,51400]
// var rightJavaTrue = [28600,29000,45200,48700,51500,]
// var bottomBossJava = [4000]
var topJava = [233.33333333333326, 3343.666666666667, 3766.666666666667, 6545.666666666667, 13159.666666666666, 15936.666666666668, 17490.333333333332, 19382, 20196, 26387, 29557.333333333332, 31995.333333333336, 34801, 36530.666666666664, 38995.333333333336, 41762.333333333336, 43495.666666666664, 45601.333333333336, 46322, 54779, 56657.666666666664, 59979.333333333336, 62845, 64497.333333333336, 65080.33333333333, 67542.33333333333, 68069, 71175.66666666667, 72355.33333333333, 73079.66666666667, 74076, 74730.66666666667, 75511.33333333333, 78370.33333333333, 84549.33333333333, 87801, 107892.33333333333, 115124, 137036.33333333334, 151613.66666666666]
var bottomJava = [1788.666666666667, 4918.666666666667, 7711, 13548.333333333334, 16298.666666666668, 21749.333333333332, 27798.333333333332, 29214.666666666668, 33360.666666666664, 35170, 37572, 44212, 45925.333333333336, 58731, 60772, 63914.333333333336, 65501.66666666667, 66084.66666666667, 66732.66666666667, 67769, 69725.33333333333, 71542.33333333333, 75750.66666666667, 75989.66666666667, 76442, 77089.33333333333, 77806.66666666667, 78237, 84029.66666666667, 86463.33333333333, 88279.33333333333, 90383.33333333333, 108018.33333333333, 115697.66666666667, 135027.66666666666, 102507.33333333333, 138848.33333333334, 147039]
var leftJava = [654.6666666666667, 2242, 6874.666666666667, 8466.666666666666, 14791.333333333334, 18600, 20966.333333333332, 26730.666666666668, 28140.666666666668, 32323.333333333336, 33744.666666666664, 36861.333333333336, 37979, 39365.333333333336, 42005.333333333336, 42909, 44856, 47350.666666666664, 54403.333333333336, 57155.333333333336, 58445.333333333336, 61365.666666666664, 62569, 64303, 64659.33333333333, 65534, 68573, 70803, 72261.66666666667, 72691.33333333333, 73790, 74507.33333333333, 75095.33333333333, 79576, 80054.33333333333, 80963, 82816.33333333333, 84788.33333333333, 86701.33333333333, 88709.66666666667, 90713.33333333333, 103321, 104401.66666666667, 105931.66666666667, 111137, 115267.33333333333, 117022, 118184.33333333333, 122738, 123224, 125894.33333333333, 128017, 132637, 102842.33333333333, 137504, 139795.66666666666, 141061.33333333334, 142095.33333333334, 145656.66666666666, 147327.33333333334, 150176.66666666666, 151900]
var rightJava = [1011, 2600, 7266.666666666667, 8864, 15100, 19000, 21383, 27186.666666666668, 28510, 32703.666666666664, 34068.666666666664, 37218, 38341, 39685.333333333336, 42167.333333333336, 43171.666666666664, 45268, 55005.666666666664, 56334, 59195, 60444.333333333336, 63104.333333333336, 65827.66666666667, 66376, 67056.33333333333, 69046.66666666667, 72068.33333333333, 75910.66666666667, 76199.33333333333, 76755.66666666667, 77567.66666666667, 78081, 79813.66666666667, 80293.33333333333, 81961.66666666667, 83256.66666666667, 85255.66666666666, 87215.66666666667, 89321, 91225.33333333333, 103407, 104543, 106217, 111335.33333333333, 115937, 117150.33333333333, 118308, 123025, 125750.66666666667, 128237.33333333333, 132970.33333333334, 134788.66666666666, 103033.33333333333, 137275.33333333334, 139899.66666666666, 140997.33333333334, 142205.66666666666, 145513.66666666666, 147604.33333333334, 150211, 152179.33333333334] 
var topJavaTrue = [9483.333333333334, 11442.666666666666, 14125.333333333334, 21622, 40569, 55939.333333333336, 61653, 80284.66666666667, 85699.66666666667, 89705.33333333333, 105349.33333333333, 110372.33333333333, 113872, 118233.33333333333, 142235.66666666666, 147657.66666666666] 
var bottomJavaTrue =  [9849.333333333334, 11793.666666666666, 21969, 30564.666666666668, 40164, 55615.666666666664, 57656.333333333336, 82223.33333333333, 91591.66666666667, 110466, 113872, 118233.33333333333, 120098.66666666667, 142271.33333333334] 
var leftJavaTrue =[4900, 12182.333333333334, 13736.666666666666, 17443.666666666668, 30370, 67569, 36526.666666666664, 78400, 108502.33333333333, 127081, 129328.66666666667, 133775.66666666666] 
var rightJavaTrue = [5152, 12559.333333333334, 17656.333333333332, 30742.333333333332, 67802.33333333333, 78500, 105484.66666666667, 108688.66666666667, 129328.66666666667]

var topBossJava = [102680, 104192.66666666667, 106457.66666666667, 108370.66666666667, 109518.33333333333, 112961.33333333333, 116702, 117515, 121542.66666666667, 123599, 125320.33333333333, 126802.66666666667, 128930.66666666667, 131824, 135410.33333333334, 139230.66666666666]
var leftBossJava = [102919, 103780, 109040, 111765.66666666667, 116415.33333333333, 117897.66666666667, 122164.33333333333, 126468, 129241.66666666667, 130198, 132158.66666666666, 136510.33333333334, 139507.66666666666, 140361, 141803, 144406.33333333334, 145240.33333333334, 148377.33333333334, 149800, 151238.66666666666, 152302.66666666666]
var rightBossJava = [104927.66666666667, 107509.66666666667, 109805.33333333333, 112148.33333333333, 113259, 114359, 119332, 123885.66666666667, 127568, 130724, 133163, 134454, 137658, 143790, 146703.33333333334, 148656.66666666666]
var bottomBossJava = [105344.66666666667, 107255.33333333333, 109996.33333333333, 112435.33333333333, 113616, 114741.33333333333, 119906, 124459.66666666667, 131393.66666666666, 133306.33333333334, 138184, 144105, 146100, 148936]