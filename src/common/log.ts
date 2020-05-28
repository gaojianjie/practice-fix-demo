export default function():void {
    if (process.env == 'production') {

    } else {
        console.log(arguments)
    }
}