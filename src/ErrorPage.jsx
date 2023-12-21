import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id='error-page' className='pl-4 pt-2 mt-10 w-full h-full text-center'>
            <h1 className='font-bold text-2xl'>Oops!</h1>
            <br />
            <p>Sorry, an unexpected error has occurred.</p>
            <br />
            <p className='opacity-50'>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;