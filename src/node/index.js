const {MongoClient} = require('mongodb');


async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    
    //const uri = "mongodb+srv://<user>:<password>@cluster0-z4izp.mongodb.net/test?retryWrites=true&w=majority";

   // "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri,{ useUnifiedTopology: true });
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);