// Form Generation Inputs
let Inputs= {
    // [column]:{rule}
    status: {
        type: "boolean",
        // Input Name
        name: 'status',
        // Text Display when active
        active:"Active",
        // Text display when Inactive
        inactive:"InActive"
    },

    title: {
        type: "text",
        // Place Holder
        placeholder: "Please Input Name",
        // Label Text front of textbox
        label: "Title",
    },
    summary: {
        type: "textarea",
        // Place Holder
        placeholder: "Short Description",
        // Label Text front of textarea
        label: "Summary",
        // Text Area row
        rows: 6
    },
    // this is different , fix name is "icon"
    icon: {
        // Tell Which Column is image column
        column: 'icon',
        // Input Hidden Name
        name: 'icon'
    },

    "multiple-status":{
        type:"multiple",
        statuses:{
            "key":"text"
        }
    }

}
