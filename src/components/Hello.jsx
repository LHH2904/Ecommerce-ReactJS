function Hello(props) {
    // cách sử dụng props linh hoạt hon
    // đổi ten props truyen vao
    const { name='Hieu', content: message } = props;

    return(
        // <div>Hello cac ban {props.name}, {props.content}</div>
        // <div>Hello cac ban {name}, {content}</div>
        <div>
            {message} {name}
        </div>
    )
}

export default Hello;