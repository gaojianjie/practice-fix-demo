export default function(): void {
    if (process.env === "production") { 
        console.log(1);
    } else {
        console.log(arguments);
    }
}
