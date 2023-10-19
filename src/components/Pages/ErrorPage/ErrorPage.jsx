import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div>
                <div className="flex-1 justify-center">
                    <div >
                        <div className='flex justify-center'>
                        <img src="https://i.ibb.co/b566Q3k/404.gif" alt="" /> <br/>
                        </div>
                        <div className="flex justify-center">
                        <Link to="/"><button className="bg-pink-600 text-white p-1 rounded-md">Go Home</button></Link>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;