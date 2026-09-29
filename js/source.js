$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************

$("#username").text(username);
$(".revenue-amt").text(revenueAmt);
$("#customer-num").text(customerNum);
$("#orders-amt").text(ordersAmt);
$("#issues-amt").text(issuesAmt);
$("#notification-num").text(notifAmt);

// sales
var salesHtml = "";
for (var i = 0; i < sales.length; i++) {
salesHtml += "<tr><td>" + sales[i].product + "</td><td>" + sales[i].quantity + "</td><td>" + sales[i].revenue + "</td></tr>";
}
$("#salesTableBody").html(salesHtml);

//customers
var customerHtml = "";
for (var i = 0; i < customers.length; i++) {
customerHtml += "<tr><td>" + customers[i].name + "</td><td>" + customers[i].email + "</td><td><span class='status status-active'>" + customers[i].status + "</span></td><td>" + customers[i].joined + "</td></tr>";
}
$("#customerTableBody").html(customerHtml);

//activities
var activityHtml = "";
for (var i = 0; i < activities.length; i++) {
activityHtml += "<li>" + activities[i].message + "</li>";
}
$("#activity-list").html(activityHtml);

// system status list
var statusHtml = "";
for (var i = 0; i < messages.length; i++) {
statusHtml += "<li>" + messages[i].messsage + "</li>";
}
$("#system-status-list").html(statusHtml);


var notifHtml = "";
for (var i = 0; i < notifications.length; i++) {
notifHtml += "<li>" + notifications[i].messsage + "</li>";
}
$("#notifications-list").html(notifHtml);

//tasks
var taskHtml = "";
for (var i = 0; i < tasks.length; i++) {
taskHtml += "<li>" + tasks[i].messsage + "</li>";
}
$("#tasks-list").html(taskHtml);


//jquery ui widget changes

//buttons
$("button").button();

    // b. Convert dashboardTabs into Tabs widget
    $("#dashboardTabs").tabs();

    // c. Convert customerDialog into a Dialog widget
    $("#customerDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 450,
        buttons: {
            "Create Customer": function () {
                var name = $("#customerName").val();
                var email = $("#customerEmail").val();
                if (!name || !email) {
                    alert("Please enter a name and email.");
                    return;
                }
                alert("Customer created: " + name);
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    // d. Convert accordion into an Accordion widget
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    // e. Event listener to open customer dialog when button is clicked
    $("#newCustomerButton").click(function () {
        $("#customerDialog").dialog("open");
    });

    // f. Convert customerDate into a Datepicker widget
    $("#customerDate").datepicker();

    });