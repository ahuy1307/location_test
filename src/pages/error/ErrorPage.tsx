import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className="flex flex-col gap-2">
            404 Not Found
            <Link to="/">Home from Link</Link>
        </div>
    );
}

export default ErrorPage;