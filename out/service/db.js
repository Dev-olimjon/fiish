"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// postgres://olimjonmakhmudov26156@ep-autumn-morning-844658.ap-southeast-1.aws.neon.tech/neondb
const pg_1 = require("pg");
let url = "postgres://olimjonmakhmudov26156@ep-autumn-morning-844658.ap-southeast-1.aws.neon.tech/neondb";
exports.default = new pg_1.Pool({
    connectionString: url,
    // ssl:{
    //     rejectUnauthorized: false
    // }
});
