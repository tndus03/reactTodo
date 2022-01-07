import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">isfp의 todo 리스트</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;