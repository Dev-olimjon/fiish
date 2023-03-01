// postgres://olimjonmakhmudov26156@ep-autumn-morning-844658.ap-southeast-1.aws.neon.tech/neondb
import {Pool} from "pg";
let url:string = 'postgres://olimjonmakhmudov26156:Jq9YxIA4FQXV@ep-autumn-morning-844658-pooler.ap-southeast-1.aws.neon.tech/neondb'

export default new Pool({
    connectionString: url,
    ssl:{
        rejectUnauthorized: false
    }
})
