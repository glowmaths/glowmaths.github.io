$(document).ready(function () {
    $('td').mouseenter(function () {
        $(this).addClass('hovered');
    });
    $('td').mouseleave(function () {
        $(this).removeClass('hovered');
    });
    $('td').click(function () {
        $('td').removeClass('selected');
        $(this).addClass('selected');
    });
    
    $(".1_1").click(function () {
        $("#statements").html('count up to and across 100, forwards and backwards, beginning with 0 or 1, or from any given number<br>count, read and write numbers to 100 in numerals; <br>given a number, identify one more and one less<br>identify and represent numbers using objects and pictorial representations including the number line, and use the language of: equal to, more than, less than (fewer), most, least<br>read and write numbers from 1 to 20 in numerals and words.<br>');
        $("#key").html('Say the number sequence to thirty<br>Represent numbers to thirty<br>Count accurately up to 30 objects<br>Within the range 0 -30 count forwards from a given number to another given number.<br>Within the range 30-0 count backwards from a given number to another given number <br>Recognise the patterns in the number sequence 0-30 <br>Read numbers 0 - 20 in words and write using numerals<br>Read numbers 0 - 20 in numerals and write in words<br>Represent numbers 0 - 30 on a number line<br>Estimate numbers on a number line<br>Compare numbers identifying which one is more <br>Compare number identifying which one is less <br>Order numbers <br>Find 1 more than a number up to 30<br>Find 1 less than a number up to 30<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_2").click(function () {
        $("#statements").html('recognise and name common 2-D and 3-D shapes, including:<br>2-D shapes [for example, rectangles (including squares), circles and triangles]<br>3-D shapes [for example, cuboids (including cubes), pyramids and spheres].<br>');
        $("#key").html('Recognise 2-D shapes<br>Recognise and name rectangles<br>Recognise and name squares<br>Recognise and name circles<br>Recognise and name triangles<br>Compare 2-D shapes and explain how they are similar or different');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_3").click(function () {
        $("#statements").html('read, write and interpret mathematical statements involving addition (+), subtraction (-) and equals (=) signs<br>represent and use number bonds and related subtraction facts within 20<br>add and subtract one-digit and two-digit numbers to 20, including zero<br>solve one-step problems that involve addition and subtraction, using concrete objects and pictorial representations, and missing number problems <br>');
        $("#key").html('For Terms 1 & 2, Choose From: <br>Add 1 to single digit numbers<br>Subtract 1 from single digit numbers<br>Write addition problems by combining two sets using + and =<br>Solve addition problems by increasing a set using + and =<br>Write subtraction problems by taking away, using - and =<br>Partition 5<br>Find and represent all addition number facts of 5 <br>Find and represent all subtraction number facts of 5 <br>Partition 6<br>Find and represent all addition number facts of 6<br>Find and represent all subtraction number facts of 6<br>Partition 7<br>Find and represent all addition number facts of 7 <br>Find and represent all subtraction number facts of 7 <br>Partition 8<br>Find and represent all addition number facts of 8 <br>Find and represent all subtraction number facts of 8 <br>Partition 9<br>Find and represent all addition number facts of 9<br>Find and represent all subtraction number facts of 9 <br>Partition 10<br>Find and represent all addition number facts of 10 <br>Find and represent all subtraction number facts of 10 <br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_4").click(function () {
        $("#statements").html('count to and across 100, forwards and backwards, beginning with 0 or 1, or from any given number<br>count, read and write numbers to 100 in numerals; <br>given a number, identify one more and one less<br>identify and represent numbers using objects and pictorial representations including the number line, and use the language of: equal to, more than, less than (fewer), most, least<br>');
        $("#key").html('Say the numbers to and across 100<br>Write numbers to 100<br>Count accurately up to 100 objects<br>Represent tens and ones as you count<br>Count forwards from a given number to another given number.<br>Count backwards from a given number to another given number <br>Recognise the patterns in the number sequence 1-100 <br>Represent numbers on a number line<br>Estimate numbers on a number line<br>Compare numbers identifying which one is more <br>Compare numbers identifying which one is less <br>Order numbers <br>Say 1 more than a number<br>Say 1 less than a number <br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_5").click(function () {
        $("#statements").html('read, write and interpret mathematical statements involving addition (+), subtraction (–) and equals (=) signs<br>represent and use number bonds and related subtraction facts within 20<br>add and subtract one-digit and two-digit numbers to 20, including zero<br>solve one-step problems that involve addition and subtraction, using concrete objects and pictorial representations, and missing number problems <br>');
        $("#key").html('Partition 11<br>Find and represent all addition number facts of 11 <br>Find and represent all subtraction number facts of 11 <br>Partition 12<br>Find and represent all addition number facts of 12 <br>Find and represent all subtraction number facts of 12<br>Partition 13<br>Find and represent all addition number facts of 13 <br>Find and represent all subtraction number facts of 13 <br>Partition 14<br>Find and represent all addition number facts of 14 <br>Find and represent all subtraction number facts of 14 <br>Partition 15<br>Find and represent all addition number facts of 15<br>Find and represent all subtraction number facts of 15 <br>Partition 16<br>Find and represent all addition number facts of 16 <br>Find and represent all subtraction number facts of 16 <br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_6").click(function () {
        $("#statements").html('compare, describe and solve practical problems for:<br>lengths and heights [for example, long/short, longer/shorter, tall/short,double/half]<br>');
        $("#key").html('Measure a given length choosing the appropriate equipment <br>Measure a given height choosing the appropriate equipment <br>Create a line of a given length <br>Estimate length and height<br>Compare lengths using the language of longer than and shorter than<br>Compare heights using the langaugae of taller than and shorter than<br>Order lengths and heights<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_7").click(function () {
        $("#statements").html('read, write and interpret mathematical statements involving addition (+), subtraction (–) and equals (=) signs<br>represent and use number bonds and related subtraction facts within 20<br>add and subtract one-digit and two-digit numbers to 20, including zero<br>solve one-step problems that involve addition and subtraction, using concrete objects and pictorial representations, and missing number problems <br>');
        $("#key").html('Partition 17<br>Find and represent all addition number facts of 17 <br>Find and represent all subtraction number facts of 17 <br>Partition 18<br>Find and represent all addition number facts of 18 <br>Find and represent all subtraction number facts of 18 <br>Partition 19<br>Find and represent all addition number facts of 19 <br>Find and represent all subtraction number facts of 19 <br>Partition 20<br>Find and represent all addition number facts of 20<br>Find and represent all subtraction number facts of 20 <br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_8").click(function () {
        $("#statements").html('describe position, direction and movement, including whole, half, quarter and threequarter turns.<br>');
        $("#key").html('Use mathematical language to describe position<br>Use mathematical language to describe movement along a straight line<br>Use mathematical language to describe a turn, including whole and half turns<br>Use mathematical language to describe a turn, including quarter turns<br>Use mathematical language to describe a turn, including three-quarter turns<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_9").click(function () {
        $("#statements").html('sequence events in chronological order using language [for example, before and<br>after, next, first, today, yesterday, tomorrow, morning, afternoon and evening]<br>recognise and use language relating to dates, including days of the week, weeks,<br>months and years<br>tell the time to the hour and half past the hour and draw the hands on a clock face to<br>show these times.<br>measure and begin to record time (hours, minutes, seconds)<br>compare, describe and solve practical problems for: time [for example, quicker, slower, earlier, later]<br>');
        $("#key").html('Know and use the days of the week<br>Know and use the months of the year<br>Know the number of days in each month <br>Recognise and use language relating to dates, including days of the week, weeks, months and years<br>Tell the time to the hour <br>Tell the time to half past the hour<br>Draw hands on a clock face to show time to the hour <br>Draw hands on a clock face to show time to half past the hour<br>Sequence events in chronological order within the same day <br>Sequence events in chronological order within the same week <br>Compare and order times using quicker, slower, earlier, later<br>Solve simple problems involving time<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_10").click(function () {
        $("#statements").html('Add two single digit numbers within 10<br>Add two single digit numbers  bridging 10<br>Add ten and a single digit number<br>Add 9 and a single digit number<br>Subtract a single digit number from a single digit number<br>Subtract a single digit number from a 2 digit number less than 20 without bridging 10<br>Subtract a single digit number from a 2 digit number less than 20 bridging 10<br>Subtract 10 from a two digit number up to 20<br>Find the difference between two numbers<br>Solve addition missing digit number problems<br>Solve subtraction missing digit number problems<br>');
        $("#key").html('Add two single digit numbers within 10<br>Add two single digit numbers  bridging 10<br>Add ten and a single digit number<br>Add 9 and a single digit number<br>Subtract a single digit number from a single digit number<br>Subtract a single digit number from a 2 digit number less than 20 without bridging 10<br>Subtract a single digit number from a 2 digit number less than 20 bridging 10<br>Subtract 10 from a two digit number up to 20<br>Find the difference between two numbers<br>Solve addition missing digit number problems<br>Solve subtraction missing digit number problems<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_11").click(function () {
        $("#statements").html('recognise, find and name a half as one of two equal parts of an object, shape or quantity<br>recognise, find and name a quarter as one of four equal parts of an object, shape or quantity.<br>');
        $("#key").html('Recognise a half as one of two equal parts of an object or shape <br>Find 1/2 of objects <br>Find 1/2 of an amount <br>Recognise a quarter as one of four equal parts of an object or shape<br>Find 1/4 of objects <br>Find 1/4 of an amount <br>Solve problems involving halves and quarters<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_12").click(function () {
        $("#statements").html('solve one-step problems involving multiplication and division, by calculating the<br>answer using concrete objects, pictorial representations and arrays with the support<br>of the teacher.<br>');
        $("#key").html('Double numbers up to at least 10<br>Halve numbers up to (at least) 20<br>Count (from zero) in equal steps of 2s <br>Count (from zero) in equal steps of 5s <br>Count (from zero) in equal steps of 10s <br>Solve one-step problems involving multiplication using equal groups<br>Solve one-step problems involving multiplication using repeated addition<br>Solve one-step problems involving multiplication using arrays<br>Solve one-step problems involving division (grouping)<br>Solve one-step problems involving division (sharing)<br>Decide whether to multiply or divide to sove problems<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_13").click(function () {
        $("#statements").html('recognise and know the value of different denominations of coins and notes<br>');
        $("#key").html('Recognise the 1p coin<br>Recognise the 2p coin<br>Recognise the 1p and 2p coins<br>Recognise the 5p coin<br>Recognise the 10p coin<br>Recognise the 5p and 10p coins<br>Recognise the 20p coin<br>Recognise the 50p coin<br>Recognise the 5p,10p, 20p and 50p coins<br>Recognise the £1 coin<br>Recognise the £2 coin<br>Recognise the £1and £2 coins<br>Recognise the £5 note<br>Recognise the £10 note<br>Recognise the £20 note<br>Solve simple problems involving coins and notes<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_14").click(function () {
        $("#statements").html('compare, describe and solve practical problems for:<br>mass/weight [for example, heavy/light, heavier than, lighter than]<br>capacity and volume [for example, full/empty, more than, less than, half,half full, quarter]<br><br>Measure and begin to record the following:<br>mass/weight<br>capacity and volume<br>');
        $("#key").html('Measure a given mass choosing the appropriate equipment <br>Create a given mass choosing the appropriate equipment <br>Estimate the mass of objects<br>Compare mass of objects, heavier /lighter than<br>Order objects by mass<br>Measure a given capacity choosing the appropriate equipment <br>Estimate a given capacity <br>Compare capacity, <br>Order capacities<br>Solve problems using measures <br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_15").click(function () {
        $("#statements").html('recognise and name common 2-D and 3-D shapes, including:<br>2-D shapes [for example, rectangles (including squares), circles and triangles]<br>3-D shapes [for example, cuboids (including cubes), pyramids and spheres].<br>');
        $("#key").html('Recognise 3-D shapes<br>Recognise and name cuboids<br>Recognise and name cubes<br>Recognise and name pyramids<br>Recognise and name spheres<br>Compare 3-D shapes and explain how they are similar or different<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".2_1").click(function () {
        $("#statements").html('Count in tens from any number forward and backward <br>recognise the place value of each digit in a two-digit number (tens, ones)<br>identify, represent and estimate numbers using different representations, including<br>the number line<br>compare and order numbers from 0 up to 100; use <, > and = signs<br>read and write numbers to at least 100 in numerals and in words<br>use place value and number facts to solve problems.<br>');
        $("#key").html('Represent 2 digit numbers <br>Recognise the value of digits in 2 digit numbers<br>Partition 2 digit numbers in different ways<br>Read 2 digit numbers in words and write using numerals<br>Read 2 digit numbers in numerals and write in words<br>Identify 2 digit numbers  on a number line<br>Represent 2 digit numbers on a number line<br>Estimate numbers on a number line<br>Compare any two 2 digit numbers using < > and =<br>Order 2 digit numbers  with different tens from smallest to greatest<br>Order 2 digit numbers with the same tens from smallest to greatest<br>Order 2 digit numbers <br>Count up in steps of 10 from any 1 or 2 digit number<br>Count back in steps of 10 from any 2 digit number<br>Find 10 more than a given number<br>Find 10 less than a given number<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".2_2").click(function () {
        $("#statements").html('identify and describe the properties of 2-D shapes, including the number of sides and<br>line symmetry in a vertical line<br>identify and describe the properties of 3-D shapes, including the number of edges,<br>vertices and faces<br>');
        $("#key").html('Identify and describe the properties of pentagons<br>Identify and describe the properties of hexagons<br>Identify and describe the properties of octagons<br>Identify symmetry properties of 2-D shapes using vertical lines<br>Identify and describe the properties of 3-D shapes including the number of vertices<br>Identify and describe the properties of 3-D shapes including the number of edges<br>Identify and describe the properties of 3-D shapes including the number of faces<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".2_3").click(function () {
        $("#statements").html('solve problems with addition and subtraction:<br>using concrete objects and pictorial representations, including those involving<br>numbers, quantities and measures<br>applying their increasing knowledge of mental and written methods<br>recall and use addition and subtraction facts to 20 fluently, and derive and use<br>related facts up to 100<br>add and subtract numbers using concrete objects, pictorial representations, and<br>mentally, including:<br>a two-digit number and ones<br>a two-digit number and tens<br>two two-digit numbers<br>adding three one-digit numbers<br>show that addition of two numbers can be done in any order (commutative) and<br>subtraction of one number from another cannot<br>recognise and use the inverse relationship between addition and subtraction and use<br>this to check calculations and solve missing number problems.<br>');
        $("#key").html("For Term 1 & 2, Choose from: <br>Show that addition is commutative<br>Recall addition facts of two single digits within 10<br>Recall and use addition facts of two single digits where one of them is 9<br>Recall and use addition facts of two single digits bridging 10<br>Recall and use addition facts of single digit doubles<br>Recall and use addition facts of single digit near doubles<br>Recall and use addition facts of single digit plus two digit where the sum is 20 or less <br>Use addition facts of 10 to derive facts of 100<br>Add ones to 2 digit numbers using number facts where the tens don't change<br>Add ones to 2 digit numbers using bridging<br>Add ones to 2 digit numbers by rounding to ten then compensating<br>Add multiples of ten to 2 digit numbers using number facts<br>Add two 2 digit numbers by counting on in tens then 1s<br>Add two 2 digit numbers using partitioning and recombing (No regrouping)<br>Add two 2 digit numbers using partitioning and recombining<br>Add two 2 digit numbers by rounding to the nearest ten then compensating<br>Add two 2 digiit numbers choosing an efficient strategy<br>Add three single digit numbers looking for pairs that sum to ten<br>Add three single digit numbers looking for doubles and near doubles<br>Understand why subtraction is not commutative<br>Recall subtraction facts of two single digits within 10<br>Recall subtraction facts of 2 digit number (20 or less) subtract a single digit not bridging 10<br>Recall subtraction facts of 2 digit number (20 or less) subtract 9 bridging 10<br>Recall subtraction facts of 2 digit number (20 or less) subtract a single digit bridging 10<br>Use subtraction facts of 10 to subtract multiples of ten from 100<br>Estimate the answer to subtraction calculations<br>Subtract ones from 2 digit numbers using number facts where the tens don't change<br>Subtract ones from 2 digit numbers using bridging<br>Subtract ones from 2 digit numbers by rounding to ten then compensating<br>Subtract multiples of ten from 2 digit numbers using number facts <br>Subtract two 2 digit numbers by counting back in tens then 1 s<br>Subtract two 2 digit numbers by rounding to the nearest ten then compensating<br>Subtract by finding the difference between two numbers - counting on<br>Subtract two 2 digiit numbers choosing an efficient strategy<br>Solve missing number problems within addition calculations<br>Solve missing number problems within subtraction calculations<br>Derive addition and subtraction facts using inverse operations<br>Solve problems involving addition and subtraction<br>");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".2_4").click(function () {
        $("#statements").html('(From Number and Place Value) Count in steps of 2, 3 and 5 from 0 <b>recall and use multiplication and division facts for the 2, 5 and 10 multiplication tables, including recognising odd and even numbers<br>calculate mathematical statements for multiplication and division within the multiplication tables and write them using the multiplication (x), division (÷) and equals (=) signs<br>show that multiplication of two numbers can be done in any order (commutative) and division of one number by another cannot<br>solve problems involving multiplication and division, using materials, arrays, repeated addition, mental methods, and multiplication and division facts, including problems in contexts.<br>');
        $("#key").html('For Term 2 & 3 , Choose from: <b>Count in steps of 3 from zero<br>Show and use the connection between multiplication and repeated addition<br>Create multiplication statements to describe and solve equal grouping problems<br>Use arrays to solve multiplication problems<br>Show and use the commutativity of multiplication<br>Create division statements to describe and solve grouping problems<br>Create division statements to describe sharing and solve problems<br>Show that division is not commutative<br>Build the 2x table and count in steps of 2 from zero<br>Recall and use multiplication facts for the 2 times table <br>Recall and use division facts for the 2 times table <br>Recognise and use odd and even numbers<br>Build the 10x table and count in steps of 10 from zero<br>Recall and use multiplication facts for the 10 times table <br>Recall and use division facts for the 10 times table <br>Build the 5x table and count in steps of 5 from zero<br>Recall and use multiplication facts for the 5 times table <br>Recall and use division facts for the 5 times table <br>Solve problems using multiplication or division<br>Use factor, factor, product relationship to derive multplication and division statements<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".2_5").click(function () {
        $("#statements").html('order and arrange combinations of mathematical objects in patterns and sequences<br>use mathematical vocabulary to describe position, direction and movement, including movement in a straight line and distinguishing between rotation as a turn and in terms of right angles for quarter, half and three-quarter turns (clockwise and anticlockwise).<br>');
        $("#key").html('Use mathematical language to describe position<br>Use mathematical language to describe direction of a turn, including meaning of clockwise and anti-clockwise<br>Understand and use the language of right angles to describe the size of turn<br>Interpret and devise instructions for following a simple route<br>Order combinations of mathematical objects in patterns and sequences<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".2_6").click(function () {
        $("#statements").html('choose and use appropriate standard units to estimate and measure length/height in any direction (m/cm); mass (kg/g); temperature (°C); capacity (litres/ml) to the nearest appropriate unit, using rulers, scales, thermometers and measuring vessels<br>compare and order lengths, mass, volume/capacity and record the results using >, < and =<br>');
        $("#key").html('Read scales in divisions of ones and twos, <br>Read scales in divisions of fives and tens<br>Read scales where not all numbers on the scale are given and estimate points in between <br>Measure a given length choosing the appropriate equipment <br>Measure a given height choosing the appropriate equipment <br>Create a line of a given length <br>Estimate length and height<br>Compare lengths using the language of longer than and shorter than, < and ><br>Compare heights using the language of taller than and shorter than, < and ><br>Order lengths and heights<br>Measure a given mass choosing the appropriate equipment <br>Create a given mass choosing the appropriate equipment <br>Estimate the mass of objects<br>Compare mass of objects, > and <<br>Order objects by mass<br>Measure a given capacity choosing the appropriate equipment <br>Estimate a given capacity <br>Compare capacity, > and <<br>Order capacities<br>Measure temperature<br>Compare temperature using the language of hotter than and colder than<br>Order temperatures<br>Solve addition and subtraction problems using measures <br>Solve multiplication and division problems using measures<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".2_7").click(function () {
        $("#statements").html('recognise, find, name and write fractions  of a length, shape, set of objects or quantity<br>write simple fractions for example, 1/2 of 6 = 3 and recognise the equivalence of 2/4 and 1/2<br>');
        $("#key").html('Recognise one third as one of three equal parts of a shape  and use fraction notation<br> Find 1/3 of objects <br>Find 1/3 of an amount <br>Recognise two quarters as two of four equal parts, or two of one quarter of a shape and use fraction notation<br>Find 2/4 of objects <br>Find 2/4 of an amount <br>Recognise that a half is equivalent to two quarters<br>Recognise a three quarters as three of four equal parts, or three of one quarter of a shape and use fraction notation<br>Find 3/4 of objects <br>Find 3/4 of an amount <br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".2_8").click(function () {
        $("#statements").html('compare and sequence intervals of time<br>tell and write the time to five minutes, including quarter past/to the hour and draw the hands on a clock face to show these times<br>know the number of minutes in an hour and the number of hours in a day.<br>');
        $("#key").html('Know and use the fact that there are 60 minutes in 1 hour<br>Know and use the fact that there are 24 hours in one day<br>Tell the time using quarter past the hour on an analogue clock<br>Tell the time using quarter to the hour on an analogue clock<br>Draw the hands on a clock to show quarter past/to the hour on an analogue clock<br>Tell the time to five minute intervals past the hour on an analogue clock <br>Draw the hands on a clock to show five minute intervals past the hour on an analogue clock<br>Tell the time to five minute intervals to the hour on an analogue clock <br>Draw the hands on a clock to show five minute intervals to the hour on an analogue clock<br>Compare intervals of time<br>Order or sequence intervals of time<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".2_9").click(function () {
        $("#statements").html('recognise and use symbols for pounds (£) and pence (p); combine amounts to make a particular value<br>find different combinations of coins that equal the same amounts of money<br>solve simple problems in a practical context involving addition and subtraction of money of the same unit, including giving change<br>');
        $("#key").html('Combine £1, £2, £5 and £10 use the symbol for pounds (£) <br>Find the sum of different amounts of pounds<br>Combine 1p, 2p and 5p coins to make different totals<br>Combine 10p, 20p and 50p coins to make different totals<br>Find the sum of different amounts of pence<br>Find different combinations of coins that equal the same amounts of money<br>Calculate the difference between amounts less than 50p and 50p<br>Calculate the difference between amounts less than £1 and £1<br>Solve simple problems involving addition of money<br>Solve simple problems of money, involving giving change<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".2_10").click(function () {
        $("#statements").html('interpret and construct simple pictograms, tally charts, block diagrams and simple tables<br>ask and answer simple questions by counting the number of objects in each category and sorting the categories by quantity<br>ask and answer questions about totalling and comparing categorical data.<br>');
        $("#key").html('Interpret a pictogram where the symbol represents a single item<br>Interpret a pictogram where the symbol represents a multiple of 2 items<br>Interpret a pictogram where the symbol represents a multiple of 5 items<br>Construct a pictogram where the symbol represents a single item<br>Construct a pictogram where the symbol represents a multiple of 2 items<br>Construct a pictogram where the symbol represents a multiple of 5 items<br>Interpret and construct a tally chart<br>Interpret and construct a block diagram<br>Interpret information in a simple table<br>Create a table to show information <br>Ask and answer simple questions by counting the number of objects in each category <br>Ask and answer questions about totalling and comparing categorical data<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".2_11").click(function () {
        $("#statements").html('identify and describe the properties of 3-D shapes, including the number of edges,<br>vertices and faces <br>identify 2-D shapes on the surface of 3-D shapes [for example, a circle on a cylinder<br>and a triangle on a pyramid]<br>compare and sort common 2-D and 3-D shapes and everyday objects.<br>');
        $("#key").html('Identify and describe the properties of cylinders<br>Identify and describe the properties of cones<br>Identify and describe 2-D shapes on the surface of 3-D shapes<br>Compare and sort 2-D shapes and explain how they are similar or different<br>Compare and sort 3-D shapes and explain how they are similar or different<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".3_1").click(function () {
        $("#statements").html('count from 0 in multiples of  50 and 100; find 10 or 100 more or less than a given number<br>recognise the place value of each digit in a three-digit number (hundreds, tens, ones)<br>compare and order numbers up to 1000<br>identify, represent and estimate numbers using different representations<br>read and write numbers up to 1000 in numerals and in words<br>solve number problems and practical problems involving these ideas.<br>');
        $("#key").html('Represent 3 digit numbers <br>Recognise the vaue of digits in 3 digit numbers<br>Partition 3 digit numbers in different ways<br>Read 3 digit numbers in words and write using numerals<br>Read 3 digit numbers in numerals ad write in words<br>Read 3 digit numbers in words and write using numerals including zero as a place holder<br>Read 3 digit numbers in numerals ad write in words, including zero as a place holder<br>Identify 3 digit numbers  on a number line<br>Represent 3 digit numbers on a number line<br>Count in steps of 50 and 100 from zero<br>Count up in steps of 10 from any 2 or 3 digit number<br>Count back in steps of 10 from any 3 digit number<br>Count up in steps of 100 from any 2 or 3 digit number<br>Count up in steps of 100 from any 3 digit number<br>Find 10 more than a given number<br>Find 10 less than a given number<br>Find 100 more than a given number<br>Find 100 less than a given number<br>Compare any two 3 digit numbers <br>Order 3 digit numbers  with different hundreds<br>Order 3 digit numbers with the same hundreds<br>Order 3 digit numbers<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".3_2").click(function () {
        $("#statements").html('add and subtract numbers mentally, including:<br>a three-digit number and ones<br>a three-digit number and tens<br>a three-digit number and hundreds <br>estimate the answer to a calculation and use inverse operations to check answers<br>solve problems, including missing number problems, using number facts, place value, and more complex addition and subtraction.<br>');
        $("#key").html("Add ones to three-digit numbers using number facts where the tens don't change<br>Add ones to three-digit numbers using bridging<br>Add ones to three-digit numbers by rounding to ten then compensating<br>Add tens to three-digit numbers using number facts, where the hundreds don't change<br>Add tens to three-digit numbers using bridging<br>Add hundreds to three-digit numbers using number facts<br>Add 99 to three-digit numbers using rounding to the nearest hundred and then compensating<br>Add two 3-digit numbers using rounding to the nearest hundred and then compensating<br>Add two 3 digit numbers by partitoning and recombining (no regrouping)<br>Add two 2 digit numbers where the sum exceeds 100, choosing an efficient mental  strategy<br>");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".3_3").click(function () {
        $("#statements").html('add and subtract numbers mentally, including:<br>a three-digit number and ones<br>a three-digit number and tens<br>a three-digit number and hundreds <br>estimate the answer to a calculation and use inverse operations to check answers<br>solve problems, including missing number problems, using number facts, place value, and more complex addition and subtraction.<br>');
        $("#key").html("Subtract ones from three-digit numbers using number facts where the tens don't change<br>Subtract ones from three-digit numbers using bridging<br>Subtract ones from three-digit numbers by rounding to ten then compensating<br>Subtract tens from three-digit numbers using number facts where the hundreds don't change<br>Subtract tens from three-digit numbers using bridging<br>Subtract hundreds from three-digit numbers using number facts<br>Subtract from three-digit numbers using rounding and compensating<br>Subtract two 3 digit numbers using partitioning no exchanging<br>Subtract by finding the difference between two numbers - counting on<br>Subtract by finding the difference between two numbers - adjusting<br>");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".3_4").click(function () {
        $("#statements").html('recognise, find and write fractions of a discrete set of objects: unit fractions and nonunit fractions with small denominators<br>add and subtract fractions with the same denominator within one whole<br>');
        $("#key").html('Find unit fractions of a number of objects (5,8,10)<br>Find unit fractions of an amount<br>Find non-unit fractions of a number of objects (2,3,5,8,10)<br>Find non-unit fractions of an amount<br>Add fractions with the same denominator within one whole<br>Subtract fractions with the same denominator within one whole<br>Solve problems involving fractions and decimals<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".3_5").click(function () {
        $("#statements").html('draw 2-D shapes and make 3-D shapes using modeling materials; recognise 3-D shapes in different orientations and describe them <br>identify horizontal and vertical lines and pairs of perpendicular and parallel lines <br>');
        $("#key").html('identify and draw horizontal lines <br>identify and draw vertical lines <br>identify and draw parallel lines <br>identify and draw perpendicular lines <br>draw common 2-D shapes <br>name and describe 3-D shapes <br>make 3-D shapes using modeling materials<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".3_6").click(function () {
        $("#statements").html('add and subtract numbers with up to three digits, using formal written methods of columnar addition and subtraction<br>estimate the answer to a calculation and use inverse operations to check answers<br>solve problems, including missing number problems, using number facts, place value, and more complex addition and subtraction.<br>');
        $("#key").html('Estimate the answer to an addition calculation<br>Use column addition for two 3 digit numbers when regrouping is required in the ones column<br>Use column addition for two 3 digit numbers  when regrouping is required in the tens column<br>Use column addition for two 3 digit numbers  when regrouping is required in multiple columns<br>Use column addition for 3 digit and 2 digit numbers when regrouping is required in the ones column<br>Use column addition for 3 digit and 2 digit numbers when regrouping is required in the tens column<br>Use column addition for 3 digit and 2 digit numbers when regrouping is required in multiple columns<br>Choose efficient methods to add numbers with up to 3-digits<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".3_7").click(function () {
        $("#statements").html('add and subtract numbers with up to three digits, using formal written methods of columnar addition and subtraction<br>estimate the answer to a calculation and use inverse operations to check answers<br>solve problems, including missing number problems, using number facts, place value, and more complex addition and subtraction.<br>');
        $("#key").html('Estimate the answer to a subtraction calculation<br>Use column subtraction for 3 digit numbers when exchanging is required in the tens column<br>Use column subtraction for 3 digit numbers when exchanging is required in the hundreds column<br>Use column subtraction for 3 digit numbers when exchanging is required in multiple columns<br>Use column subtraction for 3 digit and 2 digit numbers when exchanging is required in the tens column<br>Use column subtraction for 3 digit and 2 digit numbers when exchanging is required in the hundreds column<br>Use column subtraction for 3 digit and 2 digit numbers when exchanging is required in multiple columns<br>Choose efficient methods to subtract<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".3_8").click(function () {
        $("#statements").html('recall and use multiplication and division facts for the 3, 4 and 8 multiplication tables<br>write and calculate mathematical statements for multiplication and division using the multiplication tables that they know, including for two-digit numbers times one-digit numbers, using mental and progressing to formal written methods<br>solve problems, including missing number problems, involving multiplication and division, including positive integer scaling problems and correspondence problems in which n objects are connected to m objects.<br>');
        $("#key").html('Build the 3 times table <br>Recall and use multiplication facts for the 3 times table <br>Recall and use division facts for the 3 times table <br>Build the 4x table and count in steps of 4, and multiples of 4, from zero <br>Recall and use multiplication facts for the 4 times table <br>Recall and use division facts for the 4 times table<br>Build the 8x table and count in steps of 8, and multiples of 8, from zero<br>Recall and use multiplication facts for the 8 times table<br>Recall and use division facts for the 8 times table<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".3_9").click(function () {
        $("#statements").html('recall and use multiplication and division facts for the 3, 4 and 8 multiplication tables<br>write and calculate mathematical statements for multiplication and division using the multiplication tables that they know, including for two-digit numbers times one-digit numbers, using mental and progressing to formal written methods<br>solve problems, including missing number problems, involving multiplication and division, including positive integer scaling problems and correspondence problems in which n objects are connected to m objects.<br>');
        $("#key").html('Multiply 2 digit numbers by 10 using place value<br> Multiply 1 digit numbers by multiples of 10 using place value <br>Use the distributive law to multiply a teens number by a one-digit number<br>Use the distributive law to multiply a two-digit number by a one-digit number<br>Multiply 2 digit number by a 1 digit number using a formal written method (regroup ones) <br>Multiply 2 digit number by a 1 digit number using a formal written method (regroup tens) <br>Multiply 2 digit number by a 1 digit number using a formal written method (multiple) <br>Use efficient methods to multiply a two-digit number by a one-digit number<br>Divide near multiples by 2, 3, 4, 5, 8, 10 with remainders<br>Divide a 3 digit multiple of ten by 10 using place value<br>Use known facts  and place value when dividing mentally by 2, 3, 4, 5, and 8  e.g. 120 ÷ 4<br>Use partitioning to divide by a single digit number where the quotient is a teens number<br>Use multiplication or division to solve problems<br>Use multiplication or division to solve scaling or correspondence problems<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".3_10").click(function () {
        $("#statements").html('add and subtract amounts of money to give change, using both £ and p in practical contexts<br>');
        $("#key").html('Sort and compare the value of coins<br>Add amounts of money when the units are the same<br>Add amounts of money when the units are different<br>Subtract amounts of money when the units are the same<br>Subtract amounts of money when the units are different<br>Record a practical money problem using £ and/or p notation <br>Solve practical problems that involve calculating change in manageable amounts up to £1<br>Solve practical problems that involve calculating change in manageable amounts beyond £1<br>Solve practical problems that involve calculating combinations of coins<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".3_11").click(function () {
        $("#statements").html('recognise, find and write fractions of a discrete set of objects: unit fractions and nonunit fractions with small denominators<br>add and subtract fractions with the same denominator within one whole<br>');
        $("#key").html('Find unit fractions of a number of objects (5,8,10)<br>Find unit fractions of an amount<br>Find non-unit fractions of a number of objects (2,3,5,8,10)<br>Find non-unit fractions of an amount<br>Add fractions with the same denominator within one whole<br>Subtract fractions with the same denominator within one whole<br>Solve problems involving fractions and decimals<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".3_12").click(function () {
        $("#statements").html('recognise, find and write fractions of a discrete set of objects: unit fractions and nonunit fractions with small denominators<br>add and subtract fractions with the same denominator within one wholetell and write the time from an analogue clock, including using Roman numerals from I to XII, and 12-hour and 24-hour clocks<br>estimate and read time with increasing accuracy to the nearest minute; record and compare time in terms of seconds, minutes and hours; use vocabulary such as o’clock, a.m./p.m., morning, afternoon, noon and midnight<br>know the number of seconds in a minute and the number of days in each month, year and leap year<br>compare durations of events [for example to calculate the time taken by particular events or tasks].<br>');
        $("#key").html('Read Roman numerals up to XII<br>Know the number of seconds in a minute and multiple minutes<br>Know the number of days in each month, year and leap year<br>Tell the time from a 12-hour analogue clock to the nearest minute<br>Write times using 12-hour format<br>Tell the time from a 24-hour analogue clock to the nearest minute<br>Write times using 24-hour format<br>Tell the time from a clock using Roman numerals to the nearest minute<br>Estimate times <br>Compare times given in seconds, minutes and/or hours<br>Calculate the time taken by particular events or tasks where the duration is less than 1 hour<br>Calculate the time taken by particular events or tasks where the duration is more than 1 hour<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".3_13").click(function () {
        $("#statements").html('measure, compare, add and subtract: lengths (m/cm/mm); mass (kg/g); volume/capacity (l/ml)<br>measure the perimeter of simple 2-D shapes<br>');
        $("#key").html('Use a ruler to measure lengths to the nearest millimetre<br>Use a ruler to measure lengths to the nearest centimetre<br>Use measuring equipment to measure lengths to the nearest metre<br>Use digital and mechanical scales to measure mass to the nearest kg<br>Use digital and mechanical scales to measure mass to the nearest g<br>Use measuring vessels to measure a volume of liquid<br>Choose appropriate units to state the result of a measurement<br>Compare the length of two or more objects<br>Compare the mass of two or more objects<br>Compare the volume of two or more objects<br>Compare the capacity of two or more objects<br>Add and subtract units of measurement<br>solve problems involving multiplication and division of measure<br>Find the perimeter of a 2-D shapes by measuring<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".3_14").click(function () {
        $("#statements").html('recognise angles as a property of shape or a description of a turn<br>identify right angles, recognise that two right angles make a half-turn, three make three quarters of a turn and four a complete turn; identify whether angles are greater than or less than a right angle<br>');
        $("#key").html('Understand that angle is a description of turn<br>Understand that angles are a feature of shapes<br>Identify a right angle as a quarter turn<br>Identify when a shape has a right angle<br>Recognise that 2 right angles make a half-turn, 3 make three-quarters of a turn and 4 a complete turn<br>Identify angles that are less than or greater than a right angle<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".3_15").click(function () {
        $("#statements").html("interpret and present data using bar charts, pictograms and tables<br>solve one-step and two-step questions [for example, ‘How many more?’ and ‘How many fewer?’] using information presented in scaled bar charts and pictograms and tables.<br>");
        $("#key").html('Interpret a pictogram where the symbol represents multiple items<br>Construct a pictogram where the symbol represents multiple items<br>Interpret a bar chart<br>Construct a bar chart<br>Interpret data in a table<br>Create a table to show data<br>Answer one-step questions about data in charts and tables (e.g. ‘How many?’)<br>Answer two-step questions about data in charts and tables (e.g. ‘How many more?’)<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".4_1").click(function () {
        $("#statements").html('count in multiples of 25 and 1000<br>find 1000 more or less than a given number<br>count backwards through zero to include negative numbers<br>recognise the place value of each digit in a four-digit number (thousands, hundreds, tens, and ones)<br>order and compare numbers beyond 1000<br>identify, represent and estimate numbers using different representations<br>round any number to the nearest 10, 100 or 1000<br>solve number and practical problems that involve all of the above and with increasingly large positive numbers<br>read Roman numerals to 100 (I to C) and know that over time, the numeral system changed to include the concept of zero and place value.<br>');
        $("#key").html('Represent 4-digit numbers <br>Recognise the value of digits in 4-digit numbers<br>Partition 4-digit numbers in different ways<br>Read 4-digit numbers in words and write using numerals<br>Read 4-digit numbers in numerals and write in words<br>Read 4-digit numbers in words and write using numerals including zero as a place holder<br>Read 4-digit numbers in numerals and write in words, including zero as a place holder<br>Identify 4-digit numbers  on a number line<br>Represent 4-digit numbers on a number line<br>Count in multiples of 25 from zero<br>Count up in multiples of 1000 from any number<br>Find 1000 more than a given number<br>Find 1000 less than a given number<br>Compare two 4-digit numbers <br>Order 4-digit numbers  with different thousands<br>Order 4-digit numbers with the same thousands<br>Round 2-digit number to the nearest 10 <br>Round 3-digit number to the nearest 10 <br>Round 4-digit number to the nearest 10<br>Round 2/3/4-digit number to the nearest 10 (answer is a multiple of 100)<br>Round 3-digit number to the nearest 100<br>Round 3 and 4 digit numbers to the nearest 100<br>Round 3/4-digit number to the nearest 100 (answer is a multiple of 1000)<br>Round 4-digit number to the nearest 1000<br>Count backwards through zero to include negative numbers<br>Read Roman numerals to 100 <br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".4_2").click(function () {
        $("#statements").html('add and subtract numbers with up to 4 digits using the formal written methods of columnar addition and subtraction where appropriate<br>estimate and use inverse operations to check answers to a calculation<br>solve addition and subtraction two-step problems in contexts, deciding which operations and methods to use and why.<br>');
        $("#key").html('Add ones to 4-digit numbers (where the thousands change)<br>Add tens to 4-digit numbers with no regrouping<br>Add tens to 4-digit numbers (where the hundreds change) <br>Add tens to 4-digit numbers (where the thousands change)<br>Add hundreds to 4-digit numbers with no regrouping<br>Add hundreds to 4-digit numbers (where the thousands change)<br>Add 3-digit number to 4-digit number using rounding to the nearest hundred and then compensating<br>Add two 4-digit numbers using rounding to the nearest thousand and then compensating<br>Add two 3-digit numbers where the sum exceeds 1000, choosing an efficient mental  strategy<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".4_3").click(function () {
        $("#statements").html('compare and classify geometric shapes, including quadrilaterals and triangles, based on their properties and sizes <br>identify lines of symmetry in 2-D shapes presented in deifferent orientations <br>complete a simple symmetric figure with respect to a specific line of symmetry<br>');
        $("#key").html('Identify and describe an equilateral triangle <br>Identify and describe an isosceles triangle <br>Identify and describe a scalene triangle <br>Identify and describe a parallelogram <br> Identify and describe rhombus <br>Identify and describe a trapezium <br>Identify and describe a kite <br>Classify 2-D shapes <br>Identify lines of symmetry of a 2D shape<br>Identify a line of symmetry of a pattern and for a diagram of a reflection<br>Use a line of symmetry to produce a symmetrical pattern <br>Use a line of symmetry to complete a symmetrical shape<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".4_4").click(function () {
        $("#statements").html('add and subtract numbers with up to 4 digits using the formal written methods of columnar addition and subtraction where appropriate<br>estimate and use inverse operations to check answers to a calculation<br>solve addition and subtraction two-step problems in contexts, deciding which operations and methods to use and why.<br>');
        $("#key").html("Subtract ones from 4-digit number (where the hundreds change) choosing an efficient mental strategy <br>Subtract ones from 4-digit number (where the thousands change) choosing an efficient mental  strategy <br>Subtract tens from 4-digit number (where the hundreds change) choosing an efficient mental  strategy <br>Subtract tens from 4-digit number (where the thousands change) choosing an efficient mental  strategy <br>Subtract hundreds from 4-digit number (where the thousands don't change) choosing an efficient mental  strategy <br>Subtract hundreds from 4-digit number (where the thousands change) choosing an efficient mental  strategy <br>Subtract 3-digit number from 4-digit number using rounding to the nearest hundred and then compensating<br>Subtract two 4-digit numbers using rounding to the nearest thousand and then compensating<br>Subtract by finding the difference between two 4 digit numbers by counting on<br>");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".4_5").click(function () {
        $("#statements").html('recall multiplication and division facts for multiplication tables up to 12x12 <br>use place value, known and derived facts to multiply and divide mentally, including:<br>multiplying by 0 and 1; dividing by 1; multiplying together three numbers<br>recognise and use factor pairs and commutativity in mental calculations<br>');
        $("#key").html('For Term 2 & 3, Choose from: <br>Build the 6x table and count in steps of 6, and multiples of 6, from zero<br>Recall and use multiplication facts for the 6 times table<br>Recall and use division facts for the 6 times table<br>Build the 9x table and count in steps of 9, and multiples of 9, from zero<br>Recall and use multiplication facts for the 9 times table<br>Recall and use division facts for the 9 times table<br>Build the 7x table and count in steps of 7, and multiples of 7, from zero<br>Recall and use multiplication facts for the 7 times table<br>Recall and use division facts for the 7 times table<br>Build the 11x table and count in steps of 11 from zero<br>Recall and use multiplication facts for the 11 times table<br>Recall and use division facts for the 11 times table<br>Build the 12x table and count in steps of 12 from zero<br>Recall and use multiplication facts for the 12 times table<br>Recall and use division facts for the 12 times table<br>Use knowledge of factor pairs (commutativity) when multiplying mentally three numbers together, such as 2 x 6 x 5 = 10 x 6 = 60<br>Know and use the effect of multiplying by 0 <br>Know and use the effect of multiplying by 1 <br>Know and use the effect of dividing by 1<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".4_6").click(function () {
        $("#statements").html('compare and classify geometric shapes, including quadrilaterals and triangles, based<br>on their properties and sizes<br>identify acute and obtuse angles and compare and order angles up to two right<br>angles by size<br>identify lines of symmetry in 2-D shapes presented in different orientations<br>complete a simple symmetric figure with respect to a specific line of symmetry.<br>');
        $("#key").html('Identify acute angles<br>Identify obtuse angles<br>Identify acute angles in shapes<br>Identify obtuse angles in shapes<br>Identify right angles in shapes<br>Compare angles up to two right angles in size<br>Order angles up to two right angles in size<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".4_7").click(function () {
        $("#statements").html('recall multiplication and division facts for multiplication tables up to 12 Å~ 12<br>use place value, known and derived facts to multiply and divide mentally, including:<br>multiplying by 0 and 1; dividing by 1; multiplying together three numbers<br>recognise and use factor pairs and commutativity in mental calculations<br>multiply two-digit and three-digit numbers by a one-digit number using formal written layout<br>solve problems involving multiplying and adding, including using the distributive law to multiply two digit numbers by one digit, integer scaling problems and harder correspondence problems such as n objects are connected to m objects.<br>');
        $("#key").html('Multiply 2 digit numbers by 10 using place value<br>Multiply 1 digit numbers by multiples of 10 using place value<br>Use the distributive law to multiply a two-digit number by a one-digit number (6,7, 9)<br>Multiply 2 digit number by a 1 digit number using a formal written method (6, 7, 9)<br>Use efficient methods to multiply a two-digit number by a one-digit number (6, 7, 9)<br>Multiply 3-digit number by a 1 digit number using a formal written method (regroup ones) <br>Multiply 3-digit number by a 1 digit number using a formal written method (regroup tens) <br>Multiply 3-digit number by a 1 digit number using a formal written method (regroup hundreds) <br>Multiply 3-digit number by a 1 digit number using a formal written method (multiple regroup) <br>Divide near multiples by 6, 7, 9, 11, 12 with remainders<br>Use known facts  and place value when dividing mentally e.g. 120 ÷ 6, 1200÷ 6, 1320÷ 12<br>Use partitioning to divide by a single digit number (6,7,9) where the quotient is a teens number<br>Divide 3-digit number by a single digit number using partitioning and place value<br>Use written method to divide a 3-digit number by a single digit number (hundreds = multiple of divisor, tens > divisor) with no remainder<br>Use written method to divide a 3-digit number by a single digit number (hundreds > divisor, one exchange) with no remainder<br>Use written method to divide a 3-digit number by a single digit number (hundreds > divisor, two exchanges) with no remainder<br>Use written method to divide a 3-digit number by a single digit number (hundreds < divisor) with no remainder<br>Choose efficent methods to divide 3-digit by a single digit<br>Use multiplication or division to solve problems<br>Use multiplication or division to solve scaling or correspondence problems<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".4_8").click(function () {
        $("#statements").html('add and subtract numbers with up to 4 digits using the formal written methods of columnar addition and subtraction where appropriate<br>estimate and use inverse operations to check answers to a calculation<br>solve addition and subtraction two-step problems in contexts, deciding which operations and methods to use and why.<br>');
        $("#key").html('Estimate the answer to an addition calculation<br>Add two 4-digit numbers by partitoning and recombining (no regrouping)<br>Use column addition for two 4-digit numbers  when regrouping is required in the ones column<br>Use column addition for two 4-digit numbers when regrouping is required in the tens column<br>Use column addition for two 4-digit numbers  when regrouping is required in the hundreds column<br>Use column addition for two 4-digit numbers  when regrouping is required in multiple columns<br>Use column addition for two 3-digit numbers where the sum exceeds 1000<br>Use column addition for 4-digit and 3-digit numbers when regrouping is required in multiple columns<br>Use column addition for 4-digit and 2-digit numbers when regrouping is required in multiple columns<br>Choose efficient methods to add numbers with up 4-digits<br>Use columnar addition for numbers with 2 decimal places with regrouping (carrying) required<br>Add numbers with a mixture of 1 and 2 decimal places<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".4_9").click(function () {
        $("#statements").html('add and subtract numbers with up to 4 digits using the formal written methods of columnar addition and subtraction where appropriate<br>estimate and use inverse operations to check answers to a calculation<br>solve addition and subtraction two-step problems in contexts, deciding which operations and methods to use and why.<br>');
        $("#key").html('Estimate the answer to a subtraction calculation<br>Subtract two 4-digit numbers using partitioning no exchanging<br>Use column subtraction for 4-digit numbers when exchanging is required in the tens column<br>Use column subtraction for 4-digit numbers when exchanging is required in the hundreds column<br>Use column subtraction for 4-digit numbers when exchanging is required in the thousands column<br>Use column subtraction for 4-digit numbers when exchanging is required in multiple columns<br>Use column subtraction for 4-digit and 3-digit numbers when exchanging is required in multiple columns<br>Use column subtraction for 4-digit and 2-digit numbers when exchanging is required in multiple columns<br>Choose efficient methods to subtract<br>Use columnar subtraction for numbers with 2 decimal places with exchanging required<br>Subtract numbers with a mixture of 1 and 2 decimal places<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".4_10").click(function () {
        $("#statements").html('count up and down in hundredths; recognise that hundredths arise when dividing an object by one hundred and dividing tenths by ten.<br>recognise and write decimal equivalents of any number of tenths or hundredths<br>find the effect of dividing a one- or two-digit number by 10 and 100, identifying the value of the digits in the answer as ones, tenths and hundredths<br>round decimals with one decimal place to the nearest whole number<br>compare numbers with the same number of decimal places up to two decimal places<br>solve simple measure and money problems involving fractions and decimals to two decimal places.<br>');
        $("#key").html('Find tenths of tenths and express as fractions and decimals<br>Find hundredths of a whole and express as fractions and decimals<br>Divide a one-digit number by 10<br>Divide a one-digit number by 100<br>Divide a two-digit number by 10<br>Divide a two-digit number by 100<br>Count up in hundredths and position on a number line<br>Count down in hundredths and position on a number line<br>Count up in tenths (starting from 2dp number) and position on a number line<br>Count down in tenths (starting from 2dp number) and position on a number line<br>Compare numbers with 1 dp<br>Compare numbers with 2dp<br>Round numbers with 1dp to nearest whole number<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".4_11").click(function () {
        $("#statements").html('Convert between different units of measure [for example, kilometre to metre; hour to minute]<br>estimate, compare and calculate different measures, including money in pounds and pence<br>');
        $("#key").html('Convert between kilometres and metres<br>Convert between centimetres and millimetres<br>Convert between kilograms and grams<br>Convert between litres and millilitres<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".4_12").click(function () {
        $("#statements").html('recognise and show, using diagrams, families of common equivalent fractions<br>solve problems involving increasingly harder fractions to calculate quantities, and fractions to divide quantities, including non-unit fractions where the answer is a whole number<br>add and subtract fractions with the same denominator<br>recognise and write decimal equivalents to 1/4, 1/2 and 3/4<br>');
        $("#key").html('Add fractions with the same denominator within and beyond one whole<br>Subtract fractions with the same denominator within and beyond one whole<br>Calculate a unit fraction of an amount when the answer is a whole number<br>Calculate a non-unit fraction of an amount when the answer is a whole number<br>Identify equivalent fractions from diagrams<br>Find families of equivalent fractions<br>Know and use the decimal equivalents to 1/4, 1/2, 3/4<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".4_13").click(function () {
        $("#statements").html('Convert between different units of measure [for example, hour to minute]<br>read, write and convert time between analogue and digital 12- and 24-hour clocks<br>solve problems involving converting from hours to minutes; minutes to seconds; years to months; weeks to days.<br>estimate, compare and calculate different measures, including money in pounds and pence<br>');
        $("#key").html('Read digital 24-hour clocks and write in words<br>Write times in words using digital 24-hour clock<br>Convert between 12-hour analogue time and 24-hour notation<br>Convert times between 24-hour notation and 12-hour analogue time<br>Converting from minutes to seconds; <br>Converting from hours to minutes<br>Converting from weeks to days<br>Converting from years to months<br>Solve money problems involving decimal notation<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".4_14").click(function () {
        $("#statements").html('measure and calculate the perimeter of a rectilinear figure (including squares) in centimetres and metres<br>find the area of rectilinear shapes by counting squares<br>');
        $("#key").html('Measure and calculate the perimeter of 2D shapes when dimensions are unknown<br>Calculate the perimeter of rectangles (including squares) when dimensions are known<br>Calculate the perimeter of other rectilinear shapes when dimensions are known<br>Find the area of rectangles (including squares) by counting squares<br>Find the area of other rectilinear shapes by counting squares<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".4_15").click(function () {
        $("#statements").html('describe positions on a 2-D grid as coordinates in the first quadrant<br>describe movements between positions as translations of a given unit to the left/right and up/down<br>plot specified points and draw sides to complete a given polygon.<br>');
        $("#key").html('Use coordinates to describe the position of a point in the first quadrant<br>Plot points in the first quadrant using co-ordinates<br>Use coordinates to plot a set of points to construct a polygon<br>Describe movements between positions as translations of a given unit to the left/right<br>Describe movements between positions as translations of a given unit to the up/down<br>Describe movements between positions as translations of a given unit to the left/right and up/down<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".4_16").click(function () {
        $("#statements").html('interpret and present discrete and continuous data using appropriate graphical methods, including bar charts and time graphs.<br>solve comparison, sum and difference problems using information presented in bar charts, pictograms, tables and other graphs.<br>');
        $("#key").html('Interpret a pictogram where the symbol represents multiple items<br>Interpret bar charts with different scales on the frequency axis<br>Construct a bar chart with different scales on the frequency axis<br>Interpret a time graph<br>Construct a time graph<br>Solve problems involving the data in tables<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".5_1").click(function () {
        $("#statements").html('read, write, order and compare numbers to at least 1 000 000 and determine the value of each digit<br>count forwards or backwards in steps of powers of 10 for any given number up to 1 000 000<br>interpret negative numbers in context, count forwards and backwards with positive and negative whole numbers, including through zero<br>solve number problems and practical problems that involve all of the above<br>read Roman numerals to 1000 (M) and recognise years written in Roman numerals.<br>round any number up to 1 000 000 to the nearest 10, 100, 1000, 10 000 and 100 000<br>');
        $("#key").html('Represent 5-digit numbers <br> Recognise the value of digits in 5-digit numbers <br>Read 5-digit numbers in words and write using numerals, including 0 as a place holder <br>Read 5-digit numbers in numerals and write in words, including 0 as a place holder <br>Identify and represent 5-digit numbers on a numberline <br>Compare 5-digit numbers <br>Represent numbers up to one million<br>Recognise the value of digits in numbers up to one million<br>Partition 6 digit numbers in different ways<br>Read 6-digit numbers in words and write using numerals<br>Read 6-digit numbers in numerals and write in words<br>Read 6-digit numbers in words and write using numerals including zero as a place holder<br>Read 6-digit numbers in numerals and write in words, including zero as a place holder<br>Identify 6-digit numbers on a number line<br>Represent 6-digit numbers on a number line<br>Compare numbers up to one million<br>Order numbers up to one million<br>Count forwards in tens and hundreds from any positive number up to 1 000 000<br>Count forwards in thousands from any positive number up to 1 000 000<br>Count backwards in tens and hundreds from any positive number up to 1 000 000<br>Count backwards in thousands from any positive number up to 1 000 000<br>Count forwards and backwards in whole number steps when negative numbers are included<br>Count forwards and backwards in whole number steps including through zero<br>Understand and use negative numbers in context, including temperatures below 0°C<br>Read Roman numerals to 1000 (M)<br>Recognise years written in Roman numerals<br>Round any 5-digit number to the nearest 10 000<br>Round any 6-digit number to the nearest 100 000<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".5_2").click(function () {
        $("#statements").html('read and write decimal numbers as fractions [for example, 0.71 = 71/100<br>recognise and use thousandths and relate them to tenths, hundredths and decimal equivalents<br>read, write, order and compare numbers with up to three decimal places<br>round decimals with two decimal places to the nearest whole number and to one decimal place<br>');
        $("#key").html('Recognise that thousandths arise from dividing a number (or object) into one thousand equal parts and dividing hundredths by ten<br>Read a number with three decimal places<br>Represent decimal numbers with up to 3 decimal places<br>Write decimal equivalents of any number of thousandths<br>Identify decimal numbers, with up to 3 decimal places, on a number line<br>Position decimal numbers, with up to 3 decimal places, on a number line<br>Compare a set of numbers written to three decimal places<br>Order decimal numbers with 3 decimal places<br>Compare numbers with a mixed number of decimal places<br>Order numbers with a mixed number of decimal places<br>Order numbers in context<br>Round number with two decimal places to one decimal place<br>Round number with two decimal places to the nearest whole number<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".5_3").click(function () {
        $("#statements").html('identify 3-D shapes including cubes and other cuboids from 2-D representations<br>');
        $("#key").html('Identify cubes from nets<br>Identify cuboids from nets<br>Identify prisms from nets<br>Identify pyramids from nets<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".5_4").click(function () {
        $("#statements").html('add and subtract whole numbers with more than 4 digits, including using formal written methods (columnar addition and subtraction)<br>add and subtract numbers mentally with increasingly large numbers<br>use rounding to check answers to calculations and determine, in the context of a problem, levels of accuracy<br>solve addition and subtraction multi-step problems in contexts, deciding which operations and methods to use and why<br>(From fractions, including decimals and percentages) Solve problems, involving number, up to 3 decimal places<br>');
        $("#key").html('Add two whole numbers choosing an efficient mental strategy<br>Subtract two whole numbers choosing an efficient mental strategy<br>Use column addition for two numbers with more than 4 digits when regrouping is required in multiple columns<br>Use column subtraction for two numbers with more than 4 digits when regrouping is required in multiple columns<br>Use column additiion for numbers with 3 decimal places when regrouping is required<br>Use column additiion for numbers with 1,2 or 3 decimal places when regrouping is required<br>Use column subtractiion for numbers with 3 decimal places when regrouping is required<br>Use column subtractiion for numbers with 1,2 or 3 decimal places when regrouping is required<br>Add two decimal numbers choosing an efficient strategy<br>Subtract two decimal numbers choosing an efficient strategy<br>Solve addition and subtraction problems <br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".5_5").click(function () {
        $("#statements").html('multiply and divide whole numbers and those involving decimals by 10, 100 and 1000<br>');
        $("#key").html('Multiply a whole number by 10<br>Multiply a whole number by 100<br>Multiply a whole number by 1000<br>Multiply a decimal by 10<br>Multiply a decimal by 100<br>Multiply a decimal by 1000<br>Divide a whole number by 10<br>Divide a whole number by 100<br>Divide a whole number by 1000<br>Divide a decimal by 10<br>Divide a decimal by 100<br>Divide a decimal by 1000<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".5_6").click(function () {
        $("#statements").html('identify multiples and factors, including finding all factor pairs of a number, and common factors of two numbers<br>know and use the vocabulary of prime numbers, prime factors and composite (nonprime) numbers<br>establish whether a number up to 100 is prime and recall prime numbers up to 19<br>recognise and use square numbers and cube numbers, and the notation for squared and cubed <br>solve problems involving multiplication and division including using their knowledge of factors and multiples, squares and cubes<br>');
        $("#key").html('Find multiples of a given number<br>Find prime numbers up to 20 <br>Find and identify factors of a given number<br>Find the common factors of two numbers<br>Find prime and composite numbers up to 20<br>Express a given number as the product of prime factors <br>Know how to test if a number up to 100 is prime<br>Find square numbers and use the notation for squared<br>Find cube numbers and use the notation for cubed<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".5_7").click(function () {
        $("#statements").html('multiply numbers up to 4 digits by a one- or two-digit number using a formal written method, including long multiplication for two-digit numbers<br>multiply and divide numbers mentally drawing upon known facts<br>divide numbers up to 4 digits by a one-digit number using the formal written method of short division and interpret remainders appropriately for the context<br>solve problems involving multiplication and division including using their knowledge of factors and multiples, squares and cubes<br>solve problems involving addition, subtraction, multiplication and division and a combination of these, including understanding the meaning of the equals sign<br>solve problems involving multiplication and division, including scaling by simple fractions and problems involving simple rates.<br>');
        $("#key").html('Multiply numbers up to 4-digits by a one-digit number using short multiplication<br>Multiply  2 digit by 2 digit numbers using grid method<br>Multiply 2 digit by 2 digit numbers using long multiplication<br>Multiply 3 digit numbers by 2 digit numbers using long multiplication<br>Multiply 4 digit numbers by 2 digit numbers using long multiplication<br>Use efficient methods to multiply mentally<br>Use known facts and place value to multiply a whole number by a decimal <br>Multiply a whole number by a decimal using a formal written method<br>Multiply two decimal numbers using a formal written method<br>Divide a four-digit number by a one-digit number using short division (divisor < thousands digit) with no remainder<br>Divide a four-digit number by a one-digit number using short division (thousands digit = multiple of divisor, divisor < hundreds digit) with no remainder<br>Divide a four-digit number by a one-digit number using short division (divisor > thousands digit) with a remainder<br>Divide a four-digit number by a one-digit number using short division (divisor < thousands digit) with a remainder<br>Divide a four-digit number by a one-digit number using short division (divisor > thousands digit) with a remainder<br>Solve problems using division and write the remainder as a fraction<br>Solve problems using division and write the remainder as a decimal<br>Interpret a remainder appropriately for the context when carrying out division<br>Use efficient methods to divide mentally<br>Use known facts and place value to divide a decimal by a whole number<br>Divide a decimal number by a whole number using short division<br>Solve problems using multiplication or division, including using measures and money<br>Solve problems using scaling<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".5_8").click(function () {
        $("#statements").html('identify, describe and represent the position of a shape following a reflection or<br>translation, using the appropriate language, and know that the shape has not changed.<br>');
        $("#key").html('Know what congruence means<br>Carry out a translation described using mathematical language<br>Carry out a reflection using a line parallel to the axes including touching the object<br>Carry out a reflection using a line parallel to the axes and crossing the object<br>Describe a reflection<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".5_9").click(function () {
        $("#statements").html('compare and order fractions whose denominators are all multiples of the same number<br>identify, name and write equivalent fractions of a given fraction, represented visually, including tenths and hundredths<br>recognise and use thousandths and relate them to tenths, hundredths and decimal equivalents<br>solve problems involving number up to three decimal places<br>recognise the per cent symbol (%) and understand that per cent relates to ‘number of parts per hundred’, and write percentages as a fraction with denominator 100, and as a decimal<br>solve problems which require knowing percentage and decimal equivalents  and those fractions with a denominator of a multiple of 10 or 25.<br>');
        $("#key").html('Compare fractions whose denominators are multiples of the same number<br>Order fractions whose denominators are multiples of the same number<br>Identify equivalent fractions represented visually<br>Identify equivalent fractions represented using tenths and hundredths<br>Write a number (less than1) with one decimal place as a fraction<br>Write a number (less than 1) with two decimal places as a fraction<br>Write a number less than 1 with three decimal places as a fraction<br>Understand that per cent relates to number of parts per hundred<br>Write any percentage as a fraction with a denominator of 100<br>Write any percentage as a decimal<br>Know percentage equivalents of 1/2, 1/4, 1/5, 2/5, 4/5 and fractions with a denominator of 10 and 100<br>Establish percentage equivalents of fractions with a denominator of 20, 25, 40 and 50<br>Know decimal equivalents of 1/2, 1/4, 1/5, 2/5, 4/5 and fractions with a denominator of 10 and 100<br>Establish decimal equivalents of fractions with a denominator of 20, 25, 40 and 50<br>Solve problems with fractions and decimals <br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".5_10").click(function () {
        $("#statements").html('convert between different units of metric measure (for example, kilometre and metre; centimetre and metre; centimetre and millimetre; gram and kilogram; litre and millilitre)<br>understand and use approximate equivalences between metric units and common imperial units such as inches, pounds and pints<br>measure and calculate the perimeter of composite rectilinear shapes in centimetres and metres<br>estimate volume [for example, using 1 cm3 blocks to build cuboids (including cubes)] and capacity [for example, using water]<br>use all four operations to solve problems involving measure [for example, length, mass, volume, money] using decimal notation, including scaling.<br>');
        $("#key").html('Convert between kilometres and metres using decimal notation<br>Convert between centimetres and metres using decimal notation<br>Convert between centimetres and millimetres using decimal notation<br>Measure the perimeter of composite rectilinear shapes <br>Calculate the perimeter of composite rectilinear shapes where all measurements are given<br>Calculate the perimeter of composite rectilinear shapes where some measurements need to be calculated<br>Convert between kilograms and grams using decimal notation<br>Convert between litres and millilitres using decimal notation<br>Estimate capacity<br>Solve problems involving scaling<br>Know approximate equivalencies between metric and imperial units including inches, pounds and pints<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".5_11").click(function () {
        $("#statements").html('recognise mixed numbers and improper fractions and convert from one form to the other and write mathematical statements > 1 as a mixed number<br>add and subtract fractions with the same denominator and denominators that are multiples of the same number<br>multiply proper fractions and mixed numbers by whole numbers, supported by materials and diagrams<br>');
        $("#key").html('Convert a mixed number into an improper fraction <br>Convert an improper fraction into a mixed number<br>Add proper fractions denominator multiples within the whole <br>Add proper fractions denominator multiples = mixed number answer <br>Add mixed and proper same denominator = mixed number answer <br>Add mixed and proper same denominator = mixed number answer (beyond whole) <br>Add mixed and proper denominator multiples = mixed number answer <br>Add mixed and proper denominator multiples = mixed number answer (beyond whole) <br>Solve problems using addition of fractions<br>Subtract proper from mixed same denominator within the whole <br>Subtract proper from mixed same denominator (across whole) <br>Subtract proper fractions denominator multiples within the whole <br>Subtract proper fractions denominator multiples from mixed denominator multiples within the whole <br>Subtract proper fractions from mixed denominator multiples (across whole) <br>Solve problems using subtraction of fractions<br>Multiply unit fraction by a whole number <br>Multiply non-unit fraction by a whole number <br>Multiply mixed number by a whole number <br>Multiply mixed number by a whole number (beyond whole) <br>Solve problems using multiplication of fractions<br>Solve problems using scaling by simple fractions<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".5_12").click(function () {
        $("#statements").html('measure and calculate the perimeter of composite rectilinear shapes in centimetres and metres<br>calculate and compare the area of rectangles (including squares), and including using standard units, square centimetres (cm2) and square metres (m2) and estimate the area of irregular shapes<br>estimate volume [for example, using 1 cm3 blocks to build cuboids (including cubes)] and capacity [for example, using water]<br>');
        $("#key").html('Calculate the area of rectangles, including squares<br>Compare the area of rectangles<br>Estimate the area of irregular shapes bounded by straight lines<br>Estimate the area of irregular shapes that include curved lines<br>Estimate volume by using 1 cm3 blocks to build cuboids, including cubes<br>Solve problems with area and perimeter<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".5_13").click(function () {
        $("#statements").html('identify 3-D shapes, including cubes and other cuboids, from 2-D representations<br>know angles are measured in degrees: estimate and compare acute, obtuse and reflex angles<br>draw given angles, and measure them in degrees (o)<br>Identify angles at a point and one whole turn<br>Identify angles at a point on a straight line and 1/2 a turn (total 180o) and other multiples of 90<br>use the properties of rectangles to deduce related facts and find missing lengths and angles<br>distinguish between regular and irregular polygons based on reasoning about equal sides and angles.<br>');
        $("#key").html('Identify reflex angles<br>know angles are measured in degrees<br>Estimate acute, obtuse and reflex angles<br>Use a protractor to measure acute angles<br>Use a protractor to measure obtuse angles<br>Use a protractor to measure reflex angles<br>Use a protractor to draw acute angles<br>Use a protractor to draw obtuse angles<br>Use a protractor to draw reflex angles<br>Identify and find angles at a point<br>Identify and find angles at a point on a straight line<br>Use the properties of rectangles to find missing lengths and angles<br>Know the difference between a regular and an irregular polygon<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".5_14").click(function () {
        $("#statements").html('complete, read and interpret information in tables, including timetables.<br>solve comparison, sum and difference problems using information presented in a line graph<br>');
        $("#key").html('Solve a problem involving converting between different units of time<br>Read and interpret information given in a table<br>Read and interpret information given in a timetable<br>Solve problems that involve interpreting timetables<br>Understand the difference between a line graph and a bar-line chart<br>Identify when a line graph is an appropriate way to show data<br>Read values from a line graph<br>Answer one-step questions about data in line graphs (e.g. ‘How much?’)<br>Answer two-step questions about data in line graphs (e.g. ‘How much more?’)<br>Solve problems using information presented in a line graph<br>Solve problems involving graphs<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".6_1").click(function () {
        $("#statements").html('read, write, order and compare numbers up to 10 000 000 and determine the value of each digit<br>round any whole number to a required degree of accuracy<br>use negative numbers in context, and calculate intervals across zero<br>solve number and practical problems that involve all of the above <br>Identify the value of each digit in numbers given to 3 decimal places  (from Fractions, Including Decimals and Percentages) <br>Multiply and divide numbers by 10, 100 and 1000 giving answers up to 3 decimal places <br>Identify common factors, common multiples and prime numbers<br>');
        $("#key").html('Represent 7-digit numbers <br>Recognise the value of digits in 7-digit numbers<br>Partition 7-digit numbers in different ways<br>Read 7-digit numbers in words and write using numerals<br>Read 7-digit numbers in numerals and write in words<br>Read 7-digit numbers in words and write using numerals including zero as a place holder<br>Read 7-digit numbers in numerals and write in words, including zero as a place holder<br>Identify 7-digit numbers  on a number line<br>Represent 7-digit numbers on a number line<br>Compare numbers up to 10,000,000 <br>Order numbers up to 10,000,000 <br>Round whole numbers to different degrees of accuracy <br>Identify the value of digits in decimal numbers <br>Multiply decimals (up to 3dp) by 10<br>Multiply decimals (up to 3dp) by 100<br>Multiply decimals (up to 3dp) by 1000<br>Divide decimals (up to 3dp) by 10 <br>Divide decimals (up to 3dp) by 100<br>Divide decimals (up to 3dp) by 1000<br>Understand and use negative numbers when working in context, such as temperature<br>Calculate intervals across zero<br>Find common multiples of two numbers<br>Find common factors of two numbers<br>Identify prime numbers');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".6_2").click(function () {
        $("#statements").html('solve addition and subtraction multi-step problems in contexts, deciding which operations and methods to use and why<br>Solve problems involving addition, subtraction, mulitplication and division<br>');
        $("#key").html('Carry out addition calculations involving numbers up to 4 digits using mental strategies<br>Carry out addition calculations mentally involving numbers up to 4 digits using writen  and mental methods<br>Carry out subtraction calculations involving numbers up to 4 digits using mental strategies<br>Carry out addition calculations mentally involving numbers up to 4 digits using writen  and mental methods<br>Solve multi-step problems involving addition and/or subtraction<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".6_3").click(function () {
        $("#statements").html('multiply multi-digit numbers up to 4 digits by a two-digit whole number using the formal written method of long multiplication<br>divide numbers up to 4 digits by a two-digit whole number using the formal written method of long division, and interpret remainders as whole number remainders, fractions, or by rounding, as appropriate for the context<br>divide numbers up to 4 digits by a two-digit number using the formal written method of short division where appropriate, interpreting remainders according to the context<br>perform mental calculations, including with mixed operations and large numbers<br>Identify common factors, common multiples and prime numbers<br>solve problems involving addition, subtraction, multiplication and division<br>use estimation to check answers to calculations and determine, in the context of a problem, an appropriate degree of accuracy.<br>');
        $("#key").html('Multiply a four-digit number by a two-digit number using long multiplication<br>Solve multi-step problems involving addition and/or subtraction and multiplication<br>Divide a three-digit number by a two-digit number using short division with no remainder<br>Divide a three-digit number by a two-digit number using short division with a whole number remainder<br>Divide a three-digit number by a two-digit number using short division with a remainder expressed as a fraction<br>Divide a three-digit number by a two-digit number using short division with a remainder rounding to two decimal places<br>Divide a four-digit number by a two-digit number using short division with no remainder<br>Divide a four-digit number by a two-digit number using short division with a whole number remainder<br>Divide a four-digit number by a two-digit number using short division with a remainder expressed as a fraction<br>Divide a four-digit number by a two-digit number using short division with a remainder rounding to two decimal places<br>Solve problems involving division, understanding how to interpret the remainder to a division problem appropriately for the context<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".6_4").click(function () {
        $("#statements").html('describe positions on the full coordinate grid - all 4 quadrants <br>Draw and translate simple shapes on the coordinate plane and reflect them in the axes<br>');
        $("#key").html('Use coordinates to describe the position of a point in all four quadrants<br>Use coordinates to plot the position of a point in any of the four quadrants<br>Draw and translate simple shapes<br>Carry out a reflection using one of the axes as a mirror line<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".6_5").click(function () {
        $("#statements").html('use common factors to simplify fractions; use common multiples to express fractions in the same denomination <br>compare and order fractions, including frations > 1 <br>associate a fraction with division and calculate decimal fraction equivalents for a simple fraction <br>recall and use equivalences between simple fractions, decimals and percentages including in different contexts<br>');
        $("#key").html('Use common factors to simplify fractions<br>Use common multiples to find equivalent fractions<br>Compare proper fractions<br>Compare proper fractions, including fractions > 1<br>Order proper fractions <br>Order fractions, inlcuding fractions > 1<br>Calculate decimal equivalents of fifths, eighths and tenths<br>Know simple fractions and decimal equivalences for 10%, 20%, 25%, 50%, 75%, 100%<br>Find equivalencies between simple fractions, decimals and percentages<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".6_6").click(function () {
        $("#statements").html('recognise angles where they meet at a point, are on a straight line, or are vertically opposite, and find missing angles<br>');
        $("#key").html('Find missing angles where they meet at a point<br>Find missing angles where they meet on a straight line<br>Find missing angles where they are vertically opposite<br>Find unknown angles in a triangle<br>Find unknown angles in an isosceles triangle when only one angle is known<br>Find unknown angles in a quadrilateral<br>Find unknown angles in regular polygons<br>Use known facts - at a point, straight line, vertically opposite and angles in polygons - to find missing angles<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".6_7").click(function () {
        $("#statements").html('draw 2-D shapes using given dimensions and angles<br>recognise, describe and build simple 3-D shapes including makeing nets<br>compare and classify geometric shapes based on their properties and sizes and find unknown angkes in any triangles, quadrilaterals and regular polygons<br>illustrate and name parts of circles, including radius, diameter and circumference and know that the diameter is twice the radius<br>');
        $("#key").html('Classify 2D shapes using given categories; e.g. number of sides, symmetry<br>Draw 2-D shapes given angles<br>Draw 2-D shapes given dimensions and/or angles<br>Recognise and describe 3-D shapes<br>Classify 3-D shapes including cylinders, cones and spheres<br>Draw nets of 3-D shapes<br>Construct diagrams of 3-D shapes on isometric paper<br>Know the names and relationships of the parts a circle<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".6_8").click(function () {
        $("#statements").html('use their knowledge of the order of operations to carry out calculations involving the four opperations<br>');
        $("#key").html('Carry out calculations involving mixture of addition and subtraction<br>Carry out calculations involving a mixture of multiplication and division<br>Carry out calculations involving mixture of multiplication and addition/subtraction<br>Carry out calculations involving mixture of division and addition/subtraction<br>Carry out calculations involving all four operations<br>Carry out calculations involving mixture of addition and/or subtraction and indices<br>Carry out calculations involving a mixture of multiplication and/or division and indices<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".6_9").click(function () {
        $("#statements").html('<br>');
        $("#key").html('Add proper fractions (denominators not multiples of each other) within the whole<br>Add proper fractions (denominators not multiples of each other) beyond the whole (mixed number answer)<br>Add mixed number and proper fractions (denominators not multiples of each other) fractions within whole (mixed number answer)<br>Add mixed and proper fractions (denominators not multiples of each other) fractions beyond the whole (mixed number answer)<br>Add mixed numbers (same denominators), fractions within and beyond the whole (mixed number answer)<br>Add mixed numbers (denominators multiples of each other) fractions within the whole (mixed number answer)<br>Add mixed numbers (denominators multiples of each other) fractions beyond the whole (mixed number answer)<br>Add mixed numbers (denominators not multiples of each other) fractions within the whole (mixed number answer)<br>Add mixed numbers (denominators not multiples of each other) fractions beyond the whole (mixed number answer)<br>Subtract proper fractions (denominators not multiples of each other) within the whole<br>Subtract proper fractions from mixed numbers, fractions within the whole (denominators not multiples of each other) <br>Subtract proper fractions from mixed numbers, fractions across the whole (denominators not multiples of each other)<br>Subtract mixed number from mixed numbers (same denominators), fractions within the whole<br>Subtract mixed number from mixed numbers (same denominators), fractions across the whole<br>Subtract mixed number from mixed numbers (denominators multiples of each other), fractions within the whole<br>Subtract mixed number from mixed numbers (denominators multiples of each other), fractions across the whole<br>Subtract mixed number from mixed numbers (denominators not multiples of each other), fractions within the whole<br>Subtract mixed number from mixed numbers (denominators not multiples of each other), fractions across the whole<br>Multiply simple pairs of proper fractions<br>Divide unit fraction by whole number<br>Divide fraction by whole number (numerator = divisor)<br>Divide fraction by whole number (numerator = multiple of divisor)<br>Divide fraction by whole number (numerator not a multiple of divisor)<br>Multiply O.t by O<br>Multiply O.th by O<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".6_10").click(function () {
        $("#statements").html('<br>');
        $("#key").html('Find 10%, 25%, 50% and 75% of an amount <br>Find simple percentages of an amount (mulitples of 10% and 5%)<br>Find complex percentages of an amount (eg 17%, 28%, 63%))<br>Solve problems involving the use of percentages to make comparisons<br>Solve simple ratio problems - find the value of the parts, given the whole<br>Solve simple ratio problems - find the value of the whole and parts, given one part<br>Use a scale factor to solve problems involving similar shapes <br>Use scales to solve problems involving maps, such as finding distances<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".6_11").click(function () {
        $("#statements").html('<br>');
        $("#key").html('Convert between non-adjacent metric units length and mass from the smaller unit to the larger unit; e.g. centimetres to kilometres<br>Convert between non-adjacent metric units length and mass from the larger unit to the smaller unit; e.g. kilometres and centimetres<br>Convert between non-adjacent time units; e.g. hours to seconds<br>Solve problems involving converting between measures including miles and km<br>Recognise that shapes with the same areas can have different perimeters and vice versa<br>Calculate the area of a parallelogram<br>Calculate the area of a triangle<br>Calculate the volume of cuboid, including cubes<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".6_12").click(function () {
        $("#statements").html('<br>');
        $("#key").html('Use simple formulae expressed in words (e.g. time needed to cook a chicken: allow 20 minutes plus 40 minutes per kilogram)<br>Know the basic rules of algebraic notation<br>Find all combinations of two variables that solve a missing number problem with two unknowns<br>Find pairs of numbers that satisfy an equation with two unknowns e.g. a + b = 15<br>Express and solve missing number problems algebraically<br>Recognise and describe a linear sequence<br>Find the next terms in a linear sequence<br>Find a missing term in a linear sequence<br>Generate a linear sequence from its description<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".6_13").click(function () {
        $("#statements").html('<br>');
        $("#key").html("Interpret pie charts <br>Construct a pie chart by measuring angles<br>Understand the meaning of 'average' and calculate the mean of a set of discrete data<br>Interpret the mean of a set of discrete data<br>");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
});
