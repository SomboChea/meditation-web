// Table Response From API
let Response= {
    // Column Header
    "columns": [
        // Example
        "id",
        "name",
        "status"
    ],
    // Data For Each row
    "rows": [
        // Example
        {
            id:[0,1,],
            name:"",
            status:(true | false)
        }
    ],
    "rules": {
        columns:{
            // [column]:{rule}
            id:{
                type:"text",
                // Text Display in Header
                text:"ID"
            },
            status:{
                // Boolean can open and close
                type:"boolean",
                // Text Display when [status] true
                active:"Active",
                // Text Display when [status] false
                inactive:"InActive"
            },
            icon:{
                // Show <img>
                type:"icon"
            },
            avatar:{
                // Display Avatar Circle Image
                type:"avatar",
                // When Avatar not found use [Firstname] column
                name:"firstname"
            }
        },
        // If Have Create , Update ,Delete Action
        action:{
            editable:false,
            creatable:true,
            deletable:true
        }

    }

}


