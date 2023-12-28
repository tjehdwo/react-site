

const ListPage = ({action,deleteAction}) => {
    return (
        <div>
            <h2>리스트 페이지</h2>
            <ul>
                {actions.map((action) => (
                    <li key={action.id}>
                        {action.title} - {action.genre} - {action.date}
                        <button onClick ={() => deleteAction(action.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListPage;