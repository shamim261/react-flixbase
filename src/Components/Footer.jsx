import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer className="bg-white shadow dark:bg-gray-900 py-2">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © {new Date().getFullYear()}{' '}
                    <Link to="/" className="hover:underline">
                        FlixBase
                    </Link>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link
                            target="_blank"
                            to="https://facebook.com/5H4M1M.HUNT3R.official"
                            className="mr-4 hover:underline md:mr-6 "
                        >
                            Facebook
                        </Link>
                    </li>
                    <li>
                        <Link
                            target="_blank"
                            to="https://instagram.com/shamim_asholei_"
                            className="mr-4 hover:underline md:mr-6"
                        >
                            Instagram
                        </Link>
                    </li>
                    <li>
                        <Link
                            target="_blank"
                            to="https://github.com/shamim261"
                            className="mr-4 hover:underline md:mr-6"
                        >
                            Github
                        </Link>
                    </li>
                    <li>
                        <Link
                            target="_blank"
                            to="https://devshamim.xyz"
                            className="hover:underline"
                        >
                            Website
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
