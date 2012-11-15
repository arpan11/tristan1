
Ext.define('Sencha.view.Dashboard',{
    extend: 'Ext.navigation.View',
    xtype: 'dashboardView',
    //id: 'dashboardviewid',
    requires: [
    'Sencha.view.ProjectList',
    'Sencha.view.ProjectTab',
    'Sencha.view.Todolist',
    'Sencha.view.MessageList',
    'Sencha.view.MilestoneList',
    'Sencha.view.AddMilestone',
    'Sencha.view.AddTicket',
    'Sencha.view.MessageComment',
    'Sencha.view.TicketList',
    'Sencha.view.TicketComment',
    'Sencha.view.NewToDo',
    'Sencha.view.AddItemForm',
    'Sencha.view.Messaging',
    'Sencha.view.AddMilestone',
    'Sencha.view.AddTicket',
    'Sencha.view.MessageCommentPost',
    'Sencha.view.TicketCommentPost'
    ],
    config:{
        //fullscreen: true,
        //centered: true,
        //height: Ext.Viewport.getWindowHeight(),
        //width: Ext.Viewport.getWindowWidth(),
        id:'dashboardpnl',
        navigationBar: {
            backButton : {
                align : 'left',
                ui : 'back',
                style: 'width:120px;font-size:16px;',
                itemId: 'dashboardBack',
                handler: function(){
                    window.location.reload();
                }
            },
            items: [
            {
                xtype: 'button',
                id: 'logoutButton',
                style: 'margin-right:20px;',
                text: '<p style="font-size:10px">Logout</p>',
                height:18,
                width:60,
                align: 'right',
                hidden: false,
                handler: function(){
                    location.href = "/mlogout";
                }
            }
            ]
        },
        items:[
        {
            title: '<span style="margin-right:30px; font-size:15px;">Welcome to Xteamup</span>',
            xtype: 'projectList'
        }
        ]
    }
});