export default [
    {
        path: "/program",
        component: "../layouts/ProgramLayout",
        routes: [
            { path: '/program', redirect: '/program/scratch' },
            { path: "/program/scratch", component: "./program/Scratch" },
            { path: "/program/microBit", component: "./program/MicroBit" },
            { component: '404' }
        ]
    },
    {
        path: "/user",
        component: "../layouts/UserLayout",
        routes: [
            { path: '/user', redirect: '/user/login' },
            { path: "/user/login", component: "./user/login/index" },
            { component: '404' }
        ]
     },
    {
        path: "/",
        component: "../layouts/HomeLayout",
        routes: [
            { path: '/', redirect: '/home' },
            { path: "/home", component: "./home/index" },
            { component: '404' }
        ]
    },
    // {
    //     path: "/",
    //     component: "../layouts/SecurityLayout",
    //     routes: [
    //         {
    //             path: "/",
    //             component: "../layouts/HomeLayout",
    //             authority: ["admin", "user"],
    //             routes: [
    //                 {
    //                     path: "/",
    //                     redirect: "/home"
    //                 },
    //                 {
    //                     path: "/home",
    //                     name: "home",
    //                     icon: "smile",
    //                     component: "./home/index"
    //                 },
    //                 {
    //                     component: "./404"
    //                 }
    //             ]
    //         },
    //         {
    //             component: "./404"
    //         }
    //     ]
        // routes: [
        //     {
        //         path: "/",
        //         component: "../layouts/BasicLayout",
        //         authority: ["admin", "user"],
        //         routes: [
        //             {
        //                 path: "/",
        //                 redirect: "/welcome"
        //             },
        //             {
        //                 path: "/welcome",
        //                 name: "welcome",
        //                 icon: "smile",
        //                 component: "./Welcome"
        //             },
        //             {
        //                 component: "./404"
        //             }
        //         ]
        //     },
        //     {
        //         component: "./404"
        //     }
        // ]
]
