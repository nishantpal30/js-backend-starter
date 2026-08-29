import dotenv from "dotenv";

type ServerConfig ={
    PORT:Number;
}

function lodenv(){
    console.log("Environment variable is loading.....");
    dotenv.config();
}
lodenv();

export const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001,
}
