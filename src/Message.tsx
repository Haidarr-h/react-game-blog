interface MessageProps {
    name: string
}

// PascalCasing
function Message({name}:MessageProps) {

    // const name = 'Haidare';
    if (name)
        return <h1>Hello my good sir {name} <br /> How is your day sir ?</h1>

    return <h1>Hello World! Shut the fuck Up !!!!!!</h1>;
}

export default Message;