
$(document).ready(function () {
    $("form").on("submit",calculate);
});
function calculate(event)
{
    event.preventDefault(); // don't refesh the page function.

    //Gather all input
    
    let salary =  $("#salary").val();
    let credit  =  $("#credit").val();
    var submit1 =  $("#submit1");



    // OUTPUT!


    if(salary>=40000)
    {
        if(credit>=600)
        {
            //Loan approved
            $("div#denied").hide();
            $("div#buttonContainer").hide(); 
            $("div#approved, #alertApproved").show();
        }
        else
        {
            $("div#buttonContainer").show(); 
            submit1.hide();
               
        }

    }
    else
    {
        if(credit>=600)
        {           
            $("div#buttonContainer").show();
            submit1.hide();          
            

        }
        else
        {
            //loan denied
            $("div#buttonContainer, #alertApproved").hide();
            $("div#denied").show();    
        }
    }
}


function calculateJobs()
{
    let jobs = $("#job").val();
    if (jobs>=12)
    {
        //loan approved
        
        $("div#denied").hide();
        $("div#buttonContainer").hide(); 
        $("div#approved, #alertApproved").show();
    }
    else
    {
        //loan denied
        $("div#approved, #alertApproved").hide();
        $("div#buttonContainer").hide();
        $("div#denied").show(); 
        
    } 

}


