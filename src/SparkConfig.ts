import database from "@/.localdatastore/kv";

const ApplicationConfig = {
    "name": database.name,
    "domain": database.domain,
};

const SparkConfig = {
    "@app": ApplicationConfig,
    "@datastore": database,
    "remote": {
        "assets": "https://cdn.dwiphotography.com"
    }
};

export default SparkConfig;