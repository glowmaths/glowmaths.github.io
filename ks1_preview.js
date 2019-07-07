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
        $("#statements").html('count to and across 100, forwards and backwards, beginning with 0 or 1, or from any given number<br>count, read and write numbers to 100 in numerals; <br>given a number, identify one more and one less<br>identify and represent numbers using objects and pictorial representations including the number line, and use the language of: equal to, more than, less than (fewer), most, least<br>the number line, and use the language of: equal to, more than, less than (fewer),<br>read and write numbers from 1 to 20 in numerals and words.<br>');
        $("#key").html('Say the number sequence to thirty<br>Represent numbers to thirty<br>count accurately up to 30 objects<br>Within the range 0 -30 count forwards from a given number to another given number.<br>Within the 30-1 range count backwards from a given number to another given number <br>Recognise the patterns in the number sequence 1-30 <br>Read numbers 0 - 20 in words and write using numerals<br>Read numbers 0 - 20 in numerals and write in words<br>Represent numbers 0 - 30 on a number line<br>Estimate numbers on a number line<br>Compare numbers identifying which one is more <br>Compare number identifying which one is less <br>Order numbers <br>Say 1 more than a number up to 30<br>Say 1 less than a number up to 30<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_2").click(function () {
        $("#statements").html('recognise and name common 2-D and 3-D shapes, including:<br>2-D shapes [for example, rectangles (including squares), circles and triangles]<br>3-D shapes [for example, cuboids (including cubes), pyramids and spheres].<br>');
        $("#key").html('Recognise 2 –D shapes<br>Recognise and name rectangles<br>Recognise and name squares<br>Recognise and name circles<br>Recognise and name triangles<br>Compare 2-D shapes and explain how they are similar or different<br>Recognise 3 –D shapes<br>Recognise and name cuboids<br>Recognise and name cubes<br>Recognise and name pyramids<br>Recognise and name spheres<br>Compare 3-D shapes and explain how they are similar or different<br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_3").click(function () {
        $("#statements").html('read, write and interpret mathematical statements involving addition (+), subtraction (–) and equals (=) signs<br>represent and use number bonds and related subtraction facts within 20<br>add and subtract one-digit and two-digit numbers to 20, including zero<br>solve one-step problems that involve addition and subtraction, using concrete objects and pictorial representations, and missing number problems <br>');
        $("#key").html('Add 1 to single digit numbers<br>Subtract 1 from single digit numbers<br>Write addition problems by combining two sets using + and =<br>Solve addition problems by increasing a set using + and =<br>Write subtraction problems by taking away, using - and =<br>Partition 5<br>Find and represent all addition number facts of 5 <br>Find and represent all subtraction number facts of 5 <br>Partition 6<br>Find and represent all addition number facts of 6<br>Find and represent all subtraction number facts of 6<br>Partition 7<br>Find and represent all addition number facts of 7 <br>Find and represent all subtraction number facts of 7 <br>Partition 8<br>Find and represent all addition number facts of 8 <br>Find and represent all subtraction number facts of 8 <br>Partition 9<br>Find and represent all addition number facts of 9<br>Find and represent all subtraction number facts of 9 <br>Partition 10<br>Find and represent all addition number facts of 10 <br>Find and represent all subtraction number facts of 10 <br>');
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
    $(".1_4").click(function () {
        $("#statements").html('count to and across 100, forwards and backwards, beginning with 0 or 1, or from any given number<br>count, read and write numbers to 100 in numerals; <br>given a number, identify one more and one less<br>identify and represent numbers using objects and pictorial representations including the number line, and use the language of: equal to, more than, less than (fewer), most, least<br>the number line, and use the language of: equal to, more than, less than (fewer),<br>read and write numbers from 1 to 20 in numerals and words.<br>');
        $("#key").html('Say the numbers to and across 100<br>Write numbers to 100<br>Count accurately up to 100 objects<br>Represent tens and ones as you count<br>Count forwards from a given number to another given number.<br>Count backwards from a given number to another given number <br>Recognise the patterns in the number sequence 1-100 <br>Represent numbers on a number line<br>Estimate numbers on a number line<br>Compare numbers identifying which one is more <br>Compare number identifying which one is less <br>Order numbers <br>Say 1 more than a number<br>Say 1 less than a number <br>');
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
});
